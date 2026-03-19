import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLdScript,
} from "@/lib/seo";
import { alternatives } from "@/content/alternatives";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

/* ---------- Metadata ---------- */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const alt = alternatives.find((a) => a.slug === slug);
  if (!alt) return {};

  return buildMetadata({
    title: alt.title,
    description: alt.description,
    path: `/alternatives/${slug}`,
  });
}

/* ---------- FAQ Accordion ---------- */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-uply-dark/10 last:border-0">
      <summary className="flex cursor-pointer items-center justify-between py-5 text-left text-base font-medium text-uply-dark transition-colors hover:text-uply-green-muted md:text-lg">
        {question}
        <span className="ml-4 shrink-0 text-uply-green-muted transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="pb-5 text-uply-gray leading-relaxed">{answer}</p>
    </details>
  );
}

/* ---------- Page ---------- */

export default async function AlternativesPage({ params }: PageProps) {
  const { slug } = await params;
  const alt = alternatives.find((a) => a.slug === slug);
  if (!alt) notFound();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Alternatives", path: `/alternatives/${slug}` },
          { name: alt.title, path: `/alternatives/${slug}` },
        ])}
      />
      <JsonLdScript data={faqJsonLd(alt.faqs)} />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Alternatives</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {alt.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              {alt.heroCopy}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Numbered list of alternatives */}
      <FadeIn>
        <Section theme="light">
          <h2 className="mb-10 text-center text-2xl font-bold text-uply-dark md:text-3xl">
            Top {alt.competitor} alternatives
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {alt.alternatives.map((tool, i) => (
              <div
                key={tool.name}
                className={`rounded-xl border p-8 ${
                  i === 0
                    ? "border-uply-green-muted/30 bg-uply-green-wash"
                    : "border-uply-dark/10 bg-white"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      i === 0
                        ? "bg-uply-green text-uply-dark"
                        : "bg-uply-dark/10 text-uply-dark"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-uply-dark">
                    {tool.name}
                  </h3>
                  {i === 0 && (
                    <span className="rounded-full bg-uply-green-muted/10 px-2.5 py-0.5 text-xs font-medium text-uply-green-muted">
                      Our pick
                    </span>
                  )}
                </div>
                <p className="mb-4 text-uply-gray leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
                  <div>
                    <span className="font-semibold text-uply-dark">
                      Best for:{" "}
                    </span>
                    <span className="text-uply-gray">{tool.bestFor}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-uply-dark">
                    Pricing:{" "}
                  </span>
                  <span className="text-uply-gray">{tool.pricing}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* Why Uply */}
      <FadeIn>
        <Section theme="green-wash">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-uply-dark md:text-3xl">
              Why teams choose Uply
            </h2>
            <p className="mb-10 text-lg text-uply-gray">
              Uply is purpose-built for soft skills development inside Slack.
              Here&apos;s what sets it apart.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-uply-green-muted/20 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-uply-green-muted/10">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mb-2 font-bold text-uply-dark">
                2-minute sessions
              </h3>
              <p className="text-sm text-uply-gray">
                Daily micro-lessons that fit into any schedule without
                disrupting workflows.
              </p>
            </div>
            <div className="rounded-xl border border-uply-green-muted/20 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-uply-green-muted/10">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="mb-2 font-bold text-uply-dark">
                Lives in Slack
              </h3>
              <p className="text-sm text-uply-gray">
                No separate app, no extra logins. Training happens where your
                team already works.
              </p>
            </div>
            <div className="rounded-xl border border-uply-green-muted/20 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-uply-green-muted/10">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="mb-2 font-bold text-uply-dark">
                Zero setup
              </h3>
              <p className="text-sm text-uply-gray">
                No content authoring, no course creation. Pick topics and Uply
                handles the rest.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/features"
                className="font-medium text-uply-green-muted hover:underline"
              >
                Explore all features
              </a>
              <span className="text-uply-dark/20">|</span>
              <a
                href="/pricing"
                className="font-medium text-uply-green-muted hover:underline"
              >
                View pricing
              </a>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* FAQ */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-uply-dark md:text-3xl">
              Frequently asked questions
            </h2>
            <div className="rounded-xl border border-uply-dark/10 bg-white px-6">
              {alt.faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection headline="Try Uply free -  no credit card required" />
      </FadeIn>
    </>
  );
}
