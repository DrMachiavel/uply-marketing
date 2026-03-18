"use client";

import { useState, useEffect } from "react";

interface SlackMockupProps {
  question?: string;
  optionA?: string;
  optionB?: string;
}

function SlackLogo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}

export function SlackMockup({
  question = "How do you handle a teammate who misses a deadline?",
  optionA = "Address it privately and offer help",
  optionB = "Escalate to the team lead immediately",
}: SlackMockupProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [typing, setTyping] = useState(true);

  // Simulate typing indicator on mount
  useEffect(() => {
    const timer = setTimeout(() => setTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-select first option after message appears
  useEffect(() => {
    if (!typing) {
      const timer = setTimeout(() => setSelected(0), 1500);
      return () => clearTimeout(timer);
    }
  }, [typing]);

  return (
    <div className="relative w-full max-w-md">
      {/* Slack window chrome */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1d21] shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#1a1d21] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-white/10" />
            <div className="h-3 w-3 rounded-full bg-white/10" />
            <div className="h-3 w-3 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2">
            <SlackLogo className="h-4 w-4" />
            <span className="text-xs font-medium text-white/50">Slack</span>
          </div>
        </div>

        {/* Slack layout */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-[180px] shrink-0 border-r border-white/[0.06] bg-[#19171d] p-3 sm:block">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-uply-green-muted/20 text-center text-[10px] leading-5 font-bold text-uply-green-muted">
                A
              </div>
              <span className="text-xs font-semibold text-white/70">Acme Inc</span>
            </div>
            <div className="space-y-0.5">
              <div className="rounded px-2 py-1 text-[11px] text-white/30">
                # general
              </div>
              <div className="rounded px-2 py-1 text-[11px] text-white/30">
                # engineering
              </div>
              <div className="rounded bg-white/[0.06] px-2 py-1 text-[11px] font-medium text-white/70">
                # team-skills
              </div>
              <div className="rounded px-2 py-1 text-[11px] text-white/30">
                # random
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Channel header */}
            <div className="mb-4 flex items-center gap-2 border-b border-white/[0.06] pb-3">
              <span className="text-sm font-medium text-white/40">#</span>
              <span className="text-sm font-semibold text-white/80">team-skills</span>
              <span className="ml-auto text-xs text-white/25">9:01 AM</span>
            </div>

            {/* Bot message */}
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-uply-green text-sm font-bold text-uply-dark">
                U
              </div>

              <div className="min-w-0 flex-1">
                {/* Bot name + badge */}
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Uply</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white/40">
                    APP
                  </span>
                </div>

                {/* Question */}
                <p className="mb-3 text-[13px] leading-relaxed text-white/75">
                  {question}
                </p>

                {/* Answer options */}
                {typing ? (
                  <div className="flex items-center gap-1 py-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-white/30 [animation-delay:0ms]" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-white/30 [animation-delay:150ms]" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-white/30 [animation-delay:300ms]" />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(0)}
                      className={`rounded-md border px-3 py-2 text-left text-[13px] transition-all duration-300 ${
                        selected === 0
                          ? "border-uply-green-muted/40 bg-uply-green-muted/10 text-uply-green-muted"
                          : "border-white/10 bg-white/[0.03] text-white/60 hover:border-uply-green-muted/20 hover:bg-uply-green-muted/5 hover:text-white/80"
                      }`}
                    >
                      {optionA}
                      {selected === 0 && (
                        <span className="ml-2 text-[11px]">✓</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(1)}
                      className={`rounded-md border px-3 py-2 text-left text-[13px] transition-all duration-300 ${
                        selected === 1
                          ? "border-uply-green-muted/40 bg-uply-green-muted/10 text-uply-green-muted"
                          : "border-white/10 bg-white/[0.03] text-white/60 hover:border-uply-green-muted/20 hover:bg-uply-green-muted/5 hover:text-white/80"
                      }`}
                    >
                      {optionB}
                      {selected === 1 && (
                        <span className="ml-2 text-[11px]">✓</span>
                      )}
                    </button>
                  </div>
                )}

                {/* Reaction after selection */}
                {selected !== null && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-white/30 animate-in fade-in duration-500">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
                      ✅ <span className="text-white/40">3</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
                      🎯 <span className="text-white/40">1</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Built for Slack" pill below */}
      <div className="mt-3 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <SlackLogo className="h-3.5 w-3.5" />
          <span className="text-xs font-medium text-white/50">Built for Slack</span>
        </div>
      </div>
    </div>
  );
}
