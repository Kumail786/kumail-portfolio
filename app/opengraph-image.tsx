import { ImageResponse } from "next/og";

export const alt = "Kumail Raza — Applied AI & Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -170,
            left: -130,
            width: 540,
            height: 540,
            display: "flex",
            background: "radial-gradient(circle, rgba(56,189,248,0.45), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -210,
            right: -130,
            width: 580,
            height: 580,
            display: "flex",
            background: "radial-gradient(circle, rgba(167,139,250,0.40), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
              color: "#05060a",
              fontSize: 44,
              fontWeight: 800,
              marginRight: 24,
            }}
          >
            KR
          </div>
          <div style={{ display: "flex", color: "#9aa6b8", fontSize: 28 }}>
            kumail-portfolio-three.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#e7ecf3", fontSize: 100, fontWeight: 800, letterSpacing: -2 }}>
            Kumail Raza
          </div>
          <div style={{ display: "flex", color: "#38bdf8", fontSize: 46, fontWeight: 700, marginTop: 6 }}>
            Applied AI Engineer
          </div>
          <div style={{ display: "flex", color: "#9aa6b8", fontSize: 30, marginTop: 16, maxWidth: 920 }}>
            Agentic and LLM powered products in production, with strong full stack and cloud foundations.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {["AWS Bedrock", "LangGraph", "AG2 / AutoGen", "Next.js", "FastAPI"].map((x) => (
            <div
              key={x}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#cdd6e4",
                fontSize: 24,
                padding: "10px 20px",
                borderRadius: 999,
                marginRight: 14,
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
