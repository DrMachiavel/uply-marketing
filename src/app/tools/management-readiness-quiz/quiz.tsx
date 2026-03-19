"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

import { SIGNUP_URL } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Question {
  dimension: string;
  dimensionKey: string;
  text: string;
  options: { label: string; score: number }[];
}

const QUESTIONS: Question[] = [
  // Self-Awareness
  {
    dimension: "Self-Awareness",
    dimensionKey: "sa",
    text: "When one of your managers receives critical feedback from their team, they typically...",
    options: [
      { label: "Get defensive and dismiss it", score: 1 },
      { label: "Acknowledge it but don't change behavior", score: 2 },
      { label: "Take it seriously but struggle to act on it", score: 3 },
      { label: "Reflect genuinely and make visible adjustments", score: 4 },
    ],
  },
  {
    dimension: "Self-Awareness",
    dimensionKey: "sa",
    text: "How well do your managers understand their own strengths and weaknesses?",
    options: [
      {
        label: "They have significant blind spots they're unaware of",
        score: 1,
      },
      {
        label: "They know their strengths but are blind to weaknesses",
        score: 2,
      },
      {
        label:
          "They have a reasonable self-assessment but it's not always accurate",
        score: 3,
      },
      {
        label:
          "They actively seek feedback and have a clear, honest self-view",
        score: 4,
      },
    ],
  },
  // Difficult Conversations
  {
    dimension: "Difficult Conversations",
    dimensionKey: "dc",
    text: "When a direct report is underperforming, your managers typically...",
    options: [
      {
        label: "Avoid the conversation entirely and hope it improves",
        score: 1,
      },
      { label: "Wait for the annual review to bring it up", score: 2 },
      {
        label:
          "Address it but struggle with tone \u2014 too harsh or too vague",
        score: 3,
      },
      {
        label:
          "Have timely, empathetic conversations with clear expectations",
        score: 4,
      },
    ],
  },
  {
    dimension: "Difficult Conversations",
    dimensionKey: "dc",
    text: "How do your managers handle delivering unwelcome news (denied promotion, team restructure)?",
    options: [
      {
        label: "They delegate it upward or avoid it entirely",
        score: 1,
      },
      {
        label: "They deliver it bluntly without context or empathy",
        score: 2,
      },
      {
        label: "They try to be empathetic but over-promise or sugarcoat",
        score: 3,
      },
      {
        label:
          "They're honest, empathetic, and provide clear context and next steps",
        score: 4,
      },
    ],
  },
  // Delegation & Trust
  {
    dimension: "Delegation & Trust",
    dimensionKey: "dt",
    text: "When your managers have too much on their plate, they...",
    options: [
      { label: "Do everything themselves and burn out", score: 1 },
      { label: "Delegate only the tasks nobody wants", score: 2 },
      { label: "Delegate but micromanage the execution", score: 3 },
      {
        label: "Delegate with clear ownership, context, and trust",
        score: 4,
      },
    ],
  },
  {
    dimension: "Delegation & Trust",
    dimensionKey: "dt",
    text: "How do your managers respond when a direct report takes a different approach than they would?",
    options: [
      { label: "Override them and insist on their way", score: 1 },
      { label: "Allow it but express visible frustration", score: 2 },
      { label: "Accept it reluctantly if the result is good", score: 3 },
      {
        label:
          "Embrace it as a learning opportunity and celebrate autonomy",
        score: 4,
      },
    ],
  },
  // Team Development
  {
    dimension: "Team Development",
    dimensionKey: "td",
    text: "How intentional are your managers about growing their team members' careers?",
    options: [
      {
        label: "They don't think about it \u2014 they're focused on output",
        score: 1,
      },
      {
        label: "They mention it in 1-on-1s but don't follow through",
        score: 2,
      },
      {
        label: "They support growth when team members ask for it",
        score: 3,
      },
      {
        label:
          "They proactively create growth plans and advocate for their team",
        score: 4,
      },
    ],
  },
  {
    dimension: "Team Development",
    dimensionKey: "td",
    text: "When a high-performer on the team wants to transfer to another department...",
    options: [
      {
        label: "The manager tries to block or delay the move",
        score: 1,
      },
      {
        label:
          "They're visibly disappointed and it affects the relationship",
        score: 2,
      },
      { label: "They support it but don't actively help", score: 3 },
      {
        label: "They champion the move and help with the transition",
        score: 4,
      },
    ],
  },
  // Emotional Regulation
  {
    dimension: "Emotional Regulation",
    dimensionKey: "er",
    text: "When a project goes sideways under pressure, your managers...",
    options: [
      { label: "Panic and spread anxiety to the team", score: 1 },
      {
        label: "Shut down emotionally and become unavailable",
        score: 2,
      },
      {
        label: "Stay outwardly calm but make reactive decisions",
        score: 3,
      },
      {
        label: "Remain composed, rally the team, and focus on solutions",
        score: 4,
      },
    ],
  },
  {
    dimension: "Emotional Regulation",
    dimensionKey: "er",
    text: "How do your managers handle frustration with upper management decisions they disagree with?",
    options: [
      {
        label:
          "Vent openly to their team, undermining trust in leadership",
        score: 1,
      },
      {
        label:
          "Comply but their body language and tone show resentment",
        score: 2,
      },
      {
        label:
          "Follow through but share their personal disagreement privately",
        score: 3,
      },
      {
        label:
          "Commit to the decision publicly while advocating through proper channels",
        score: 4,
      },
    ],
  },
];

const DIMENSION_KEYS = ["sa", "dc", "dt", "td", "er"] as const;
type DimensionKey = (typeof DIMENSION_KEYS)[number];

const DIMENSION_LABELS: Record<DimensionKey, string> = {
  sa: "Self-Awareness",
  dc: "Difficult Conversations",
  dt: "Delegation & Trust",
  td: "Team Development",
  er: "Emotional Regulation",
};

// ---------------------------------------------------------------------------
// Score helpers
// ---------------------------------------------------------------------------

function getOverallTier(score: number): {
  label: string;
  color: string;
  description: string;
} {
  if (score <= 16)
    return {
      label: "Not Ready",
      color: "text-red-400",
      description:
        "Significant gaps that will impact team performance and retention.",
    };
  if (score <= 24)
    return {
      label: "Emerging",
      color: "text-amber-400",
      description:
        "Good intentions but lacking practical skills for tough situations.",
    };
  if (score <= 32)
    return {
      label: "Developing",
      color: "text-blue-400",
      description:
        "Solid foundation with specific areas to strengthen.",
    };
  return {
    label: "Ready",
    color: "text-uply-green-muted",
    description:
      "Strong management capabilities across the board.",
  };
}

function getDimensionTier(score: number): {
  label: string;
  color: string;
} {
  if (score <= 3) return { label: "Critical gap", color: "bg-red-400" };
  if (score <= 5)
    return { label: "Needs development", color: "bg-amber-400" };
  if (score <= 6) return { label: "Adequate", color: "bg-blue-400" };
  return { label: "Strong", color: "bg-uply-green-muted" };
}

function getDimensionBarColor(score: number): string {
  if (score <= 3) return "bg-red-400";
  if (score <= 5) return "bg-amber-400";
  if (score <= 6) return "bg-blue-400";
  return "bg-uply-green-muted";
}

const DIMENSION_RECOMMENDATIONS: Record<DimensionKey, string> = {
  sa: "Start with regular 360-degree feedback loops and structured self-reflection exercises. Managers who lack self-awareness can't grow in any other dimension.",
  dc: "Practice difficult conversation frameworks (SBI model, radical candor) through role-play scenarios. Avoidance compounds problems exponentially.",
  dt: "Build delegation skills through structured handoff templates and explicit trust-building exercises. Micromanagement is the #1 killer of team autonomy.",
  td: "Implement quarterly career development conversations and create visible growth pathways. Teams with growth-oriented managers have 2x lower turnover.",
  er: "Introduce stress management techniques and decision-making frameworks for high-pressure situations. Emotional contagion from managers sets the team's ceiling.",
};

// ---------------------------------------------------------------------------
// Parse scores from URL query params
// ---------------------------------------------------------------------------

function parseScoresFromParams(
  params: URLSearchParams
): Record<DimensionKey, number> | null {
  const scores: Partial<Record<DimensionKey, number>> = {};
  for (const key of DIMENSION_KEYS) {
    const val = params.get(key);
    if (!val) return null;
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 2 || num > 8) return null;
    scores[key] = num;
  }
  return scores as Record<DimensionKey, number>;
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <Section theme="dark">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Free Assessment</Badge>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Management Readiness Assessment
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Are your first-time managers ready to lead? Find out in 2 minutes.
          </p>
          <p className="mt-3 text-sm text-white/40">
            10 scenario-based questions across 5 critical management dimensions
          </p>
          <button
            onClick={onStart}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-uply-green px-8 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
          >
            Start Assessment
          </button>
        </div>
      </FadeIn>
    </Section>
  );
}

function QuestionScreen({
  question,
  questionIndex,
  total,
  onAnswer,
  transitioning,
}: {
  question: Question;
  questionIndex: number;
  total: number;
  onAnswer: (score: number) => void;
  transitioning: boolean;
}) {
  const progress = ((questionIndex + 1) / total) * 100;

  return (
    <Section theme="dark">
      <div className="mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-white/40">
              Question {questionIndex + 1} of {total}
            </span>
            <span className="text-white/40">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-uply-green-muted transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          className={`transition-all duration-300 ease-out ${
            transitioning
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <Badge>{question.dimension}</Badge>
          <h2 className="mt-4 text-xl font-semibold leading-relaxed text-white md:text-2xl">
            {question.text}
          </h2>

          {/* Options */}
          <div className="mt-8 space-y-3">
            {question.options.map((option) => (
              <button
                key={option.score}
                onClick={() => onAnswer(option.score)}
                className="group w-full rounded-xl border border-white/10 bg-uply-dark-elevated px-5 py-4 text-left text-sm text-white/80 transition-all duration-200 hover:border-uply-green-muted/40 hover:bg-uply-green-muted/5 hover:text-white md:text-base"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function DimensionBar({
  label,
  score,
  maxScore,
}: {
  label: string;
  score: number;
  maxScore: number;
}) {
  const tier = getDimensionTier(score);
  const percentage = (score / maxScore) * 100;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-white">{label}</span>
        <span className="text-white/40">
          {score}/{maxScore} &mdash;{" "}
          <span className={tier.color.replace("bg-", "text-")}>
            {tier.label}
          </span>
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${getDimensionBarColor(score)}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ResultsScreen({
  dimensionScores,
}: {
  dimensionScores: Record<DimensionKey, number>;
}) {
  const totalScore = useMemo(
    () => Object.values(dimensionScores).reduce((a, b) => a + b, 0),
    [dimensionScores]
  );
  const percentage = Math.round((totalScore / 40) * 100);
  const tier = getOverallTier(totalScore);
  const [copied, setCopied] = useState(false);

  // Find weakest dimension
  const weakestKey = useMemo(() => {
    let minKey: DimensionKey = "sa";
    let minScore = Infinity;
    for (const key of DIMENSION_KEYS) {
      if (dimensionScores[key] < minScore) {
        minScore = dimensionScores[key];
        minKey = key;
      }
    }
    return minKey;
  }, [dimensionScores]);

  const handleShare = useCallback(() => {
    const params = new URLSearchParams();
    for (const key of DIMENSION_KEYS) {
      params.set(key, String(dimensionScores[key]));
    }
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [dimensionScores]);

  return (
    <>
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            {/* Overall score */}
            <div className="text-center">
              <Badge>Your Results</Badge>
              <div className="mt-6 text-6xl font-bold text-white md:text-7xl">
                {percentage}
                <span className="text-3xl text-white/40 md:text-4xl">%</span>
              </div>
              <p className={`mt-2 text-2xl font-semibold ${tier.color}`}>
                {tier.label}
              </p>
              <p className="mt-2 text-base text-white/60">
                {tier.description}
              </p>
              <p className="mt-1 text-sm text-white/40">
                Score: {totalScore} out of 40
              </p>
            </div>

            {/* Dimension breakdown */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-uply-dark-elevated p-6 md:p-8">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Dimension Breakdown
              </h3>
              <div className="space-y-5">
                {DIMENSION_KEYS.map((key) => (
                  <DimensionBar
                    key={key}
                    label={DIMENSION_LABELS[key]}
                    score={dimensionScores[key]}
                    maxScore={8}
                  />
                ))}
              </div>
            </div>

            {/* Weakest dimension callout */}
            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/20">
                  <svg
                    className="h-3.5 w-3.5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400">
                    Priority Area: {DIMENSION_LABELS[weakestKey]}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {DIMENSION_RECOMMENDATIONS[weakestKey]}
                  </p>
                </div>
              </div>
            </div>

            {/* Share button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
                {copied ? "Link copied!" : "Share results"}
              </button>
            </div>


            {/* CTA */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-uply-dark-elevated p-6 text-center md:p-8">
              <h3 className="text-lg font-semibold text-white">
                Build management skills with Uply
              </h3>
              <p className="mt-2 text-sm text-white/60">
                2 min/day in Slack. Targeted micro-lessons for each dimension
                where your managers need help.
              </p>
              <a
                href={SIGNUP_URL}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-uply-green px-7 py-3 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
              >
                Start building stronger managers &mdash; Free
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function ManagementReadinessQuiz() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Check for shared results in URL
  const sharedScores = useMemo(
    () => parseScoresFromParams(searchParams),
    [searchParams]
  );

  const [screen, setScreen] = useState<"intro" | "quiz" | "results">(
    sharedScores ? "results" : "intro"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  const dimensionScores = useMemo<Record<DimensionKey, number>>(() => {
    if (sharedScores && screen === "results" && answers.length === 0) {
      return sharedScores;
    }

    const scores: Record<DimensionKey, number> = {
      sa: 0,
      dc: 0,
      dt: 0,
      td: 0,
      er: 0,
    };

    answers.forEach((answer, i) => {
      const key = QUESTIONS[i].dimensionKey as DimensionKey;
      scores[key] += answer;
    });

    return scores;
  }, [answers, sharedScores, screen]);

  // Update URL when results are shown from quiz completion
  useEffect(() => {
    if (screen === "results" && answers.length === QUESTIONS.length) {
      const params = new URLSearchParams();
      for (const key of DIMENSION_KEYS) {
        params.set(key, String(dimensionScores[key]));
      }
      router.replace(
        `${window.location.pathname}?${params.toString()}`,
        { scroll: false }
      );
    }
  }, [screen, answers.length, dimensionScores, router]);

  function handleStart() {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  function handleAnswer(score: number) {
    setTransitioning(true);

    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);

      if (newAnswers.length === QUESTIONS.length) {
        setScreen("results");
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      setTransitioning(false);
    }, 200);
  }

  if (screen === "intro") {
    return <IntroScreen onStart={handleStart} />;
  }

  if (screen === "quiz") {
    return (
      <QuestionScreen
        question={QUESTIONS[currentQuestion]}
        questionIndex={currentQuestion}
        total={QUESTIONS.length}
        onAnswer={handleAnswer}
        transitioning={transitioning}
      />
    );
  }

  return <ResultsScreen dimensionScores={dimensionScores} />;
}
