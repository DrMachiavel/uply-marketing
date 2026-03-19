import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return generateOgImage({
      title: "Uply Blog",
      subtitle: "Insights on soft skills, leadership, and team development.",
      badge: "Blog",
    });
  }

  return generateOgImage({
    title: post.title,
    subtitle: post.excerpt,
    badge: "Blog",
  });
}
