import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About Uply",
  description:
    "Uply is a Slack-native soft skills training platform built by startup founders for growing teams. Based in Lille, France.",
  path: "/about",
});

const beliefs = [
  {
    title: "Daily beats annual",
    description:
      "2 minutes every day builds lasting habits. 2 days once a year gets forgotten by Monday. Consistency wins over intensity, every time.",
  },
  {
    title: "Meet people where they are",
    description:
      "Your team already lives in Slack. No new app to install, no extra login to remember -  just soft skills training that fits naturally into the workday.",
  },
  {
    title: "Free should mean free",
    description:
      "Our free plan is free forever. No credit card required, no time-limited trial, no surprise paywalls. Up to 5 users, 1 topic, zero tricks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>About</Badge>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Built by founders who got tired of useless training
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              We believe great teams aren&apos;t built in annual workshops.
              They&apos;re built in the small moments -  one conversation, one
              decision, one micro-lesson at a time.
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Our Story */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-uply-dark md:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-uply-gray">
              <p>
                We&apos;ve been there. You hire smart people, build a great
                product, and then watch productivity stall because of
                communication breakdowns, poor feedback loops, and managers who
                were never taught how to lead. The fix? A two-day workshop that
                costs a fortune and gets forgotten within a week.
              </p>
              <p>
                Uply was born from a simple idea: what if soft skills training
                worked like the best products -  short, daily, and embedded in
                the tools you already use? Instead of pulling people out of work
                for a seminar, we deliver one scenario-based question per day,
                right in Slack. Two minutes. That&apos;s it.
              </p>
              <p>
                We&apos;re based in Lille, France, and we&apos;re building Uply
                because we believe every growing team deserves access to
                meaningful skill development -  not just companies that can
                afford five-figure training budgets.
              </p>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* What We Believe */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What We Believe
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              Three principles that guide everything we build.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {belief.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* Our Commitment */}
      <FadeIn>
        <Section theme="green-wash">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-uply-dark md:text-4xl">
              Our Commitment to Privacy
            </h2>
            <p className="mt-6 text-lg text-uply-gray">
              Your team&apos;s data is yours. We&apos;re GDPR compliant,
              EU-hosted, and we collect only what&apos;s strictly necessary to
              deliver the service. No tracking pixels, no data selling, no
              surprises.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/security"
                className="rounded-lg border border-uply-dark/10 bg-white px-5 py-2.5 text-sm font-medium text-uply-dark transition-colors hover:bg-uply-dark hover:text-white"
              >
                Security
              </Link>
              <Link
                href="/privacy"
                className="rounded-lg border border-uply-dark/10 bg-white px-5 py-2.5 text-sm font-medium text-uply-dark transition-colors hover:bg-uply-dark hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/dpa"
                className="rounded-lg border border-uply-dark/10 bg-white px-5 py-2.5 text-sm font-medium text-uply-dark transition-colors hover:bg-uply-dark hover:text-white"
              >
                Data Processing Agreement
              </Link>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Connect */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-uply-dark md:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-uply-gray">
              We&apos;d love to hear from you -  whether you have a question,
              feedback, or just want to say hi.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
                <a
                  href={`mailto:${SITE_CONFIG.email.support}`}
                  className="text-base font-medium text-uply-green-muted hover:underline"
                >
                  {SITE_CONFIG.email.support}
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-uply-green-muted hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-sm text-uply-gray">
                Lille, France
              </p>
            </div>
            <div className="mt-8 text-base text-uply-gray">
              <p>
                Learn more about{" "}
                <Link
                  href="/features"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  what Uply does
                </Link>{" "}
                or check out our{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  pricing
                </Link>
                .
              </p>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection headline="Ready to build better skills?" />
      </FadeIn>
    </>
  );
}
