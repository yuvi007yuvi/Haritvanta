# Harivanta — Corporate Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  page.tsx                    Home (hero, intro, capabilities, why, impact, projects, sustainability, CTA)
  about/                      About Us
  services/                   Services index
  services/[slug]/            Service detail (static, 6 pages)
  projects/                   Projects index with category filter
  projects/[slug]/            Project case study (static, 5 pages)
  sustainability/             Sustainability
  careers/                    Careers + openings
  contact/                    Contact form (client + server validation)
  api/contact/route.ts        Enquiry endpoint — connect Supabase / email here
  privacy-policy/, terms/     Legal templates
  template.tsx                Route transition
  sitemap.ts, robots.ts       SEO
components/
  motion.tsx                  Reveal, SplitText, RevealImage (clip + parallax), Counter, Rule
  Navbar.tsx, Footer.tsx, Logo.tsx, Intro.tsx (first-visit logo reveal)
  home/Hero.tsx, home/Capabilities.tsx
  ProjectSlider.tsx           Draggable, keyboard-accessible carousel
  CircularLoop.tsx            Custom circular-economy diagram
  sections.tsx                PageHero (3 variants), ImpactStats, CtaBand
  ui.tsx                      Button, ArrowLink, Eyebrow
lib/
  data.ts                     ALL editable content: company details, services, projects, stats, jobs
  images.ts                   Photography library (swap URLs for commissioned photos)
```

## Content to replace before launch

Everything below is marked `PLACEHOLDER` in the code.

| What | Where |
| --- | --- |
| Impact figures (waste collected, locations, projects, TPD) — a visible notice shows until `impactPlaceholder = false` | `lib/data.ts` → `impact`, `impactPlaceholder` |
| Project case studies (names, locations, clients, outcomes are representative) | `lib/data.ts` → `projects` |
| Job openings | `lib/data.ts` → `openings` |
| Email, phone, office address, social links, legal entity name | `lib/data.ts` → `company` |
| Production domain | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |
| Privacy Policy & Terms (templates — need legal review) | `app/privacy-policy`, `app/terms` |
| Photography (free-licence Unsplash images; replace with Harivanta's own) | `lib/images.ts` |
| Contact form backend | `app/api/contact/route.ts` |

## Notes

- Animations respect `prefers-reduced-motion`.
- Append `?nomotion` to any URL to render every animation in its final state (for screenshots / QA).
- The intro logo reveal shows once per browser session.
