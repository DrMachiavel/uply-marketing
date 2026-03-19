import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Quote,
} from "lucide-react";
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
import { audiences, getAudienceBySlug } from "@/content/audiences";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return audiences.map((a) => ({ audience: a.slug }));
}

/* ---------- Metadata ---------- */

interface PageProps {
  params: Promise<{ audience: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { audience: slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) return {};

  return buildMetadata({
    title: audience.title,
    description: audience.description,
    path: `/for/${audience.slug}`,
  });
}

/* ---------- Pain-point icons ---------- */

const painIcons = [
  <AlertTriangle key="p0" className="h-6 w-6 text-uply-green-muted" />,
  <AlertTriangle key="p1" className="h-6 w-6 text-uply-green-muted" />,
  <AlertTriangle key="p2" className="h-6 w-6 text-uply-green-muted" />,
];

const solutionIcons = [
  <Lightbulb key="s0" className="h-6 w-6 text-uply-green" />,
  <Lightbulb key="s1" className="h-6 w-6 text-uply-green" />,
  <Lightbulb key="s2" className="h-6 w-6 text-uply-green" />,
];

/* ---------- Page ---------- */

export default async function AudiencePage({ params }: PageProps) {
  const { audience: slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) notFound();

  return (
    <>
      {/* JSON-LD */}
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: audience.name, path: `/for/${audience.slug}` },
        ])}
      />
      <JsonLdScript data={faqJsonLd(audience.faqs)} />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>{audience.name}</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {audience.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              {audience.heroCopy}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Pain points */}
      <FadeIn>
        <Section theme="light">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              The challenges {audience.name.toLowerCase()} face
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-uply-gray">
              Sound familiar? You&apos;re not alone.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audience.painPoints.map((point, i) => (
              <div
                key={point.title}
                className="rounded-xl border border-uply-green-muted/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-4">{painIcons[i]}</div>
                <h3 className="text-lg font-semibold text-uply-dark">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-uply-gray">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* Solutions */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              How Uply helps
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audience.solutions.map((sol, i) => (
              <div
                key={sol.title}
                className="rounded-xl border border-white/10 bg-uply-dark-elevated p-6"
              >
                <div className="mb-4">{solutionIcons[i]}</div>
                <h3 className="text-lg font-semibold text-white">
                  {sol.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* Stat + Testimonial */}
      <FadeIn>
        <Section theme="green-wash">
          <div className="mx-auto max-w-2xl text-center">
            <span className="block text-6xl font-bold text-uply-dark md:text-7xl">
              {audience.stat.value}
            </span>
            <span className="mt-2 block text-lg font-medium text-uply-gray">
              {audience.stat.label}
            </span>

            {audience.testimonial && (
              <div className="mt-12 rounded-xl border border-uply-green-muted/10 bg-white p-8 text-left shadow-sm">
                <Quote className="mb-4 h-8 w-8 text-uply-green-muted/40" />
                <blockquote className="text-lg italic leading-relaxed text-uply-dark">
                  &ldquo;{audience.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <span className="font-semibold text-uply-dark">
                    {audience.testimonial.name}
                  </span>
                  <span className="ml-2 text-sm text-uply-gray">
                    {audience.testimonial.role}
                  </span>
                </div>
              </div>
            )}
          </div>
        </Section>
      </FadeIn>

      {/* FAQ */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="mt-12 space-y-8">
              {audience.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-semibold text-uply-dark">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-uply-gray">
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
        <Section theme="dark">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
              Keep exploring
            </h2>
            <div className="mt-10 space-y-4">
              {audience.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-uply-dark-elevated px-5 py-4 transition-colors hover:border-uply-green-muted/30"
                >
                  <span className="text-sm font-medium text-white/80">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/40" />
                </a>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          headline={`Start building better skills for ${audience.name.toLowerCase()}`}
        />
      </FadeIn>
    </>
  );
}
