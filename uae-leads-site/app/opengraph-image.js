import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FixLeads Studio — web design and local SEO for UAE home-service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "1200px", height: "630px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "82px", color: "white", background: "linear-gradient(135deg, #10263F 0%, #0F6E7A 100%)", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", right: "-70px", top: "-110px", width: "420px", height: "420px", borderRadius: "210px", background: "rgba(255,180,0,.12)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "27px", fontWeight: 800, letterSpacing: "2px" }}><div style={{ width: "58px", height: "58px", borderRadius: "14px", background: "#FFB400", display: "flex", alignItems: "center", justifyContent: "center", color: "#10263F", fontSize: "40px" }}>+</div> FIXLEADS STUDIO</div>
      <div style={{ marginTop: "54px", fontSize: "65px", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-2px" }}>Websites that win<br />enquiries.</div>
      <div style={{ width: "580px", height: "5px", background: "#FFB400", marginTop: "28px", marginBottom: "25px" }} />
      <div style={{ fontSize: "27px", lineHeight: 1.45, color: "#E2EDF1" }}>Web design + local SEO for UAE<br />home-service businesses</div>
      <div style={{ marginTop: "28px", fontSize: "18px", fontWeight: 800, color: "#FFCB4D" }}>FIXLEADSSTUDIO.COM</div>
    </div>,
    { ...size }
  );
}
