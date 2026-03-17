# Uply Marketing Website — Design Spec

## Overview

Marketing website for **Uply**, a Slack-native soft skills training platform. Uply delivers daily micro-lessons (1-2 questions) to employees via Slack, with weekly scoring and leaderboards. The website serves as the primary acquisition channel for C-suite/founders and HR leaders at startups and scale-ups.

## Product Context

- **What Uply does:** Daily micro-lessons in Slack — multiple choice and open-ended questions on soft skills (leadership, collaboration, feedback, conflict resolution). Weekly leaderboard highlights top-performing employees.
- **Core positioning:** "You don't have time for soft skills training. That's why it lives in Slack."
- **Status:** Live and usable.
- **Conversion model:** Self-serve signup, freemium. Pro tier is free during early access (normally $1/user/month).

## Target Audience

- **Primary:** C-suite / founders at startups and scale-ups
- **Secondary:** HR leaders / L&D managers at startups and scale-ups
- **Shared traits:** Outcome-oriented, time-constrained, allergic to enterprise fluff, value simplicity

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15 | Framework (App Router, SSG) |
| Tailwind CSS | 4 | Styling |
| TypeScript | Latest | Type safety |
| MDX | next-mdx-remote | Blog content |
| Replit | — | Deployment (free) |
| GitHub | — | Source control |

**No paid services.** Everything free — GitHub for repo, Replit for deploy, markdown for blog. Headless CMS can be added later if needed.

## Project Structure

```
uply-marketing/
├── public/
│   ├── images/           # Logos, screenshots, illustrations
│   └── fonts/            # Self-hosted fonts
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (nav + footer)
│   │   ├── page.tsx      # Homepage
│   │   ├── features/
│   │   ├── pricing/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/page.tsx   # Individual post
│   │   ├── help/                 # Help center
│   │   └── privacy/              # Privacy policy
│   ├── components/
│   │   ├── ui/           # Buttons, cards, badges
│   │   ├── layout/       # Nav, Footer, Section wrappers
│   │   └── sections/     # Hero, Features, Pricing, Testimonials
│   ├── content/
│   │   ├── blog/         # MDX blog posts
│   │   └── help/         # MDX help articles (by category)
│   └── lib/
│       └── mdx.ts        # MDX utilities
├── app.css               # Tailwind v4 CSS config + Uply custom tokens
├── next.config.ts
├── package.json
└── README.md
```

## Site Map

```
uply.com/
├── /              Homepage
├── /features      How it works + feature details
├── /pricing       Plans & comparison
├── /blog          Blog listing
├── /blog/[slug]   Individual blog posts (MDX)
├── /help          Help center
└── /privacy       Privacy policy (ECOMMERCE RTM)
```

Note: Signup page is external (existing Slack install flow). All "Get started" CTAs link to the external signup URL.

## Brand & Visual Design

### Color Palette (Tomorro-inspired)

| Token | Hex | Usage |
|-------|-----|-------|
| Background Dark | `#0a0f0a` | Hero, testimonials, CTA, footer |
| Primary Green | `#68ef3f` | CTAs, highlights, logo, accents |
| Background Light | `#ffffff` | How it works, pricing, content sections |
| Green Wash | `#f0fdf4` | Light section tint, cards on white |
| Green Light | `#4ade80` | Hover states, secondary accents |
| Dark Elevated | `#1a1a1a` | Cards on dark backgrounds |
| Gray | `#6b7280` | Secondary text |

### Section Rhythm

Dark and light sections alternate to create contrast and breathing room:

**Dark → Dark → White → Light Green → Dark → White → Dark**

- **Dark sections:** Hero, social proof, testimonials, CTA — high-impact moments
- **White/light sections:** How it works, features, pricing — content-heavy, readable areas

### Typography

- **Headings + Body:** Inter (clean, modern, excellent readability). Single font family — heavier weights (700, 800) for headings, regular (400) for body.
- **Style:** Clean, generous whitespace, no clutter

### Animations

- Subtle fade-in on scroll for sections (CSS-only, no heavy libraries)
- Hover effects on cards and CTAs (scale, border glow)
- No complex animations — keep it fast and lightweight

### Tone

- Warm, human, approachable (Notion/Loom vibe)
- Short sentences. Direct. No corporate jargon.
- "You" not "organizations" — talk to a person, not a company.
- Confident but not pushy. Warm but not fluffy.

## Homepage Structure

1. **Hero** — Headline + subheadline + CTA + Slack product mockup
2. **Social proof bar** — Company logos ("Trusted by teams at...")
3. **Stats bar** — "X employees trained", "Y questions answered", "Z% completion rate"
4. **Problem/Solution** — Reframe: no time is exactly why it works
5. **How it works** — 3 steps: Install in Slack → Daily micro-lessons → Track weekly scores
6. **Features grid** — Key capabilities (daily questions, leaderboard, scoring, topics)
7. **Testimonials carousel** — Multiple quotes from founders & HR leads
8. **Case study teaser** — "How [Company] improved manager skills in 4 weeks"
9. **CTA section** — Signup + secondary social proof ("Join X+ teams already using Uply")
10. **Footer** — Links, legal, social

Social proof is woven throughout — every other section reinforces credibility.

**Social proof content:** All logos, testimonials, stats, and case studies will use placeholder/mock content at launch. Real content will be swapped in as it becomes available. Placeholders should look realistic (fictional but believable company names, quotes, numbers).

## Navigation & Footer

### Navigation (sticky)
- **Left:** Uply logo (green on dark)
- **Center:** Features, Pricing, Blog
- **Right:** "Get started free" CTA button (green)
- **Mobile:** Hamburger menu → slide-out drawer with same links + CTA
- **Behavior:** Sticky, dark background, subtle border on scroll

### Footer
- **Column 1:** Uply logo + one-line tagline
- **Column 2 — Product:** Features, Pricing, Blog
- **Column 3 — Support:** Help Center, Contact
- **Column 4 — Legal:** Privacy Policy
- **Bottom row:** Copyright + social icons (LinkedIn, Twitter/X)

## Features Page (`/features`)

### Layout
1. **Hero** (dark) — "Everything your team needs to build better soft skills"
2. **Feature blocks** (alternating light/dark) — Each feature gets a two-column block: text on one side, Slack mockup/illustration on the other. Alternate left/right.
3. **Topics covered** (light green wash) — Grid of skill categories: Leadership, Collaboration, Communication, Feedback, Conflict Resolution, Time Management
4. **CTA section** (dark) — "Start building better skills today"

### Feature Blocks Content
- **Daily micro-lessons** — 1-2 questions per day, delivered in Slack. Multiple choice + open-ended. Takes 2 minutes.
- **Weekly leaderboard** — Scores aggregated weekly. Top performers highlighted. Friendly competition drives engagement.
- **Skill topics** — Curated content across leadership, collaboration, feedback, and more. New topics added regularly.
- **Team insights** — See participation rates and scores at a glance. Know which skills your team is developing.

## Pricing Page (`/pricing`)

### Layout
1. **Header** (dark) — "Simple pricing. Start free."
2. **Pricing cards** (white) — Two cards side by side: Free and Pro. Pro card is visually emphasized (green border, "Popular" badge, early access banner).
3. **Feature comparison table** (white) — Rows for each feature, checkmarks for which tier includes it.
4. **Early access banner** (green wash) — "Pro is free during early access. Normally $1/user/month."
5. **FAQ accordion** (white) — Common questions.
6. **CTA section** (dark)

### FAQ Content
- **How does billing work?** — Free during early access. When paid plans launch, you'll get 30 days notice.
- **Can I cancel anytime?** — Yes, cancel anytime. No contracts.
- **What Slack permissions does Uply need?** — Uply only posts to channels you choose. It cannot read your messages.
- **Is my data secure?** — Yes. We don't store message content. Only question responses are saved.
- **How many topics are available?** — Free includes 1 topic. Pro includes all current and future topics.

## Help Center (`/help`)

### Layout
1. **Header** (dark) — "How can we help?" + search bar (filters articles client-side)
2. **Category grid** (white) — Cards for each help category:
   - **Getting Started** — Installing Uply in Slack, inviting your team, choosing topics
   - **Daily Lessons** — How questions work, answering, skipping, changing topics
   - **Scores & Leaderboard** — How scoring works, weekly rankings, what counts
   - **Account & Billing** — Managing your plan, upgrading, cancellation
   - **Privacy & Security** — Data handling, Slack permissions, GDPR
3. **Contact section** (light green wash) — "Can't find what you need? Email us at support@uply.com"

### Help Articles
Help articles are MDX files in `src/content/help/`, organized by category folders. Same rendering approach as blog posts but with a simpler layout (no author, no date, no related articles).

```yaml
---
title: "How to install Uply in Slack"
category: "getting-started"
order: 1
---
```

Initial launch: 3-5 articles per category covering the basics. Minimal but functional.

## Privacy Policy (`/privacy`)

### Layout
1. **Header** (dark) — "Privacy Policy"
2. **Content** (white, centered, max-width ~720px) — Full privacy policy text, clean typography
3. **Footer note** — "Last updated: [date]" + "Questions? Contact privacy@uply.com"

### Legal Entity
- **Company:** ECOMMERCE RTM
- **Product:** Uply
- **Data processed:** Slack workspace info, user responses to daily questions, aggregated scores
- **Data NOT processed:** Slack messages, files, or private conversations
- **Third parties:** Slack API (required integration)
- **Jurisdiction:** French law / EU (GDPR compliant)

The full privacy policy text will be generated as a static page. It covers: data collection, data usage, data storage, third-party sharing, user rights (GDPR), cookies, data retention, and contact information.

## Blog (`/blog`)

### Blog Listing Page
- **Header** (dark) — "Blog" + subtitle "Thoughts on leadership, soft skills, and building better teams"
- **Post grid** (white) — 3-column card grid. Each card: thumbnail image (optional), title, excerpt (2 lines), date, reading time. No categories/tags at launch.
- **Pagination** — Simple "Load more" button. No infinite scroll. 9 posts per page.

### Blog Post Page (`/blog/[slug]`)
- **Header** (dark) — Title, date, reading time, author
- **Content** (white, centered, max-width ~720px) — MDX rendered content. Clean typography, generous line height.
- **No sidebar.** No table of contents. Keep it simple.
- **Bottom** — Author bio card + "Read more" with 2-3 related posts (by recency, no ML)
- **CTA banner** (dark) — "Try Uply free" below the post

### MDX Frontmatter
```yaml
---
title: "Post title"
date: "2026-03-17"
excerpt: "Short description for cards and meta"
author: "Author Name"
image: "/images/blog/post-slug.jpg"  # optional
---
```

## Messaging

### Hero Copy

- **Headline:** "Your team doesn't have time for soft skills training. That's exactly the point."
- **Subheadline:** "Soft skills training that lives in Slack."
- **Primary CTA:** "Get started free"
- **Secondary CTA:** "See how it works"

### Messaging Pillars

1. **No extra time needed** — "It's already in Slack. 2 minutes a day. No new app, no blocked calendars."
2. **Skills that actually stick** — "Daily micro-lessons beat a yearly workshop. Small habits compound."
3. **Visibility for leadership** — "Weekly scores, leaderboards, and insights. Know who's growing."
4. **Built for startups** — "You're moving fast. Your team's soft skills shouldn't fall behind."

### Per-Page Focus

| Page | Primary message |
|------|----------------|
| Homepage | The problem (no time) → the solution (Slack) → how it works → proof → get started |
| Features | Deep dive: daily questions, scoring, leaderboard, topics covered |
| Pricing | Free tier + Pro (free during early access), feature comparison, FAQ |
| Blog | Thought leadership: soft skills in the AI age, cost of bad managers, etc. |
| Help Center | Self-service support — getting started, daily lessons, scoring, billing, privacy |
| Privacy Policy | Full GDPR-compliant privacy policy for ECOMMERCE RTM |

## Pricing Structure

### Free Tier
- Up to 5 users
- 1 topic
- Daily questions
- Basic weekly summary
- **CTA:** "Get started"

### Pro Tier (free during early access)
- Unlimited users
- All topics
- Leaderboards
- Analytics dashboard
- Priority support
- **Normal price:** $1/user/month
- **Current price:** Free (early access)
- **CTA:** "Start free trial"

### Pricing Page Elements
- Feature comparison table (Free vs Pro)
- FAQ section (billing, cancellation, Slack permissions, data privacy)
- Social proof badge ("Join X+ teams")
- Highlighted: "Pro is free during early access"

## SEO Considerations

- Static generation (SSG) for all pages — fast load, crawlable
- Semantic HTML throughout
- Meta tags, Open Graph, Twitter cards per page
- Blog with MDX for organic content marketing
- Sitemap.xml + robots.txt
- Structured data (JSON-LD) for organization and product

## Out of Scope (for now)

- Headless CMS integration (markdown-first, add later)
- Authentication / user dashboard on the marketing site
- Internationalization (English only at launch)
- A/B testing infrastructure
- Analytics beyond basic (can add Plausible or similar later)
