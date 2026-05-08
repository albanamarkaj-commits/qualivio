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
        <div
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: 1,
          }}
        >
          Q
        </div>
      </div>
    ),
    { ...size }
  );
}
