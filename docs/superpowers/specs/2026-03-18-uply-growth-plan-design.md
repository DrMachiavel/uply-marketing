# Uply Growth Plan — Design Spec

**Date:** 2026-03-18
**Status:** Draft
**Authors:** Elliot + Co-founder

## Context

Uply is a Slack-native soft skills training platform (daily 2-min micro-lessons, weekly leaderboards, gamification). The product is built and functional behind a private install link but has zero traction. The marketing site (uply.work) exists with 2 published blog posts (+ 7 drafted), 2 calculator tools, and solid SEO foundations.

### Definitions

- **Active team**: A workspace where at least 3 users answered a question in the past 7 days.
- **Installed team**: A workspace that has completed the Slack app install flow.

### Constraints

| Constraint | Value |
|---|---|
| Budget | $100-500/month |
| Team | 2 co-founders, ~10 hrs/week combined (~5 hrs/person), AI-augmented |
| Product state | Built, private install link (not on Slack App Directory yet) |
| Target market | English-speaking startups globally (including French tech ecosystem) |
| Current traction | Zero — pre-launch |
| 3-month goal | Repeatable growth engine → 30 installed teams, 20+ active teams |

### Strategic Approach

**"The Trojan Horse"** — Product-led viral growth as the foundation, seeded by targeted outreach and a ProductHunt launch, amplified by SEO content and lightweight social presence.

The core insight: Uply lives in Slack, which means every workspace that installs it becomes a distribution node. The strategy exploits this by making product usage visible to non-users and incentivizing cross-workspace referrals.

### Competitive Differentiation

Why Uply vs. alternatives (Bunch, 15Five, generic Slack bots):

- **Zero friction**: Lives in Slack — no new app to install, no new login, no new tab. Competitors require a separate platform.
- **2 minutes/day**: Competitors demand 15-30 min sessions. Startup teams won't do that.
- **Gamification native**: Leaderboards and streaks built-in, not bolted on. Competition drives engagement.
- **Price**: $1/user/month is 10-50x cheaper than alternatives. Free tier lets teams try before they buy.

---

## 1. In-Product Viral Loop (The Engine)

### 1.1 Slack Channel Visibility

Every Uply interaction should be visible to non-users in shared Slack channels:

- **Daily answer teasers**: When a user answers a question, Uply posts a summary to the team channel: *"Sarah just crushed today's leadership scenario. 3-day streak. Think you'd handle it differently? [Try it]"*
- **Weekly leaderboard broadcast**: Every Monday, post the team leaderboard to the chosen channel. Non-users see names, scores, streaks — FOMO drives adoption.
- **Milestone celebrations**: "Alex just completed 30 days of communication training" — posted publicly. Social proof + curiosity.

Every post includes a **one-click install link**. Friction from "curious" to "installed" must be < 10 seconds.

### 1.2 Cross-Company Viral Loop

**Phase 1 (Months 1-2) — Simple sharing mechanics:**
- **Shareable team badges**: "Our team scored 92% on leadership this month" — generates a branded image card for LinkedIn/Twitter. Free marketing from proud managers. Marketing site hosts a `/badge/[team-id]` page with the badge image and a CTA to install.

**Phase 2 (Month 3+, only if Phase 1 shows traction) — Complex mechanics:**
- **"Challenge another team" feature**: Deferred. High product effort, unvalidated. Only build if simpler viral mechanics prove engagement.
- **Public leaderboard page** (`/leaderboard`): Deferred to Phase 2. Requires product API.

### 1.3 Referral Program

**Note: This feature has both marketing-site and product-side components.** See Section 6 for the dependency breakdown.

**Phase 1 (marketing site only, Month 1):**
- **Referral landing page** (`/refer`): Explains the program, generates shareable referral links using UTM parameters. No backend tracking needed — attribution via UTM query params on the install link.
- **Incentive**: "Invite a team, get Pro free during early access extended by 3 months after launch."

**Phase 2 (product-side, Month 2-3):**
- **"Invite a team, unlock a topic"**: Free plan gets 1 topic. Each referred team that installs = 1 more topic unlocked (up to 3 bonus). Requires product backend work.
- **Referral tracking dashboard**: Admins see who they've referred and what they've unlocked. Requires product API.
- **Pro upgrade reward**: Refer 5 teams → Pro free for 3 months post-launch.

---

## 2. Launch & Seed Strategy (The Kindling)

Target: **10-15 teams in the first 4 weeks** from direct outreach + ProductHunt. The remaining 15-20 come from compounding viral + SEO over months 2-3.

### 2.1 Slack App Directory Submission (P0)

Submit to the Slack App Directory in Week 1. Even if approval takes 4-6 weeks, the application should start immediately. The directory provides:
- Organic discovery by millions of Slack admins
- Credibility and trust signal
- Proper install flow

Use the direct private install link in parallel until approved.

### 2.2 ProductHunt Launch

- Dedicated launch page on uply.work
- Tagline: *"Your team's soft skills gym — 2 minutes a day in Slack"*
- PH-exclusive deal: **"First 50 teams get Pro free for 12 months after early access ends"** (capped at 50 teams, time-limited to 12 months, applies to workspaces of up to 25 users)
- Launch on a Tuesday, coordinate upvotes from personal networks and French tech community
- Prepare 2 weeks in advance (assets, copy, community warm-up)

### 2.3 Targeted Founder Outreach

Surgical, not spray-and-pray. 50-100 targets over 6 weeks.

- **Target profile**: Seed to Series B startups, 10-100 employees, remote-first or hybrid, heavy Slack users
- **Channels**: LinkedIn DMs to founders and Head of People, Twitter/X replies to founders discussing team culture
- **Message framework**: Lead with pain ("Your managers are learning leadership by trial and error"), offer the free tool, emphasize 2 minutes/day in Slack
- **Volume**: 10-15 personalized messages/week, split between both founders. AI drafts, humans personalize.

### 2.4 Startup Ecosystem Partnerships

- **Accelerator perks**: Apply to be a perk partner at YC, Techstars, Station F, eFounders. "Free Pro for all portfolio companies."
- **Slack communities**: Join 5-10 startup Slack communities (Lenny's, On Deck, Indie Hackers). Participate genuinely, mention Uply when relevant.
- **Startup tool directories**: Free listings on StackShare, SaaSHub, AlternativeTo, G2.

---

## 3. Inbound / SEO Engine (The Compounding Channel)

### 3.1 Content Strategy

**Pillar pages** (high-intent, high-volume):
- `/guides/soft-skills-training-for-startups` — comprehensive guide, 3000+ words
- `/guides/slack-team-training` — "how to train your team without leaving Slack"
- `/guides/microlearning-workplace` — the science behind daily micro-lessons

**Blog cadence**: 1 post/week (AI-drafted, human-edited). Target long-tail keywords:
- "how to develop leadership skills in startup teams"
- "slack apps for employee development"
- "daily team training exercises"
- "soft skills for remote teams"

**New interactive tools** (high conversion, viral potential):
- `/tools/team-skills-assessment` — "Rate your team's soft skills in 2 minutes." Generates a shareable report card + recommends Uply. Lead magnet AND viral asset.
- `/tools/management-readiness-quiz` — "Are your first-time managers ready?" Targets the exact pain point. (Month 2)

### 3.2 Email Capture & Nurture

**Email tool**: Loops.so (free up to 1,000 contacts, built for SaaS, good Slack/startup ecosystem fit). Alternative: Resend + React Email if we want more control.

**Capture points:**
- Calculator results: gate the detailed PDF report behind email
- Team skills assessment: gate the full report behind email
- Blog sidebar/footer: "Get weekly soft skills tips" newsletter signup

**Nurture sequence** (automated, 4 emails over 10 days):
1. **Immediate**: Your assessment results + 3 actionable tips based on weakest areas
2. **Day 3**: "How [startup name] improved team communication in 2 min/day" (case study or testimonial)
3. **Day 7**: "The cost of ignoring soft skills" — link to Growth Calculator with their team size pre-filled
4. **Day 10**: Direct CTA — "Install Uply in Slack (free, 30 seconds)" with install link

**Setup time estimate**: ~4-5 hours (account setup, email templates, automation flow).

### 3.3 SEO Technical Improvements

- Add Open Graph images to all blog posts (AI-generated, branded)
- Internal linking: every blog post links to a calculator, every calculator links to install
- Commit and publish the 7 drafted blog posts

---

## 4. Lightweight Content Marketing (The Amplifier)

### 4.1 LinkedIn Presence

- **2 posts/week from one founder** to start (scale to both founders once workflow is established)
- Short, opinionated takes on startup leadership and team dynamics
- Every 5th post mentions Uply naturally ("We built X because we kept seeing Y")
- Repurpose blog content into LinkedIn posts — AI does 90%

### 4.2 Strategic Paid Experiments ($100-300/mo)

- Sponsor 1-2 newsletter placements (TLDR Founders, The Hustle) — test cheapest first
- LinkedIn ads targeting Head of People / VP Engineering at 10-200 person companies — small budget, test messaging
- Retarget calculator users with "Install Uply free" ads (cheap, high-intent)

---

## 5. Growth Flywheel

```
┌─────────────────────────────────────────────────────────┐
│                    GROWTH FLYWHEEL                       │
│                                                         │
│  Outreach/PH/SEO → Team installs Uply                  │
│       │                                                 │
│       v                                                 │
│  Users answer daily questions in Slack                  │
│       │                                                 │
│       v                                                 │
│  Leaderboard + celebrations posted in channels          │
│       │                                                 │
│       ├──> Non-users in same workspace see it → Install │
│       │                                                 │
│       ├──> Share badge on LinkedIn → Awareness          │
│       │                                                 │
│       └──> Refer a team → Unlock topics → More referrals│
│                                                         │
│  Calculators/blog → Email capture → Nurture → Install   │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Deliverables & Dependencies

### Marketing Site Deliverables

| Page/Feature | Purpose | Priority | Est. Hours |
|---|---|---|---|
| Email capture on calculator results | Convert tool users to leads | P0 | 3-4h |
| `/refer` — Referral landing page (UTM-based) | Explain referral program, shareable link | P0 | 3-4h |
| `/launch` — ProductHunt launch page | Dedicated landing for PH traffic | P0 | 4-5h |
| `/tools/team-skills-assessment` — Interactive quiz | Lead magnet + viral sharing | P1 | 8-10h |
| Email nurture sequence (Loops.so) | Convert email captures to installs | P1 | 4-5h |
| `/guides/soft-skills-training-for-startups` | SEO pillar page | P1 | 4-5h |
| `/tools/management-readiness-quiz` | Second lead magnet | P2 | 6-8h |
| `/guides/slack-team-training` | SEO pillar page | P2 | 4-5h |
| OG images for blog posts | Better social sharing | P2 | 2-3h |
| Shareable team badge pages | Viral sharing from in-product | P2 | 4-5h |

**Total P0**: ~10-13 hours | **Total P1**: ~16-20 hours | **Total P2**: ~16-21 hours

### Product-Side Dependencies

These features require changes to the Slack app backend, **not** the marketing site:

| Feature | Dependency | Phase |
|---|---|---|
| Slack channel visibility (1.1) | Slack app posts to channels on user actions | Phase 1 (Month 1) — critical for viral loop |
| Referral tracking backend (1.3) | Track installs by UTM/referral code, unlock topics | Phase 2 (Month 2-3) |
| Shareable badge data API | Endpoint to fetch team scores for badge generation | Phase 2 (Month 2-3) |
| Challenge another team (1.2) | Full feature: invitations, cross-workspace scoring | Phase 3 (Month 3+, only if validated) |
| Public leaderboard API | Endpoint for cross-company rankings | Phase 3 (Month 3+, only if validated) |

---

## 7. 90-Day Execution Timeline

### Weeks 1-3: Build the engine (~30 hrs)
- Submit Slack App Directory application (1h)
- Add email capture to existing calculators (3-4h)
- Build referral landing page with UTM links (3-4h)
- Build ProductHunt launch page (4-5h)
- Set up Loops.so + email nurture sequence (4-5h)
- Publish the 7 drafted blog posts (2h)
- Prepare PH assets (screenshots, copy, GIF) (3-4h)
- **Product side**: Ensure Slack channel visibility posts are working (Sections 1.1)

### Week 4: Launch (~10 hrs)
- Launch on ProductHunt
- Begin targeted founder outreach (10-15 messages/week)
- Apply to 3 accelerator perk programs
- Join 5 startup Slack communities

### Weeks 5-8: Amplify (~40 hrs)
- Start LinkedIn posting (2x/week from one founder)
- Publish 1 blog post/week (AI-drafted, human-edited)
- Build team skills assessment quiz (8-10h)
- Test 1 newsletter sponsorship
- Continue outreach cadence
- **Product side**: Begin referral tracking backend

### Weeks 9-12: Optimize (~40 hrs)
- Measure: which channel produces the most installs? Double down, kill the rest.
- Build management readiness quiz (6-8h)
- Write first pillar guide page (4-5h)
- Implement shareable team badges (4-5h)
- Test LinkedIn ads with small budget ($100-200)
- **Product side**: Ship referral tracking, start badge API

---

## 8. Success Metrics

### Acquisition Metrics

| Metric | Target (3 months) | How to measure |
|---|---|---|
| Teams installed | 30 | Slack app installs |
| Email captures | 200+ | Loops.so list size |
| Calculator/quiz completions | 500+ | Analytics events |
| Blog traffic | 2000+ visits/month | Analytics |

### Activation & Retention Metrics

| Metric | Target (3 months) | How to measure |
|---|---|---|
| Active teams (3+ users answering/week) | 20+ | Product analytics |
| Teams completing Week 1 | 25+ (80%+ of installs) | Product analytics |
| 30-day retention | 50%+ of installed teams still active | Product analytics |
| Avg questions answered/user/week | 3+ (of 5 weekdays) | Product analytics |

### Viral Metrics

| Metric | Target (3 months) | How to measure |
|---|---|---|
| Referral rate | 20% of teams refer >= 1 other | UTM tracking / referral system |
| Viral coefficient | >0.3 | New installs from sharing / total installs |
| Badge shares | 10+ per month | Social tracking / UTM |

---

## 9. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Viral coefficient too low | Focus on manual outreach and SEO as primary channels; iterate on in-Slack messaging copy |
| ProductHunt launch fizzles | PH is one channel, not the whole strategy. Outreach continues regardless. |
| Slack App Directory rejection or delays | Use direct install link; fix rejection feedback and resubmit |
| Low email-to-install conversion | A/B test nurture sequence subject lines and CTAs; try different value props in each email |
| Content doesn't rank (SEO too slow) | Content is a long-term play; short-term growth comes from outreach + PH + referrals |
| 10 hrs/week insufficient for timeline | Prioritize ruthlessly: P0 first, defer P2. AI handles blog drafting, email copy, outreach templates |
| Low activation (installs but no engagement) | Improve onboarding flow in Slack app; send "getting started" DM; follow up personally with early teams |

---

## 10. Out of Scope (for now)

- "Challenge another team" cross-company feature (revisit in Month 3+ if simpler viral mechanics work)
- Public cross-company leaderboard (requires product API, deferred to Phase 2+)
- Paid acquisition at scale (wait for product-market fit signal)
- Enterprise sales motion
- Multi-platform support (Teams, Discord)
- Mobile app
- Conversion optimization / pricing experiments (focus on acquisition first)
