import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/seo";
import { ReferralLinkGenerator } from "./referral-link";

export const metadata: Metadata = buildMetadata({
  title: "Refer a Team",
  description:
    "Know a team that needs better soft skills? Refer them to Uply and get Pro free for 3 extra months after launch.",
  path: "/refer",
});

const steps = [
  {
    number: "1",
    title: "Enter your name",
    description: "We use it to create your personal referral link. Nothing else.",
  },
  {
    number: "2",
    title: "Share your link",
    description:
      "Send it to a founder, manager, or HR lead you think would benefit from Uply.",
  },
  {
    number: "3",
    title: "They install Uply",
    description:
      "When they add Uply to Slack through your link, we track the referral automatically.",
  },
  {
    number: "4",
    title: "You both win",
    description:
      "You get Pro extended by 3 months after early access ends. They get started free.",
  },
];

const faqs = [
  {
    question: "How does attribution work?",
    answer:
      "Your referral link includes UTM parameters tied to your name. When someone installs Uply through your link, we can see the referral source in our analytics.",
  },
  {
    question: "Is there a limit to how many teams I can refer?",
    answer:
      "No limit. Every successful referral extends your Pro access by 3 additional months after early access ends.",
  },
  {
    question: "Do I need to be a current Uply user to refer?",
    answer:
      "Nope. Anyone can share a referral link. But the reward (extended Pro) only applies if you have an Uply workspace.",
  },
  {
    question: "When does the reward kick in?",
    answer:
      "During early access, Pro is already free for everyone. Your referral reward kicks in when early access ends and paid plans launch - your Pro stays free for 3 extra months per referral.",
  },
];

export default function ReferPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Refer a Team", path: "/refer" },
        ])}
      />
      <JsonLdScript data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section theme="dark">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-uply-green-muted">
              Referral Program
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Refer a team. Get Pro free for 3 extra months.
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Know a startup that could use better soft skills? Share your
              personal link. When they install Uply, you both win.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Link generator */}
      <Section theme="light">
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <ReferralLinkGenerator />
          </div>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section theme="dark">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
            How it works
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-uply-green text-sm font-bold text-uply-dark">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* The deal */}
      <Section theme="green-wash">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-uply-dark md:text-3xl">
              The deal
            </h2>
            <div className="mt-8 rounded-2xl border border-uply-green-muted/20 bg-white p-8 shadow-sm">
              <p className="text-3xl font-bold text-uply-dark">
                3 months of Pro
              </p>
              <p className="mt-2 text-lg text-uply-gray">
                free after early access ends, per team you refer
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="text-sm text-uply-gray">
                  During early access, Pro is already free. Your referral rewards
                  stack up and activate when paid plans launch. Refer 4 teams?
                  That&apos;s a full year of Pro on us.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section theme="light">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-uply-dark md:text-3xl">
            Questions
          </h2>
          <div className="mx-auto mt-10 max-w-2xl divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-semibold text-uply-dark">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-uply-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
