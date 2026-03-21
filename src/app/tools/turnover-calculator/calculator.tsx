"use client";

import { useState, useMemo } from "react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

import { SlackInstallButton } from "@/components/ui/slack-install-button";

function formatCurrency(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

function formatPercent(value: number): string {
  return value.toFixed(1) + "%";
}

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
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
          onChange={(e) => onChange(Number(e.target.value))}
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
    </div>
  );
}

function ResultRow({
  label,
  value,
  large,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-sm text-white/60">{label}</span>
      <span
        className={
          large
            ? "text-3xl font-bold text-uply-green-muted md:text-4xl"
            : "text-lg font-semibold text-white"
        }
      >
        {value}
      </span>
    </div>
  );
}

export function TurnoverCalculator() {
  const [teamSize, setTeamSize] = useState(50);
  const [turnoverRate, setTurnoverRate] = useState(25);
  const [avgSalary, setAvgSalary] = useState(55000);
  const [recruitCostPct, setRecruitCostPct] = useState(20);
  const [daysToFill, setDaysToFill] = useState(45);
  const [daysToRamp, setDaysToRamp] = useState(90);
  const [trainingCost, setTrainingCost] = useState(3000);

  const results = useMemo(() => {
    const employeesLost = teamSize * (turnoverRate / 100);
    const revenueImpact =
      ((avgSalary * 2) / 365) * (daysToFill + daysToRamp) * employeesLost;
    const recruitmentCosts =
      avgSalary * (recruitCostPct / 100) * employeesLost;
    const trainingCosts = trainingCost * employeesLost;
    const total = revenueImpact + recruitmentCosts + trainingCosts;
    const costPerDeparture = employeesLost > 0 ? total / employeesLost : 0;
    const projectedRate = turnoverRate * 0.66;
    const estimatedSavings = total * 0.34;

    return {
      employeesLost,
      revenueImpact,
      recruitmentCosts,
      trainingCosts,
      total,
      costPerDeparture,
      projectedRate,
      estimatedSavings,
    };
  }, [
    teamSize,
    turnoverRate,
    avgSalary,
    recruitCostPct,
    daysToFill,
    daysToRamp,
    trainingCost,
  ]);

  return (
    <>
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Employee Turnover Cost Calculator
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              See how much employee turnover is really costing your startup
              &mdash; and how daily soft skills training can cut it.
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
                />
                <InputField
                  label="Annual employee turnover rate"
                  value={turnoverRate}
                  onChange={setTurnoverRate}
                  suffix="%"
                />
                <InputField
                  label="Average annual salary"
                  value={avgSalary}
                  onChange={setAvgSalary}
                  prefix="$"
                />
                <InputField
                  label="Cost to recruit per hire (% of salary)"
                  value={recruitCostPct}
                  onChange={setRecruitCostPct}
                  suffix="%"
                />
                <InputField
                  label="Days to fill a position"
                  value={daysToFill}
                  onChange={setDaysToFill}
                />
                <InputField
                  label="Days to ramp a new hire"
                  value={daysToRamp}
                  onChange={setDaysToRamp}
                />
                <InputField
                  label="Training cost per hire"
                  value={trainingCost}
                  onChange={setTrainingCost}
                  prefix="$"
                />
              </div>

              {/* Results */}
              <div className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-2xl border border-white/10 bg-uply-dark p-6 md:p-8">
                  <h2 className="mb-6 text-xl font-semibold text-white">
                    The Cost of Turnover
                  </h2>
                  <div className="space-y-4">
                    <ResultRow
                      label="Employees lost per year"
                      value={results.employeesLost.toFixed(1)}
                    />
                    <ResultRow
                      label="Revenue impact"
                      value={formatCurrency(results.revenueImpact)}
                    />
                    <ResultRow
                      label="Recruitment costs"
                      value={formatCurrency(results.recruitmentCosts)}
                    />
                    <ResultRow
                      label="Training costs"
                      value={formatCurrency(results.trainingCosts)}
                    />

                    <div className="my-4 border-t border-white/10" />

                    <ResultRow
                      label="Total annual turnover cost"
                      value={formatCurrency(results.total)}
                      large
                    />
                    <ResultRow
                      label="Cost per departure"
                      value={formatCurrency(results.costPerDeparture)}
                    />
                  </div>

                  <div className="my-6 border-t border-white/10" />

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      With Uply
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      Uply reduces turnover by up to 34% through daily soft
                      skills development
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-white/60">
                          Projected turnover rate
                        </span>
                        <span className="text-lg font-semibold text-white">
                          {formatPercent(results.projectedRate)}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-white/60">
                          Estimated annual savings
                        </span>
                        <span className="text-3xl font-bold text-uply-green-muted md:text-4xl">
                          {formatCurrency(results.estimatedSavings)}
                        </span>
                      </div>
                    </div>
                    <SlackInstallButton location="turnover-calculator" label="Start saving - Get Uply free" className="mt-6 w-full justify-center" />
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
