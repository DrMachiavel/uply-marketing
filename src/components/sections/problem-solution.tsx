import { Section } from "@/components/ui/section";
import { Zap, LogIn, Rocket } from "lucide-react";

const steps = [
  {
    icon: Zap,
    number: "01",
    title: "Install in Slack",
    description: "One click. Add Uply to your workspace — no IT ticket, no vendor call.",
    accent: "from-uply-green-muted/20 to-uply-green-muted/5",
  },
  {
    icon: LogIn,
    number: "02",
    title: "Zero logins",
    description:
      "No new app to learn. No passwords. Your team already has Slack open.",
    accent: "from-uply-green-muted/15 to-uply-green-muted/5",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Team grows daily",
    description:
      "One question per day, two minutes max. Soft skills that compound — inside the flow of work.",
    accent: "from-uply-green-muted/10 to-uply-green-muted/5",
  },
];

export function ProblemSolution() {
  return (
    <Section theme="dark" className="bg-uply-dark-elevated">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-uply-green-muted">
          Built for growing startups by startup founders
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Set up in 60 seconds.
          <br />
          <span className="text-white/40">No training required.</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all duration-300 hover:border-uply-green-muted/20 hover:shadow-[0_0_40px_-12px_rgba(104,239,63,0.1)]"
          >
            {/* Glow accent on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${step.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="relative">
              {/* Step number */}
              <span className="mb-6 block font-mono text-xs tracking-wider text-white/20">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-uply-green-muted/10">
                <step.icon className="h-6 w-6 text-uply-green-muted" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-white/50">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom line — social proof nudge */}
      <p className="mt-10 text-center text-sm text-white/30">
        Most teams are fully running within their first day.
      </p>
    </Section>
  );
}
