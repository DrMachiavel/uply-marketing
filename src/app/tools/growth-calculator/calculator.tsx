"use client";

import { useState, useMemo } from "react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SIGNUP_URL } from "@/lib/constants";

function formatCurrency(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
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

export function GrowthCalculator() {
  const [teamSize, setTeamSize] = useState(50);
  const [avgSalary, setAvgSalary] = useState(55000);
  const [untrainedMgrPct, setUntrainedMgrPct] = useState(70);
  const [hoursLostPerWeek, setHoursLostPerWeek] = useState(5);
  const [projectsDelayedPct, setProjectsDelayedPct] = useState(30);
  const [avgProjectValue, setAvgProjectValue] = useState(50000);
  const [numProjects, setNumProjects] = useState(20);

  const results = useMemo(() => {
    const hourlyRate = avgSalary / 2080;
    const communicationWaste =
      teamSize * hoursLostPerWeek * 52 * hourlyRate;
    const projectDelayCost =
      (projectsDelayedPct / 100) * numProjects * avgProjectValue * 0.15;
    const managementGapCost =
      teamSize * (untrainedMgrPct / 100) * avgSalary * 0.1;
    const total = communicationWaste + projectDelayCost + managementGapCost;
    const perEmployee = teamSize > 0 ? total / teamSize : 0;
    const estimatedRecovery = total * 0.4;
    const uplyAnnualCost = teamSize * 12;
    const roi = uplyAnnualCost > 0 ? estimatedRecovery / uplyAnnualCost : 0;

    return {
      communicationWaste,
      projectDelayCost,
      managementGapCost,
      total,
      perEmployee,
      estimatedRecovery,
      roi,
    };
  }, [
    teamSize,
    avgSalary,
    untrainedMgrPct,
    hoursLostPerWeek,
    projectsDelayedPct,
    avgProjectValue,
    numProjects,
  ]);

  return (
    <>
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Lost Growth Calculator
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Poor soft skills don&apos;t just hurt culture &mdash; they
              silently kill your growth. See how much yours is costing you.
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
                  label="Average annual salary"
                  value={avgSalary}
                  onChange={setAvgSalary}
                  prefix="$"
                />
                <InputField
                  label="% of managers with no leadership training"
                  value={untrainedMgrPct}
                  onChange={setUntrainedMgrPct}
                  suffix="%"
                />
                <InputField
                  label="Hours lost per week to poor communication (per employee)"
                  value={hoursLostPerWeek}
                  onChange={setHoursLostPerWeek}
                />
                <InputField
                  label="% of projects delayed by collaboration issues"
                  value={projectsDelayedPct}
                  onChange={setProjectsDelayedPct}
                  suffix="%"
                />
                <InputField
                  label="Average project value"
                  value={avgProjectValue}
                  onChange={setAvgProjectValue}
                  prefix="$"
                />
                <InputField
                  label="Number of projects per year"
                  value={numProjects}
                  onChange={setNumProjects}
                />
              </div>

              {/* Results */}
              <div className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-2xl border border-white/10 bg-uply-dark p-6 md:p-8">
                  <h2 className="mb-6 text-xl font-semibold text-white">
                    Your Hidden Growth Loss
                  </h2>
                  <div className="space-y-4">
                    <ResultRow
                      label="Communication waste"
                      value={formatCurrency(results.communicationWaste)}
                    />
                    <ResultRow
                      label="Project delay cost"
                      value={formatCurrency(results.projectDelayCost)}
                    />
                    <ResultRow
                      label="Management gap cost"
                      value={formatCurrency(results.managementGapCost)}
                    />

                    <div className="my-4 border-t border-white/10" />

                    <ResultRow
                      label="Total annual growth loss"
                      value={formatCurrency(results.total)}
                      large
                    />
                    <ResultRow
                      label="Per employee"
                      value={formatCurrency(results.perEmployee)}
                    />
                  </div>

                  <div className="my-6 border-t border-white/10" />

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      With Uply
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      2 minutes a day of targeted soft skills training recovers
                      up to 40% of lost growth
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-white/60">
                          Estimated annual recovery
                        </span>
                        <span className="text-3xl font-bold text-uply-green-muted md:text-4xl">
                          {formatCurrency(results.estimatedRecovery)}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-white/60">
                          Return on investment
                        </span>
                        <span className="text-lg font-semibold text-white">
                          That&apos;s {Math.round(results.roi)}x return on
                          investment
                        </span>
                      </div>
                    </div>
                    <a
                      href={SIGNUP_URL}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-uply-green px-6 py-3 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
                    >
                      Start recovering growth &mdash; Get Uply free
                    </a>
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
