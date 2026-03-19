"use client";

import { Section } from "@/components/ui/section";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const ROW_1: Testimonial[] = [
  {
    quote:
      "We installed Uply on a Monday. By Friday, our team was actually talking about soft skills for the first time.",
    name: "Sarah M.",
    role: "VP People at Relay",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "The leaderboard changed everything. Our managers started competing to give better feedback.",
    name: "Thomas K.",
    role: "Head of People at Folk",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote:
      "2 minutes a day. That's it. And the impact on our team culture has been huge.",
    name: "Marie L.",
    role: "Head of HR at Pollen",
    avatar: "https://i.pravatar.cc/80?img=23",
  },
  {
    quote:
      "We tried workshops, coaching, e-learning -  nothing stuck. Uply is the first thing our team actually engages with.",
    name: "Alex R.",
    role: "People Ops at Figures",
    avatar: "https://i.pravatar.cc/80?img=51",
  },
  {
    quote:
      "Our compliance completion rate went from 40% to 95% in the first month. No reminders needed.",
    name: "Julie P.",
    role: "Ops Lead at Alma",
    avatar: "https://i.pravatar.cc/80?img=44",
  },
];

const ROW_2: Testimonial[] = [
  {
    quote:
      "I love that there's nothing to manage. Install it, pick your topics, and it just works.",
    name: "David N.",
    role: "Founder at Partoo",
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    quote:
      "The daily questions spark real conversations in our channels. It's become part of our culture.",
    name: "Camille B.",
    role: "People Ops at Yousign",
    avatar: "https://i.pravatar.cc/80?img=9",
  },
  {
    quote:
      "We're a 15-person team. We can't afford a training budget. Uply being free is a game-changer.",
    name: "Nils F.",
    role: "Co-founder at Topo",
    avatar: "https://i.pravatar.cc/80?img=59",
  },
  {
    quote:
      "Onboarding new hires with Uply's collaboration track has cut our ramp time noticeably.",
    name: "Léa D.",
    role: "Head of People at Brigad",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    quote:
      "Finally, soft skills training that doesn't make people groan. Our team actually looks forward to it.",
    name: "Marc V.",
    role: "Team Lead at Shine",
    avatar: "https://i.pravatar.cc/80?img=61",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[340px] shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
      <p className="mb-5 text-sm leading-relaxed text-white/70">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-white/40">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction = "left",
  duration = "60s",
}: {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  duration?: string;
}) {
  // Double the list for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-uply-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-uply-dark to-transparent" />

      <div
        className="flex gap-5 hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-testimonials ${duration} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section theme="dark" className="py-24 md:py-32">
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Loved by startups everywhere
        </h2>
        <p className="mt-4 text-lg text-white/40">
          Here&apos;s what people are saying about Uply.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5">
        <MarqueeRow testimonials={ROW_1} direction="left" duration="50s" />
        <MarqueeRow testimonials={ROW_2} direction="right" duration="55s" />
      </div>

      {/* Inline keyframes -  scoped to this component */}
      <style>{`
        @keyframes marquee-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Section>
  );
}
