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
        <svg width="28" height="28" viewBox="0 0 300 300" fill="none">
          <circle
            cx="140"
            cy="135"
            r="65"
            fill="none"
            stroke="white"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <line
            x1="190"
            y1="180"
            x2="210"
            y2="204"
            stroke="white"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
