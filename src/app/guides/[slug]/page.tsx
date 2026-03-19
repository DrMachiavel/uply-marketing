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
  JsonLdScript,
} from "@/lib/seo";
import { getAllGuides, getGuideBySlug } from "@/content/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | Uply" };
  }

  return buildMetadata({
    title: `${guide.title} | Uply`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    openGraph: { type: "article" },
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />

      {/* Hero */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="dark">Guide</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {guide.heroHeadline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {guide.heroCopy}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Table of contents */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-xl font-bold text-uply-dark">
              In this guide
            </h2>
            <nav className="mt-4">
              <ol className="space-y-2">
                {guide.sections.map((section, i) => (
                  <li key={slugify(section.heading)}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text-uply-green-muted hover:underline"
                    >
                      {i + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </FadeIn>
        </div>
      </Section>

      {/* Content sections */}
      {guide.sections.map((section, i) => (
        <Section
          key={slugify(section.heading)}
          theme={i % 2 === 0 ? "light" : "dark"}
          id={slugify(section.heading)}
          className={i === 0 ? "!pt-0" : ""}
        >
          <article className="mx-auto max-w-3xl">
            <FadeIn>
              <h2
                className={`text-2xl font-bold md:text-3xl ${
                  i % 2 === 0 ? "text-uply-dark" : "text-white"
                }`}
              >
                {section.heading}
              </h2>
              <div
                className={`prose prose-lg mt-6 max-w-none ${
                  i % 2 === 0
                    ? "prose-gray prose-headings:text-uply-dark prose-a:text-uply-green-muted prose-strong:text-uply-dark"
                    : "prose-invert prose-a:text-uply-green prose-strong:text-white"
                } prose-a:no-underline hover:prose-a:underline`}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </FadeIn>
          </article>
        </Section>
      ))}

      {/* Related links */}
      {guide.relatedLinks.length > 0 && (
        <Section theme="green-wash">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold text-uply-dark">
                Related resources
              </h2>
              <ul className="mt-4 space-y-2">
                {guide.relatedLinks.map((link) => (
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
