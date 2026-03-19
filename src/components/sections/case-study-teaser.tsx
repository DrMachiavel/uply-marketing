"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { SIGNUP_URL } from "@/lib/constants";

/* Inline Slack icon */
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
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2.5 rounded-lg bg-uply-green px-7 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
          >
            <SlackIcon className="h-5 w-5" />
            Add to Slack -  It&apos;s Free
          </a>
        </div>
      </div>
    </Section>
  );
}
