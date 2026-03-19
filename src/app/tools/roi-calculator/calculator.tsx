"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SIGNUP_URL } from "@/lib/constants";

function formatCurrency(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

function formatPercent(value: number): string {
  return Math.round(value).toLocaleString("en-US") + "%";
}

function InputField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white/70">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/40">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!isNaN(v)) onChange(Math.max(min, Math.min(max, v)));
          }}
          min={min}
          max={max}
          step={step}
          className={`w-full rounded-lg border border-white/10 bg-uply-dark px-3 py-2.5 text-white transition-colors focus:border-uply-green-muted focus:outline-none focus:ring-1 focus:ring-uply-green-muted ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/40">
            {suffix}
          </span>
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step || 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-uply-green-muted"
      />
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-uply-green-muted/30 bg-uply-green-muted/5"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <span className="block text-sm text-white/60">{label}</span>
      <span
        className={`mt-1 block text-2xl font-bold md:text-3xl ${
          highlight ? "text-uply-green-muted" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [currentSpend, setCurrentSpend] = useState(5000);

  const results = useMemo(() => {
    const uplyCostPerUser = 12; // $1/user/month = $12/year
    const uplyAnnualCost = teamSize * uplyCostPerUser;

    // 2% productivity improvement — conservative estimate from MIT Sloan research
    const productivityGain = teamSize * avgSalary * 0.02;

    // 15% of salary = average turnover replacement cost
    // 10% reduction in turnover from engagement-driven retention (Gallup)
    const turnoverSavings = teamSize * avgSalary * 0.15 * 0.1;

    const totalBenefit = productivityGain + turnoverSavings;
    const roi =
      uplyAnnualCost > 0
        ? ((totalBenefit - uplyAnnualCost) / uplyAnnualCost) * 100
        : 0;
    const netBenefit = totalBenefit - uplyAnnualCost;
    const costPerEmployee =
      teamSize > 0 ? uplyAnnualCost / teamSize : 0;
    // Payback period in days: (uply cost / total benefit) * 365
    const paybackDays =
      totalBenefit > 0 ? (uplyAnnualCost / totalBenefit) * 365 : 0;
    // How much better off vs current training spend
    const savingsVsCurrentSpend = totalBenefit - uplyAnnualCost - currentSpend;

    return {
      uplyAnnualCost,
      productivityGain,
      turnoverSavings,
      totalBenefit,
      roi,
      netBenefit,
      costPerEmployee,
      paybackDays,
      savingsVsCurrentSpend,
    };
  }, [teamSize, avgSalary, currentSpend]);

  return (
    <>
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Soft Skills Training ROI Calculator
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Calculate the return on investment from daily soft skills training.
              See how a small investment in your team&apos;s growth pays for
              itself many times over.
            </p>
          </div>
        </FadeIn>
      </Section>

      <section className="bg-uply-dark-elevated px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Inputs */}
              <div className="space-y-5">
                <h2 className="mb-6 text-xl font-semibold text-white">
                  Your Numbers
                </h2>
                <InputField
                  label="Team size"
                  value={teamSize}
                  onChange={setTeamSize}
                  min={5}
                  max={500}
                  step={5}
                />
                <InputField
                  label="Average annual salary"
                  value={avgSalary}
                  onChange={setAvgSalary}
                  min={40000}
                  max={200000}
                  step={5000}
                  prefix="$"
                />
                <InputField
                  label="Current annual training spend"
                  value={currentSpend}
                  onChange={setCurrentSpend}
                  min={0}
                  max={50000}
                  step={500}
                  prefix="$"
                />
              </div>

              {/* Results */}
              <div className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-2xl border border-white/10 bg-uply-dark p-6 md:p-8">
                  <h2 className="mb-6 text-xl font-semibold text-white">
                    Your ROI with Uply
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard
                      label="Annual ROI"
                      value={formatPercent(results.roi)}
                      highlight
                    />
                    <ResultCard
                      label="Net Annual Benefit"
                      value={formatCurrency(results.netBenefit)}
                      highlight
                    />
                    <ResultCard
                      label="Cost Per Employee"
                      value={formatCurrency(results.costPerEmployee) + "/yr"}
                    />
                    <ResultCard
                      label="Payback Period"
                      value={Math.round(results.paybackDays) + " days"}
                    />
                  </div>

                  <div className="my-6 border-t border-white/10" />

                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-white/60">
                        Uply annual cost
                      </span>
                      <span className="text-lg font-semibold text-white">
                        {formatCurrency(results.uplyAnnualCost)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-white/60">
                        Productivity gain (2%)
                      </span>
                      <span className="text-lg font-semibold text-white">
                        {formatCurrency(results.productivityGain)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-white/60">
                        Turnover savings
                      </span>
                      <span className="text-lg font-semibold text-white">
                        {formatCurrency(results.turnoverSavings)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-white/60">
                        Total annual benefit
                      </span>
                      <span className="text-2xl font-bold text-uply-green-muted">
                        {formatCurrency(results.totalBenefit)}
                      </span>
                    </div>
                  </div>

                  <a
                    href={SIGNUP_URL}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-uply-green px-6 py-3 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
                  >
                    Start seeing ROI &mdash; Get Uply free
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Methodology + links */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              How we calculate ROI
            </h2>
            <div className="mt-6 space-y-4 text-white/60">
              <p>
                <strong className="text-white/80">Productivity gain (2%):</strong>{" "}
                MIT Sloan research shows soft skills training delivers up to 250%
                ROI, primarily through productivity improvements. We use a
                conservative 2% estimate — well below the research ceiling.
              </p>
              <p>
                <strong className="text-white/80">Turnover savings:</strong>{" "}
                Gallup data shows that engaged employees are 59% less likely to
                look for a new job. We model a 10% reduction in turnover, with
                replacement costs at 15% of annual salary — again, a conservative
                baseline.
              </p>
              <p>
                <strong className="text-white/80">Uply cost:</strong>{" "}
                $1 per user per month, billed annually. No hidden fees, no
                setup costs. See{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  pricing
                </Link>{" "}
                for details.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-sm text-white/50">
                Based on{" "}
                <span className="text-white/70">
                  MIT Sloan research
                </span>{" "}
                showing soft skills training delivers 250% ROI, and{" "}
                <span className="text-white/70">Gallup data</span> on
                engagement-driven retention. Individual results will vary based on
                team size, industry, and implementation.
              </p>
            </div>

            <div className="mt-8 text-base text-white/60">
              <p>
                Want to dig deeper?{" "}
                <Link
                  href="/blog/microlearning-vs-traditional-training"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  Read why microlearning outperforms traditional training
                </Link>
                . Or try our other calculators:{" "}
                <Link
                  href="/tools/growth-calculator"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  Lost Growth Calculator
                </Link>{" "}
                and{" "}
                <Link
                  href="/tools/turnover-calculator"
                  className="font-medium text-uply-green-muted hover:underline"
                >
                  Turnover Cost Calculator
                </Link>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
