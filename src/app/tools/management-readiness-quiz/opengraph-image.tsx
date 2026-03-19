import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Management Readiness Quiz — Are your first-time managers ready to lead?";

export default function Image() {
  return generateOgImage({
    title: "Are your first-time managers ready to lead?",
    subtitle: "10 scenario-based questions across 5 critical dimensions. Free assessment by Uply.",
    badge: "Quiz",
  });
}
