import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uply Features -  Daily Micro-Lessons, Leaderboards, Analytics";

export default function Image() {
  return generateOgImage({
    title: "Everything your team needs to build soft skills",
    subtitle: "Daily questions in Slack. Weekly leaderboards. Team analytics. Multiple skill topics.",
    badge: "Features",
  });
}
