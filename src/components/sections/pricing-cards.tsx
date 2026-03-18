import { Section } from "@/components/ui/section";
import { SIGNUP_URL } from "@/lib/constants";

/* Inline Slack icon */
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.527 2.527 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.522 2.527 2.527 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.522h-6.314z" fill="#ECB22E"/>
    </svg>
  );
}

const plans = [
  {
    name: "Free",
    price: "$0",
    originalPrice: null,
    subtitle: "For small teams getting started",
    features: [
      "Up to 5 users",
      "1 topic",
      "Daily questions",
      "Basic weekly summary",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "Free",
    originalPrice: "$1/user/mo",
    subtitle: "For growing teams that want it all",
    features: [
      "Unlimited users",
      "All topics",
      "Leaderboards",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    popular: true,
  },
] as const;

export function PricingCards() {
  return (
    <Section theme="light">
      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.popular
                ? "border-uply-green-muted shadow-[0_0_40px_-12px_rgba(104,239,63,0.25)]"
                : "border-gray-200 shadow-sm"
            }`}
          >
            {/* Popular badge + early access banner */}
            {plan.popular && (
              <>
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center rounded-full bg-uply-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-uply-dark">
                    Popular
                  </span>
                </div>
                <div className="-mx-8 -mt-8 mb-6 rounded-t-2xl bg-uply-green-muted/10 px-6 py-2.5 text-center text-sm font-medium text-uply-dark">
                  Free during early access
                </div>
              </>
            )}

            {/* Plan name */}
            <h3 className="text-xl font-bold text-uply-dark">{plan.name}</h3>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-2">
              {plan.originalPrice && (
                <span className="text-lg text-uply-gray line-through">
                  {plan.originalPrice}
                </span>
              )}
              <span className="text-4xl font-bold tracking-tight text-uply-dark">
                {plan.price}
              </span>
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-sm text-uply-gray">{plan.subtitle}</p>

            {/* Features */}
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-uply-green-muted"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-uply-dark">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={SIGNUP_URL}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-uply-green px-7 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
              >
                <SlackIcon className="h-5 w-5" />
                Add to Slack — It&apos;s Free
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
