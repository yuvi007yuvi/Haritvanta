import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline-light" | "outline-dark" | "forest";
  className?: string;
};

const variants: Record<NonNullable<BtnProps["variant"]>, string> = {
  primary: "bg-bhagwa text-white before:bg-forest-deep",
  forest: "bg-forest text-white before:bg-bhagwa",
  light: "bg-white text-forest before:bg-bhagwa hover:text-white",
  "outline-light": "border border-white/40 text-white before:bg-white hover:text-forest",
  "outline-dark": "border border-forest/25 text-forest before:bg-forest hover:text-white",
};

/** Button with a background that wipes up from below on hover. */
export function Button({ href, children, variant = "primary", className = "" }: BtnProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-3 overflow-hidden px-7 py-4 text-[0.95rem] font-medium transition-colors duration-500 ease-expo
      before:absolute before:inset-0 before:translate-y-full before:transition-transform before:duration-500 before:ease-expo hover:before:translate-y-0 ${variants[variant]} ${className}`}
    >
      <span className="relative">{children}</span>
      <span className="relative inline-flex h-4 w-4 overflow-hidden">
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-5" aria-hidden />
        <ArrowRight className="absolute h-4 w-4 -translate-x-5 transition-transform duration-500 ease-expo group-hover:translate-x-0" aria-hidden />
      </span>
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-medium ${className}`}>
      <span className="link-line">{children}</span>
      <Icon className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

export function Eyebrow({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${tone === "light" ? "text-white/70" : "text-muted"} ${className}`}>
      <span className="h-px w-8 bg-bhagwa" aria-hidden />
      {children}
    </p>
  );
}
