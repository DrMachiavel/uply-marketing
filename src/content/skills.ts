export interface Skill {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  whatIs: string;
  whyMatters: string;
  challenges: { title: string; description: string }[];
  howUplyHelps: string;
  sampleQuestion: {
    scenario: string;
    options: string[];
    correct: number;
    explanation: string;
  };
  relatedSkills: string[];
  relatedBlog: { title: string; href: string }[];
  relatedFor: { title: string; href: string }[];
}

const skills: Skill[] = [
  {
    slug: "leadership",
    name: "Leadership",
    title: "Leadership Skills Training",
    description:
      "Build stronger leaders with daily micro-lessons in Slack. Uply helps managers develop decision-making, delegation, and team inspiration skills in just 2 minutes a day.",
    heroHeadline: "Develop leaders who inspire action",
    heroCopy:
      "Great leadership isn't taught in a weekend workshop. It's built through daily practice — one real-world scenario at a time.",
    whatIs:
      "Leadership is the ability to guide teams, make sound decisions under pressure, and inspire others to do their best work. It goes beyond authority — it's about earning trust, setting direction, and helping people grow. Strong leaders create environments where teams can thrive, even when things get hard.",
    whyMatters:
      "Companies with strong leadership pipelines are 2.4x more likely to hit performance targets. Yet 77% of organizations report leadership gaps. The cost of poor leadership shows up in turnover, disengagement, and missed opportunities — problems that compound over time.",
    challenges: [
      {
        title: "Delegation anxiety",
        description:
          "Many new leaders struggle to let go of tasks they used to own. They micromanage instead of empowering their team, creating bottlenecks and eroding trust.",
      },
      {
        title: "Giving tough feedback",
        description:
          "Avoiding difficult conversations is one of the most common leadership failures. Without honest feedback, poor performance festers and top performers lose motivation.",
      },
      {
        title: "Leading through change",
        description:
          "Organizational change is constant, but most leaders aren't trained for it. Teams look to their leaders for stability and direction — and too often find neither.",
      },
    ],
    howUplyHelps:
      "Uply delivers daily scenario-based questions that put your managers in realistic leadership situations — right inside Slack. Instead of theory, they practice making decisions about delegation, feedback, and team dynamics. Each answer comes with an expert explanation, so learning happens in the moment.\n\nOver weeks and months, these micro-lessons compound into real behavioral change. Your leaders build muscle memory for the situations that matter most.",
    sampleQuestion: {
      scenario:
        "Your team missed a deadline on an important project. The client is frustrated and your manager wants answers. What's your first move?",
      options: [
        "Identify who caused the delay and address it with them privately",
        "Take responsibility with stakeholders first, then debrief with the team",
        "Send a team-wide message asking what went wrong",
      ],
      correct: 1,
      explanation:
        "Strong leaders own outcomes publicly and coach privately. Taking responsibility first preserves team trust and shows stakeholders you're in control. The debrief can then focus on improvement, not blame.",
    },
    relatedSkills: ["communication", "giving-feedback", "emotional-intelligence"],
    relatedBlog: [
      {
        title: "Why Daily Practice Beats Annual Leadership Workshops",
        href: "/blog/leadership-development-daily-practice",
      },
    ],
    relatedFor: [
      { title: "Uply for Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "communication",
    name: "Communication",
    title: "Communication Skills Training",
    description:
      "Improve team communication with daily Slack-based practice. Help your team master clear expression, active listening, and adapting their message to any audience.",
    heroHeadline: "Build teams that communicate with clarity",
    heroCopy:
      "Miscommunication costs companies an average of $12,506 per employee per year. Daily practice helps your team say what they mean — and hear what others are really saying.",
    whatIs:
      "Communication at work is more than speaking clearly. It's the ability to express ideas concisely, listen actively, adapt your tone and message to different audiences, and ensure understanding. Great communicators reduce friction, prevent misunderstandings, and build stronger working relationships.",
    whyMatters:
      "86% of employees cite poor communication as the root cause of workplace failures. Remote and hybrid teams face even higher stakes — without body language and hallway conversations, every Slack message, email, and meeting carries more weight. Teams that communicate well move faster and make fewer costly mistakes.",
    challenges: [
      {
        title: "Email and Slack misunderstandings",
        description:
          "Written communication strips away tone and context. A direct message can read as hostile, a brief reply as dismissive. Teams waste hours clarifying what should have been clear from the start.",
      },
      {
        title: "Cross-team miscommunication",
        description:
          "Engineering talks in technical terms, sales talks in outcomes, and leadership talks in strategy. Without translation skills, cross-functional work stalls and frustration builds.",
      },
      {
        title: "Difficult conversations",
        description:
          "When the stakes are high, communication skills matter most — and fail most often. People avoid hard topics, sugarcoat problems, or deliver messages that create more confusion than clarity.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios drop your team into real communication challenges — interpreting ambiguous messages, crafting clear responses, and navigating cross-functional conversations. Each question is followed by an expert explanation that breaks down what makes communication effective in that specific context.\n\nBy practicing these situations daily in Slack, your team builds the instinct to communicate clearly under pressure, not just in calm retrospectives.",
    sampleQuestion: {
      scenario:
        "A colleague sends you a Slack message that reads: 'Per my last email, the deadline hasn't changed.' Their tone seems hostile. How do you respond?",
      options: [
        "Reply with 'I'm aware of the deadline, thanks' to match their energy",
        "Assume positive intent and reply with a clarifying question about next steps",
        "Escalate to your manager about the hostile communication",
      ],
      correct: 1,
      explanation:
        "Written communication lacks tone. Assuming positive intent prevents unnecessary conflict. A clarifying question moves the conversation forward productively and gives the other person a chance to reset if they were indeed frustrated.",
    },
    relatedSkills: ["active-listening", "conflict-resolution", "collaboration"],
    relatedBlog: [
      {
        title: "How to Improve Team Communication (Without Another Meeting)",
        href: "/blog/how-to-improve-team-communication",
      },
    ],
    relatedFor: [
      { title: "Uply for Remote Teams", href: "/for/remote-teams" },
    ],
  },
  {
    slug: "emotional-intelligence",
    name: "Emotional Intelligence",
    title: "Emotional Intelligence at Work",
    description:
      "Help your team develop emotional intelligence through daily practice in Slack. Build self-awareness, empathy, and composure with Uply's scenario-based micro-lessons.",
    heroHeadline: "Build emotionally intelligent teams",
    heroCopy:
      "EQ predicts job performance twice as well as IQ. The best part? Unlike raw intelligence, emotional intelligence can be trained — one situation at a time.",
    whatIs:
      "Emotional intelligence is the ability to recognize, understand, and manage your own emotions — and to read and respond to the emotions of others. At work, it shows up as self-awareness, empathy, composure under stress, and the ability to navigate interpersonal dynamics without creating collateral damage.",
    whyMatters:
      "90% of top performers score high in emotional intelligence. Teams with high EQ have 20% less turnover and resolve conflicts faster. In a world where technical skills are increasingly automated, emotional intelligence is becoming the most durable competitive advantage a team can have.",
    challenges: [
      {
        title: "Stress reactions",
        description:
          "Under pressure, even experienced professionals can snap, shut down, or make impulsive decisions. Without awareness of their triggers, people repeat the same reactive patterns.",
      },
      {
        title: "Reading the room",
        description:
          "Misreading emotional dynamics in meetings — pushing when others need space, or staying silent when others need support — creates friction and missed opportunities.",
      },
      {
        title: "Staying composed under pressure",
        description:
          "When a client escalates, a project fails, or a team member breaks down, composure isn't optional. But it doesn't come naturally — it's a practiced skill.",
      },
    ],
    howUplyHelps:
      "Uply presents daily scenarios that require emotional awareness — recognizing when a teammate is struggling, managing your own frustration in a heated discussion, or reading the subtext in a tense meeting. Each question challenges your team to pause, reflect, and choose the emotionally intelligent response.\n\nOver time, this daily practice rewires default reactions. Instead of reacting impulsively, your team builds the habit of responding thoughtfully.",
    sampleQuestion: {
      scenario:
        "In a heated meeting, a teammate raises their voice and criticizes your proposal in front of the whole team. You feel your face flush. What do you do?",
      options: [
        "Defend your proposal firmly and point out the flaws in their argument",
        "Pause, acknowledge their concern, and ask what specific outcome they're worried about",
        "Stay quiet and bring it up with them privately after the meeting",
      ],
      correct: 1,
      explanation:
        "Pausing breaks the reactive cycle. Acknowledging their concern (without agreeing) de-escalates the tension. Asking about the specific outcome shifts the conversation from personal attack to productive problem-solving — and signals emotional maturity to everyone in the room.",
    },
    relatedSkills: ["conflict-resolution", "active-listening", "leadership"],
    relatedBlog: [
      {
        title: "Why Soft Skills Are the Most In-Demand Skills of the AI Age",
        href: "/blog/soft-skills-ai-age",
      },
    ],
    relatedFor: [
      { title: "Uply for Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "conflict-resolution",
    name: "Conflict Resolution",
    title: "Conflict Resolution Training",
    description:
      "Train your team to resolve conflicts constructively with daily Slack-based scenarios. Uply builds the skills to address disagreements before they escalate.",
    heroHeadline: "Turn workplace conflict into progress",
    heroCopy:
      "Unresolved conflict costs companies an average of 8 hours per week in wasted productivity. Daily practice helps your team address disagreements before they spiral.",
    whatIs:
      "Conflict resolution is the ability to address disagreements constructively — finding solutions that respect everyone's needs without damaging relationships. It means knowing when to step in, how to de-escalate, and how to turn tension into alignment. It's not about avoiding conflict; it's about handling it well.",
    whyMatters:
      "85% of employees deal with conflict at work, and managers spend 25-40% of their time managing it. Unresolved conflicts lead to toxic team dynamics, talent loss, and projects that stall because people can't align. Teams that resolve conflict well are more innovative because they can disagree productively.",
    challenges: [
      {
        title: "Avoiding difficult conversations",
        description:
          "Most people would rather ignore a conflict than address it. But avoidance doesn't resolve tension — it lets it fester until a small disagreement becomes a team-wide problem.",
      },
      {
        title: "Taking sides",
        description:
          "When conflict arises, it's tempting to back the person you agree with. But effective resolution requires understanding all perspectives and finding common ground, not picking winners.",
      },
      {
        title: "Escalation spirals",
        description:
          "Without the skills to de-escalate, small disagreements turn into personal attacks. Once people feel attacked, they stop listening — and resolution becomes much harder.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios place your team in realistic conflict situations — public disagreements in Slack, competing priorities between teams, and interpersonal friction. Each question teaches a specific de-escalation or resolution technique, with explanations grounded in real-world L&D best practices.\n\nBy practicing conflict resolution in low-stakes daily scenarios, your team builds confidence to handle high-stakes situations when they arise.",
    sampleQuestion: {
      scenario:
        "Two team members disagree on the technical approach for a project and the debate has spilled into a public Slack channel. Other team members are starting to take sides. As their lead, what do you do?",
      options: [
        "Post in the channel supporting the approach you think is better",
        "Move the discussion to a private call, hear both sides, and help them find common ground",
        "Tell them to figure it out themselves — they're both senior enough",
      ],
      correct: 1,
      explanation:
        "Public debates create pressure to 'win' rather than solve. Moving to a private conversation removes the audience and lets both parties be more flexible. As a lead, your role is facilitator, not judge — helping them find alignment, not picking the winner.",
    },
    relatedSkills: ["emotional-intelligence", "communication", "giving-feedback"],
    relatedBlog: [],
    relatedFor: [
      { title: "Uply for Engineering Teams", href: "/for/engineering-teams" },
      { title: "Uply for Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "giving-feedback",
    name: "Giving Feedback",
    title: "Giving Better Feedback at Work",
    description:
      "Help your team give constructive, timely, and specific feedback with daily Slack practice. Uply builds the feedback skills that drive performance and trust.",
    heroHeadline: "Build a culture of honest, helpful feedback",
    heroCopy:
      "65% of employees want more feedback, but most managers dread giving it. Daily practice turns feedback from a dreaded event into a natural habit.",
    whatIs:
      "Giving effective feedback means delivering constructive, timely, and specific observations that help someone improve — without damaging the relationship. It's a skill that combines honesty with empathy, clarity with care. Great feedback is actionable, focuses on behavior (not character), and opens a conversation rather than closing one.",
    whyMatters:
      "Companies with strong feedback cultures have 14.9% lower turnover. Yet 37% of managers are uncomfortable giving critical feedback. The result? Poor performance goes unchecked, top performers feel invisible, and teams plateau because nobody tells them the truth.",
    challenges: [
      {
        title: "The feedback sandwich trap",
        description:
          "Wrapping criticism between compliments dilutes the message. The recipient remembers the praise, dismisses the critique, and nothing changes. But the alternative — blunt criticism — can feel brutal.",
      },
      {
        title: "Avoiding feedback entirely",
        description:
          "When giving feedback feels risky, many managers simply don't do it. Performance reviews become the only touchpoint, and by then the issues are too old to address effectively.",
      },
      {
        title: "Only giving negative feedback",
        description:
          "Some leaders only speak up when something's wrong. This conditions their team to dread every conversation and miss the positive reinforcement that drives engagement.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios give your managers and team leads practice in the art of feedback — timing, framing, and delivery. Each question presents a realistic workplace situation where feedback is needed, and the expert explanation breaks down what makes the best response work.\n\nOver time, your team internalizes feedback frameworks they can use instinctively — in 1-on-1s, code reviews, project debriefs, and everyday interactions.",
    sampleQuestion: {
      scenario:
        "A team member's work quality has been slipping for the past two weeks. They recently took on a side project they're excited about. You need to address the performance issue. How do you bring it up?",
      options: [
        "Wait until the next performance review to raise it formally",
        "Have a private 1-on-1 focused on what you've observed, ask what's changed, and co-create a plan",
        "Send a Slack message asking them to reprioritize their main work",
      ],
      correct: 1,
      explanation:
        "Timely, private, and specific feedback is the gold standard. Waiting for a review lets the issue grow. A Slack message lacks nuance for sensitive topics. A 1-on-1 lets you share observations, explore root causes, and build a plan together — showing you care about their success, not just their output.",
    },
    relatedSkills: ["leadership", "communication", "emotional-intelligence"],
    relatedBlog: [
      {
        title: "Essential Soft Skills Every Engineering Manager Needs",
        href: "/blog/soft-skills-for-engineering-managers",
      },
    ],
    relatedFor: [
      { title: "Uply for Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "time-management",
    name: "Time Management",
    title: "Time Management Training",
    description:
      "Train your team in prioritization, focus, and saying no with daily Slack-based scenarios. Uply helps teams reclaim their time and do their best work.",
    heroHeadline: "Help your team focus on what matters most",
    heroCopy:
      "The average knowledge worker spends only 2.8 hours per day on productive work. Daily practice builds the prioritization muscle that separates busy from effective.",
    whatIs:
      "Time management at work isn't about cramming more into each day — it's about prioritization, saying no to low-value work, protecting deep focus time, and making intentional choices about where your energy goes. It's a soft skill because it requires judgment, communication, and self-awareness, not just a to-do list.",
    whyMatters:
      "Employees lose an average of 31 hours per month in unproductive meetings alone. Poor time management leads to burnout, missed deadlines, and a culture of constant firefighting. Teams that manage time well don't just ship faster — they ship better, because they have the focus to do thoughtful work.",
    challenges: [
      {
        title: "Meeting overload",
        description:
          "Calendars packed with back-to-back meetings leave no room for the actual work. But declining meetings feels political, so people attend everything and do their real work after hours.",
      },
      {
        title: "Priority paralysis",
        description:
          "When everything is urgent, nothing is. Without clear frameworks for prioritization, teams spin their wheels deciding what to work on instead of actually working.",
      },
      {
        title: "Context switching",
        description:
          "Jumping between Slack, email, meetings, and deep work destroys productivity. Research shows it takes 23 minutes to refocus after an interruption — and the average worker is interrupted every 11 minutes.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios challenge your team with real prioritization dilemmas — conflicting deadlines, meeting overload, and requests from multiple stakeholders. Each question builds the judgment to distinguish urgent from important and the communication skills to push back constructively.\n\nBecause Uply itself takes just 2 minutes, it models the very principle it teaches: small, focused investments of time compound into meaningful results.",
    sampleQuestion: {
      scenario:
        "You have 3 urgent requests from different people: your manager wants a report by end of day, a teammate needs help debugging, and a client sent a frustrated email. You have 4 hours of actual work time. What do you do?",
      options: [
        "Start with the client email since they're external and might escalate",
        "Assess real urgency and impact of each, communicate realistic timelines, and tackle the highest-impact item first",
        "Work on all three simultaneously, switching between them as needed",
      ],
      correct: 1,
      explanation:
        "Not all 'urgent' requests are equally important. Assessing impact before acting prevents reactive fire-fighting. Communicating realistic timelines to all three parties sets expectations and reduces stress. The highest-impact item gets your best energy, and the others get honest timelines instead of broken promises.",
    },
    relatedSkills: ["collaboration", "communication", "leadership"],
    relatedBlog: [],
    relatedFor: [
      { title: "Uply for Startups", href: "/for/startups" },
      { title: "Uply for Engineering Teams", href: "/for/engineering-teams" },
    ],
  },
  {
    slug: "collaboration",
    name: "Collaboration",
    title: "Team Collaboration Skills",
    description:
      "Strengthen team collaboration with daily scenario-based practice in Slack. Uply helps teams work across functions, resolve blockers, and align on shared goals.",
    heroHeadline: "Build teams that actually work together",
    heroCopy:
      "75% of cross-functional teams are dysfunctional. Daily practice builds the collaboration instincts that turn groups of individuals into high-performing teams.",
    whatIs:
      "Collaboration is the ability to work effectively with others toward shared goals — across functions, time zones, and working styles. It goes beyond dividing up tasks. True collaboration means proactive communication, shared ownership, constructive disagreement, and the flexibility to adapt when plans change.",
    whyMatters:
      "Teams that collaborate well are 5x more likely to be high-performing. Yet remote work, siloed organizations, and unclear ownership make collaboration harder than ever. The cost shows up in duplicated work, delayed projects, and talented people who leave because they're frustrated by dysfunction.",
    challenges: [
      {
        title: "Siloed teams",
        description:
          "Departments build walls around their work, share information reluctantly, and optimize for their own metrics instead of company goals. Breaking silos requires deliberate skill-building, not just org chart changes.",
      },
      {
        title: "Unclear ownership",
        description:
          "When nobody owns a problem, everybody waits for somebody else to act. Shared responsibility without clear roles leads to dropped balls and finger-pointing.",
      },
      {
        title: "Remote collaboration friction",
        description:
          "Distributed teams miss the casual hallway conversations that build trust and alignment. Without intentional collaboration skills, remote teams drift apart and work in parallel instead of together.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios put your team in cross-functional collaboration challenges — blocked projects, misaligned priorities, and remote coordination dilemmas. Each question teaches a specific collaboration technique, from stakeholder alignment to async communication best practices.\n\nBecause Uply lives in Slack — where collaboration actually happens — the practice is contextually relevant. Your team learns to collaborate better in the very tool they use to collaborate.",
    sampleQuestion: {
      scenario:
        "Another team has blocked your project without explaining why. Your deadline is in two weeks and you need their API changes to proceed. Your initial Slack message went unanswered. What do you do?",
      options: [
        "Escalate to both managers immediately — the deadline is at risk",
        "Reach out directly to a specific person on that team, explain the impact, and ask what's blocking them",
        "Find a workaround so you don't depend on their team anymore",
      ],
      correct: 1,
      explanation:
        "Escalating immediately can damage the relationship and may not speed things up. Workarounds create tech debt. Reaching out directly, with empathy and clarity about the impact, usually uncovers the real blocker — which might be something you can help with. Collaboration starts with understanding, not demands.",
    },
    relatedSkills: ["communication", "conflict-resolution", "time-management"],
    relatedBlog: [],
    relatedFor: [
      { title: "Uply for Remote Teams", href: "/for/remote-teams" },
      { title: "Uply for Engineering Teams", href: "/for/engineering-teams" },
    ],
  },
  {
    slug: "active-listening",
    name: "Active Listening",
    title: "Active Listening Skills",
    description:
      "Develop active listening skills across your team with daily Slack-based practice. Uply helps teams listen to understand, not just to respond.",
    heroHeadline: "Teach your team to listen — really listen",
    heroCopy:
      "We retain only 25-50% of what we hear. Active listening is the foundation of every other soft skill — and the one most people never formally train.",
    whatIs:
      "Active listening is the practice of fully engaging with a speaker — understanding their message, reading their emotions, and responding thoughtfully rather than reactively. It means resisting the urge to formulate your response while someone is still talking, asking clarifying questions, and confirming understanding before moving on.",
    whyMatters:
      "Managers who are rated as good listeners see 30% higher employee engagement scores. Active listening prevents the miscommunications that cost teams time and trust. In 1-on-1s, it's the difference between a manager who people open up to and one who only hears what they want to hear.",
    challenges: [
      {
        title: "Interrupting",
        description:
          "In fast-paced work environments, people jump in before others finish. This signals that their ideas matter more, shuts down quieter voices, and often means key information gets missed.",
      },
      {
        title: "Formulating responses while others talk",
        description:
          "Most people listen to respond, not to understand. While someone is explaining a problem, their colleague is already drafting a rebuttal — missing nuances that could change the entire conversation.",
      },
      {
        title: "Missing subtext",
        description:
          "What people say and what they mean aren't always the same. A report who says 'I'm fine' might be overwhelmed. A client who says 'interesting' might mean 'no.' Active listeners catch what's not being said.",
      },
    ],
    howUplyHelps:
      "Uply's daily scenarios present situations where active listening is the deciding factor — 1-on-1s with hesitant reports, client calls with hidden objections, and team meetings where the real issue isn't on the agenda. Each question trains your team to spot the signals that most people miss.\n\nBecause these scenarios are grounded in real workplace dynamics, the listening skills transfer directly to the conversations your team has every day.",
    sampleQuestion: {
      scenario:
        "During a 1-on-1, your direct report says 'Everything's fine' but seems hesitant, avoids eye contact, and gives shorter answers than usual. What do you do?",
      options: [
        "Take them at their word — they said they're fine, so move on to the agenda",
        "Gently note what you're observing and create space for them to share more",
        "Ask a direct question: 'Are you thinking about leaving the team?'",
      ],
      correct: 1,
      explanation:
        "Active listening means paying attention to non-verbal cues, not just words. Naming what you observe ('I notice you seem quieter today') without assuming the reason creates psychological safety. A direct, leading question like 'Are you leaving?' can feel confrontational and put them on the defensive.",
    },
    relatedSkills: ["emotional-intelligence", "communication", "giving-feedback"],
    relatedBlog: [],
    relatedFor: [
      { title: "Uply for Managers", href: "/for/managers" },
    ],
  },
];

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillBySlug(slug: string): Skill | null {
  return skills.find((s) => s.slug === slug) ?? null;
}
