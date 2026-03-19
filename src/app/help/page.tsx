import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { getHelpCategories } from "@/lib/help";
import { SITE_CONFIG } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";
import { HelpSearch } from "./help-search";

export const metadata: Metadata = buildMetadata({
  title: "Help Center",
  description:
    "Find answers to common questions about Uply's Slack training app — setup, daily lessons, scoring, billing, privacy, and GDPR compliance.",
  path: "/help",
});

export default function HelpCenterPage() {
  const categories = getHelpCategories();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Help Center", path: "/help" },
        ])}
      />
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              How can we help?
            </h1>
            <div className="mt-8">
              <HelpSearch categories={categories} />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Category grid */}
      <Section theme="light">
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/help/${category.slug}`}
                className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-uply-green-muted hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-uply-dark group-hover:text-uply-green-muted">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm text-uply-gray">
                  {category.description}
                </p>
                <p className="mt-4 text-xs font-medium text-uply-gray">
                  {category.articleCount}{" "}
                  {category.articleCount === 1 ? "article" : "articles"}
                </p>
              </a>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Contact section */}
      <Section theme="green-wash">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              Can&apos;t find what you need?
            </h2>
            <p className="mt-4 text-lg text-uply-gray">
              Email us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email.support}`}
                className="font-medium text-uply-green-muted hover:underline"
              >
                {SITE_CONFIG.email.support}
              </a>{" "}
              or check out our{" "}
              <a
                href="/blog"
                className="font-medium text-uply-green-muted hover:underline"
              >
                blog
              </a>{" "}
              for tips on soft skills and team development.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
