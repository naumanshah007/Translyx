import { ImageResponse } from "next/og";

// Source for public/og-privexa.png (rendered to a static file for reliable
// previews on WhatsApp, LinkedIn and email clients).
export const runtime = "edge";
export const alt = "Privexa — The Control Boundary for the AI Era. A Translyx Platform.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070B10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 96, top: 120, width: 72, height: 3, background: "#67E8F9" }} />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 14, color: "#FFFFFF" }}>PRIVEXA</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, color: "#FFFFFF", maxWidth: 900 }}>
          The Control Boundary for the AI Era
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#94A3B8" }}>
          Minimum disclosure. Maximum AI utility.
        </div>
        <div style={{ position: "absolute", left: 96, right: 96, bottom: 72, display: "flex", justifyContent: "space-between", fontSize: 22, color: "#64748B" }}>
          <span style={{ color: "#67E8F9" }}>A Translyx Platform</span>
          <span>translyx.co.nz</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
