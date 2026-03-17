import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/ui/blog-card";
import { getAllPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Blog | Uply",
  description:
    "Thoughts on leadership, soft skills, and building better teams. Insights from the Uply team on micro-learning, habit formation, and workplace culture.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Thoughts on leadership, soft skills, and building better teams
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Post grid */}
      <Section theme="light">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <FadeIn key={post.slug}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
