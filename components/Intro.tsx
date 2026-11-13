"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE, EASE_INOUT } from "./motion";

/**
 * First-visit logo reveal. Shown once per browser session; an inline script in
 * the layout adds `intro-seen` to <html> before paint so repeat views never flash it.
 */
export function Intro() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-seen")) return setDone(true);
    try { sessionStorage.setItem("hv-intro", "1"); } catch {}
    const t = setTimeout(() => setDone(true), reduce ? 300 : 2400);
    return () => clearTimeout(t);
  }, [reduce]);

  if (done) return null;

  const letters = "HARITVANTA".split("");
  return (
    <motion.div
      className="intro fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 1, ease: EASE_INOUT, delay: 1.35 }}
      aria-hidden
    >
      <div className="flex items-center gap-3 text-white">
        <svg viewBox="0 0 40 40" className="h-11 w-11">
          <motion.rect x="6" y="10" width="5" height="26" fill="currentColor" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ originY: 1 }} transition={{ duration: 0.6, ease: EASE }} />
          <motion.rect x="23" y="16" width="5" height="20" fill="currentColor" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ originY: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }} />
          <motion.rect x="6" y="21" width="22" height="4.5" fill="currentColor" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.2 }} />
          <motion.path d="M23 15.5C23 7.5 28.5 3 37 3c0 8.5-5 12.5-14 12.5Z" fill="#E98228" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ originX: 0, originY: 1 }} transition={{ duration: 0.7, ease: EASE, delay: 0.4 }} />
        </svg>
        <span className="flex min-w-max flex-col">
          <span className="flex overflow-hidden font-display text-2xl font-bold tracking-[0.14em]">
            {letters.map((l, i) => (
              <motion.span key={i} initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.035 }}>
                {l}
              </motion.span>
            ))}
          </span>
          <span className="overflow-hidden">
            <motion.span
              className="block whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/70 sm:text-[0.7rem] sm:tracking-[0.2em]"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            >
              Environmental Services Pvt. Ltd.
            </motion.span>
          </span>
        </span>
      </div>
    </motion.div>
  );
}

/** Seconds the home hero should wait before animating in. */
export function introDelay() {
  if (typeof document === "undefined") return 0;
  return document.documentElement.classList.contains("intro-seen") ? 0.15 : 1.75;
}
