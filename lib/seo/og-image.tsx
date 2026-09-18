import { ImageResponse } from "next/og";
import { BRAND } from "./config";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderBrandOg({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BRAND.bg,
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: BRAND.gold,
              marginRight: 16,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 4,
              color: BRAND.gold,
              textTransform: "uppercase",
            }}
          >
            Doss Realty
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: BRAND.gold,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              {eyebrow}
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 1.05,
              color: BRAND.white,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          {subtitle ? (
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 30,
                color: "#D0D0D0",
                maxWidth: 900,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
