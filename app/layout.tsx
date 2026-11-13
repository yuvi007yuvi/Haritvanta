import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { company, liveServices } from "@/lib/data";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const SITE = "https://haritvanta.vercel.app";
const DESCRIPTION =
  "Haritvanta provides door-to-door waste collection and street sweeping & sanitation services for municipal bodies, townships and communities in India — with trained crews, fixed schedules and transparent daily reporting.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Haritvanta — Door-to-Door Waste Collection & Street Sanitation Services in India",
    template: "%s | Haritvanta",
  },
  description: DESCRIPTION,
  applicationName: "Haritvanta",
  keywords: [
    "Haritvanta",
    "door to door waste collection",
    "door-to-door garbage collection",
    "street sweeping services",
    "sanitation services India",
    "road sweeping contractor",
    "drain cleaning services",
    "solid waste management company India",
    "municipal sanitation contractor",
    "waste management Uttar Pradesh",
    "Swachh Bharat sanitation services",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE,
    siteName: "Haritvanta",
    title: "Haritvanta — Door-to-Door Waste Collection & Street Sanitation",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Haritvanta — Door-to-Door Waste Collection & Street Sanitation",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/icon.svg" },
  category: "Waste management",
};

/* Structured data so search engines understand who Haritvanta is and what it offers. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: company.name,
      url: SITE,
      logo: `${SITE}/icon.svg`,
      email: company.email,
      description: DESCRIPTION,
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: ["Door-to-door waste collection", "Street sweeping", "Sanitation", "Solid waste management"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Haritvanta",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-IN",
    },
    ...liveServices.map((s) => ({
      "@type": "Service",
      name: s.title,
      description: s.short,
      url: `${SITE}/services/${s.slug}`,
      serviceType: s.title,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    })),
  ],
};

export const viewport: Viewport = { themeColor: "#173F32" };

const introScript = `try{if(sessionStorage.getItem('hv-intro')||location.search.indexOf('nomotion')>-1)document.documentElement.classList.add('intro-seen')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <style>{`.intro-seen .intro{display:none}`}</style>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Intro />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
