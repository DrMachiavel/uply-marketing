interface SampleQuestionProps {
  scenario: string;
  options: string[];
  correct: number;
  explanation: string;
}

export function SampleQuestion({
  scenario,
  options,
  correct,
  explanation,
}: SampleQuestionProps) {
  return (
    <div className="w-full max-w-lg rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      {/* Channel header */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/[0.06] pb-3">
        <span className="text-sm text-white/40">#</span>
        <span className="text-sm font-semibold text-white/70">
          team-skills
        </span>
        <span className="ml-auto text-xs text-white/25">9:01 AM</span>
      </div>

      {/* Bot message */}
      <div className="flex gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
          <svg width="32" height="32" viewBox="0 0 140 140" fill="none">
            <rect width="140" height="140" rx="28" fill="#68ef3f" />
            <path
              d="M34 52C34 52 34 104 70 104C106 104 106 52 106 52"
              stroke="#162415"
              strokeWidth="13"
              strokeLinecap="round"
            />
            <circle cx="70" cy="38" r="8" fill="#162415" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-bold text-white">Uply</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/40">
              APP
            </span>
          </div>

          {/* Scenario */}
          <p className="mb-3 text-[13px] leading-relaxed text-white/70">
            {scenario}
          </p>

          {/* Answer options */}
          <div className="flex flex-col gap-1.5">
            {options.map((option, i) => (
              <div
                key={i}
                className={`rounded-md border px-3 py-2 text-[12px] ${
                  i === correct
                    ? "border-uply-green-muted/40 bg-uply-green-muted/10 text-uply-green-muted"
                    : "border-white/10 bg-white/[0.03] text-white/50"
                }`}
              >
                {option}
                {i === correct && <span className="ml-1">&#10003;</span>}
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div className="mt-3 rounded-lg border border-uply-green-muted/20 bg-uply-green-muted/5 p-3 text-[11px] leading-relaxed text-white/60">
            <span className="font-semibold text-uply-green-muted">
              Great choice.
            </span>{" "}
            {explanation}
          </div>
        </div>
      </div>
    </div>
  );
}
