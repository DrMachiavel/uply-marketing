# SEO & GEO Guide for Uply Marketing Site

This guide is for AI agents and developers working on the Uply marketing site. It covers the SEO infrastructure, how to use it, and the checklist to follow when creating or modifying pages.

## Architecture Overview

```
src/lib/seo.tsx          ← Centralized SEO utilities (metadata builder, JSON-LD generators)
src/lib/constants.ts     ← Site config (name, URLs, social, email)
src/lib/faq-data.ts      ← FAQ data (shared between client components and server JSON-LD)
src/app/layout.tsx       ← Root metadata (title template, OG defaults, Twitter cards, hreflang, geo tags)
src/app/robots.ts        ← Robots.txt (env-aware)
src/app/sitemap.ts       ← Sitemap with priorities and change frequencies (env-aware)
next.config.ts           ← Security headers (HSTS, X-Frame-Options, etc.)
public/manifest.json     ← PWA manifest with theme colors and icons
```

## Key Principle: Environment-Aware Base URL

**Never hardcode `https://uply.work` in any file.** Always use:

```typescript
import { getBaseUrl } from "@/lib/seo";
const baseUrl = getBaseUrl(); // reads NEXT_PUBLIC_SITE_URL or falls back to SITE_CONFIG.url
```

This ensures staging/preview deployments work correctly.

## How to Add SEO to a New Page

### 1. Use `buildMetadata()` for page metadata

```typescript
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Title",           // Goes into title template: "Page Title | Uply"
  description: "150-160 chars describing the page for search results.",
  path: "/your-page-path",       // Used for canonical URL and hreflang
});
```

This automatically generates:
- Canonical URL
- `hreflang` (en + x-default)
- OpenGraph tags (title, description, url, siteName, locale)
- Twitter card (summary_large_image)

For dynamic pages with `generateMetadata`:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const data = getDataBySlug(slug);

  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/section/${slug}`,
    openGraph: {
      type: "article",
      publishedTime: data.date,
      authors: [data.author],
    },
  });
}
```

### 2. Add JSON-LD structured data

Import the relevant generator and `JsonLdScript` component:

```typescript
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/seo";

export default function MyPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Section", path: "/section" },
          { name: "Page", path: "/section/page" },
        ])}
      />
      {/* page content */}
    </>
  );
}
```

### 3. Add the page to the sitemap

Edit `src/app/sitemap.ts` and add an entry:

```typescript
{ url: `${baseUrl}/your-page`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
```

Priority guide:
- `1.0` — Homepage
- `0.9` — Core pages (features, pricing)
- `0.8` — Content hubs (blog listing, help listing)
- `0.7` — High-value content (blog posts, tools)
- `0.5-0.6` — Help articles, category pages
- `0.3-0.4` — Legal pages, security

## Available JSON-LD Generators

All generators are in `src/lib/seo.tsx`. Each returns a JSON-LD object ready for `JsonLdScript`.

| Generator | Use Case | Already Used On |
|-----------|----------|-----------------|
| `organizationJsonLd()` | Company info, logo, social links | Root layout |
| `softwareApplicationJsonLd()` | SaaS product schema | Root layout |
| `webSiteJsonLd()` | Site-level schema with search potential | Homepage |
| `articleJsonLd(post)` | Blog post with author, dates, publisher | Blog posts |
| `breadcrumbJsonLd(items)` | Breadcrumb trail for any page | All pages with nav |
| `faqJsonLd(items)` | FAQ accordion questions | Pricing page |
| `productJsonLd(offers)` | Product with pricing tiers | Pricing page |

### Adding a new JSON-LD generator

Add it to `src/lib/seo.tsx` following the existing pattern:

```typescript
export function mySchemaJsonLd(data: MyData) {
  return jsonLd({
    "@type": "MySchemaType",
    // ... fields
  });
}
```

## GEO Targeting Strategy

Uply targets **global English-speaking markets (US + EU)**. The current setup:

| Signal | Value | Location |
|--------|-------|----------|
| `<html lang="en">` | English site | `src/app/layout.tsx` |
| `hreflang="en"` | English version | Every page via `buildMetadata` |
| `hreflang="x-default"` | Default fallback | Every page via `buildMetadata` |
| `geo.region` | EU | Root layout `metadata.other` |
| `geo.placename` | Lille, France | Root layout `metadata.other` |
| OG locale | `en_US` | Root layout |

### If adding more languages later

1. Install `next-intl` or similar
2. Set up `/[locale]/` routing
3. Update `buildMetadata()` to accept `locale` param and generate per-locale hreflang alternates
4. Update `sitemap.ts` to generate entries for each locale
5. Update `robots.ts` sitemap URL

## Security Headers

Configured in `next.config.ts`, applied to all routes:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

These improve security posture and contribute indirectly to SEO (Google favors secure sites).

## SEO Checklist for New Pages

Use this checklist every time you create or modify a page:

- [ ] Use `buildMetadata()` with unique title (under 60 chars) and description (150-160 chars)
- [ ] Set the `path` parameter for canonical URL
- [ ] Add `BreadcrumbList` JSON-LD if the page has navigation hierarchy
- [ ] Add page-specific JSON-LD schema if applicable (Article, FAQ, Product, etc.)
- [ ] Add the page to `src/app/sitemap.ts` with appropriate priority and changeFrequency
- [ ] For dynamic pages: implement `generateStaticParams()` for SSG
- [ ] For dynamic pages: implement `generateMetadata()` with `buildMetadata()`
- [ ] Ensure `h1` tag matches the page title intent (one `h1` per page)
- [ ] Use semantic HTML (`article`, `nav`, `section`, `time`)
- [ ] Add `alt` text to all images
- [ ] Internal links use descriptive anchor text (not "click here")

## Content SEO Guidelines

### Blog Posts (MDX Frontmatter)

```yaml
---
title: "Your Post Title"          # Required — used in metadata and JSON-LD
date: "2026-03-18"                # Required — ISO format, used for publishedTime
excerpt: "150 chars summary..."   # Required — used as meta description
author: "Author Name"             # Required — used in Article schema
image: "/images/blog/post.jpg"    # Optional — used in Article schema and OG image
---
```

### Help Articles (MDX Frontmatter)

```yaml
---
title: "Article Title"            # Required — used in metadata
category: "getting-started"       # Required — must match a key in CATEGORIES
order: 1                          # Required — controls display order in category
---
```

The help article meta description is auto-generated from the first ~155 characters of content. Write the opening paragraph with search intent in mind.

## File Reference

| File | Purpose |
|------|---------|
| `src/lib/seo.tsx` | All SEO utilities — `getBaseUrl`, `buildMetadata`, JSON-LD generators, `JsonLdScript` |
| `src/lib/constants.ts` | `SITE_CONFIG` — name, URLs, social links, emails |
| `src/lib/faq-data.ts` | FAQ items — shared between server (JSON-LD) and client (accordion) |
| `src/app/layout.tsx` | Root metadata, Organization + SoftwareApplication JSON-LD, geo tags |
| `src/app/robots.ts` | Robots.txt generation |
| `src/app/sitemap.ts` | Sitemap generation with priorities |
| `next.config.ts` | Security headers |
| `public/manifest.json` | PWA manifest |
