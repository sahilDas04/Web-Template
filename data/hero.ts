export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Bhardwaj Constructions",
    eyebrow: "Construction · Utilities · Infrastructure",
    heading: "You Dream",
    headingAccent: "We Build.",
    body: "We believe good construction speaks for itself — years after the project is complete.",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Construction infrastructure",
    eyebrow: "Construction · Civil · Infrastructure",
    heading: "You Dream",
    headingAccent: "We Build",
    body: "We build what we promise — and stand behind what we build.",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Construction infrastructure",
    eyebrow: "Construction · Infrastructure · Project Solutions",
    heading: "You Dream",
    headingAccent: "We Build",
    body: "We focus on the details that matter today, and the performance that matters years from now.",
  },
];

export const HERO_INTERVAL = 4000;
