import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: { email?: string; company?: string; position?: string; resource?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim().slice(0, 200);
  const position = (body.position ?? "").trim().slice(0, 200);
  const resource = (body.resource ?? "").trim().slice(0, 200) || "Unknown resource";

  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  const from = process.env.RESEND_FROM ?? "Qualivio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      "[resource-download] RESEND_API_KEY or LEADS_EMAIL not set — lead logged only:",
      { email, company, position, resource }
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New resource download: ${resource}`,
      html: `
        <h2 style="font-family:system-ui,sans-serif">New download lead</h2>
        <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:6px 12px;color:#666">Resource</td><td style="padding:6px 12px"><strong>${esc(resource)}</strong></td></tr>
          <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#666">Company</td><td style="padding:6px 12px">${esc(company) || "—"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Position</td><td style="padding:6px 12px">${esc(position) || "—"}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("[resource-download] Resend error:", error);
      return NextResponse.json({ error: "Could not send notification." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[resource-download] Unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
