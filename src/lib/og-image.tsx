import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

/**
 * Generates a branded OG image with Uply styling.
 * Uses the Next.js ImageResponse API (Satori under the hood).
 *
 * @param title   -  Main heading (keep under ~60 chars for best results)
 * @param subtitle -  Optional subtitle or description
 * @param badge   -  Optional small label above the title (e.g., "Blog", "Tool")
 */
export function generateOgImage({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #162415 0%, #1e3220 50%, #162415 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top bar -  decorative green accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #68ef3f 0%, #4ade80 100%)",
            display: "flex",
          }}
        />

        {/* Badge */}
        {badge && (
          <div
            style={{
              display: "flex",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#4ade80",
                border: "1px solid rgba(74, 222, 128, 0.3)",
                borderRadius: "9999px",
                padding: "6px 16px",
                display: "flex",
              }}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? "48px" : "56px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            display: "flex",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255, 255, 255, 0.6)",
              marginTop: "20px",
              lineHeight: 1.5,
              display: "flex",
              maxWidth: "700px",
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Bottom -  Logo + domain */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Green circle as logo placeholder (Satori can't load external images reliably) */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "#68ef3f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#162415",
            }}
          >
            U
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.5)",
              display: "flex",
            }}
          >
            uply.work
          </span>
        </div>

        {/* Decorative green glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(104, 239, 63, 0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
