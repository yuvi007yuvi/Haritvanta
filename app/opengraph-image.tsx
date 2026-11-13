import { ImageResponse } from "next/og";

export const alt = "Haritvanta — Door-to-Door Waste Collection & Street Sanitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded social-share image used when links are shared on WhatsApp, LinkedIn, X, etc. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0F2C23", padding: 72, color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <rect x="6" y="10" width="5" height="26" fill="#fff" />
            <rect x="23" y="16" width="5" height="20" fill="#fff" />
            <rect x="6" y="21" width="22" height="4.5" fill="#fff" />
            <path d="M23 15.5C23 7.5 28.5 3 37 3c0 8.5-5 12.5-14 12.5Z" fill="#E98228" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: 6 }}>HARITVANTA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Door-to-Door Collection</div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#E98228" }}>& Street Sanitation.</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.7)" }}>Clean streets, every day — across India.</div>
        </div>
      </div>
    ),
    size,
  );
}
