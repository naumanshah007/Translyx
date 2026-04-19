import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Translyx AI Solutions — Governed Clinical AI";
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
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
        <div style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              marginBottom: 20,
              color: "rgba(255,255,255,0.45)",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Translyx · AI Solutions
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            AI solutions, governed end-to-end
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 680,
              lineHeight: 1.45,
              marginBottom: 28,
            }}
          >
            Privexa protects clinical AI data flows. Privexa Trace governs reviewer-gated evidence workflows.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["Privexa", "Privexa Trace", "NZ Privacy Act 2020", "HIPAA alignment"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "7px 14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 7,
                  color: "rgba(255,255,255,0.60)",
                  fontSize: 13,
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
