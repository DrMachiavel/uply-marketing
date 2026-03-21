import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getHelpCategories, getArticlesByCategory } from "@/lib/help";
import { getAllTerms } from "@/content/glossary";
import { getAllGuides } from "@/content/guides";
import { comparisons } from "@/content/comparisons";
import { alternatives } from "@/content/alternatives";
import { audiences } from "@/content/audiences";
import { useCases } from "@/content/use-cases";
import { getAllSkills } from "@/content/skills";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  // Blog posts -  use actual publication dates
  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Help articles -  grouped by category
  const categories = getHelpCategories();
  const helpUrls = categories.flatMap((cat) => {
    const articles = getArticlesByCategory(cat.slug);
    return [
      {
        url: `${baseUrl}/help/${cat.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      ...articles.map((article) => ({
        url: `${baseUrl}/help/${cat.slug}/${article.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ];
  });

  return [
    // Core pages -  highest priority
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Content hubs
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/help`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Referral
    { url: `${baseUrl}/refer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Tools -  high-value landing pages
    { url: `${baseUrl}/tools/growth-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/turnover-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Comparison pages -  high conversion intent
    ...comparisons.map((c) => ({
      url: `${baseUrl}/compare/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Alternatives pages -  high conversion intent
    ...alternatives.map((a) => ({
      url: `${baseUrl}/alternatives/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Audience pages
    ...audiences.map((a) => ({
      url: `${baseUrl}/for/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Use-case pages
    ...useCases.map((u) => ({
      url: `${baseUrl}/use-cases/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Skill pages
    ...getAllSkills().map((s) => ({
      url: `${baseUrl}/skills/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Glossary
    ...getAllTerms().map((term) => ({
      url: `${baseUrl}/glossary/${term.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Guides
    ...getAllGuides().map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Legal pages
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/dpa`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/security`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },

    // Dynamic content
    ...blogUrls,
    ...helpUrls,
  ];
}
