import { Section } from "@/components/ui/section";

const COMPANIES = [
  { name: "Edusign", style: "font-bold tracking-tight" },
  { name: "Qonto", style: "font-extrabold tracking-tight" },
  { name: "Swile", style: "font-bold italic" },
  { name: "PayFit", style: "font-extrabold" },
  { name: "Spendesk", style: "font-semibold tracking-wide" },
  { name: "Alan", style: "font-bold tracking-widest uppercase text-lg" },
];

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
              key={company.name}
              className={`text-xl text-white/30 select-none ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
