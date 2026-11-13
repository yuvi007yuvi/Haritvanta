import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { ProjectSlider } from "@/components/ProjectSlider";
import { CircularLoop } from "@/components/CircularLoop";
import { CtaBand, ImpactStats } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { ArrowLink, Button, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/data";
import { img } from "@/lib/images";

const pillars = [
  {
    title: "Operational Excellence",
    text: "Planned routes, trained crews and preventive maintenance — the unglamorous disciplines that make a city clean every single day.",
  },
  {
    title: "Responsible Waste Management",
    text: "Segregation at source, scientific processing and minimal residuals, aligned with the Solid Waste Management Rules, 2016.",
  },
  {
    title: "Process Transparency",
    text: "Every load weighed, every trip logged. Clients receive clear, auditable reporting rather than estimates.",
  },
  {
    title: "Technology-Enabled Operations",
    text: "GPS-tracked fleets, digital attendance and weighbridge integration give real-time visibility across the network.",
  },
  {
    title: "Environmental Responsibility",
    text: "We measure success by what we keep out of landfills, rivers and the air — and by the safety of our people.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------- Who we are */}
      <section id="who-we-are" className="scroll-mt-20 bg-[linear-gradient(to_bottom,#F6F7F3_72%,#ffffff_72%)] pt-24 md:pt-36" aria-labelledby="who-title">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Eyebrow>Who We Are</Eyebrow>
              <SplitText as="h2" text={"Creating Value\nBeyond Waste."} className="display-lg mt-6 text-forest" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
              <Reveal>
                <p className="lede">
                  Haritvanta is an Indian waste management company keeping cities clean at street level — through
                  reliable door-to-door waste collection and daily sweeping &amp; sanitation.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-muted">
                  Our trained field crews collect segregated waste from every household on fixed schedules, sweep
                  roads and markets, clean drains and keep public spaces sanitary for municipal bodies and communities.
                  We are now preparing to add transportation, processing and material recovery — building towards a
                  fully integrated waste service.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ArrowLink href="/about" className="mt-10 text-forest">Explore Haritvanta</ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Asymmetric image composition */}
        <div className="container-site mt-20 md:mt-28">
          <div className="grid grid-cols-12 items-end gap-4 md:gap-8">
            <RevealImage
              src={img.fieldTeam.src}
              alt={img.fieldTeam.alt}
              sizes="(max-width: 768px) 100vw, 66vw"
              parallax={8}
              className="col-span-12 aspect-[16/10] md:col-span-8 md:aspect-[16/9]"
            />
            <div className="col-span-12 md:col-span-4">
              <RevealImage
                src={img.conveyorWorker.src}
                alt={img.conveyorWorker.alt}
                sizes="(max-width: 768px) 100vw, 33vw"
                delay={0.15}
                className="aspect-[4/5]"
              />
              <Reveal delay={0.2}>
                <p className="mt-5 border-l-2 border-bhagwa pl-4 text-sm leading-relaxed text-muted">
                  From field crews to processing floors, our operations are built around trained people working in
                  safe, accountable systems.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />

      {/* ---------------------------------------------------------- Why Haritvanta */}
      <section className="bg-paper" aria-labelledby="why-title">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-0">
            <div className="lg:sticky lg:top-0 lg:h-screen">
              <RevealImage
                src={img.teamOverhead.src}
                alt={img.teamOverhead.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                parallax={6}
                direction="right"
                className="absolute inset-0 h-full lg:relative"
              />
              <div className="absolute bottom-0 left-0 hidden max-w-xs bg-forest p-8 text-white lg:block">
                <p className="eyebrow text-bhagwa">Our approach</p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug">
                  One accountable partner for the entire waste chain.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 py-24 sm:px-8 md:py-32 lg:px-16 xl:px-24">
            <Eyebrow>Why Haritvanta</Eyebrow>
            <SplitText as="h2" text={"Built for the realities\nof Indian cities."} className="display-md mt-6 max-w-[16ch] text-forest" />
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-lg leading-relaxed text-muted">
                Waste systems succeed or fail on daily execution. Our strengths come from field experience, disciplined
                processes and a clear commitment to environmental outcomes.
              </p>
            </Reveal>
            <ol className="mt-14 border-t border-forest/15">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.05} className="group grid grid-cols-[3rem_1fr] border-b border-forest/15 py-8">
                  <span className="pt-1 text-sm tabular-nums text-bhagwa">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-charcoal md:text-[1.4rem]">{p.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* ---------------------------------------------------------- Featured projects */}
      <section className="overflow-hidden bg-white py-24 md:py-36" aria-labelledby="projects-title">
        <div className="container-site">
          <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Featured Projects</Eyebrow>
              <SplitText as="h2" text={"Work on the ground,\nacross India."} className="display-lg mt-6 text-forest" />
            </div>
            <Reveal delay={0.1}>
              <ArrowLink href="/projects" className="text-forest">View all projects</ArrowLink>
            </Reveal>
          </div>
          <ProjectSlider items={projects} />
        </div>
      </section>

      {/* ---------------------------------------------------------- Sustainability */}
      <section className="relative overflow-hidden bg-forest-deep text-white" aria-labelledby="sustain-title">
        <div className="relative h-[60vh] min-h-[420px] md:h-[78vh]">
          <RevealImage src={img.seedling.src} alt={img.seedling.alt} sizes="100vw" parallax={10} className="absolute inset-0 h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 via-forest-deep/40 to-forest-deep" aria-hidden />
          <div className="container-site relative flex h-full flex-col justify-end pb-12 md:pb-20">
            <Eyebrow tone="light">Sustainability</Eyebrow>
            <SplitText as="h2" text={"Building a\nCircular Future."} className="display-xl mt-6 max-w-[12ch]" />
          </div>
        </div>
        <div className="container-site py-20 md:py-28">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-lg leading-relaxed text-white/75 md:text-xl">
                Waste is a resource in the wrong place. Our environmental approach is designed around a simple
                principle: keep materials in use for as long as possible, and protect the land, water and communities
                around every site we operate.
              </p>
            </Reveal>
            <Reveal className="self-end lg:col-span-3 lg:col-start-10" delay={0.1}>
              <Button href="/sustainability" variant="outline-light">Our Approach</Button>
            </Reveal>
          </div>
          <CircularLoop />
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-2" aria-hidden>
          {[img.bottlesCans, img.soil, img.balesCardboard].map((p) => (
            <div key={p.src} className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
              <Image src={p.src} alt="" fill sizes="33vw" className="object-cover opacity-80 transition-[opacity,transform] duration-[1.2s] ease-expo hover:scale-105 hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <CtaBand image={img.greenCity} />
    </>
  );
}
