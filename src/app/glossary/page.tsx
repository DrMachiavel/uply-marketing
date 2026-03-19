import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";
import { getAllTerms } from "@/content/glossary";

export const metadata: Metadata = buildMetadata({
  title: "Glossary -  Workplace Learning Terms Explained | Uply",
  description:
    "Clear, practical definitions of workplace learning and soft skills terms -  microlearning, spaced repetition, psychological safety, growth mindset, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const terms = getAllTerms();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />

      {/* Hero */}
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <Badge variant="dark">Glossary</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Workplace Learning Terms Explained
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Clear, practical definitions of the concepts behind effective team
              development -  from microlearning to psychological safety.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Terms grid */}
      <Section theme="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((term) => (
            <FadeIn key={term.slug}>
              <Link
                href={`/glossary/${term.slug}`}
                className="group block rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-uply-green-muted/40 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-uply-dark group-hover:text-uply-green-muted">
                  {term.term}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-uply-gray">
                  {term.definition.split(". ")[0]}.
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
