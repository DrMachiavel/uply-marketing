export const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "https://app.uply.work/auth/slack/install";

export const SITE_CONFIG = {
  name: "Uply",
  tagline: "Soft skills training that lives in Slack",
  description:
    "Daily micro-lessons in Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills.",
  url: "https://uply.work",
  social: {
    linkedin: "https://www.linkedin.com/company/uply-skills/",
    twitter: "",
  },
  email: {
    support: "support@uply.work",
    privacy: "privacy@uply.work",
  },
} as const;
