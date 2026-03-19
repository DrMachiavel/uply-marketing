"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

/* ==========================================================================
   Feature 1: Daily Micro-Lessons
   Visual: Animated Slack conversation with question, answer, and feedback
   ========================================================================== */

function DailyLessonsVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2200),
      setTimeout(() => setStep(3), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      {/* Channel */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/[0.06] pb-3">
        <span className="text-sm text-white/40">#</span>
        <span className="text-sm font-semibold text-white/70">team-skills</span>
        <span className="ml-auto text-xs text-white/25">9:01 AM</span>
      </div>

      {/* Bot message */}
      <div className="flex gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg overflow-hidden">
          <svg width="32" height="32" viewBox="0 0 140 140" fill="none">
            <rect width="140" height="140" rx="28" fill="#68ef3f"/>
            <path d="M34 52C34 52 34 104 70 104C106 104 106 52 106 52" stroke="#162415" strokeWidth="13" strokeLinecap="round"/>
            <circle cx="70" cy="38" r="8" fill="#162415"/>
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-bold text-white">Uply</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/40">APP</span>
          </div>

          <p className={`mb-3 text-[13px] leading-relaxed text-white/70 transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
            Your direct report just told you they&apos;re feeling burned out. What&apos;s your first move?
          </p>

          {step >= 2 && (
            <div className="flex flex-col gap-1.5">
              <div className={`rounded-md border px-3 py-2 text-[12px] transition-all duration-300 ${step >= 3 ? "border-uply-green-muted/40 bg-uply-green-muted/10 text-uply-green-muted" : "border-white/10 bg-white/[0.03] text-white/50"}`}>
                Acknowledge it and explore what&apos;s driving it {step >= 3 && <span className="ml-1">✓</span>}
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] text-white/50">
                Suggest they take a day off
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] text-white/50">
                Reassign some of their tasks
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className="mt-3 rounded-lg border border-uply-green-muted/20 bg-uply-green-muted/5 p-3 text-[11px] leading-relaxed text-white/60">
              <span className="font-semibold text-uply-green-muted">Great choice.</span> Starting with empathy shows you care about the person, not just the output. This builds psychological safety.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Feature 2: Weekly Leaderboard
   Visual: Animated leaderboard with rankings sliding in
   ========================================================================== */

function LeaderboardVisual() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealed(1), 400),
      setTimeout(() => setRevealed(2), 700),
      setTimeout(() => setRevealed(3), 1000),
      setTimeout(() => setRevealed(4), 1300),
      setTimeout(() => setRevealed(5), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const users = [
    { rank: 1, name: "Marie L.", score: 48, bar: "w-[96%]", avatar: "ML", color: "bg-yellow-500/20 text-yellow-400" },
    { rank: 2, name: "Thomas K.", score: 45, bar: "w-[90%]", avatar: "TK", color: "bg-gray-400/20 text-gray-300" },
    { rank: 3, name: "Sarah M.", score: 42, bar: "w-[84%]", avatar: "SM", color: "bg-orange-400/20 text-orange-300" },
    { rank: 4, name: "Lucas D.", score: 38, bar: "w-[76%]", avatar: "LD", color: "bg-white/10 text-uply-dark/60" },
    { rank: 5, name: "Emma R.", score: 35, bar: "w-[70%]", avatar: "ER", color: "bg-white/10 text-uply-dark/60" },
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-uply-green-muted/10 bg-white p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
        <span className="text-sm font-semibold text-uply-dark">Weekly Leaderboard</span>
        <span className="rounded-full bg-uply-green-muted/10 px-2 py-0.5 text-[10px] font-medium text-uply-green-muted">This week</span>
      </div>

      <div className="space-y-3">
        {users.map((u, i) => (
          <div
            key={u.rank}
            className={`flex items-center gap-3 transition-all duration-500 ${i < revealed ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${u.color}`}>
              {u.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[13px] font-medium text-uply-dark">
                  {i === 0 && <span className="mr-1">🥇</span>}
                  {i === 1 && <span className="mr-1">🥈</span>}
                  {i === 2 && <span className="mr-1">🥉</span>}
                  {u.name}
                </span>
                <span className="text-xs font-semibold text-uply-green-muted">{u.score} pts</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100">
                <div className={`h-1.5 rounded-full bg-uply-green-muted/50 transition-all duration-700 ${i < revealed ? u.bar : "w-0"}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-gray-100 pt-3 text-center text-[11px] text-uply-gray">
        Updated every Monday at 9:00 AM
      </div>
    </div>
  );
}

/* ==========================================================================
   Feature 3: Skill Topics
   Visual: Interactive topic cards you can click to explore
   ========================================================================== */

function SkillTopicsVisual() {
  const [active, setActive] = useState("Leadership");

  const topics = [
    { name: "Leadership", questions: 24, color: "from-emerald-500/20 to-emerald-500/5" },
    { name: "Feedback", questions: 18, color: "from-blue-500/20 to-blue-500/5" },
    { name: "Collaboration", questions: 21, color: "from-purple-500/20 to-purple-500/5" },
    { name: "Communication", questions: 20, color: "from-amber-500/20 to-amber-500/5" },
    { name: "Conflict", questions: 15, color: "from-rose-500/20 to-rose-500/5" },
    { name: "Time Mgmt", questions: 16, color: "from-cyan-500/20 to-cyan-500/5" },
  ];

  const activeTopic = topics.find((t) => t.name === active)!;

  return (
    <div className="w-full max-w-sm rounded-xl border border-uply-green-muted/10 bg-white p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-uply-dark">Skill Topics</span>
        <span className="text-xs text-uply-gray">6 available</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        {topics.map((t) => (
          <button
            key={t.name}
            onClick={() => setActive(t.name)}
            className={`rounded-lg border p-3 text-left transition-all duration-200 ${
              active === t.name
                ? "border-uply-green-muted/30 bg-gradient-to-br " + t.color
                : "border-gray-100 bg-gray-50/50 hover:border-gray-200"
            }`}
          >
            <span className={`block text-xs font-semibold ${active === t.name ? "text-uply-dark" : "text-uply-gray"}`}>
              {t.name}
            </span>
            <span className="mt-0.5 block text-[10px] text-uply-gray">
              {t.questions} questions
            </span>
          </button>
        ))}
      </div>

      <div className="rounded-lg bg-uply-green-wash p-3">
        <p className="text-xs font-medium text-uply-dark">{activeTopic.name}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-uply-gray">
          {activeTopic.questions} scenario-based questions designed by L&D experts. New content added monthly.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   Feature 4: Team Insights
   Visual: Mini analytics dashboard with animated bars
   ========================================================================== */

function TeamInsightsVisual() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "Leadership", score: 87, prev: 72 },
    { name: "Feedback", score: 79, prev: 65 },
    { name: "Collaboration", score: 92, prev: 88 },
    { name: "Communication", score: 74, prev: 61 },
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <span className="text-sm font-semibold text-white/70">Team Insights</span>
        <span className="text-xs text-white/30">Last 30 days</span>
      </div>

      {/* Key metrics */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-white/[0.04] p-3 text-center">
          <span className={`block text-xl font-bold text-uply-green-muted transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
            94%
          </span>
          <span className="text-[10px] text-white/40">Participation</span>
        </div>
        <div className="rounded-lg bg-white/[0.04] p-3 text-center">
          <span className={`block text-xl font-bold text-uply-green-muted transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
            +18%
          </span>
          <span className="text-[10px] text-white/40">Growth</span>
        </div>
        <div className="rounded-lg bg-white/[0.04] p-3 text-center">
          <span className={`block text-xl font-bold text-uply-green-muted transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
            4.8
          </span>
          <span className="text-[10px] text-white/40">Avg score</span>
        </div>
      </div>

      {/* Skill breakdown */}
      <p className="mb-3 text-xs font-medium text-white/50">Skill breakdown</p>
      <div className="space-y-3">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[12px] text-white/60">{s.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/25 line-through">{s.prev}%</span>
                <span className="text-[12px] font-semibold text-uply-green-muted">{s.score}%</span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-white/5">
              <div
                className="h-1.5 rounded-full bg-uply-green-muted/40 transition-all duration-1000 ease-out"
                style={{ width: loaded ? `${s.score}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   Feature Section -  alternating text/visual layout
   ========================================================================== */

interface FeatureSectionProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
  reversed?: boolean;
  theme: "dark" | "light" | "green-wash";
}

function FeatureSection({ badge, title, description, bullets, visual, reversed, theme }: FeatureSectionProps) {
  const isDark = theme === "dark";

  return (
    <Section theme={theme}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={reversed ? "lg:order-2" : ""}>
          <Badge variant={isDark ? "green" : "dark"}>{badge}</Badge>
          <h2 className={`mt-4 text-3xl font-bold tracking-tight md:text-4xl ${isDark ? "text-white" : "text-uply-dark"}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${isDark ? "text-white/60" : "text-uply-gray"}`}>
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className={`flex items-start gap-3 text-sm ${isDark ? "text-white/50" : "text-uply-gray"}`}>
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-uply-green-muted" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}>
          {visual}
        </div>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Export
   ========================================================================== */

export function FeaturesGrid() {
  return (
    <>
      <FeatureSection
        badge="Daily micro-lessons"
        title="One question a day. Two minutes. Real growth."
        description="Every morning, Uply drops a scenario-based question into your Slack channel. Your team answers, gets instant feedback, and moves on with their day."
        bullets={[
          "Multiple choice and open-ended formats",
          "Instant explanations after each answer",
          "Delivered at the time you choose",
        ]}
        visual={<DailyLessonsVisual />}
        theme="dark"
      />

      <FeatureSection
        badge="Weekly leaderboard"
        title="Friendly competition that drives engagement."
        description="Every week, Uply ranks your team based on participation and answer quality. Top performers get recognized -  and everyone gets motivated."
        bullets={[
          "Automatic weekly rankings posted in Slack",
          "Celebrates consistency, not just correctness",
          "Drives 94% average weekly completion",
        ]}
        visual={<LeaderboardVisual />}
        reversed
        theme="green-wash"
      />

      <FeatureSection
        badge="Skill topics"
        title="Pick the skills your team needs most."
        description="Choose from a growing library of expert-designed topics. Each one is packed with real-world scenarios your team will actually face."
        bullets={[
          "Leadership, collaboration, feedback, and more",
          "New topics added every month",
          "Free plan includes 1 topic -  Pro unlocks all",
        ]}
        visual={<SkillTopicsVisual />}
        theme="light"
      />

      <FeatureSection
        badge="Team insights"
        title="See your team's skills evolve in real time."
        description="Track participation, skill growth, and trends across your team. Export reports for leadership reviews or board updates."
        bullets={[
          "Participation rates and streaks",
          "Skill-by-skill breakdown and progress",
          "Export-ready reports for stakeholders",
        ]}
        visual={<TeamInsightsVisual />}
        reversed
        theme="dark"
      />
    </>
  );
}
