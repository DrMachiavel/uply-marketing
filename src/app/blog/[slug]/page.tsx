import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/ui/blog-card";
import { CTASection } from "@/components/sections/cta-section";
import { FadeIn } from "@/components/ui/fade-in";
import { getAllPosts, getPostBySlug, getRecentPosts } from "@/lib/mdx";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Uply" };
  }

  return {
    title: `${post.title} | Uply Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(3, slug);

  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-white/50">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/50">By {post.author}</p>
          </div>
        </FadeIn>
      </Section>

      {/* Content */}
      <Section theme="light">
        <article className="prose prose-lg prose-gray mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-uply-dark prose-a:text-uply-green prose-a:no-underline hover:prose-a:underline prose-strong:text-uply-dark">
          <MDXRemote source={post.content} />
        </article>

        {/* Author bio */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-200 pt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-uply-green/10 text-lg font-bold text-uply-green">
              U
            </div>
            <div>
              <p className="font-semibold text-uply-dark">{post.author}</p>
              <p className="text-sm text-uply-gray">
                Building the future of soft skills training at Uply.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <Section theme="green-wash">
          <FadeIn>
            <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
              Read more
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((recentPost) => (
                <BlogCard key={recentPost.slug} post={recentPost} />
              ))}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}
