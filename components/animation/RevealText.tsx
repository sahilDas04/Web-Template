"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";

type Mode = "line" | "word" | "char";

export function RevealText({
  text,
  mode = "line",
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 1,
  scrub = false,
  start = "top 85%",
  classNameInner = "",
}: {
  text: string;
  mode?: Mode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  classNameInner?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  scrub?: boolean;
  start?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal-item]");

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }

    const from = { yPercent: 110, opacity: 1 };

    if (scrub) {
      gsap.fromTo(targets, from, {
        yPercent: 0,
        ease: ease.outExpo,
        stagger,
        scrollTrigger: { trigger: el, start, scrub: true },
      });
      return;
    }

    gsap.fromTo(targets, from, {
      yPercent: 0,
      duration,
      delay,
      stagger,
      ease: ease.outExpo,
      scrollTrigger: { trigger: el, start, once: true },
    });
  }, [delay, duration, scrub, stagger, start]);

  const content =
    mode === "line" ? (
      text.split("\n").map((line, i) => (
        <span className="reveal-line" key={i}>
          <span data-reveal-item className={classNameInner}>
            {line}
          </span>
        </span>
      ))
    ) : mode === "word" ? (
      <span className="reveal-mask">
        <span data-reveal-item className={classNameInner}>
          {text}
        </span>
      </span>
    ) : (
      Array.from(text).map((char, i) => (
        <span className="reveal-mask" key={i}>
          <span data-reveal-item className={classNameInner}>
            {char === " " ? " " : char}
          </span>
        </span>
      ))
    );

  return (
    <Tag ref={root as never} className={className}>
      {content}
    </Tag>
  );
}

export function RevealOnScroll({
  children,
  className = "",
  y = 40,
  delay = 0,
  start = "top 88%",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { clearProps: "opacity,visibility,transform" });
      return;
    }

    gsap.set(el, { autoAlpha: 0, y });

    const tween = gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: ease.outExpo,
      scrollTrigger: { trigger: el, start, once: true },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, start, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
