"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { nav, services, company } from "@/lib/data";
import { EASE, EASE_INOUT } from "./motion";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [preview, setPreview] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev && !dropdown);
  });

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(false), setDropdown(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || dropdown;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropdown(false), 140);
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-expo ${
          solid && !open ? "border-b border-line bg-white/95 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
        }`}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className={`container-site flex items-center justify-between transition-[height] duration-500 ease-expo ${scrolled ? "h-[72px]" : "h-[88px]"}`}>
          <Logo tone={solid && !open ? "dark" : "light"} onClick={() => setOpen(false)} />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div key={item.href} className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
                  <Link
                    href={item.href}
                    aria-expanded={dropdown}
                    aria-haspopup="true"
                    onFocus={openDrop}
                    className={`group flex items-center gap-1 px-3.5 py-2 text-[0.92rem] font-medium transition-colors duration-500 ${
                      solid ? "text-charcoal hover:text-forest" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className={`link-line ${isActive(item.href) ? "link-line-static" : ""}`}>{item.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-500 ease-expo ${dropdown ? "rotate-180" : ""}`} aria-hidden />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`px-3.5 py-2 text-[0.92rem] font-medium transition-colors duration-500 ${
                    solid ? "text-charcoal hover:text-forest" : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className={`link-line ${isActive(item.href) ? "link-line-static" : ""}`}>{item.label}</span>
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="group relative ml-4 overflow-hidden bg-bhagwa px-5 py-2.5 text-[0.92rem] font-medium text-white before:absolute before:inset-0 before:translate-y-full before:bg-forest-deep before:transition-transform before:duration-500 before:ease-expo hover:before:translate-y-0"
            >
              <span className="relative">Contact Us</span>
            </Link>
          </nav>

          <button
            type="button"
            className={`relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden ${solid && !open ? "text-forest" : "text-white"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-7">
              <span className={`absolute left-0 h-[1.5px] w-7 bg-current transition-all duration-500 ease-expo ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[1.5px] bg-current transition-all duration-500 ease-expo ${open ? "top-[5px] w-7 -rotate-45" : "top-[10.5px] w-4"}`} />
            </span>
          </button>
        </div>

        {/* Services mega dropdown */}
        <AnimatePresence>
          {dropdown && (
            <motion.div
              className="absolute inset-x-0 top-full hidden border-b border-line bg-white lg:block"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <div className="container-site grid grid-cols-12 gap-10 py-10">
                <div className="col-span-3 flex flex-col justify-between">
                  <div>
                    <p className="eyebrow text-muted">Our Services</p>
                    <p className="mt-4 font-display text-2xl font-semibold leading-snug text-forest">
                      Doorstep collection and street sanitation today — more services coming soon.
                    </p>
                  </div>
                  <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
                    <span className="link-line">View all services</span>
                  </Link>
                </div>
                <ul className="col-span-5 divide-y divide-line border-y border-line">
                  {services.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onMouseEnter={() => setPreview(i)}
                        onFocus={() => setPreview(i)}
                        className={`group flex items-baseline gap-5 transition-colors hover:text-forest ${s.status === "live" ? "py-3.5 text-charcoal" : "py-2.5 text-sm text-muted"}`}
                      >
                        <span className={`text-xs tabular-nums transition-colors ${preview === i ? "text-bhagwa" : "text-muted"}`}>{s.no}</span>
                        <span className={`flex-1 transition-transform duration-500 ease-expo group-hover:translate-x-1.5 ${s.status === "live" ? "font-medium" : ""}`}>{s.title}</span>
                        <span className={`text-[0.65rem] uppercase tracking-[0.12em] ${s.status === "live" ? "text-bhagwa" : "text-muted/70"}`}>
                          {s.status === "live" ? "Live" : "Soon"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="relative col-span-4 aspect-[4/3] overflow-hidden bg-forest/10">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={preview}
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(0 0 100% 0)" }}
                      animate={{ clipPath: "inset(0 0 0% 0)" }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0.7, ease: EASE_INOUT }}
                    >
                      <Image src={services[preview].image.src} alt="" fill sizes="30vw" className="object-cover" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-forest-deep text-white lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE_INOUT }}
          >
            <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-center pt-24">
              <ul className="space-y-1">
                {[...nav, { label: "Contact", href: "/contact" }].map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-baseline gap-4 py-1.5 font-display text-[2.1rem] font-semibold tracking-tight sm:text-5xl ${
                          isActive(item.href) ? "text-bhagwa" : "text-white"
                        }`}
                      >
                        <span className="w-6 text-xs font-normal tabular-nums text-white/40">0{i + 1}</span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="container-site flex flex-col gap-2 border-t border-white/10 py-8 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
