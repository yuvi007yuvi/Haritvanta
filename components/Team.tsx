import Image from "next/image";
import { team } from "@/lib/data";
import { Reveal, SplitText } from "./motion";
import { Eyebrow } from "./ui";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Branded portrait placeholder — swapped automatically once `photo` is set in lib/data.ts. */
function PortraitPlaceholder({ name, index }: { name: string; index: number }) {
  const id = `tp-${index}`;
  return (
    <div className="absolute inset-0" aria-hidden>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f5141" />
            <stop offset="1" stopColor="#0f2b22" />
          </linearGradient>
          <linearGradient id={`${id}-fig`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${id}-bg)`} />
        {/* contour rings, offset per member so each card feels distinct */}
        <g fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.2">
          {[60, 110, 160, 210, 260, 310].map((r) => (
            <circle key={r} cx={index % 2 ? 330 : 70} cy={index < 2 ? 90 : 140} r={r} />
          ))}
        </g>
        {/* silhouette */}
        <g className="origin-bottom transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]">
          <circle cx="200" cy="215" r="72" fill={`url(#${id}-fig)`} />
          <path d="M60 500c0-95 63-160 140-160s140 65 140 160Z" fill={`url(#${id}-fig)`} />
        </g>
        {/* bhagwa sun arc */}
        <path
          d="M200 105a110 110 0 0 1 110 110"
          fill="none"
          stroke="#E98228"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-all duration-700 ease-expo [stroke-dasharray:180] [stroke-dashoffset:120] group-hover:[stroke-dashoffset:0]"
        />
      </svg>
      <span className="absolute left-4 top-4 font-display text-[2.25rem] font-semibold leading-none tracking-tight text-white/90 sm:left-6 sm:top-6 sm:text-[3.25rem]">
        {initials(name)}
      </span>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:text-[0.65rem]">
        <span className="h-1.5 w-1.5 rounded-full bg-bhagwa" />
        Photo coming soon
      </span>
    </div>
  );
}

/** Team section — real photo if provided, otherwise a branded portrait placeholder. */
export function Team() {
  return (
    <section id="team" className="scroll-mt-24 overflow-hidden bg-white py-24 md:py-32" aria-labelledby="team-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Our Team</Eyebrow>
            <SplitText as="h2" text={"The people behind\nHaritvanta."} className="display-lg mt-6 text-forest" />
          </div>
          <Reveal className="self-end lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="leading-relaxed text-muted">
              A hands-on team that plans the routes, leads the crews and stays accountable for clean streets every
              single day.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.08} className={i % 2 === 1 ? "mt-10 lg:mt-16" : ""}>
              <article itemScope itemType="https://schema.org/Person" className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`${m.name}${m.role ? `, ${m.role}` : ""} at Haritvanta`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                    />
                  ) : (
                    <PortraitPlaceholder name={m.name} index={i} />
                  )}
                  {/* vertical index on the edge */}
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.65rem] tabular-nums tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] sm:right-5"
                    aria-hidden
                  >
                    0{i + 1} / 0{team.length}
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-bhagwa transition-all duration-700 ease-expo group-hover:w-full" aria-hidden />
                </div>
                <div className="mt-5">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-bhagwa" itemProp="jobTitle">
                    {m.role ?? "Core Team"}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal transition-colors group-hover:text-forest sm:text-xl" itemProp="name">
                    {m.name}
                  </h3>
                  {m.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>}
                  <meta itemProp="worksFor" content="Haritvanta" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
