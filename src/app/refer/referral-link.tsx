"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/constants";
import { trackEvent } from "@/components/analytics";

function buildReferralUrl(name: string): string {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const url = new URL(SIGNUP_URL);
  url.searchParams.set("utm_source", "referral");
  url.searchParams.set("utm_medium", "share");
  url.searchParams.set("utm_campaign", "refer-a-team");
  url.searchParams.set("utm_content", slug);
  return url.toString();
}

export function ReferralLinkGenerator() {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  const referralUrl = name.trim().length >= 2 ? buildReferralUrl(name) : "";

  function handleCopy() {
    if (!referralUrl) return;
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    trackEvent("referral_link_copied", { referrer: name.trim() });
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-bold text-uply-dark">
        Get your referral link
      </h2>
      <p className="mt-2 text-sm text-uply-gray">
        Enter your name to generate a personal referral link you can share with
        any team.
      </p>

      <div className="mt-6">
        <label
          htmlFor="referrer-name"
          className="block text-sm font-medium text-uply-dark"
        >
          Your name
        </label>
        <input
          id="referrer-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setCopied(false);
          }}
          placeholder="e.g. Sarah Kim"
          className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-uply-dark placeholder:text-gray-400 focus:border-uply-green-muted focus:outline-none focus:ring-1 focus:ring-uply-green-muted"
        />
      </div>

      {referralUrl && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-uply-dark">
            Your referral link
          </label>
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              readOnly
              value={referralUrl}
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-uply-gray"
            />
            <button
              onClick={handleCopy}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                copied
                  ? "bg-uply-green-muted/10 text-uply-green-muted"
                  : "bg-uply-green text-uply-dark hover:brightness-110"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="mt-3 text-xs text-uply-gray">
            When someone installs Uply through this link, the referral is
            tracked automatically via UTM parameters.
          </p>
        </div>
      )}
    </div>
  );
}
