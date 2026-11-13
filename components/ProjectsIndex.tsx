"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { EASE } from "./motion";

export function ProjectsIndex() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Filter projects by category" className="-mx-1 flex flex-wrap gap-1">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`relative px-4 py-2 text-sm transition-colors duration-300 ${filter === c ? "text-white" : "text-muted hover:text-forest"}`}
            >
              {filter === c && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 bg-forest" transition={{ duration: 0.5, ease: EASE }} />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
        <p className="text-sm tabular-nums text-muted">
          {String(list.length).padStart(2, "0")} project{list.length === 1 ? "" : "s"}
        </p>
      </div>

      <motion.ul layout className="mt-14 grid gap-x-8 gap-y-20 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const feature = i === 0 && filter === "All";
            return (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: EASE, delay: Math.min(i, 4) * 0.06 }}
                className={feature ? "md:col-span-2" : i % 2 === 0 ? "md:mt-24" : ""}
              >
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className={`relative overflow-hidden bg-forest/10 ${feature ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes={feature ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-forest-deep/0 transition-colors duration-700 group-hover:bg-forest-deep/20" />
                    <span className="absolute bottom-0 right-0 flex h-14 w-14 translate-y-full items-center justify-center bg-bhagwa text-white transition-transform duration-500 ease-expo group-hover:translate-y-0">
                      <ArrowRight className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className={`mt-6 grid gap-3 ${feature ? "md:grid-cols-12" : ""}`}>
                    <div className={feature ? "md:col-span-5" : ""}>
                      <p className="flex flex-wrap gap-x-3 text-sm text-muted">
                        <span className="text-bhagwa">{p.category}</span>
                        <span aria-hidden>·</span>
                        <span>{p.location}</span>
                      </p>
                      <h2 className={`mt-2 font-display font-semibold text-charcoal transition-colors group-hover:text-forest ${feature ? "text-3xl md:text-4xl" : "text-2xl md:text-[1.75rem]"}`}>
                        {p.name}
                      </h2>
                    </div>
                    <p className={`max-w-lg leading-relaxed text-muted ${feature ? "md:col-span-5 md:col-start-8 md:pt-7" : ""}`}>{p.overview}</p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
