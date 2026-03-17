import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { SlackMockup } from "@/components/ui/slack-mockup";
import { FeatureBlock } from "@/components/sections/feature-block";
import { TopicsGrid } from "@/components/sections/topics-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Daily micro-lessons, weekly leaderboards, and team insights — all in Slack.",
};

/* ---------- Inline visuals ---------- */

function LeaderboardMockup() {
  const users = [
    { rank: 1, name: "Sarah K.", score: 2_450, bar: "w-full" },
    { rank: 2, name: "James L.", score: 2_180, bar: "w-[89%]" },
    { rank: 3, name: "Priya M.", score: 1_960, bar: "w-[80%]" },
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-sm font-semibold text-white/70">
          Weekly Leaderboard
        </span>
        <span className="text-xs text-white/30">This week</span>
      </div>

      <div className="space-y-4">
        {users.map((u) => (
          <div key={u.rank} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                u.rank === 1
                  ? "bg-uply-green text-uply-dark"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {u.rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium text-white/80">
                  {u.name}
                </span>
                <span className="text-xs text-uply-green">{u.score} pts</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5">
                <div
                  className={`h-1.5 rounded-full bg-uply-green/40 ${u.bar}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopicsPreview() {
  const tags = [
    "Leadership",
    "Collaboration",
    "Communication",
    "Feedback",
    "Conflict",
    "Time Mgmt",
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-uply-green/10 bg-white p-5 shadow-lg">
      <span className="text-sm font-semibold text-uply-dark">
        Available topics
      </span>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-uply-green/20 bg-uply-green-wash px-3 py-1.5 text-xs font-medium text-uply-dark"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-uply-gray">
        New topics added every month
      </p>
    </div>
  );
}

function DashboardMockup() {
  const bars = [
    { label: "Leadership", pct: "75%" },
    { label: "Collaboration", pct: "90%" },
    { label: "Feedback", pct: "60%" },
    { label: "Communication", pct: "85%" },
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-sm font-semibold text-white/70">
          Team Insights
        </span>
        <span className="text-xs text-white/30">Last 30 days</span>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-white/5 p-3 text-center">
          <span className="block text-2xl font-bold text-uply-green">87%</span>
          <span className="text-xs text-white/50">Participation</span>
        </div>
        <div className="rounded-lg bg-white/5 p-3 text-center">
          <span className="block text-2xl font-bold text-uply-green">
            +12%
          </span>
          <span className="text-xs text-white/50">Skill growth</span>
        </div>
      </div>

      <div className="space-y-3">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs text-white/60">{b.label}</span>
              <span className="text-xs text-white/40">{b.pct}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5">
              <div
                className="h-1.5 rounded-full bg-uply-green/50"
                style={{ width: b.pct }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <FadeIn>
        <Section theme="dark">
          <div className="text-center">
            <Badge>Features</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Everything your team needs to build better soft skills
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Daily micro-lessons, weekly leaderboards, and team insights — all
              delivered right inside Slack.
            </p>
          </div>
        </Section>
      </FadeIn>

      {/* Feature blocks */}
      <FadeIn>
        <FeatureBlock
          title="Daily micro-lessons in Slack"
          description="Every morning, your team gets a short scenario-based question right in Slack. No separate app, no extra logins — just two minutes of focused practice that fits naturally into the workday."
          visual={<SlackMockup />}
          theme="light"
        />
      </FadeIn>

      <FadeIn>
        <FeatureBlock
          title="Weekly leaderboard"
          description="Friendly competition keeps engagement high. Every Monday, the team sees who answered the most questions and who's climbing the ranks — turning skill building into a shared habit."
          visual={<LeaderboardMockup />}
          reversed
          theme="dark"
        />
      </FadeIn>

      <FadeIn>
        <FeatureBlock
          title="Skill topics tailored to your team"
          description="Choose from a growing library of topics — leadership, collaboration, feedback, and more. Pick what matters most and Uply delivers relevant questions automatically."
          visual={<TopicsPreview />}
          theme="light"
        />
      </FadeIn>

      <FadeIn>
        <FeatureBlock
          title="Team insights and analytics"
          description="Understand how your team is growing. Track participation rates, skill progress by topic, and engagement trends — all from a simple dashboard."
          visual={<DashboardMockup />}
          reversed
          theme="dark"
        />
      </FadeIn>

      {/* Topics grid */}
      <FadeIn>
        <TopicsGrid />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection headline="Start building better skills today" />
      </FadeIn>
    </>
  );
}
