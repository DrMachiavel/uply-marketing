import { Section } from "@/components/ui/section";
import { SlackInstallButton } from "@/components/ui/slack-install-button";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export function CTASection({
  headline = "Ready to build better soft skills?",
  subheadline = "Join 200+ teams already using Uply. Free to start.",
}: CTASectionProps) {
  return (
    <Section theme="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/60">
          {subheadline}
        </p>
        <div className="mt-8">
          <SlackInstallButton location="cta-section" />
        </div>
      </div>
    </Section>
  );
}
