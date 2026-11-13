import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/sections";
import { Reveal, RevealImage } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { company } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Harivanta to discuss waste management and environmental services for your city, site or facility.",
};

export default function ContactPage() {
  const details = [
    { k: "General enquiries", v: company.email, href: `mailto:${company.email}` },
    { k: "Phone", v: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { k: "Careers", v: company.careersEmail, href: `mailto:${company.careersEmail}` },
  ];

  return (
    <>
      <PageHero
        variant="type"
        eyebrow="Contact"
        title={"Let’s discuss\nyour project."}
        intro="Whether you are planning a city-wide programme, need support for a single facility or want to explore a partnership, our team is ready to help."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Send an Enquiry</Eyebrow>
            <h2 className="display-md mb-12 mt-6 text-forest">Tell us what you need.</h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <RevealImage src={img.truckBlue.src} alt={img.truckBlue.alt} sizes="(max-width: 1024px) 100vw, 33vw" className="aspect-[4/3]" />
              <Reveal delay={0.1}>
                <dl className="mt-10 divide-y divide-line border-y border-line">
                  {details.map((d) => (
                    <div key={d.k} className="py-5">
                      <dt className="eyebrow text-muted">{d.k}</dt>
                      <dd className="mt-2">
                        <a href={d.href} className="link-line text-lg font-medium text-forest">{d.v}</a>
                      </dd>
                    </div>
                  ))}
                  <div className="py-5">
                    <dt className="eyebrow text-muted">Office</dt>
                    <dd className="mt-2 leading-relaxed text-charcoal">
                      {company.address.map((l) => <span key={l} className="block">{l}</span>)}
                    </dd>
                  </div>
                  <div className="py-5">
                    <dt className="eyebrow text-muted">Hours</dt>
                    <dd className="mt-2 text-charcoal">{company.hours}</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
