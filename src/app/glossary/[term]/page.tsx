import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import {
  buildMetadata,
  breadcrumbJsonLd,
  jsonLd,
  JsonLdScript,
} from "@/lib/seo";
import { getAllTerms, getTermBySlug } from "@/content/glossary";

interface GlossaryTermPageProps {
  params: Promise<{ term: string }>;
}

export function generateStaticParams() {
  return getAllTerms().map((t) => ({ term: t.slug }));
}

export async function generateMetadata({
  params,
}: GlossaryTermPageProps): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    return { title: "Term Not Found | Uply" };
  }

  return buildMetadata({
    title: `${term.title} | Uply Glossary`,
    description: term.description,
    path: `/glossary/${term.slug}`,
  });
}

export default async function GlossaryTermPage({
  params,
}: GlossaryTermPageProps) {
  const { term: slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTermObjects = term.relatedTerms
    .map((s) => getTermBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: term.term, path: `/glossary/${term.slug}` },
        ])}
      />
      <JsonLdScript
        data={jsonLd({
          "@type": "DefinedTerm",
          name: term.term,
          description: term.definition,
          url: `https://uply.work/glossary/${term.slug}`,
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "Uply Glossary",
            url: "https://uply.work/glossary",
          },
        })}
      />

      {/* Hero */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="dark">Glossary</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {term.title}
            </h1>
          </div>
        </FadeIn>
      </Section>

      {/* Definition */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-uply-dark">Definition</h2>
            <p className="mt-4 text-lg leading-relaxed text-uply-gray">
              {term.definition}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Why it matters */}
      <Section theme="dark">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white">
              Why it matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {term.whyMatters}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* How to apply it */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-uply-dark">
              How to apply it
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-uply-gray">
              {term.howToApply}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* How Uply helps */}
      <Section theme="green-wash">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-uply-dark">
              How Uply helps
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-uply-dark/80">
              {term.howUplyHelps}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Related terms */}
      {relatedTermObjects.length > 0 && (
        <Section theme="light">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold text-uply-dark">
                Related terms
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedTermObjects.map(
                  (related) =>
                    related && (
                      <Link
                        key={related.slug}
                        href={`/glossary/${related.slug}`}
                        className="group block rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:border-uply-green-muted/40 hover:shadow-md"
                      >
                        <h3 className="font-bold text-uply-dark group-hover:text-uply-green-muted">
                          {related.term}
                        </h3>
                        <p className="mt-1 text-sm text-uply-gray">
                          {related.definition.split(". ")[0]}.
                        </p>
                      </Link>
                    )
                )}
              </div>
            </FadeIn>
          </div>
        </Section>
      )}

      {/* Related content */}
      {term.relatedLinks.length > 0 && (
        <Section theme="light" className="!pt-0">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold text-uply-dark">
                Related content
              </h2>
              <ul className="mt-4 space-y-2">
                {term.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-uply-green-muted hover:underline"
                    >
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}
