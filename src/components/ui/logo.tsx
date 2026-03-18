import Link from "next/link";

interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({ size = 28, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      className={className}
    >
      <rect width="140" height="140" rx="28" fill="#68ef3f" />
      <path
        d="M34 52C34 52 34 104 70 104C106 104 106 52 106 52"
        stroke="#162415"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <circle cx="70" cy="38" r="8" fill="#162415" />
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 22, text: "text-lg" },
  md: { icon: 26, text: "text-xl" },
  lg: { icon: 34, text: "text-2xl" },
};

export function Logo({ size = "md" }: LogoProps) {
  const s = sizes[size];
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <LogoIcon size={s.icon} />
      <span className={`${s.text} font-extrabold text-uply-green`}>
        ply
      </span>
    </Link>
  );
}
