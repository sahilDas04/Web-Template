export const motion = {
  fast: 0.3,
  normal: 0.7,
  slow: 1.2,
  cinematic: 1.5,
} as const;

export const stagger = {
  tight: 0.06,
  base: 0.1,
  loose: 0.16,
} as const;

export const ease = {
  outExpo: "expo.out",
  inOutQuart: "quart.inOut",
  outQuint: "quint.out",
  power3Out: "power3.out",
} as const;

export const heroTimeline = {
  image: 0.7,
  lineOne: 0.9,
  lineTwo: 1.05,
  lineThree: 1.2,
  subtitle: 1.4,
  cta: 1.5,
} as const;

export const breakpoint = {
  mobile: 767,
  tablet: 1023,
  laptop: 1439,
} as const;
