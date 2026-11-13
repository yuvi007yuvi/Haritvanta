import Image from "next/image";
import { impact, impactPlaceholder } from "@/lib/data";
import type { Img } from "@/lib/images";
import { Counter, Reveal, RevealImage, Rule, SplitText } from "./motion";
import { Button, Eyebrow } from "./ui";

/* Impact figures ---------------------------------------------------------- */
export function ImpactStats({ tone = "forest" }: { tone?: "forest" | "paper" }) {
  const dark = tone === "forest";
  return (
    <section className={`${dark ? "bg-forest text-white" : "bg-paper text-charcoal"} py-24 md:py-32`} aria-labelledby="impact-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow tone={dark ? "light" : "dark"}>Our Impact</Eyebrow>
            <SplitText as="h2" text={"Measured operations.\nAccountable outcomes."} className={`display-lg mt-6 ${dark ? "text-white" : "text-forest"}`} />
          </div>
          <Reveal className="self-end lg:col-span-3 lg:col-start-10" delay={0.1}>
            <p className={dark ? "leading-relaxed text-white/70" : "leading-relaxed text-muted"}>
              Every household covered, every road swept and every awareness drive is recorded and reported. These
              indicators summarise the scale of our work across contracts.
            </p>
          </Reveal>
        </div>

        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${dark ? "text-white" : ""}`}>
          {impact.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-t py-8 sm:pr-8 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8 ${dark ? "border-white/15" : "border-line"} ${
                i % 2 === 1 ? "sm:border-l sm:pl-8" : ""
              } ${i === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <p className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>{s.label}</p>
              <p className="mt-5 flex items-baseline gap-1 font-display font-semibold leading-none tracking-tight">
                <Counter value={s.value} className="text-[3.25rem] md:text-[4rem]" />
                <span className="text-3xl text-bhagwa">{s.suffix}</span>
              </p>
              <p className={`mt-3 text-sm uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-muted"}`}>{s.unit}</p>
              <p className={`mt-6 text-sm ${dark ? "text-white/60" : "text-muted"}`}>{s.note}</p>
            </Reveal>
          ))}
        </div>

        {impactPlaceholder && (
          <p className={`mt-14 flex items-start gap-3 text-xs ${dark ? "text-white/45" : "text-muted"}`}>
            <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-bhagwa" aria-hidden />
            Figures shown are placeholders and will be updated with verified company data.
          </p>
        )}
      </div>
    </section>
  );
}

/* Closing call to action -------------------------------------------------- */
export function CtaBand({
  image,
  title = "Let's Build a Cleaner Tomorrow.",
  text = "Partner with Haritvanta to create smarter, more sustainable waste management solutions.",
  cta = "Discuss a Project",
}: {
  image: Img;
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-white">
      <div className="grid lg:grid-cols-12">
        <div className="relative min-h-[320px] lg:col-span-6 lg:min-h-[640px]">
          <RevealImage src={image.src} alt={image.alt} sizes="(max-width: 1024px) 100vw, 50vw" parallax={6} className="absolute inset-0 h-full" direction="right" />
        </div>
        <div className="relative flex flex-col justify-center px-5 py-20 sm:px-8 md:py-28 lg:col-span-6 lg:px-16 xl:px-24">
          <Rule className="mb-10 w-16 text-bhagwa" />
          <SplitText as="h2" text={title} className="display-lg max-w-[13ch]" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">{text}</p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">{cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Inner page hero ----------------------------------------------------------
   Three compositions so inner pages don't share one template:
   - "image": full-bleed photograph with title bottom-left
   - "split": title on forest panel, photograph on the right
   - "type":  typographic, forest background, no image                        */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  variant = "image",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: Img;
  variant?: "image" | "split" | "type";
}) {
  if (variant === "split" && image) {
    return (
      <section className="grid bg-forest-deep text-white lg:min-h-[86vh] lg:grid-cols-12">
        <div className="flex flex-col justify-end px-5 pb-14 pt-36 sm:px-8 lg:col-span-6 lg:pb-20 lg:pl-12 lg:pr-16 xl:pl-[max(3rem,calc((100vw-1360px)/2+3rem))]">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <SplitText as="h1" immediate delay={0.15} text={title} className="display-lg mt-7" />
          {intro && (
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="relative min-h-[50vh] lg:col-span-6">
          <RevealImage src={image.src} alt={image.alt} priority sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 h-full" direction="left" />
        </div>
      </section>
    );
  }

  if (variant === "type") {
    return (
      <section className="bg-forest-deep pb-16 pt-40 text-white md:pb-24 md:pt-52">
        <div className="container-site">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <SplitText as="h1" immediate delay={0.15} text={title} className="display-xl mt-8 max-w-[16ch]" />
          {intro && (
            <Reveal delay={0.4} className="mt-12 grid border-t border-white/15 pt-8 lg:grid-cols-12">
              <p className="text-lg leading-relaxed text-white/70 lg:col-span-6 lg:col-start-7">{intro}</p>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-forest-deep text-white md:min-h-[86vh]">
      {image && (
        <div className="absolute inset-0">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="animate-[heroZoom_2.4s_cubic-bezier(0.16,1,0.3,1)_both] object-cover" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/20" aria-hidden />
      <div className="container-site relative pb-14 pt-40 md:pb-20">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <SplitText as="h1" immediate delay={0.15} text={title} className="display-xl mt-7 max-w-[16ch]" />
        {intro && (
          <Reveal delay={0.45} className="mt-10 grid border-t border-white/20 pt-8 lg:grid-cols-12">
            <p className="text-lg leading-relaxed text-white/75 lg:col-span-6">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
