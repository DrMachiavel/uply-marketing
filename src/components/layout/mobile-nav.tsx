import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="border-t border-white/5 bg-uply-dark px-6 py-6 md:hidden">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg text-white/60 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Button href={SIGNUP_URL} size="lg" className="mt-2 w-full text-center">
          Get started free
        </Button>
      </div>
    </div>
  );
}
