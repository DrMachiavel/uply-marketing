import type { Metadata } from "next";
import { TurnoverCalculator } from "./calculator";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Employee Turnover Cost Calculator",
  description:
    "Calculate the true cost of employee turnover and see how much you could save with daily soft skills training in Slack. Free interactive tool by Uply.",
  path: "/tools/turnover-calculator",
});

export default function TurnoverCalculatorPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/turnover-calculator" },
          {
            name: "Turnover Cost Calculator",
            path: "/tools/turnover-calculator",
          },
        ])}
      />
      <TurnoverCalculator />
      <CTASection
        headline="Ready to reduce turnover?"
        subheadline="Join 200+ teams already using Uply to build stronger, more engaged teams."
      />
    </>
  );
}
