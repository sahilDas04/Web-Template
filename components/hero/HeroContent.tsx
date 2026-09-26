"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease, heroTimeline, stagger } from "@/lib/animations/config";
import { Arrow } from "@/components/ui/Arrow";
import { useHeroExit } from "@/components/hero/HeroMedia";

const lines = ["Building", "what comes", "next."];

export function HeroContent() {
  const content = useHeroExit();

  useLayoutEffect(() => {
    const el = content.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set("[data-hero-item]", { autoAlpha: 1, y: 0, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.35 });

      tl.fromTo("[data-hero-line-inner]", { yPercent: 110 }, {
        yPercent: 0,
        duration: 1.1,
        ease: ease.outExpo,
        stagger: stagger.tight,
      })
        .fromTo("[data-hero-item]", { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: ease.outExpo,
          stagger: stagger.base,
        }, heroTimeline.subtitle)
        .fromTo("[data-hero-scroll]", { autoAlpha: 0 }, {
          autoAlpha: 1,
          duration: 0.8,
        }, heroTimeline.cta);
    }, el);

    return () => ctx.revert();
  }, [content]);

  return (
    <div
      ref={content}
      className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end px-[var(--gutter)] pt-[var(--nav-height)] pb-16 md:pb-24"
    >
      <div className="flex flex-1 flex-col justify-center pt-16">
        <p
          data-hero-item
          className="eyebrow mb-8 flex items-center gap-4 text-white/70"
        >
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          Engineering · Technology · Infrastructure
        </p>

        <h1 className="display max-w-[14ch] text-white">
          {lines.map((line) => (
            <span className="reveal-line" key={line}>
              <span data-hero-line-inner>{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <p
            data-hero-item
            className="max-w-[46ch] text-base leading-relaxed text-white/75 md:text-lg"
          >
            We design and deliver the systems that industry depends on — from
            heavy infrastructure to the software that runs it.
          </p>

          <Link
            href="/work"
            data-hero-item
            className="group inline-flex w-fit items-center gap-4 border-b border-white/30 pb-2 text-sm font-medium tracking-[0.14em] uppercase text-white transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Explore our work
            <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>

      <div
        data-hero-scroll
        className="mt-16 flex items-end justify-between border-t border-white/15 pt-6 text-white/60 md:mt-24"
      >
        <div className="flex items-center gap-3 text-[0.6875rem] tracking-[0.18em] uppercase">
          <span>Scroll</span>
          <svg
            viewBox="0 0 10 22"
            aria-hidden="true"
            className="h-5 w-2.5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M5 0v20M1 16l4 5 4-5" />
          </svg>
        </div>
        <p className="font-mono text-xs tracking-[0.2em]">01 / 04</p>
      </div>
    </div>
  );
}
