export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body: string;
  cta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Northline engineered infrastructure at dusk",
    eyebrow: "Engineering · Technology · Infrastructure",
    heading: "Building what comes",
    headingAccent: "next.",
    body: "We design and deliver the systems that industry depends on — from heavy infrastructure to the software that runs it.",
    cta: { label: "Explore our work", href: "/work" },
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Structural steelwork on a live Northline site",
    eyebrow: "Since 2006",
    heading: "From megastructures",
    headingAccent: "to control systems.",
    body: "Fifty markets, five disciplines and one delivery standard. Most of our projects sit across more than one, because real assets do.",
    cta: { label: "Our capabilities", href: "/services" },
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Industrial plant and energy infrastructure",
    eyebrow: "Impact & sustainability",
    heading: "Progress measured",
    headingAccent: "in outcomes.",
    body: "We report the numbers we can defend — including the ones where we are behind. Ask us about those.",
    cta: { label: "Read our impact", href: "/impact" },
  },
];

export const HERO_INTERVAL = 6500;
