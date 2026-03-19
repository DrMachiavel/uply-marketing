"use client";

import { useState, useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { EmailCapture } from "@/components/ui/email-capture";
import { SIGNUP_URL } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Option {
  text: string;
  score: number;
}

interface Question {
  category: string;
  categoryKey: string;
  text: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  // Communication
  {
    category: "Communication",
    categoryKey: "c",
    text: "When a team member disagrees with a decision in a meeting, they typically...",
    options: [
      { text: "Stay silent and complain later", score: 1 },
      { text: "Send a passive-aggressive Slack message after", score: 2 },
      { text: "Voice concern but struggle to articulate why", score: 3 },
      { text: "Clearly explain their perspective with specific reasoning", score: 4 },
    ],
  },
  {
    category: "Communication",
    categoryKey: "c",
    text: "How does your team handle sharing bad news (missed deadlines, bugs, failures)?",
    options: [
      { text: "People hide problems until they become crises", score: 1 },
      { text: "Only escalate when asked directly", score: 2 },
      { text: "Share bad news but sugar-coat it significantly", score: 3 },
      { text: "Surface problems early with proposed solutions", score: 4 },
    ],
  },
  // Leadership
  {
    category: "Leadership",
    categoryKey: "l",
    text: "When a new initiative needs an owner, what happens?",
    options: [
      { text: "Silence until someone is assigned by management", score: 1 },
      { text: "The same 1-2 people always volunteer", score: 2 },
      { text: "People volunteer but need heavy guidance", score: 3 },
      { text: "Multiple people step up and self-organize effectively", score: 4 },
    ],
  },
  {
    category: "Leadership",
    categoryKey: "l",
    text: "How do managers on your team handle giving critical feedback?",
    options: [
      { text: "They avoid it entirely", score: 1 },
      { text: "They give it only during formal reviews", score: 2 },
      { text: "They try but it often comes across as harsh or vague", score: 3 },
      { text: "They give timely, specific, actionable feedback regularly", score: 4 },
    ],
  },
  // Collaboration
  {
    category: "Collaboration",
    categoryKey: "co",
    text: "When two teams need to work together on a project, what typically happens?",
    options: [
      { text: "Finger-pointing and blame when things go wrong", score: 1 },
      { text: "Minimal communication, work in silos", score: 2 },
      { text: "Regular syncs but misaligned priorities", score: 3 },
      { text: "Clear shared goals, proactive communication, joint ownership", score: 4 },
    ],
  },
  {
    category: "Collaboration",
    categoryKey: "co",
    text: "How does your team handle knowledge sharing?",
    options: [
      { text: "Knowledge lives in individual heads, people hoard information", score: 1 },
      { text: "Documentation exists but is outdated or hard to find", score: 2 },
      { text: "Some team members actively share, others don't", score: 3 },
      { text: "Systematic knowledge sharing is part of the culture", score: 4 },
    ],
  },
  // Conflict Resolution
  {
    category: "Conflict Resolution",
    categoryKey: "cr",
    text: "When two team members have a personal conflict, what happens?",
    options: [
      { text: "It festers and eventually someone leaves", score: 1 },
      { text: "Management steps in only when it becomes a visible problem", score: 2 },
      { text: "They try to resolve it but often need mediation", score: 3 },
      { text: "They address it directly and constructively, usually resolving it themselves", score: 4 },
    ],
  },
  {
    category: "Conflict Resolution",
    categoryKey: "cr",
    text: "How does your team handle disagreements about technical decisions?",
    options: [
      { text: "The loudest voice or highest rank wins", score: 1 },
      { text: "Decisions drag on for weeks with no resolution", score: 2 },
      { text: "Team debates but sometimes lacks structured decision-making", score: 3 },
      { text: "Uses structured approaches (RFCs, decision frameworks) and commits once decided", score: 4 },
    ],
  },
  // Feedback Culture
  {
    category: "Feedback Culture",
    categoryKey: "f",
    text: "How often do team members give each other unsolicited positive feedback?",
    options: [
      { text: "Almost never", score: 1 },
      { text: "Only during formal recognition programs", score: 2 },
      { text: "Occasionally, but it feels forced", score: 3 },
      { text: "Regularly and naturally -  it's part of how the team operates", score: 4 },
    ],
  },
  {
    category: "Feedback Culture",
    categoryKey: "f",
    text: "When someone makes a mistake, the typical team response is...",
    options: [
      { text: "Blame and criticism", score: 1 },
      { text: "Awkward silence, pretend it didn't happen", score: 2 },
      { text: "Supportive but don't discuss what to learn from it", score: 3 },
      { text: "Blameless discussion focused on learning and preventing recurrence", score: 4 },
    ],
  },
  // Adaptability
  {
    category: "Adaptability",
    categoryKey: "a",
    text: "When priorities suddenly change (pivot, reorg, new strategy), your team...",
    options: [
      { text: "Resists and complains, takes weeks to adjust", score: 1 },
      { text: "Goes along but morale drops significantly", score: 2 },
      { text: "Adapts but needs significant hand-holding from leadership", score: 3 },
      { text: "Regroups quickly, asks the right questions, and moves forward", score: 4 },
    ],
  },
  {
    category: "Adaptability",
    categoryKey: "a",
    text: "How does your team approach learning new skills or tools?",
    options: [
      { text: "Avoids change, sticks with what they know", score: 1 },
      { text: "Only learns when forced to by management", score: 2 },
      { text: "Some individuals are proactive learners, others aren't", score: 3 },
      { text: "Team actively seeks growth opportunities and shares learnings", score: 4 },
    ],
  },
];

const CATEGORIES = [
  { key: "c", label: "Communication" },
  { key: "l", label: "Leadership" },
  { key: "co", label: "Collaboration" },
  { key: "cr", label: "Conflict Resolution" },
  { key: "f", label: "Feedback Culture" },
  { key: "a", label: "Adaptability" },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getCategoryLabel(score: number): string {
  if (score <= 3) return "Critical";
  if (score <= 5) return "Developing";
  if (score <= 6) return "Competent";
  return "Advanced";
}

function getCategoryLabelColor(score: number): string {
  if (score <= 3) return "text-red-400";
  if (score <= 5) return "text-yellow-400";
  if (score <= 6) return "text-blue-400";
  return "text-uply-green-muted";
}

function getOverallTier(total: number): { label: string; description: string } {
  if (total <= 18)
    return {
      label: "Critical",
      description: "Your team needs immediate soft skills intervention",
    };
  if (total <= 28)
    return {
      label: "Developing",
      description: "There's awareness but no consistent practice",
    };
  if (total <= 38)
    return {
      label: "Competent",
      description: "Good foundation, room for targeted improvement",
    };
  return {
    label: "Advanced",
    description: "Your team has strong soft skills culture",
  };
}

function getTierColor(total: number): string {
  if (total <= 18) return "text-red-400";
  if (total <= 28) return "text-yellow-400";
  if (total <= 38) return "text-blue-400";
  return "text-uply-green-muted";
}

function getCategoryRecommendation(key: string, score: number): string {
  const recs: Record<string, Record<string, string>> = {
    c: {
      Critical: "Establish psychological safety so people feel safe speaking up",
      Developing: "Introduce structured communication frameworks like SBAR or nonviolent communication",
      Competent: "Practice active listening exercises and feedback loops in team meetings",
      Advanced: "Mentor other teams on your communication practices",
    },
    l: {
      Critical: "Start with leadership basics -  define what ownership looks like on your team",
      Developing: "Create rotation programs so leadership is distributed, not concentrated",
      Competent: "Invest in coaching skills for your managers and emerging leaders",
      Advanced: "Focus on developing leaders who develop other leaders",
    },
    co: {
      Critical: "Break down silos by creating cross-functional project teams with shared KPIs",
      Developing: "Implement regular cross-team syncs with clear agendas and action items",
      Competent: "Focus on aligning incentives so collaboration is rewarded, not just individual output",
      Advanced: "Document and share your collaboration playbook with the broader organization",
    },
    cr: {
      Critical: "Train the team on basic conflict resolution and create safe escalation paths",
      Developing: "Introduce structured decision-making frameworks like RACI or RAPID",
      Competent: "Practice difficult conversations through role-playing and scenario exercises",
      Advanced: "Build peer mediation capabilities within the team",
    },
    f: {
      Critical: "Start small -  introduce a weekly wins channel or kudos ritual",
      Developing: "Train managers on the SBI (Situation-Behavior-Impact) feedback model",
      Competent: "Create regular retrospectives focused on learning, not blame",
      Advanced: "Help normalize continuous feedback as a daily practice, not an event",
    },
    a: {
      Critical: "Build change resilience by involving the team in decision-making early",
      Developing: "Create learning time -  dedicate hours each week to skill development",
      Competent: "Encourage experimentation with low-stakes pilot projects",
      Advanced: "Channel your adaptability into mentoring other teams through transitions",
    },
  };
  const label = getCategoryLabel(score);
  return recs[key]?.[label] ?? "";
}

interface CategoryScores {
  c: number;
  l: number;
  co: number;
  cr: number;
  f: number;
  a: number;
}

function parseScoresFromParams(
  params: URLSearchParams
): CategoryScores | null {
  const keys = ["c", "l", "co", "cr", "f", "a"] as const;
  const scores: Partial<CategoryScores> = {};
  for (const key of keys) {
    const val = params.get(key);
    if (!val) return null;
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 2 || num > 8) return null;
    scores[key] = num;
  }
  return scores as CategoryScores;
}

function scoresToParams(scores: CategoryScores): string {
  return new URLSearchParams(
    Object.entries(scores).map(([k, v]) => [k, String(v)])
  ).toString();
}

// ---------------------------------------------------------------------------
// Radar Chart (pure SVG)
// ---------------------------------------------------------------------------

function RadarChart({ scores }: { scores: CategoryScores }) {
  const categories = CATEGORIES;
  const size = 280;
  const center = size / 2;
  const maxRadius = 110;
  const levels = 4;

  function polarToCartesian(
    angle: number,
    radius: number
  ): { x: number; y: number } {
    // Start from top (-90 degrees)
    const radian = ((angle - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(radian),
      y: center + radius * Math.sin(radian),
    };
  }

  const angleStep = 360 / categories.length;

  // Grid levels
  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const r = (maxRadius / levels) * (i + 1);
    const points = categories
      .map((_, j) => {
        const pt = polarToCartesian(j * angleStep, r);
        return `${pt.x},${pt.y}`;
      })
      .join(" ");
    return points;
  });

  // Axis lines
  const axes = categories.map((_, i) => {
    const pt = polarToCartesian(i * angleStep, maxRadius);
    return { x1: center, y1: center, x2: pt.x, y2: pt.y };
  });

  // Data polygon
  const scoreKeys = categories.map((c) => c.key);
  const dataPoints = scoreKeys.map((key, i) => {
    const value = scores[key as keyof CategoryScores];
    const r = (value / 8) * maxRadius;
    return polarToCartesian(i * angleStep, r);
  });
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  // Labels
  const labels = categories.map((cat, i) => {
    const labelRadius = maxRadius + 24;
    const pt = polarToCartesian(i * angleStep, labelRadius);
    return { ...pt, label: cat.label, score: scores[cat.key as keyof CategoryScores] };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto h-full w-full max-w-[320px]"
    >
      {/* Grid */}
      {gridLevels.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}

      {/* Axes */}
      {axes.map((axis, i) => (
        <line
          key={i}
          x1={axis.x1}
          y1={axis.y1}
          x2={axis.x2}
          y2={axis.y2}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Data area */}
      <polygon
        points={dataPolygon}
        fill="rgba(104,239,63,0.15)"
        stroke="#68ef3f"
        strokeWidth="2"
      />

      {/* Data points */}
      {dataPoints.map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#68ef3f" />
      ))}

      {/* Labels */}
      {labels.map((lbl, i) => (
        <text
          key={i}
          x={lbl.x}
          y={lbl.y}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-white/60 text-[9px] font-medium"
        >
          {lbl.label}
        </text>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Score Ring
// ---------------------------------------------------------------------------

function ScoreRing({
  percentage,
  tier,
}: {
  percentage: number;
  tier: { label: string; description: string };
  tierColor: string;
}) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-36 w-36">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#68ef3f"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <p className="mt-3 text-lg font-semibold text-white">{tier.label}</p>
      <p className="mt-1 text-sm text-white/60">{tier.description}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Category Breakdown
// ---------------------------------------------------------------------------

function CategoryBreakdown({ scores }: { scores: CategoryScores }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CATEGORIES.map((cat) => {
        const score = scores[cat.key as keyof CategoryScores];
        const label = getCategoryLabel(score);
        const labelColor = getCategoryLabelColor(score);
        const recommendation = getCategoryRecommendation(cat.key, score);
        const percentage = (score / 8) * 100;

        return (
          <div
            key={cat.key}
            className="rounded-2xl border border-white/10 bg-uply-dark p-5"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">{cat.label}</h4>
              <span className={`text-sm font-medium ${labelColor}`}>
                {label}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-uply-green transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium text-white/60">
                {score}/8
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/50">
              {recommendation}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

type Screen = "intro" | "quiz" | "results";

export function TeamSkillsAssessment() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Check for shared results in URL
  const sharedScores = useMemo(
    () => parseScoresFromParams(searchParams),
    [searchParams]
  );

  const [screen, setScreen] = useState<Screen>(
    sharedScores ? "results" : "intro"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<CategoryScores | null>(sharedScores);
  const [copied, setCopied] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"in" | "out">("in");

  const handleStart = useCallback(() => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSlideDirection("in");
  }, []);

  const handleAnswer = useCallback(
    (score: number) => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);

      if (newAnswers.length === QUESTIONS.length) {
        // Calculate scores per category
        const categoryScores: CategoryScores = {
          c: 0,
          l: 0,
          co: 0,
          cr: 0,
          f: 0,
          a: 0,
        };
        newAnswers.forEach((s, i) => {
          const key = QUESTIONS[i].categoryKey as keyof CategoryScores;
          categoryScores[key] += s;
        });
        setScores(categoryScores);

        // Update URL with results
        const params = scoresToParams(categoryScores);
        router.replace(`?${params}`, { scroll: false });

        setScreen("results");
      } else {
        // Animate transition
        setSlideDirection("out");
        setTimeout(() => {
          setCurrentQuestion(newAnswers.length);
          setSlideDirection("in");
        }, 150);
      }
    },
    [answers, router]
  );

  const handleShare = useCallback(async () => {
    if (!scores) return;
    const params = scoresToParams(scores);
    const url = `${window.location.origin}/tools/team-skills-assessment?${params}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [scores]);

  const handleRetake = useCallback(() => {
    setScores(null);
    setAnswers([]);
    setCurrentQuestion(0);
    setScreen("intro");
    router.replace("/tools/team-skills-assessment", { scroll: false });
  }, [router]);

  // ---------------------------------------------------------------------------
  // Intro Screen
  // ---------------------------------------------------------------------------

  if (screen === "intro") {
    return (
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <Badge>Free Assessment</Badge>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Team Skills Assessment
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Rate your team&apos;s soft skills across 6 critical areas in just
              2 minutes. Get a detailed breakdown with personalized
              recommendations to improve.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.key}
                  className="rounded-xl border border-white/10 bg-uply-dark-elevated px-4 py-3"
                >
                  <span className="text-sm font-medium text-white/80">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center rounded-lg bg-uply-green px-8 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
              >
                Start Assessment
              </button>
              <span className="text-sm text-white/40">
                12 questions, takes about 2 minutes
              </span>
            </div>
          </div>
        </FadeIn>
      </Section>
    );
  }

  // ---------------------------------------------------------------------------
  // Quiz Screen
  // ---------------------------------------------------------------------------

  if (screen === "quiz") {
    const question = QUESTIONS[currentQuestion];
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

    return (
      <Section theme="dark">
        <div className="mx-auto max-w-2xl">
          {/* Progress bar */}
          <div className="mb-2 flex items-center justify-between text-sm text-white/40">
            <span>
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mb-10 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-uply-green transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <div
            className={`transition-all duration-150 ${
              slideDirection === "in"
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
          >
            <Badge>{question.category}</Badge>
            <h2 className="mt-4 text-xl font-semibold text-white md:text-2xl">
              {question.text}
            </h2>

            <div className="mt-8 space-y-3">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option.score)}
                  className="group flex w-full items-start gap-4 rounded-xl border border-white/10 bg-uply-dark-elevated px-5 py-4 text-left transition-all duration-200 hover:border-uply-green-muted/40 hover:bg-uply-green-muted/5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-medium text-white/40 transition-colors group-hover:border-uply-green-muted/60 group-hover:text-uply-green-muted">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-white/80 transition-colors group-hover:text-white">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  // ---------------------------------------------------------------------------
  // Results Screen
  // ---------------------------------------------------------------------------

  if (!scores) return null;

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentage = Math.round((total / 48) * 100);
  const tier = getOverallTier(total);
  const tierColor = getTierColor(total);

  return (
    <Section theme="dark">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center">
            <Badge>Your Results</Badge>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Team Skills Assessment
            </h1>
          </div>
        </FadeIn>

        {/* Overall Score */}
        <FadeIn>
          <div className="mt-12 rounded-2xl border border-white/10 bg-uply-dark p-8 text-center">
            <ScoreRing
              percentage={percentage}
              tier={tier}
              tierColor={tierColor}
            />
            <div className="mt-4 text-sm text-white/40">
              {total} out of 48 points
            </div>
          </div>
        </FadeIn>

        {/* Radar Chart */}
        <FadeIn>
          <div className="mt-8 rounded-2xl border border-white/10 bg-uply-dark p-6 md:p-8">
            <h3 className="mb-6 text-center text-lg font-semibold text-white">
              Skills Breakdown
            </h3>
            <RadarChart scores={scores} />
          </div>
        </FadeIn>

        {/* Category Breakdown */}
        <FadeIn>
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Detailed Breakdown
            </h3>
            <CategoryBreakdown scores={scores} />
          </div>
        </FadeIn>

        {/* Share Results */}
        <FadeIn>
          <div className="mt-8 rounded-2xl border border-white/10 bg-uply-dark p-6 text-center md:p-8">
            <h3 className="text-lg font-semibold text-white">
              Share your results
            </h3>
            <p className="mt-1.5 text-sm text-white/60">
              Copy a shareable link to compare results with your team
            </p>
            <button
              onClick={handleShare}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/5"
            >
              {copied ? (
                <>
                  <svg
                    className="h-4 w-4 text-uply-green-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.25 8.497"
                    />
                  </svg>
                  Copy shareable link
                </>
              )}
            </button>
          </div>
        </FadeIn>

        {/* Email Capture */}
        <FadeIn>
          <div className="mt-8">
            <EmailCapture
              headline="Get your detailed report with personalized recommendations"
              description="We'll send you an in-depth analysis of your team's soft skills with specific action items for each area."
              source="team-skills-assessment"
            />
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-8 text-center">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center rounded-lg bg-uply-green px-8 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
            >
              Start building these skills with Uply
            </a>
            <button
              onClick={handleRetake}
              className="mt-4 block w-full text-sm text-white/40 transition-colors hover:text-white/60"
            >
              Retake assessment
            </button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
