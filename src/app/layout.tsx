import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Uply — Soft skills training that lives in Slack",
    template: "%s | Uply",
  },
  description:
    "Daily micro-lessons in Slack. 2 minutes a day, weekly leaderboards, and measurable growth in leadership, collaboration, and communication skills.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://uply.work"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Uply",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uply",
              url: "https://uply.work",
              description: "Soft skills training that lives in Slack",
            }),
          }}
        />
        <Navbar />
        <main className="pt-[73px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
