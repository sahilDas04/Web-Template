"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";

export function HeroMedia() {
  const media = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = media.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo("[data-hero-media-layer]", { scale: 1.18 }, {
          scale: 1,
          duration: 1.6,
          ease: ease.outExpo,
        })
        .fromTo("[data-hero-scrim]", { opacity: 0 }, { opacity: 1, duration: 1.2 }, 0.3);

      gsap.to(el, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={media}
      data-hero-media
      className="absolute inset-0 overflow-hidden bg-ink"
      aria-hidden="true"
    >
      <div
        data-hero-media-layer
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero/industrial-structure-hero.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={82}
          className="object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </div>

      <div
        data-hero-scrim
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.94)_0%,rgba(8,8,8,0.62)_42%,rgba(8,8,8,0.55)_72%,rgba(8,8,8,0.8)_100%)]"
      />
      <div className="grain absolute inset-0 opacity-[0.18] mix-blend-overlay" />
    </div>
  );
}

export function useHeroExit() {
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = content.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -150,
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

  return content;
}
