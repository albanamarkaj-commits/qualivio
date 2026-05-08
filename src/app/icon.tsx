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
          {/* Circle — exact proportions from QMark.tsx: cx=size*0.44, r=size*0.38 */}
          <circle cx="10.56" cy="10.56" r="9.12" stroke="white" strokeWidth="1.8" fill="none" />
          {/* Tail at 45° — tailX1=cx+r*cos(π/4)≈17, tailX2=size*0.9≈21.6 */}
          <line
            x1="17"
            y1="17"
            x2="21.6"
            y2="21.6"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
