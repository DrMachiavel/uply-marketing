import fs from "fs";
import path from "path";
import matter from "gray-matter";

const HELP_DIR = path.join(process.cwd(), "src/content/help");

const CATEGORIES: Record<string, { name: string; description: string }> = {
  "getting-started": {
    name: "Getting Started",
    description: "Set up Uply in your Slack workspace",
  },
  "daily-lessons": {
    name: "Daily Lessons",
    description: "How questions and answers work",
  },
  scores: {
    name: "Scores & Leaderboard",
    description: "Scoring system and weekly rankings",
  },
  account: {
    name: "Account & Billing",
    description: "Manage your plan and billing",
  },
  "privacy-security": {
    name: "Privacy & Security",
    description: "Data handling and permissions",
  },
};

export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  order: number;
  content: string;
}

export interface HelpCategory {
  slug: string;
  name: string;
  description: string;
  articleCount: number;
}

export function getHelpCategories(): HelpCategory[] {
  return Object.entries(CATEGORIES).map(([slug, meta]) => {
    const categoryDir = path.join(HELP_DIR, slug);
    const files = fs.existsSync(categoryDir)
      ? fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"))
      : [];

    return {
      slug,
      name: meta.name,
      description: meta.description,
      articleCount: files.length,
    };
  });
}

export function getArticlesByCategory(category: string): HelpArticle[] {
  const categoryDir = path.join(HELP_DIR, category);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(categoryDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      category: data.category || category,
      order: data.order || 0,
      content,
    };
  });

  return articles.sort((a, b) => a.order - b.order);
}

export function getHelpArticle(
  category: string,
  slug: string
): HelpArticle | null {
  const filePath = path.join(HELP_DIR, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    category: data.category || category,
    order: data.order || 0,
    content,
  };
}

export function getCategoryName(slug: string): string | null {
  return CATEGORIES[slug]?.name || null;
}
