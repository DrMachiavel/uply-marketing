import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Data Processing Agreement",
  description:
    "Data Processing Agreement (DPA) for Uply. GDPR-compliant data processing terms for businesses using uply.work.",
  path: "/dpa",
});

export default function DataProcessingAgreementPage() {
  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Data Processing Agreement
            </h1>
          </div>
        </FadeIn>
      </Section>

      {/* Content */}
      <Section theme="light">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-gray prose-headings:font-bold prose-headings:text-uply-dark">
            {/* Preamble */}
            <p>
              This Data Processing Agreement (&quot;DPA&quot;) forms part of the
              agreement between the entity that has agreed to the Uply Terms of
              Service (&quot;Controller&quot;, &quot;you&quot;, &quot;your&quot;)
              and ECOMMERCE RTM (&quot;Processor&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;), governing the processing of
              personal data by the Processor on behalf of the Controller in
              connection with the Uply service. This DPA is entered into in
              accordance with Article 28 of the General Data Protection
              Regulation (EU) 2016/679 (&quot;GDPR&quot;).
            </p>

            {/* 1. Definitions */}
            <h2>1. Definitions</h2>
            <p>
              For the purposes of this DPA, the following definitions apply:
            </p>
            <p>
              <strong>&quot;Controller&quot;</strong> means the natural or legal
              person, public authority, agency, or other body which, alone or
              jointly with others, determines the purposes and means of the
              processing of personal data. In the context of this DPA, the
              Controller is the entity that has installed Uply in its Slack
              workspace.
            </p>
            <p>
              <strong>&quot;Processor&quot;</strong> means ECOMMERCE RTM, which
              processes personal data on behalf of the Controller in connection
              with the provision of the Uply service.
            </p>
            <p>
              <strong>&quot;Sub-processor&quot;</strong> means any third party
              engaged by the Processor to assist in the processing of personal
              data on behalf of the Controller.
            </p>
            <p>
              <strong>&quot;Personal Data&quot;</strong> means any information
              relating to an identified or identifiable natural person, as
              defined in Article 4(1) of the GDPR.
            </p>
            <p>
              <strong>&quot;Processing&quot;</strong> means any operation or set
              of operations performed on personal data, whether or not by
              automated means, including collection, recording, organization,
              structuring, storage, adaptation, alteration, retrieval,
              consultation, use, disclosure by transmission, dissemination,
              alignment, combination, restriction, erasure, or destruction.
            </p>
            <p>
              <strong>&quot;Data Breach&quot;</strong> means a breach of security
              leading to the accidental or unlawful destruction, loss,
              alteration, unauthorized disclosure of, or access to, personal
              data transmitted, stored, or otherwise processed.
            </p>
            <p>
              <strong>&quot;Data Subject&quot;</strong> means the identified or
              identifiable natural person to whom the personal data relates.
            </p>

            {/* 2. Scope & Purpose of Processing */}
            <h2>2. Scope &amp; Purpose of Processing</h2>
            <p>
              The Processor processes personal data solely for the purpose of
              providing the Uply service to the Controller, as described in the
              Terms of Service and Privacy Policy. The categories of personal
              data processed include: Slack workspace information (workspace
              name and workspace ID), user profile information (display names
              and Slack user IDs), user responses to daily questions delivered
              through Uply, and aggregated scores and rankings derived from
              user participation. The categories of data subjects include
              employees, contractors, and other individuals within the
              Controller&apos;s Slack workspace who interact with the Uply
              application. The processing activities include: collection and
              storage of the above data, delivery of daily questions via Slack,
              calculation of individual scores and streaks, generation of
              leaderboard rankings, and analytics related to usage patterns and
              content effectiveness.
            </p>

            {/* 3. Obligations of the Processor */}
            <h2>3. Obligations of the Processor</h2>
            <p>
              The Processor shall: process personal data only on documented
              instructions from the Controller, unless required to do so by
              European Union or Member State law to which the Processor is
              subject, in which case the Processor shall inform the Controller
              of that legal requirement before processing unless prohibited by
              law; ensure that persons authorized to process the personal data
              have committed themselves to confidentiality or are under an
              appropriate statutory obligation of confidentiality; implement
              appropriate technical and organizational measures to ensure a
              level of security appropriate to the risk, as described in
              Section 6 of this DPA; respect the conditions for engaging
              sub-processors as set out in Section 5 of this DPA; taking into
              account the nature of the processing, assist the Controller by
              appropriate technical and organizational measures for the
              fulfillment of the Controller&apos;s obligation to respond to
              requests for exercising data subject rights; assist the Controller
              in ensuring compliance with the obligations pursuant to Articles
              32 to 36 of the GDPR, taking into account the nature of
              processing and the information available to the Processor; at the
              choice of the Controller, delete or return all personal data to
              the Controller after the end of the provision of services, and
              delete existing copies unless storage is required by applicable
              law; and make available to the Controller all information necessary
              to demonstrate compliance with the obligations laid down in
              Article 28 of the GDPR.
            </p>

            {/* 4. Instructions from the Controller */}
            <h2>4. Instructions from the Controller</h2>
            <p>
              The Processor shall process personal data only in accordance with
              the Controller&apos;s documented instructions. The Controller&apos;s
              initial instructions are defined by the scope of this DPA, the
              Terms of Service, and the Privacy Policy. Additional or modified
              instructions may be provided by the Controller in writing (including
              by email) and must be reasonable and consistent with the nature
              of the Service. If the Processor believes that an instruction from
              the Controller infringes the GDPR or other applicable data
              protection provisions, the Processor shall immediately inform the
              Controller. The Processor shall not be liable for any non-compliance
              resulting from following the Controller&apos;s lawful instructions.
            </p>

            {/* 5. Sub-processors */}
            <h2>5. Sub-processors</h2>
            <p>
              The Controller provides general authorization for the Processor to
              engage sub-processors to assist in the provision of the Service.
              The Processor shall inform the Controller of any intended changes
              concerning the addition or replacement of sub-processors, giving
              the Controller the opportunity to object to such changes within
              thirty (30) days. If the Controller objects on reasonable grounds,
              the parties shall discuss the objection in good faith. If no
              resolution can be reached, the Controller may terminate the
              agreement. The Processor shall ensure that each sub-processor is
              bound by data protection obligations no less protective than those
              set out in this DPA. The Processor remains fully liable for the
              acts and omissions of its sub-processors.
            </p>
            <p>
              As of the date of this DPA, the Processor uses the following
              sub-processors:
            </p>
            <ul>
              <li>
                <strong>Replit, Inc.</strong> &mdash; Application hosting and
                infrastructure. Data processed: all personal data described in
                Section 2. Location: United States (with appropriate safeguards
                in place, including Standard Contractual Clauses).
              </li>
              <li>
                <strong>Slack Technologies (Salesforce, Inc.)</strong> &mdash;
                Delivery of questions and collection of responses via the Slack
                API. Data processed: Slack workspace information, user IDs,
                display names, message interactions. Location: data processed
                in accordance with Slack&apos;s data processing terms.
              </li>
            </ul>

            {/* 6. Data Security Measures */}
            <h2>6. Data Security Measures</h2>
            <p>
              The Processor implements and maintains the following technical and
              organizational security measures to protect personal data:
              encryption of data at rest using AES-256 or equivalent standard;
              encryption of data in transit using TLS 1.2 or higher; strict
              access controls based on the principle of least privilege, ensuring
              that only authorized personnel with a legitimate need can access
              personal data; role-based access control (RBAC) for internal
              systems; regular security reviews and assessments of infrastructure
              and application security; secure software development practices;
              logging and monitoring of access to systems containing personal
              data; and incident response procedures designed to detect, report,
              and investigate data breaches promptly. The Processor shall
              regularly review and update these measures to ensure they remain
              appropriate to the risks posed by the processing.
            </p>

            {/* 7. Data Breach Notification */}
            <h2>7. Data Breach Notification</h2>
            <p>
              In the event of a Data Breach affecting personal data processed on
              behalf of the Controller, the Processor shall notify the Controller
              without undue delay and in any event within seventy-two (72) hours
              of becoming aware of the breach. The notification shall include:
              a description of the nature of the breach, including where possible
              the categories and approximate number of data subjects and personal
              data records concerned; the name and contact details of the
              Processor&apos;s point of contact for further information; a
              description of the likely consequences of the breach; and a
              description of the measures taken or proposed to be taken to
              address the breach, including measures to mitigate its possible
              adverse effects. The Processor shall cooperate with the Controller
              and take all reasonable steps to assist in the investigation,
              mitigation, and remediation of any Data Breach.
            </p>

            {/* 8. Data Subject Rights */}
            <h2>8. Data Subject Rights</h2>
            <p>
              The Processor shall assist the Controller in fulfilling its
              obligations to respond to requests from data subjects exercising
              their rights under the GDPR, including the right of access, right
              to rectification, right to erasure, right to restriction of
              processing, right to data portability, and right to object. If the
              Processor receives a request directly from a data subject, the
              Processor shall promptly forward the request to the Controller and
              shall not respond to the request directly unless authorized to do
              so by the Controller. The Processor shall provide reasonable
              technical and organizational assistance to enable the Controller
              to respond to data subject requests within the timeframes required
              by the GDPR.
            </p>

            {/* 9. Data Transfers */}
            <h2>9. Data Transfers</h2>
            <p>
              Personal data may be transferred to and processed in the United
              States through the Processor&apos;s sub-processors (Replit and
              Slack). The Processor ensures that appropriate safeguards are in
              place for all international data transfers in accordance with
              Chapter V of the GDPR, including Standard Contractual Clauses
              approved by the European Commission. The Processor shall notify
              the Controller in advance of any changes to the locations where
              personal data is processed. The Processor shall not transfer
              personal data to any additional country or territory outside the
              European Economic Area (EEA) without the prior written consent of
              the Controller and without ensuring appropriate safeguards are in
              place.
            </p>

            {/* 10. Audit Rights */}
            <h2>10. Audit Rights</h2>
            <p>
              The Processor shall make available to the Controller all
              information reasonably necessary to demonstrate compliance with the
              obligations set out in this DPA and Article 28 of the GDPR. The
              Controller (or an independent third-party auditor mandated by the
              Controller) shall have the right to conduct audits and inspections
              of the Processor&apos;s processing activities and facilities,
              subject to the following conditions: the Controller shall provide
              at least thirty (30) days&apos; prior written notice of any
              intended audit; audits shall be conducted during normal business
              hours and shall not unreasonably disrupt the Processor&apos;s
              operations; the Controller shall bear the costs of the audit
              unless the audit reveals a material breach of this DPA by the
              Processor; any third-party auditor must be bound by appropriate
              confidentiality obligations; and audits shall not be conducted
              more than once per year unless required by a supervisory authority
              or following a Data Breach.
            </p>

            {/* 11. Duration & Termination */}
            <h2>11. Duration &amp; Termination</h2>
            <p>
              This DPA shall remain in effect for as long as the Processor
              processes personal data on behalf of the Controller in connection
              with the Uply service. Upon termination of the Service agreement
              (whether by uninstallation of the Uply application, expiration, or
              otherwise), the Processor shall, at the Controller&apos;s choice,
              delete or return all personal data within thirty (30) days of
              termination. The Processor shall provide written confirmation of
              deletion upon request. Notwithstanding the foregoing, the Processor
              may retain personal data to the extent required by applicable law,
              provided that such retained data continues to be protected in
              accordance with this DPA. The obligations of the Processor under
              this DPA shall survive termination to the extent necessary to
              protect any personal data that is retained.
            </p>

            {/* 12. Liability */}
            <h2>12. Liability</h2>
            <p>
              Each party&apos;s liability under this DPA is subject to the
              limitations and exclusions of liability set out in the Terms of
              Service, except where such limitations are prohibited by the GDPR
              or other applicable data protection law. Nothing in this DPA shall
              limit either party&apos;s liability for breaches of its
              obligations under the GDPR to the extent that such limitations are
              not permitted by applicable law.
            </p>

            {/* 13. Governing Law */}
            <h2>13. Governing Law</h2>
            <p>
              This DPA shall be governed by and construed in accordance with the
              laws of France, without regard to its conflict of law provisions.
              Any disputes arising out of or in connection with this DPA shall
              be subject to the exclusive jurisdiction of the courts of Lille,
              France.
            </p>

            {/* 14. Contact */}
            <h2>14. Contact</h2>
            <p>
              For any questions or requests related to this Data Processing
              Agreement or the processing of personal data, please contact us:
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
