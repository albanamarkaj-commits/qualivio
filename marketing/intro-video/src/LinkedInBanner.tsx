import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Sora";

// LinkedIn personal/company cover image is 1584x396 px. The bottom-left
// roughly 200x200 area is reserved for the profile picture (and on
// desktop, a small action stack sits to the right), so all content
// stays centred-left with breathing room around those zones.

const { fontFamily: SORA } = loadFont("normal", {
  weights: ["500", "600"],
});

const RING_CIRCUMFERENCE = 2 * Math.PI * 65;
const TAIL_LENGTH_VISUAL = 49.24;

export const LINKEDIN_BANNER_WIDTH = 1584;
export const LINKEDIN_BANNER_HEIGHT = 396;

export const LinkedInBanner: React.FC = () => {
  const qSize = 130;
  const wordFontSize = 78;
  const taglineFontSize = 16;
  const urlFontSize = 15;

  // Layout: leave the bottom-left ~220x220 clear for the LinkedIn
  // profile photo, position the lockup vertically centred but pushed
  // slightly right so it doesn't overlap.
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        fontFamily: SORA,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
          marginLeft: 280, // clears the profile-picture safe area
        }}
      >
        {/* Q mark */}
        <svg
          width={qSize}
          height={qSize}
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
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
            strokeDashoffset={0}
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
            strokeDashoffset={0}
          />
        </svg>

        {/* Lockup */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Wordmark */}
          <div
            style={{
              color: "#E8E6FF",
              fontSize: wordFontSize,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Qualivio
          </div>

          {/* Tagline (gold uppercase, matches site eyebrow) */}
          <div
            style={{
              color: "#F7B731",
              fontSize: taglineFontSize,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Pharmacovigilance · Quality Assurance | Life Sciences
          </div>

          {/* URL (teal) */}
          <div
            style={{
              color: "#4ECDC4",
              fontSize: urlFontSize,
              fontWeight: 500,
              letterSpacing: "0.04em",
              marginTop: 4,
            }}
          >
            www.qualiviopharma.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
