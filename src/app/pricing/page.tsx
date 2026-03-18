import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { PricingCards } from "@/components/sections/pricing-cards";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Uply. Start free, upgrade when you're ready.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Pricing</Badge>
            <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Simple pricing. Start free.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              No hidden fees, no long contracts. Pick a plan and start building
              better soft skills today.
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Pricing cards */}
      <FadeIn>
        <PricingCards />
      </FadeIn>

      {/* Early access banner */}
      <FadeIn>
        <Section theme="green-wash">
          <p className="text-center text-lg font-medium text-uply-dark">
            🎉 Pro is{" "}
            <span className="font-bold text-uply-green-muted">
              free during early access
            </span>
            . Normally $1/user/month.
          </p>
        </Section>
      </FadeIn>

      {/* Comparison table */}
      <FadeIn>
        <PricingComparison />
      </FadeIn>

      {/* FAQ */}
      <FadeIn>
        <FAQ />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
