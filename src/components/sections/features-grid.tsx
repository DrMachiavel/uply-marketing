import { Section } from "@/components/ui/section";
import { Lightbulb, Trophy, BookOpen, BarChart3, type LucideIcon } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lightbulb,
    title: "Daily micro-lessons",
    description:
      "One thoughtful question per day, delivered in Slack. Covers leadership, feedback, conflict resolution, and more.",
  },
  {
    icon: Trophy,
    title: "Weekly leaderboard",
    description:
      "Friendly competition drives engagement. Teams and individuals see where they stand each week.",
  },
  {
    icon: BookOpen,
    title: "Skill topics",
    description:
      "Choose from dozens of curated topics — communication, empathy, delegation, coaching — or create your own.",
  },
  {
    icon: BarChart3,
    title: "Team insights",
    description:
      "Actionable dashboards show participation, skill gaps, and trends. Export reports for leadership reviews.",
  },
];

export function FeaturesGrid() {
  return (
    <Section theme="light">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Everything you need to grow soft skills
        </h2>
        <p className="mt-4 text-lg text-uply-gray">
          Simple tools, powerful results.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-uply-dark/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-uply-green/10">
              <feature.icon className="h-6 w-6 text-uply-green" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-uply-gray">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
