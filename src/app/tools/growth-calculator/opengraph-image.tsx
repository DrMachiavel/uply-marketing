import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Lost Growth Calculator -  See how much poor soft skills cost your team";

export default function Image() {
  return generateOgImage({
    title: "How much are poor soft skills costing your team?",
    subtitle: "Calculate your hidden growth loss in 60 seconds. Free tool by Uply.",
    badge: "Calculator",
  });
}
