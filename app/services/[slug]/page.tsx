import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { Reveal, RevealImage, Rule, SplitText } from "@/components/motion";
import { ArrowLink, Eyebrow } from "@/components/ui";
import { getService, projects, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.short, openGraph: { images: [s.detailImage.src] } };
}

export default async function ServiceDetail({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const idx = services.indexOf(s);
  const next = services[(idx + 1) % services.length];
  const related = projects.filter((p) => p.serviceSlug === s.slug);

  return (
    <>
      <PageHero variant="split" eyebrow={`Service ${s.no} / ${String(services.length).padStart(2, "0")}`} title={s.title} intro={s.short} image={s.detailImage} />

      {/* Overview */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow>Overview</Eyebrow>
            <nav aria-label="Breadcrumb" className="mt-6 text-sm text-muted">
              <Link href="/services" className="link-line hover:text-forest">All services</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">{s.no}</span>
            </nav>
          </div>
          <div className="lg:col-span-8">
            <SplitText as="p" text={s.summary} className="font-display text-[1.5rem] font-medium leading-[1.4] tracking-tight text-forest md:text-[2rem]" />
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>Scope of Service</Eyebrow>
                <h2 className="display-md mt-6 text-forest">What we deliver.</h2>
                <div className="mt-10 hidden lg:block">
                  <RevealImage src={s.gallery[0].src} alt={s.gallery[0].alt} sizes="30vw" className="aspect-[4/5]" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {s.scope.map((sc, i) => (
                <Reveal key={sc.title} delay={i * 0.05} className="grid gap-4 border-t border-forest/15 py-10 md:grid-cols-[5rem_1fr]">
                  <span className="font-display text-sm font-semibold tabular-nums text-bhagwa">{s.no}.{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-charcoal">{sc.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-muted">{sc.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="container-site">
          <Eyebrow tone="light">Our Process</Eyebrow>
          <SplitText as="h2" text="How the work is delivered." className="display-md mt-6 max-w-[18ch]" />
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {s.process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1} className="lg:pr-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bhagwa text-sm tabular-nums text-bhagwa">
                    0{i + 1}
                  </span>
                  {i < s.process.length - 1 && <Rule className="hidden flex-1 text-white/20 lg:block" delay={0.3 + i * 0.15} />}
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid grid-cols-12 gap-4 md:gap-6">
          <RevealImage src={s.gallery[1].src} alt={s.gallery[1].alt} sizes="(max-width: 768px) 100vw, 60vw" parallax={6} className="col-span-12 aspect-[16/10] md:col-span-7" />
          <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:gap-6 md:pt-24">
            <RevealImage src={s.gallery[2].src} alt={s.gallery[2].alt} sizes="(max-width: 768px) 100vw, 40vw" delay={0.1} className="aspect-[4/3]" />
            <Reveal delay={0.2} className="border-t border-line pt-6">
              <p className="eyebrow text-muted">Who this is for</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.clients.map((c) => (
                  <li key={c} className="border border-line px-3.5 py-2 text-sm text-charcoal">{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="border-t border-line bg-white py-24 md:py-28">
          <div className="container-site">
            <div className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow>Related Work</Eyebrow>
                <h2 className="display-md mt-6 text-forest">Projects in this service.</h2>
              </div>
              <ArrowLink href="/projects" className="hidden text-forest md:inline-flex">All projects</ArrowLink>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]" />
                    </div>
                    <p className="mt-5 text-sm text-muted">{p.location}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-charcoal group-hover:text-forest">{p.name}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next service */}
      <Link href={`/services/${next.slug}`} className="group relative block overflow-hidden bg-forest-deep text-white">
        <Image src={next.image.src} alt="" fill sizes="100vw" className="object-cover opacity-30 transition-all duration-[1.4s] ease-expo group-hover:scale-105 group-hover:opacity-45" />
        <div className="container-site relative flex flex-col gap-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div>
            <p className="eyebrow text-white/60">Next service — {next.no}</p>
            <p className="display-md mt-5 max-w-[18ch]">{next.title}</p>
          </div>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bhagwa transition-transform duration-500 ease-expo group-hover:translate-x-2">
            <ArrowRight className="h-6 w-6" aria-hidden />
          </span>
        </div>
      </Link>

      <CtaBand image={s.gallery[0]} title={"Discuss your\nrequirement."} text={`Speak with our team about ${s.title.toLowerCase()} for your city, site or facility.`} />
    </>
  );
}
