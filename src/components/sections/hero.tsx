import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SlackMockup } from "@/components/ui/slack-mockup";
import { SIGNUP_URL } from "@/lib/constants";

function StarRating() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-medium text-white/70">
        Loved by 200+ teams
      </span>
    </div>
  );
}

function BackgroundEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Radial glow behind mockup — animated */}
      <div className="animate-float-1 absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-uply-green/[0.07] blur-[120px]" />
      {/* Smaller accent glow top-left — animated */}
      <div className="animate-float-2 absolute left-[-5%] top-[10%] h-[300px] w-[300px] rounded-full bg-uply-green/[0.04] blur-[100px]" />
      {/* Third subtle blob — animated */}
      <div className="animate-float-3 absolute left-[30%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-uply-green/[0.05] blur-[130px]" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(104, 239, 63, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(104, 239, 63, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <Section theme="dark" className="relative overflow-hidden py-24 md:py-32">
      <BackgroundEffect />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <div className="text-center lg:text-left">
          <StarRating />

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Your team doesn&apos;t have time for soft skills training.{" "}
            <span className="text-uply-green">
              That&apos;s exactly the point.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl lg:mx-0">
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
