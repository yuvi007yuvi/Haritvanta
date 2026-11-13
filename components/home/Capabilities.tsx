import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { liveServices, upcomingServices } from "@/lib/data";
import { Reveal, SplitText } from "../motion";
import { Eyebrow } from "../ui";

/**
 * Home services section.
 * Live services get full editorial features; upcoming services sit in a compact
 * "expanding soon" index so visitors see the roadmap without it being oversold.
 */
export function Capabilities() {
  return (
    <section className="bg-white py-24 md:py-36" aria-labelledby="capabilities-title">
      <div className="container-site">
        <div className="grid gap-8 border-b border-line pb-12 md:pb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>What We Do Today</Eyebrow>
            <SplitText as="h2" text={"Clean streets start\nat the doorstep."} className="display-lg mt-6 text-forest" />
          </div>
          <Reveal className="self-end lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="leading-relaxed text-muted">
              We are focused on the two services every clean city depends on — reliable doorstep collection and
              daily street sanitation — and doing them exceptionally well.
            </p>
          </Reveal>
        </div>

        {/* Live services */}
        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-8 lg:gap-12">
          {liveServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.12} className={i === 1 ? "md:mt-24" : ""}>
              <Link href={`/services/${s.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest/10">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 flex items-center gap-2 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-forest">
                    <span className="h-1.5 w-1.5 rounded-full bg-bhagwa" aria-hidden />
                    Operating now
                  </span>
                </div>
                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-display text-sm font-semibold tabular-nums text-bhagwa">{s.no}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-charcoal transition-colors duration-500 group-hover:text-forest md:text-[2.25rem]">
                      {s.title}
                    </h3>
                  </div>
                  <span className="mt-8 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-all duration-500 ease-expo group-hover:border-bhagwa group-hover:bg-bhagwa group-hover:text-white md:flex">
                    <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 ease-expo group-hover:rotate-0" aria-hidden />
                  </span>
                </div>
                <p className="mt-4 max-w-lg leading-relaxed text-muted">{s.short}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 border-t border-line pt-5 text-sm text-charcoal sm:grid-cols-2">
                  {s.scope.map((sc) => (
                    <li key={sc.title} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-bhagwa" aria-hidden />
                      {sc.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-forest">
                  <span className="link-line">Explore service</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Upcoming services */}
        {upcomingServices.length > 0 && (
          <div className="mt-24 grid gap-10 border-t border-line pt-12 md:mt-32 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-muted">Expanding Soon</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug text-forest">
                Building towards a fully integrated waste service.
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                These service lines are in preparation. Talk to us early if you would like to plan them into a
                future contract.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line lg:col-span-7 lg:col-start-6">
              {upcomingServices.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 0.04}>
                  <Link href={`/services/${s.slug}`} className="group flex items-center gap-5 py-5">
                    <span className="w-8 text-xs tabular-nums text-muted">{s.no}</span>
                    <span className="flex-1 font-medium text-charcoal transition-colors group-hover:text-forest">{s.title}</span>
                    <span className="hidden border border-line px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-muted sm:inline">
                      Coming soon
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bhagwa" aria-hidden />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
