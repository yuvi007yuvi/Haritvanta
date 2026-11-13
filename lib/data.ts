import { img, type Img } from "./images";

/* ------------------------------------------------------------------ */
/*  COMPANY DETAILS — replace placeholders with verified information   */
/* ------------------------------------------------------------------ */
export const company = {
  name: "Haritvanta",
  legalName: "Haritvanta Environmental Services Pvt. Ltd.",
  tagline: "Integrated waste management & environmental services",
  email: "haritvantaofficial@gmail.com",
  careersEmail: "haritvantaofficial@gmail.com", // use a separate careers inbox here if you create one
  phone: "+91 00000 00000", // PLACEHOLDER
  address: ["Corporate Office", "Address to be confirmed", "India"], // PLACEHOLDER
  hours: "Monday – Saturday, 9:30 – 18:30 IST",
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
];

/* ------------------------------------------------------------------ */
/*  IMPACT FIGURES                                                      */
/*  IMPORTANT: these are PLACEHOLDER values. Replace with verified      */
/*  company data before publishing. `placeholder: true` shows a notice. */
/* ------------------------------------------------------------------ */
export const impactPlaceholder = true;

export const impact = [
  { value: 10000, suffix: "+", unit: "households", label: "Households covered", note: "Daily door-to-door collection" },
  { value: 100, suffix: "+", unit: "km / day", label: "Road length swept", note: "Manual and mechanised sweeping" },
  { value: 10, suffix: "+", unit: "wards", label: "Wards served", note: "Across active contracts" },
  { value: 200, suffix: "+", unit: "staff", label: "Sanitation workforce", note: "Trained, equipped field crews" },
];

/* ------------------------------------------------------------------ */
/*  SERVICES                                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  slug: string;
  no: string;
  title: string;
  short: string;
  summary: string;
  image: Img;
  detailImage: Img;
  gallery: Img[];
  scope: { title: string; text: string }[];
  process: { title: string; text: string }[];
  clients: string[];
  /** "live" = operating today; "upcoming" = launching soon */
  status: "live" | "upcoming";
};

/** Services Haritvanta operates today. Move a slug here when a service goes live. */
export const liveSlugs = ["door-to-door-collection", "sweeping-sanitation", "iec-awareness"];

const allServices: Omit<Service, "status">[] = [
  {
    slug: "municipal-solid-waste-management",
    no: "01",
    title: "Municipal Solid Waste Management",
    short:
      "End-to-end management of urban solid waste for municipal bodies — from planning and collection to processing and scientific disposal.",
    summary:
      "Urban local bodies need a partner that can take responsibility for the entire waste chain. Haritvanta plans, operates and reports on integrated municipal systems built around the Solid Waste Management Rules, 2016 — with every stage measured and every tonne accounted for.",
    image: img.landfillDozer,
    detailImage: img.landfillAerial,
    gallery: [img.truckWorkers, img.machinery, img.landfillAerial2],
    scope: [
      { title: "City waste assessment", text: "Ward-level baseline studies covering generation, composition, existing infrastructure and service gaps." },
      { title: "Integrated operations", text: "Collection, secondary transfer, processing and residual disposal operated as one accountable system." },
      { title: "Legacy & dumpsite management", text: "Bio-mining and remediation planning for legacy waste, with recovered fractions directed to reuse." },
      { title: "Compliance & reporting", text: "Documentation aligned with SWM Rules, 2016 and state pollution control board requirements." },
    ],
    process: [
      { title: "Assess", text: "Survey wards, characterise waste streams and map existing assets." },
      { title: "Design", text: "Define routes, fleet, manpower, processing capacity and performance indicators." },
      { title: "Mobilise", text: "Deploy trained teams, vehicles and monitoring systems in planned phases." },
      { title: "Operate & report", text: "Run daily operations with transparent, auditable reporting to the client." },
    ],
    clients: ["Municipal corporations", "Nagar palikas & nagar panchayats", "Development authorities", "Smart city SPVs"],
  },
  {
    slug: "door-to-door-collection",
    no: "02",
    title: "Door-to-Door Waste Collection",
    short:
      "Scheduled, segregated household and commercial collection that builds daily habits and keeps neighbourhoods clean.",
    summary:
      "Reliable doorstep collection is where every clean city begins. Our crews follow fixed routes and timings, collect waste in segregated streams, and work with residents to improve segregation at source over time.",
    image: img.doorToDoor,
    detailImage: img.collectionCrew,
    gallery: [img.truckBins, img.binsRow, img.sweeper],
    scope: [
      { title: "Route planning", text: "Ward-wise beat plans that balance coverage, travel time and vehicle capacity." },
      { title: "Segregated collection", text: "Separate handling of wet, dry and domestic hazardous waste from the doorstep onward." },
      { title: "Citizen engagement", text: "Awareness drives with resident welfare associations, schools and market committees." },
      { title: "Service verification", text: "Household-level coverage tracking with GPS-enabled vehicles and digital attendance." },
    ],
    process: [
      { title: "Survey", text: "Map every household and commercial unit in the service area." },
      { title: "Schedule", text: "Assign routes, timings and crews per ward." },
      { title: "Collect", text: "Segregated pick-up with on-vehicle compartments." },
      { title: "Verify", text: "Track coverage and resolve missed collections the same day." },
    ],
    clients: ["Urban local bodies", "Residential townships", "Gated communities", "Market associations"],
  },
  {
    slug: "waste-transportation-logistics",
    no: "03",
    title: "Waste Transportation & Logistics",
    short:
      "A planned, monitored fleet that moves waste safely from collection points and transfer stations to processing facilities.",
    summary:
      "Transportation is the link that holds a waste system together. Haritvanta operates and manages fleets with planned routing, preventive maintenance and live tracking — so waste moves on time, covered, and without spillage.",
    image: img.truckBlue,
    detailImage: img.truckWhite,
    gallery: [img.truckOrange, img.heroFacility, img.truckWorkers],
    scope: [
      { title: "Primary & secondary transport", text: "Right-sized vehicles from narrow-lane tippers to compactors and hook loaders." },
      { title: "Transfer station operations", text: "Efficient consolidation that reduces trips and fuel use across the network." },
      { title: "Fleet monitoring", text: "GPS tracking, trip logging and weighbridge integration for every vehicle." },
      { title: "Preventive maintenance", text: "Scheduled servicing that keeps uptime high and breakdowns rare." },
    ],
    process: [
      { title: "Plan", text: "Model volumes and distances to define the right fleet mix." },
      { title: "Deploy", text: "Commission vehicles with trained drivers and helpers." },
      { title: "Track", text: "Monitor every trip, stop and weighment in real time." },
      { title: "Optimise", text: "Refine routes using operational data month on month." },
    ],
    clients: ["Municipal bodies", "Industrial estates", "Infrastructure developers", "Facility operators"],
  },
  {
    slug: "waste-segregation-processing",
    no: "04",
    title: "Waste Segregation & Processing",
    short:
      "Mechanised and manual segregation lines that turn mixed waste into clean, usable streams — and keep residuals to a minimum.",
    summary:
      "Processing is where waste becomes resource. We design and operate segregation and processing facilities that separate organics, recyclables and combustible fractions efficiently, with safe working conditions for every operator on the floor.",
    image: img.conveyorWorker,
    detailImage: img.machinery,
    gallery: [img.conveyorClean, img.conveyorSpray, img.factoryWalk],
    scope: [
      { title: "Segregation lines", text: "Trommels, conveyors and picking stations configured to local waste composition." },
      { title: "Organic processing", text: "Windrow and in-vessel composting that produces quality-tested compost." },
      { title: "Refuse-derived fuel", text: "Preparation of RDF from combustible fractions for co-processing in industry." },
      { title: "Residual minimisation", text: "Continuous tracking of inerts and rejects to reduce what goes to landfill." },
    ],
    process: [
      { title: "Receive", text: "Weigh and record every incoming load." },
      { title: "Separate", text: "Mechanical screening followed by manual quality picking." },
      { title: "Process", text: "Convert each stream — compost, RDF or recyclables." },
      { title: "Dispatch", text: "Send outputs to verified end users with full documentation." },
    ],
    clients: ["Urban local bodies", "Cluster processing facilities", "Industrial co-processors", "Facility owners"],
  },
  {
    slug: "material-recovery-recycling",
    no: "05",
    title: "Material Recovery & Recycling",
    short:
      "Material Recovery Facilities that grade, bale and channel recyclables into verified recycling value chains.",
    summary:
      "Every bale that leaves a Haritvanta facility has a destination. Our material recovery operations sort dry waste into marketable grades — paper, plastics, metals, glass — and link them to authorised recyclers with complete traceability.",
    image: img.bales,
    detailImage: img.balesCardboard,
    gallery: [img.bottlesCans, img.cans, img.scrapExcavator],
    scope: [
      { title: "MRF operations", text: "Design and operation of material recovery facilities of varying capacities." },
      { title: "Grading & baling", text: "Sorting into recycler-grade fractions and baling for efficient dispatch." },
      { title: "EPR support", text: "Documentation and channelisation support for Extended Producer Responsibility." },
      { title: "Informal sector inclusion", text: "Integration of waste pickers into safe, formal and fairly paid work." },
    ],
    process: [
      { title: "Sort", text: "Separate dry waste into material categories." },
      { title: "Grade", text: "Refine by polymer, colour and quality." },
      { title: "Bale", text: "Compress and label for traceable dispatch." },
      { title: "Channel", text: "Deliver to authorised recyclers with records." },
    ],
    clients: ["Urban local bodies", "Producers & brand owners (EPR)", "Recyclers", "Industrial units"],
  },
  {
    slug: "commercial-industrial-waste",
    no: "06",
    title: "Commercial & Industrial Waste Management",
    short:
      "Compliant, documented waste services for factories, campuses, hospitality and commercial establishments.",
    summary:
      "Businesses need waste partners who understand compliance as well as logistics. We design site-specific programmes for non-hazardous commercial and industrial waste, from on-site segregation to certified end-of-life processing.",
    image: img.warehouseTruck,
    detailImage: img.plantNight,
    gallery: [img.scrapExcavator, img.binsColour, img.factoryWalk],
    scope: [
      { title: "Site waste audits", text: "Characterisation of waste streams to find reduction and recovery opportunities." },
      { title: "On-site management", text: "Segregation infrastructure, trained staff and storage protocols at your premises." },
      { title: "Scheduled collection", text: "Reliable pick-ups matched to production cycles and site constraints." },
      { title: "Compliance documentation", text: "Manifests, recycling certificates and data for sustainability reporting." },
    ],
    process: [
      { title: "Audit", text: "Understand streams, volumes and compliance needs." },
      { title: "Design", text: "Build a site-specific management plan." },
      { title: "Operate", text: "Run collection, storage and processing." },
      { title: "Report", text: "Provide data for ESG and regulatory reporting." },
    ],
    clients: ["Manufacturing units", "Corporate campuses", "Hotels & hospitality", "Hospitals (non-biomedical streams)"],
  },
  {
    slug: "sweeping-sanitation",
    no: "07",
    title: "Sweeping & Sanitation Services",
    short:
      "Daily road sweeping, drain cleaning and public-space sanitation that keep streets, markets and neighbourhoods visibly clean.",
    summary:
      "A clean city is judged at street level. Haritvanta deploys trained sweeping crews and mechanised equipment on planned beats — covering roads, markets, public spaces and drains — with supervision, attendance tracking and same-day removal of everything collected.",
    image: img.streetSweeping,
    detailImage: img.broomStreet,
    gallery: [img.sweeperYellow, img.streetCleanerCart, img.sweeper],
    scope: [
      { title: "Manual road sweeping", text: "Beat-wise sweeping of roads, lanes and footpaths on fixed daily schedules, including night sweeping for commercial areas." },
      { title: "Mechanised sweeping", text: "Truck-mounted and compact sweepers for arterial roads, flyovers and high-traffic corridors." },
      { title: "Drain & nallah cleaning", text: "De-silting of roadside drains and nallahs, with pre-monsoon cleaning drives and safe disposal of silt." },
      { title: "Public space sanitation", text: "Cleaning of markets, bus stands, parks, ghats and public toilets, plus litter-bin servicing and event clean-ups." },
    ],
    process: [
      { title: "Map", text: "Divide the service area into sweeping beats by road type and footfall." },
      { title: "Deploy", text: "Assign trained, equipped crews and machines to every beat and shift." },
      { title: "Supervise", text: "Track attendance and beat completion with geo-tagged photo checks." },
      { title: "Clear", text: "Lift swept waste and silt the same day — nothing is left on the roadside." },
    ],
    clients: ["Municipal corporations", "Nagar palikas & nagar panchayats", "Market committees", "Townships & campuses"],
  },
  {
    slug: "iec-awareness",
    no: "08",
    title: "IEC & Community Awareness",
    short:
      "Information, Education & Communication (IEC) campaigns that build lasting habits — segregation at source, no littering and active citizen participation.",
    summary:
      "Collection and sweeping only stay effective when citizens take part. Haritvanta plans and runs IEC activities alongside every contract — door-to-door awareness, school programmes, rallies and street plays — so that households segregate waste, use bins and support a cleaner city.",
    image: img.iecRally,
    detailImage: img.iecStudents,
    gallery: [img.iecClassroom, img.iecCleanup, img.binsRow],
    scope: [
      { title: "Door-to-door awareness", text: "Household visits by trained staff explaining wet and dry segregation, collection timings and helpline numbers." },
      { title: "School & college programmes", text: "Interactive sessions, competitions and student cleanliness clubs that turn children into ambassadors for change." },
      { title: "Rallies, nukkad nataks & drives", text: "Awareness rallies, street plays and community cleanliness drives in wards, markets and public places." },
      { title: "Campaign materials", text: "Wall paintings, posters, pamphlets, vehicle branding and announcements aligned with Swachh Bharat Mission messaging." },
    ],
    process: [
      { title: "Plan", text: "Identify low-segregation areas and set ward-wise awareness targets." },
      { title: "Engage", text: "Run household visits, school sessions and community events." },
      { title: "Reinforce", text: "Repeat key messages through materials, vehicles and announcements." },
      { title: "Measure", text: "Track segregation levels and feedback, and report results to the client." },
    ],
    clients: ["Municipal corporations", "Nagar palikas & nagar panchayats", "Schools & colleges", "Resident welfare associations"],
  },
];

// Live services are listed first; numbering follows display order.
export const services: Service[] = [
  ...allServices.filter((x) => liveSlugs.includes(x.slug)).map((x) => ({ ...x, status: "live" as const })),
  ...allServices.filter((x) => !liveSlugs.includes(x.slug)).map((x) => ({ ...x, status: "upcoming" as const })),
].map((x, i) => ({ ...x, no: String(i + 1).padStart(2, "0") }));

export const liveServices = services.filter((x) => x.status === "live");
export const upcomingServices = services.filter((x) => x.status === "upcoming");

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                            */
/*  PLACEHOLDER case studies: names, locations and descriptions are     */
/*  representative only. Replace with actual Haritvanta projects.        */
/* ------------------------------------------------------------------ */
export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  serviceSlug: string;
  status: string;
  client: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  image: Img;
  gallery: Img[];
};

export const projects: Project[] = [
  {
    slug: "door-to-door-collection-wards",
    name: "Ward Doorstep Collection Programme",
    location: "Uttar Pradesh",
    category: "Door-to-Door Collection",
    serviceSlug: "door-to-door-collection",
    status: "Operational",
    client: "Urban local body",
    overview:
      "Daily segregated doorstep collection across residential and commercial wards, with fixed timings and resident awareness drives.",
    challenge:
      "Irregular pick-ups and mixed waste were leading to roadside dumping, overflowing bins and frequent citizen complaints.",
    approach: [
      "Household survey and ward-wise beat planning",
      "Fixed collection timings announced to every street",
      "Separate wet and dry compartments on every vehicle",
      "Same-day resolution of missed-collection complaints",
    ],
    outcomes: [
      "Predictable, on-time collection for residents",
      "Fewer roadside dumping points in covered wards",
      "Improving segregation at source",
    ],
    image: img.doorToDoor,
    gallery: [img.collectionCrew, img.binsRow, img.truckBins],
  },
  {
    slug: "street-sweeping-sanitation",
    name: "Street Sweeping & Sanitation Programme",
    location: "Uttar Pradesh",
    category: "Sweeping & Sanitation",
    serviceSlug: "sweeping-sanitation",
    status: "Operational",
    client: "Urban local body",
    overview:
      "Beat-wise road sweeping, drain cleaning and market sanitation, supervised daily with same-day lifting of all swept waste.",
    challenge:
      "Main roads and markets were swept irregularly, and swept waste and drain silt were often left on the roadside.",
    approach: [
      "Roads mapped into sweeping beats by footfall",
      "Morning and night shifts for markets and main roads",
      "Geo-tagged photo checks for beat completion",
      "Same-day lifting of swept waste and silt",
    ],
    outcomes: [
      "Visibly cleaner roads and market areas",
      "No swept waste left on the roadside",
      "Transparent daily reporting to the client",
    ],
    image: img.streetSweeping,
    gallery: [img.sweeperYellow, img.streetCleanerCart, img.broomStreet],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/*  CAREERS                                                             */
/*  PLACEHOLDER openings — replace with live vacancies.                 */
/* ------------------------------------------------------------------ */
// No openings at the moment. Add roles here when hiring, e.g.:
// { title: "Sanitation Supervisor", team: "Field Operations", location: "Uttar Pradesh", type: "Full-time" },
export const openings: { title: string; team: string; location: string; type: string }[] = [];

/* ------------------------------------------------------------------ */
/*  TEAM                                                                */
/*  Add `role` and `bio` for each member, and optionally `photo` as a   */
/*  path inside /public (e.g. "/team/ranveer.jpg").                     */
/* ------------------------------------------------------------------ */
export type TeamMember = { name: string; role?: string; bio?: string; photo?: string };

export const team: TeamMember[] = [
  { name: "Ranveer Singh", role: "Director — Operations" },
  { name: "Abhishek Bajpai", role: "Director — Operations" },
  { name: "Sujeet Singh", role: "IEC Manager" },
  { name: "Yuvraj Singh Tomar", role: "Director — Technology" },
];
