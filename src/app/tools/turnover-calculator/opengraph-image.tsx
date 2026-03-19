import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Employee Turnover Cost Calculator — Calculate the true cost of losing employees";

export default function Image() {
  return generateOgImage({
    title: "What does employee turnover really cost you?",
    subtitle: "Calculate recruitment, training, and productivity costs. Free tool by Uply.",
    badge: "Calculator",
  });
}
