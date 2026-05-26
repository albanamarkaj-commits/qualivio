import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";

// Load Space Grotesk (700) so the rendered MP4 matches the website
// headings and the brand-guideline wordmark, rather than falling back
// to whatever system font is installed in the Remotion Chromium.
const { fontFamily: SPACE_GROTESK } = loadFont("normal", {
  weights: ["700"],
});

/**
 * MP4-ready version of the brand intro.
 *
 * Mirrors the choreography of the /intro page in the website:
 *   1. "Qualivio" types itself out, one letter every T_TYPE_STEP seconds,
 *      with a keystroke sample firing at every letter.
 *   2. Caret blinks and fades.
 *   3. Q mark draws (ring then tail) using v1.1 brand geometry.
 *   4. Bell click + glow pulse on Q completion.
 *   5. Gold tagline fades in alongside the Q drawing, both landing on
 *      the same beat.
 *
 * Per-letter keystroke variation is implemented by picking a different
 * fixed offset into keyboard-typing.mp3 for each letter, mimicking the
 * runtime click-window picker in the live page.
 */

export const INTRO_FPS = 30;
const WORD = "Qualivio";
const RING_CIRCUMFERENCE = 2 * Math.PI * 65;
const TAIL_LENGTH_VISUAL = 49.24;

// Same timeline as the runtime page (seconds).
const T_TYPE_START = 0.35;
const T_TYPE_STEP = 0.18;
const T_TYPE_DONE = T_TYPE_START + WORD.length * T_TYPE_STEP; // 1.79
const T_CARET_FADE = T_TYPE_DONE + 0.4; // 2.19
const T_CARET_FADE_DUR = 0.4;
const T_RING_START = T_CARET_FADE + 0.15; // 2.34
const T_RING_DUR = 0.85;
const T_TAIL_START = T_RING_START + T_RING_DUR - 0.05; // 3.14
const T_TAIL_DUR = 0.35;
const T_CHIME = T_TAIL_START + T_TAIL_DUR + 0.05; // 3.54
const T_TAGLINE = T_RING_START; // 2.34 — together with the lupe
const T_TAGLINE_DUR = T_CHIME - T_RING_START; // 1.2
const T_END_BUFFER = 1.5; // hold final state for 1.5 s

export const INTRO_TOTAL_SEC = T_CHIME + T_END_BUFFER;
export const INTRO_TOTAL_FRAMES = Math.ceil(INTRO_TOTAL_SEC * INTRO_FPS);

// Eight different click offsets within keyboard-typing.mp3, in seconds.
// Same intent as findClickWindows() at runtime; we hard-code them here
// because the renderer cannot run Web Audio analysis.
const TYPING_CLIP_DURATION = 0.13;
const PER_LETTER_OFFSETS = [0.0, 0.18, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26];

export const IntroComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const t = frame / fps; // seconds elapsed

  // Scale the design (originally laid out at viewport ~1080) to the
  // current canvas while keeping the Q + wordmark + tagline centred.
  const designScale = Math.min(width, height) / 1080;
  const qSize = 320 * designScale;
  const wordFontSize = 96 * designScale;
  const taglineFontSize = 22 * designScale;
  const wordGap = 60 * designScale; // gap above and below wordmark
  const caretWidth = 5 * designScale;

  // Letter reveal — one pop per letter, plus the caret animation.
  const letters = WORD.split("").map((ch, i) => {
    const reveal = clamp01((t - (T_TYPE_START + i * T_TYPE_STEP)) / 0.08);
    return {
      ch,
      opacity: reveal,
      translateY: (1 - reveal) * 2 * designScale,
    };
  });

  const caretOpacity = caretLifeOpacity(t);

  // Q mark draw progress.
  const ringProgress = clamp01((t - T_RING_START) / T_RING_DUR);
  const tailProgress = clamp01((t - T_TAIL_START) / T_TAIL_DUR);
  const ringDashOffset = RING_CIRCUMFERENCE * (1 - easeInOutCubic(ringProgress));
  const tailDashOffset = TAIL_LENGTH_VISUAL * (1 - easeInOutCubic(tailProgress));

  // Q glow + scale pulse on completion.
  const glow = qGlow(t);

  // Tagline fade.
  const taglineOpacity = clamp01((t - T_TAGLINE) / T_TAGLINE_DUR);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: SPACE_GROTESK,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Q mark */}
        <svg
          width={qSize}
          height={qSize}
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: `drop-shadow(0 0 ${glow.blur}px rgba(255,255,255,${glow.alpha}))`,
            transform: `scale(${glow.scale})`,
            transformOrigin: "50% 50%",
          }}
        >
          <circle
            cx="140"
            cy="135"
            r="65"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={ringDashOffset}
          />
          <line
            x1="190"
            y1="180"
            x2="210"
            y2="204"
            stroke="#FFFFFF"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={TAIL_LENGTH_VISUAL}
            strokeDashoffset={tailDashOffset}
          />
        </svg>

        {/* Wordmark — letters + caret */}
        <div
          style={{
            marginTop: wordGap,
            display: "flex",
            alignItems: "baseline",
            color: "#E8E6FF",
            fontSize: wordFontSize,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {letters.map((l, i) => (
            <span
              key={i}
              style={{
                opacity: l.opacity,
                transform: `translateY(${l.translateY}px)`,
                display: "inline-block",
              }}
            >
              {l.ch}
            </span>
          ))}
          <span
            style={{
              display: "inline-block",
              width: caretWidth,
              height: "1em",
              marginLeft: 4 * designScale,
              transform: "translateY(0.1em)",
              backgroundColor: "#E8E6FF",
              opacity: caretOpacity,
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: wordGap,
            opacity: taglineOpacity,
            color: "#F7B731",
            fontSize: taglineFontSize,
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textAlign: "center",
            maxWidth: width * 0.9,
          }}
        >
          Pharmacovigilance · Quality Assurance | Life Sciences
        </div>
      </div>

      {/* Audio layers — one Sequence per scheduled sound */}
      {WORD.split("").map((_, i) => {
        const fromFrame = Math.round((T_TYPE_START + i * T_TYPE_STEP) * fps);
        const durationFrames = Math.ceil(TYPING_CLIP_DURATION * fps) + 1;
        const startFromFrame = Math.round(PER_LETTER_OFFSETS[i] * fps);
        return (
          <Sequence
            key={`k${i}`}
            from={fromFrame}
            durationInFrames={durationFrames}
            name={`keystroke-${i}`}
          >
            <Audio
              src={staticFile("audio/keyboard-typing.mp3")}
              startFrom={startFromFrame}
              endAt={startFromFrame + durationFrames}
              volume={0.6}
            />
          </Sequence>
        );
      })}
      <Sequence
        from={Math.round(T_CHIME * fps)}
        durationInFrames={Math.ceil(1.0 * fps)}
        name="bell-click"
      >
        <Audio src={staticFile("audio/bell-click.wav")} volume={0.9} />
      </Sequence>
    </AbsoluteFill>
  );
};

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// The caret blinks every 0.55 s, then fades cleanly after typing is done.
function caretLifeOpacity(t: number): number {
  if (t < T_TYPE_START) return 0;
  if (t > T_CARET_FADE + T_CARET_FADE_DUR) return 0;
  if (t > T_CARET_FADE) {
    return clamp01(1 - (t - T_CARET_FADE) / T_CARET_FADE_DUR);
  }
  // Blink with 0.55 s period: half on, half off
  const phase = ((t - T_TYPE_START) / 0.55) % 1;
  return phase < 0.5 ? 1 : 0;
}

// Q glow profile: starts at zero, blooms at T_CHIME, settles into a faint
// halo. Also a brief scale-up pulse.
function qGlow(t: number): { blur: number; alpha: number; scale: number } {
  if (t < T_CHIME - 0.05) return { blur: 0, alpha: 0, scale: 1 };
  const elapsed = t - (T_CHIME - 0.05);
  const peakPos = 0.35; // 0.35 s after start = peak
  if (elapsed <= peakPos) {
    const p = elapsed / peakPos;
    return {
      blur: interpolate(p, [0, 1], [0, 24]),
      alpha: interpolate(p, [0, 1], [0, 0.55]),
      scale: interpolate(p, [0, 1], [1, 1.04]),
    };
  }
  const p = clamp01((elapsed - peakPos) / (1.4 - peakPos));
  return {
    blur: interpolate(p, [0, 1], [24, 12]),
    alpha: interpolate(p, [0, 1], [0.55, 0.2]),
    scale: interpolate(p, [0, 1], [1.04, 1]),
  };
}
