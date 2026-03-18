"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-uply-dark/95 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/60">
          We use essential cookies to make our site work. We&apos;d also like to
          use analytics cookies to improve your experience.{" "}
          <Link
            href="/privacy#cookies"
            className="text-uply-green-muted underline underline-offset-2 hover:text-uply-green"
          >
            Learn more
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            Essential only
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-uply-green px-4 py-2 text-sm font-semibold text-uply-dark transition-all hover:brightness-110"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
