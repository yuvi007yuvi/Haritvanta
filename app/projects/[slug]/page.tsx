import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections";
import { Reveal, RevealImage, SplitText } from "@/components/motion";
import { ArrowLink, Eyebrow } from "@/components/ui";
import { getProject, getService, projects } from "@/lib/data";
import { img } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: p.name, description: p.overview, openGraph: { images: [p.image.src] } };
}

export default async function ProjectDetail({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const service = getService(p.serviceSlug);
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { k: "Location", v: p.location },
    { k: "Service", v: p.category },
    { k: "Client", v: p.client },
    { k: "Status", v: p.status },
  ];

  return (
    <>
      {/* Hero: title on forest, landscape image below with meta bar overlapping */}
      <section className="bg-[linear-gradient(to_bottom,#0F2C23_68%,#ffffff_68%)] pt-36 text-white md:pt-44">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-3 text-white/60">
            <Link href="/projects" className="link-line hover:text-white">Projects</Link>
            <span className="h-px w-6 bg-bhagwa" aria-hidden />
            <span>{p.category}</span>
          </nav>
          <SplitText as="h1" immediate delay={0.1} text={p.name} className="display-xl mt-8 max-w-[14ch]" />
        </div>
        <div className="container-site relative mt-14 md:mt-20">
          <RevealImage src={p.image.src} alt={p.image.alt} priority sizes="(max-width: 1440px) 100vw, 1360px" className="aspect-[16/10] md:aspect-[21/9]" />
        </div>
      </section>
      <div className="bg-white">
        <div className="container-site">
          <dl className="grid grid-cols-2 border-b border-line md:grid-cols-4">
            {meta.map((m, i) => (
              <Reveal key={m.k} delay={i * 0.06} className={`py-7 pr-4 ${i ? "md:border-l md:border-line md:pl-8" : ""} ${i % 2 ? "border-l border-line pl-5 md:pl-8" : ""}`}>
                <dt className="eyebrow text-muted">{m.k}</dt>
                <dd className="mt-2 font-display text-lg font-semibold text-forest">{m.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Overview + challenge */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <SplitText as="p" text={p.overview} className="mt-8 font-display text-[1.6rem] font-medium leading-[1.35] tracking-tight text-forest md:text-[2.2rem]" />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-16" delay={0.1}>
            <div className="border-l-2 border-bhagwa pl-6">
              <p className="eyebrow text-muted">The Challenge</p>
              <p className="mt-4 leading-relaxed text-charcoal/80">{p.challenge}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach with image */}
      <section className="bg-paper">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[380px]">
            <RevealImage src={p.gallery[0].src} alt={p.gallery[0].alt} sizes="(max-width: 1024px) 100vw, 50vw" parallax={6} className="absolute inset-0 h-full" direction="right" />
          </div>
          <div className="px-5 py-20 sm:px-8 md:py-28 lg:px-16 xl:px-24">
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="display-md mt-6 text-forest">How we delivered.</h2>
            <ol className="mt-12">
              {p.approach.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 0.06} className="flex gap-6 border-t border-forest/15 py-6">
                  <span className="pt-0.5 text-sm tabular-nums text-bhagwa">0{i + 1}</span>
                  <span className="text-lg text-charcoal">{a}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid grid-cols-12 gap-4 md:gap-6">
          <RevealImage src={p.gallery[1].src} alt={p.gallery[1].alt} sizes="(max-width: 768px) 100vw, 40vw" className="col-span-12 aspect-[4/5] md:col-span-5" />
          <RevealImage src={p.gallery[2].src} alt={p.gallery[2].alt} sizes="(max-width: 768px) 100vw, 60vw" delay={0.12} parallax={5} className="col-span-12 aspect-[4/3] md:col-span-7 md:mt-32" />
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow tone="light">Outcomes</Eyebrow>
            <h2 className="display-md mt-6">What changed.</h2>
            {service && (
              <ArrowLink href={`/services/${service.slug}`} className="mt-10 text-white">About this service</ArrowLink>
            )}
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {p.outcomes.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 0.08} className="border-t border-white/15 py-8">
                <p className="font-display text-2xl font-semibold leading-snug md:text-[1.75rem]">{o}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project */}
      <Link href={`/projects/${next.slug}`} className="group block bg-white">
        <div className="container-site grid items-center gap-8 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6">
            <p className="eyebrow text-muted">Next project</p>
            <p className="display-md mt-5 text-forest">{next.name}</p>
            <p className="mt-3 text-muted">{next.location}</p>
            <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full border border-forest/20 text-forest transition-all duration-500 ease-expo group-hover:border-bhagwa group-hover:bg-bhagwa group-hover:text-white">
              <ArrowRight className="h-5 w-5" aria-hidden />
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden md:col-span-6">
            <Image src={next.image.src} alt={next.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]" />
          </div>
        </div>
      </Link>

      <CtaBand image={img.seaLink} />
    </>
  );
}
