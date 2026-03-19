import type { Metadata } from "next";
import { ROICalculator } from "./calculator";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Soft Skills Training ROI Calculator",
  description:
    "Calculate the return on investment from daily soft skills training. Based on research showing 250% ROI from soft skills programs.",
  path: "/tools/roi-calculator",
});

export default function ROICalculatorPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/roi-calculator" },
          { name: "ROI Calculator", path: "/tools/roi-calculator" },
        ])}
      />
      <ROICalculator />
      <CTASection
        headline="Ready to see real ROI?"
        subheadline="Join 200+ teams already using Uply to build stronger, more productive teams."
      />
    </>
  );
}
