import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import {
  getHelpCategories,
  getArticlesByCategory,
  getHelpArticle,
  getCategoryName,
} from "@/lib/help";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const categories = getHelpCategories();

  return categories.flatMap((cat) => {
    const articles = getArticlesByCategory(cat.slug);
    return articles.map((article) => ({
      category: cat.slug,
      slug: article.slug,
    }));
  });
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getHelpArticle(category, slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} — Help Center`,
    description: `${article.title} — Uply Help Center`,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getHelpArticle(category, slug);
  const categoryName = getCategoryName(category);

  if (!article || !categoryName) {
    notFound();
  }

  return (
    <>
      <Section theme="dark">
        <FadeIn>
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/help" className="hover:text-white">
              Help Center
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/help/${category}`}
              className="hover:text-white"
            >
              {categoryName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{article.title}</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {article.title}
          </h1>
        </FadeIn>
      </Section>

      <Section theme="light">
        <article className="prose prose-lg prose-gray mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-uply-dark prose-a:text-uply-green-muted prose-a:no-underline hover:prose-a:underline prose-strong:text-uply-dark">
          <MDXRemote source={article.content} />
        </article>

        {/* Was this helpful */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-uply-gray">Was this article helpful?</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-uply-dark transition-colors hover:border-uply-green-muted hover:text-uply-green-muted"
            >
              Yes
            </button>
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-uply-dark transition-colors hover:border-uply-green-muted hover:text-uply-green-muted"
            >
              No
            </button>
          </div>
        </div>

        {/* Back to category */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <Link
            href={`/help/${category}`}
            className="text-sm font-medium text-uply-green-muted hover:underline"
          >
            &larr; Back to {categoryName}
          </Link>
        </div>
      </Section>
    </>
  );
}
