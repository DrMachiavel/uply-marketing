"use client";

import { useState } from "react";

interface EmailCaptureProps {
  headline?: string;
  description?: string;
  source: string;
  className?: string;
}

interface EmailEntry {
  email: string;
  source: string;
  timestamp: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function EmailCapture({
  headline = "Get your detailed report",
  description = "We'll send you a personalized breakdown with actionable recommendations.",
  source,
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed) {
      setState("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmed)) {
      setState("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const existing: EmailEntry[] = JSON.parse(
        localStorage.getItem("uply_email_captures") || "[]"
      );
      existing.push({
        email: trimmed,
        source,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("uply_email_captures", JSON.stringify(existing));
      setState("success");
    } catch {
      setState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-uply-dark p-6 md:p-8 ${className}`}
    >
      {state === "success" ? (
        <div className="flex flex-col items-center py-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-uply-green/10">
            <svg
              className="h-6 w-6 text-uply-green-muted"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">
            Check your inbox!
          </h3>
          <p className="mt-1.5 text-sm text-white/60">
            We&apos;ll send your personalized report shortly.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-white">{headline}</h3>
          <p className="mt-1.5 text-sm text-white/60">{description}</p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <div>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                className={`w-full rounded-lg border px-3 py-2.5 text-white transition-colors focus:border-uply-green-muted focus:outline-none focus:ring-1 focus:ring-uply-green-muted ${
                  state === "error"
                    ? "border-red-500/60 bg-uply-dark"
                    : "border-white/10 bg-uply-dark"
                }`}
              />
              {state === "error" && (
                <p className="mt-1.5 text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-uply-green px-6 py-3 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
            >
              Send me the report
            </button>
          </form>
        </>
      )}
    </div>
  );
}
