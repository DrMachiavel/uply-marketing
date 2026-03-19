import { Section } from "@/components/ui/section";

const STEPS = [
  {
    number: "01",
    title: "Install in Slack",
    description:
      "Add Uply to your Slack workspace in one click. Choose the channels, invite your team, and you're live in under 5 minutes.",
  },
  {
    number: "02",
    title: "Daily micro-lessons",
    description:
      "Every morning, Uply posts a situational question. Team members pick their answer -  it takes less than 2 minutes.",
  },
  {
    number: "03",
    title: "Track weekly scores",
    description:
      "Get a weekly digest with participation rates, skill breakdowns, and team leaderboards. Watch your culture shift over time.",
  },
];

export function HowItWorks() {
  return (
    <Section theme="green-wash" id="how-it-works">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-uply-gray">
          Three steps. Five minutes to set up. Zero disruption.
        </p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Connecting line (desktop only) */}
        <div
          className="pointer-events-none absolute top-8 right-[calc(16.67%+1rem)] left-[calc(16.67%+1rem)] hidden h-px bg-uply-green-muted/20 md:block"
          aria-hidden="true"
        />

        {STEPS.map((step) => (
          <div key={step.number} className="relative text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-uply-green-muted/10">
              <span className="text-xl font-bold text-uply-green-muted">
                {step.number}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-uply-gray">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
