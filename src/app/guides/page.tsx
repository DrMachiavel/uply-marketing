import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";
import { getAllGuides } from "@/content/guides";

export const metadata: Metadata = buildMetadata({
  title: "Guides — In-depth Resources for Team Development | Uply",
  description:
    "Comprehensive guides on soft skills training, measurement frameworks, and building stronger teams. In-depth resources backed by research.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />

      {/* Hero */}
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <Badge variant="dark">Guides</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              In-depth Resources for Team Development
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Comprehensive, research-backed guides on building soft skills,
              measuring progress, and creating a culture of continuous learning.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Guides list */}
      <Section theme="light">
        <div className="grid gap-8 lg:grid-cols-2">
          {guides.map((guide) => (
            <FadeIn key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="group block rounded-xl border border-gray-200 p-8 transition-all duration-200 hover:border-uply-green-muted/40 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-uply-dark group-hover:text-uply-green-muted md:text-2xl">
                  {guide.title}
                </h2>
                <p className="mt-3 leading-relaxed text-uply-gray">
                  {guide.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-uply-green-muted">
                  Read guide &rarr;
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
