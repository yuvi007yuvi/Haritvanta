"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion";

/** Route-level transition: a restrained fade-and-rise on every page change. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
