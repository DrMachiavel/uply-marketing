import { Section } from "@/components/ui/section";

// SVG wordmark logos — styled to approximate each brand's actual logo
// In production, replace with actual brand SVG assets

function EdusignLogo() {
  return (
    <svg viewBox="0 0 120 28" className="h-6" fill="currentColor">
      <text x="0" y="21" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" letterSpacing="-0.5">edusign</text>
    </svg>
  );
}

function QontoLogo() {
  return (
    <svg viewBox="0 0 100 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="800" letterSpacing="-1">Qonto</text>
    </svg>
  );
}

function SwileLogo() {
  return (
    <svg viewBox="0 0 90 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5" fontStyle="normal">Swile</text>
    </svg>
  );
}

function PayFitLogo() {
  return (
    <svg viewBox="0 0 100 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="800" letterSpacing="-0.5">PayFit</text>
    </svg>
  );
}

function SpendeskLogo() {
  return (
    <svg viewBox="0 0 130 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0">Spendesk</text>
    </svg>
  );
}

function AlanLogo() {
  return (
    <svg viewBox="0 0 75 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5">alan</text>
    </svg>
  );
}

function PennylaneLogo() {
  return (
    <svg viewBox="0 0 140 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" letterSpacing="-0.3">Pennylane</text>
    </svg>
  );
}

function DoctolibLogo() {
  return (
    <svg viewBox="0 0 130 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" letterSpacing="-0.3">Doctolib</text>
    </svg>
  );
}

function FiguresLogo() {
  return (
    <svg viewBox="0 0 110 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0">Figures</text>
    </svg>
  );
}

function LuccaLogo() {
  return (
    <svg viewBox="0 0 90 28" className="h-6" fill="currentColor">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5">Lucca</text>
    </svg>
  );
}

const LOGOS = [
  { name: "Edusign", Logo: EdusignLogo },
  { name: "Qonto", Logo: QontoLogo },
  { name: "Swile", Logo: SwileLogo },
  { name: "PayFit", Logo: PayFitLogo },
  { name: "Spendesk", Logo: SpendeskLogo },
  { name: "Alan", Logo: AlanLogo },
  { name: "Pennylane", Logo: PennylaneLogo },
  { name: "Doctolib", Logo: DoctolibLogo },
  { name: "Figures", Logo: FiguresLogo },
  { name: "Lucca", Logo: LuccaLogo },
];

export function SocialProof() {
  return (
    <Section theme="dark" className="py-6">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-white/40">
        Trusted by teams at
      </p>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#162415] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#162415] to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-16">
          {/* Double the logos for seamless loop */}
          {[...LOGOS, ...LOGOS].map(({ name, Logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center text-white/25 transition-colors hover:text-white/40"
              aria-label={name}
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
