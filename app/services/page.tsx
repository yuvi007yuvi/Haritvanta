import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { ArrowLink, Eyebrow } from "@/components/ui";
import { services } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Municipal solid waste management, door-to-door collection, transportation, segregation and processing, material recovery and commercial & industrial waste services.",
};

const sectors = [
  { name: "Urban local bodies", image: img.truckBins },
  { name: "Development authorities", image: img.cityAerial },
  { name: "Industry & manufacturing", image: img.plantNight },
  { name: "Townships & campuses", image: img.binsRow },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="type"
        eyebrow="Our Services"
        title={"Integrated services for\nevery stage of waste."}
        intro="Each service line can be engaged on its own, or combined into a single integrated contract with one point of accountability, shared data and consistent standards."
      />

      {/* Service index strip */}
      <nav aria-label="Services on this page" className="sticky top-0 z-30 hidden border-b border-line bg-white/95 backdrop-blur-sm xl:block">
        <ul className="container-site flex justify-between">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="group flex items-center gap-2 py-5 text-sm text-muted hover:text-forest">
                <span className="text-xs tabular-nums text-bhagwa">{s.no}</span>
                <span className="link-line">{s.title.replace(/ (Waste )?Management$| & Logistics| Services$| Waste Collection/g, "").replace("Waste ", "")}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-white">
        {services.map((s, i) => {
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

      <CtaBand image={img.machinery} title="Need an integrated waste solution?" text="Tell us about your city, site or facility. Our team will help you scope the right combination of services." />
    </>
  );
}
