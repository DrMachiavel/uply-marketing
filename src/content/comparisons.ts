export interface Comparison {
  slug: string;
  competitor: string;
  competitorDescription: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  bestFor: { uply: string; competitor: string };
  features: {
    name: string;
    uply: string | boolean;
    competitor: string | boolean;
  }[];
  pricing: { uply: string; competitor: string };
  verdict: string;
  faqs: { question: string; answer: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: "uply-vs-donut",
    competitor: "Donut",
    competitorDescription:
      "Donut connects teammates for virtual watercooler chats, introductions, and social bonding inside Slack.",
    title: "Uply vs Donut -  Slack Soft Skills Training Compared",
    description:
      "Compare Uply and Donut for Slack-based team development. See how daily micro-lessons stack up against watercooler introductions for building skills.",
    heroHeadline: "Uply vs Donut",
    heroCopy:
      "Donut is great for introductions and social bonding. Uply is built for measurable soft skills growth. Different goals -  here's how they compare.",
    bestFor: {
      uply: "Teams that want structured, daily soft skills training delivered in Slack with measurable progress and leaderboards.",
      competitor:
        "Teams focused on social bonding, peer introductions, and casual watercooler conversations inside Slack.",
    },
    features: [
      { name: "Slack-native delivery", uply: true, competitor: true },
      { name: "Daily micro-lessons", uply: true, competitor: false },
      { name: "Scenario-based questions", uply: true, competitor: false },
      { name: "Weekly leaderboard", uply: true, competitor: false },
      {
        name: "No content authoring needed",
        uply: true,
        competitor: true,
      },
      { name: "Free plan available", uply: true, competitor: true },
      { name: "Under 2-minute sessions", uply: true, competitor: false },
      { name: "Team analytics", uply: true, competitor: false },
      { name: "GDPR compliant", uply: true, competitor: true },
    ],
    pricing: {
      uply: "Free for up to 5 users. Pro at $1/user/month (free during early access).",
      competitor:
        "Free for small teams. Paid plans start at $49/month.",
    },
    verdict:
      "Donut and Uply solve different problems. If your goal is team bonding and introductions, Donut is a solid choice. If you want your team to actively develop leadership, communication, and collaboration skills with measurable progress, Uply is the better fit.",
    faqs: [
      {
        question: "Can I use Uply and Donut together?",
        answer:
          "Absolutely. Donut handles social introductions while Uply delivers daily skill-building exercises. They complement each other well since they address different aspects of team development.",
      },
      {
        question: "Does Donut offer any training features?",
        answer:
          "Donut focuses on connecting people for conversations rather than structured training. It's excellent for onboarding introductions and watercooler chats, but doesn't provide lessons, quizzes, or skill tracking.",
      },
      {
        question:
          "How much time does Uply take compared to Donut?",
        answer:
          "Uply takes about 2 minutes per day to answer a scenario-based question. Donut meetups typically last 15-30 minutes. Both are lightweight, but Uply requires less calendar time.",
      },
    ],
  },
  {
    slug: "uply-vs-edapp",
    competitor: "EdApp (SC Training)",
    competitorDescription:
      "EdApp (now SC Training) is a full learning management system with a course authoring tool, gamification, and mobile delivery.",
    title: "Uply vs EdApp -  Slack Microlearning vs Full LMS",
    description:
      "Compare Uply and EdApp (SC Training) for team training. See how Slack-native micro-lessons compare to a full LMS with course authoring tools.",
    heroHeadline: "Uply vs EdApp (SC Training)",
    heroCopy:
      "EdApp is a powerful LMS with course authoring. Uply is Slack-native microlearning with zero setup. Here's how they compare for soft skills training.",
    bestFor: {
      uply: "Teams that want frictionless soft skills training inside Slack -  no authoring, no app downloads, just daily practice.",
      competitor:
        "Organizations that need a full LMS with custom course creation, compliance training, and mobile delivery across multiple topics.",
    },
    features: [
      {
        name: "Slack-native delivery",
        uply: true,
        competitor: false,
      },
      { name: "Daily micro-lessons", uply: true, competitor: true },
      { name: "Scenario-based questions", uply: true, competitor: true },
      { name: "Weekly leaderboard", uply: true, competitor: true },
      {
        name: "No content authoring needed",
        uply: true,
        competitor: false,
      },
      { name: "Free plan available", uply: true, competitor: true },
      {
        name: "Under 2-minute sessions",
        uply: true,
        competitor: false,
      },
      { name: "Team analytics", uply: true, competitor: true },
      { name: "GDPR compliant", uply: true, competitor: true },
    ],
    pricing: {
      uply: "Free for up to 5 users. Pro at $1/user/month (free during early access).",
      competitor:
        "Free plan available. Paid plans start at $2.95/user/month.",
    },
    verdict:
      "EdApp is a feature-rich LMS ideal for organizations that need custom course creation across many topics. Uply is purpose-built for soft skills and lives entirely in Slack, so there's nothing to set up or author. If soft skills are your focus and your team already uses Slack, Uply is the simpler, more focused choice.",
    faqs: [
      {
        question:
          "Do I need to create content with Uply like I do with EdApp?",
        answer:
          "No. Uply comes with a ready-made library of soft skills content covering leadership, communication, collaboration, and more. You just pick topics and Uply delivers daily questions automatically.",
      },
      {
        question: "Can EdApp deliver lessons in Slack?",
        answer:
          "EdApp primarily delivers content through its own mobile app and web platform. It does not have native Slack integration for lesson delivery like Uply does.",
      },
      {
        question:
          "Is Uply suitable for compliance or technical training?",
        answer:
          "Uply is designed specifically for soft skills -  leadership, communication, feedback, collaboration. For compliance or technical training, a full LMS like EdApp may be a better fit.",
      },
      {
        question: "Which is easier to set up?",
        answer:
          "Uply can be set up in under 5 minutes -  install the Slack app, pick topics, and invite your team. EdApp requires more setup time for course creation and configuration, though its template library helps.",
      },
    ],
  },
  {
    slug: "uply-vs-7taps",
    competitor: "7taps",
    competitorDescription:
      "7taps is a microlearning creation platform that lets you build and share bite-sized training content quickly via links or QR codes.",
    title: "Uply vs 7taps -  Complete Solution vs Creation Tool",
    description:
      "Compare Uply and 7taps for microlearning. See how a complete Slack-native solution compares to a microlearning content creation platform.",
    heroHeadline: "Uply vs 7taps",
    heroCopy:
      "7taps helps you create microlearning content. Uply delivers a complete soft skills program inside Slack -  no content creation required.",
    bestFor: {
      uply: "Teams that want a turnkey soft skills training solution inside Slack with no content creation or management overhead.",
      competitor:
        "L&D teams that need to create and distribute custom microlearning content across various topics and delivery channels.",
    },
    features: [
      {
        name: "Slack-native delivery",
        uply: true,
        competitor: false,
      },
      { name: "Daily micro-lessons", uply: true, competitor: false },
      { name: "Scenario-based questions", uply: true, competitor: true },
      { name: "Weekly leaderboard", uply: true, competitor: false },
      {
        name: "No content authoring needed",
        uply: true,
        competitor: false,
      },
      { name: "Free plan available", uply: true, competitor: true },
      {
        name: "Under 2-minute sessions",
        uply: true,
        competitor: true,
      },
      {
        name: "Team analytics",
        uply: true,
        competitor: "Basic",
      },
      { name: "GDPR compliant", uply: true, competitor: true },
    ],
    pricing: {
      uply: "Free for up to 5 users. Pro at $1/user/month (free during early access).",
      competitor:
        "Free plan with limited features. Paid plans start at $99/month.",
    },
    verdict:
      "7taps is a strong tool for L&D teams that need to create custom microlearning content. Uply takes a different approach -  it provides ready-made soft skills content delivered directly in Slack with built-in leaderboards and analytics. If you want soft skills training without the authoring overhead, Uply is the faster path.",
    faqs: [
      {
        question: "Can I create my own content with Uply?",
        answer:
          "Uply provides a curated library of soft skills content. You choose which topics your team focuses on, but you don't need to write or manage individual lessons. New content is added regularly.",
      },
      {
        question:
          "Does 7taps integrate with Slack?",
        answer:
          "7taps content is primarily shared via links, QR codes, or embedded in other platforms. It doesn't have native Slack delivery like Uply, where lessons arrive automatically as messages.",
      },
      {
        question: "Which tool is better for soft skills specifically?",
        answer:
          "Uply is purpose-built for soft skills with scenario-based questions designed around real workplace situations. 7taps is content-agnostic -  it's a creation tool that can be used for any topic, including soft skills, but you need to provide the content.",
      },
    ],
  },
  {
    slug: "uply-vs-trivie",
    competitor: "Trivie",
    competitorDescription:
      "Trivie uses AI-powered quizzes and spaced repetition to help employees retain knowledge from training programs.",
    title: "Uply vs Trivie -  Slack Soft Skills vs AI Quiz Platform",
    description:
      "Compare Uply and Trivie for team training. See how Slack-native soft skills micro-lessons compare to AI-powered knowledge retention quizzes.",
    heroHeadline: "Uply vs Trivie",
    heroCopy:
      "Trivie reinforces existing training with AI quizzes. Uply delivers original soft skills content in Slack. Here's how to choose between them.",
    bestFor: {
      uply: "Teams that need a standalone soft skills program inside Slack -  no existing training materials required.",
      competitor:
        "Organizations that want to reinforce knowledge from existing training programs using AI-powered spaced repetition quizzes.",
    },
    features: [
      {
        name: "Slack-native delivery",
        uply: true,
        competitor: false,
      },
      { name: "Daily micro-lessons", uply: true, competitor: true },
      { name: "Scenario-based questions", uply: true, competitor: true },
      { name: "Weekly leaderboard", uply: true, competitor: true },
      {
        name: "No content authoring needed",
        uply: true,
        competitor: false,
      },
      { name: "Free plan available", uply: true, competitor: false },
      {
        name: "Under 2-minute sessions",
        uply: true,
        competitor: true,
      },
      { name: "Team analytics", uply: true, competitor: true },
      { name: "GDPR compliant", uply: true, competitor: true },
    ],
    pricing: {
      uply: "Free for up to 5 users. Pro at $1/user/month (free during early access).",
      competitor:
        "Custom pricing based on team size. No free plan.",
    },
    verdict:
      "Trivie excels at reinforcing knowledge from training programs you've already built. Uply is a standalone soft skills solution -  you don't need existing content or a separate LMS. If soft skills are your priority and you want something that works out of the box in Slack, Uply is the simpler choice.",
    faqs: [
      {
        question:
          "Does Trivie require existing training content?",
        answer:
          "Yes. Trivie is designed to reinforce knowledge from training materials you've already created. It uses AI to generate quizzes from your existing content. Uply provides its own content library, so you don't need any pre-existing materials.",
      },
      {
        question: "Can Trivie deliver content in Slack?",
        answer:
          "Trivie primarily uses its own app and email for delivery. While it may offer some integrations, it doesn't provide native Slack delivery the way Uply does, where questions arrive directly as Slack messages.",
      },
      {
        question:
          "Is Trivie better for technical training than Uply?",
        answer:
          "Trivie is more flexible for technical and compliance training since it works with your existing content. Uply is focused specifically on soft skills like leadership, communication, and collaboration. Choose based on what your team needs to develop.",
      },
    ],
  },
  {
    slug: "uply-vs-talentlms",
    competitor: "TalentLMS",
    competitorDescription:
      "TalentLMS is a cloud-based learning management system for building, managing, and delivering online training courses.",
    title: "Uply vs TalentLMS -  Slack Microlearning vs Full LMS",
    description:
      "Compare Uply and TalentLMS for team training. See how lightweight Slack-native micro-lessons compare to a full learning management system.",
    heroHeadline: "Uply vs TalentLMS",
    heroCopy:
      "TalentLMS is a full-featured LMS. Uply is lightweight, Slack-native soft skills training. Here's how to decide which fits your team better.",
    bestFor: {
      uply: "Teams that want fast, lightweight soft skills training inside Slack without the overhead of managing a full LMS.",
      competitor:
        "Organizations that need a comprehensive LMS for multi-topic training, certifications, and compliance across large teams.",
    },
    features: [
      {
        name: "Slack-native delivery",
        uply: true,
        competitor: false,
      },
      {
        name: "Daily micro-lessons",
        uply: true,
        competitor: false,
      },
      { name: "Scenario-based questions", uply: true, competitor: true },
      { name: "Weekly leaderboard", uply: true, competitor: false },
      {
        name: "No content authoring needed",
        uply: true,
        competitor: false,
      },
      { name: "Free plan available", uply: true, competitor: true },
      {
        name: "Under 2-minute sessions",
        uply: true,
        competitor: false,
      },
      { name: "Team analytics", uply: true, competitor: true },
      { name: "GDPR compliant", uply: true, competitor: true },
    ],
    pricing: {
      uply: "Free for up to 5 users. Pro at $1/user/month (free during early access).",
      competitor:
        "Free for up to 5 users. Paid plans start at $69/month.",
    },
    verdict:
      "TalentLMS is a proven LMS for organizations that need certifications, compliance tracking, and custom course libraries. Uply is designed for teams that want soft skills training without the LMS overhead -  it's Slack-native, takes 2 minutes a day, and requires zero content creation. For focused soft skills development, Uply is the leaner choice.",
    faqs: [
      {
        question:
          "Can TalentLMS replace Uply for soft skills training?",
        answer:
          "TalentLMS can deliver soft skills courses, but you'd need to create or purchase the content, set up courses, and get your team to log into a separate platform. Uply delivers curated soft skills content directly in Slack with no setup beyond choosing topics.",
      },
      {
        question:
          "Is Uply too simple for large organizations?",
        answer:
          "Uply is designed to be simple on purpose -  complexity kills adoption. It works well for teams of any size that want consistent daily soft skills practice. For broader training needs (compliance, technical, onboarding), a full LMS like TalentLMS is more appropriate.",
      },
      {
        question:
          "How does pricing compare for a 50-person team?",
        answer:
          "For 50 users, Uply Pro costs $50/month (currently free during early access). TalentLMS would start at $69/month on their Starter plan. Uply is more affordable and includes all features at every paid tier.",
      },
    ],
  },
];
