export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  image?: string;
  children?: NavChild[];
  featured?: {
    eyebrow: string;
    title: string;
    href: string;
    cta: string;
  };
};

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    image: "/images/pages/about.jpg",
    children: [
      {
        label: "Company",
        href: "/about#company",
        description: "Who we are and how we operate.",
      },
      {
        label: "Leadership",
        href: "/about#leadership",
        description: "The team steering our direction.",
      },
      {
        label: "Milestones",
        href: "/about#milestones",
        description: "Two decades of delivery.",
      },
    ],
    featured: {
      eyebrow: "Since 2006",
      title: "Built on precision, measured in decades.",
      href: "/about#company",
      cta: "Explore our company",
    },
  },
  {
    label: "Services",
    href: "/services",
    image: "/images/pages/services.jpg",
    children: [
      {
        label: "Engineering",
        href: "/services#engineering",
        description: "Structural and mechanical systems at scale.",
      },
      {
        label: "Technology",
        href: "/services#technology",
        description: "Industrial software and control platforms.",
      },
      {
        label: "Infrastructure",
        href: "/services#infrastructure",
        description: "Transport, utilities and civic networks.",
      },
      {
        label: "Digital",
        href: "/services#digital",
        description: "Data, telemetry and digital twins.",
      },
      {
        label: "Consulting",
        href: "/services#consulting",
        description: "Independent technical judgement.",
      },
    ],
    featured: {
      eyebrow: "Capabilities",
      title: "Five disciplines. One delivery standard.",
      href: "/services",
      cta: "Explore our capabilities",
    },
  },
  {
    label: "Work",
    href: "/work",
    image: "/images/pages/work.jpg",
    children: [
      {
        label: "Infrastructure",
        href: "/work#infrastructure",
        description: "Civic and transport networks.",
      },
      {
        label: "Energy",
        href: "/work#energy",
        description: "Generation, storage and distribution.",
      },
      {
        label: "Manufacturing",
        href: "/work#manufacturing",
        description: "Plant and production engineering.",
      },
      {
        label: "Technology",
        href: "/work#technology",
        description: "Control systems and industrial software.",
      },
    ],
    featured: {
      eyebrow: "Selected work",
      title: "Structures that outlast their headlines.",
      href: "/work",
      cta: "View all projects",
    },
  },
  {
    label: "Impact",
    href: "/impact",
    image: "/images/pages/impact.jpg",
    children: [
      {
        label: "Sustainability",
        href: "/impact#sustainability",
        description: "Decarbonising what we build.",
      },
      {
        label: "Community",
        href: "/impact#community",
        description: "Work that reaches beyond the site.",
      },
      {
        label: "Innovation",
        href: "/impact#innovation",
        description: "Research applied to real assets.",
      },
    ],
    featured: {
      eyebrow: "Our impact",
      title: "Progress measured in outcomes, not pledges.",
      href: "/impact",
      cta: "Read our impact report",
    },
  },
];

export const utilityLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
