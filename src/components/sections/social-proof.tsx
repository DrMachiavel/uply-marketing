import { Section } from "@/components/ui/section";

const COMPANIES = ["Acme", "Relay", "Northwind", "Pollen", "Sidecar", "Basecamp"];

export function SocialProof() {
  return (
    <Section theme="dark" className="py-12">
      <div className="text-center">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-white/40">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {COMPANIES.map((company) => (
            <span
              key={company}
              className="text-xl font-semibold text-white/30 select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
