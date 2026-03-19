import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { SampleQuestion } from "@/components/ui/sample-question";
import { CTASection } from "@/components/sections/cta-section";
import {
  buildMetadata,
  breadcrumbJsonLd,
  JsonLdScript,
} from "@/lib/seo";
import { getAllSkills, getSkillBySlug } from "@/content/skills";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ skill: s.slug }));
}

/* ---------- Metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}): Promise<Metadata> {
  const { skill: slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return {};

  return buildMetadata({
    title: skill.title,
    description: skill.description,
    path: `/skills/${skill.slug}`,
  });
}

/* ---------- Page ---------- */

export default async function SkillPage({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const relatedSkills = skill.relatedSkills
    .map((s) => getSkillBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
          { name: skill.name, path: `/skills/${skill.slug}` },
        ])}
      />

      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>{skill.name}</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {skill.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              {skill.heroCopy}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* What is {skill}? */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              What is {skill.name.toLowerCase()}?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-uply-gray">
              {skill.whatIs}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Why it matters */}
      <FadeIn>
        <Section theme="dark">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Why it matters at work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              {skill.whyMatters}
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Common challenges */}
      <FadeIn>
        <Section theme="light">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
              Common challenges
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {skill.challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-uply-dark">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-uply-gray">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* How Uply helps */}
      <FadeIn>
        <Section theme="green-wash">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              How Uply builds this skill
            </h2>
            {skill.howUplyHelps.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mt-4 text-lg leading-relaxed text-uply-gray"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* Sample question */}
      <FadeIn>
        <Section theme="dark">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
              Try a sample question
            </h2>
            <div className="flex justify-center">
              <SampleQuestion
                scenario={skill.sampleQuestion.scenario}
                options={skill.sampleQuestion.options}
                correct={skill.sampleQuestion.correct}
                explanation={skill.sampleQuestion.explanation}
              />
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* Related skills */}
      {relatedSkills.length > 0 && (
        <FadeIn>
          <Section theme="light">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
                Related skills
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedSkills.map((rs) =>
                  rs ? (
                    <Link
                      key={rs.slug}
                      href={`/skills/${rs.slug}`}
                      className="rounded-full border border-uply-green-muted/20 bg-uply-green-wash px-4 py-2 text-sm font-medium text-uply-dark transition-colors hover:border-uply-green-muted/40 hover:bg-uply-green-muted/10"
                    >
                      {rs.name}
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </Section>
        </FadeIn>
      )}

      {/* Related content */}
      {(skill.relatedBlog.length > 0 || skill.relatedFor.length > 0) && (
        <FadeIn>
          <Section theme="light" className="pt-0">
            <div className="mx-auto max-w-3xl border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
                Related content
              </h2>
              <ul className="mt-6 space-y-3">
                {skill.relatedBlog.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-uply-green-muted hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                {skill.relatedFor.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-uply-green-muted hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </FadeIn>
      )}

      {/* CTA */}
      <FadeIn>
        <CTASection
          headline={`Start building ${skill.name.toLowerCase()} skills today`}
        />
      </FadeIn>
    </>
  );
}
