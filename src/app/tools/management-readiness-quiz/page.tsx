import { Suspense } from "react";
import type { Metadata } from "next";
import { ManagementReadinessQuiz } from "./quiz";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Management Readiness Quiz",
  description:
    "Are your first-time managers ready to lead? Assess readiness across 5 critical dimensions in 2 minutes. Free tool by Uply.",
  path: "/tools/management-readiness-quiz",
});

export default function ManagementReadinessQuizPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/management-readiness-quiz" },
          {
            name: "Management Readiness Quiz",
            path: "/tools/management-readiness-quiz",
          },
        ])}
      />
      <Suspense>
        <ManagementReadinessQuiz />
      </Suspense>
      <CTASection
        headline="Build management skills with Uply"
        subheadline="2 minutes a day in Slack. Join 200+ teams developing stronger leaders through daily micro-lessons."
      />
    </>
  );
}
