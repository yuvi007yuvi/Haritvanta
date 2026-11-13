import Link from "next/link";

/** Haritvanta mark: an "H" whose right stem sprouts a Bhagwa leaf — growth from infrastructure. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="10" width="5" height="26" fill="currentColor" />
      <rect x="23" y="16" width="5" height="20" fill="currentColor" />
      <rect x="6" y="21" width="22" height="4.5" fill="currentColor" />
      <path d="M23 15.5C23 7.5 28.5 3 37 3c0 8.5-5 12.5-14 12.5Z" fill="#E98228" />
    </svg>
  );
}

export function Logo({ tone = "dark", onClick }: { tone?: "dark" | "light"; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Haritvanta — home"
      className={`flex items-center gap-2.5 transition-colors duration-500 ${tone === "light" ? "text-white" : "text-forest"}`}
    >
      <LogoMark />
      <span className="font-display text-[1.15rem] font-bold tracking-[0.14em]">HARITVANTA</span>
    </Link>
  );
}
