import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import {
  buildMetadata,
  breadcrumbJsonLd,
  JsonLdScript,
} from "@/lib/seo";
import { getAllSkills } from "@/content/skills";

export const metadata: Metadata = buildMetadata({
  title: "Soft Skills Training Topics",
  description:
    "Browse the soft skills your team can develop with Uply's daily Slack training — leadership, communication, feedback, collaboration, and more.",
  path: "/skills",
});

export default function SkillsIndexPage() {
  const skills = getAllSkills();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ])}
      />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Training Topics</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Soft Skills Training Topics
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Browse the skills your team can develop with Uply&apos;s daily
              Slack training.
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Skills grid */}
      <FadeIn>
        <Section theme="light">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-uply-green-muted/30 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-uply-dark group-hover:text-uply-green-muted">
                  {skill.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-uply-gray">
                  {skill.heroHeadline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-uply-green-muted">
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection headline="Start building better skills today" />
      </FadeIn>
    </>
  );
}
