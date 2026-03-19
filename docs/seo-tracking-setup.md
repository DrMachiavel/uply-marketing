# SEO & Tracking Setup Guide

Step-by-step instructions for configuring analytics and search engine verification for the Uply marketing site.

## 1. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose the **URL prefix** method and enter `https://uply.work`.
4. Select the **HTML tag** verification method.
5. Copy the `content` value from the meta tag (the string inside `content="..."`).
6. Set it in your `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-string
   ```
7. Deploy the site.
8. Return to Search Console and click **Verify**.
9. Once verified, go to the **Sitemaps** section and submit `sitemap.xml`.

## 2. Google Analytics 4 Setup

1. Go to [Google Analytics](https://analytics.google.com).
2. Create a new **GA4 property** for uply.work.
3. In the property settings, find your **Measurement ID** (format: `G-XXXXXXX`).
4. Set it in your `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXX
   ```
5. Deploy the site -- analytics tracking starts automatically.

## 3. Plausible Setup (Alternative to GA4)

Plausible is a privacy-friendly, lightweight alternative to Google Analytics. It does not use cookies, so no cookie banner is needed for analytics compliance.

1. Sign up at [plausible.io](https://plausible.io).
2. Add your site domain (`uply.work`).
3. Set the env var in `.env.local`:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=uply.work
   ```
4. Deploy the site -- tracking starts automatically.
5. No cookie banner is required (GDPR-friendly by default).

> **Note:** You can use GA4 and Plausible simultaneously, or pick one. Both are supported by the Analytics component.

## 4. Verify Structured Data

1. Open the [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Test each page type:
   - Homepage (`https://uply.work`)
   - Blog posts (`https://uply.work/blog/...`)
   - Pricing page (`https://uply.work/pricing`)
3. Review and fix any warnings or errors.
4. Ensure Organization and SoftwareApplication JSON-LD are detected.

## 5. Monitor After Launch

- **Weekly:** Check Search Console for indexing status, crawl errors, and impressions/clicks.
- **Monthly:** Review the Core Web Vitals report in Search Console.
- **Set up email alerts** for crawl errors in Search Console (Settings > Email preferences).
- **Track key metrics** in your chosen analytics tool: page views, bounce rate, traffic sources, and conversion events.
