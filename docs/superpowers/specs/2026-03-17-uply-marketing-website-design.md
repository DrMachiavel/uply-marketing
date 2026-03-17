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
│   │   ├── about/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/page.tsx   # Individual post
│   │   └── signup/
│   ├── components/
│   │   ├── ui/           # Buttons, cards, badges
│   │   ├── layout/       # Nav, Footer, Section wrappers
│   │   └── sections/     # Hero, Features, Pricing, Testimonials
│   ├── content/
│   │   └── blog/         # MDX blog posts
│   └── lib/
│       └── mdx.ts        # MDX utilities
├── tailwind.config.ts    # Uply color palette + custom tokens
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
├── /about         Team + mission
├── /blog          Blog listing
├── /blog/[slug]   Individual blog posts (MDX)
└── /signup        Signup flow (links to Slack install)
```

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

- **Body:** Inter (clean, modern, excellent readability)
- **Style:** Clean, generous whitespace, no clutter

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
| About | Why we built this — founders who saw soft skills ignored at fast-growing startups |
| Blog | Thought leadership: soft skills in the AI age, cost of bad managers, etc. |

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
