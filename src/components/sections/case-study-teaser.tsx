import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "87%", label: "participation rate" },
  { value: "3x", label: "more peer feedback" },
  { value: "42%", label: "improvement in manager scores" },
];

export function CaseStudyTeaser() {
  return (
    <Section theme="green-wash">
      <div className="overflow-hidden rounded-2xl bg-uply-green-wash">
        <div className="p-8 md:p-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-uply-green-muted">
            Case study
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
            How Northwind improved manager feedback scores in 4&nbsp;weeks
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-uply-green-muted md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-uply-gray">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button href="#" variant="primary" size="md">
            Read the full story
          </Button>
        </div>
      </div>
    </Section>
  );
}
