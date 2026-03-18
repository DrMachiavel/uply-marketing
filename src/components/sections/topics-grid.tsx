import { Section } from "@/components/ui/section";
import { Target, Users, MessageCircle, PenLine, Scale, Clock, type LucideIcon } from "lucide-react";

const topics: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Target,
    name: "Leadership",
    description: "Build confidence in guiding teams and making decisions.",
  },
  {
    icon: Users,
    name: "Collaboration",
    description: "Strengthen teamwork and cross-functional partnerships.",
  },
  {
    icon: MessageCircle,
    name: "Communication",
    description: "Master clear, empathetic, and effective communication.",
  },
  {
    icon: PenLine,
    name: "Feedback",
    description: "Give and receive feedback that drives real growth.",
  },
  {
    icon: Scale,
    name: "Conflict Resolution",
    description: "Navigate disagreements with poise and empathy.",
  },
  {
    icon: Clock,
    name: "Time Management",
    description: "Prioritize effectively and protect focused work time.",
  },
];

export function TopicsGrid() {
  return (
    <Section theme="green-wash">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-uply-dark md:text-4xl">
          Topics your team will master
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-uply-gray">
          Practical, scenario-based lessons across the skills that matter most.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="rounded-xl border border-uply-green-muted/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-uply-green-muted/10">
              <topic.icon className="h-6 w-6 text-uply-green-muted" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-uply-dark">
              {topic.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-uply-gray">
              {topic.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
