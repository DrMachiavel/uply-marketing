type SectionTheme = "dark" | "light" | "green-wash";

interface SectionProps {
  theme?: SectionTheme;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const themeStyles: Record<SectionTheme, string> = {
  dark: "bg-uply-dark text-white",
  light: "bg-white text-uply-dark",
  "green-wash": "bg-uply-green-wash text-uply-dark",
};

export function Section({
  theme = "dark",
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-28 px-6 md:py-32 ${themeStyles[theme]} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
