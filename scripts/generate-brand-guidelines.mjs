/**
 * Generates Qualivio Brand Guidelines & Identity System v1.2 as a PDF.
 *
 * v1.2 changes vs v1.1:
 * - Wordmark typeface is now Sora (Medium 500 for the wordmark, Bold 700
 *   for headings) instead of the PDF's default Helvetica.
 * - New typography section documenting Sora across web + video.
 * - New digital & social specs section: website fonts, /intro MP4,
 *   LinkedIn banner v3 dimensions.
 * - Updated taglines and copy that landed across the website.
 *
 * Output: marketing/qualivio_brand_guidelines_v1.2.pdf
 *
 * Run: node scripts/generate-brand-guidelines.mjs
 */

import { PDFDocument, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "node:fs/promises";

// ---------- Palette ----------
const C = {
  dark: rgb(0.051, 0.051, 0.059), // #0D0D0F
  white: rgb(1, 1, 1),
  black: rgb(0, 0, 0),
  violet: rgb(0.486, 0.416, 0.969), // #7C6AF7
  teal: rgb(0.306, 0.804, 0.769), // #4ECDC4
  gold: rgb(0.969, 0.718, 0.192), // #F7B731
  muted: rgb(0.42, 0.416, 0.561), // #6B6A8F
  border: rgb(0.898, 0.894, 0.941), // #E5E4F0
  lightBg: rgb(0.961, 0.957, 1), // #F5F4FF
  e8e6ff: rgb(0.91, 0.902, 1), // #E8E6FF
};

// ---------- Page size (US Letter, matches v1.1) ----------
const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN_X = 50;

// ---------- Helpers ----------

function hex(h) {
  const m = h.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) throw new Error(`Bad hex: ${h}`);
  return rgb(
    parseInt(m[1], 16) / 255,
    parseInt(m[2], 16) / 255,
    parseInt(m[3], 16) / 255,
  );
}

/**
 * Draw the brand Q mark at (cx, cy) at the given size, in the given
 * stroke colour. Geometry follows the v1.1 master spec (ring at
 * 140,135 r=65, tail 190,180 -> 210,204 on a 300x300 canvas).
 */
function drawQMark(page, { cx, cy, size, color }) {
  const k = size / 300;
  // Ring centre on the original 300x300 canvas: (140, 135)
  const ringCx = cx + (140 - 150) * k;
  const ringCy = cy + (150 - 135) * k; // pdf-lib y goes up, so flip dy
  const r = 65 * k;
  const strokeWidth = 18 * k;

  page.drawCircle({
    x: ringCx,
    y: ringCy,
    size: r,
    borderColor: color,
    borderWidth: strokeWidth,
    borderLineCap: 1, // round
  });

  // Tail: from (190, 180) to (210, 204) on 300x300
  const t1x = cx + (190 - 150) * k;
  const t1y = cy + (150 - 180) * k;
  const t2x = cx + (210 - 150) * k;
  const t2y = cy + (150 - 204) * k;
  page.drawLine({
    start: { x: t1x, y: t1y },
    end: { x: t2x, y: t2y },
    thickness: strokeWidth,
    color,
    lineCap: 1,
  });
}

/** Word-wrap text to fit a maximum width. */
function wrap(font, text, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawText(page, text, opts) {
  const { x, y, font, size, color, maxWidth, lineHeight = 1.4 } = opts;
  const lines = maxWidth ? wrap(font, text, size, maxWidth) : [text];
  lines.forEach((line, i) => {
    page.drawText(line, { x, y: y - i * size * lineHeight, size, font, color });
  });
  return lines.length * size * lineHeight;
}

function drawAccentBar(page, x, y, w = 60, h = 4, color = C.violet) {
  page.drawRectangle({ x, y, width: w, height: h, color });
}

function drawPageNumber(page, num, fonts) {
  page.drawText(`Qualivio Brand Guidelines · Confidential · v1.2`, {
    x: MARGIN_X,
    y: 28,
    size: 8,
    font: fonts.regular,
    color: C.muted,
  });
  page.drawText(`${num}`, {
    x: PAGE_W - MARGIN_X - 10,
    y: 28,
    size: 8,
    font: fonts.regular,
    color: C.muted,
  });
}

function drawTopBar(page, label, fonts) {
  page.drawText(`QUALIVIO BRAND GUIDELINES`, {
    x: MARGIN_X,
    y: PAGE_H - 38,
    size: 8,
    font: fonts.bold,
    color: C.violet,
  });
  if (label) {
    const w = fonts.regular.widthOfTextAtSize(label, 8);
    page.drawText(label, {
      x: PAGE_W - MARGIN_X - w,
      y: PAGE_H - 38,
      size: 8,
      font: fonts.regular,
      color: C.muted,
    });
  }
  // thin underline
  page.drawLine({
    start: { x: MARGIN_X, y: PAGE_H - 48 },
    end: { x: PAGE_W - MARGIN_X, y: PAGE_H - 48 },
    thickness: 0.5,
    color: C.border,
  });
}

function drawSectionHeading(page, num, title, y, fonts) {
  page.drawText(num, {
    x: MARGIN_X,
    y,
    size: 11,
    font: fonts.bold,
    color: C.violet,
  });
  page.drawText(title, {
    x: MARGIN_X + 30,
    y,
    size: 18,
    font: fonts.bold,
    color: C.dark,
  });
  drawAccentBar(page, MARGIN_X, y - 12, 40, 3, C.gold);
  return y - 40;
}

// ---------- Main ----------

const pdf = await PDFDocument.create();
pdf.registerFontkit(fontkit);

const [soraRegBytes, soraMedBytes, soraBoldBytes] = await Promise.all([
  fs.readFile("./marketing/fonts/Sora-Regular.ttf"),
  fs.readFile("./marketing/fonts/Sora-Medium.ttf"),
  fs.readFile("./marketing/fonts/Sora-Bold.ttf"),
]);
const F = {
  regular: await pdf.embedFont(soraRegBytes, { subset: true }),
  medium: await pdf.embedFont(soraMedBytes, { subset: true }),
  bold: await pdf.embedFont(soraBoldBytes, { subset: true }),
};

pdf.setTitle("Qualivio Brand Guidelines v1.2");
pdf.setAuthor("Qualivio");
pdf.setSubject("Brand identity system and usage rules");
pdf.setProducer("Qualivio (qualiviopharma.com)");
pdf.setCreator("Qualivio Brand Generator");
pdf.setKeywords(["Qualivio", "Brand Guidelines", "Identity"]);
pdf.setCreationDate(new Date());
pdf.setModificationDate(new Date());

// ============================================================
// Page 1 — Cover
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  p.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: C.dark });

  // Top eyebrow
  p.drawText("QUALIVIO BRAND GUIDELINES", {
    x: MARGIN_X,
    y: PAGE_H - 70,
    size: 9,
    font: F.bold,
    color: C.gold,
  });
  drawAccentBar(p, MARGIN_X, PAGE_H - 80, 40, 3, C.gold);

  // Centered lockup
  drawQMark(p, { cx: PAGE_W / 2, cy: PAGE_H / 2 + 70, size: 160, color: C.white });
  const wordSize = 56;
  const wordWidth = F.medium.widthOfTextAtSize("Qualivio", wordSize);
  p.drawText("Qualivio", {
    x: PAGE_W / 2 - wordWidth / 2,
    y: PAGE_H / 2 - 30,
    size: wordSize,
    font: F.medium,
    color: C.e8e6ff,
  });

  const taglineSize = 11;
  const tagline = "PHARMACOVIGILANCE · QUALITY ASSURANCE | LIFE SCIENCES";
  const tw = F.medium.widthOfTextAtSize(tagline, taglineSize);
  p.drawText(tagline, {
    x: PAGE_W / 2 - tw / 2,
    y: PAGE_H / 2 - 60,
    size: taglineSize,
    font: F.medium,
    color: C.gold,
  });

  // Subtitle
  const sub = "Brand Guidelines & Identity System";
  const subW = F.regular.widthOfTextAtSize(sub, 14);
  p.drawText(sub, {
    x: PAGE_W / 2 - subW / 2,
    y: 130,
    size: 14,
    font: F.regular,
    color: C.white,
  });

  // Version line
  const versionLine = "OBSIDIAN EDGE  ·  VERSION 1.2  ·  2026";
  const vlW = F.bold.widthOfTextAtSize(versionLine, 8);
  p.drawText(versionLine, {
    x: PAGE_W / 2 - vlW / 2,
    y: 100,
    size: 8,
    font: F.bold,
    color: C.gold,
  });

  // Decorative accent bars at bottom
  drawAccentBar(p, PAGE_W / 2 - 40, 70, 35, 2, C.gold);
  drawAccentBar(p, PAGE_W / 2 + 5, 70, 35, 2, C.teal);

  // URL bottom
  const url = "www.qualiviopharma.com";
  const urlW = F.regular.widthOfTextAtSize(url, 9);
  p.drawText(url, {
    x: PAGE_W / 2 - urlW / 2,
    y: 50,
    size: 9,
    font: F.regular,
    color: C.teal,
  });
}

// ============================================================
// Page 2 — Brand Philosophy + Personality
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Brand Overview", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "01", "BRAND PHILOSOPHY", y, F);
  p.drawText("Clear thinking for complex regulations.", {
    x: MARGIN_X,
    y,
    size: 18,
    font: F.medium,
    color: C.dark,
  });
  y -= 30;
  drawText(p, "A brand built on trust and precision.", {
    x: MARGIN_X,
    y,
    font: F.medium,
    size: 13,
    color: C.violet,
  });
  y -= 30;
  y -=
    drawText(
      p,
      "Qualivio makes pharmacovigilance, quality assurance, and life sciences knowledge accessible, modern, and actionable. We combine scientific rigour with clear communication, for professionals and companies who need both depth and clarity.",
      {
        x: MARGIN_X,
        y,
        font: F.regular,
        size: 11,
        color: C.dark,
        maxWidth: PAGE_W - 2 * MARGIN_X,
        lineHeight: 1.6,
      },
    );

  y -= 30;
  y = drawSectionHeading(p, "02", "BRAND PERSONALITY", y, F);

  const traits = [
    { label: "Trustworthy", body: "We earn confidence through accuracy and transparency." },
    { label: "Modern", body: "A fresh perspective on an established discipline." },
    { label: "Approachable", body: "Rigour without intimidation." },
    { label: "Clear", body: "Complex science, explained without unnecessary complexity." },
    { label: "Expert", body: "Deep domain knowledge, speaking to professionals." },
    { label: "Precise", body: "Every word and design choice earns its place." },
  ];

  const colW = (PAGE_W - 2 * MARGIN_X - 20) / 2;
  for (let i = 0; i < traits.length; i++) {
    const t = traits[i];
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN_X + col * (colW + 20);
    const ty = y - row * 70;
    p.drawText(t.label, { x, y: ty, size: 12, font: F.bold, color: C.violet });
    drawText(p, t.body, {
      x,
      y: ty - 18,
      font: F.regular,
      size: 10,
      color: C.dark,
      maxWidth: colW,
      lineHeight: 1.5,
    });
  }

  drawPageNumber(p, 2, F);
}

// ============================================================
// Page 3 — Brand Voice
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Brand Voice", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "03", "BRAND VOICE", y, F);

  const voiceLines = [
    {
      label: "We write in",
      body: "plain, confident English, with no unnecessary complexity.",
    },
    { label: "We are", body: "authoritative but never arrogant." },
    { label: "We educate", body: "without condescending to our audience." },
    { label: "We avoid", body: "buzzwords, vague claims, and over-promising." },
  ];

  for (const v of voiceLines) {
    p.drawText(v.label, {
      x: MARGIN_X,
      y,
      size: 11,
      font: F.bold,
      color: C.violet,
    });
    drawText(p, v.body, {
      x: MARGIN_X + 100,
      y,
      font: F.regular,
      size: 11,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X - 100,
      lineHeight: 1.5,
    });
    y -= 36;
  }

  y -= 20;
  y = drawSectionHeading(p, "03.1", "PRIMARY TAGLINES", y, F);

  const taglines = [
    "Pharmacovigilance · Quality Assurance | Life Sciences",
    "Clear thinking for complex regulations.",
    "Trusted insights, education and consulting.",
  ];
  for (const t of taglines) {
    p.drawCircle({ x: MARGIN_X + 4, y: y + 4, size: 2, color: C.gold });
    p.drawText(t, {
      x: MARGIN_X + 18,
      y,
      size: 12,
      font: F.medium,
      color: C.dark,
    });
    y -= 26;
  }

  drawPageNumber(p, 3, F);
}

// ============================================================
// Page 4 — Primary Logo
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Logo System", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "04", "PRIMARY LOGO", y, F);

  // Two columns: Dark variant vs Light reverse
  const colW = (PAGE_W - 2 * MARGIN_X - 30) / 2;
  // Left — primary on dark
  p.drawRectangle({
    x: MARGIN_X,
    y: y - 220,
    width: colW,
    height: 200,
    color: C.dark,
    borderColor: C.border,
    borderWidth: 0.5,
  });
  drawQMark(p, {
    cx: MARGIN_X + colW / 2 - 50,
    cy: y - 120,
    size: 70,
    color: C.white,
  });
  const wmSize = 28;
  p.drawText("Qualivio", {
    x: MARGIN_X + colW / 2 - 30,
    y: y - 130,
    size: wmSize,
    font: F.medium,
    color: C.e8e6ff,
  });

  p.drawText("PRIMARY · ON DARK BACKGROUND", {
    x: MARGIN_X,
    y: y - 240,
    size: 8,
    font: F.bold,
    color: C.muted,
  });

  // Right — reverse on light
  p.drawRectangle({
    x: MARGIN_X + colW + 30,
    y: y - 220,
    width: colW,
    height: 200,
    color: C.white,
    borderColor: C.border,
    borderWidth: 0.5,
  });
  drawQMark(p, {
    cx: MARGIN_X + colW + 30 + colW / 2 - 50,
    cy: y - 120,
    size: 70,
    color: C.dark,
  });
  p.drawText("Qualivio", {
    x: MARGIN_X + colW + 30 + colW / 2 - 30,
    y: y - 130,
    size: wmSize,
    font: F.medium,
    color: C.dark,
  });
  p.drawText("REVERSE · ON LIGHT BACKGROUND", {
    x: MARGIN_X + colW + 30,
    y: y - 240,
    size: 8,
    font: F.bold,
    color: C.muted,
  });

  y -= 270;

  // Size demo
  y = drawSectionHeading(p, "04.1", "WORDMARK AT MULTIPLE SIZES", y, F);
  const sizes = [
    { label: "Small  20pt", size: 20 },
    { label: "Medium 32pt", size: 32 },
    { label: "Large  48pt", size: 48 },
  ];
  let dx = MARGIN_X;
  for (const s of sizes) {
    p.drawText(s.label, {
      x: dx,
      y,
      size: 7,
      font: F.regular,
      color: C.muted,
    });
    p.drawText("Qualivio", {
      x: dx,
      y: y - 12 - s.size * 0.4,
      size: s.size,
      font: F.medium,
      color: C.dark,
    });
    dx += F.medium.widthOfTextAtSize("Qualivio", s.size) + 40;
  }

  drawPageNumber(p, 4, F);
}

// ============================================================
// Page 5 — Q Mark Technical Anatomy
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Q Mark Specifications", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "05", "Q MARK · TECHNICAL ANATOMY", y, F);

  drawText(
    p,
    "Pure geometric form: perfect circle ring + short diagonal tail at 50.19°. Ring and tail share identical stroke weight (18px). All values mathematically defined and non-negotiable across all applications.",
    {
      x: MARGIN_X,
      y,
      font: F.regular,
      size: 10,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X,
      lineHeight: 1.5,
    },
  );

  y -= 60;

  // Large Q sample on left, geometry on right
  p.drawRectangle({
    x: MARGIN_X,
    y: y - 200,
    width: 200,
    height: 200,
    color: C.dark,
    borderColor: C.border,
    borderWidth: 0.5,
  });
  drawQMark(p, {
    cx: MARGIN_X + 100,
    cy: y - 100,
    size: 130,
    color: C.white,
  });

  // Geometry table
  const tableX = MARGIN_X + 230;
  const rows = [
    ["Element type", "circle, stroke only"],
    ["Centre", "(140, 135)"],
    ["Radius", "65 px"],
    ["Stroke width", "18 px"],
    ["Stroke linecap", "round"],
    ["Fill", "none"],
    ["", ""],
    ["Tail start", "(190, 180)"],
    ["Tail end", "(210, 204)"],
    ["Tail angle", "50.19°"],
    ["Tail length (visual)", "49.24 px"],
    ["Ring : tail stroke", "1 : 1"],
  ];

  p.drawText("MASTER COORDINATES (300×300 CANVAS)", {
    x: tableX,
    y: y - 10,
    size: 9,
    font: F.bold,
    color: C.violet,
  });
  let ry = y - 30;
  for (const [k, v] of rows) {
    if (k) {
      p.drawText(k, { x: tableX, y: ry, size: 9, font: F.medium, color: C.dark });
      p.drawText(v, { x: tableX + 130, y: ry, size: 9, font: F.regular, color: C.muted });
    }
    ry -= 14;
  }

  y -= 220;

  y = drawSectionHeading(p, "05.1", "REFERENCE SVG", y, F);

  const svgCode = [
    '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">',
    '  <circle cx="140" cy="135" r="65" fill="none"',
    '    stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>',
    '  <line x1="190" y1="180" x2="210" y2="204"',
    '    stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>',
    "</svg>",
  ];
  let sy = y;
  for (const line of svgCode) {
    p.drawText(line, {
      x: MARGIN_X,
      y: sy,
      size: 8,
      font: F.regular,
      color: C.dark,
    });
    sy -= 12;
  }

  drawPageNumber(p, 5, F);
}

// ============================================================
// Page 6 — Color Variants
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Color System", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "06", "Q MARK · COLOUR VARIANTS", y, F);

  const variants = [
    { name: "PRIMARY (DARK)", bg: hex("#0D0D0F"), stroke: C.white, hexLabel: "#0D0D0F · #FFFFFF" },
    { name: "VIOLET", bg: hex("#7C6AF7"), stroke: C.white, hexLabel: "#7C6AF7 · #FFFFFF" },
    { name: "TEAL", bg: hex("#4ECDC4"), stroke: C.white, hexLabel: "#4ECDC4 · #FFFFFF" },
    { name: "GOLD", bg: hex("#F7B731"), stroke: C.white, hexLabel: "#F7B731 · #FFFFFF" },
    { name: "SURFACE", bg: hex("#1A1A1E"), stroke: C.white, hexLabel: "#1A1A1E · #FFFFFF" },
    { name: "LIGHT REVERSE", bg: hex("#FFFFFF"), stroke: C.dark, hexLabel: "#FFFFFF · #0D0D0F" },
  ];

  const cellW = 120;
  const cellH = 130;
  const gap = 30;
  const cols = 3;

  for (let i = 0; i < variants.length; i++) {
    const v = variants[i];
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = MARGIN_X + col * (cellW + gap);
    const cy = y - row * (cellH + 60);

    p.drawRectangle({
      x,
      y: cy - cellH,
      width: cellW,
      height: cellH,
      color: v.bg,
      borderColor: C.border,
      borderWidth: 0.5,
    });
    drawQMark(p, {
      cx: x + cellW / 2,
      cy: cy - cellH / 2,
      size: 70,
      color: v.stroke,
    });
    p.drawText(v.name, {
      x,
      y: cy - cellH - 16,
      size: 8,
      font: F.bold,
      color: C.dark,
    });
    p.drawText(v.hexLabel, {
      x,
      y: cy - cellH - 30,
      size: 7,
      font: F.regular,
      color: C.muted,
    });
  }

  drawPageNumber(p, 6, F);
}

// ============================================================
// Page 7 — Clear Space & Usage Rules
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Clear Space & Usage", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "07", "CLEAR SPACE & USAGE RULES", y, F);

  const sections = [
    {
      title: "SIZING",
      lines: [
        "Minimum icon size: 24 × 24 px",
        "Minimum full wordmark width: 120 px",
        "Recommended social media profile picture: 300 × 300 px",
        "Recommended retina (2×) export: 600 × 600 px",
      ],
    },
    {
      title: "CLEAR SPACE",
      lines: [
        "Maintain clear space equal to the Q height on all four sides.",
        "No content, text, or visual element may enter the clear space zone.",
      ],
    },
    {
      title: "CONSTRUCTION INTEGRITY",
      lines: [
        "Ring stroke width and tail stroke width MUST remain identical.",
        "Stroke linecap MUST be round on both ring and tail.",
        "The Q mark is a single unit — never separate the ring from the tail.",
      ],
    },
    {
      title: "PROHIBITED MODIFICATIONS",
      lines: [
        "Never stretch, rotate, skew, or distort the logo.",
        "Never apply gradients, drop shadows, glows, or any visual effects.",
        "Never use the Q in any colour other than approved variants.",
        "Never place on a busy background without sufficient contrast.",
        "Never reproduce below minimum size thresholds.",
        "Never modify the coordinate values or geometric proportions.",
      ],
    },
    {
      title: "CONTRAST",
      lines: [
        "White Q on any dark or saturated approved variant.",
        "Dark Q (#0D0D0F) only on white or very light backgrounds.",
        "All combinations must maintain WCAG AA contrast minimum (4.5 : 1).",
      ],
    },
  ];

  for (const sec of sections) {
    p.drawText(sec.title, {
      x: MARGIN_X,
      y,
      size: 10,
      font: F.bold,
      color: C.violet,
    });
    y -= 18;
    for (const ln of sec.lines) {
      p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
      drawText(p, ln, {
        x: MARGIN_X + 14,
        y,
        font: F.regular,
        size: 9,
        color: C.dark,
        maxWidth: PAGE_W - 2 * MARGIN_X - 14,
        lineHeight: 1.4,
      });
      y -= 14;
    }
    y -= 10;
  }

  drawPageNumber(p, 7, F);
}

// ============================================================
// Page 8 — Typography (NEW)
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Typography", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "08", "TYPOGRAPHY", y, F);

  drawText(
    p,
    "Qualivio uses a single typeface across every brand surface — wordmark, headings, body, video, and print. The chosen family is Sora, a modern geometric sans designed by Indestructible Type Co. and licensed under the SIL Open Font License.",
    {
      x: MARGIN_X,
      y,
      font: F.regular,
      size: 10,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X,
      lineHeight: 1.6,
    },
  );
  y -= 70;

  // Weights demo
  p.drawText("WEIGHTS IN USE", {
    x: MARGIN_X,
    y,
    size: 9,
    font: F.bold,
    color: C.violet,
  });
  y -= 22;

  const weights = [
    { name: "Sora Regular · 400", font: F.regular, weight: "400", usage: "Body copy, long-form text" },
    { name: "Sora Medium · 500", font: F.medium, weight: "500", usage: "Wordmark, eyebrows, callouts" },
    { name: "Sora Bold · 700", font: F.bold, weight: "700", usage: "Headings, emphasis" },
  ];

  for (const w of weights) {
    p.drawText("Qualivio", {
      x: MARGIN_X,
      y,
      size: 34,
      font: w.font,
      color: C.dark,
    });
    p.drawText(w.name, {
      x: MARGIN_X + 180,
      y: y + 16,
      size: 9,
      font: F.bold,
      color: C.violet,
    });
    p.drawText(w.usage, {
      x: MARGIN_X + 180,
      y: y + 2,
      size: 9,
      font: F.regular,
      color: C.muted,
    });
    y -= 44;
  }

  y -= 10;
  p.drawText("WEBSITE STACK", {
    x: MARGIN_X,
    y,
    size: 9,
    font: F.bold,
    color: C.violet,
  });
  y -= 18;
  const webStack = [
    "Display + Headings: Sora (400 / 500 / 700)",
    "Body + Forms: DM Sans (400 / 500)",
    "Code samples: monospaced system stack",
  ];
  for (const w of webStack) {
    p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
    p.drawText(w, {
      x: MARGIN_X + 14,
      y,
      size: 9,
      font: F.regular,
      color: C.dark,
    });
    y -= 14;
  }

  y -= 12;
  p.drawText("CROSS-CHANNEL CONSISTENCY", {
    x: MARGIN_X,
    y,
    size: 9,
    font: F.bold,
    color: C.violet,
  });
  y -= 18;
  drawText(
    p,
    "Sora must be used for the Qualivio wordmark in every channel: website, /intro MP4, LinkedIn banner, social posts, presentations, and print. Fallbacks (Inter, Arial) are permitted only when Sora cannot be loaded; never substitute by choice.",
    {
      x: MARGIN_X,
      y,
      font: F.regular,
      size: 9,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X,
      lineHeight: 1.5,
    },
  );

  drawPageNumber(p, 8, F);
}

// ============================================================
// Page 9 — Digital & Social Specs (NEW)
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Digital & Social", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "09", "DIGITAL & SOCIAL SPECS", y, F);

  // Website
  p.drawText("WEBSITE", {
    x: MARGIN_X,
    y,
    size: 10,
    font: F.bold,
    color: C.violet,
  });
  y -= 18;
  const webLines = [
    "URL: www.qualiviopharma.com",
    "Hero background: #FFFFFF (white)",
    "Body background: alternating #FFFFFF and #0D0D0F dark sections",
    "Tagline (gold eyebrow): PHARMACOVIGILANCE · QUALITY ASSURANCE | LIFE SCIENCES",
    "Wordmark in header and footer: Sora Medium 500, colour #E8E6FF on dark",
  ];
  for (const l of webLines) {
    p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
    drawText(p, l, {
      x: MARGIN_X + 14,
      y,
      font: F.regular,
      size: 9,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X - 14,
      lineHeight: 1.4,
    });
    y -= 14;
  }
  y -= 12;

  // Intro MP4
  p.drawText("INTRO ANIMATION (/intro)", {
    x: MARGIN_X,
    y,
    size: 10,
    font: F.bold,
    color: C.violet,
  });
  y -= 18;
  const introLines = [
    "Resolution: 1080 × 1080 (square, LinkedIn feed) — also exportable at 1920 × 1080 and 1080 × 1920",
    "Duration: ~5 seconds; 30 fps; H.264 + AAC in MP4",
    "Background: pure #000000",
    "Audio: keyboard-typing SFX per letter, soft bell click on Q completion",
    "Source: marketing/intro-video (Remotion); regenerate via `npm run intro:render:square`",
  ];
  for (const l of introLines) {
    p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
    drawText(p, l, {
      x: MARGIN_X + 14,
      y,
      font: F.regular,
      size: 9,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X - 14,
      lineHeight: 1.4,
    });
    y -= 14;
  }
  y -= 12;

  // LinkedIn banner
  p.drawText("LINKEDIN COVER BANNER", {
    x: MARGIN_X,
    y,
    size: 10,
    font: F.bold,
    color: C.violet,
  });
  y -= 18;
  const linkedinLines = [
    "Dimensions: 1584 × 396 px (LinkedIn personal/company cover)",
    "Background: pure #000000",
    "Lockup: Q mark + Qualivio wordmark + gold tagline + teal URL",
    "Safe area: bottom-left ~220 × 220 px reserved for the profile picture",
    "Source: marketing/intro-video/src/LinkedInBanner.tsx; regenerate via `npm run linkedin:render:banner`",
    "Output: marketing/linkedin/qualivio_linkedin_banner_v3.png",
  ];
  for (const l of linkedinLines) {
    p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
    drawText(p, l, {
      x: MARGIN_X + 14,
      y,
      font: F.regular,
      size: 9,
      color: C.dark,
      maxWidth: PAGE_W - 2 * MARGIN_X - 14,
      lineHeight: 1.4,
    });
    y -= 14;
  }
  y -= 14;

  // Mini banner preview
  const previewW = 380;
  const previewH = (previewW * 396) / 1584;
  const previewX = MARGIN_X;
  const previewY = y - previewH;
  p.drawRectangle({
    x: previewX,
    y: previewY,
    width: previewW,
    height: previewH,
    color: C.black,
    borderColor: C.border,
    borderWidth: 0.5,
  });
  // Mini Q + wordmark inside preview
  drawQMark(p, {
    cx: previewX + 80,
    cy: previewY + previewH / 2,
    size: 38,
    color: C.white,
  });
  p.drawText("Qualivio", {
    x: previewX + 110,
    y: previewY + previewH / 2 - 4,
    size: 16,
    font: F.medium,
    color: C.e8e6ff,
  });
  p.drawText("LinkedIn cover · 1584 × 396 px · pure black background", {
    x: previewX,
    y: previewY - 14,
    size: 7,
    font: F.regular,
    color: C.muted,
  });

  drawPageNumber(p, 9, F);
}

// ============================================================
// Page 10 — Change Log
// ============================================================
{
  const p = pdf.addPage([PAGE_W, PAGE_H]);
  drawTopBar(p, "Change Log", F);
  let y = PAGE_H - 90;

  y = drawSectionHeading(p, "10", "CHANGE LOG", y, F);

  const log = [
    {
      version: "v1.2 — 2026",
      bullets: [
        "Switched the brand display typeface to Sora (Medium 500 for wordmark, Bold 700 for headings).",
        "Added a Typography section documenting weights and cross-channel consistency.",
        "Added Digital & Social Specs section: website, /intro MP4, LinkedIn banner.",
        "Updated primary tagline to Pharmacovigilance · Quality Assurance | Life Sciences.",
        "Replaced mid-sentence em-dashes and the word \"jargon\" across web copy.",
        "Refreshed Articles section descriptions and About hero headline.",
      ],
    },
    {
      version: "v1.1",
      bullets: [
        "Added exact mathematical specifications for Q mark geometry.",
        "Added four approved colour variants (Violet, Teal, Gold, Surface).",
        "Added reference SVG code template for deterministic reproduction.",
        "Specified stroke linecap as round (was implicit).",
      ],
    },
    { version: "v1.0", bullets: ["Initial release."] },
  ];

  for (const entry of log) {
    p.drawText(entry.version, {
      x: MARGIN_X,
      y,
      size: 11,
      font: F.bold,
      color: C.violet,
    });
    y -= 18;
    for (const b of entry.bullets) {
      p.drawCircle({ x: MARGIN_X + 4, y: y + 3, size: 1.5, color: C.gold });
      y -=
        drawText(p, b, {
          x: MARGIN_X + 14,
          y,
          font: F.regular,
          size: 9,
          color: C.dark,
          maxWidth: PAGE_W - 2 * MARGIN_X - 14,
          lineHeight: 1.5,
        }) - 4;
      y -= 4;
    }
    y -= 14;
  }

  // Footer block: contact
  drawAccentBar(p, MARGIN_X, 90, 60, 3, C.gold);
  p.drawText("For brand questions:", {
    x: MARGIN_X,
    y: 70,
    size: 9,
    font: F.bold,
    color: C.dark,
  });
  p.drawText("hello@qualiviopharma.com  ·  www.qualiviopharma.com", {
    x: MARGIN_X,
    y: 56,
    size: 9,
    font: F.regular,
    color: C.teal,
  });

  drawPageNumber(p, 10, F);
}

// ---------- Save ----------
const out = await pdf.save();
await fs.mkdir("./marketing", { recursive: true });
const outPath = "./marketing/Qualivio_Brand_Guidelines_v1.2.pdf";
await fs.writeFile(outPath, out);
console.log(`Wrote ${out.length} bytes -> ${outPath}`);
