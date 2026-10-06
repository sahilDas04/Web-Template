export type AboutItem = {
  title: string;
  description: string;
};

export const about = {
  title: "Building Infrastructure. Delivering Reliability.",
  intro:
    "We are a trusted construction and infrastructure company delivering reliable solutions across Civil Works, Electrical Works, Water Pipeline Works, and Construction Material Supply. With a focus on quality, safety, and timely execution, we combine skilled workmanship, quality materials, and efficient project management to deliver projects built for lasting performance. From individual works to complete project requirements, we work closely with our clients to understand their needs and provide practical, dependable solutions from planning to execution.",
  heroIntro:
    "We combine quality materials, skilled execution, and professional project management to deliver reliable solutions tailored to our clients' requirements.",
  paragraphs: [
    "We combine **quality materials, skilled execution, and professional project management** to deliver reliable solutions tailored to our clients' requirements.",
  ],
};

export const partner = {
  title: "One Partner. Multiple Solutions.",
  intro:
    "From construction and electrical installation to water pipeline infrastructure and material supply, we provide integrated solutions that simplify project coordination and execution.",
  servicesLabel: "Our Core Services",
  services: [
    {
      title: "Civil Works",
      description:
        "Construction, structural work, foundations, roads, drainage, and site development.",
    },
    {
      title: "Electrical Works",
      description:
        "Wiring, power distribution, panels, lighting, earthing, and maintenance.",
    },
    {
      title: "Water Pipeline Works",
      description:
        "Water supply pipelines, pipe laying, fittings, valves, pumps, testing, and maintenance.",
    },
    {
      title: "Material Supply",
      description:
        "Reliable supply of civil, electrical, plumbing, and pipeline materials.",
    },
  ] satisfies AboutItem[],
};

export const approach = {
  title: "Planned. Coordinated. Delivered.",
  intro: "We follow a straightforward approach to every project:",
  principles: [
    {
      index: "01",
      title: "Understand",
      description:
        "We identify your requirements, site conditions, and project objectives.",
    },
    {
      index: "02",
      title: "Plan",
      description:
        "We coordinate materials, manpower, timelines, and resources.",
    },
    {
      index: "03",
      title: "Execute",
      description:
        "We focus on quality workmanship, safety, and efficient site execution.",
    },
    {
      index: "04",
      title: "Deliver",
      description:
        "We work toward completing projects on time and to the required standards.",
    },
  ] satisfies { index: string; title: string; description: string }[],
};

export const values = [
  {
    title: "Quality",
    description: "Reliable materials and professional workmanship.",
  },
  {
    title: "Safety",
    description: "Responsible and safe project execution.",
  },
  {
    title: "Reliability",
    description: "Dependable service and transparent communication.",
  },
  {
    title: "Integrity",
    description: "Honest commitments and professional conduct.",
  },
  {
    title: "Timely Delivery",
    description: "Efficient planning and coordinated execution.",
  },
] satisfies AboutItem[];

export const commitment = {
  title: "More Than a Contractor. A Reliable Project Partner.",
  paragraphs: [
    "We strive to build long-term relationships by delivering **quality, reliability, and professional service** at every stage — from material supply to final project execution.",
  ],
};

export const together = {
  title: "Let's Build Together",
  body: "Have a construction, electrical, pipeline, or material supply requirement?",
  cta: "Let's discuss your project and find the right solution.",
  linkLabel: "Contact us",
  href: "/contact",
};
