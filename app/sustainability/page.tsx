import type { Metadata } from "next";
import Image from "next/image";
import { CircularLoop } from "@/components/CircularLoop";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Haritvanta's environmental approach: waste reduction, resource recovery, recycling, environmental protection and community participation.",
};

const commitments = [
  {
    title: "Keep waste out of landfills",
    text: "Every facility we operate is measured on diversion — how much is recovered as compost, recyclables or fuel, and how little remains as residual.",
    image: img.balesCardboard,
  },
  {
    title: "Protect land, water and air",
    text: "Covered transport, leachate management, dust and odour control and regular environmental monitoring are standard on every site.",
    image: img.river,
  },
  {
    title: "Return organics to the soil",
    text: "Wet waste is processed into compost that supports agriculture and urban greening, closing the nutrient loop locally.",
    image: img.soilHands,
  },
  {
    title: "Formalise and dignify the work",
    text: "We integrate waste pickers and sanitation workers into safe, fairly paid and properly equipped roles.",
    image: img.collectionCrew,
  },
];

const sdgs = [
  { no: "06", title: "Clean Water and Sanitation" },
  { no: "08", title: "Decent Work and Economic Growth" },
  { no: "11", title: "Sustainable Cities and Communities" },
  { no: "12", title: "Responsible Consumption and Production" },
  { no: "13", title: "Climate Action" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Sustainability"
        title={"Building a\nCircular Future."}
        intro="Waste management is environmental work at its most practical. Our approach treats every tonne as material to be recovered, and every site as an environment to be protected."
        image={img.soil}
      />

      {/* Principle */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-site">
          <Eyebrow>Our Principle</Eyebrow>
          <SplitText
            as="p"
            text="The most sustainable tonne of waste is the one never created. The next best is the one returned to use."
            className="mt-8 max-w-5xl font-display text-[1.9rem] font-medium leading-[1.25] tracking-tight text-forest md:text-[3.25rem]"
          />
        </div>
      </section>

      {/* Circular loop */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-site">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Five Pillars</Eyebrow>
              <h2 className="display-md mt-6 text-forest">Our environmental approach.</h2>
            </div>
            <Reveal className="self-end lg:col-span-4 lg:col-start-9">
              <p className="leading-relaxed text-muted">
                Five connected pillars shape how we design and operate every programme. Select a pillar to read more.
              </p>
            </Reveal>
          </div>
          <CircularLoop tone="light" />
        </div>
      </section>

      {/* Commitments — alternating editorial rows */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site">
          <Eyebrow>Our Commitments</Eyebrow>
          <SplitText as="h2" text={"What responsibility\nlooks like in practice."} className="display-lg mt-6 text-forest" />
          <div className="mt-20 space-y-24 md:space-y-32">
            {commitments.map((c, i) => (
              <div key={c.title} className="grid items-center gap-10 lg:grid-cols-12">
                <RevealImage
                  src={c.image.src}
                  alt={c.image.alt}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  parallax={5}
                  direction={i % 2 ? "left" : "right"}
                  className={`aspect-[4/3] lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}
                />
                <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : "lg:col-start-8"}`}>
                  <p className="font-display text-sm font-semibold tabular-nums text-bhagwa">0{i + 1} / 0{commitments.length}</p>
                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl">{c.title}</h3>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{c.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-white md:py-32">
        <Image src={img.solar.src} alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="container-site relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="light">Global Alignment</Eyebrow>
            <h2 className="display-md mt-6">Contributing to the UN Sustainable Development Goals.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/65">
              Our services contribute directly to several of the goals set out in the 2030 Agenda for Sustainable
              Development.
            </p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {sdgs.map((g, i) => (
              <Reveal as="li" key={g.no} delay={i * 0.05} className="flex items-baseline gap-6 border-t border-white/15 py-6">
                <span className="w-14 font-display text-3xl font-semibold tabular-nums text-bhagwa">{g.no}</span>
                <span className="text-lg">{g.title}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand image={img.greenCity} title={"Make your city\nmore circular."} text="Work with Haritvanta to design waste programmes that recover more and dispose of less." />
    </>
  );
}
