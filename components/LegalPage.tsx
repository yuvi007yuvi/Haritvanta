import { PageHero } from "./sections";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero variant="type" eyebrow="Legal" title={title} />
      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <p className="text-sm text-muted lg:col-span-3">Last updated: {updated}</p>
          <div className="space-y-12 lg:col-span-7">
            <p className="border-l-2 border-bhagwa pl-5 text-sm leading-relaxed text-muted">
              This is a template for review by Haritvanta&rsquo;s legal advisers and must be finalised before publication.
            </p>
            {sections.map((s, i) => (
              <div key={s.h} className="border-t border-line pt-8">
                <h2 className="font-display text-2xl font-semibold text-forest">
                  <span className="mr-3 text-sm tabular-nums text-bhagwa">{String(i + 1).padStart(2, "0")}</span>
                  {s.h}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/80">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
