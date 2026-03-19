export interface GuideSection {
  heading: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  sections: GuideSection[];
  relatedLinks: { label: string; href: string }[];
}

const guides: Guide[] = [
  {
    slug: "complete-guide-soft-skills-training",
    title: "The Complete Guide to Soft Skills Training in 2026",
    description:
      "Everything you need to know about building a soft skills training program — from the science of learning to measuring ROI. A comprehensive resource for HR leaders and managers.",
    heroHeadline: "The Complete Guide to Soft Skills Training in 2026",
    heroCopy:
      "A comprehensive playbook for building soft skills training that actually works — backed by research, designed for modern teams, and built around the science of how people really learn.",
    sections: [
      {
        heading: "What are soft skills?",
        content:
          'Soft skills are the interpersonal, social, and emotional abilities that determine how effectively people work together. They include communication, leadership, empathy, conflict resolution, adaptability, critical thinking, and emotional intelligence — the fundamentally human capabilities that shape every interaction in the workplace.\n\nUnlike technical or "hard" skills, which are specific to a role or tool, soft skills are transferable across every job, industry, and career stage. A developer who communicates clearly, a designer who gives constructive feedback, a manager who listens actively — these skills compound over time and create outsized impact on team performance.\n\nThe term "soft" is somewhat misleading. There\'s nothing soft about navigating a difficult conversation with a direct report, mediating a conflict between team members, or building trust across a remote team. These are complex, learnable skills that require deliberate practice. For a deeper look at the definition and research, see our <a href="/glossary/soft-skills">glossary entry on soft skills</a>.',
      },
      {
        heading: "Why soft skills matter more than ever",
        content:
          'The rise of AI and automation has fundamentally shifted what makes employees valuable. As AI handles more analytical, technical, and repetitive tasks, the skills that remain uniquely human — empathy, creativity, judgment, communication — become the key differentiator for individuals and teams.\n\nResearch from Harvard, Stanford, and the Carnegie Foundation found that 85% of career success comes from well-developed soft skills. LinkedIn\'s 2024 Workplace Learning Report identified soft skills as the #1 priority for L&D leaders worldwide. And McKinsey estimates that demand for social-emotional skills will grow by 26% across all industries by 2030.\n\nThe data is clear: teams with strong soft skills outperform on every metric that matters — innovation speed, employee retention, customer satisfaction, and revenue growth. Yet most organizations still treat soft skills training as an afterthought, relying on annual workshops or one-off seminars that produce no lasting change.\n\nThe gap between the importance of soft skills and the effectiveness of current training methods represents one of the biggest opportunities in workplace development. For more on why this matters now, read our piece on <a href="/blog/soft-skills-ai-age">soft skills in the AI age</a>.',
      },
      {
        heading: "Traditional training vs microlearning",
        content:
          'Traditional soft skills training typically looks like this: a full-day workshop, an external facilitator, a conference room, and a binder full of slides. The event feels productive. Participants leave energized. And within a week, they\'ve forgotten 90% of what they learned.\n\nThis isn\'t a criticism of facilitators or content quality — it\'s a fundamental problem with how human memory works. Hermann Ebbinghaus demonstrated in 1885 that we forget approximately 70% of new information within 24 hours without reinforcement. A single intensive session, no matter how engaging, cannot overcome the <a href="/glossary/ebbinghaus-forgetting-curve">forgetting curve</a>.\n\n<a href="/glossary/microlearning">Microlearning</a> takes the opposite approach. Instead of concentrating training into rare, intensive events, it distributes learning across many small sessions — typically 2 to 10 minutes — delivered daily or several times per week. Research in the Journal of Applied Psychology found that microlearning is 17% more efficient than traditional training.\n\nThe advantages go beyond retention. Microlearning fits into a busy workday without requiring calendar blocks or travel. It enables consistent practice rather than sporadic exposure. And it creates a learning habit that compounds over months and years. For a detailed comparison, see our blog post on <a href="/blog/microlearning-vs-traditional-training">microlearning vs traditional training</a>.',
      },
      {
        heading: "The science: forgetting curve and spaced repetition",
        content:
          'Two scientific concepts should underpin every training program: the <a href="/glossary/ebbinghaus-forgetting-curve">forgetting curve</a> and <a href="/glossary/spaced-repetition">spaced repetition</a>.\n\nThe forgetting curve describes how quickly we lose newly learned information. Without any reinforcement, we forget roughly 70% within 24 hours and up to 90% within a week. This is why a single training event — no matter how well-designed — almost never produces lasting behavior change.\n\nSpaced repetition is the antidote. By reviewing material at gradually increasing intervals (1 day, 3 days, 7 days, 14 days, etc.), we exploit a cognitive phenomenon called the "spacing effect." Research by Cepeda et al. found that spaced repetition produces 200% better long-term retention compared to massed practice.\n\nFor soft skills training, this means replacing annual workshops with daily micro-sessions. Each session doesn\'t need to be long — 2 minutes is enough to engage with a scenario, reflect on a concept, or practice a skill. What matters is consistency. A team that practices soft skills for 2 minutes every day for 6 months will develop dramatically stronger capabilities than a team that attends a 2-day workshop once a year.\n\nThe best training programs automate the spacing so learners don\'t have to think about scheduling — the learning comes to them, at the right intervals, in the tools they already use.',
      },
      {
        heading: "Key soft skills every team needs",
        content:
          'While there are dozens of soft skills, a few categories are consistently linked to team performance and organizational success:\n\n<strong>Communication</strong> — The foundation of everything. Clear, empathetic communication reduces misunderstandings, builds trust, and accelerates decision-making. This includes active listening, giving and receiving feedback, written communication, and presentation skills. See our <a href="/skills/communication">communication skills training</a>.\n\n<strong>Leadership</strong> — Not just for managers. Leadership skills include influence, coaching, delegation, and the ability to motivate others. Modern leadership emphasizes <a href="/glossary/servant-leadership">servant leadership</a> — leading by supporting rather than directing. Explore our <a href="/skills/leadership">leadership skills training</a>.\n\n<strong>Emotional intelligence</strong> — The ability to recognize, understand, and manage your own emotions and those of others. High EQ is strongly correlated with effective leadership, better conflict resolution, and stronger relationships. See our <a href="/skills/emotional-intelligence">emotional intelligence training</a>.\n\n<strong>Collaboration</strong> — Working effectively across teams, roles, and time zones. This includes conflict resolution, negotiation, building consensus, and creating <a href="/glossary/psychological-safety">psychological safety</a>.\n\n<strong>Adaptability</strong> — Thriving in ambiguity, embracing change, and maintaining a <a href="/glossary/growth-mindset">growth mindset</a>. In fast-moving organizations, adaptability is often more valuable than expertise.',
      },
      {
        heading: "How to choose a training platform",
        content:
          'Not all training platforms are created equal. When evaluating soft skills training solutions, consider these factors:\n\n<strong>Delivery method</strong> — Where does the training happen? Platforms that integrate with existing tools (Slack, Teams, email) see dramatically higher engagement than standalone apps that require separate logins and context-switching.\n\n<strong>Time commitment</strong> — How much time does each session require? Solutions that demand 30-60 minutes per session will struggle with adoption. The sweet spot for daily training is 2-5 minutes.\n\n<strong>Content quality</strong> — Is the content scenario-based and practical, or theoretical and abstract? The best soft skills training uses realistic workplace situations that people actually encounter.\n\n<strong>Measurement</strong> — Can you track participation, progress, and impact? Without data, you can\'t demonstrate ROI or identify where teams need more support.\n\n<strong>Science-backed methodology</strong> — Does the platform use spaced repetition, microlearning, and other evidence-based approaches? Or is it just traditional content delivered digitally?\n\n<strong>Scalability</strong> — Can it grow with your team? The platform should work for 5 people or 500 without requiring proportionally more admin effort.\n\nWe\'ve put together detailed comparisons to help you evaluate your options — check our <a href="/compare">comparison pages</a> for side-by-side breakdowns.',
      },
      {
        heading: "Measuring soft skills ROI",
        content:
          'One of the biggest challenges in soft skills training is proving ROI. Unlike sales training (where you can track revenue) or technical training (where you can measure certifications), soft skills impact is often perceived as intangible.\n\nBut it doesn\'t have to be. Here are concrete metrics to track:\n\n<strong>Leading indicators</strong> — Participation rates, session completion, engagement scores, and consistency of practice. These tell you whether the training is actually being used.\n\n<strong>Behavioral indicators</strong> — 360-degree feedback scores, manager assessments, peer review quality, and meeting effectiveness ratings. These show whether behaviors are actually changing.\n\n<strong>Business outcomes</strong> — Employee retention rates, internal promotion rates, team satisfaction scores (eNPS), time-to-resolution for conflicts, and cross-functional collaboration metrics. These connect soft skills to business impact.\n\nThe key is establishing baselines before training begins, then measuring at regular intervals. A 90-day check-in can show early momentum; 6-month and 12-month reviews demonstrate sustained impact.\n\nTo estimate the potential ROI for your team, try our <a href="/tools/growth-calculator">growth calculator</a> — it models the impact of consistent soft skills training based on your team size and current metrics.',
      },
      {
        heading: "Getting started with Uply",
        content:
          'Uply makes soft skills training effortless by delivering it where your team already works — Slack.\n\nHere\'s how it works: each day, your team members receive a short question in Slack — a realistic workplace scenario that takes about 2 minutes to complete. Topics span communication, leadership, emotional intelligence, collaboration, and more. Weekly leaderboards add friendly competition, and managers get a dashboard to track team participation and growth.\n\nGetting started takes about 5 minutes:\n\n<strong>Step 1:</strong> Install the Uply Slack app — follow our <a href="/help/getting-started/install-slack">installation guide</a> for a walkthrough.\n\n<strong>Step 2:</strong> Choose your training topics. Start with 1-2 skills that are most relevant to your team right now.\n\n<strong>Step 3:</strong> Invite your team. Uply works best when the whole team participates — it creates shared language and accountability.\n\n<strong>Step 4:</strong> Show up daily. Two minutes. That\'s all it takes.\n\nUply is free for teams up to 5 users with 1 topic. For larger teams or more topics, check our <a href="/pricing">pricing page</a> for details on the Pro plan.\n\nThe hardest part of building better soft skills isn\'t finding the right content — it\'s building the habit of consistent practice. Uply removes every barrier to that habit by bringing the training to you, in the tool you already use, in the time it takes to drink a coffee.',
      },
    ],
    relatedLinks: [
      { label: "Soft Skills Glossary Entry", href: "/glossary/soft-skills" },
      { label: "Microlearning Glossary Entry", href: "/glossary/microlearning" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "how-to-measure-soft-skills",
    title: "How to Measure Soft Skills: A Practical Framework",
    description:
      "A practical framework for measuring soft skills development — from leading indicators to business outcomes. Learn which metrics matter and how to track them.",
    heroHeadline: "How to Measure Soft Skills: A Practical Framework",
    heroCopy:
      "Soft skills matter, but how do you prove it? This guide provides a concrete framework for measuring what many consider unmeasurable — with metrics, tools, and a step-by-step approach.",
    sections: [
      {
        heading: "Why measuring soft skills is hard",
        content:
          "Soft skills are notoriously difficult to measure, and for good reason. Unlike technical skills — where you can administer a certification exam or track output metrics — soft skills manifest in complex, context-dependent ways. A person's communication skill isn't a single number; it varies by audience, medium, emotional state, and subject matter.\n\nTraditional measurement approaches fail for several reasons. Self-assessments are unreliable because people are poor judges of their own interpersonal abilities — the Dunning-Kruger effect is especially pronounced in soft skills. One-time evaluations capture a snapshot rather than a trajectory. And purely qualitative feedback (\"she's a good communicator\") lacks the specificity needed to drive improvement.\n\nBut the difficulty of measurement doesn't excuse the absence of it. Organizations spend billions annually on training programs with no way to determine whether they work. The result is a cycle of expensive interventions, vague satisfaction surveys, and no evidence of lasting impact.\n\nThe solution isn't to find a single perfect metric — it's to build a framework that combines multiple signals across different time horizons. Leading indicators tell you if people are engaged. Behavioral indicators tell you if habits are changing. Business outcomes tell you if it matters. Together, they paint a picture that no single metric could provide.",
      },
      {
        heading: "Leading indicators: participation, consistency, and engagement",
        content:
          "Leading indicators are the earliest signals that a training program is working. They don't prove behavior change on their own, but without them, nothing else is possible. If people aren't participating consistently, no amount of great content will produce results.\n\nThe metrics to track:\n\n<strong>Participation rate</strong> — What percentage of invited team members are actively engaging with the training? A healthy program should see 70%+ weekly participation. Below 50% indicates a delivery or relevance problem.\n\n<strong>Consistency</strong> — How often do individuals participate? Daily or near-daily engagement produces dramatically better results than sporadic usage. Track streaks and weekly completion rates.\n\n<strong>Engagement quality</strong> — Are people giving thoughtful responses or clicking through as fast as possible? Response length, time spent, and the quality of open-ended answers all indicate genuine engagement versus compliance.\n\n<strong>Voluntary participation</strong> — Are team members participating because they're told to, or because they want to? High voluntary participation suggests intrinsic motivation, which correlates with better learning outcomes.\n\nThese metrics should be tracked weekly and reviewed monthly. Trends matter more than individual data points. A team that starts at 60% participation and grows to 85% over three months is showing exactly the kind of momentum that predicts long-term success.\n\nThe key insight: leading indicators are necessary but not sufficient. High participation with no behavioral change means your content isn't effective. Low participation with great content means your delivery isn't working.",
      },
      {
        heading: "Lagging indicators: 360 reviews, team health, and retention",
        content:
          "Lagging indicators measure outcomes — the actual changes in behavior and business results that training is supposed to produce. They take longer to appear (typically 3-6 months) but provide the strongest evidence that your investment is working.\n\n<strong>360-degree feedback scores</strong> — The most direct measurement of soft skills. Ask peers, reports, and managers to rate specific behaviors (not general traits). Compare scores before training, at 3 months, and at 6 months. Look for improvements in specific dimensions: \"gives constructive feedback,\" \"listens actively in meetings,\" \"handles disagreements productively.\"\n\n<strong>Team health scores</strong> — Regular team health checks (monthly or quarterly) capture the collective impact of improved soft skills. Track dimensions like psychological safety, communication clarity, conflict resolution effectiveness, and meeting quality. Tools like team retrospectives, pulse surveys, and eNPS all provide useful data.\n\n<strong>Employee retention</strong> — Teams with strong soft skills — especially management soft skills — see measurably lower turnover. Track voluntary attrition rates by team and compare against company baselines. A 10-20% improvement in retention can represent massive cost savings.\n\n<strong>Internal mobility and promotion rates</strong> — Are people growing into new roles? Higher internal promotion rates suggest that soft skills development is building leadership capacity within the organization.\n\n<strong>Conflict resolution metrics</strong> — Track the frequency and severity of interpersonal conflicts escalated to HR. Declining escalation rates often indicate that teams are handling disagreements more effectively on their own.",
      },
      {
        heading: "Building a measurement framework",
        content:
          "A practical measurement framework combines leading and lagging indicators into a coherent system. Here's a step-by-step approach:\n\n<strong>Step 1: Establish baselines (Week 0)</strong> — Before launching any training, measure your starting point. Run a 360-degree feedback cycle focused on the specific soft skills you're targeting. Conduct a team health survey. Document current retention rates, eNPS, and any other relevant business metrics.\n\n<strong>Step 2: Track leading indicators (Weeks 1-12)</strong> — Monitor participation, consistency, and engagement quality weekly. Share results with managers so they can encourage their teams. Flag low engagement early — it's much easier to course-correct in week 3 than week 12.\n\n<strong>Step 3: First behavioral check (Month 3)</strong> — Run a mini 360-degree review focused on the specific skills being trained. Compare against baselines. At this point, you're looking for early signals of change, not dramatic transformation. A 5-10% improvement in targeted behaviors at 3 months is a strong positive signal.\n\n<strong>Step 4: Full assessment (Month 6)</strong> — Repeat the full baseline measurement. Compare 360 scores, team health metrics, and business outcomes. At 6 months of consistent practice, you should see measurable improvements in both behavioral and business metrics.\n\n<strong>Step 5: Ongoing monitoring (Quarterly)</strong> — Soft skills development is ongoing, not a project with an end date. Continue tracking all metrics quarterly. Look for plateau effects (which indicate a need for content refresh) and regression (which indicates inconsistent practice).\n\nThe framework should be lightweight enough to sustain indefinitely. If measurement feels like a burden, simplify it. A few consistently tracked metrics are infinitely more valuable than a comprehensive dashboard nobody looks at.",
      },
      {
        heading: "Tools and metrics for tracking progress",
        content:
          'The right tools make measurement sustainable. Here are the categories to consider:\n\n<strong>Training platform analytics</strong> — Your training platform should provide participation, consistency, and engagement data out of the box. If it doesn\'t, that\'s a red flag. Look for platforms that offer team-level dashboards, individual progress tracking, and trend analysis.\n\n<strong>Survey tools</strong> — For 360-degree feedback and team health surveys, you need a simple, repeatable survey system. Tools like Culture Amp, Lattice, or even Google Forms work well. The key is consistency — use the same questions each cycle so you can track changes over time.\n\n<strong>HR analytics</strong> — Your HRIS should provide retention rates, internal mobility data, and other business metrics. If you can segment by team, you can compare teams that are actively training against those that aren\'t.\n\n<strong>ROI calculators</strong> — Translating soft skills improvements into dollar values helps make the case to leadership. Our <a href="/tools/growth-calculator">growth calculator</a> estimates the business impact of consistent soft skills training based on your team size. For retention-specific analysis, try our <a href="/tools/turnover-calculator">turnover cost calculator</a> — it quantifies what you\'re losing to preventable turnover.\n\n<strong>Qualitative feedback</strong> — Numbers tell part of the story. Regular check-ins with managers and team members capture the qualitative dimension: "My 1:1s are more productive since we started." "The team handles disagreements better." "I feel more confident giving feedback." These narratives bring the data to life and help identify specific areas of impact.',
      },
      {
        heading: "How Uply tracks progress",
        content:
          'Uply is designed with measurement built in from day one. Here\'s what you get:\n\n<strong>Participation dashboard</strong> — See who\'s engaging, how often, and how consistently. Track team-wide and individual participation rates over time. Identify team members who might need encouragement and celebrate those building strong streaks.\n\n<strong>Skill-level insights</strong> — Uply tracks performance across different skill categories (communication, leadership, emotional intelligence, collaboration). Over time, you can see which skills are strengthening and which need more focus.\n\n<strong>Weekly leaderboards</strong> — Gamification drives engagement. Weekly leaderboards create friendly competition and social accountability, which research shows increases participation rates by up to 40%.\n\n<strong>Team trends</strong> — Monthly reports show how your team\'s engagement and skill development are trending. These reports are designed to be shared with leadership to demonstrate training ROI.\n\n<strong>Export and integration</strong> — Raw data can be exported for integration with your broader HR analytics. Combine Uply\'s training data with your 360-degree feedback and retention metrics for a complete picture.\n\nThe philosophy behind Uply\'s measurement approach is simple: track what matters, make it visible, and keep it lightweight. We believe that consistent practice produces results, and that results should be provable — not assumed.\n\nReady to see what measurable soft skills training looks like? Explore our <a href="/features">features page</a> for a full overview of what Uply offers.',
      },
    ],
    relatedLinks: [
      { label: "Growth Calculator", href: "/tools/growth-calculator" },
      { label: "Turnover Cost Calculator", href: "/tools/turnover-calculator" },
      { label: "Features", href: "/features" },
      { label: "Complete Guide to Soft Skills Training", href: "/guides/complete-guide-soft-skills-training" },
    ],
  },
];

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | null {
  return guides.find((g) => g.slug === slug) ?? null;
}
