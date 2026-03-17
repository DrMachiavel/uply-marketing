import { Section } from "@/components/ui/section";

interface FeatureBlockProps {
  title: string;
  description: string;
  visual: React.ReactNode;
  reversed?: boolean;
  theme?: "dark" | "light";
}

export function FeatureBlock({
  title,
  description,
  visual,
  reversed = false,
  theme = "light",
}: FeatureBlockProps) {
  return (
    <Section theme={theme}>
      <div
        className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <div className="flex-1 space-y-4">
          <h2
            className={`text-3xl font-bold tracking-tight md:text-4xl ${
              theme === "dark" ? "text-white" : "text-uply-dark"
            }`}
          >
            {title}
          </h2>
          <p
            className={`max-w-lg text-lg leading-relaxed ${
              theme === "dark" ? "text-white/60" : "text-uply-gray"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Visual */}
        <div className="flex flex-1 items-center justify-center">
          {visual}
        </div>
      </div>
    </Section>
  );
}
