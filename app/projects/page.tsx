import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/sections";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description: "Haritvanta projects in door-to-door waste collection and street sweeping & sanitation across Uttar Pradesh.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={"Projects that keep\ncities moving."}
        intro="Programmes in door-to-door collection and street sanitation — each planned around local conditions and measured against clear daily outcomes."
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
