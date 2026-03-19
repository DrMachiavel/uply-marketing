import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
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
import { comparisons } from "@/content/comparisons";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

/* ---------- Metadata ---------- */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};

  return buildMetadata({
    title: comparison.title,
    description: comparison.description,
    path: `/compare/${slug}`,
  });
}

/* ---------- Feature cell ---------- */

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-uply-green" />
    ) : (
      <X className="mx-auto h-5 w-5 text-red-400" />
    );
  }
  return <span className="text-sm">{value}</span>;
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

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: `/compare/${slug}` },
          { name: comparison.title, path: `/compare/${slug}` },
        ])}
      />
      <JsonLdScript data={faqJsonLd(comparison.faqs)} />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Comparison</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {comparison.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              {comparison.heroCopy}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Feature comparison table */}
      <FadeIn>
        <Section theme="light">
          <h2 className="mb-10 text-center text-2xl font-bold text-uply-dark md:text-3xl">
            Feature comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-center">
              <thead>
                <tr className="bg-uply-dark text-white">
                  <th className="rounded-tl-lg px-6 py-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold">Uply</th>
                  <th className="rounded-tr-lg px-6 py-4 text-sm font-semibold">
                    {comparison.competitor}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.features.map((f, i) => (
                  <tr
                    key={f.name}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-left text-sm font-medium text-uply-dark">
                      {f.name}
                    </td>
                    <td className="px-6 py-4">
                      <FeatureValue value={f.uply} />
                    </td>
                    <td className="px-6 py-4">
                      <FeatureValue value={f.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </FadeIn>

      {/* Best for */}
      <FadeIn>
        <Section theme="green-wash">
          <h2 className="mb-10 text-center text-2xl font-bold text-uply-dark md:text-3xl">
            Who should use which?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-uply-green-muted/20 bg-white p-8">
              <h3 className="mb-3 text-lg font-bold text-uply-dark">
                Choose Uply if&hellip;
              </h3>
              <p className="text-uply-gray leading-relaxed">
                {comparison.bestFor.uply}
              </p>
            </div>
            <div className="rounded-xl border border-uply-dark/10 bg-white p-8">
              <h3 className="mb-3 text-lg font-bold text-uply-dark">
                Choose {comparison.competitor} if&hellip;
              </h3>
              <p className="text-uply-gray leading-relaxed">
                {comparison.bestFor.competitor}
              </p>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Pricing comparison */}
      <FadeIn>
        <Section theme="dark">
          <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
            Pricing comparison
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-uply-green-muted/20 bg-uply-dark-elevated p-8">
              <h3 className="mb-3 text-lg font-bold text-uply-green-muted">
                Uply
              </h3>
              <p className="text-white/70 leading-relaxed">
                {comparison.pricing.uply}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-uply-dark-elevated p-8">
              <h3 className="mb-3 text-lg font-bold text-white">
                {comparison.competitor}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {comparison.pricing.competitor}
              </p>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Verdict */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-uply-dark md:text-3xl">
              The verdict
            </h2>
            <p className="text-lg leading-relaxed text-uply-gray">
              {comparison.verdict}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/pricing"
                className="font-medium text-uply-green-muted hover:underline"
              >
                View pricing
              </a>
              <span className="text-uply-dark/20">|</span>
              <a
                href="/features"
                className="font-medium text-uply-green-muted hover:underline"
              >
                Explore features
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
              {comparison.faqs.map((faq) => (
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
        <CTASection headline="Try Uply free — no credit card required" />
      </FadeIn>
    </>
  );
}
