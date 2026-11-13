"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/data";
import { EASE, EASE_INOUT, Reveal, SplitText } from "../motion";
import { Eyebrow } from "../ui";

/**
 * Editorial service index. Desktop: a sticky photograph on the left swaps as each
 * service row is hovered. Mobile/tablet: every row carries its own photograph.
 */
export function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 md:py-36" aria-labelledby="capabilities-title">
      <div className="container-site">
        <div className="grid gap-8 border-b border-line pb-12 md:pb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>Our Capabilities</Eyebrow>
            <SplitText as="h2" text={"Every stage of the\nwaste value chain."} className="display-lg mt-6 text-forest" />
          </div>
          <Reveal className="self-end lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="leading-relaxed text-muted">
              Seven integrated service lines, designed to work independently or as a single, accountable system — from
              the first doorstep collection to the final recovered bale.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-12">
          {/* Sticky preview — desktop only */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 mt-12 aspect-[4/5] overflow-hidden bg-forest/10">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.9, ease: EASE_INOUT }}
                >
                  <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE }}>
                    <Image src={services[active].image.src} alt={services[active].image.alt} fill sizes="40vw" className="object-cover" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 z-10 flex items-center gap-3 bg-white px-5 py-3 text-sm">
                <span className="tabular-nums text-bhagwa">{services[active].no}</span>
                <span className="text-charcoal">/ {String(services.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 0.04} className="border-b border-line">
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid gap-6 py-9 md:grid-cols-[4.5rem_1fr] md:py-11"
                >
                  <span className={`font-display text-sm font-semibold tabular-nums transition-colors duration-500 ${active === i ? "text-bhagwa" : "text-muted"} lg:pt-2`}>
                    {s.no}
                  </span>
                  <div>
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden lg:hidden">
                      <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 1024px) 100vw" className="object-cover" />
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-display text-2xl font-semibold leading-tight text-charcoal transition-colors duration-500 group-hover:text-forest md:text-[2rem]">
                        {s.title}
                      </h3>
                      <span className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-all duration-500 ease-expo group-hover:border-bhagwa group-hover:bg-bhagwa group-hover:text-white md:flex">
                        <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 ease-expo group-hover:rotate-0" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted">{s.short}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
                      <span className="link-line">Explore service</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
