"use client";

import { useState, useEffect, useCallback } from "react";
import { Section } from "@/components/ui/section";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We installed Uply on a Monday. By Friday, our team was actually talking about soft skills for the first time.",
    name: "Sarah M.",
    role: "VP People at Relay",
    initials: "SM",
    color: "bg-emerald-500",
  },
  {
    quote:
      "The leaderboard changed everything. Our managers started competing to give better feedback.",
    name: "Thomas K.",
    role: "CEO at Northwind",
    initials: "TK",
    color: "bg-blue-500",
  },
  {
    quote:
      "2 minutes a day. That's it. And the impact on our team culture has been huge.",
    name: "Marie L.",
    role: "Head of HR at Pollen",
    initials: "ML",
    color: "bg-purple-500",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <p className="mb-6 text-base leading-relaxed text-white/80 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.color}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-white/50">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <Section theme="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Loved by teams everywhere
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Here&apos;s what people are saying about Uply.
        </p>
      </div>

      {/* Desktop: show all 3 */}
      <div className="mt-12 hidden grid-cols-3 gap-6 md:grid">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>

      {/* Mobile: single card carousel */}
      <div className="mt-12 md:hidden">
        <TestimonialCard testimonial={TESTIMONIALS[activeIndex]} />

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-uply-green"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
