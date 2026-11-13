"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { EASE } from "./motion";

export const circularPillars = [
  { title: "Waste Reduction", text: "Designing collection and awareness programmes that reduce what is generated in the first place." },
  { title: "Resource Recovery", text: "Separating every stream so that organics, recyclables and combustibles retain their value." },
  { title: "Recycling", text: "Channelling graded materials to authorised recyclers with full traceability." },
  { title: "Environmental Protection", text: "Controlling leachate, emissions and litter at every site we operate." },
  { title: "Community Participation", text: "Working with residents, schools and waste pickers to make change last." },
];

/**
 * Custom circular-economy diagram: five stages placed on a loop. The active stage
 * is highlighted and the arc between stages draws in on scroll.
 */
export function CircularLoop({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const R = 150;
  const C = 200;
  const pts = circularPillars.map((_, i) => {
    const a = (-90 + i * 72) * (Math.PI / 180);
    return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
  });
  const dark = tone === "dark";

  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="mx-auto w-full max-w-[440px] lg:col-span-5">
        <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Circular economy loop of five stages">
          <circle cx={C} cy={C} r={R} fill="none" stroke={dark ? "rgba(255,255,255,0.12)" : "#E2E5DF"} strokeWidth="1" />
          <motion.circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="#E98228"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(-90 ${C} ${C})`}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: EASE }}
          />
          {/* inner guide rings */}
          <circle cx={C} cy={C} r={92} fill="none" stroke={dark ? "rgba(255,255,255,0.08)" : "#E2E5DF"} strokeDasharray="2 6" />
          <text x={C} y={C - 6} textAnchor="middle" className="font-display" fontSize="15" fontWeight="600" fill={dark ? "#fff" : "#173F32"}>
            Circular
          </text>
          <text x={C} y={C + 14} textAnchor="middle" className="font-display" fontSize="15" fontWeight="600" fill={dark ? "#fff" : "#173F32"}>
            Value Chain
          </text>
          {pts.map((p, i) => (
            <g key={i} onMouseEnter={() => setActive(i)} className="cursor-pointer">
              <motion.circle
                cx={p.x}
                cy={p.y}
                animate={{ r: active === i ? 22 : 16 }}
                transition={{ duration: 0.5, ease: EASE }}
                fill={active === i ? "#E98228" : dark ? "#0F2C23" : "#fff"}
                stroke={active === i ? "#E98228" : dark ? "rgba(255,255,255,0.35)" : "#173F32"}
                strokeWidth="1"
              />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={active === i ? "#fff" : dark ? "rgba(255,255,255,0.8)" : "#173F32"}
                className="pointer-events-none tabular-nums"
              >
                0{i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <ol className={`lg:col-span-7 ${dark ? "divide-white/10 border-white/10" : "divide-line border-line"} divide-y border-y`}>
        {circularPillars.map((p, i) => (
          <li key={p.title}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className="grid w-full grid-cols-[3rem_1fr] gap-2 py-6 text-left md:py-7"
            >
              <span className={`pt-1 text-sm tabular-nums transition-colors duration-500 ${active === i ? "text-bhagwa" : dark ? "text-white/40" : "text-muted"}`}>
                0{i + 1}
              </span>
              <span>
                <span
                  className={`block font-display text-xl font-semibold transition-colors duration-500 md:text-2xl ${
                    active === i ? (dark ? "text-white" : "text-forest") : dark ? "text-white/55" : "text-charcoal/60"
                  }`}
                >
                  {p.title}
                </span>
                <motion.span
                  className={`block overflow-hidden leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}
                  initial={false}
                  animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0, marginTop: active === i ? 10 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {p.text}
                </motion.span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
