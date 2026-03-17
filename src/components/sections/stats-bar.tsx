import { Section } from "@/components/ui/section";

const STATS = [
  { value: "2,500+", label: "employees trained" },
  { value: "50,000+", label: "questions answered" },
  { value: "94%", label: "weekly completion rate" },
];

export function StatsBar() {
  return (
    <Section theme="dark" className="border-t border-white/10 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-uply-green md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
