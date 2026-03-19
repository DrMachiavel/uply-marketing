import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

function safePath(base: string, ...segments: string[]): string | null {
  const resolved = path.resolve(base, ...segments);
  if (!resolved.startsWith(path.resolve(base))) return null;
  return resolved;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image?: string;
  readingTime: string;
  content: string;
}

function parseMdxFile(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    image: data.image || undefined,
    readingTime: stats.text,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return parseMdxFile(slug, fileContent);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = safePath(CONTENT_DIR, `${slug}.mdx`);

  if (!filePath || !fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return parseMdxFile(slug, fileContent);
}

export function getRecentPosts(count: number, excludeSlug?: string): BlogPost[] {
  const posts = getAllPosts();
  const filtered = excludeSlug
    ? posts.filter((p) => p.slug !== excludeSlug)
    : posts;
  return filtered.slice(0, count);
}
