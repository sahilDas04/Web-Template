export type MaterialCategory = {
  title: string;
  capabilities: string[];
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  materialCategories?: MaterialCategory[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "CivilWorks",
    index: "01",
    title: "Civil Works",
    tagline: "Building Strong Foundations",
    description:
      "We deliver complete civil construction and infrastructure solutions, from foundations and structural work to finishing and site development.",
    capabilities: [
      "Building & RCC Construction",
      "Foundation & Structural Work",
      "Masonry & Plastering",
      "Flooring & Tiling",
      "Waterproofing & Roofing",
      "Roads, Pavements & Drainage",
      "Excavation & Site Development",
      "Repair & Renovation"
    ],
    image: "/images/services/civilwork.png",
    imageAlt: "Civil works in progress.",
  },
  {
    slug: "ElectricalWorks",
    index: "02",
    title: "Electrical Works",
    tagline: "Powering Projects with Confidence.",
    description:
      "We provide safe and efficient electrical installation solutions for buildings, commercial facilities, industrial sites, and infrastructure projects.",
    capabilities: [
      "Electrical Wiring & Installation",
      "LT Electrical Systems",
      "Panels & Distribution Boards",
      "Cable Laying & Cable Tray",
      "Earthing & Grounding",
      "Lighting & Street Lighting",
      "Industrial Electrical Work",
      "Equipment & Motor Connections",
      "Electrical Maintenance",
    ],
    image: "/images/services/electricalwork.png",
    imageAlt: "Electrical works in progress.",
  },
  {
    slug: "WaterPipelineWorks",
    index: "03",
    title: "Water Pipeline Works",
    tagline: "Reliable Water Infrastructure",
    description:
      "We provide complete water pipeline installation and infrastructure solutions, from excavation and pipe laying to testing and commissioning.",
    capabilities: [
      "Water Supply Pipelines",
      "Underground & Overhead Pipelines",
      "HDPE, PVC, CPVC & GI Pipelines",
      "Pipeline Excavation & Laying",
      "Pipe Jointing & Fittings",
      "Valves & Pump Connections",
      "Water Tank Connections",
      "Pressure & Leakage Testing",
      "Pipeline Repair & Maintenance"
    ],
    image: "/images/services/waterwork.png",
    imageAlt: "Water pipeline works in progress.",
  },
  {
    slug: "MaterialSupply",
    index: "04",
    title: "Material Supply",
    tagline: "Quality Materials, Delivered to Your Project",
    description:
      "We supply a wide range of construction, electrical, and water pipeline materials to support projects from procurement to completion. Our material supply service helps clients simplify sourcing and maintain continuity at the project site.",
    capabilities: [],
    materialCategories: [
      {
        title: "Civil Materials",
        capabilities: [
          "Cement, Sand & Aggregates",
          "Bricks & Blocks",
          "TMT Steel & Structural Materials",
          "Tiles & Flooring Materials",
          "Construction & Finishing Materials"
          ],
      },
      {
        title: "Electric Materials",
        capabilities: [
          "Wires & Cables",
          "Electrical Panels & Accessories",
          "MCBs, MCCBs & Distribution Equipment",
          "Conduits & Cable Trays",
          "Switches, Sockets & Lighting Equipment",
          "Earthing Materials"
        ],
      },
      {
        title: "Pipeline Materials",
        capabilities: [
          "HDPE, PVC, CPVC & GI Pipes",
          "DI Pipes & Fittings",
          "Valves & Pipe Accessories",
          "Pumps & Water System Components",
          "Flanges, Bends, Tees & Couplings"
        ],
      },
    ],
    image: "/images/services/materialSupply.png",
    imageAlt: "Construction materials supplied for a project.",
  },
];
