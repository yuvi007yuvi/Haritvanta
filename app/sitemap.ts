import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/data";

const base = "https://haritvanta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/projects", "/sustainability", "/careers", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.6 })),
  ];
}
