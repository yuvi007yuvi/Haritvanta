import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { company, liveServices, nav } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-white">
      <div className="container-site pt-20 md:pt-28">
        <div className="grid gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Haritvanta — home">
              <LogoMark className="h-10 w-10 text-white" />
              <span className="font-display text-xl font-bold tracking-[0.14em]">HARITVANTA</span>
            </Link>
            <p className="mt-7 max-w-sm leading-relaxed text-white/65">
              Door-to-door waste collection, street sweeping &amp; sanitation and IEC awareness for cities and communities across
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

          <FooterCol title="Company" className="lg:col-span-2">
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

          <FooterCol title="Contact" className="lg:col-span-3">
            <li className="text-white/65">
              {company.address.map((l) => <span key={l} className="block">{l}</span>)}
            </li>
            <FooterLink href={`mailto:${company.email}`}><span className="break-all">{company.email}</span></FooterLink>
            <FooterLink href={`tel:${company.phone.replace(/\s/g, "")}`}><span className="whitespace-nowrap">{company.phone}</span></FooterLink>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-8 py-9 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">
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
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <Link href="/privacy-policy" className="link-line w-fit whitespace-nowrap hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="link-line w-fit whitespace-nowrap hover:text-white">Terms &amp; Conditions</Link>
            <p>© {year} {company.legalName}. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark — a quiet signature at the base of every page */}
      {/* SVG + textLength makes the word fit the container width exactly at every screen size */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="container-site">
          <svg viewBox="0 0 1000 150" className="-mb-[1.5%] block w-full" preserveAspectRatio="xMidYMax meet">
            <text
              x="0"
              y="150"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              className="font-display"
              fontSize="182"
              fontWeight="700"
              fill="rgba(255,255,255,0.05)"
            >
              HARITVANTA
            </text>
          </svg>
        </div>
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
