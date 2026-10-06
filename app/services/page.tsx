import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering, Construction & Infrastructure Solutions — five disciplines delivered under one standard.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Construction & Infrastructure Solutions"
        intro="We provide reliable and professional Civil, Electrical, Water Pipeline, and Material Supply solutions for residential, commercial, industrial, and infrastructure projects. From material procurement and site preparation to installation, execution, and maintenance, we provide end-to-end support tailored to project requirements."
        image="/images/pages/services.jpg"
      />

      <Section>
        <SectionLabel align="center">Capabilities</SectionLabel>

        <ul className="mt-16">
          {services.map((service) => (
            <li
              key={service.slug}
              id={service.slug}
              className="border-t border-line pt-12 pb-14"
            >
              <RevealOnScroll y={40}>
                <div className="flex items-baseline gap-5 border-b border-line pb-8">
                  <h2 className="h2">{service.title}</h2>
                </div>

                <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
                  <div className="relative col-span-full aspect-[4/3] w-full overflow-hidden bg-line md:col-span-6 md:aspect-[5/3]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1536px) 740px, (min-width: 768px) 50vw, 100vw"
                      quality={76}
                      className="object-cover"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <p className="max-w-[44ch] font-bold text-ink text-2xl">
                      {service.tagline}
                    </p>
                    <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-ink-soft/80 text-lg">
                      {service.description}
                    </p>

                    {service.materialCategories ? (
                      <div className="mt-8 space-y-7">
                        {service.materialCategories.map((category) => (
                          <div key={category.title}>
                            <p className="eyebrow text-ink">{category.title}</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {category.capabilities.map((capability) => (
                                <li
                                  key={capability}
                                  className="border border-line px-3 py-1.5 text-xs text-ink-soft"
                                >
                                  {capability}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-7 flex flex-wrap gap-2">
                        {service.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="border border-line px-3 py-1.5 text-xs text-ink-soft"
                          >
                            {capability}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="bg-brand-deep text-white">
        <div className="mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-20 md:py-28">
          <RevealOnScroll y={36}>
            <h2 className="h1 max-w-[24ch]">
              Start with the problem, not the service.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll y={24} delay={0.08}>
            <Link
              href="/about#contact"
              className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-accent hover:text-brand-deep"
            >
              Start a conversation
              <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>
      </footer>
    </main>
  );
}
