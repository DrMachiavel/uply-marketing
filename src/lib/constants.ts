export const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "#";

export const SITE_CONFIG = {
  name: "Uply",
  tagline: "Soft skills training that lives in Slack",
  description:
    "Daily micro-lessons in Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills.",
  url: "https://uply.work",
  social: {
    linkedin: "https://www.linkedin.com/company/uply-skills/",
    twitter: "#", // TODO: Replace with actual Uply X/Twitter URL
  },
  email: {
    support: "support@uply.work",
    privacy: "privacy@uply.work",
  },
} as const;
