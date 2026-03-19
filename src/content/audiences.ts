export interface Audience {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  painPoints: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  stat: { value: string; label: string };
  testimonial?: { quote: string; name: string; role: string };
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const audiences: Audience[] = [
  {
    slug: "startups",
    name: "Startups",
    title: "Soft Skills Training for Startups",
    description:
      "Free soft skills training that fits startup life. 2-minute daily lessons in Slack build leadership, communication, and culture -  no L&D budget needed.",
    heroHeadline: "Build culture from day one -  without an L&D budget",
    heroCopy:
      "Startups move fast, but culture can't be an afterthought. Uply delivers daily soft skills practice right in Slack -  free, two minutes a day, and zero meetings required.",
    painPoints: [
      {
        title: "No L&D budget",
        description:
          "Early-stage teams can't afford dedicated training programs. Leadership development gets pushed to 'someday' while bad habits become permanent.",
      },
      {
        title: "No time for training",
        description:
          "Everyone is shipping at full speed. Hour-long workshops and courses feel impossible when you're building a product with a skeleton crew.",
      },
      {
        title: "Culture matters but nothing trains it",
        description:
          "You know culture is your competitive advantage, but there's no structured way to build communication, feedback, and collaboration skills organically.",
      },
    ],
    solutions: [
      {
        title: "Free to get started",
        description:
          "Uply's free plan gives you daily soft skills training for up to 5 people. No credit card, no contracts -  just add to Slack and go.",
      },
      {
        title: "2 minutes a day, right in Slack",
        description:
          "One scenario-based question each morning. Your team answers between standups and code reviews -  no calendar blocks, no context switching.",
      },
      {
        title: "Culture building on autopilot",
        description:
          "Daily questions about feedback, leadership, and collaboration create shared vocabulary and habits. Culture grows organically through practice, not posters.",
      },
    ],
    stat: { value: "94%", label: "weekly completion rate" },
    testimonial: {
      quote:
        "We added Uply to Slack on a Monday and by Friday, the whole team was talking about their answers at lunch. It's become part of our culture.",
      name: "Alex R.",
      role: "CTO, Series A startup",
    },
    faqs: [
      {
        question: "Is Uply really free for startups?",
        answer:
          "Yes. The free plan includes up to 5 users and 1 skill topic -  perfect for early-stage teams. You can upgrade as you grow, but there's no pressure and no trial period.",
      },
      {
        question: "How much time does it take per day?",
        answer:
          "About 2 minutes. Each day, one question appears in Slack. Your team reads a scenario, picks an answer, and sees the explanation. That's it.",
      },
      {
        question: "Will my team actually use it?",
        answer:
          "Uply sees a 94% weekly completion rate because it's embedded in Slack where your team already works. No new app to open, no login to remember.",
      },
      {
        question: "Can I choose which skills to focus on?",
        answer:
          "Absolutely. Pick from topics like leadership, communication, feedback, and collaboration. You can change topics anytime as your team's needs evolve.",
      },
    ],
    relatedLinks: [
      { label: "Onboarding soft skills", href: "/use-cases/onboarding-soft-skills" },
      { label: "New manager training", href: "/use-cases/new-manager-training" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Why daily habits beat workshops", href: "/blog/daily-habits-beat-workshops" },
    ],
  },
  {
    slug: "remote-teams",
    name: "Remote Teams",
    title: "Soft Skills Training for Remote Teams",
    description:
      "Async soft skills training built for distributed teams. Daily Slack lessons bridge communication gaps and build connection -  no meetings required.",
    heroHeadline: "Close the communication gap in distributed teams",
    heroCopy:
      "Remote work is great for focus, but tough on communication. Uply delivers async soft skills practice in Slack -  daily touchpoints that bridge time zones and build real connection.",
    painPoints: [
      {
        title: "Communication gaps multiply remotely",
        description:
          "Without hallway conversations, misunderstandings fester. Tone gets lost in text, feedback gets avoided, and small issues become big problems.",
      },
      {
        title: "Isolation erodes team cohesion",
        description:
          "Remote teammates can go days without meaningful interaction. Trust and psychological safety suffer when people only talk in structured meetings.",
      },
      {
        title: "Async collaboration is a skill nobody teaches",
        description:
          "Writing clear messages, giving feedback in docs, and navigating conflict without face-to-face cues are real skills -  but traditional training ignores them.",
      },
    ],
    solutions: [
      {
        title: "Async delivery that respects time zones",
        description:
          "Questions arrive in Slack and each person answers on their own schedule. No forced synchronous meetings, no awkward 6 AM training calls.",
      },
      {
        title: "Daily touchpoints that create connection",
        description:
          "When the whole team answers the same question, it sparks conversations. People discover how teammates think -  even across continents.",
      },
      {
        title: "Leaderboards build shared experience",
        description:
          "Weekly leaderboards give distributed teams something to rally around. Friendly competition creates a sense of togetherness that remote work often lacks.",
      },
    ],
    stat: { value: "2 min", label: "daily time commitment" },
    testimonial: {
      quote:
        "Our team spans 4 time zones. Uply is the one thing everyone does together every day -  it's become our async watercooler.",
      name: "Maria S.",
      role: "VP of Engineering, distributed team",
    },
    faqs: [
      {
        question: "Does it work across time zones?",
        answer:
          "Yes. Questions are delivered in Slack and each person answers whenever it fits their schedule. There's no time limit within the day -  everyone participates async.",
      },
      {
        question: "How does it help with remote communication?",
        answer:
          "Uply's scenarios cover real remote work situations: giving feedback in writing, navigating async disagreements, building trust without face time, and more.",
      },
      {
        question: "Can I see how my distributed team is doing?",
        answer:
          "Yes. The analytics dashboard shows participation rates, skill progress, and engagement trends across your entire team -  regardless of where they sit.",
      },
    ],
    relatedLinks: [
      { label: "Async team training", href: "/use-cases/async-team-training" },
      { label: "Improving team communication", href: "/use-cases/team-communication" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Best Slack apps for team training", href: "/blog/best-slack-apps-for-team-training" },
    ],
  },
  {
    slug: "engineering-teams",
    name: "Engineering Teams",
    title: "Soft Skills for Engineering Teams",
    description:
      "Help engineers communicate better, give constructive code reviews, and transition to leadership. Daily Slack micro-lessons -  no meetings, no fluff.",
    heroHeadline: "Better code reviews start with better communication",
    heroCopy:
      "Engineering teams ship great code but often struggle with feedback, cross-team communication, and the IC-to-manager transition. Uply builds those skills daily in Slack -  where engineers already live.",
    painPoints: [
      {
        title: "The IC-to-manager gap",
        description:
          "Your best engineer gets promoted to lead and suddenly needs to give feedback, run 1:1s, and navigate team dynamics -  with zero training for any of it.",
      },
      {
        title: "Code review tone problems",
        description:
          "Terse, blunt, or passive-aggressive code reviews kill morale and slow teams down. Engineers know the technical side but not how to deliver feedback constructively.",
      },
      {
        title: "Cross-team communication friction",
        description:
          "Working with product, design, and other engineering teams requires communication skills that CS degrees don't teach and most engineers never practice.",
      },
    ],
    solutions: [
      {
        title: "Scenario-based, relevant to tech",
        description:
          "Uply's questions reference real engineering situations: code review conversations, sprint retro disagreements, cross-functional standups, and more.",
      },
      {
        title: "No meetings, no interruptions",
        description:
          "Engineers hate unnecessary meetings. Uply delivers one question in Slack each morning -  answer between PRs, not in a conference room.",
      },
      {
        title: "Leadership skills before the promotion",
        description:
          "Build feedback, delegation, and communication skills before engineers need them. When the promotion comes, they're ready.",
      },
    ],
    stat: { value: "2 min", label: "daily -  between PRs" },
    testimonial: {
      quote:
        "Our code review culture completely changed. Engineers started thinking about how they phrase feedback, not just what the feedback is.",
      name: "David K.",
      role: "Engineering Manager",
    },
    faqs: [
      {
        question: "Will engineers actually engage with soft skills training?",
        answer:
          "Yes. Uply's format -  short, scenario-based, in Slack -  resonates with engineers. It feels like a puzzle, not a lecture. We see 94% weekly completion rates.",
      },
      {
        question: "Are the scenarios relevant to engineering work?",
        answer:
          "Absolutely. Scenarios cover code review feedback, sprint planning disagreements, cross-team communication, 1:1 conversations, and other situations engineers face daily.",
      },
      {
        question: "Can we focus on specific skills like feedback or leadership?",
        answer:
          "Yes. Choose from topics like feedback, leadership, collaboration, and communication. Many engineering teams start with feedback to improve code review culture.",
      },
    ],
    relatedLinks: [
      { label: "New manager training", href: "/use-cases/new-manager-training" },
      { label: "Team communication", href: "/use-cases/team-communication" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Soft skills for engineering managers", href: "/blog/soft-skills-for-engineering-managers" },
    ],
  },
  {
    slug: "people-ops",
    name: "People Ops & HR",
    title: "Soft Skills Training for People Ops & HR",
    description:
      "Prove L&D ROI with 94% completion rates. Uply delivers measurable soft skills growth through daily Slack micro-lessons your people will actually complete.",
    heroHeadline: "L&D that people actually complete -  and you can prove it",
    heroCopy:
      "Traditional training has a completion problem. Uply delivers daily micro-lessons in Slack with 94% weekly completion rates and analytics that show measurable skill growth.",
    painPoints: [
      {
        title: "Proving L&D ROI is nearly impossible",
        description:
          "Leadership asks for metrics, but traditional training gives you attendance sheets and satisfaction surveys. Real skill development is invisible.",
      },
      {
        title: "Low engagement with existing training",
        description:
          "You've tried LMS platforms, workshops, and courses. Completion rates hover around 20%. People see training as a chore, not a benefit.",
      },
      {
        title: "Compliance needs without the boring format",
        description:
          "Some soft skills training is required, but the traditional format -  hour-long videos with quizzes -  ensures nobody retains anything.",
      },
    ],
    solutions: [
      {
        title: "Analytics dashboard with real metrics",
        description:
          "Track participation rates, skill growth by topic, and engagement trends. Share reports with leadership that show real progress, not just attendance.",
      },
      {
        title: "94% weekly completion rate",
        description:
          "When training is 2 minutes in Slack, people actually do it. Uply's completion rate is 4x higher than traditional LMS platforms.",
      },
      {
        title: "Measurable growth over time",
        description:
          "Watch skill scores improve week over week. Identify team strengths and gaps. Build a data-driven case for continued L&D investment.",
      },
    ],
    stat: { value: "4x", label: "higher completion than LMS" },
    testimonial: {
      quote:
        "For the first time, I can show our CEO actual data on soft skills development. Participation is through the roof and the dashboard makes reporting effortless.",
      name: "Lisa T.",
      role: "Head of People",
    },
    faqs: [
      {
        question: "What metrics does Uply provide?",
        answer:
          "The analytics dashboard tracks weekly participation rates, skill progress by topic, individual and team-level engagement, and trend data over time.",
      },
      {
        question: "Can Uply replace our existing LMS for soft skills?",
        answer:
          "For soft skills specifically, yes. Uply's micro-learning approach delivers better engagement and retention than traditional LMS courses. Many teams keep their LMS for technical training and use Uply for soft skills.",
      },
      {
        question: "Does it satisfy compliance training requirements?",
        answer:
          "Uply can deliver compliance-related soft skills content (like communication standards and feedback guidelines) with trackable completion data. Check with your compliance team for specific requirements.",
      },
      {
        question: "How do I roll it out to the whole company?",
        answer:
          "Start with one team, show results, and expand. Uply installs in Slack in under 2 minutes. Most companies start with a pilot team and scale based on the data.",
      },
    ],
    relatedLinks: [
      { label: "Compliance training in Slack", href: "/use-cases/compliance-training" },
      { label: "Onboarding soft skills", href: "/use-cases/onboarding-soft-skills" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Microlearning vs traditional training", href: "/blog/microlearning-vs-traditional-training" },
    ],
  },
  {
    slug: "managers",
    name: "New Managers",
    title: "Soft Skills Training for New Managers",
    description:
      "Daily leadership practice in Slack for newly promoted managers. Build confidence in feedback, delegation, and team communication -  2 minutes a day.",
    heroHeadline: "From IC to leader -  without the sink-or-swim",
    heroCopy:
      "Most new managers are promoted for technical skills and left to figure out leadership on their own. Uply builds feedback, delegation, and communication muscles daily in Slack.",
    painPoints: [
      {
        title: "Promoted without training",
        description:
          "One day you're an individual contributor, the next you're managing a team. Nobody teaches you how to run a 1:1, give hard feedback, or handle conflict.",
      },
      {
        title: "Feedback anxiety",
        description:
          "New managers know they need to give feedback but dread it. They avoid difficult conversations, let issues fester, or deliver feedback so poorly it backfires.",
      },
      {
        title: "Delegation struggles",
        description:
          "Former ICs try to do everything themselves. They micromanage or under-delegate, burning out while their team disengages.",
      },
    ],
    solutions: [
      {
        title: "Daily leadership scenarios",
        description:
          "Practice handling real management situations every day: giving critical feedback, navigating team conflict, running productive 1:1s, and making tough decisions.",
      },
      {
        title: "Feedback practice in a safe space",
        description:
          "Scenario-based questions let new managers rehearse difficult conversations without real stakes. Build the muscle memory before the moment arrives.",
      },
      {
        title: "Confidence through consistency",
        description:
          "Leadership isn't learned in a weekend workshop. Daily practice builds genuine confidence over weeks, not theoretical knowledge that fades in days.",
      },
    ],
    stat: { value: "94%", label: "weekly completion rate" },
    testimonial: {
      quote:
        "I was terrified of giving feedback when I got promoted. After a month of Uply, I actually look forward to 1:1s. The daily practice made it feel natural.",
      name: "Jordan P.",
      role: "Engineering Manager (first-time)",
    },
    faqs: [
      {
        question: "Is this just for brand-new managers?",
        answer:
          "No. While Uply is especially valuable for newly promoted managers, experienced managers also benefit from daily practice in areas like feedback, delegation, and communication.",
      },
      {
        question: "How quickly will I see improvement?",
        answer:
          "Most managers notice a shift within 2-3 weeks. The daily scenarios build pattern recognition -  you start seeing situations differently and responding more intentionally.",
      },
      {
        question: "Can my manager see my progress?",
        answer:
          "Team analytics are available to admins, but individual answers are private. Your manager can see participation and skill-level trends, not your specific responses.",
      },
    ],
    relatedLinks: [
      { label: "New manager training use case", href: "/use-cases/new-manager-training" },
      { label: "Team communication", href: "/use-cases/team-communication" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Leadership development through daily practice", href: "/blog/leadership-development-daily-practice" },
    ],
  },
  {
    slug: "sales-teams",
    name: "Sales Teams",
    title: "Soft Skills Training for Sales Teams",
    description:
      "Sharpen objection handling, active listening, and empathy. Daily Slack micro-lessons help sales teams build the communication skills that close deals.",
    heroHeadline: "The soft skills that actually close deals",
    heroCopy:
      "Product knowledge gets you in the door. Communication, empathy, and active listening close the deal. Uply helps sales teams practice these skills daily in Slack.",
    painPoints: [
      {
        title: "Objection handling falls flat",
        description:
          "Reps know the product inside out but freeze when prospects push back. Handling objections requires empathy and communication skills, not just rebuttals.",
      },
      {
        title: "Active listening is rare",
        description:
          "Most reps are planning their next pitch while the prospect is talking. Discovery calls suffer because reps aren't truly hearing customer pain points.",
      },
      {
        title: "Empathy gaps kill discovery calls",
        description:
          "Prospects can tell when a rep doesn't genuinely understand their problem. Without empathy, discovery feels like an interrogation, not a conversation.",
      },
    ],
    solutions: [
      {
        title: "Communication and negotiation scenarios",
        description:
          "Daily questions simulate real sales conversations: handling price objections, navigating procurement pushback, and building rapport with skeptical buyers.",
      },
      {
        title: "Daily practice builds real skills",
        description:
          "One role-play per quarter doesn't create lasting change. Daily micro-practice in Slack builds communication habits that show up on every call.",
      },
      {
        title: "Leaderboard drives competitive engagement",
        description:
          "Sales teams are naturally competitive. Uply's weekly leaderboard taps into that -  driving participation rates that traditional training can only dream of.",
      },
    ],
    stat: { value: "2 min", label: "daily -  between calls" },
    testimonial: {
      quote:
        "My reps started asking better discovery questions within two weeks. The daily scenarios taught them to listen first and pitch second.",
      name: "Chris M.",
      role: "VP of Sales",
    },
    faqs: [
      {
        question: "How is this different from sales coaching?",
        answer:
          "Uply complements coaching by building the underlying soft skills -  empathy, active listening, communication -  that make coaching stick. It's daily practice, not a one-time session.",
      },
      {
        question: "Are the scenarios sales-specific?",
        answer:
          "Uply's scenarios cover universal communication and negotiation skills that are directly applicable to sales. Topics include objection handling, active listening, empathy, and persuasion.",
      },
      {
        question: "Will my reps actually do it?",
        answer:
          "Sales teams love the competitive format. The weekly leaderboard drives engagement, and the 2-minute daily format means it never competes with selling time.",
      },
    ],
    relatedLinks: [
      { label: "Team communication", href: "/use-cases/team-communication" },
      { label: "Async team training", href: "/use-cases/async-team-training" },
      { label: "Features overview", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Employee engagement in Slack", href: "/blog/employee-engagement-slack" },
    ],
  },
];

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((a) => a.slug);
}
