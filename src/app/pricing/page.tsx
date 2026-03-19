import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { PricingCards } from "@/components/sections/pricing-cards";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { FAQ } from "@/components/sections/faq";
import { faqs } from "@/lib/faq-data";
import { CTASection } from "@/components/sections/cta-section";
import {
  buildMetadata,
  productJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  JsonLdScript,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Uply's Slack-based soft skills training. Free plan for up to 5 users. Pro at $1/user/month -  free during early access.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLdScript
        data={productJsonLd([
          { name: "Free", price: "0", description: "Up to 5 users, 1 topic" },
          {
            name: "Pro",
            price: "1",
            description:
              "Unlimited users, all topics, leaderboards, analytics. Free during early access.",
          },
        ])}
      />
      <JsonLdScript data={faqJsonLd(faqs)} />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

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
