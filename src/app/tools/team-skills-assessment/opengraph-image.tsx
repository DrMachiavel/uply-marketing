import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Team Skills Assessment -  Rate your team's soft skills in 2 minutes";

export default function Image() {
  return generateOgImage({
    title: "How strong are your team's soft skills?",
    subtitle: "12 scenario-based questions. 6 skill dimensions. Shareable results. Free assessment.",
    badge: "Assessment",
  });
}
