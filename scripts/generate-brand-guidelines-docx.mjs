/**
 * Generates Qualivio Brand Guidelines & Identity System v1.2 as a Word
 * document. Mirrors the content of the v1.2 PDF but built natively as
 * editable Word elements (headings, paragraphs, tables, bullets) with
 * embedded brand images for the Q mark variants and LinkedIn banner.
 *
 * Output: marketing/Qualivio_Brand_Guidelines_v1.2.docx
 *
 * Run: node scripts/generate-brand-guidelines-docx.mjs
 */

import fs from "node:fs/promises";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  ImageRun,
  AlignmentType,
  LevelFormat,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  PageBreak,
  PageOrientation,
  Header,
  Footer,
  PageNumber,
} from "docx";

// ---------- Brand colours (hex without #) ----------
const COL = {
  dark: "0D0D0F",
  white: "FFFFFF",
  violet: "7C6AF7",
  teal: "4ECDC4",
  gold: "F7B731",
  muted: "6B6A8F",
  border: "E5E4F0",
  text: "0D0D0F",
  e8e6ff: "E8E6FF",
};

// ---------- Helpers ----------

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({
    heading: level,
    children: [new TextRun({ text })],
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({
        text,
        ...opts,
      }),
    ],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text })],
  });
}

function eyebrow(text, color = COL.violet) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 18, // 9pt
        color,
        characterSpacing: 50,
      }),
    ],
  });
}

async function imageRun(path, width, height) {
  const data = await fs.readFile(path);
  return new ImageRun({
    type: "png",
    data,
    transformation: { width, height },
    altText: { title: "Qualivio brand asset", description: path, name: "image" },
  });
}

function tableBorder(color = COL.border) {
  return { style: BorderStyle.SINGLE, size: 4, color };
}
const cellBorders = {
  top: tableBorder(),
  bottom: tableBorder(),
  left: tableBorder(),
  right: tableBorder(),
};

function dividerParagraph() {
  return new Paragraph({
    border: {
      bottom: {
        color: COL.border,
        style: BorderStyle.SINGLE,
        size: 6,
        space: 6,
      },
    },
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ---------- Build content ----------

const QUALIVIO_FILES = "C:/Users/user/Desktop/QUALIVIO/files 6";
const LINKEDIN_BANNER =
  "C:/Users/user/Desktop/Desktop/Qualivio/marketing/linkedin/qualivio_linkedin_banner_v3.png";

async function buildChildren() {
  const children = [];

  // ====================================================
  // PAGE 1 — Cover
  // ====================================================
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 2400, after: 400 },
      children: [
        new TextRun({
          text: "QUALIVIO BRAND GUIDELINES",
          bold: true,
          size: 20,
          color: COL.gold,
          characterSpacing: 80,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
      children: [
        await imageRun(`${QUALIVIO_FILES}/qualivio_q_primary_dark_300x300.png`, 180, 180),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
      children: [
        new TextRun({
          text: "Qualivio",
          size: 96, // 48pt
          color: COL.dark,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 400 },
      children: [
        new TextRun({
          text: "PHARMACOVIGILANCE · QUALITY ASSURANCE | LIFE SCIENCES",
          bold: true,
          size: 20,
          color: COL.gold,
          characterSpacing: 60,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 800, after: 100 },
      children: [
        new TextRun({
          text: "Brand Guidelines & Identity System",
          size: 28,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 100 },
      children: [
        new TextRun({
          text: "OBSIDIAN EDGE · VERSION 1.2 · 2026",
          bold: true,
          size: 16,
          color: COL.gold,
          characterSpacing: 50,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 300 },
      children: [
        new TextRun({
          text: "www.qualiviopharma.com",
          color: COL.teal,
          size: 20,
        }),
      ],
    }),
    pageBreak(),
  );

  // ====================================================
  // PAGE 2 — Brand Philosophy + Personality
  // ====================================================
  children.push(
    eyebrow("01 · Brand Philosophy"),
    heading("Clear thinking for complex regulations."),
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: "A brand built on trust and precision.",
          bold: true,
          color: COL.violet,
          size: 24,
        }),
      ],
    }),
    body(
      "Qualivio makes pharmacovigilance, quality assurance, and life sciences knowledge accessible, modern, and actionable. We combine scientific rigour with clear communication, for professionals and companies who need both depth and clarity.",
    ),
    dividerParagraph(),
    eyebrow("02 · Brand Personality"),
  );

  const traits = [
    [
      ["Trustworthy", "We earn confidence through accuracy and transparency."],
      ["Modern", "A fresh perspective on an established discipline."],
    ],
    [
      ["Approachable", "Rigour without intimidation."],
      ["Clear", "Complex science, explained without unnecessary complexity."],
    ],
    [
      ["Expert", "Deep domain knowledge, speaking to professionals."],
      ["Precise", "Every word and design choice earns its place."],
    ],
  ];

  for (const row of traits) {
    children.push(
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: row.map(
              ([label, text]) =>
                new TableCell({
                  borders: cellBorders,
                  width: { size: 4680, type: WidthType.DXA },
                  margins: { top: 120, bottom: 120, left: 160, right: 160 },
                  children: [
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        new TextRun({
                          text: label,
                          bold: true,
                          color: COL.violet,
                          size: 22,
                        }),
                      ],
                    }),
                    new Paragraph({
                      children: [new TextRun({ text, size: 20 })],
                    }),
                  ],
                }),
            ),
          }),
        ],
      }),
      new Paragraph({ spacing: { after: 80 }, children: [] }),
    );
  }

  children.push(pageBreak());

  // ====================================================
  // PAGE 3 — Brand Voice + Taglines
  // ====================================================
  children.push(
    eyebrow("03 · Brand Voice"),
    heading("The way we communicate."),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2200, 7160],
      rows: [
        ["We write in", "plain, confident English, with no unnecessary complexity."],
        ["We are", "authoritative but never arrogant."],
        ["We educate", "without condescending to our audience."],
        ["We avoid", "buzzwords, vague claims, and over-promising."],
      ].map(
        ([label, value]) =>
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 2200, type: WidthType.DXA },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                shading: { fill: "F5F4FF", type: ShadingType.CLEAR },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: label,
                        bold: true,
                        color: COL.violet,
                        size: 20,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 7160, type: WidthType.DXA },
                margins: { top: 100, bottom: 100, left: 160, right: 160 },
                children: [
                  new Paragraph({ children: [new TextRun({ text: value, size: 22 })] }),
                ],
              }),
            ],
          }),
      ),
    }),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    eyebrow("03.1 · Primary Taglines"),
    bullet("Pharmacovigilance · Quality Assurance | Life Sciences"),
    bullet("Clear thinking for complex regulations."),
    bullet("Trusted insights, education and consulting."),
    pageBreak(),
  );

  // ====================================================
  // PAGE 4 — Primary Logo
  // ====================================================
  children.push(
    eyebrow("04 · Primary Logo"),
    heading("The Q mark and wordmark lockup."),
    body(
      "The Qualivio brand uses two variants of the primary lockup: white on dark for primary applications, and dark on white for reverse usage.",
    ),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [4680, 4680],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: 4680, type: WidthType.DXA },
              shading: { fill: COL.dark, type: ShadingType.CLEAR },
              margins: { top: 400, bottom: 400, left: 400, right: 400 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    await imageRun(
                      `${QUALIVIO_FILES}/qualivio_q_primary_dark_300x300.png`,
                      120,
                      120,
                    ),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: "Qualivio", color: COL.e8e6ff, size: 36 }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: cellBorders,
              width: { size: 4680, type: WidthType.DXA },
              shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
              margins: { top: 400, bottom: 400, left: 400, right: 400 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    await imageRun(
                      `${QUALIVIO_FILES}/qualivio_q_light_reverse_300x300.png`,
                      120,
                      120,
                    ),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: "Qualivio", color: COL.dark, size: 36 }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: 4680, type: WidthType.DXA },
              margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: "PRIMARY · ON DARK BACKGROUND",
                      bold: true,
                      size: 16,
                      color: COL.muted,
                      characterSpacing: 50,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: cellBorders,
              width: { size: 4680, type: WidthType.DXA },
              margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: "REVERSE · ON LIGHT BACKGROUND",
                      bold: true,
                      size: 16,
                      color: COL.muted,
                      characterSpacing: 50,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    pageBreak(),
  );

  // ====================================================
  // PAGE 5 — Q Mark Technical Anatomy
  // ====================================================
  children.push(
    eyebrow("05 · Q Mark Technical Anatomy"),
    heading("Geometry, mathematically defined."),
    body(
      "Pure geometric form: perfect circle ring + short diagonal tail at 50.19°. Ring and tail share identical stroke weight (18px). All values are mathematically defined and non-negotiable across applications.",
    ),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [3120, 6240],
      rows: [
        ["Element type", "Circle (ring), stroke only · Line (tail)"],
        ["Ring centre", "(140, 135) on 300×300 canvas"],
        ["Ring radius", "65 px"],
        ["Stroke width", "18 px (identical for ring and tail)"],
        ["Stroke linecap", "round"],
        ["Fill", "none"],
        ["Tail start", "(190, 180)"],
        ["Tail end", "(210, 204)"],
        ["Tail angle from horizontal", "50.19°"],
        ["Tail visual length", "49.24 px (with round linecap caps)"],
        ["Ring-to-tail stroke ratio", "1 : 1 (identical)"],
      ].map(
        ([k, v], i) =>
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 3120, type: WidthType.DXA },
                shading:
                  i % 2 === 0
                    ? { fill: "F5F4FF", type: ShadingType.CLEAR }
                    : undefined,
                margins: { top: 80, bottom: 80, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: k, bold: true, color: COL.violet, size: 18 }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 6240, type: WidthType.DXA },
                shading:
                  i % 2 === 0
                    ? { fill: "F5F4FF", type: ShadingType.CLEAR }
                    : undefined,
                margins: { top: 80, bottom: 80, left: 160, right: 160 },
                children: [new Paragraph({ children: [new TextRun({ text: v, size: 18 })] })],
              }),
            ],
          }),
      ),
    }),
    new Paragraph({ spacing: { after: 240 }, children: [] }),
    eyebrow("05.1 · Reference SVG"),
    ...[
      `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">`,
      `  <circle cx="140" cy="135" r="65" fill="none"`,
      `    stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>`,
      `  <line x1="190" y1="180" x2="210" y2="204"`,
      `    stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>`,
      `</svg>`,
    ].map(
      (line) =>
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({
              text: line,
              font: "Consolas",
              size: 18,
              color: COL.dark,
            }),
          ],
        }),
    ),
    pageBreak(),
  );

  // ====================================================
  // PAGE 6 — Color Variants
  // ====================================================
  children.push(
    eyebrow("06 · Colour Variants"),
    heading("The Q mark across all approved colour schemes."),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
  );

  const variants = [
    { name: "PRIMARY (DARK)", file: "qualivio_q_primary_dark_300x300.png", hex: "#0D0D0F · #FFFFFF" },
    { name: "VIOLET", file: "qualivio_q_violet_300x300.png", hex: "#7C6AF7 · #FFFFFF" },
    { name: "TEAL", file: "qualivio_q_teal_300x300.png", hex: "#4ECDC4 · #FFFFFF" },
    { name: "GOLD", file: "qualivio_q_gold_300x300.png", hex: "#F7B731 · #FFFFFF" },
    { name: "SURFACE", file: "qualivio_q_surface_300x300.png", hex: "#1A1A1E · #FFFFFF" },
    { name: "LIGHT REVERSE", file: "qualivio_q_light_reverse_300x300.png", hex: "#FFFFFF · #0D0D0F" },
  ];

  // 2 rows of 3 columns
  for (let r = 0; r < 2; r++) {
    const rowVariants = variants.slice(r * 3, r * 3 + 3);
    children.push(
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({
            children: await Promise.all(
              rowVariants.map(async (v) => {
                return new TableCell({
                  borders: cellBorders,
                  width: { size: 3120, type: WidthType.DXA },
                  margins: { top: 200, bottom: 200, left: 200, right: 200 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [await imageRun(`${QUALIVIO_FILES}/${v.file}`, 100, 100)],
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { before: 100 },
                      children: [
                        new TextRun({
                          text: v.name,
                          bold: true,
                          size: 16,
                          color: COL.dark,
                          characterSpacing: 40,
                        }),
                      ],
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: v.hex, size: 14, color: COL.muted }),
                      ],
                    }),
                  ],
                });
              }),
            ),
          }),
        ],
      }),
      new Paragraph({ spacing: { after: 100 }, children: [] }),
    );
  }

  children.push(pageBreak());

  // ====================================================
  // PAGE 7 — Clear Space & Usage Rules
  // ====================================================
  children.push(
    eyebrow("07 · Clear Space & Usage Rules"),
    heading("How to use the mark, and what to avoid."),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
  );

  const sections = [
    {
      t: "SIZING",
      items: [
        "Minimum icon size: 24 × 24 px",
        "Minimum full wordmark width: 120 px",
        "Recommended social media profile picture: 300 × 300 px",
        "Recommended retina (2×) export: 600 × 600 px",
      ],
    },
    {
      t: "CLEAR SPACE",
      items: [
        "Maintain clear space equal to the Q height on all four sides.",
        "No content, text, or visual element may enter the clear space zone.",
      ],
    },
    {
      t: "CONSTRUCTION INTEGRITY",
      items: [
        "Ring stroke width and tail stroke width MUST remain identical.",
        "Stroke linecap MUST be round on both ring and tail.",
        "The Q mark is a single unit — never separate the ring from the tail.",
      ],
    },
    {
      t: "PROHIBITED MODIFICATIONS",
      items: [
        "Never stretch, rotate, skew, or distort the logo.",
        "Never apply gradients, drop shadows, glows, or any visual effects.",
        "Never use the Q in any colour other than approved variants.",
        "Never place on a busy background without sufficient contrast.",
        "Never reproduce below minimum size thresholds.",
        "Never modify the coordinate values or geometric proportions.",
      ],
    },
    {
      t: "CONTRAST",
      items: [
        "White Q on any dark or saturated approved variant.",
        "Dark Q (#0D0D0F) only on white or very light backgrounds.",
        "All combinations must maintain WCAG AA contrast minimum (4.5 : 1).",
      ],
    },
  ];

  for (const sec of sections) {
    children.push(
      new Paragraph({
        spacing: { before: 200, after: 80 },
        children: [
          new TextRun({
            text: sec.t,
            bold: true,
            color: COL.violet,
            size: 20,
            characterSpacing: 40,
          }),
        ],
      }),
      ...sec.items.map((i) => bullet(i)),
    );
  }

  children.push(pageBreak());

  // ====================================================
  // PAGE 8 — Typography (NEW in v1.2)
  // ====================================================
  children.push(
    eyebrow("08 · Typography"),
    heading("Sora · the single brand typeface."),
    body(
      "Qualivio uses a single typeface across every brand surface — wordmark, headings, body, video, and print. The chosen family is Sora, a modern geometric sans designed by Indestructible Type Co. and licensed under the SIL Open Font License.",
    ),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    eyebrow("Weights in use"),
  );

  const weightDemo = [
    { name: "Sora Regular · 400", usage: "Body copy, long-form text", weight: 400 },
    { name: "Sora Medium · 500", usage: "Wordmark, eyebrows, callouts", weight: 500 },
    { name: "Sora Bold · 700", usage: "Headings, emphasis", weight: 700 },
  ];

  for (const w of weightDemo) {
    children.push(
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "Qualivio",
                        bold: w.weight >= 700,
                        size: 56,
                        color: COL.dark,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    spacing: { after: 80 },
                    children: [
                      new TextRun({ text: w.name, bold: true, color: COL.violet, size: 20 }),
                    ],
                  }),
                  new Paragraph({
                    children: [new TextRun({ text: w.usage, size: 18 })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new Paragraph({ spacing: { after: 100 }, children: [] }),
    );
  }

  children.push(
    eyebrow("Website font stack"),
    bullet("Display + Headings: Sora (400 / 500 / 700)"),
    bullet("Body + Forms: DM Sans (400 / 500)"),
    bullet("Code samples: monospaced system stack"),
    new Paragraph({ spacing: { after: 240 }, children: [] }),
    eyebrow("Cross-channel consistency"),
    body(
      "Sora must be used for the Qualivio wordmark in every channel: website, /intro MP4, LinkedIn banner, social posts, presentations, and print. Fallbacks (Inter, Arial) are permitted only when Sora cannot be loaded; never substitute by choice.",
    ),
    pageBreak(),
  );

  // ====================================================
  // PAGE 9 — Digital & Social Specs (NEW in v1.2)
  // ====================================================
  children.push(
    eyebrow("09 · Digital & Social Specs"),
    heading("Surface-specific dimensions and assets."),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    eyebrow("Website"),
    bullet("URL: www.qualiviopharma.com"),
    bullet("Hero background: #FFFFFF (white)"),
    bullet("Body sections alternate #FFFFFF and #0D0D0F"),
    bullet(
      "Tagline (gold eyebrow): PHARMACOVIGILANCE · QUALITY ASSURANCE | LIFE SCIENCES",
    ),
    bullet("Header & footer wordmark: Sora Medium 500, colour #E8E6FF on dark"),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    eyebrow("Intro animation (/intro)"),
    bullet(
      "Resolution: 1080 × 1080 (square, LinkedIn feed) — also exportable at 1920 × 1080 and 1080 × 1920",
    ),
    bullet("Duration: ~5 seconds; 30 fps; H.264 + AAC in MP4"),
    bullet("Background: pure #000000"),
    bullet("Audio: keyboard-typing SFX per letter, soft bell click on Q completion"),
    bullet(
      "Source: marketing/intro-video (Remotion); regenerate via `npm run intro:render:square`",
    ),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
    eyebrow("LinkedIn cover banner"),
    bullet("Dimensions: 1584 × 396 px (LinkedIn personal/company cover)"),
    bullet("Background: pure #000000"),
    bullet("Lockup: Q mark + Qualivio wordmark + gold tagline + teal URL"),
    bullet("Safe area: bottom-left ~220 × 220 px reserved for the profile picture"),
    bullet(
      "Source: marketing/intro-video/src/LinkedInBanner.tsx; regenerate via `npm run linkedin:render:banner`",
    ),
    new Paragraph({ spacing: { before: 200, after: 100 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [await imageRun(LINKEDIN_BANNER, 540, 135)],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80 },
      children: [
        new TextRun({
          text: "LinkedIn cover · 1584 × 396 px · pure black background",
          size: 16,
          color: COL.muted,
        }),
      ],
    }),
    pageBreak(),
  );

  // ====================================================
  // PAGE 10 — Change Log
  // ====================================================
  children.push(
    eyebrow("10 · Change Log"),
    heading("Version history."),
    new Paragraph({ spacing: { after: 200 }, children: [] }),
  );

  const log = [
    {
      version: "v1.2 — 2026",
      bullets: [
        "Switched the brand display typeface to Sora (Medium 500 for wordmark, Bold 700 for headings).",
        "Added a Typography section documenting weights and cross-channel consistency.",
        "Added Digital & Social Specs section: website, /intro MP4, LinkedIn banner.",
        "Updated primary tagline to Pharmacovigilance · Quality Assurance | Life Sciences.",
        "Replaced mid-sentence em-dashes and the word “jargon” across web copy.",
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
    children.push(
      new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
          new TextRun({
            text: entry.version,
            bold: true,
            color: COL.violet,
            size: 22,
          }),
        ],
      }),
      ...entry.bullets.map((b) => bullet(b)),
    );
  }

  children.push(
    new Paragraph({ spacing: { before: 600, after: 100 }, children: [] }),
    dividerParagraph(),
    new Paragraph({
      spacing: { before: 200 },
      children: [
        new TextRun({
          text: "For brand questions:",
          bold: true,
          color: COL.dark,
          size: 18,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "hello@qualiviopharma.com  ·  www.qualiviopharma.com",
          color: COL.teal,
          size: 18,
        }),
      ],
    }),
  );

  return children;
}

const children = await buildChildren();

const doc = new Document({
  creator: "Qualivio",
  title: "Qualivio Brand Guidelines v1.2",
  description: "Brand identity system and usage rules",
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: COL.dark },
        paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: COL.dark },
        paragraph: { spacing: { before: 200, after: 140 }, outlineLevel: 1 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "QUALIVIO BRAND GUIDELINES",
                  bold: true,
                  size: 14,
                  color: COL.violet,
                  characterSpacing: 50,
                }),
              ],
              border: {
                bottom: {
                  color: COL.border,
                  style: BorderStyle.SINGLE,
                  size: 4,
                  space: 4,
                },
              },
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Qualivio Brand Guidelines · Confidential · v1.2  ",
                  size: 14,
                  color: COL.muted,
                }),
                new TextRun({ text: "Page ", size: 14, color: COL.muted }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 14,
                  color: COL.muted,
                }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
const outPath = "./marketing/Qualivio_Brand_Guidelines_v1.2.docx";
await fs.writeFile(outPath, buffer);
console.log(`Wrote ${buffer.length} bytes -> ${outPath}`);
