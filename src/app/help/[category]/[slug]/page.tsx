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
import { buildMetadata, breadcrumbJsonLd, howToJsonLd, JsonLdScript } from "@/lib/seo";
import { mdxComponents } from "@/lib/mdx-components";

// HowTo structured data for getting-started guides
const HOWTO_DATA: Record<string, { description: string; steps: { name: string; text: string }[] }> = {
  "getting-started/install-slack": {
    description: "Install the Uply soft skills training app in your Slack workspace in under a minute.",
    steps: [
      { name: "Visit uply.work", text: "Go to uply.work and click 'Get started free' to begin the installation." },
      { name: "Authorize in Slack", text: "Choose your Slack workspace on the authorization page and approve the minimal permissions." },
      { name: "Start using Uply", text: "Uply appears in your Slack sidebar under Apps. You'll receive a welcome message to choose your first topic." },
    ],
  },
  "getting-started/invite-team": {
    description: "Invite your team members to start using Uply for daily soft skills training in Slack.",
    steps: [
      { name: "Share the Uply app link", text: "Share the Uply app link in any Slack channel or mention @Uply where your team is present." },
      { name: "Use the dashboard", text: "Invite people from the Uply dashboard by entering their Slack usernames or email addresses." },
      { name: "Team members auto-setup", text: "Each person who interacts with Uply for the first time is automatically set up with their own account." },
    ],
  },
  "getting-started/choose-topics": {
    description: "Choose a soft skills topic for your Uply daily training in Slack.",
    steps: [
      { name: "Open Uply in Slack", text: "When you first interact with Uply, you'll be asked to choose a topic." },
      { name: "Pick a topic", text: "Choose from topics like Leadership, Communication, Conflict Resolution, or Emotional Intelligence." },
      { name: "Start learning", text: "Uply delivers daily questions tailored to your chosen topic. Switch topics anytime from the app home screen." },
    ],
  },
};

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

  // Extract first ~160 chars of content for a real description
  const plainText = article.content
    .replace(/[#*`\[\]()>_~-]/g, "")
    .replace(/\n+/g, " ")
    .trim();
  const description =
    plainText.length > 155
      ? `${plainText.slice(0, 155)}...`
      : plainText;

  return buildMetadata({
    title: `${article.title} -  Help Center`,
    description: description || `${article.title} -  Uply Help Center`,
    path: `/help/${category}/${slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getHelpArticle(category, slug);
  const categoryName = getCategoryName(category);

  if (!article || !categoryName) {
    notFound();
  }

  const howToKey = `${category}/${slug}`;
  const howTo = HOWTO_DATA[howToKey];

  return (
    <>
      {howTo && (
        <JsonLdScript
          data={howToJsonLd({
            name: article.title,
            description: howTo.description,
            steps: howTo.steps,
          })}
        />
      )}
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Help Center", path: "/help" },
          { name: categoryName, path: `/help/${category}` },
          { name: article.title, path: `/help/${category}/${slug}` },
        ])}
      />

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
          <MDXRemote source={article.content} components={mdxComponents} />
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
