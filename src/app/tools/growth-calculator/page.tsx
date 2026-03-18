import type { Metadata } from "next";
import { GrowthCalculator } from "./calculator";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Lost Growth Calculator",
  description:
    "Calculate how much poor soft skills cost your company in lost productivity, delayed projects, and management gaps.",
};

export default function GrowthCalculatorPage() {
  return (
    <>
      <GrowthCalculator />
      <CTASection
        headline="Ready to recover lost growth?"
        subheadline="Join 200+ teams already using Uply to build stronger, more productive teams."
      />
    </>
  );
}
