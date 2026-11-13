import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { company, liveServices, nav } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-white">
      <div className="container-site pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Haritvanta — home">
              <LogoMark className="h-10 w-10 text-white" />
              <span className="font-display text-xl font-bold tracking-[0.14em]">HARITVANTA</span>
            </Link>
            <p className="mt-7 max-w-sm leading-relaxed text-white/65">
              Door-to-door waste collection and street sweeping &amp; sanitation for cities and communities across
              India — delivered with operational discipline and long-term responsibility.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 border-b border-bhagwa pb-1.5 font-display text-lg font-semibold"
            >
              Discuss a project
              <ArrowUpRight className="h-5 w-5 text-bhagwa transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <FooterCol title="Company" className="lg:col-span-2 lg:col-start-6">
            {[...nav.slice(1), { label: "Contact", href: "/contact" }].map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services" className="lg:col-span-3">
            {liveServices.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.title}</FooterLink>
            ))}
            <FooterLink href="/services">More services coming soon</FooterLink>
          </FooterCol>

          <FooterCol title="Contact" className="lg:col-span-2">
            <li className="text-white/65">
              {company.address.map((l) => <span key={l} className="block">{l}</span>)}
            </li>
            <FooterLink href={`mailto:${company.email}`}>{company.email}</FooterLink>
            <FooterLink href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</FooterLink>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-8 py-9 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Social media">
            {company.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="group inline-flex items-center gap-1 text-white/75 hover:text-white" rel="noopener">
                  <span className="link-line">{s.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <Link href="/privacy-policy" className="link-line w-fit hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="link-line w-fit hover:text-white">Terms &amp; Conditions</Link>
            <p>© {year} {company.legalName}. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark — a quiet signature at the base of every page */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-[22%] whitespace-nowrap text-center font-display text-[21vw] font-bold leading-none tracking-[-0.04em] text-white/[0.04]">
          HARITVANTA
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow text-bhagwa">{title}</p>
      <ul className="mt-6 space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-line text-white/75 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
