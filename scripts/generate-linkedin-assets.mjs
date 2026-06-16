/**
 * Generates LinkedIn document-post PDFs (carousels) for the two free
 * Qualivio resources. Each slide is a 1080x1080 PDF page so LinkedIn
 * renders the upload as a square swipable carousel.
 *
 * Output: marketing/linkedin/*.pdf
 *
 * Run:  node scripts/generate-linkedin-assets.mjs
 */

import {
  PDFDocument,
  StandardFonts,
  rgb,
  LineCapStyle,
  PDFName,
  PDFString,
} from "pdf-lib";
import fs from "node:fs/promises";
import path from "node:path";

// ---- Brand tokens (match globals.css) ----
const C = {
  white: rgb(1, 1, 1),
  dark: rgb(0.051, 0.051, 0.059), // #0D0D0F
  primary: rgb(0.486, 0.416, 0.969), // #7C6AF7
  accent: rgb(0.306, 0.804, 0.769), // #4ECDC4
  gold: rgb(0.969, 0.718, 0.192), // #F7B731
  muted: rgb(0.42, 0.416, 0.561), // #6B6A8F
  light: rgb(0.961, 0.957, 1), // #F5F4FF
  border: rgb(0.898, 0.894, 0.941), // #E5E4F0
  primaryFaded: rgb(0.486, 0.416, 0.969, 0.18),
};

const SIZE = 1080;

// ---- Drawing helpers ----

/** Word-wrap a long text string to fit within maxWidth at fontSize. */
function wrap(text, font, fontSize, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(candidate, fontSize) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawWrapped(page, text, opts) {
  const { x, y, font, size, color, maxWidth, lineHeight = 1.3 } = opts;
  const lines = wrap(text, font, size, maxWidth);
  lines.forEach((line, i) => {
    page.drawText(line, {
      x,
      y: y - i * size * lineHeight,
      size,
      font,
      color,
    });
  });
  return lines.length * size * lineHeight;
}

function drawAccentBar(page, x, y, w = 80, h = 6, color = C.primary) {
  page.drawRectangle({ x, y, width: w, height: h, color });
}

function drawPageIndicator(page, current, total, fonts, onDark = false) {
  const text = `${current} / ${total}`;
  page.drawText(text, {
    x: SIZE - 80,
    y: 60,
    size: 14,
    font: fonts.bold,
    color: onDark ? C.muted : C.muted,
  });
}

function drawFooterBrand(page, fonts, onDark = false) {
  const text = "qualiviopharma.com";
  page.drawText(text, {
    x: 80,
    y: 60,
    size: 14,
    font: fonts.bold,
    color: onDark ? C.accent : C.primary,
  });
}

/**
 * Draws the Qualivio Q mark (ring + diagonal tail) using the exact brand
 * geometry from the 300x300 master canvas, scaled into a box of `box` px
 * at bottom-left origin (ox, oy). pdf-lib uses a y-up coordinate system, so
 * the canvas y values are flipped.
 */
function drawQMark(page, ox, oy, box, color) {
  const s = box / 300;
  const fy = (cy) => oy + (300 - cy) * s; // flip canvas y into pdf y
  // Ring: center (140,135), radius 65, stroke 18, round
  page.drawCircle({
    x: ox + 140 * s,
    y: fy(135),
    size: 65 * s,
    borderColor: color,
    borderWidth: 18 * s,
  });
  // Tail: (190,180) -> (210,204), stroke 18, round caps
  page.drawLine({
    start: { x: ox + 190 * s, y: fy(180) },
    end: { x: ox + 210 * s, y: fy(204) },
    thickness: 18 * s,
    color,
    lineCap: LineCapStyle.Round,
  });
}

/**
 * Adds a clickable URI link annotation over a rectangle on the page.
 * rect is [x1, y1, x2, y2] in pdf-lib (y-up) coordinates.
 */
function addUriLink(page, rect, url) {
  const { context } = page.doc;
  const annot = context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: rect,
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(url) },
  });
  const ref = context.register(annot);
  page.node.set(PDFName.of("Annots"), context.obj([ref]));
}

// ---- Slide builders ----

function buildCoverSlide(page, fonts, { eyebrow, title, subtitle }) {
  // White background by default
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.white });

  // Eyebrow (gold, uppercase)
  page.drawText(eyebrow, {
    x: 80,
    y: SIZE - 180,
    size: 18,
    font: fonts.bold,
    color: C.gold,
  });

  // Title (big, dark, multi-line)
  const titleY = SIZE - 280;
  drawWrapped(page, title, {
    x: 80,
    y: titleY,
    font: fonts.bold,
    size: 78,
    color: C.dark,
    maxWidth: SIZE - 160,
    lineHeight: 1.1,
  });

  // Accent bar between title and subtitle
  drawAccentBar(page, 80, 480);

  // Subtitle
  drawWrapped(page, subtitle, {
    x: 80,
    y: 440,
    font: fonts.regular,
    size: 28,
    color: C.muted,
    maxWidth: SIZE - 160,
    lineHeight: 1.35,
  });
}

function buildNumberedSlide(
  page,
  fonts,
  { number, title, body },
) {
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.white });

  // Big faded number top-left
  page.drawText(number, {
    x: 80,
    y: SIZE - 280,
    size: 200,
    font: fonts.bold,
    color: C.primaryFaded,
  });

  // Title — measure how tall it actually rendered and lay everything below it.
  const titleY = SIZE - 460;
  const titleHeight = drawWrapped(page, title, {
    x: 80,
    y: titleY,
    font: fonts.bold,
    size: 58,
    color: C.dark,
    maxWidth: SIZE - 160,
    lineHeight: 1.1,
  });

  // Accent bar 32px below the last line of the title.
  const accentY = titleY - titleHeight - 32;
  drawAccentBar(page, 80, accentY);

  // Body text begins 50px below the accent bar so descender + breathing room
  // never collides with the title.
  drawWrapped(page, body, {
    x: 80,
    y: accentY - 50,
    font: fonts.regular,
    size: 26,
    color: C.muted,
    maxWidth: SIZE - 160,
    lineHeight: 1.45,
  });
}

function buildQuoteSlide(page, fonts, { quote, attribution }) {
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.dark });

  // Big quote mark
  page.drawText('"', {
    x: 80,
    y: SIZE - 200,
    size: 220,
    font: fonts.bold,
    color: C.gold,
  });

  // Quote text
  drawWrapped(page, quote, {
    x: 80,
    y: SIZE - 320,
    font: fonts.bold,
    size: 48,
    color: C.white,
    maxWidth: SIZE - 160,
    lineHeight: 1.25,
  });

  // Attribution
  page.drawText(attribution, {
    x: 80,
    y: 200,
    size: 22,
    font: fonts.regular,
    color: C.accent,
  });
}

function buildListSlide(page, fonts, { eyebrow, title, items }) {
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.white });

  // Eyebrow
  page.drawText(eyebrow, {
    x: 80,
    y: SIZE - 180,
    size: 18,
    font: fonts.bold,
    color: C.gold,
  });

  // Title
  const titleHeight = drawWrapped(page, title, {
    x: 80,
    y: SIZE - 260,
    font: fonts.bold,
    size: 56,
    color: C.dark,
    maxWidth: SIZE - 160,
    lineHeight: 1.15,
  });

  drawAccentBar(page, 80, SIZE - 260 - titleHeight - 30);

  // Items
  let y = SIZE - 260 - titleHeight - 100;
  for (const item of items) {
    // Arrow marker
    page.drawText("»", {
      x: 80,
      y,
      size: 24,
      font: fonts.bold,
      color: C.primary,
    });
    // Item text
    const h = drawWrapped(page, item, {
      x: 130,
      y,
      font: fonts.regular,
      size: 22,
      color: C.dark,
      maxWidth: SIZE - 240,
      lineHeight: 1.35,
    });
    y -= h + 16;
  }
}

function buildCtaSlide(page, fonts, { title, subtitle, url, link }) {
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.dark });

  // Big title
  drawWrapped(page, title, {
    x: 80,
    y: SIZE - 280,
    font: fonts.bold,
    size: 78,
    color: C.white,
    maxWidth: SIZE - 160,
    lineHeight: 1.1,
  });

  drawAccentBar(page, 80, 540, 80, 6, C.gold);

  // Subtitle
  drawWrapped(page, subtitle, {
    x: 80,
    y: 500,
    font: fonts.regular,
    size: 26,
    color: C.muted,
    maxWidth: SIZE - 160,
    lineHeight: 1.35,
  });

  // URL pill (purple button-like)
  const urlText = `${url}  »`;
  const urlSize = 28;
  const urlWidth = fonts.bold.widthOfTextAtSize(urlText, urlSize);
  const pillX = 80;
  const pillY = 280;
  const pillH = 80;
  const pillW = urlWidth + 80;
  page.drawRectangle({
    x: pillX,
    y: pillY,
    width: pillW,
    height: pillH,
    color: C.primary,
  });
  page.drawText(urlText, {
    x: pillX + 40,
    y: pillY + (pillH - urlSize) / 2 + 6,
    size: urlSize,
    font: fonts.bold,
    color: C.white,
  });

  // Make the pill a real clickable hyperlink when a full URL is provided.
  if (link) {
    addUriLink(page, [pillX, pillY, pillX + pillW, pillY + pillH], link);
  }
}

/** Violet cover with gold eyebrow, white title, and the Q mark. */
function buildVioletCoverSlide(page, fonts, { eyebrow, title, subtitle }) {
  page.drawRectangle({ x: 0, y: 0, width: SIZE, height: SIZE, color: C.primary });

  // Q mark, top-left
  drawQMark(page, 80, SIZE - 220, 120, C.white);

  // Eyebrow (gold, uppercase)
  page.drawText(eyebrow, {
    x: 80,
    y: SIZE - 320,
    size: 18,
    font: fonts.bold,
    color: C.gold,
  });

  // Title (big, white, multi-line)
  const titleY = SIZE - 400;
  const titleHeight = drawWrapped(page, title, {
    x: 80,
    y: titleY,
    font: fonts.bold,
    size: 76,
    color: C.white,
    maxWidth: SIZE - 160,
    lineHeight: 1.1,
  });

  // Gold accent bar below the title
  const accentY = titleY - titleHeight - 30;
  drawAccentBar(page, 80, accentY, 80, 6, C.gold);

  // Subtitle
  drawWrapped(page, subtitle, {
    x: 80,
    y: accentY - 48,
    font: fonts.regular,
    size: 27,
    color: C.light,
    maxWidth: SIZE - 160,
    lineHeight: 1.35,
  });
}

// ---- Carousel definitions ----

async function buildChecklistPdf() {
  const pdf = await PDFDocument.create();
  const fonts = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
  };
  const total = 5;
  const slides = [
    (p) =>
      buildCoverSlide(p, fonts, {
        eyebrow: "FREE DOWNLOAD",
        title: "PV Essentials Checklist",
        subtitle:
          "What every safety team should be checking. The boring, repeatable misses are the ones inspectors find.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "01",
        title: "Core PV obligations",
        body:
          "From MAH responsibilities to PSMF maintenance. The non-negotiables your team should not have to relearn each quarter.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "02",
        title: "ICSR timelines",
        body:
          "Clock-start rules, follow-up windows, regulatory submission deadlines. A single page your safety officers can keep at their desk.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "03",
        title: "Compliance checkpoints",
        body:
          "PSMF currency, QPPV oversight, RMP commitments. Quick reference for the questions inspectors ask first.",
      }),
    (p) =>
      buildCtaSlide(p, fonts, {
        title: "Get the full checklist.",
        subtitle: "Free download. Just leave your name and email.",
        url: "qualiviopharma.com/resources",
      }),
  ];
  slides.forEach((draw, i) => {
    const page = pdf.addPage([SIZE, SIZE]);
    draw(page);
    const onDark = i === slides.length - 1;
    drawFooterBrand(page, fonts, onDark);
    drawPageIndicator(page, i + 1, total, fonts, onDark);
  });
  return await pdf.save();
}

async function buildAuditingPdf() {
  const pdf = await PDFDocument.create();
  const fonts = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
  };
  const total = 7;
  const slides = [
    (p) =>
      buildCoverSlide(p, fonts, {
        eyebrow: "FREE GUIDE  •  26 PAGES",
        title: "Pharmacovigilance Auditing",
        subtitle:
          "Find what an inspector would find. First, calmly, while you can still fix it.",
      }),
    (p) =>
      buildQuoteSlide(p, fonts, {
        quote:
          "PV audits are how teams find out, calmly, what an inspection would find loudly.",
        attribution: "Qualivio",
      }),
    (p) =>
      buildListSlide(p, fonts, {
        eyebrow: "INSIDE THE GUIDE",
        title: "What we walk through",
        items: [
          "An internal PV audit, from scoping to CAPA closure",
          "The checkpoints inspectors actually focus on (and why)",
          "How to build a defensible audit trail without drowning in documentation",
          "Practical advice for small QPPV teams without dedicated quality functions",
        ],
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "01",
        title: "Risk-based audit scoping",
        body:
          "Where to point the audit so the findings actually matter. The areas that move inspection outcomes, not the easy boxes.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "02",
        title: "The checkpoints inspectors return to",
        body:
          "Year after year, the same handful of themes surface in inspection reports. Knowing them shortens preparation time meaningfully.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "03",
        title: "CAPAs that close, not loop",
        body:
          "How to write findings and corrective actions that get accepted on first review. The structure inspectors expect to see.",
      }),
    (p) =>
      buildCtaSlide(p, fonts, {
        title: "Read the full guide.",
        subtitle:
          "26 pages. Free. The framework we use with consulting clients across the EU and UK.",
        url: "qualiviopharma.com/resources",
      }),
  ];
  slides.forEach((draw, i) => {
    const page = pdf.addPage([SIZE, SIZE]);
    draw(page);
    const onDark = i === 1 || i === slides.length - 1;
    drawFooterBrand(page, fonts, onDark);
    drawPageIndicator(page, i + 1, total, fonts, onDark);
  });
  return await pdf.save();
}

async function buildHealthCanadaPdf() {
  const pdf = await PDFDocument.create();
  const fonts = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
  };
  const total = 8;
  const slides = [
    (p) =>
      buildVioletCoverSlide(p, fonts, {
        eyebrow: "REGULATORY UPDATE  •  22 MAY 2026",
        title: "Health Canada updates its GVP guidelines",
        subtitle:
          "GUI-0102: what a robust pharmacovigilance system looks like, from procedures to partners.",
      }),
    (p) =>
      buildListSlide(p, fonts, {
        eyebrow: "WHY IT MATTERS",
        title: "A robust PV system lets you",
        items: [
          "Monitor the safety and effectiveness of your drugs",
          "Notify Health Canada within the required timelines",
          "Take reliable, timely action based on the evidence",
          "Document everything to show the deliverables were met",
        ],
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "01",
        title: "Written procedures and deviations",
        body:
          "Document step-by-step procedures with unique identifiers, review them on a schedule, and train staff before revisions take effect. Investigate deviations and close them with effective CAPA.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "02",
        title: "Audits and change control",
        body:
          "Run a risk-based audit programme across every team and vendor in your PV activities. Use change control so every significant change is documented, assessed, approved, and dated.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "03",
        title: "Validation of computerised systems",
        body:
          "Validate any system that captures, processes, manages, or archives PV data, based on its criticality. Reassess and re-validate after software upgrades or data migration.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "04",
        title: "Qualified personnel and the QHCP",
        body:
          "Train everyone who may receive an ADR, name a person to oversee PV plus an alternate, and involve a qualified healthcare professional in seriousness, causality, signal, and report decisions.",
      }),
    (p) =>
      buildNumberedSlide(p, fonts, {
        number: "05",
        title: "Contractual agreements",
        body:
          "You can delegate activities, but you stay responsible. Put signed, dated agreements in place that define roles, audit rights, data exchange, and record retention, and review them regularly.",
      }),
    (p) =>
      buildCtaSlide(p, fonts, {
        title: "Read the full summary.",
        subtitle:
          "Our plain-English breakdown of Health Canada's updated GVP guidelines.",
        url: "qualiviopharma.com/regulatory-updates",
        link: "https://www.qualiviopharma.com/regulatory-updates",
      }),
  ];
  slides.forEach((draw, i) => {
    const page = pdf.addPage([SIZE, SIZE]);
    draw(page);
    const onDark = i === 0 || i === slides.length - 1;
    drawFooterBrand(page, fonts, onDark);
    drawPageIndicator(page, i + 1, total, fonts, onDark);
  });
  return await pdf.save();
}

// ---- Run ----

const outDir = path.join(process.cwd(), "marketing", "linkedin");
await fs.mkdir(outDir, { recursive: true });

const checklist = await buildChecklistPdf();
const checklistPath = path.join(outDir, "01-pv-essentials-checklist-linkedin.pdf");
await fs.writeFile(checklistPath, checklist);

const auditing = await buildAuditingPdf();
const auditingPath = path.join(outDir, "02-pharmacovigilance-auditing-linkedin.pdf");
await fs.writeFile(auditingPath, auditing);

const healthCanada = await buildHealthCanadaPdf();
const healthCanadaPath = path.join(
  outDir,
  "03-health-canada-gvp-linkedin.pdf",
);
await fs.writeFile(healthCanadaPath, healthCanada);

console.log("LinkedIn carousels generated:");
console.log("  ", checklistPath);
console.log("  ", auditingPath);
console.log("  ", healthCanadaPath);
