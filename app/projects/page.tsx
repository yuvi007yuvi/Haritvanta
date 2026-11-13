import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/sections";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected Haritvanta projects in municipal waste management, material recovery, remediation and industrial waste services.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={"Projects that keep\ncities moving."}
        intro="A selection of programmes across collection, processing, recovery and remediation — each designed around local conditions and measured against clear outcomes."
        image={img.landfillAerial2}
      />
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <ProjectsIndex />
        </div>
      </section>
      <CtaBand image={img.truckOrange} title={"Have a project\nin mind?"} text="From a single facility to a city-wide programme, we can help you plan, mobilise and operate." />
    </>
  );
}
