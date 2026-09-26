export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  scope: string[];
  metrics: { value: string; label: string }[];
};

export const projectCategories = [
  "Infrastructure",
  "Technology",
  "Energy",
  "Manufacturing",
] as const;

export const projects: Project[] = [
  {
    slug: "coastal-transit-corridor",
    index: "01",
    title: "Coastal Transit Corridor",
    category: "Infrastructure",
    location: "Bengaluru, India",
    year: "2026",
    summary:
      "A 42-kilometre elevated transit corridor engineered for a coastal city that expands twice a decade.",
    challenge:
      "The corridor had to cross soft alluvial soil, a live freight rail line and four dense residential districts without displacing the informal economy that depends on the existing road.",
    approach:
      "We staged construction around live traffic, designed a deep-pile foundation system to cut groundworks by a third, and moved utilities in coordinated single passes rather than lane by lane.",
    scope: [
      "Civil and structural design",
      "Geotechnical investigation",
      "Construction management",
      "Systems integration",
    ],
    metrics: [
      { value: "42km", label: "Elevated corridor" },
      { value: "18mo", label: "Programme duration" },
      { value: "31%", label: "Less groundworks" },
    ],
  },
  {
    slug: "grid-storage-platform",
    index: "02",
    title: "Grid Storage Platform",
    category: "Energy",
    location: "Queensland, Australia",
    year: "2025",
    summary:
      "A 400-megawatt battery installation and its control layer, synchronised to national grid frequency response.",
    challenge:
      "Frequency stability was degrading on a network with large solar penetration, and the existing control infrastructure could not react fast enough to grid events.",
    approach:
      "We co-designed the plant layout with the grid operator from day one, then built a telemetry and control layer that completes a full dispatch cycle inside the required response window.",
    scope: [
      "Plant layout and civil works",
      "Battery management systems",
      "SCADA and grid control integration",
      "Commissioning and load testing",
    ],
    metrics: [
      { value: "400MW", label: "Installed capacity" },
      { value: "<200ms", label: "Response time" },
      { value: "99.2%", label: "Fleet availability" },
    ],
  },
  {
    slug: "precision-manufacturing-campus",
    index: "03",
    title: "Precision Manufacturing Campus",
    category: "Manufacturing",
    location: "Stuttgart, Germany",
    year: "2025",
    summary:
      "A greenfield component campus built around a single continuous production flow with no intermediate storage.",
    challenge:
      "The client needed to remove every handoff between forming, finishing and assembly without losing the flexibility to shift volume between product lines.",
    approach:
      "We modelled the flow before breaking ground, then designed a campus where material moves on a single spine so capacity can be rebalanced by re-sequencing rather than rebuilding.",
    scope: [
      "Process engineering",
      "Factory layout and design",
      "Automation and robotics",
      "Digital twin and simulation",
    ],
    metrics: [
      { value: "0", label: "Intermediate stores" },
      { value: "2.4x", label: "Line change speed" },
      { value: "61%", label: "Less floor area" },
    ],
  },
  {
    slug: "water-network-renewal",
    index: "04",
    title: "Water Network Renewal",
    category: "Infrastructure",
    location: "Rotterdam, Netherlands",
    year: "2024",
    summary:
      "A twenty-year renewal programme for a 900-kilometre distribution network, prioritised by failure risk rather than by age.",
    challenge:
      "The city owned an old network it could not afford to replace all at once, and reactive repair was consuming the entire maintenance budget.",
    approach:
      "We built a failure-probability model from thirty years of break records, sequenced renewal by consequence rather than chronology, and installed sensors that confirm the work after backfill.",
    scope: [
      "Asset modelling and prioritisation",
      "Condition assessment",
      "Design and construction",
      "Leak detection telemetry",
    ],
    metrics: [
      { value: "900km", label: "Network assessed" },
      { value: "47%", label: "Fewer breaks" },
      { value: "20yr", label: "Programme horizon" },
    ],
  },
  {
    slug: "refinery-control-upgrade",
    index: "05",
    title: "Refinery Control Upgrade",
    category: "Technology",
    location: "Gujarat, India",
    year: "2024",
    summary:
      "A live replacement of a refinery-wide control system across eleven operating units without a production shutdown.",
    challenge:
      "Eleven units had to migrate from legacy control to a unified platform while the refinery kept running, and any unplanned trip would cost more than the project itself.",
    approach:
      "We shadow-ran every new control loop against the old one for a full cycle before switching, and migrated one unit per fortnight so any discrepancy surfaced in a controlled window.",
    scope: [
      "Control system design",
      "Migration planning",
      "Operator training",
      "Cybersecurity hardening",
    ],
    metrics: [
      { value: "11", label: "Units migrated" },
      { value: "0", label: "Unplanned shutdowns" },
      { value: "14mo", label: "Full migration" },
    ],
  },
  {
    slug: "cold-chain-distribution",
    index: "06",
    title: "Cold Chain Distribution",
    category: "Energy",
    location: "Ontario, Canada",
    year: "2023",
    summary:
      "A temperature-critical distribution hub that guarantees pharmaceutical integrity from dock to delivery.",
    challenge:
      "Temperature excursions were destroying product invisibly, and the existing monitoring only sampled at loading bays where damage had already occurred.",
    approach:
      "We moved sensing into the air stream at pallet resolution and built redundant mechanical and electrical systems so a single failure cannot take the facility offline.",
    scope: [
      "Mechanical and electrical design",
      "Refrigeration systems",
      "Environmental monitoring",
      "Validation and qualification",
    ],
    metrics: [
      { value: "-25°C", label: "Sustained set point" },
      { value: "100%", label: "Excursion events" },
      { value: "2.1MW", label: "Peak draw optimised" },
    ],
  },
];
