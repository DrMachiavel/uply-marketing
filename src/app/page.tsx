import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { StatsBar } from "@/components/sections/stats-bar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudyTeaser } from "@/components/sections/case-study-teaser";
import { CTASection } from "@/components/sections/cta-section";
import { FadeIn } from "@/components/ui/fade-in";
import { webSiteJsonLd, JsonLdScript } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={webSiteJsonLd()} />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <SocialProof />
      </FadeIn>
      <FadeIn>
        <StatsBar />
      </FadeIn>
      <FadeIn>
        <ProblemSolution />
      </FadeIn>
      <FadeIn>
        <HowItWorks />
      </FadeIn>
      <FadeIn>
        <FeaturesGrid />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <CaseStudyTeaser />
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
