import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import {
  getHelpCategories,
  getArticlesByCategory,
  getCategoryName,
} from "@/lib/help";
import { buildMetadata, breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  const categories = getHelpCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const name = getCategoryName(category);

  if (!name) {
    return { title: "Category Not Found" };
  }

  return buildMetadata({
    title: `${name} -  Help Center`,
    description: `Learn about ${name.toLowerCase()} in Uply. Step-by-step guides and answers to common questions.`,
    path: `/help/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const name = getCategoryName(category);

  if (!name) {
    notFound();
  }

  const articles = getArticlesByCategory(category);

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Help Center", path: "/help" },
          { name, path: `/help/${category}` },
        ])}
      />

      <Section theme="dark">
        <FadeIn>
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/help" className="hover:text-white">
              Help Center
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{name}</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {name}
          </h1>
        </FadeIn>
      </Section>

      <Section theme="light">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            {articles.length === 0 ? (
              <p className="text-uply-gray">
                No articles in this category yet.
              </p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/help/${category}/${article.slug}`}
                      className="block py-4 transition-colors hover:text-uply-green-muted"
                    >
                      <span className="text-lg font-medium">
                        {article.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
