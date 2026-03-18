interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "dark";
}

export function Badge({ children, variant = "green" }: BadgeProps) {
  const styles =
    variant === "green"
      ? "bg-uply-green-muted/10 text-uply-green-muted border-uply-green-muted/20"
      : "bg-white/10 text-white border-white/20";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${styles}`}
    >
      {children}
    </span>
  );
}
