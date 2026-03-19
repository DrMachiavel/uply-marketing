import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

// ---------------------------------------------------------------------------
// Base URL -  environment-aware, used everywhere instead of hardcoded domain
// ---------------------------------------------------------------------------

export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;
}

// ---------------------------------------------------------------------------
// Metadata builder -  merges SEO defaults so every page gets OG, Twitter,
// canonical, and alternates (hreflang) automatically
// ---------------------------------------------------------------------------

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  openGraph?: Partial<Metadata["openGraph"]>;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  openGraph,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

// ---------------------------------------------------------------------------
// JSON-LD generators -  structured data for rich results
// ---------------------------------------------------------------------------

export function jsonLd(data: Record<string, unknown>): Record<string, unknown> {
  return { "@context": "https://schema.org", ...data };
}

/** Organization -  used in root layout */
export function organizationJsonLd() {
  const baseUrl = getBaseUrl();
  return jsonLd({
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo/uply-icon.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.email.support,
      contactType: "customer service",
    },
    sameAs: [SITE_CONFIG.social.linkedin].filter(Boolean),
  });
}

/** WebSite -  used on homepage for sitelinks search box potential */
export function webSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return jsonLd({
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: baseUrl,
    description: SITE_CONFIG.description,
    publisher: { "@type": "Organization", name: SITE_CONFIG.name },
  });
}

/** SoftwareApplication -  product schema for the Slack app */
export function softwareApplicationJsonLd() {
  return jsonLd({
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SITE_CONFIG.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan -  up to 5 users, 1 topic",
    },
  });
}

/** Article -  for blog posts */
export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}) {
  const baseUrl = getBaseUrl();
  return jsonLd({
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/logo/uply-icon.png` },
    },
    url: `${baseUrl}/blog/${post.slug}`,
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    ...(post.image && { image: post.image }),
  });
}

/** BreadcrumbList -  for any page with a breadcrumb trail */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  const baseUrl = getBaseUrl();
  return jsonLd({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  });
}

/** FAQPage -  for pages with FAQ accordions */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return jsonLd({
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}

/** Product with offers -  for pricing page */
export function productJsonLd(offers: { name: string; price: string; description: string }[]) {
  return jsonLd({
    "@type": "Product",
    name: `${SITE_CONFIG.name} -  Soft Skills Training`,
    description: SITE_CONFIG.description,
    brand: { "@type": "Organization", name: SITE_CONFIG.name },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: "USD",
      description: offer.description,
      availability: "https://schema.org/InStock",
    })),
  });
}

/** HowTo -  for step-by-step guide articles */
export function howToJsonLd(guide: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return jsonLd({
    "@type": "HowTo",
    name: guide.name,
    description: guide.description,
    step: guide.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  });
}

// ---------------------------------------------------------------------------
// Helper -  renders a JSON-LD script tag (use in page components)
// ---------------------------------------------------------------------------

export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
