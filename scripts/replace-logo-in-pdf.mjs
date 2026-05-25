/**
 * Replaces the Qualivio Q-mark image inside a source PDF with the v1.1
 * brand-spec PNG, then writes the updated PDF.
 *
 * Usage:
 *   node scripts/replace-logo-in-pdf.mjs <input.pdf> <output.pdf> <new-logo.png> <xobject-name>
 *
 * Example:
 *   node scripts/replace-logo-in-pdf.mjs in.pdf out.pdf logo.png Im10
 *
 * The XObject reference name in the page Resources is preserved; only the
 * underlying object that it points to is swapped to the newly-embedded
 * image. Existing position, scale, and pagination are preserved.
 */

import { PDFDocument, PDFName, PDFDict } from "pdf-lib";
import fs from "node:fs/promises";

const [, , inPath, outPath, logoPath, targetName] = process.argv;
if (!inPath || !outPath || !logoPath || !targetName) {
  console.error("Usage: node replace-logo-in-pdf.mjs <input.pdf> <output.pdf> <logo.png> <xobjectName>");
  process.exit(1);
}

const pdfBytes = await fs.readFile(inPath);
const logoBytes = await fs.readFile(logoPath);

const pdf = await PDFDocument.load(pdfBytes);
const newImage = await pdf.embedPng(logoBytes);
const newImageRef = newImage.ref;

let replacements = 0;
const targetKey = PDFName.of(targetName);

for (const page of pdf.getPages()) {
  let resources;
  try { resources = page.node.Resources(); } catch { continue; }
  if (!resources) continue;
  let xObjects;
  try { xObjects = resources.lookup(PDFName.of("XObject"), PDFDict); } catch { continue; }
  if (!xObjects) continue;
  if (xObjects.has(targetKey)) {
    xObjects.set(targetKey, newImageRef);
    replacements++;
  }
}

const outBytes = await pdf.save();
await fs.writeFile(outPath, outBytes);

console.log(`Replaced /${targetName} on ${replacements} page(s).`);
console.log(`  Input : ${inPath}`);
console.log(`  Output: ${outPath}`);
console.log(`  Logo  : ${logoPath}`);
