import type { Metadata } from "next";
import { CtaBand, ImpactStats, PageHero } from "@/components/sections";
import { Reveal, RevealImage, Rule, SplitText } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { img } from "@/lib/images";
import { Team } from "@/components/Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Haritvanta — door-to-door waste collection, street sanitation and IEC awareness in India. Meet our team: Ranveer Singh, Abhishek Bajpai, Sujeet Singh and Yuvraj Singh Tomar.",
};

const values = [
  { title: "Responsibility", text: "We take ownership of outcomes — not just activities — across every contract we operate." },
  { title: "Discipline", text: "Clean cities are built on routine. We plan carefully and execute consistently, every day." },
  { title: "Transparency", text: "We measure what we do and share it openly with clients, regulators and communities." },
  { title: "Respect", text: "For the people who do this work, the communities we serve and the environment we share." },
];

const chain = [
  { step: "Generation", text: "IEC awareness and segregation at source", live: true },
  { step: "Collection", text: "Door-to-door collection and street sweeping", live: true },
  { step: "Transportation", text: "Tracked primary and secondary fleets", live: false },
  { step: "Processing", text: "Segregation, composting and RDF", live: false },
  { step: "Recovery", text: "Recyclables to authorised recyclers", live: false },
  { step: "Disposal", text: "Scientific handling of residuals only", live: false },
];

const frameworks = [
  "Solid Waste Management Rules, 2016",
  "Plastic Waste Management Rules, 2016 (as amended)",
  "Swachh Bharat Mission (Urban) 2.0 guidelines",
  "State Pollution Control Board consents & conditions",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Haritvanta"
        title={"An environmental\ninfrastructure partner."}
        intro="We build and operate the everyday systems that keep cities clean and resources in use — with the discipline of an infrastructure company and the conviction of an environmental one."
        image={img.cityAerial}
      />

      {/* Statement */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow>Our Story</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <SplitText
              as="p"
              text="Haritvanta was founded on a simple observation: India's cities do not lack intent on waste — they lack reliable, accountable execution."
              className="font-display text-[1.75rem] font-medium leading-[1.3] tracking-tight text-forest md:text-[2.5rem]"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <Reveal>
                <p className="leading-relaxed text-muted">
                  The name Haritvanta draws from <em>harit</em> — green, the living world — and speaks to what we work
                  to protect. Our work, however, is grounded in the practical: vehicles that arrive on time, crews that
                  are trained and equipped, facilities that run safely, and data that clients can trust.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="leading-relaxed text-muted">
                  Today we deliver door-to-door waste collection and street sweeping &amp; sanitation for urban local
                  bodies and communities. Transportation, processing and material recovery services are being
                  prepared next, so that clients can rely on one accountable team for the whole waste chain.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision with offset image */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <RevealImage src={img.planReview.src} alt={img.planReview.alt} sizes="(max-width: 1024px) 100vw, 45vw" parallax={6} className="aspect-[4/5] lg:col-span-5" />
          <div className="lg:col-span-6 lg:col-start-7">
            {[
              { k: "Mission", v: "To deliver integrated, transparent and environmentally responsible waste management services that measurably improve the places we work in." },
              { k: "Vision", v: "A future in which waste in India is managed as a resource — collected reliably, processed scientifically and returned to productive use." },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 0.1} className={i ? "mt-14" : ""}>
                <Rule className="w-full text-forest/20" />
                <p className="eyebrow mt-6 text-bhagwa">{item.k}</p>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug text-forest md:text-3xl">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value chain diagram */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>How We Work</Eyebrow>
              <SplitText as="h2" text={"Starting at the source,\nbuilding the full chain."} className="display-lg mt-6 text-forest" />
            </div>
            <Reveal className="self-end lg:col-span-4 lg:col-start-9">
              <p className="leading-relaxed text-muted">
                Today we work where clean cities begin — awareness, segregation and collection. The next stages are
                being prepared so that one accountable partner can manage the whole flow.
              </p>
            </Reveal>
          </div>
          <ol className="relative mt-20 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {chain.map((c, i) => (
              <Reveal as="li" key={c.step} delay={i * 0.08} className="relative border-l border-line px-6 pb-10 lg:pb-0">
                <span className={`absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full ${c.live ? "bg-bhagwa" : "border border-line bg-white"}`} aria-hidden />
                <p className="flex items-center gap-3 text-xs tabular-nums text-muted">
                  0{i + 1}
                  <span className={`text-[0.65rem] uppercase tracking-[0.12em] ${c.live ? "text-bhagwa" : "text-muted/70"}`}>{c.live ? "Today" : "Coming soon"}</span>
                </p>
                <p className={`mt-10 font-display text-xl font-semibold lg:mt-24 ${c.live ? "text-forest" : "text-charcoal/50"}`}>{c.step}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest text-white">
        <div className="grid lg:grid-cols-12">
          <div className="px-5 py-24 sm:px-8 md:py-32 lg:col-span-7 lg:pl-12 lg:pr-16 xl:pl-[max(3rem,calc((100vw-1360px)/2+3rem))]">
            <Eyebrow tone="light">Our Values</Eyebrow>
            <SplitText as="h2" text={"What guides\nour work."} className="display-lg mt-6" />
            <dl className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06} className="border-t border-white/15 pt-6">
                  <dt className="font-display text-xl font-semibold">
                    <span className="mr-3 text-sm tabular-nums text-bhagwa">0{i + 1}</span>
                    {v.title}
                  </dt>
                  <dd className="mt-3 leading-relaxed text-white/65">{v.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[420px] lg:col-span-5">
            <RevealImage src={img.sweeper.src} alt={img.sweeper.alt} sizes="(max-width: 1024px) 100vw, 40vw" className="absolute inset-0 h-full" direction="left" />
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Standards &amp; Compliance</Eyebrow>
            <h2 className="display-md mt-6 text-forest">Operating within India&rsquo;s regulatory framework.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Our systems, documentation and reporting are designed around the national and state frameworks that
              govern waste management.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-6 lg:col-start-7">
            {frameworks.map((f, i) => (
              <Reveal as="li" key={f} delay={i * 0.04} className="flex items-baseline gap-6 py-5">
                <span className="text-xs tabular-nums text-bhagwa">0{i + 1}</span>
                <span className="text-charcoal">{f}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Team />
      <ImpactStats tone="paper" />
      <CtaBand image={img.delhi} />
    </>
  );
}
