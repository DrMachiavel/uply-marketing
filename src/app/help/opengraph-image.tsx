import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uply Help Center -  Get started, learn scoring, manage your account";

export default function Image() {
  return generateOgImage({
    title: "Help Center",
    subtitle: "Everything you need to get started with Uply and make the most of your team's training.",
    badge: "Support",
  });
}
