import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";

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
              <Button
                href={SIGNUP_URL}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
