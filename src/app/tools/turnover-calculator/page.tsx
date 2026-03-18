import type { Metadata } from "next";
import { TurnoverCalculator } from "./calculator";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Employee Turnover Cost Calculator",
  description:
    "Calculate the true cost of employee turnover and see how much you could save with daily soft skills training in Slack.",
};

export default function TurnoverCalculatorPage() {
  return (
    <>
      <TurnoverCalculator />
      <CTASection
        headline="Ready to reduce turnover?"
        subheadline="Join 200+ teams already using Uply to build stronger, more engaged teams."
      />
    </>
  );
}
