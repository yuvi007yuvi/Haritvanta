"use client";

import Image from "next/image";
import {
  animate,
  motion,
  MotionGlobalConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

// QA aid: append ?nomotion to any URL to render every animation in its final state
// (useful for screenshots, visual regression tests and print).
if (typeof window !== "undefined" && window.location.search.includes("nomotion")) {
  MotionGlobalConfig.skipAnimations = true;
}

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_INOUT = [0.76, 0, 0.24, 1] as const;

/* Fade + rise when scrolled into view ------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "p" | "span" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/* Word-by-word masked text reveal ---------------------------------------- */
const wordParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const wordChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: EASE } },
};

export function SplitText({
  text,
  className,
  as = "h2",
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  const lines = text.split("\n");
  const animProps = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{lines.map((l, i) => <span key={i} className="block">{l}</span>)}</Tag>;
  }

  return (
    <M
      className={className}
      variants={wordParent}
      transition={{ delayChildren: delay }}
      {...animProps}
      aria-label={text.replace(/\n/g, " ")}
    >
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((w, wi) => (
            <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-top -mb-[0.08em]">
              <motion.span className="inline-block will-change-transform" variants={wordChild}>
                {w}
                {wi < line.split(" ").length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </M>
  );
}

/* Image with clip-path reveal and optional parallax ---------------------- */
export function RevealImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  parallax = 0,
  direction = "up",
  delay = 0,
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: number;
  direction?: "up" | "left" | "right";
  delay?: number;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  const from =
    direction === "left" ? "inset(0 100% 0 0)" : direction === "right" ? "inset(0 0 0 100%)" : "inset(100% 0 0 0)";

  return (
    <motion.div
      ref={ref}
      className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-forest/10 ${className}`}
      initial={reduce ? false : { clipPath: from }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.4, ease: EASE_INOUT, delay }}
    >
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `-${parallax}%`,
          bottom: `-${parallax}%`,
          ...(reduce || !parallax ? {} : { y }),
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.18 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: EASE, delay }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* Animated number counter ------------------------------------------------- */
export function Counter({ value, duration = 2.2, className }: { value: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setDisplay(value);
    const c = animate(0, value, { duration, ease: EASE, onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => c.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {display.toLocaleString("en-IN")}
    </span>
  );
}

/* Thin rule that draws across ------------------------------------------- */
export function Rule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-px origin-left bg-current ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: EASE, delay }}
    />
  );
}
