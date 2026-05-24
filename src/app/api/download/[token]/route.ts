import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { verifyDownloadToken } from "@/lib/download-tokens";

export const runtime = "nodejs"; // we use node:fs, not edge

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const payload = verifyDownloadToken(token);

  if (!payload) {
    return NextResponse.json(
      { error: "This download link is invalid or has expired." },
      { status: 401 }
    );
  }

  // The token's `file` is signed by us, so it's trustworthy.
  // We still constrain to /private/resources/ + basename to defend against
  // any future bug that lets unsigned data into the path.
  const filename = path.basename(payload.file);
  if (!filename.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
  }
  const filePath = path.join(process.cwd(), "private", "resources", filename);

  let fileBuffer: Buffer;
  try {
    fileBuffer = await readFile(filePath);
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
