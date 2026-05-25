/**
 * Adds a Qualivio watermark, footer, and metadata to a source PDF and writes
 * the protected copy to the project's private resources directory.
 *
 * Usage:
 *   node scripts/protect-pdf.mjs <source.pdf> <target.pdf> [title] [subject]
 *
 * Defaults to processing the Pharmacovigilance Auditing guide.
 */

import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_SOURCE =
  "C:/Users/user/Desktop/QUALIVIO/Qualivio PV Auditing/Qualivio_Pharmacovigilance_Auditing_fresh.pdf";
const DEFAULT_TARGET =
  "C:/Users/user/Desktop/Desktop/Qualivio/private/resources/Qualivio_Pharmacovigilance_Auditing.pdf";

const source = process.argv[2] ?? DEFAULT_SOURCE;
const target = process.argv[3] ?? DEFAULT_TARGET;
const title =
  process.argv[4] ?? "Pharmacovigilance Auditing";
const subject =
  process.argv[5] ??
  "A Qualivio resource for pharmacovigilance and life sciences professionals.";

const sourceBytes = await fs.readFile(source);
const pdfDoc = await PDFDocument.load(sourceBytes);

// Brand metadata. Visible under File → Properties in any PDF reader.
pdfDoc.setTitle(title);
pdfDoc.setAuthor("Qualivio");
pdfDoc.setSubject(subject);
pdfDoc.setKeywords([
  "pharmacovigilance",
  "Qualivio",
  "compliance",
  "EMA",
  "MHRA",
  "life sciences",
]);
pdfDoc.setProducer("Qualivio (qualiviopharma.com)");
pdfDoc.setCreator("Qualivio");
pdfDoc.setCreationDate(new Date());
pdfDoc.setModificationDate(new Date());

const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

const pages = pdfDoc.getPages();
for (const page of pages) {
  const { width, height } = page.getSize();

  // Diagonal watermark "QUALIVIO" centered, semi-transparent.
  const wmText = "QUALIVIO";
  const wmSize = 100;
  const wmRotation = 30; // degrees, counter-clockwise (text goes up-right)

  const wmW = helveticaBold.widthOfTextAtSize(wmText, wmSize);
  const wmH = wmSize * 0.7; // approximate cap height
  const rad = (wmRotation * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  // Place anchor so the rotated text's geometric center sits at the page center.
  const wmX = width / 2 - (wmW / 2) * cos + (wmH / 2) * sin;
  const wmY = height / 2 - (wmW / 2) * sin - (wmH / 2) * cos;

  page.drawText(wmText, {
    x: wmX,
    y: wmY,
    size: wmSize,
    font: helveticaBold,
    color: rgb(0.7, 0.7, 0.78),
    opacity: 0.12,
    rotate: degrees(wmRotation),
  });

  // Bottom footer with brand attribution on every page.
  const footerText = "© Qualivio  |  qualiviopharma.com  |  Confidential";
  const footerSize = 8;
  const footerW = helvetica.widthOfTextAtSize(footerText, footerSize);
  page.drawText(footerText, {
    x: width / 2 - footerW / 2,
    y: 18,
    size: footerSize,
    font: helvetica,
    color: rgb(0.45, 0.45, 0.5),
  });
}

const outBytes = await pdfDoc.save();
await fs.mkdir(path.dirname(target), { recursive: true });
await fs.writeFile(target, outBytes);

console.log("Protected PDF saved.");
console.log("  Source:", source);
console.log("  Target:", target);
console.log("  Pages: ", pages.length);
console.log("  Size:  ", outBytes.length, "bytes");
