"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "../ui";
import { EASE } from "../motion";
import { introDelay } from "../Intro";
import { img } from "@/lib/images";

const lines = ["Transforming Waste.", "Building a Better Tomorrow."];
const chain = ["Door-to-door collection", "Sweeping & sanitation", "IEC awareness"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [d] = useState(introDelay);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep pt-32 text-white md:min-h-[760px] lg:h-[100svh]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imgY }}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE, delay: d - 0.3 }}
        >
          <Image src={img.heroFacility.src} alt={img.heroFacility.alt} fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      {/* Readability overlays: directional, not decorative */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/45 to-forest-deep/25" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/20 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-forest-deep/70 to-transparent" aria-hidden />

      <motion.div className="container-site relative pb-10 md:pb-14" style={reduce ? undefined : { opacity: fade }}>
        <motion.p
          className="eyebrow mb-7 flex items-center gap-3 text-white/75"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE, delay: d + 0.1 }}
        >
          <span className="h-px w-8 bg-bhagwa" aria-hidden />
          <span>Waste Management &amp; Environmental Services<span className="hidden sm:inline"> · India</span></span>
        </motion.p>

        <h1 className="display-xl max-w-[15ch]" aria-label={lines.join(" ")}>
          {lines.map((line, li) => (
            <span key={li} className="block overflow-hidden pb-[0.06em]" aria-hidden>
              <motion.span
                className={`block ${li === 1 ? "text-white/90" : ""}`}
                initial={reduce ? { opacity: 0 } : { y: "105%" }}
                animate={reduce ? { opacity: 1 } : { y: "0%" }}
                transition={{ duration: 1.3, ease: EASE, delay: d + 0.2 + li * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:items-end">
          <motion.p
            className="max-w-xl text-lg leading-relaxed text-white/80 lg:col-span-6 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: d + 0.55 }}
          >
            Delivering integrated waste management and environmental solutions through responsible operations,
            innovation, and sustainable practices.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: d + 0.7 }}
          >
            <Button href="/services" variant="primary">Discover Our Capabilities</Button>
            <Button href="/projects" variant="outline-light">Explore Our Work</Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex items-center justify-between border-t border-white/15 pt-6 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: d + 1 }}
        >
          <ol className="hidden items-center gap-3 text-sm text-white/60 md:flex">
            {chain.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                <span className="tabular-nums text-bhagwa">0{i + 1}</span>
                <span>{c}</span>
                {i < chain.length - 1 && <span className="ml-1 h-px w-10 bg-white/25" aria-hidden />}
              </li>
            ))}
          </ol>
          <a href="#who-we-are" className="group flex items-center gap-4 text-sm text-white/70 hover:text-white">
            <span>Scroll to explore</span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/20" aria-hidden>
              <motion.span
                className="absolute left-0 top-0 block h-1/2 w-px bg-bhagwa"
                animate={reduce ? undefined : { y: ["-100%", "200%"] }}
                transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1], repeat: 3, repeatDelay: 0.6, delay: d + 1.4 }}
              />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
