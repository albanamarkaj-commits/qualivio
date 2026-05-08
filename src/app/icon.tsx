import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Circle — same proportions as QMark.tsx */}
          <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2.2" />
          {/* Short diagonal tail at 45° — matching the page logo */}
          <line
            x1="15"
            y1="15"
            x2="19"
            y2="19"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
