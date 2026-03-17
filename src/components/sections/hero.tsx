import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlackMockup } from "@/components/ui/slack-mockup";
import { SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <Section theme="dark" className="overflow-hidden py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <div className="text-center lg:text-left">
          <Badge>Soft skills training in Slack</Badge>

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Your team doesn&apos;t have time for soft skills training.{" "}
            <span className="text-uply-green">
              That&apos;s exactly the point.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl lg:mx-0 mx-auto">
            2 minutes a day in Slack. Daily micro-lessons that build leadership,
            collaboration, and communication skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href={SIGNUP_URL} variant="primary" size="lg">
              Get started free
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>

        {/* Right — Slack mockup */}
        <div className="flex justify-center lg:justify-end">
          <SlackMockup />
        </div>
      </div>
    </Section>
  );
}
