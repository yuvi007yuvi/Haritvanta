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

/** Team section — photo if provided, otherwise a branded initials portrait. */
export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-24 md:py-32" aria-labelledby="team-title">
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
              <article itemScope itemType="https://schema.org/Person">
                <div className="group relative aspect-[4/5] overflow-hidden bg-forest">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`${m.name}${m.role ? `, ${m.role}` : ""} at Haritvanta`}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6" aria-hidden>
                      <span className="font-display text-[3.25rem] font-semibold sm:text-[5.5rem] leading-none tracking-tight text-white/90">
                        {initials(m.name)}
                      </span>
                      <span className="absolute right-4 top-4 h-8 w-8 sm:right-6 sm:top-6 sm:h-10 sm:w-10 rounded-full border border-bhagwa" />
                      <span className="absolute right-[1.6rem] top-[1.6rem] h-2 w-2 sm:right-[2.15rem] sm:top-[2.15rem] sm:h-2.5 sm:w-2.5 rounded-full bg-bhagwa" />
                    </div>
                  )}
                </div>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="text-xs tabular-nums text-bhagwa">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal sm:text-xl" itemProp="name">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted" itemProp="jobTitle">{m.role ?? "Core Team"}</p>
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
