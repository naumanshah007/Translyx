import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Translyx — Governed Clinical AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1C3F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Accent glow bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 500,
            height: 350,
            background: "radial-gradient(ellipse at bottom right, rgba(34,211,238,0.15), transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              color: "rgba(255,255,255,0.5)",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Translyx Limited · Auckland, NZ
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            The governed evidence layer for clinical AI
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["Privexa Trace", "Privexa", "Clinical AI Governance"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
