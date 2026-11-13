/**
 * Photography library.
 * All images are free-licence photographs from Unsplash (images.unsplash.com).
 * Replace with Haritvanta's own commissioned photography when available —
 * only the `src` values need to change.
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;

export const img = {
  heroFacility: { src: u("1773852184074-e7ecb1dd3665"), alt: "Collection vehicle unloading waste at a processing facility" },
  fieldTeam: { src: u("1652303518379-c0ef1c9fb2b1"), alt: "Field supervisors in high-visibility vests reviewing a site" },
  teamOverhead: { src: u("1787321280637-81ce957b60e7"), alt: "Operations crew in orange high-visibility vests on an industrial floor" },
  landfillDozer: { src: u("1770068511850-50f9bd0ad5ed"), alt: "Bulldozer compacting waste at a managed disposal site" },
  landfillAerial: { src: u("1770068511790-091e2c8cb382"), alt: "Aerial view of a disposal site with vehicles at work" },
  landfillAerial2: { src: u("1770068511770-827727c2e433"), alt: "Aerial view of a waste site with collection trucks" },
  doorToDoor: { src: u("1574974671999-24b7dfbb0d53"), alt: "Collection crew loading waste into a compactor vehicle" },
  collectionCrew: { src: u("1767369327984-d83a0ffe4bda"), alt: "Workers collecting waste using carts and a collection vehicle" },
  truckWorkers: { src: u("1761479578277-b11d0092699d"), alt: "Collection vehicle and crew on a morning route" },
  truckBins: { src: u("1761479578279-ffbefd2408e4"), alt: "Collection vehicle lifting bins on route" },
  truckBlue: { src: u("1785595350273-df34196d462a"), alt: "Compactor vehicle on a city road" },
  truckWhite: { src: u("1762805544399-7cdf748371e0"), alt: "Loaded collection vehicle in transit" },
  truckOrange: { src: u("1648848568410-829a327c7b1e"), alt: "Orange collection vehicle beside a building" },
  conveyorWorker: { src: u("1763315156830-07870b159121"), alt: "Operator feeding material onto a sorting conveyor" },
  conveyorClean: { src: u("1779517226079-4f20b7ca0698"), alt: "Workers maintaining a conveyor line in a processing hall" },
  conveyorSpray: { src: u("1779517226309-6a053d0a5f96"), alt: "Technician cleaning a conveyor belt" },
  machinery: { src: u("1772544386001-637f7b34a24c"), alt: "Processing machinery with conveyors and material stockpiles" },
  bales: { src: u("1781243680823-aae6c7f1ff12"), alt: "Compressed bales of recovered paper and cardboard" },
  balesCardboard: { src: u("1764529310915-f73129d29c22"), alt: "Baled cardboard ready for dispatch to recyclers" },
  shreddedPaper: { src: u("1775673301786-aff05a381744"), alt: "Shredded paper and cardboard stockpiles" },
  warehouseTruck: { src: u("1717667745830-de42bb75a4fa"), alt: "Truck unloading industrial waste inside a covered shed" },
  scrapExcavator: { src: u("1722695694560-f452b0919d3a"), alt: "Excavator handling scrap metal for recovery" },
  bottlesCans: { src: u("1595278069441-2cf29f8005a4"), alt: "Recovered plastic bottles and aluminium cans" },
  cans: { src: u("1767459516949-cbc6d219a595"), alt: "Crushed aluminium cans collected for recycling" },
  bottlesColour: { src: u("1653406384710-08688ec6b979"), alt: "Plastic bottles held in a collection cage" },
  binsColour: { src: u("1611284446314-60a58ac0deb9"), alt: "Colour-coded segregation bins" },
  binsRow: { src: u("1532996122724-e3c354a0b15b"), alt: "Row of colour-coded bins for source segregation" },
  seedling: { src: u("1542601906990-b4d3fb778b09"), alt: "Hands holding a seedling in soil" },
  soil: { src: u("1545333212-ffebc7933c12"), alt: "Hands holding dark, rich compost" },
  soilHands: { src: u("1763844599737-be3850c60cea"), alt: "Hands working compost into soil" },
  solar: { src: u("1497435334941-8c899ee9e8e9"), alt: "Aerial view of solar panels across a green field" },
  greenCity: { src: u("1527690499469-ef2eff9c6735"), alt: "Aerial view of a city block with trees" },
  cityAerial: { src: u("1602643454724-21d5a40722db"), alt: "Aerial view of an Indian city" },
  delhi: { src: u("1592639296346-560c37a0f711"), alt: "Wide avenue in New Delhi with traffic" },
  seaLink: { src: u("1569758267239-d08deb78bb1a"), alt: "Bandra–Worli Sea Link spanning the water in Mumbai" },
  river: { src: u("1624807136278-e2973be118ff"), alt: "River winding through green forest" },
  plantNight: { src: u("1768128834406-f5b1b962af9d"), alt: "Industrial processing plant illuminated at night" },
  factoryWalk: { src: u("1787422429941-b1966d776195"), alt: "Operator walking through a processing facility" },
  sweeper: { src: u("1678860895912-f0f8f784a44d"), alt: "Sanitation worker in uniform with a broom" },
  planReview: { src: u("1742112125567-3e8967bad60f"), alt: "Site engineers reviewing plans in the field" },
  engineer: { src: u("1659353588150-a9dff1059c54"), alt: "Site engineer in a safety vest with documents" },
  streetSweeping: { src: u("1792779793110-2369acaa0a61"), alt: "Sanitation worker sweeping litter from a wet street" },
  sweeperYellow: { src: u("1786297766759-9746a2e31bcf"), alt: "Street sweeper in uniform cleaning a road" },
  streetCleanerCart: { src: u("1791297973423-889788ff506c"), alt: "Street cleaner in a high-visibility vest with a cleaning cart" },
  broomStreet: { src: u("1648662594772-786f95b9e58b"), alt: "Sanitation worker with a broom on a city street" },
  iecRally: { src: u("1774437557501-dada7efba5a6"), alt: "Women holding awareness posters at a community campaign" },
  iecClassroom: { src: u("1692269725836-fbd72e98883f"), alt: "School children in a classroom during an awareness session" },
  iecStudents: { src: u("1524069290683-0457abfe42c3"), alt: "Group of smiling school students" },
  iecCleanup: { src: u("1758599668429-121d54188b9c"), alt: "Volunteers collecting litter during a cleanliness drive" },
} as const;

export type Img = { src: string; alt: string };
