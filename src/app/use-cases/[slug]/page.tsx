import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
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
import { useCases, getUseCaseBySlug } from "@/content/use-cases";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

/* ---------- Metadata ---------- */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return {};

  return buildMetadata({
    title: useCase.title,
    description: useCase.description,
    path: `/use-cases/${useCase.slug}`,
  });
}

/* ---------- Page ---------- */

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) notFound();

  return (
    <>
      {/* JSON-LD */}
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Use Cases", path: "/use-cases" },
          { name: useCase.name, path: `/use-cases/${useCase.slug}` },
        ])}
      />
      <JsonLdScript data={faqJsonLd(useCase.faqs)} />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Use Case</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {useCase.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              {useCase.heroCopy}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Challenge */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              The challenge
            </h2>
            <div className="mt-6 space-y-4">
              {useCase.challenge.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-uply-gray"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Solution */}
      <FadeIn>
        <Section theme="dark">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              How Uply solves it
            </h2>
            <div className="mt-6 space-y-4">
              {useCase.solution.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Steps */}
      <FadeIn>
        <Section theme="green-wash">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
              How it works
            </h2>
            <div className="mt-14 space-y-10">
              {useCase.steps.map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-uply-green text-lg font-bold text-uply-dark">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-uply-dark">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-uply-gray">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Results */}
      <FadeIn>
        <Section theme="light">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              Expected results
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-3">
            {useCase.results.map((result) => (
              <div
                key={result.label}
                className="rounded-xl border border-uply-green-muted/10 bg-white p-6 text-center shadow-sm"
              >
                <span className="block text-4xl font-bold text-uply-dark md:text-5xl">
                  {result.value}
                </span>
                <span className="mt-2 block text-sm text-uply-gray">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* FAQ */}
      <FadeIn>
        <Section theme="dark">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="mt-12 space-y-8">
              {useCase.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-semibold text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/60">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      </FadeIn>

      {/* Related links */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
              Keep exploring
            </h2>
            <div className="mt-10 space-y-4">
              {useCase.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-uply-green-muted/10 bg-white px-5 py-4 shadow-sm transition-colors hover:border-uply-green-muted/30"
                >
                  <span className="text-sm font-medium text-uply-dark">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-uply-gray" />
                </a>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection headline="Ready to try it with your team?" />
      </FadeIn>
    </>
  );
}
