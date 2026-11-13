import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://haritvanta.vercel.app"),
  title: {
    default: "Haritvanta — Integrated Waste Management & Environmental Services",
    template: "%s | Haritvanta",
  },
  description:
    "Haritvanta delivers integrated waste management and environmental services in India — collection, transportation, processing, material recovery and industrial waste solutions.",
  keywords: ["waste management India", "municipal solid waste", "door-to-door collection", "material recovery facility", "recycling", "environmental services"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Haritvanta",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#173F32" };

const introScript = `try{if(sessionStorage.getItem('hv-intro')||location.search.indexOf('nomotion')>-1)document.documentElement.classList.add('intro-seen')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <style>{`.intro-seen .intro{display:none}`}</style>
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
