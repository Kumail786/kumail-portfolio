import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
          color: "#05060a",
          fontSize: 34,
          fontWeight: 800,
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        KR
      </div>
    ),
    { ...size }
  );
}
