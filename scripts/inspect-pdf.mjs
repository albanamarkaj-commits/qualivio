import { PDFDocument, PDFName, PDFRawStream, PDFDict } from "pdf-lib";
import fs from "node:fs/promises";
import path from "node:path";

const src = process.argv[2];
const outDir = process.argv[3];
const bytes = await fs.readFile(src);
const pdf = await PDFDocument.load(bytes);
const pages = pdf.getPages();

console.log(`PDF: ${src}`);
console.log(`Pages: ${pages.length}`);
console.log(`Metadata: title="${pdf.getTitle()}" author="${pdf.getAuthor()}"`);

await fs.mkdir(outDir, { recursive: true });

const seenImages = new Set();

for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
  const page = pages[pageIdx];
  const { width, height } = page.getSize();
  let resources;
  try { resources = page.node.Resources(); } catch { continue; }
  if (!resources) continue;
  let xObjects;
  try { xObjects = resources.lookup(PDFName.of("XObject"), PDFDict); } catch { continue; }
  if (!xObjects) continue;
  const entries = xObjects.entries();
  for (const [name, ref] of entries) {
    let xObj;
    try { xObj = pdf.context.lookup(ref); } catch { continue; }
    if (!(xObj instanceof PDFRawStream)) continue;
    let subtype;
    try { subtype = xObj.dict.lookup(PDFName.of("Subtype")); } catch { continue; }
    if (!subtype || subtype.toString() !== "/Image") continue;
    const w = xObj.dict.lookup(PDFName.of("Width"));
    const h = xObj.dict.lookup(PDFName.of("Height"));
    const filter = xObj.dict.lookup(PDFName.of("Filter"));
    const filterStr = filter ? filter.toString() : "";
    const cs = xObj.dict.lookup(PDFName.of("ColorSpace"));
    const key = `${name.toString()}_${w}x${h}_${filterStr}`;
    console.log(`  Page ${pageIdx+1} (${width.toFixed(0)}x${height.toFixed(0)}pt): img ${name.toString()} ${w}x${h} filter=${filterStr} cs=${cs ? cs.toString() : ""} refNum=${ref.objectNumber}`);
    if (!seenImages.has(key)) {
      seenImages.add(key);
      if (filterStr.includes("DCTDecode")) {
        const outPath = path.join(outDir, `p${pageIdx+1}_${name.toString().replace("/","")}.jpg`);
        await fs.writeFile(outPath, xObj.contents);
        console.log(`    -> ${outPath}`);
      } else if (filterStr.includes("FlateDecode") && Number(w) <= 400 && Number(h) <= 400) {
        // Small Flate-encoded image - likely the logo. Save raw bytes for now.
        const outPath = path.join(outDir, `p${pageIdx+1}_${name.toString().replace("/","")}.flate.bin`);
        await fs.writeFile(outPath, xObj.contents);
        console.log(`    -> ${outPath} (raw flate, size=${xObj.contents.length})`);
      }
    }
  }
}
