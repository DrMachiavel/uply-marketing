import { Suspense } from "react";
import type { Metadata } from "next";
import { TeamSkillsAssessment } from "./assessment";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Team Skills Assessment",
  description:
    "Assess your team's soft skills maturity in 2 minutes. Get scores across communication, leadership, collaboration, conflict resolution, feedback culture, and adaptability.",
  path: "/tools/team-skills-assessment",
});

export default function TeamSkillsAssessmentPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/team-skills-assessment" },
          {
            name: "Team Skills Assessment",
            path: "/tools/team-skills-assessment",
          },
        ])}
      />
      <Suspense>
        <TeamSkillsAssessment />
      </Suspense>
      <CTASection
        headline="Ready to build these skills?"
        subheadline="Join 200+ teams already using Uply to develop stronger soft skills through daily micro-lessons in Slack."
      />
    </>
  );
}
