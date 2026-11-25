import { ImageResponse } from "next/og";
import { weddingConfig } from "@/config/wedding";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF8EC",
          border: "16px solid #8B1A1A",
          padding: "48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            border: "3px solid #B8860B",
            padding: "40px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#4E6B3A",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Wedding Invitation
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#8B1A1A",
              marginBottom: 16,
            }}
          >
            {weddingConfig.couple.combinedEn}
          </div>
          <div
            style={{
              width: 180,
              height: 3,
              backgroundColor: "#F2B705",
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 34,
              color: "#3B2A20",
              marginBottom: 10,
            }}
          >
            Sunday, 13 December 2026 · 6:05 AM – 7:25 AM IST
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#3B2A20",
              opacity: 0.85,
            }}
          >
            Arulmigu Sri Sithivinayagar Singaravelan Temple, T. Kallupatti, Madurai
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
