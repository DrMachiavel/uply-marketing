# Uply Marketing Website

Marketing website for [Uply](https://uply.com) — soft skills training that lives in Slack.

## What is Uply?

Uply delivers daily micro-lessons to your team via Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills. Built for startups and scale-ups that don't have time for traditional training.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Static Site Generation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Blog:** MDX via next-mdx-remote
- **Deployment:** Replit

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── features/     # Features page
│   ├── pricing/      # Pricing page
│   ├── about/        # About page
│   ├── blog/         # Blog listing + [slug] posts
│   └── signup/       # Signup flow
├── components/
│   ├── ui/           # Buttons, cards, badges
│   ├── layout/       # Nav, Footer, Section wrappers
│   └── sections/     # Hero, Features, Pricing, Testimonials
├── content/
│   └── blog/         # MDX blog posts
└── lib/
    └── mdx.ts        # MDX utilities
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, social proof, how it works, features, testimonials, CTA |
| `/features` | Detailed feature breakdown and how it works |
| `/pricing` | Free vs Pro comparison (Pro free during early access) |
| `/about` | Team, mission, and story |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post (MDX) |
| `/signup` | Signup flow → Slack install |

## Brand

- **Primary color:** `#68ef3f` (bright lime green)
- **Dark background:** `#0a0f0a`
- **Light background:** `#ffffff` / `#f0fdf4`
- **Tone:** Warm, human, direct. No corporate jargon.
