"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { SlackInstallButton } from "@/components/ui/slack-install-button";

const STATS = [
  { value: 87, suffix: "%", label: "participation rate" },
  { value: 3, suffix: "x", label: "more peer feedback" },
  { value: 42, suffix: "%", label: "improvement in manager scores" },
];

function AnimatedStat({
  value,
  suffix,
  label,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCurrent(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, value]);

  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-uply-green-muted md:text-6xl">
        {current}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-uply-dark/50">{label}</p>
    </div>
  );
}

export function CaseStudyTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section theme="green-wash" className="py-24 md:py-32">
      <div ref={ref} className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-uply-green-muted">
          Case study
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          How a 40-person startup improved manager feedback scores in&nbsp;4&nbsp;weeks
        </h2>

        {/* Animated stats */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              animate={visible}
            />
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="mx-auto mt-12 max-w-xl border-l-2 border-uply-green-muted/30 pl-6 text-left">
          <p className="text-lg leading-relaxed text-uply-dark/70 italic">
            &ldquo;We didn&apos;t change our process. We just added Uply to Slack and let the team
            do their thing. Four weeks later, our 360 review scores told the story.&rdquo;
          </p>
          <footer className="mt-4 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/48?img=15"
              alt="Laura S."
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-uply-dark">Laura S.</p>
              <p className="text-xs text-uply-dark/40">Head of People</p>
            </div>
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="mt-12">
          <SlackInstallButton location="case-study" />
        </div>
      </div>
    </Section>
  );
}
