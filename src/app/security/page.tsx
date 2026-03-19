import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Shield,
  Lock,
  Server,
  Eye,
  Trash2,
  FileText,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Security",
  description:
    "How Uply keeps your Slack workspace data safe. EU-hosted, encrypted, GDPR-compliant. Minimal Slack permissions, no message access.",
  path: "/security",
});

const securityCards = [
  {
    icon: Server,
    title: "Secure Data Hosting",
    description:
      "Your data is hosted on Replit (US-based) and processed via the Slack API. We use HTTPS encryption in transit, encrypt data at rest, and maintain strict access controls. Appropriate safeguards including Standard Contractual Clauses are in place for international data transfers in compliance with GDPR.",
  },
  {
    icon: Eye,
    title: "Minimal Slack Permissions",
    description:
      "Uply follows the principle of least privilege. We request only the minimum Slack permissions needed to deliver questions and collect responses. We never read your Slack messages, access private channels, or view shared files.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. Every connection between your Slack workspace and our servers is secured. Authentication is handled through Slack's OAuth 2.0 protocol.",
  },
  {
    icon: Shield,
    title: "Access Controls",
    description:
      "We enforce role-based access control (RBAC) and the principle of least privilege across all internal systems. Only authorized personnel with a legitimate operational need can access personal data, and all access is logged and monitored.",
  },
  {
    icon: Trash2,
    title: "Data Retention & Deletion",
    description:
      "When you uninstall Uply or request data deletion, all personal data is permanently removed within 30 days. We do not retain data beyond what is necessary to provide the service. You are always in control of your data.",
  },
  {
    icon: FileText,
    title: "GDPR Compliance",
    description:
      "Uply is built with GDPR compliance at its core. We support all data subject rights including access, rectification, erasure, portability, and objection. A Data Processing Agreement (DPA) is available for all customers.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "We maintain a formal incident response process. In the event of a data breach, we will notify affected customers within 72 hours, in full compliance with GDPR requirements. Our team continuously monitors for security threats.",
  },
  {
    icon: Mail,
    title: "Responsible Disclosure",
    description:
      "We welcome responsible security research. If you discover a potential vulnerability, please report it to security@uply.work. We commit to acknowledging reports promptly and working with researchers to address any confirmed issues.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Header */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Security at Uply
            </h1>
            <p className="mt-6 text-lg text-uply-gray md:text-xl">
              Protecting your data is not an afterthought — it is foundational
              to everything we build. Uply is designed from the ground up with
              security, privacy, and compliance at its core.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Security Cards */}
      <Section theme="light">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {securityCards.map((card) => (
              <FadeIn key={card.title}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-uply-green-wash">
                    <card.icon className="h-6 w-6 text-uply-green" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-uply-dark">
                    {card.title}
                  </h3>
                  <p className="leading-relaxed text-uply-gray">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA / Resources */}
      <Section theme="green-wash">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              Need more details?
            </h2>
            <p className="mt-4 text-lg text-uply-gray">
              Review our legal and compliance documentation for full details on
              how we handle your data.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/dpa"
                className="inline-flex items-center rounded-full bg-uply-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-uply-green/90"
              >
                <FileText className="mr-2 h-4 w-4" />
                Data Processing Agreement
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center rounded-full border border-uply-dark bg-white px-6 py-3 text-sm font-semibold text-uply-dark transition-colors hover:bg-gray-50"
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacy Policy
              </a>
            </div>
            <p className="mt-8 text-sm text-uply-gray">
              Have a security question?{" "}
              <a
                href="mailto:security@uply.work"
                className="text-uply-green-muted hover:underline"
              >
                security@uply.work
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
