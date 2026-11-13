import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { ArrowLink, Eyebrow } from "@/components/ui";
import { liveServices, upcomingServices } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Door-to-door waste collection and street sweeping & sanitation services by Haritvanta, with transportation, processing and recovery services launching soon.",
};

const sectors = [
  { name: "Municipal corporations & councils", image: img.truckBins },
  { name: "Nagar panchayats", image: img.broomStreet },
  { name: "Markets & commercial areas", image: img.streetCleanerCart },
  { name: "Townships & campuses", image: img.binsRow },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="type"
        eyebrow="Our Services"
        title={"Doing the essentials\nexceptionally well."}
        intro="Today Haritvanta delivers door-to-door waste collection and street sweeping & sanitation. More service lines across the waste value chain are being prepared and will be added soon."
      />

      <div className="bg-white">
        {liveServices.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-20 border-b border-line py-20 md:py-28">
              <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <Link href={`/services/${s.slug}`} className="group block" aria-label={s.title}>
                    <RevealImage
                      src={s.image.src}
                      alt={s.image.alt}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      direction={flip ? "left" : "right"}
                      className="aspect-[16/11]"
                      imgClassName="transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
                    />
                  </Link>
                </div>
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-forest"><span className="h-1.5 w-1.5 rounded-full bg-bhagwa" aria-hidden />Operating now</p>
                    <p className="font-display text-[5rem] font-semibold leading-none tracking-tight text-forest/10 md:text-[7rem]">{s.no}</p>
                    <h2 className="-mt-6 font-display text-3xl font-semibold leading-tight text-forest md:-mt-10 md:text-[2.5rem]">{s.title}</h2>
                    <p className="mt-6 leading-relaxed text-muted">{s.summary}</p>
                    <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-line pt-6 text-sm text-charcoal sm:grid-cols-2">
                      {s.scope.map((sc) => (
                        <li key={sc.title} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-bhagwa" aria-hidden />
                          {sc.title}
                        </li>
                      ))}
                    </ul>
                    <ArrowLink href={`/services/${s.slug}`} className="mt-10 text-forest">Explore service</ArrowLink>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Upcoming services */}
      <section className="bg-white pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Coming Soon</Eyebrow>
              <SplitText as="h2" text={"Services we are\npreparing to launch."} className="display-md mt-6 text-forest" />
            </div>
            <Reveal className="self-end lg:col-span-4 lg:col-start-9">
              <p className="leading-relaxed text-muted">
                We are building the teams, equipment and partnerships for these service lines. Planning a future
                tender or contract? Talk to us early.
              </p>
            </Reveal>
          </div>
          <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {upcomingServices.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 0.05} className="bg-white">
                <Link href={`/services/${s.slug}`} className="group block h-full p-6 md:p-8">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover grayscale transition-all duration-[1.2s] ease-expo group-hover:scale-105 group-hover:grayscale-0" />
                    <span className="absolute left-0 top-0 bg-white px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">Coming soon</span>
                  </div>
                  <p className="mt-6 text-xs tabular-nums text-muted">{s.no}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-charcoal transition-colors group-hover:text-forest">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Who We Serve</Eyebrow>
              <SplitText as="h2" text={"Sectors we work with."} className="display-md mt-6 text-forest" />
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sec, i) => (
              <Reveal key={sec.name} delay={i * 0.06} className="group bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={sec.image.src} alt={sec.image.alt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover grayscale-[35%] transition-all duration-[1.2s] ease-expo group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <p className="flex items-baseline gap-3 p-6 font-display text-lg font-semibold text-forest">
                  <span className="text-xs tabular-nums text-bhagwa">0{i + 1}</span>
                  {sec.name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand image={img.collectionCrew} title={"Need cleaner streets\nand reliable collection?"} text="Tell us about your city, ward or township. We will help you plan doorstep collection and sweeping that works every day." />
    </>
  );
}
