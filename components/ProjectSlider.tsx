"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";
import { EASE } from "./motion";

/** Draggable, keyboard-accessible project carousel with snap-to-slide. */
export function ProjectSlider({ items, tone = "light" }: { items: Project[]; tone?: "light" | "dark" }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [bounds, setBounds] = useState({ left: 0, right: 0 });
  const dragging = useRef(false);

  const measure = useCallback(() => {
    if (!viewport.current || !track.current) return;
    const max = track.current.scrollWidth - viewport.current.clientWidth;
    setBounds({ left: -Math.max(0, max), right: 0 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const offsetFor = (i: number) => {
    const el = track.current?.children[i] as HTMLElement | undefined;
    if (!el) return 0;
    return Math.max(bounds.left, -el.offsetLeft);
  };

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(items.length - 1, i));
    setIndex(next);
    animate(x, offsetFor(next), reduce ? { duration: 0 } : { duration: 0.9, ease: EASE });
  };

  const onDragEnd = () => {
    // Snap to the nearest slide
    const cur = x.get();
    let best = 0;
    let dist = Infinity;
    items.forEach((_, i) => {
      const d = Math.abs(offsetFor(i) - cur);
      if (d < dist) { dist = d; best = i; }
    });
    goTo(best);
    setTimeout(() => (dragging.current = false), 50);
  };

  const atEnd = x.get() <= bounds.left + 2 && index > 0;
  const dark = tone === "dark";

  return (
    <div>
      <div
        ref={viewport}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") goTo(index + 1);
          if (e.key === "ArrowLeft") goTo(index - 1);
        }}
      >
        <motion.div
          ref={track}
          className="flex gap-5 md:gap-8"
          style={{ x }}
          drag="x"
          dragConstraints={bounds}
          dragElastic={0.08}
          onDragStart={() => (dragging.current = true)}
          onDragEnd={onDragEnd}
        >
          {items.map((p, i) => (
            <article
              key={p.slug}
              className="group w-[86vw] shrink-0 sm:w-[72vw] lg:w-[58vw] xl:w-[54vw] 2xl:w-[780px]"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}: ${p.name}`}
            >
              <Link
                href={`/projects/${p.slug}`}
                draggable={false}
                onClick={(e) => dragging.current && e.preventDefault()}
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-forest/10">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    draggable={false}
                    sizes="(max-width: 768px) 86vw, 58vw"
                    className="pointer-events-none object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-forest">
                    {p.category}
                  </span>
                </div>
                <div className={`grid gap-4 border-b pb-7 pt-6 md:grid-cols-[1fr_auto] md:gap-10 ${dark ? "border-white/15" : "border-line"}`}>
                  <div>
                    <p className={`text-sm ${dark ? "text-white/55" : "text-muted"}`}>{p.location}</p>
                    <h3 className={`mt-2 font-display text-2xl font-semibold md:text-3xl ${dark ? "text-white" : "text-charcoal"}`}>{p.name}</h3>
                    <p className={`mt-3 max-w-lg leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}>{p.overview}</p>
                  </div>
                  <span className={`inline-flex items-center gap-2 self-end text-sm font-medium ${dark ? "text-white" : "text-forest"}`}>
                    <span className="link-line">View project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className={`relative h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`}>
          <motion.div
            className="absolute left-0 top-[-1px] h-[3px] bg-bhagwa"
            animate={{ width: `${((index + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
          />
        </div>
        <p className={`text-sm tabular-nums ${dark ? "text-white/60" : "text-muted"}`}>
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          {[
            { label: "Previous project", icon: ArrowLeft, onClick: () => goTo(index - 1), disabled: index === 0 },
            { label: "Next project", icon: ArrowRight, onClick: () => goTo(index + 1), disabled: index === items.length - 1 || atEnd },
          ].map(({ label, icon: Icon, onClick, disabled }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={onClick}
              disabled={disabled}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500 disabled:opacity-30 ${
                dark
                  ? "border-white/25 text-white enabled:hover:border-bhagwa enabled:hover:bg-bhagwa"
                  : "border-forest/20 text-forest enabled:hover:border-forest enabled:hover:bg-forest enabled:hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
