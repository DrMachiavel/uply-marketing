import { Section } from "@/components/ui/section";

const topics = [
  {
    icon: "🎯",
    name: "Leadership",
    description: "Build confidence in guiding teams and making decisions.",
  },
  {
    icon: "🤝",
    name: "Collaboration",
    description: "Strengthen teamwork and cross-functional partnerships.",
  },
  {
    icon: "💬",
    name: "Communication",
    description: "Master clear, empathetic, and effective communication.",
  },
  {
    icon: "📝",
    name: "Feedback",
    description: "Give and receive feedback that drives real growth.",
  },
  {
    icon: "⚖️",
    name: "Conflict Resolution",
    description: "Navigate disagreements with poise and empathy.",
  },
  {
    icon: "⏱️",
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
            className="rounded-xl border border-uply-green/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-3xl" role="img" aria-label={topic.name}>
              {topic.icon}
            </span>
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
