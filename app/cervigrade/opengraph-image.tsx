import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CerviGrade — Governed cervical screening decision support. A Translyx Clinical Technology. Under clinical validation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
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
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 14, background: "#0F766E" }} />
        <div style={{ position: "absolute", left: 96, top: 110, width: 72, height: 3, background: "#0F766E" }} />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 14, color: "#0B1117" }}>CERVIGRADE</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 70, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#0B1117", maxWidth: 960 }}>
          Governed cervical screening decision support
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 28, color: "#475569" }}>
          Guideline-aligned pathways · Data validation · Clinician review · Traceability
        </div>
        <div style={{ position: "absolute", left: 96, right: 96, bottom: 70, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#64748B" }}>
          <span style={{ color: "#0F766E", fontWeight: 600 }}>A Translyx Clinical Technology</span>
          <span style={{ display: "flex", border: "2px solid #D97706", color: "#B45309", borderRadius: 999, padding: "6px 18px", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>
            UNDER CLINICAL VALIDATION
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
