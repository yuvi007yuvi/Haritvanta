import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { Button, Eyebrow } from "@/components/ui";
import { company, openings } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build a career in environmental services with Haritvanta — operations, processing, logistics, compliance and engineering roles across India.",
};

const reasons = [
  { title: "Work that matters", text: "Your work shows up every day in cleaner streets, recovered resources and healthier neighbourhoods." },
  { title: "Safety first", text: "Proper equipment, training and protocols for every role, from the field to the plant floor." },
  { title: "Learn on the ground", text: "Real operational responsibility early, with mentoring from experienced field leaders." },
  { title: "Grow with us", text: "As our operations expand to new cities, so do opportunities to lead teams and sites." },
];

const steps = ["Apply with your CV", "Conversation with the hiring team", "Site or technical discussion", "Offer and onboarding"];

export default function CareersPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Careers"
        title={"Do work that keeps\ncities clean."}
        intro="We are building teams of operators, engineers, planners and field leaders who want their work to have a visible, lasting impact."
        image={img.engineer}
      />

      {/* Why join */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Why Haritvanta</Eyebrow>
            <SplitText as="h2" text={"A workplace built\non responsibility."} className="display-md mt-6 text-forest" />
          </div>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06} className="border-t border-line pt-6">
                <p className="text-sm tabular-nums text-bhagwa">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="container-site grid grid-cols-12 gap-3 md:gap-5">
          <RevealImage src={img.fieldTeam.src} alt={img.fieldTeam.alt} sizes="(max-width: 768px) 100vw, 50vw" className="col-span-12 aspect-[16/10] md:col-span-6" />
          <RevealImage src={img.conveyorClean.src} alt={img.conveyorClean.alt} sizes="(max-width: 768px) 50vw, 25vw" delay={0.08} className="col-span-6 aspect-[3/4] md:col-span-3 md:mt-20" />
          <RevealImage src={img.truckWorkers.src} alt={img.truckWorkers.alt} sizes="(max-width: 768px) 50vw, 25vw" delay={0.16} className="col-span-6 aspect-[3/4] md:col-span-3" />
        </div>
      </section>

      {/* Openings */}
      <section className="bg-paper py-24 md:py-32" id="openings">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Current Openings</Eyebrow>
              <h2 className="display-md mt-6 text-forest">Open positions.</h2>
            </div>
            {openings.length > 0 && <p className="text-sm text-muted">{openings.length} roles · Updated regularly</p>}
          </div>
          {openings.length === 0 && (
            <Reveal className="mt-14 grid gap-8 border-y border-forest/15 py-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <p className="font-display text-2xl font-semibold text-charcoal md:text-3xl">There are no open positions right now.</p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  We are growing, and new roles open as we add cities and services. Send us your CV and we will get in
                  touch when a suitable opportunity comes up.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <a
                  href={`mailto:${company.careersEmail}?subject=${encodeURIComponent("CV for future opportunities")}`}
                  className="group inline-flex items-center gap-2 font-medium text-forest"
                >
                  <span className="link-line">Send your CV</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </Reveal>
          )}
          <ul className={openings.length ? "mt-14 border-t border-forest/15" : "hidden"}>
            {openings.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 0.04} className="border-b border-forest/15">
                <a
                  href={`mailto:${company.careersEmail}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
                  className="group grid gap-3 py-7 transition-colors md:grid-cols-12 md:items-center md:gap-6"
                >
                  <span className="font-display text-xl font-semibold text-charcoal transition-colors group-hover:text-forest md:col-span-6">
                    {o.title}
                  </span>
                  <span className="text-sm text-muted md:col-span-2">{o.team}</span>
                  <span className="text-sm text-muted md:col-span-2">{o.location}</span>
                  <span className="flex items-center justify-between text-sm md:col-span-2 md:justify-end md:gap-4">
                    <span className="text-muted">{o.type}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest transition-all duration-500 ease-expo group-hover:border-bhagwa group-hover:bg-bhagwa group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process + speculative */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow tone="light">How We Hire</Eyebrow>
            <ol className="mt-10">
              {steps.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 0.07} className="flex items-baseline gap-6 border-t border-white/15 py-6">
                  <span className="text-sm tabular-nums text-bhagwa">0{i + 1}</span>
                  <span className="font-display text-xl font-semibold md:text-2xl">{s}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="flex flex-col justify-end lg:col-span-5 lg:col-start-8" delay={0.15}>
            <h2 className="display-md">Don&rsquo;t see the right role?</h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">
              We are always interested in hearing from people with experience in operations, logistics, engineering
              and environmental management. Send us your CV and tell us how you would like to contribute.
            </p>
            <div className="mt-9">
              <Button href={`mailto:${company.careersEmail}`} variant="primary">Send your CV</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
