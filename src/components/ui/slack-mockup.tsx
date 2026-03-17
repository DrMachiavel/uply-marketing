interface SlackMockupProps {
  question?: string;
  optionA?: string;
  optionB?: string;
}

export function SlackMockup({
  question = "How do you handle a teammate who misses a deadline?",
  optionA = "Address it privately and offer help",
  optionB = "Escalate to the team lead immediately",
}: SlackMockupProps) {
  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-uply-dark-elevated p-5 shadow-2xl">
      {/* Channel header */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="text-sm font-medium text-white/50">#</span>
        <span className="text-sm font-medium text-white/70">team-skills</span>
        <span className="ml-auto text-xs text-white/30">9:01 AM</span>
      </div>

      {/* Bot message */}
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-uply-green text-sm font-bold text-uply-dark">
          U
        </div>

        <div className="min-w-0 flex-1">
          {/* Bot name + badge */}
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-bold text-white">Uply</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white/50">
              APP
            </span>
          </div>

          {/* Question */}
          <p className="mb-3 text-sm leading-relaxed text-white/80">
            {question}
          </p>

          {/* Answer options */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/70 transition-colors hover:border-uply-green/30 hover:bg-uply-green/5 hover:text-white"
            >
              {optionA}
            </button>
            <button
              type="button"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/70 transition-colors hover:border-uply-green/30 hover:bg-uply-green/5 hover:text-white"
            >
              {optionB}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
