import { Section } from "@/components/ui/section";
import { SlackMockup } from "@/components/ui/slack-mockup";
import { Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/constants";

const trustChips = [
  "Free Forever",
  "2 Minute Setup",
  "No Credit Card Required",
];

/* Inline Slack icon — 4-color mark */
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.527 2.527 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.522 2.527 2.527 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.522h-6.314z" fill="#ECB22E"/>
    </svg>
  );
}

function BackgroundEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary glow — right side, behind mockup */}
      <div className="animate-float-1 absolute right-[-10%] top-[20%] h-[800px] w-[800px] rounded-full bg-uply-green/[0.07] blur-[250px]" />
      {/* Secondary glow — top left */}
      <div className="animate-float-2 absolute left-[-12%] top-[0%] h-[600px] w-[600px] rounded-full bg-uply-green/[0.05] blur-[220px]" />
      {/* Third glow — bottom center */}
      <div className="animate-float-3 absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-uply-green/[0.04] blur-[230px]" />
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }} />
    </div>
  );
}

export function Hero() {
  return (
    <Section theme="dark" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <BackgroundEffect />
      {/* Bottom fade — softens transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-uply-dark" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Left — Copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
            Soft skills &amp; compliance training for growing startups.{" "}
            <span className="text-uply-green-muted">In&nbsp;Slack. Free&nbsp;forever.</span>
          </h1>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 text-sm text-white/40"
              >
                <Check className="h-3.5 w-3.5 text-uply-green-muted" strokeWidth={2.5} />
                {chip}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2.5 rounded-lg bg-uply-green px-7 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
            >
              <SlackIcon className="h-5 w-5" />
              Add to Slack — It&apos;s Free
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/50 underline decoration-white/20 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white/40"
            >
              See how it works
            </a>
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
