import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uply — Soft skills training that lives in Slack";

export default function Image() {
  return generateOgImage({
    title: "Soft skills training that lives in Slack",
    subtitle: "Daily micro-lessons. 2 minutes a day. Weekly leaderboards. Measurable growth.",
  });
}
