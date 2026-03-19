import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uply Pricing -  Free plan available, Pro at $1/user/month";

export default function Image() {
  return generateOgImage({
    title: "Start free. Scale for $1/user/month.",
    subtitle: "Free during early access. No long-term contracts. Cancel anytime.",
    badge: "Pricing",
  });
}
