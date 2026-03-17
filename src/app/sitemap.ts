import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getHelpCategories, getArticlesByCategory } from "@/lib/help";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `https://uply.work/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const categories = getHelpCategories();
  const helpUrls = categories.flatMap((cat) => {
    const articles = getArticlesByCategory(cat.slug);
    return [
      { url: `https://uply.work/help/${cat.slug}`, lastModified: new Date() },
      ...articles.map((article) => ({
        url: `https://uply.work/help/${cat.slug}/${article.slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return [
    { url: "https://uply.work", lastModified: new Date() },
    { url: "https://uply.work/features", lastModified: new Date() },
    { url: "https://uply.work/pricing", lastModified: new Date() },
    { url: "https://uply.work/blog", lastModified: new Date() },
    { url: "https://uply.work/help", lastModified: new Date() },
    { url: "https://uply.work/privacy", lastModified: new Date() },
    ...blogUrls,
    ...helpUrls,
  ];
}
