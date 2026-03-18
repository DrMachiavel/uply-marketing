import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Uply, the Slack-based soft skills and compliance training platform. Read our terms at uply.work.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
          </div>
        </FadeIn>
      </Section>

      {/* Content */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-gray prose-headings:font-bold prose-headings:text-uply-dark">
            {/* 1. Acceptance of Terms */}
            <h2>1. Acceptance of Terms</h2>
            <p>
              By installing, accessing, or using Uply (&quot;the Service&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;).
              These Terms constitute a legally binding agreement between you (and
              the organization you represent, if applicable) and ECOMMERCE RTM
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), the company that
              operates Uply. If you are agreeing to these Terms on behalf of an
              organization, you represent and warrant that you have the authority
              to bind that organization to these Terms. If you do not agree with
              any part of these Terms, you must not install or use the Service.
            </p>

            {/* 2. Description of Service */}
            <h2>2. Description of Service</h2>
            <p>
              Uply is a Slack-based application that delivers daily soft skills
              and compliance micro-lessons to teams. Each lesson takes
              approximately two minutes per day and is delivered directly within
              your Slack workspace. The Service includes daily questions,
              individual score tracking, streak tracking, weekly leaderboard
              summaries, and access to curated learning content across topics
              such as management, communication, cybersecurity, GDPR awareness,
              and workplace safety. Uply operates exclusively as a Slack
              application and requires an active Slack workspace to function.
            </p>

            {/* 3. Account & Workspace Requirements */}
            <h2>3. Account &amp; Workspace Requirements</h2>
            <p>
              To use Uply, you must have an active Slack workspace and sufficient
              administrative permissions to install third-party applications. You
              are responsible for maintaining the security of your Slack
              workspace and for all activity that occurs through the Uply
              application within your workspace. You must ensure that all users
              in your workspace who interact with Uply are aware that the
              Service is active and that their responses and scores will be
              collected and processed as described in our{" "}
              <a
                href="/privacy"
                className="text-uply-green-muted hover:underline"
              >
                Privacy Policy
              </a>
              . You must not install Uply in a workspace without appropriate
              authorization from the workspace owner or administrator.
            </p>

            {/* 4. Plans & Pricing */}
            <h2>4. Plans &amp; Pricing</h2>
            <p>
              Uply offers a free plan (&quot;Free&quot;) that is available at no
              cost, with no time limit. The Free plan includes core features such
              as daily questions and basic score tracking. We also offer a paid
              plan (&quot;Pro&quot;) with additional features, including advanced
              analytics, custom topic selection, and priority support. Pricing
              for the Pro plan is displayed on our website at{" "}
              <a
                href="https://uply.work"
                className="text-uply-green-muted hover:underline"
              >
                uply.work
              </a>{" "}
              and may be updated from time to time. Any price changes for
              existing Pro subscribers will be communicated at least 30 days in
              advance via email or Slack notification. Pro plan subscriptions are
              billed on a recurring basis (monthly or annually, as selected at
              the time of purchase). You may cancel your Pro subscription at any
              time, and access will continue until the end of the current billing
              period. Refunds are not provided for partial billing periods unless
              required by applicable law.
            </p>

            {/* 5. Acceptable Use Policy */}
            <h2>5. Acceptable Use Policy</h2>
            <p>
              You agree to use Uply only for its intended purpose of team
              learning and development. You must not: attempt to reverse
              engineer, decompile, or disassemble any part of the Service;
              use the Service to transmit any harmful, abusive, or unlawful
              content; interfere with or disrupt the integrity or performance of
              the Service; attempt to gain unauthorized access to any part of
              the Service or its related systems; use automated scripts, bots,
              or other tools to interact with the Service outside of its
              intended Slack-based interface; resell, sublicense, or redistribute
              the Service or any of its content without our prior written
              consent; or use the Service in any manner that violates applicable
              laws or regulations.
            </p>

            {/* 6. Intellectual Property */}
            <h2>6. Intellectual Property</h2>
            <p>
              All content delivered through Uply, including but not limited to
              questions, explanations, learning materials, graphics, branding,
              logos, and software, is the exclusive property of ECOMMERCE RTM or
              its licensors and is protected by applicable intellectual property
              laws. You are granted a limited, non-exclusive, non-transferable,
              revocable license to use the Service for its intended purpose
              within your Slack workspace. This license does not grant you any
              right to copy, modify, distribute, sell, or create derivative
              works based on our content. All rights not expressly granted in
              these Terms are reserved by ECOMMERCE RTM.
            </p>

            {/* 7. User-Generated Content */}
            <h2>7. User-Generated Content</h2>
            <p>
              When you use Uply, you submit responses to daily questions. These
              responses, along with derived scores and rankings, constitute
              user-generated content. You retain ownership of your individual
              responses. By using the Service, you grant ECOMMERCE RTM a
              worldwide, non-exclusive, royalty-free license to use, store,
              process, and aggregate your responses and scores for the purpose
              of operating, improving, and enhancing the Service. We may use
              anonymized and aggregated data derived from user responses for
              research, analytics, and product improvement. Such aggregated data
              will not identify you or any individual user.
            </p>

            {/* 8. Service Availability */}
            <h2>8. Service Availability</h2>
            <p>
              We strive to provide a reliable and consistent service. However,
              Uply is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. We do not guarantee uninterrupted,
              error-free, or secure access to the Service. The Service depends
              on third-party infrastructure, including Slack&apos;s platform,
              and may be affected by factors outside our control. For users on
              the Free plan, no uptime guarantee or service level agreement
              (SLA) is provided. Pro plan subscribers may be entitled to
              specific availability commitments as described in their
              subscription agreement. We reserve the right to perform scheduled
              maintenance, which may temporarily affect availability. We will
              make reasonable efforts to provide advance notice of planned
              downtime.
            </p>

            {/* 9. Limitation of Liability */}
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, ECOMMERCE RTM,
              its directors, employees, partners, and affiliates shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, business opportunities, or goodwill, arising out of or in
              connection with your use of or inability to use the Service. Our
              total aggregate liability for any claims arising from or related to
              these Terms or the Service shall not exceed the total amount of
              fees actually paid by you to ECOMMERCE RTM in the twelve (12)
              months immediately preceding the event giving rise to the claim.
              For users on the Free plan who have paid no fees, our maximum
              aggregate liability shall not exceed fifty euros (EUR 50). These
              limitations apply regardless of the theory of liability, whether
              based on contract, tort, negligence, strict liability, or
              otherwise.
            </p>

            {/* 10. Disclaimers */}
            <h2>10. Disclaimers</h2>
            <p>
              The content delivered through Uply, including soft skills and
              compliance training materials, is provided for general educational
              and informational purposes only. It does not constitute
              professional legal, financial, medical, or regulatory advice. You
              should not rely solely on Uply content for compliance with any
              legal or regulatory obligations. ECOMMERCE RTM disclaims all
              warranties, whether express, implied, or statutory, including but
              not limited to implied warranties of merchantability, fitness for
              a particular purpose, and non-infringement. We do not warrant that
              the Service will meet your specific requirements or expectations.
            </p>

            {/* 11. Termination */}
            <h2>11. Termination</h2>
            <p>
              Either party may terminate these Terms at any time. You may
              terminate by uninstalling Uply from your Slack workspace. We may
              terminate or suspend your access to the Service immediately,
              without prior notice, if you breach any provision of these Terms
              or if we reasonably believe that your use of the Service poses a
              risk to the Service, other users, or third parties. Upon
              termination, your right to use the Service ceases immediately. We
              will delete all of your personal data within thirty (30) days of
              termination, in accordance with our{" "}
              <a
                href="/privacy"
                className="text-uply-green-muted hover:underline"
              >
                Privacy Policy
              </a>
              . Provisions of these Terms that by their nature should survive
              termination shall survive, including but not limited to
              intellectual property rights, limitation of liability, disclaimers,
              and governing law.
            </p>

            {/* 12. Modifications to Terms */}
            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make
              material changes, we will notify you via a direct message through
              the Uply Slack application or by email at least thirty (30) days
              before the changes take effect. Your continued use of the Service
              after the effective date of any modifications constitutes your
              acceptance of the updated Terms. If you do not agree with the
              modified Terms, you must stop using the Service and uninstall Uply
              from your Slack workspace.
            </p>

            {/* 13. Governing Law & Jurisdiction */}
            <h2>13. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of France, without regard to its conflict of law
              provisions. Any disputes arising out of or in connection with
              these Terms or the Service shall be subject to the exclusive
              jurisdiction of the courts of Lille, France. Before initiating
              any legal proceedings, both parties agree to attempt to resolve
              any dispute through good-faith negotiation for a period of at
              least thirty (30) days.
            </p>

            {/* 14. Severability */}
            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid,
              unenforceable, or illegal by a court of competent jurisdiction,
              the remaining provisions shall continue in full force and effect.
              The invalid or unenforceable provision shall be modified to the
              minimum extent necessary to make it valid and enforceable while
              preserving its original intent.
            </p>

            {/* 15. Contact */}
            <h2>15. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <p>
              <strong>ECOMMERCE RTM</strong>
              <br />
              1 PL LEROUX DE FAUQUEMONT, 59000 LILLE, France
              <br />
              Siret: 87904454300012
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@uply.work"
                className="text-uply-green-muted hover:underline"
              >
                privacy@uply.work
              </a>
              <br />
              Website:{" "}
              <a
                href="https://uply.work"
                className="text-uply-green-muted hover:underline"
              >
                uply.work
              </a>
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
