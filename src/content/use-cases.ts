export interface UseCase {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  challenge: string;
  solution: string;
  steps: { title: string; description: string }[];
  results: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const useCases: UseCase[] = [
  {
    slug: "new-manager-training",
    name: "New Manager Training",
    title: "Training Newly Promoted Managers",
    description:
      "Stop the sink-or-swim approach to new managers. Uply delivers daily leadership scenarios in Slack so first-time managers build real skills from day one.",
    heroHeadline: "Stop throwing new managers into the deep end",
    heroCopy:
      "Most companies promote top performers into management roles and hope for the best. Uply gives newly promoted managers daily leadership practice in Slack -  so they build real skills, not just a new title.",
    challenge:
      "The sink-or-swim approach to management is one of the most expensive mistakes companies make. A top-performing engineer or salesperson gets promoted, and suddenly they're responsible for 1:1s, feedback, delegation, and team dynamics -  with zero formal training.\n\nThe result? New managers burn out, their teams disengage, and the company loses both a great IC and gains a struggling manager. Studies show that 60% of new managers fail within their first 24 months, and the primary reason is lack of soft skills development.",
    solution:
      "Uply turns management development from a one-time workshop into a daily habit. Each morning, new managers receive a scenario-based question in Slack that mirrors real situations: giving difficult feedback, handling a team conflict, delegating without micromanaging, or running a productive 1:1.\n\nBecause the practice is daily and embedded in Slack, managers build pattern recognition over time. They start seeing familiar situations in their real work and responding with practiced confidence instead of anxiety.",
    steps: [
      {
        title: "Add Uply to Slack",
        description:
          "Install in under 2 minutes. Select the leadership and feedback topics. Invite your new managers to the channel.",
      },
      {
        title: "Daily scenarios build skills",
        description:
          "Each morning, managers get a realistic leadership scenario. They choose their approach, then see expert analysis of each option -  building judgment through repetition.",
      },
      {
        title: "Track growth over time",
        description:
          "Use the analytics dashboard to monitor skill development across feedback, delegation, communication, and leadership. Share progress reports with stakeholders.",
      },
    ],
    results: [
      { value: "94%", label: "weekly completion rate" },
      { value: "2 min", label: "daily time investment" },
      { value: "3 weeks", label: "to noticeable improvement" },
    ],
    faqs: [
      {
        question: "When should we start training new managers?",
        answer:
          "Ideally, before the promotion. Add high-potential ICs to Uply so they build leadership skills before they need them. If they're already promoted, start immediately -  every day without practice is a day of learning the hard way.",
      },
      {
        question: "Can we combine this with existing management training?",
        answer:
          "Absolutely. Uply works best as a complement to workshops and coaching. The daily practice reinforces concepts from other programs and builds habits that one-time events can't create.",
      },
      {
        question: "How do we measure if it's working?",
        answer:
          "Uply's analytics dashboard tracks skill progress by topic over time. You can also survey direct reports -  most teams see improvements in feedback quality and communication within the first month.",
      },
    ],
    relatedLinks: [
      { label: "For new managers", href: "/for/managers" },
      { label: "For engineering teams", href: "/for/engineering-teams" },
      { label: "Leadership development through daily practice", href: "/blog/leadership-development-daily-practice" },
      { label: "Features overview", href: "/features" },
      { label: "Lost Growth Calculator", href: "/tools/growth-calculator" },
    ],
  },
  {
    slug: "onboarding-soft-skills",
    name: "Onboarding Soft Skills",
    title: "Soft Skills During Employee Onboarding",
    description:
      "Add soft skills training to your onboarding process. New hires get daily Slack questions from day one -  building culture fit alongside technical ramp-up.",
    heroHeadline: "Onboarding that builds culture, not just competence",
    heroCopy:
      "Technical onboarding gets all the attention. But the skills that determine long-term success -  communication, collaboration, feedback -  are usually left to chance. Uply changes that.",
    challenge:
      "Most onboarding programs focus exclusively on technical skills: how to use the tools, understand the codebase, and navigate internal systems. The assumption is that new hires will 'figure out' the culture and communication norms on their own.\n\nBut cultural onboarding is where most failures happen. New hires who don't understand how to give feedback, collaborate async, or navigate team dynamics are 3x more likely to leave within the first year -  even if their technical skills are strong.",
    solution:
      "Add Uply to your onboarding flow and new hires start receiving daily soft skills questions from day one. The scenarios introduce your communication standards, feedback culture, and collaboration expectations through practice, not presentations.\n\nBecause the whole team participates, new hires see how tenured employees think about communication and leadership. It's implicit cultural onboarding -  the kind that sticks because it's experienced, not explained.",
    steps: [
      {
        title: "Add new hires to the Uply channel",
        description:
          "When a new hire joins Slack, add them to the Uply channel. They'll start receiving daily questions immediately -  no separate setup needed.",
      },
      {
        title: "Learn culture through practice",
        description:
          "New hires see real scenarios about feedback, collaboration, and communication. Seeing how the team engages teaches culture faster than any handbook.",
      },
      {
        title: "Monitor onboarding progress",
        description:
          "Track new hire participation and skill development from the analytics dashboard. Identify early if someone needs additional support.",
      },
    ],
    results: [
      { value: "94%", label: "new hire participation" },
      { value: "Day 1", label: "skills training starts" },
      { value: "2 min", label: "daily time investment" },
    ],
    faqs: [
      {
        question: "Won't new hires feel overwhelmed?",
        answer:
          "No. Uply's questions take 2 minutes. They're a low-pressure way to start thinking about communication and culture -  much less overwhelming than a full-day orientation workshop.",
      },
      {
        question: "Can we customize topics for onboarding?",
        answer:
          "Yes. Start new hires on communication and collaboration topics to build cultural foundations, then expand to leadership and feedback as they settle in.",
      },
      {
        question: "Does it work for remote onboarding?",
        answer:
          "Especially well. Remote new hires miss the casual culture learning that happens in an office. Uply provides structured cultural touchpoints that don't require physical presence.",
      },
    ],
    relatedLinks: [
      { label: "For startups", href: "/for/startups" },
      { label: "For People Ops & HR", href: "/for/people-ops" },
      { label: "Employee engagement in Slack", href: "/blog/employee-engagement-slack" },
      { label: "Features overview", href: "/features" },
      { label: "Turnover Cost Calculator", href: "/tools/turnover-calculator" },
    ],
  },
  {
    slug: "async-team-training",
    name: "Async Team Training",
    title: "Asynchronous Team Training",
    description:
      "Train distributed teams across time zones without scheduling a single meeting. Uply delivers daily Slack lessons that everyone completes on their own time.",
    heroHeadline: "Team training without a single meeting",
    heroCopy:
      "Time zones, meeting fatigue, and packed calendars make synchronous training impossible for distributed teams. Uply delivers async soft skills practice that everyone completes on their own schedule.",
    challenge:
      "Distributed teams face a training paradox: they need communication skills more than co-located teams, but every training format assumes everyone is available at the same time. Scheduling a workshop across 4 time zones means someone is always training at midnight.\n\nThe result is that distributed teams either skip soft skills training entirely or force people into inconvenient synchronous sessions that breed resentment instead of growth. Meanwhile, the communication gaps that remote work creates go unaddressed.",
    solution:
      "Uply solves the async training problem by delivering one question per day in Slack. Each person answers whenever it fits their schedule -  during morning coffee in London, after lunch in New York, or between calls in Singapore.\n\nThe weekly leaderboard creates a shared experience without requiring simultaneous participation. Teams feel connected through the shared challenge, even though they never trained in the same room -  or even the same time zone.",
    steps: [
      {
        title: "Install Uply in your Slack workspace",
        description:
          "One installation covers your entire workspace. Create channels for different teams or use one shared channel -  whatever fits your org structure.",
      },
      {
        title: "Everyone participates on their own time",
        description:
          "Questions appear in Slack daily. Each person answers when it's convenient -  no coordination needed, no scheduling conflicts, no awkward time zone compromises.",
      },
      {
        title: "Leaderboard creates shared momentum",
        description:
          "The weekly leaderboard gives distributed teams a shared ritual. Competition drives engagement while creating a sense of team identity across locations.",
      },
    ],
    results: [
      { value: "94%", label: "completion across time zones" },
      { value: "0", label: "meetings required" },
      { value: "2 min", label: "daily per person" },
    ],
    faqs: [
      {
        question: "How does it handle time zones?",
        answer:
          "Questions are posted daily and remain available all day. Each person answers on their own schedule. There's no window that closes -  as long as you answer that day, you're good.",
      },
      {
        question: "Can different teams focus on different topics?",
        answer:
          "Yes. Create separate Uply channels for different teams, each with their own topic focus. Engineering might focus on feedback while sales focuses on communication.",
      },
      {
        question: "What if someone misses a day?",
        answer:
          "No problem. The leaderboard tracks weekly participation, not daily perfection. Missing a day doesn't break the habit -  the question will be there tomorrow.",
      },
    ],
    relatedLinks: [
      { label: "For remote teams", href: "/for/remote-teams" },
      { label: "For People Ops & HR", href: "/for/people-ops" },
      { label: "Best Slack apps for team training", href: "/blog/best-slack-apps-for-team-training" },
      { label: "Features overview", href: "/features" },
      { label: "Lost Growth Calculator", href: "/tools/growth-calculator" },
    ],
  },
  {
    slug: "team-communication",
    name: "Team Communication",
    title: "Improving Team Communication",
    description:
      "Fix misunderstandings, poor feedback, and conflict avoidance. Daily Slack scenarios build real communication skills through practice, not theory.",
    heroHeadline: "Turn communication from a problem into a strength",
    heroCopy:
      "Misunderstandings, avoided conflicts, and poor feedback don't fix themselves. Uply builds real communication skills through daily practice -  scenario by scenario, day by day.",
    challenge:
      "Poor team communication is the silent killer of productivity. Misunderstandings lead to rework. Avoided conflicts become toxic. Feedback delivered poorly -  or not at all -  lets problems compound until they become crises.\n\nMost teams know they have communication problems but don't know how to fix them. Sending everyone to a workshop creates temporary awareness that fades within weeks. Reading books gives theory without practice. And 'just talk more' isn't actionable advice.",
    solution:
      "Uply takes communication from abstract concept to daily practice. Each morning, your team faces a realistic communication scenario: a misunderstood Slack message, a tense code review, a skipped difficult conversation, or a poorly delivered piece of feedback.\n\nBy practicing in low-stakes scenarios daily, team members build the pattern recognition and confidence to handle real communication challenges. Over weeks, 'I should give that feedback' becomes 'here's how I'll give that feedback' -  and then they actually do it.",
    steps: [
      {
        title: "Choose communication topics",
        description:
          "Select from feedback, conflict resolution, active listening, and collaboration. Pick the areas where your team needs the most growth.",
      },
      {
        title: "Practice daily in Slack",
        description:
          "Each morning, the team gets a scenario. They choose how they'd respond, then see expert analysis. It takes 2 minutes and sparks real conversations.",
      },
      {
        title: "Watch communication improve",
        description:
          "Track skill progress on the dashboard. More importantly, watch how your team's real conversations change -  better feedback, fewer misunderstandings, less conflict avoidance.",
      },
    ],
    results: [
      { value: "94%", label: "weekly participation" },
      { value: "2 min", label: "daily practice" },
      { value: "4x", label: "more engaging than LMS" },
    ],
    faqs: [
      {
        question: "How do you train communication through a Slack bot?",
        answer:
          "Through scenario-based practice. Each question presents a realistic communication situation with multiple response options. The expert analysis explains why certain approaches work better -  building judgment through repetition.",
      },
      {
        question: "Can it help with specific communication problems?",
        answer:
          "Yes. If your team struggles with feedback, focus on feedback topics. If conflict avoidance is the issue, prioritize conflict resolution scenarios. You can adjust topics as your team's needs change.",
      },
      {
        question: "How is this different from a communication workshop?",
        answer:
          "Workshops provide theory and temporary awareness. Uply provides daily practice that builds lasting habits. Think gym membership vs. a single fitness class -  consistent practice creates real change.",
      },
    ],
    relatedLinks: [
      { label: "For remote teams", href: "/for/remote-teams" },
      { label: "For engineering teams", href: "/for/engineering-teams" },
      { label: "How to improve team communication", href: "/blog/how-to-improve-team-communication" },
      { label: "Features overview", href: "/features" },
      { label: "Turnover Cost Calculator", href: "/tools/turnover-calculator" },
    ],
  },
  {
    slug: "compliance-training",
    name: "Compliance Training",
    title: "Compliance Training in Slack",
    description:
      "Replace boring compliance training with daily Slack micro-lessons. Higher completion rates, better retention, and trackable results your compliance team will love.",
    heroHeadline: "Compliance training people actually complete",
    heroCopy:
      "Nobody likes hour-long compliance videos with quizzes. Uply delivers compliance-related soft skills as daily 2-minute scenarios in Slack -  with completion rates that make compliance officers smile.",
    challenge:
      "Compliance training has an engagement crisis. Companies mandate hour-long courses with multi-choice quizzes, employees click through as fast as possible, and nobody retains anything. Completion rates for traditional compliance training hover around 20-30%, and the knowledge retained after 30 days is even lower.\n\nThe irony is that compliance topics -  respectful communication, inclusive behavior, ethical decision-making -  are genuinely important skills. But the delivery format ensures people treat them as box-checking exercises rather than meaningful development.",
    solution:
      "Uply reimagines compliance content as daily micro-scenarios. Instead of a 60-minute video about respectful workplace communication, your team gets one short scenario each day: how to respond to an inappropriate comment, how to give inclusive feedback, how to escalate an ethical concern.\n\nThe daily format means knowledge builds gradually and sticks. The Slack delivery means completion rates skyrocket. And the analytics dashboard gives your compliance team the tracking data they need -  participation rates, completion records, and skill progress over time.",
    steps: [
      {
        title: "Select compliance-relevant topics",
        description:
          "Choose from communication, feedback, collaboration, and conflict resolution topics. Map them to your compliance requirements.",
      },
      {
        title: "Daily micro-doses replace annual marathons",
        description:
          "Instead of yearly compliance training, your team builds skills daily. 2 minutes in Slack replaces hours in a training room -  with better retention.",
      },
      {
        title: "Track and report completion",
        description:
          "The analytics dashboard provides the compliance data you need: who participated, when, and how their skills are progressing. Export reports for audits.",
      },
    ],
    results: [
      { value: "94%", label: "completion rate" },
      { value: "4x", label: "better than traditional compliance" },
      { value: "2 min", label: "daily vs. hours annually" },
    ],
    faqs: [
      {
        question: "Can Uply fully replace our compliance training program?",
        answer:
          "Uply can replace the soft skills portion of compliance training (communication, feedback, respectful behavior). For regulatory-specific training, you may still need specialized tools. Check with your compliance team for exact requirements.",
      },
      {
        question: "How do we track completion for compliance purposes?",
        answer:
          "Uply's analytics dashboard tracks participation at the individual level with timestamps. You can export completion data for compliance reporting and audits.",
      },
      {
        question: "Is the content customizable for our compliance needs?",
        answer:
          "Uply offers a growing library of soft skills topics that map to common compliance areas. While you can't create custom questions yet, the existing topics cover communication, feedback, conflict resolution, and collaboration -  key compliance skill areas.",
      },
    ],
    relatedLinks: [
      { label: "For People Ops & HR", href: "/for/people-ops" },
      { label: "For startups", href: "/for/startups" },
      { label: "Compliance training for startups", href: "/blog/compliance-training-startups" },
      { label: "Features overview", href: "/features" },
      { label: "Lost Growth Calculator", href: "/tools/growth-calculator" },
    ],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}

export function getAllUseCaseSlugs(): string[] {
  return useCases.map((uc) => uc.slug);
}
