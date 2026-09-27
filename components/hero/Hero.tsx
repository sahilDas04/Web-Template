"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { HeroSlides } from "@/components/hero/HeroSlides";
import { HeroContent } from "@/components/hero/HeroContent";
import { heroSlides, HERO_INTERVAL } from "@/data/hero";

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const controls = useRef<HTMLDivElement>(null);
  const count = heroSlides.length;

  const go = useCallback(
    (index: number) => setActive(((index % count) + count) % count),
    [count],
  );

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  // Autoplay. Pauses on hover/focus and is disabled under reduced motion.
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = window.setInterval(next, HERO_INTERVAL);
    return () => window.clearInterval(id);
  }, [next, paused]);

  // Keep the active slide in sync when tabs are shown in parallel.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) setPaused(true);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useLayoutEffect(() => {
    const el = controls.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-controls-item]",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.9, ease: "expo.out" },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      data-hero
      className="relative flex h-[92svh] max-h-[900px] min-h-[520px] w-full flex-col overflow-hidden bg-brand-deep text-white"
      aria-roledescription="carousel"
      aria-label="Featured work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <HeroSlides slides={heroSlides} active={active} />
      <HeroContent slides={heroSlides} active={active} />

      <div
        ref={controls}
        className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-[var(--gutter)] pb-8 md:pb-10"
      >
        <div
          data-hero-controls-item
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Choose slide"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Slide ${index + 1}: ${slide.heading} ${slide.headingAccent}`}
              data-active={index === active}
              onClick={() => go(index)}
              className="hero-dot"
            />
          ))}
        </div>

        <div
          data-hero-controls-item
          className="flex items-center gap-3"
        >
          <span className="font-mono text-xs tracking-[0.18em] text-white/70 tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="hero-arrow"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="hero-arrow"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
