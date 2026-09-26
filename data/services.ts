export type Service = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "engineering",
    index: "01",
    title: "Engineering",
    tagline: "Structural and mechanical systems built to carry load for decades.",
    description:
      "We design and deliver the physical backbone of heavy industry — from structural steel and process plants to bespoke machinery that runs continuously under extreme conditions.",
    capabilities: [
      "Structural design and analysis",
      "Process plant engineering",
      "Heavy fabrication management",
      "Seismic and wind engineering",
      "Asset integrity and inspection",
    ],
  },
  {
    slug: "technology",
    index: "02",
    title: "Technology",
    tagline: "Industrial software and control platforms that hold up in the field.",
    description:
      "Our technology practice builds the control rooms, telemetry layers and industrial software that operators depend on when conditions are at their worst.",
    capabilities: [
      "SCADA and control systems",
      "Industrial IoT telemetry",
      "Predictive maintenance models",
      "Edge compute and networking",
      "Systems integration and commissioning",
    ],
  },
  {
    slug: "infrastructure",
    index: "03",
    title: "Infrastructure",
    tagline: "Transport, utilities and civic networks that communities outgrow.",
    description:
      "We plan and construct the networks that cities and industries run on — designed for capacity growth, maintainability and a service life measured in generations.",
    capabilities: [
      "Transport corridor engineering",
      "Water and utility networks",
      "Rail and transit systems",
      "Geotechnical and survey",
      "Programme and construction management",
    ],
  },
  {
    slug: "digital",
    index: "04",
    title: "Digital",
    tagline: "Data layers and digital twins that make physical assets legible.",
    description:
      "We model real assets as living digital systems so operators can see failures before they happen and plan interventions with evidence instead of intuition.",
    capabilities: [
      "Digital twin development",
      "Geospatial and BIM platforms",
      "Data infrastructure and pipelines",
      "Operational dashboards",
      "Simulation and scenario planning",
    ],
  },
  {
    slug: "consulting",
    index: "05",
    title: "Consulting",
    tagline: "Independent technical judgement on decisions that are expensive to reverse.",
    description:
      "We advise owners and operators on feasibility, risk and long-horizon strategy — bringing engineering evidence to board-level decisions before capital is committed.",
    capabilities: [
      "Feasibility and options appraisal",
      "Asset and portfolio strategy",
      "Risk and compliance assessment",
      "Decarbonisation roadmaps",
      "Independent technical review",
    ],
  },
];
