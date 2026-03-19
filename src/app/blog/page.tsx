import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/ui/blog-card";
import { getAllPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/ui/fade-in";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Thoughts on leadership, soft skills, and building better teams. Insights from the Uply team on micro-learning, habit formation, and workplace culture.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Blog
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-lg font-normal text-white/60">
              Insights on soft skills, microlearning, and building stronger teams with Slack
            </h2>
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
