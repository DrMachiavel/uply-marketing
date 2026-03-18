import { Section } from "@/components/ui/section";

export function ProblemSolution() {
  return (
    <Section theme="dark" className="bg-uply-dark-elevated">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Left — Headline */}
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Your employees don&apos;t have time.{" "}
          <span className="text-uply-green">That&apos;s why it works.</span>
        </h2>

        {/* Right — Body */}
        <div className="space-y-5 text-lg leading-relaxed text-white/60">
          <p>
            Traditional soft skills training asks employees to block off hours
            for workshops they&apos;ll forget by next week. It&apos;s expensive,
            disruptive, and rarely sticks.
          </p>
          <p>
            Uply flips the model. One question per day, delivered right where
            your team already works — Slack. In under two minutes, employees
            reflect on real-world scenarios covering leadership, feedback,
            collaboration, and more.
          </p>
          <p>
            The result? Consistent practice that compounds over time. Skills
            that actually develop, without ever leaving the flow of work.
          </p>
        </div>
      </div>
    </Section>
  );
}
