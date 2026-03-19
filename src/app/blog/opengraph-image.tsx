import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uply Blog — Insights on soft skills, leadership, and team development";

export default function Image() {
  return generateOgImage({
    title: "Soft skills insights for startup teams",
    subtitle: "Leadership, communication, collaboration — practical advice for growing teams.",
    badge: "Blog",
  });
}
