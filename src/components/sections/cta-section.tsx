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

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export function CTASection({
  headline = "Ready to build better soft skills?",
  subheadline = "Join 200+ teams already using Uply. Free to start.",
}: CTASectionProps) {
  return (
    <Section theme="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/60">
          {subheadline}
        </p>
        <div className="mt-8">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2.5 rounded-lg bg-uply-green px-7 py-3.5 text-sm font-semibold text-uply-dark transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(104,239,63,0.4)]"
          >
            <SlackIcon className="h-5 w-5" />
            Add to Slack — It&apos;s Free
          </a>
        </div>
      </div>
    </Section>
  );
}
