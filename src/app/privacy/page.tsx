import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Uply collects, uses, and protects your data. GDPR-compliant privacy policy for uply.work.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
          </div>
        </FadeIn>
      </Section>

      {/* Content */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-gray prose-headings:font-bold prose-headings:text-uply-dark">
            {/* 1. Introduction */}
            <h2>1. Introduction</h2>
            <p>
              ECOMMERCE RTM (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              operates Uply, accessible at{" "}
              <a
                href="https://uply.work"
                className="text-uply-green-muted hover:underline"
              >
                uply.work
              </a>
              . This Privacy Policy explains how we collect, use, store, and
              protect your personal data when you use our service. By installing
              and using Uply, you agree to the practices described in this
              policy. We are committed to protecting your privacy and ensuring
              that your personal information is handled responsibly and in
              compliance with applicable data protection laws, including the
              General Data Protection Regulation (GDPR).
            </p>

            {/* 2. Data We Collect */}
            <h2>2. Data We Collect</h2>
            <p>
              To provide our service, we collect and process the following
              categories of personal data: Slack workspace information (including
              workspace name and workspace ID), user profile information
              (including display names and Slack user IDs), your responses to
              daily questions delivered through Uply, and aggregated scores and
              rankings derived from your participation. We collect this data
              directly through your interaction with the Uply Slack application.
              We do not collect data from any other source or through any
              third-party data brokers.
            </p>

            {/* 3. Data We Do NOT Collect */}
            <h2>3. Data We Do NOT Collect</h2>
            <p>
              We want to be clear about the boundaries of our data collection.
              Uply does not access, read, or store your Slack messages, whether
              in public channels, private channels, or direct messages. We do
              not access or store files shared in your Slack workspace. We do not
              monitor or record private conversations of any kind. Our
              application is designed with the principle of least privilege,
              requesting only the minimum Slack permissions necessary to deliver
              daily questions, collect your responses, and post leaderboard
              summaries to designated channels.
            </p>

            {/* 4. How We Use Your Data */}
            <h2>4. How We Use Your Data</h2>
            <p>
              We use the data we collect for the following purposes: to deliver
              daily soft skills questions to you via Slack, to calculate and
              track your individual scores and streaks, to generate weekly
              leaderboard rankings for your workspace, and to improve and refine
              the quality of our question content and learning experience. We do
              not use your data for advertising, profiling, or any purpose
              unrelated to the delivery and improvement of the Uply service. We
              do not use automated decision-making or profiling that produces
              legal or similarly significant effects on you.
            </p>

            {/* 5. Data Storage & Security */}
            <h2>5. Data Storage &amp; Security</h2>
            <p>
              All data is stored securely in data centers located within the
              European Union. We implement industry-standard security measures to
              protect your data, including encryption of data in transit using
              TLS and encryption of data at rest. Access to personal data is
              restricted to authorized personnel who require it to operate and
              maintain the service. We conduct regular security reviews and
              follow best practices for application security. In the unlikely
              event of a data breach, we will notify affected users and relevant
              authorities within the timeframes required by applicable law.
            </p>

            {/* 6. Third-Party Services */}
            <h2>6. Third-Party Services</h2>
            <p>
              Uply integrates with the Slack API, which is required for the
              delivery of our service. When you use Uply, data is transmitted
              between our servers and Slack&apos;s infrastructure in accordance
              with Slack&apos;s own privacy policy and terms of service. Beyond
              Slack, we use standard infrastructure providers for hosting and
              data storage, all of which are GDPR-compliant and located within
              the EU. We do not sell, rent, or share your personal data with
              third parties for their own marketing or commercial purposes. We do
              not engage in data brokering of any kind.
            </p>

            {/* 7. Your Rights (GDPR) */}
            <h2>7. Your Rights (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation, you have the
              following rights regarding your personal data: the right to access
              your data and obtain a copy of the personal information we hold
              about you; the right to rectification, allowing you to request
              correction of any inaccurate or incomplete data; the right to
              erasure (&quot;right to be forgotten&quot;), enabling you to
              request deletion of your personal data; the right to restriction of
              processing in certain circumstances; the right to data portability,
              allowing you to receive your data in a structured, commonly used,
              machine-readable format; and the right to object to processing of
              your personal data. To exercise any of these rights, please contact
              us at{" "}
              <a
                href="mailto:privacy@uply.work"
                className="text-uply-green-muted hover:underline"
              >
                privacy@uply.work
              </a>
              . We will respond to your request within 30 days.
            </p>

            {/* 8. Cookies */}
            <h2>8. Cookies</h2>
            <p>
              Our website at uply.work uses cookies to ensure the proper
              functioning of the site and to improve your experience. We
              categorize cookies as follows:
            </p>
            <p>
              <strong>Essential cookies</strong> — These cookies are strictly
              necessary for the website to function (e.g., session management,
              security tokens, cookie consent preferences). They cannot be
              disabled and do not require your consent under EU regulations.
            </p>
            <p>
              <strong>Analytics cookies</strong> — We may use anonymous,
              privacy-friendly analytics to understand how visitors use our
              website (e.g., pages visited, time on site). These cookies do not
              track you across other websites, do not collect personally
              identifiable information, and are only activated with your
              explicit consent.
            </p>
            <p>
              We do not use advertising cookies, retargeting cookies, or any
              cookies from third-party ad networks. You can manage your cookie
              preferences at any time via the cookie banner displayed on our
              website. If you decline optional cookies, only essential cookies
              will be used, and your experience on the site will not be
              affected.
            </p>

            {/* 9. Data Retention */}
            <h2>9. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active
              and the Uply application is installed in your Slack workspace. If
              you cancel your subscription or remove the Uply application, we
              will delete all of your personal data within 30 days of account
              closure. Aggregated, anonymized data that cannot be used to
              identify you may be retained indefinitely for the purpose of
              improving our service. If you request erasure of your data under
              your GDPR rights, we will process the deletion within 30 days of
              receiving your request.
            </p>

            {/* 10. Changes to This Policy */}
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. If we
              make material changes to this policy, we will notify you via a
              direct message through the Uply Slack application before the
              changes take effect. We encourage you to review this policy
              periodically. The &quot;Last updated&quot; date at the bottom of
              this page indicates when the policy was most recently revised. Your
              continued use of Uply after any changes constitutes acceptance of
              the updated policy.
            </p>

            {/* 11. Contact */}
            <h2>11. Contact</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <p>
              <strong>ECOMMERCE RTM</strong>
              <br />
              1 PL LEROUX DE FAUQUEMONT, 59000 LILLE, France
              <br />
              SIRET: 87904454300012
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@uply.work"
                className="text-uply-green-muted hover:underline"
              >
                privacy@uply.work
              </a>
            </p>
            <p>
              If you believe that your data protection rights have not been
              adequately addressed, you have the right to lodge a complaint with
              your local supervisory authority.
            </p>
          </div>

          {/* Footer note */}
          <div className="mt-16 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-uply-gray">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
