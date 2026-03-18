import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { getBaseUrl, organizationJsonLd, softwareApplicationJsonLd, JsonLdScript } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: {
    default: "Uply — Soft skills training that lives in Slack",
    template: "%s | Uply",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      "en": baseUrl,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: "Uply — Soft skills training that lives in Slack",
    description: SITE_CONFIG.description,
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Uply — Soft skills training that lives in Slack",
    description: SITE_CONFIG.description,
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "EU",
    "geo.placename": "Lille, France",
    "ICBM": "50.6292, 3.0573",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-uply-dark font-sans antialiased">
        <JsonLdScript data={organizationJsonLd()} />
        <JsonLdScript data={softwareApplicationJsonLd()} />
        <Navbar />
        <main className="pt-[73px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
