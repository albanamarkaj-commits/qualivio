# QUALIVIO BRAND GUIDELINES — Q MARK UPDATE v1.1

Replace sections 04, 05, and 06 in your existing brand guidelines with this content.

---

## 04 — PRIMARY LOGO

The Qualivio Q mark is a pure geometric form built from two elements: a perfect circle ring and a short diagonal tail meeting at the lower-right of the ring.

### Variants

**Primary — Dark background** (default for all primary applications)
- Background: BG Dark `#0D0D0F`
- Q stroke: White `#FFFFFF`

**Reverse — Light background**
- Background: White `#FFFFFF`
- Q stroke: BG Dark `#0D0D0F`

**Color variants** (for marketing, social media, and accent uses)
- Violet variant: Background `#7C6AF7`, Q stroke `#FFFFFF`
- Teal variant: Background `#4ECDC4`, Q stroke `#FFFFFF`
- Gold variant: Background `#F7B731`, Q stroke `#FFFFFF`
- Surface variant: Background `#1A1A1E`, Q stroke `#FFFFFF`

---

## 05 — THE Q MARK — TECHNICAL ANATOMY

The Q mark is defined by exact mathematical specifications. These values are non-negotiable across all applications and must be preserved when scaling.

### Master coordinates (on 300×300 canvas)

**Ring (Q body):**
- Element type: circle, stroke only
- Center: (140, 135)
- Radius: 65px
- Stroke width: 18px
- Stroke linecap: round
- Fill: none

**Tail (Q diagonal):**
- Element type: line
- Start point: (190, 180)
- End point: (210, 204)
- Stroke width: 18px (identical to ring)
- Stroke linecap: round

### Calculated geometry

| Property | Value |
|----------|-------|
| Tail ΔX | 20px |
| Tail ΔY | 24px |
| Tail point-to-point length | 31.24px |
| Tail visual length (with round linecap) | 49.24px |
| Tail angle from horizontal | 50.19° |
| Ring-to-tail stroke ratio | 1:1 (identical) |

### Reference SVG code

```svg
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="300" fill="#0D0D0F"/>
  <circle cx="140" cy="135" r="65" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
  <line x1="190" y1="180" x2="210" y2="204" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
</svg>
```

### Color variant template

To generate any approved color variant, swap two values in the reference SVG:
- `[BACKGROUND_COLOR]` — the fill of the `<rect>` element
- `[STROKE_COLOR]` — the stroke of both `<circle>` and `<line>` elements

All other coordinates and dimensions remain identical.

---

## 06 — CLEAR SPACE & USAGE RULES

### Sizing
- Minimum icon size: 24×24px
- Minimum full wordmark width: 120px
- Recommended social media profile picture: 300×300px
- Recommended retina (2×) export: 600×600px

### Clear space
- Maintain clear space equal to the Q height on all four sides of the logo
- No content, text, or visual element may enter the clear space zone

### Construction integrity
- Ring stroke width and tail stroke width MUST remain identical at all sizes
- Stroke linecap MUST be `round` on both the ring and the tail
- The Q mark is a single unit — never separate the ring from the tail in primary applications

### Prohibited modifications
- Never stretch, rotate, skew, or distort the logo
- Never apply gradients, drop shadows, glows, or any visual effects
- Never use the Q in any colour other than approved variants
- Never place on a busy background without sufficient contrast overlay
- Never reproduce below minimum size thresholds (24px icon / 120px wordmark)
- Never modify the coordinate values or geometric proportions

### Background contrast requirements
- White Q (`#FFFFFF`) on any dark or saturated background (variants Primary, Violet, Teal, Gold, Surface)
- Dark Q (`#0D0D0F`) only on white or very light backgrounds (variant Light Reverse)
- All combinations must maintain WCAG AA contrast minimum (4.5:1)

---

## CHANGE LOG

**v1.1 (this update)**
- Added exact mathematical specifications for Q mark geometry
- Added 4 new approved color variants (Violet, Teal, Gold, Surface)
- Added reference SVG code template for deterministic reproduction
- Specified stroke linecap as round (was implicit)

**v1.0**
- Initial release
