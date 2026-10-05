"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";
import { ease, heroTimeline, stagger } from "@/lib/animations/config";
import type { HeroSlide } from "@/data/hero";

export function HeroContent({
  slides,
  active,
}: {
  slides: HeroSlide[];
  active: number;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const slide = slides[active];

  // Parallax + fade the whole panel out as the hero scrolls away.
  useLayoutEffect(() => {
    const el = panel.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -120,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  // Entrance animation. The keyed child remounts per slide, so this re-runs.
  return (
    <div
      ref={panel}
      className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end px-[var(--gutter)] pb-10 pt-[calc(var(--nav-height)+2rem)] md:pb-14"
    >
      <HeroSlideBody key={active} slide={slide} />
    </div>
  );
}

function HeroSlideBody({ slide }: { slide: HeroSlide }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set("[data-hero-item], [data-hero-line-inner]", {
          autoAlpha: 1,
          y: 0,
          x: 0,
          yPercent: 0,
        });
        return;
      }

      gsap
        .timeline({ delay: 0.15 })
        .fromTo("[data-hero-line-inner]", { yPercent: 110 }, {
          yPercent: 0,
          duration: 1,
          ease: ease.outExpo,
          stagger: stagger.tight,
        })
        .fromTo(
          "[data-hero-item]",
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: ease.outExpo,
          stagger: stagger.base,
        },
          heroTimeline.subtitle,
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="flex flex-1 flex-col justify-center">
      <p
        data-hero-item
        className="eyebrow mb-6 flex items-center gap-3 text-white/80"
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {slide.eyebrow}
      </p>

      <h1 className="display max-w-[20ch] text-white uppercase">
        <span className="reveal-line">
          <span data-hero-line-inner>{slide.heading}</span>
        </span>
        <span className="reveal-line">
          <span data-hero-line-inner className="text-accent">
            {slide.headingAccent}
          </span>
        </span>
      </h1>

      <p
        data-hero-item
        className="mt-8 max-w-[54ch] text-base leading-relaxed text-white/80 md:text-lg"
      >
        {slide.body}
      </p>
    </div>
  );
}
