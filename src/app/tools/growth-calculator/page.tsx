import type { Metadata } from "next";
import { GrowthCalculator } from "./calculator";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lost Growth Calculator",
  description:
    "Calculate how much poor soft skills cost your company in lost productivity, delayed projects, and management gaps. Free interactive tool by Uply.",
  path: "/tools/growth-calculator",
});

export default function GrowthCalculatorPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/growth-calculator" },
          { name: "Lost Growth Calculator", path: "/tools/growth-calculator" },
        ])}
      />
      <GrowthCalculator />
      <CTASection
        headline="Ready to recover lost growth?"
        subheadline="Join 200+ teams already using Uply to build stronger, more productive teams."
      />
    </>
  );
}
