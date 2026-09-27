import type { Metadata } from "next";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering, technology, infrastructure, digital and consulting — five disciplines delivered under one standard.",
};

const stats = [
  { value: "50+", label: "Markets served" },
  { value: "120+", label: "Projects delivered" },
  { value: "20+", label: "Years operating" },
  { value: "98%", label: "Client retention" },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        index="01"
        title="Five disciplines. One delivery standard."
        intro="We work across the full lifecycle of an industrial asset — from the feasibility study that justifies it to the control system that runs it. Most of our projects sit across more than one discipline, because real assets do."
        image="/images/pages/services.jpg"
      />

      <Section>
        <SectionLabel index="01">Capabilities</SectionLabel>

        <ul className="mt-16">
          {services.map((service) => (
            <li key={service.slug} id={service.slug} className="border-t border-line">
              <RevealOnScroll y={40}>
                <div className="group grid gap-6 py-12 md:grid-cols-12 md:gap-8">
                  <span className="eyebrow text-ink-soft md:col-span-1">
                    {service.index}
                  </span>
                  <h2 className="h2 md:col-span-5">{service.title}</h2>
                  <div className="md:col-span-6">
                    <p className="max-w-[44ch] text-ink-soft">{service.tagline}</p>
                    <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-ink-soft/80">
                      {service.description}
                    </p>
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
                  </div>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <SectionLabel index="02">By the numbers</SectionLabel>
        <dl className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealOnScroll key={stat.label} y={36}>
              <div className="border-t border-line pt-8">
                <dt className="h1 tabular-nums">{stat.value}</dt>
                <dd className="eyebrow mt-4 text-ink-soft">{stat.label}</dd>
              </div>
            </RevealOnScroll>
          ))}
        </dl>
      </Section>

      <PageCta
        title="Start with the problem, not the service."
        body="Tell us what is failing, what is scaling, or what is not yet built. We will tell you which disciplines it actually needs — including when the answer is fewer than you expected."
        href="/contact"
        label="Start a conversation"
      />
    </main>
  );
}
