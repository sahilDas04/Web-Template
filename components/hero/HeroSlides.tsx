"use client";

import Image from "next/image";

export function HeroSlides({
  slides,
  active,
}: {
  slides: { src: string; alt: string }[];
  active: number;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-deep">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          data-hero-media-layer
          data-active={index === active}
          className="hero-slide absolute inset-0"
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={index === active ? slide.alt : ""}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
      ))}

      <div
        data-hero-scrim
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,15,28,0.92)_0%,rgba(1,15,28,0.55)_45%,rgba(1,15,28,0.35)_75%,rgba(1,15,28,0.6)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand/20 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="grain absolute inset-0 opacity-[0.16] mix-blend-overlay"
      />
    </div>
  );
}
