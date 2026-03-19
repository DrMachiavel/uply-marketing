export interface GlossaryTerm {
  slug: string;
  term: string;
  title: string;
  description: string;
  definition: string;
  whyMatters: string;
  howToApply: string;
  howUplyHelps: string;
  relatedTerms: string[];
  relatedLinks: { label: string; href: string }[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "microlearning",
    term: "Microlearning",
    title: "What is Microlearning?",
    description:
      "Microlearning delivers training in short, focused bursts of 2-10 minutes. Learn why it's 17% more efficient than traditional training and how to apply it.",
    definition:
      "Microlearning is an approach to training that delivers content in short, focused bursts — typically 2 to 10 minutes. Rather than sitting through hour-long workshops or multi-day seminars, learners engage with bite-sized lessons that target a single concept or skill at a time.",
    whyMatters:
      "Research published in the Journal of Applied Psychology found that microlearning is 17% more efficient than traditional training methods. The reason is simple: shorter sessions reduce cognitive overload and fit naturally into a busy workday. Teams that adopt microlearning see higher completion rates, better knowledge retention, and less disruption to daily work.",
    howToApply:
      "Start with daily 2-minute learning sessions focused on one concept. Deliver them where your team already works — in Slack, Teams, or email — so there's zero friction. Combine microlearning with spaced repetition to maximize retention over time.",
    howUplyHelps:
      "Uply delivers microlearning directly in Slack. Each day, your team gets a 2-minute question that builds real soft skills — no app-switching, no calendar blocking, no excuses.",
    relatedTerms: ["spaced-repetition", "ebbinghaus-forgetting-curve"],
    relatedLinks: [
      { label: "Microlearning vs Traditional Training", href: "/blog/microlearning-vs-traditional-training" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    slug: "soft-skills",
    term: "Soft Skills",
    title: "What are Soft Skills?",
    description:
      "Soft skills are interpersonal and social abilities like communication, leadership, and empathy. Learn why 85% of career success depends on soft skills.",
    definition:
      "Soft skills are the interpersonal, social, and emotional abilities that shape how people communicate, collaborate, and lead. They include skills like active listening, empathy, conflict resolution, adaptability, and emotional intelligence — the human capabilities that no technology can replace.",
    whyMatters:
      "Research from Harvard, Stanford, and the Carnegie Foundation found that 85% of career success comes from well-developed soft skills, while only 15% comes from technical knowledge. In a world where AI handles more technical tasks every day, soft skills are becoming the key differentiator for high-performing teams. Companies that invest in soft skills training see better collaboration, lower turnover, and stronger leadership pipelines.",
    howToApply:
      "Practice soft skills through real scenarios, not abstract theory. Role-playing difficult conversations, giving peer feedback, and reflecting on team dynamics are all effective methods. The key is consistent, daily practice — not occasional workshops that fade from memory within a week.",
    howUplyHelps:
      "Uply delivers daily soft skills training directly in Slack. Each question presents a realistic workplace scenario that builds practical skills in communication, leadership, and collaboration.",
    relatedTerms: ["psychological-safety", "growth-mindset"],
    relatedLinks: [
      { label: "Communication Skills", href: "/skills/communication" },
      { label: "Soft Skills in the AI Age", href: "/blog/soft-skills-ai-age" },
    ],
  },
  {
    slug: "psychological-safety",
    term: "Psychological Safety",
    title: "What is Psychological Safety?",
    description:
      "Psychological safety is the belief that you can take interpersonal risks without punishment. Google's Project Aristotle found it's the #1 factor in team performance.",
    definition:
      "Psychological safety is a shared belief among team members that it's safe to take interpersonal risks — to speak up, ask questions, admit mistakes, and propose new ideas without fear of embarrassment or punishment. The concept was pioneered by Harvard professor Amy Edmondson and brought to mainstream attention by Google's research.",
    whyMatters:
      "Google's Project Aristotle — a multi-year study of 180 teams — found that psychological safety was the single most important factor in team performance, more important than team composition, structure, or individual talent. Teams with high psychological safety innovate faster, catch problems earlier, and retain top talent longer because people aren't spending energy on self-protection.",
    howToApply:
      "Leaders must model vulnerability by admitting their own mistakes and uncertainties. Respond to bad news with curiosity rather than blame. Create explicit norms like 'no idea is a bad idea in brainstorming' and 'mistakes are learning opportunities.' Regularly ask your team what they need and what could be improved.",
    howUplyHelps:
      "Uply's daily scenarios teach the specific behaviors that build psychological safety — like giving constructive feedback, responding to mistakes with empathy, and encouraging divergent thinking.",
    relatedTerms: ["growth-mindset", "soft-skills", "servant-leadership"],
    relatedLinks: [
      { label: "Leadership Skills", href: "/skills/leadership" },
      { label: "For Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "growth-mindset",
    term: "Growth Mindset",
    title: "What is Growth Mindset?",
    description:
      "Growth mindset is the belief that abilities can be developed through effort and learning. Teams with growth mindset are 47% more likely to trust each other.",
    definition:
      "Growth mindset, a concept developed by psychologist Carol Dweck, is the belief that abilities and intelligence can be developed through dedication, effort, and learning. It contrasts with a fixed mindset — the belief that talent is innate and unchangeable. A growth mindset doesn't mean believing anyone can do anything; it means believing that potential is unknown and unknowable.",
    whyMatters:
      "Teams that embrace a growth mindset are 47% more likely to say their colleagues are trustworthy, according to research published in Harvard Business Review. Growth-oriented cultures encourage experimentation, tolerate failure as a learning tool, and invest in development. This creates a virtuous cycle: people take more risks, learn faster, and contribute more creatively.",
    howToApply:
      "Praise effort and process over innate talent — say 'great approach' rather than 'you're so smart.' Normalize failure by sharing lessons learned, not just successes. Frame challenges as opportunities to grow rather than tests of ability. Encourage team members to seek feedback and take on stretch assignments.",
    howUplyHelps:
      "Uply's daily practice model reinforces growth orientation by turning skill development into a consistent habit. Each question is designed to stretch thinking and reward reflection over 'right answers.'",
    relatedTerms: ["psychological-safety", "microlearning"],
    relatedLinks: [
      { label: "Leadership Skills", href: "/skills/leadership" },
      { label: "For Startups", href: "/for/startups" },
    ],
  },
  {
    slug: "servant-leadership",
    term: "Servant Leadership",
    title: "What is Servant Leadership?",
    description:
      "Servant leadership is a philosophy where leaders prioritize serving their team's needs first. Companies with servant leaders see 6x higher employee engagement.",
    definition:
      "Servant leadership is a leadership philosophy where the leader's primary role is to serve the people they lead. Instead of a top-down, command-and-control approach, servant leaders focus on the growth, well-being, and empowerment of their team members. The concept was coined by Robert K. Greenleaf in his 1970 essay 'The Servant as Leader.'",
    whyMatters:
      "Companies that practice servant leadership see 6x higher employee engagement compared to traditional management approaches. Servant-led teams report higher job satisfaction, stronger commitment, and better performance because team members feel genuinely supported. In an era of remote and hybrid work, servant leadership is even more critical — people need leaders who listen, remove obstacles, and create clarity.",
    howToApply:
      "Start every 1:1 with 'What do you need from me?' before asking 'What have you done?' Focus on removing obstacles rather than directing work. Share credit widely and take responsibility for failures. Invest time in understanding each team member's career goals and actively help them grow — even if it means they eventually outgrow your team.",
    howUplyHelps:
      "Uply's leadership scenarios emphasize servant leadership principles — helping managers practice empathetic communication, active listening, and team empowerment in realistic workplace situations.",
    relatedTerms: ["psychological-safety", "soft-skills"],
    relatedLinks: [
      { label: "Leadership Skills", href: "/skills/leadership" },
      { label: "For Managers", href: "/for/managers" },
    ],
  },
  {
    slug: "spaced-repetition",
    term: "Spaced Repetition",
    title: "What is Spaced Repetition?",
    description:
      "Spaced repetition is a learning technique that reviews material at increasing intervals. It delivers 200% better retention than massed practice.",
    definition:
      "Spaced repetition is a learning technique where information is reviewed at gradually increasing intervals — for example, after 1 day, then 3 days, then 7 days, then 14 days. This approach exploits the 'spacing effect,' a cognitive phenomenon where our brains retain information more effectively when learning is spread over time rather than concentrated in a single session.",
    whyMatters:
      "Research by Cepeda et al. (2006) found that spaced repetition produces 200% better long-term retention than massed practice (cramming). This has profound implications for workplace training: a single annual workshop produces almost no lasting behavior change, while daily micro-sessions spread over months build durable skills and habits. Spaced repetition is the antidote to the forgetting curve.",
    howToApply:
      "Replace weekly or monthly training blocks with daily micro-sessions of 2-5 minutes. Revisit key concepts at increasing intervals rather than covering everything once. Daily micro-sessions beat weekly cramming every time. The best implementation is automated — let a system handle the spacing so learners just show up consistently.",
    howUplyHelps:
      "Uply's daily questions are spaced repetition in action. Skills and concepts resurface at optimized intervals, ensuring your team builds lasting capabilities rather than temporary knowledge.",
    relatedTerms: ["microlearning", "ebbinghaus-forgetting-curve"],
    relatedLinks: [
      { label: "Daily Habits Beat Workshops", href: "/blog/daily-habits-beat-workshops" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    slug: "ebbinghaus-forgetting-curve",
    term: "The Forgetting Curve",
    title: "What is the Forgetting Curve?",
    description:
      "The Ebbinghaus Forgetting Curve shows we forget ~70% of new information within 24 hours. Learn why workshops don't stick and how to combat knowledge loss.",
    definition:
      "The forgetting curve is a model of memory decline over time, first described by German psychologist Hermann Ebbinghaus in 1885. His experiments showed that without reinforcement, we forget approximately 70% of new information within 24 hours and up to 90% within a week. The curve demonstrates that memory retention drops exponentially after initial learning.",
    whyMatters:
      "The forgetting curve explains why traditional training workshops don't produce lasting behavior change. When a company invests thousands of dollars in a full-day seminar, participants forget most of the content before they even return to work the next day. Understanding this curve is essential for any L&D leader who wants their training investments to actually stick.",
    howToApply:
      "Combat the forgetting curve with spaced repetition and daily reinforcement. Instead of a single intensive training event, distribute learning across many small sessions over weeks and months. Each review session 'resets' the forgetting curve, making the memory stronger and more durable. Pair this with practical application — having learners apply concepts in real work situations cements learning far more effectively than passive review.",
    howUplyHelps:
      "Uply's 2-minute daily practice is specifically designed to fight the forgetting curve. By delivering bite-sized learning every workday, Uply ensures that key soft skills concepts are reinforced before they fade.",
    relatedTerms: ["spaced-repetition", "microlearning"],
    relatedLinks: [
      { label: "Daily Habits Beat Workshops", href: "/blog/daily-habits-beat-workshops" },
      { label: "Microlearning vs Traditional Training", href: "/blog/microlearning-vs-traditional-training" },
    ],
  },
];

export function getAllTerms(): GlossaryTerm[] {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));
}

export function getTermBySlug(slug: string): GlossaryTerm | null {
  return glossaryTerms.find((t) => t.slug === slug) ?? null;
}
