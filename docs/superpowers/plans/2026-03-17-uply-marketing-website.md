# Uply Marketing Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready marketing website for Uply (uply.work) — a Slack-native soft skills training platform.

**Architecture:** Next.js 15 App Router with static site generation. Tailwind CSS v4 for styling with a custom Uply color palette (Tomorro-inspired green on dark). MDX for blog and help center content. All pages are statically generated at build time.

**Tech Stack:** Next.js 15, Tailwind CSS 4, TypeScript, MDX (next-mdx-remote), Inter font (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-03-17-uply-marketing-website-design.md`

**Domain:** uply.work

**External signup URL:** TBD (Slack OAuth install URL — use `NEXT_PUBLIC_SIGNUP_URL` env var, default to `#` placeholder)

---

## Chunk 1: Project Foundation

### Task 1: Initialize Next.js project with Tailwind CSS v4

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `.env.local`
- Modify: `README.md`

- [ ] **Step 1: Initialize Next.js 15 with TypeScript and Tailwind**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

Select defaults when prompted. This scaffolds the project with Next.js 15, TypeScript, Tailwind CSS v4, and App Router.

- [ ] **Step 2: Verify the dev server starts**

```bash
npm run dev
```

Expected: Dev server starts on http://localhost:3000, default Next.js page renders.

- [ ] **Step 3: Create environment file**

Create `.env.local`:
```
NEXT_PUBLIC_SIGNUP_URL=#
NEXT_PUBLIC_SITE_URL=https://uply.work
```

Add `.env.local` to `.gitignore` if not already there. Create `.env.example` with the same keys but empty values.

- [ ] **Step 4: Configure Uply color palette in Tailwind CSS v4**

Tailwind v4 uses CSS-based configuration. Edit `src/app/globals.css` to define the Uply theme:

```css
@import "tailwindcss";

@theme {
  /* Uply Colors */
  --color-uply-dark: #0a0f0a;
  --color-uply-dark-elevated: #1a1a1a;
  --color-uply-green: #68ef3f;
  --color-uply-green-light: #4ade80;
  --color-uply-green-wash: #f0fdf4;
  --color-uply-gray: #6b7280;
  --color-uply-gray-light: #9ca3af;
  --color-uply-white: #ffffff;

  /* Font */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

- [ ] **Step 5: Set up root layout with Inter font**

Edit `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Uply — Soft skills training that lives in Slack",
    template: "%s | Uply",
  },
  description:
    "Daily micro-lessons in Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://uply.work"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Uply",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Create minimal homepage placeholder**

Edit `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-uply-dark flex items-center justify-center">
      <h1 className="text-4xl font-bold text-uply-green">Uply</h1>
    </main>
  );
}
```

- [ ] **Step 7: Verify custom theme works**

```bash
npm run dev
```

Expected: Page shows "Uply" in bright green (#68ef3f) on near-black background (#0a0f0a). Inter font loads.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js 15 with Tailwind v4 and Uply theme"
```

---

### Task 2: Shared UI components

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/section.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Create constants file**

```ts
// src/lib/constants.ts
export const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "#";

export const SITE_CONFIG = {
  name: "Uply",
  tagline: "Soft skills training that lives in Slack",
  description:
    "Daily micro-lessons in Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills.",
  url: "https://uply.work",
  social: {
    linkedin: "#", // TODO: Replace with actual Uply LinkedIn URL
    twitter: "#", // TODO: Replace with actual Uply X/Twitter URL
  },
  email: {
    support: "support@uply.work",
    privacy: "privacy@uply.work",
  },
} as const;
```

- [ ] **Step 2: Create Button component**

```tsx
// src/components/ui/button.tsx
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-uply-green text-uply-dark hover:bg-uply-green-light font-semibold",
  secondary:
    "bg-uply-dark-elevated text-white border border-white/15 hover:border-white/30",
  outline:
    "bg-transparent text-white border border-white/15 hover:border-uply-green hover:text-uply-green",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 3: Create Section wrapper component**

```tsx
// src/components/ui/section.tsx
type SectionTheme = "dark" | "light" | "green-wash";

interface SectionProps {
  theme?: SectionTheme;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const themeStyles: Record<SectionTheme, string> = {
  dark: "bg-uply-dark text-white",
  light: "bg-white text-uply-dark",
  "green-wash": "bg-uply-green-wash text-uply-dark",
};

export function Section({
  theme = "dark",
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 ${themeStyles[theme]} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
```

- [ ] **Step 4: Create Badge component**

```tsx
// src/components/ui/badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "dark";
}

export function Badge({ children, variant = "green" }: BadgeProps) {
  const styles =
    variant === "green"
      ? "bg-uply-green/10 text-uply-green border-uply-green/20"
      : "bg-white/10 text-white border-white/20";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${styles}`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 5: Verify components render**

Temporarily import Button and Section into `page.tsx` and verify they render correctly with different variants.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/ src/lib/constants.ts
git commit -m "feat: add shared UI components (Button, Section, Badge)"
```

---

### Task 3: Navigation and Footer

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar component**

```tsx
// src/components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-uply-dark/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold text-uply-green">
          uply
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button href={SIGNUP_URL} size="sm">
            Get started free
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}
```

- [ ] **Step 2: Create MobileNav component**

```tsx
// src/components/layout/mobile-nav.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="border-t border-white/5 bg-uply-dark px-6 py-6 md:hidden">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg text-white/60 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Button href={SIGNUP_URL} size="lg" className="mt-2 w-full text-center">
          Get started free
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create Footer component**

```tsx
// src/components/layout/footer.tsx
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: `mailto:${SITE_CONFIG.email.support}`, label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy Policy" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-uply-dark px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-extrabold text-uply-green">
              uply
            </Link>
            <p className="mt-3 text-sm text-white/40">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} ECOMMERCE RTM. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire Nav and Footer into root layout**

Update `src/app/layout.tsx` to include `<Navbar />` and `<Footer />` wrapping `{children}`, with `pt-[73px]` on the body or a wrapper div to account for the fixed navbar height.

```tsx
// Add to layout.tsx body:
<body className="font-sans antialiased bg-uply-dark">
  <Navbar />
  <main className="pt-[73px]">{children}</main>
  <Footer />
</body>
```

- [ ] **Step 5: Verify navigation and footer**

```bash
npm run dev
```

Expected: Sticky nav with "uply" logo, links, green CTA. Footer with columns and copyright. Mobile hamburger works on narrow viewport.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add navigation and footer layout components"
```

---

## Chunk 2: Homepage

### Task 4: Homepage — Hero section

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Build the hero section with:
- Badge: "Soft skills training in Slack"
- Headline: "Your team doesn't have time for soft skills training. That's exactly the point."
- Subheadline: "Soft skills training that lives in Slack."
- Two CTAs: "Get started free" (primary) + "See how it works" (outline, links to #how-it-works)
- Placeholder Slack mockup (styled div showing a sample question card in a Slack-like frame)

Dark background (#0a0f0a). Center-aligned text. Max-width on the text content.

- [ ] **Step 2: Create a Slack mockup component**

Create `src/components/ui/slack-mockup.tsx` — a visual representation of a daily question in Slack. Styled div (not an image) with:
- Slack-like message frame (dark elevated background, rounded)
- Uply bot avatar + name
- Sample question: "How do you handle a teammate who misses a deadline?"
- Two answer options as styled buttons
- This is reusable across Hero and Features page

- [ ] **Step 3: Wire Hero into homepage**

Update `src/app/page.tsx` to render `<Hero />`.

- [ ] **Step 4: Verify hero renders**

Check at http://localhost:3000 — hero should look polished with green text, dark background, and the Slack mockup.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/hero.tsx src/components/ui/slack-mockup.tsx src/app/page.tsx
git commit -m "feat: add homepage hero section with Slack mockup"
```

---

### Task 5: Homepage — Social proof, Stats, Problem/Solution

**Files:**
- Create: `src/components/sections/social-proof.tsx`
- Create: `src/components/sections/stats-bar.tsx`
- Create: `src/components/sections/problem-solution.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create SocialProof component**

Dark section. "Trusted by teams at" label. Row of 5-6 placeholder company logos (styled text in white/30 opacity — e.g., "Acme", "Relay", "Northwind", "Pollen", "Sidecar", "Basecamp"). Logos displayed in a horizontal row, evenly spaced.

- [ ] **Step 2: Create StatsBar component**

Dark section with subtle top border. Three stats in a row:
- "2,500+ employees trained"
- "50,000+ questions answered"
- "94% weekly completion rate"

Numbers in green, labels in white/60. All placeholder data.

- [ ] **Step 3: Create ProblemSolution component**

White section. Two-column layout:
- Left: Bold headline "Your employees don't have time. That's why it works."
- Right: 2-3 short paragraphs explaining the problem (no one does soft skills training at startups) and the solution (2 minutes a day in Slack, no new tool).

- [ ] **Step 4: Add sections to homepage**

Update `page.tsx`: Hero → SocialProof → StatsBar → ProblemSolution.

- [ ] **Step 5: Verify all sections render with correct theme alternation**

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/ src/app/page.tsx
git commit -m "feat: add social proof, stats, and problem/solution sections"
```

---

### Task 6: Homepage — How it works, Features grid

**Files:**
- Create: `src/components/sections/how-it-works.tsx`
- Create: `src/components/sections/features-grid.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create HowItWorks component**

White section with id="how-it-works" (anchor for hero's "See how it works" link). Three steps in a row:
1. "Install in Slack" — icon + description
2. "Daily micro-lessons" — icon + description
3. "Track weekly scores" — icon + description

Each step: green number/icon, dark title, gray description. Connected with a subtle line or arrow between steps on desktop.

- [ ] **Step 2: Create FeaturesGrid component**

Light green wash section. 2x2 grid of feature cards:
- Daily micro-lessons
- Weekly leaderboard
- Skill topics
- Team insights

Each card: dark elevated background if on dark section, or white card with green-wash border on light section. Icon + title + short description.

- [ ] **Step 3: Add to homepage**

Update `page.tsx` to add HowItWorks and FeaturesGrid after ProblemSolution.

- [ ] **Step 4: Verify**

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ src/app/page.tsx
git commit -m "feat: add how-it-works and features grid to homepage"
```

---

### Task 7: Homepage — Testimonials, Case study, CTA

**Files:**
- Create: `src/components/sections/testimonials.tsx`
- Create: `src/components/sections/case-study-teaser.tsx`
- Create: `src/components/sections/cta-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Testimonials component**

Dark section. Simple testimonial carousel: 3 testimonial cards that auto-rotate every 5 seconds, with dot indicators and manual navigation. On desktop, show all 3 in a row; on mobile, carousel rotates single cards. Client component with `useState` for active index and `useEffect` for auto-advance.
- Quote text (white)
- Author name (white, bold)
- Author role + company (white/60)
- Small avatar placeholder (colored circle with initials)

All placeholder content. Make it realistic:
- "We installed Uply on a Monday. By Friday, our team was actually talking about soft skills for the first time." — Sarah M., VP People at Relay
- "The leaderboard changed everything. Our managers started competing to give better feedback." — Thomas K., CEO at Northwind
- "2 minutes a day. That's it. And the impact on our team culture has been huge." — Marie L., Head of HR at Pollen

- [ ] **Step 2: Create CaseStudyTeaser component**

White section. Single card with:
- Green wash background
- Headline: "How Northwind improved manager feedback scores in 4 weeks"
- 2-3 bullet stats: "87% participation rate", "3x more peer feedback", "42% improvement in manager scores"
- CTA: "Read the full story" (links to # for now)

- [ ] **Step 3: Create CTASection component**

Dark section. Centered text:
- Headline: "Ready to build better soft skills?"
- Subheadline: "Join 200+ teams already using Uply. Free to start."
- Primary CTA: "Get started free"
- Secondary social proof below

Reusable — will be used on Features and Pricing pages too.

- [ ] **Step 4: Complete homepage assembly**

Final `page.tsx` order: Hero → SocialProof → StatsBar → ProblemSolution → HowItWorks → FeaturesGrid → Testimonials → CaseStudyTeaser → CTASection.

- [ ] **Step 5: Add fade-in-on-scroll animation**

Create `src/components/ui/fade-in.tsx` — a client component that uses IntersectionObserver to apply fade-in-on-scroll to its children. Add `@keyframes fadeInUp` in `globals.css` (translate-y from 20px to 0, opacity 0 to 1, 0.6s ease-out). The component observes its wrapper div and adds an `is-visible` class when it enters the viewport (threshold: 0.1). CSS handles the animation via `.fade-in.is-visible { animation: fadeInUp ... }`.

- [ ] **Step 6: Apply FadeIn wrapper to each homepage section**

- [ ] **Step 7: Verify full homepage flow**

Scroll through the entire homepage. Check:
- Section rhythm: dark/dark/white/green-wash/dark/white/dark
- Fade-in animations trigger on scroll
- Mobile responsive (check at 375px width)
- All CTAs point to SIGNUP_URL

- [ ] **Step 8: Commit**

```bash
git add src/components/ src/app/page.tsx src/app/globals.css
git commit -m "feat: complete homepage with testimonials, case study, CTA, and scroll animations"
```

---

## Chunk 3: Features & Pricing Pages

### Task 8: Features page

**Files:**
- Create: `src/app/features/page.tsx`
- Create: `src/components/sections/feature-block.tsx`
- Create: `src/components/sections/topics-grid.tsx`

- [ ] **Step 1: Create FeatureBlock component**

A reusable two-column section block: text on one side, visual (Slack mockup or illustration) on the other. Props: `title`, `description`, `visual` (ReactNode), `reversed` (boolean — flips layout). Alternates between light and dark themes.

- [ ] **Step 2: Create TopicsGrid component**

Light green wash section. 3x2 grid of topic cards:
- Leadership, Collaboration, Communication, Feedback, Conflict Resolution, Time Management

Each card: icon + topic name + one-line description.

- [ ] **Step 3: Build Features page**

`src/app/features/page.tsx`:
1. Hero (dark) — "Everything your team needs to build better soft skills"
2. FeatureBlock: Daily micro-lessons (with Slack mockup)
3. FeatureBlock: Weekly leaderboard (reversed, with leaderboard mockup)
4. FeatureBlock: Skill topics (with topics preview)
5. FeatureBlock: Team insights (reversed, with dashboard mockup)
6. TopicsGrid
7. CTASection (reuse from homepage)

Add SEO metadata:
```tsx
export const metadata = {
  title: "Features",
  description: "Daily micro-lessons, weekly leaderboards, and team insights — all in Slack.",
};
```

- [ ] **Step 4: Verify features page**

Navigate to /features. Check all blocks render, alternating layout works, mobile stacking works.

- [ ] **Step 5: Commit**

```bash
git add src/app/features/ src/components/sections/
git commit -m "feat: add features page with feature blocks and topics grid"
```

---

### Task 9: Pricing page

**Files:**
- Create: `src/app/pricing/page.tsx`
- Create: `src/components/sections/pricing-cards.tsx`
- Create: `src/components/sections/pricing-comparison.tsx`
- Create: `src/components/sections/faq.tsx`

- [ ] **Step 1: Create PricingCards component**

Two cards side by side (stacked on mobile):

**Free card:**
- Title: "Free"
- Price: "$0"
- Subtitle: "For small teams getting started"
- Features: Up to 5 users, 1 topic, Daily questions, Basic weekly summary
- CTA: "Get started" (primary button)

**Pro card:**
- "Popular" badge (green)
- "Free during early access" banner
- Title: "Pro"
- Price: ~~"$1/user/mo"~~ crossed out → "Free"
- Subtitle: "For growing teams that want it all"
- Features: Unlimited users, All topics, Leaderboards, Analytics dashboard, Priority support
- CTA: "Start free trial" (primary button)
- Pro card has green border glow

- [ ] **Step 2: Create PricingComparison component**

Feature comparison table. Rows:
- Users (5 / Unlimited)
- Topics (1 / All)
- Daily questions (✓ / ✓)
- Weekly summary (Basic / Advanced)
- Leaderboard (— / ✓)
- Analytics dashboard (— / ✓)
- Priority support (— / ✓)

Checkmarks in green, dashes in gray.

- [ ] **Step 3: Create FAQ component**

Accordion with 5 questions (from spec). Each item: question as clickable header, answer slides/fades open. Client component with useState for open/closed state.

- [ ] **Step 4: Build Pricing page**

`src/app/pricing/page.tsx`:
1. Header (dark) — "Simple pricing. Start free."
2. PricingCards (white)
3. Early access banner (green wash) — "Pro is free during early access. Normally $1/user/month."
4. PricingComparison (white)
5. FAQ (white)
6. CTASection (dark)

Add SEO metadata.

- [ ] **Step 5: Verify pricing page**

Check /pricing — cards render, comparison table is responsive, FAQ accordion works.

- [ ] **Step 6: Commit**

```bash
git add src/app/pricing/ src/components/sections/
git commit -m "feat: add pricing page with cards, comparison table, and FAQ"
```

---

## Chunk 4: Blog System

### Task 10: MDX blog infrastructure

**Files:**
- Create: `src/lib/mdx.ts`
- Create: `src/content/blog/soft-skills-ai-age.mdx` (sample post)
- Create: `src/content/blog/daily-habits-beat-workshops.mdx` (sample post)
- Modify: `next.config.ts` (if needed for MDX)
- Modify: `package.json` (add next-mdx-remote)

- [ ] **Step 1: Install MDX dependencies**

```bash
npm install next-mdx-remote gray-matter reading-time
```

- [ ] **Step 2: Create MDX utility library**

`src/lib/mdx.ts` — functions to:
- `getAllPosts()` — reads all `.mdx` files from `src/content/blog/`, parses frontmatter with gray-matter, calculates reading time, returns sorted by date (newest first)
- `getPostBySlug(slug)` — reads a single post, returns frontmatter + raw MDX content
- `getRecentPosts(count, excludeSlug?)` — returns N most recent posts excluding one (for "related posts")
- Type definitions for `BlogPost` frontmatter

All functions use `fs` and `path` — server-side only.

- [ ] **Step 3: Create two sample blog posts**

`src/content/blog/soft-skills-ai-age.mdx`:
```yaml
---
title: "Why Soft Skills Matter More Than Ever in the AI Age"
date: "2026-03-10"
excerpt: "As AI handles more technical tasks, the skills that make us human — communication, empathy, leadership — become your team's biggest competitive advantage."
author: "Uply Team"
---
```
Write 3-4 paragraphs of realistic content.

`src/content/blog/daily-habits-beat-workshops.mdx`:
```yaml
---
title: "Why Daily Habits Beat Annual Workshops"
date: "2026-03-15"
excerpt: "Your team forgets 90% of a workshop within a week. Here's why 2 minutes a day works better than 2 days a year."
author: "Uply Team"
---
```
Write 3-4 paragraphs of realistic content.

- [ ] **Step 4: Verify MDX parsing works**

Create a temporary test in a page that calls `getAllPosts()` and logs the result. Confirm frontmatter parses correctly and reading time calculates.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mdx.ts src/content/blog/ package.json package-lock.json
git commit -m "feat: add MDX blog infrastructure with sample posts"
```

---

### Task 11: Blog listing and post pages

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`
- Create: `src/components/ui/blog-card.tsx`
- Create: `src/components/sections/blog-cta.tsx`

- [ ] **Step 1: Create BlogCard component**

Card for blog listing grid: optional thumbnail image (from frontmatter `image` field — show green gradient placeholder if no image), title (bold), excerpt (2 lines, truncated), date, reading time. White card with subtle border, hover: slight lift + green border. Links to `/blog/[slug]`.

- [ ] **Step 2: Create blog listing page**

`src/app/blog/page.tsx`:
- Header (dark): "Blog" + subtitle
- Post grid (white): 3-column grid of BlogCards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- For now, show all posts (no pagination needed with 2 sample posts — add "Load more" when there are >9)
- Uses `getAllPosts()` server-side
- SEO metadata

- [ ] **Step 3: Create blog post page**

`src/app/blog/[slug]/page.tsx`:
- `generateStaticParams()` — returns all slugs for SSG
- `generateMetadata()` — dynamic meta from frontmatter
- Header (dark): title, date, reading time, author
- Content (white, centered max-w-3xl): MDX rendered with `next-mdx-remote`
- Author bio card at bottom
- 2-3 recent posts ("Read more")
- CTA banner (dark): "Try Uply free"

Style the MDX prose: use Tailwind's `prose` class (install `@tailwindcss/typography` if needed) with custom overrides for headings, links (green), and blockquotes.

- [ ] **Step 4: Install typography plugin if needed**

```bash
npm install @tailwindcss/typography
```

Add to `globals.css`:
```css
@plugin "@tailwindcss/typography";
```

- [ ] **Step 5: Verify blog pages**

- `/blog` shows both posts in a grid
- `/blog/soft-skills-ai-age` renders full post with styled prose
- Related posts show at bottom
- CTA banner renders

- [ ] **Step 6: Commit**

```bash
git add src/app/blog/ src/components/ package.json package-lock.json src/app/globals.css
git commit -m "feat: add blog listing and post pages with MDX rendering"
```

---

## Chunk 5: Help Center, Privacy Policy, SEO & Polish

### Task 12: Help Center

**Files:**
- Create: `src/lib/help.ts`
- Create: `src/app/help/page.tsx`
- Create: `src/app/help/[category]/page.tsx`
- Create: `src/app/help/[category]/[slug]/page.tsx`
- Create: `src/content/help/getting-started/install-slack.mdx`
- Create: `src/content/help/getting-started/invite-team.mdx`
- Create: `src/content/help/getting-started/choose-topics.mdx`
- Create: `src/content/help/daily-lessons/how-questions-work.mdx`
- Create: `src/content/help/daily-lessons/answering-questions.mdx`
- Create: `src/content/help/daily-lessons/changing-topics.mdx`
- Create: `src/content/help/scores/how-scoring-works.mdx`
- Create: `src/content/help/scores/weekly-leaderboard.mdx`
- Create: `src/content/help/scores/what-counts.mdx`
- Create: `src/content/help/account/manage-plan.mdx`
- Create: `src/content/help/account/cancellation.mdx`
- Create: `src/content/help/account/upgrading.mdx`
- Create: `src/content/help/privacy-security/data-handling.mdx`
- Create: `src/content/help/privacy-security/slack-permissions.mdx`
- Create: `src/content/help/privacy-security/gdpr-rights.mdx`

- [ ] **Step 1: Create help utility library**

`src/lib/help.ts`:
- `getHelpCategories()` — returns category metadata (slug, name, description, article count)
- `getArticlesByCategory(category)` — reads MDX files from `src/content/help/[category]/`, sorted by `order` frontmatter
- `getHelpArticle(category, slug)` — reads single article
- Type definitions for `HelpArticle` and `HelpCategory`

Category metadata defined as a constant map:
```ts
const CATEGORIES = {
  "getting-started": { name: "Getting Started", description: "Set up Uply in your Slack workspace" },
  "daily-lessons": { name: "Daily Lessons", description: "How questions and answers work" },
  "scores": { name: "Scores & Leaderboard", description: "Scoring system and weekly rankings" },
  "account": { name: "Account & Billing", description: "Manage your plan and billing" },
  "privacy-security": { name: "Privacy & Security", description: "Data handling and permissions" },
};
```

- [ ] **Step 2: Create help article MDX files**

Write 2-3 short articles per category (3-5 paragraphs each). Frontmatter:
```yaml
---
title: "How to install Uply in Slack"
category: "getting-started"
order: 1
---
```

Content should be realistic and helpful, covering the basics described in the spec.

- [ ] **Step 3: Build Help Center index page**

`src/app/help/page.tsx`:
- Header (dark): "How can we help?" + client-side search input (filters category/article names)
- Category grid (white): Cards for each category — icon, name, description, article count
- Contact section (green wash): "Can't find what you need?" + support email

- [ ] **Step 4: Build Help category page**

`src/app/help/[category]/page.tsx`:
- Breadcrumb: Help Center > Category Name
- List of articles in that category, ordered by `order` frontmatter
- Each article: title as link, first line of content as preview

- [ ] **Step 5: Build Help article page**

`src/app/help/[category]/[slug]/page.tsx`:
- Breadcrumb: Help Center > Category > Article Title
- Clean prose rendering (same as blog but simpler — no author, no date)
- "Was this helpful?" at the bottom (non-functional for now, just UI)
- Link back to category

- [ ] **Step 6: Verify help center flow**

- `/help` — shows all categories with counts
- `/help/getting-started` — lists articles
- `/help/getting-started/install-slack` — renders article
- Search filters on index page

- [ ] **Step 7: Commit**

```bash
git add src/lib/help.ts src/app/help/ src/content/help/
git commit -m "feat: add help center with categories and MDX articles"
```

---

### Task 13: Privacy Policy page

**Files:**
- Create: `src/app/privacy/page.tsx`

- [ ] **Step 1: Create Privacy Policy page**

`src/app/privacy/page.tsx` — static page with full privacy policy text. Hardcoded content (not MDX — it's a single page that rarely changes).

Header (dark): "Privacy Policy"
Content (white, centered max-w-3xl): Full privacy policy with sections:

1. **Introduction** — ECOMMERCE RTM ("we", "us") operates Uply. This policy explains how we collect and use data.
2. **Data We Collect** — Slack workspace info (workspace name, user names, user IDs), responses to daily questions, aggregated scores and rankings.
3. **Data We Do NOT Collect** — We do not access, read, or store Slack messages, files, or private conversations.
4. **How We Use Your Data** — To deliver daily questions, calculate scores, generate leaderboards, improve our question content.
5. **Data Storage & Security** — Data stored securely in the EU. Encrypted in transit and at rest.
6. **Third-Party Services** — Slack API (required for service delivery). We do not sell data to third parties.
7. **Your Rights (GDPR)** — Right to access, rectify, erase, restrict, port your data. Contact privacy@uply.work.
8. **Cookies** — We use essential cookies only. No tracking or advertising cookies.
9. **Data Retention** — Data retained while your account is active. Deleted within 30 days of account closure.
10. **Changes to This Policy** — We'll notify you via Slack of material changes.
11. **Contact** — ECOMMERCE RTM, privacy@uply.work

Footer note: "Last updated: March 2026"

SEO metadata.

- [ ] **Step 2: Verify privacy page**

Navigate to /privacy. Check all sections render with clean typography.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy/
git commit -m "feat: add privacy policy page for ECOMMERCE RTM"
```

---

### Task 14: SEO, sitemap, robots, Open Graph

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/opengraph-image.tsx` (or static OG image)
- Modify: `src/app/layout.tsx` (structured data)

- [ ] **Step 1: Create sitemap.ts**

Next.js App Router supports `sitemap.ts` that auto-generates `sitemap.xml`:

```ts
import { getAllPosts } from "@/lib/mdx";
import { getHelpCategories, getArticlesByCategory } from "@/lib/help";

export default async function sitemap() {
  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `https://uply.work/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  // Help center URLs
  const categories = getHelpCategories();
  const helpUrls = categories.flatMap((cat) => {
    const articles = getArticlesByCategory(cat.slug);
    return [
      { url: `https://uply.work/help/${cat.slug}`, lastModified: new Date() },
      ...articles.map((article) => ({
        url: `https://uply.work/help/${cat.slug}/${article.slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return [
    { url: "https://uply.work", lastModified: new Date() },
    { url: "https://uply.work/features", lastModified: new Date() },
    { url: "https://uply.work/pricing", lastModified: new Date() },
    { url: "https://uply.work/blog", lastModified: new Date() },
    { url: "https://uply.work/help", lastModified: new Date() },
    { url: "https://uply.work/privacy", lastModified: new Date() },
    ...blogUrls,
    ...helpUrls,
  ];
}
```

- [ ] **Step 2: Create robots.ts**

```ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://uply.work/sitemap.xml",
  };
}
```

- [ ] **Step 3: Add JSON-LD structured data**

Add Organization and Product structured data to the root layout via a `<script type="application/ld+json">` tag.

- [ ] **Step 4: Ensure all pages have proper metadata**

Verify each page has: title, description, Open Graph title/description. The root layout's `metadata.metadataBase` handles URL prefixing.

- [ ] **Step 5: Build and check**

```bash
npm run build
```

Expected: All pages build as static. No errors. Check `/sitemap.xml` and `/robots.txt` in the build output.

- [ ] **Step 6: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx
git commit -m "feat: add sitemap, robots.txt, and structured data for SEO"
```

---

### Task 15: Final polish and production build

**Files:**
- Modify: various (responsive fixes, spacing tweaks)
- Create: `.env.example`
- Modify: `README.md`

- [ ] **Step 1: Responsive audit**

Check every page at 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide). Fix any layout issues:
- Text overflow
- Card stacking
- Image sizing
- Nav behavior
- Section padding

- [ ] **Step 2: Cross-page consistency check**

Verify:
- All CTAs use `SIGNUP_URL` from constants
- All "Get started free" buttons are consistent
- Section themes follow the dark/light rhythm
- FadeIn animations are applied to all page sections
- Footer renders on every page

- [ ] **Step 3: Production build**

```bash
npm run build && npm start
```

Expected: Clean build, no warnings. All pages accessible. Fast page loads (check with Lighthouse if available).

- [ ] **Step 4: Update README**

Update `README.md` with final project structure, actual scripts, and any setup notes for Replit deployment.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: final polish — responsive fixes, production build verified"
git push
```
