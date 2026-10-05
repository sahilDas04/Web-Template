import type { Metadata } from "next";
import { Fragment } from "react";
import { PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { about, partner, approach, values, commitment } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bhardwaj Constructions is an engineering, construction and infrastructure services company delivering civil works, electrical works, water pipeline solutions and construction material supply.",
};

function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((segment, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-ink">
            {segment}
          </strong>
        ) : (
          segment
        ),
      )}
    </>
  );
}

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title={about.title}
        intro={about.heroIntro}
        image="/images/pages/about.jpg"
      />

      <Section id="company">
        {/* <SectionLabel size="lg">About us</SectionLabel> */}

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-7 lg:pl-14">
            <p className="h2-sm max-w-[24ch] leading-tight">
              <Prose text={about.intro} />
            </p>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <div className="space-y-6 text-base leading-relaxed text-ink-soft">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <Prose text={paragraph} />
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section id="solutions" className="border-t border-line">
        <SectionLabel size="lg">What we do</SectionLabel>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-7 lg:pl-14">
            <h2 className="h2-sm max-w-[20ch]">{partner.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft">
              {partner.intro}
            </p>
          </RevealOnScroll>
        </div>

        <ul className="mt-24 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {partner.services.map((service) => (
            <li key={service.title} className="bg-background p-8 md:p-10">
              <RevealOnScroll y={32}>
                <h3 className="h3">{service.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="approach" className="border-t border-line">
        <SectionLabel size="lg">Our approach</SectionLabel>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-7 lg:pl-14">
            <h2 className="h2-sm max-w-[20ch]">{approach.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft">
              {approach.intro}
            </p>
          </RevealOnScroll>
        </div>

        <ul className="mt-24 grid items-stretch gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {approach.principles.map((principle, index) => (
            <Fragment key={principle.index}>
              <li className="flex flex-col justify-center bg-background p-8 md:p-10">
                <RevealOnScroll y={32} delay={index * 0.05}>
                  <h3 className="h3">{principle.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    {principle.description}
                  </p>
                </RevealOnScroll>
              </li>
              {index < approach.principles.length - 1 && (
                <li
                  aria-hidden="true"
                  className="hidden items-center justify-center bg-background px-2 lg:flex"
                >
                  <Arrow strokeWidth={3.5} className="h-7 w-14 text-ink" />
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </Section>

      <Section id="values" className="border-t border-line">
        <SectionLabel size="lg">Our values</SectionLabel>

        <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <li
              key={value.title}
              className={`bg-background p-8 md:p-10 ${
                index === values.length - 1 ? "col-span-2" : ""
              }`}
            >
              <RevealOnScroll y={32} delay={index * 0.05}>
                <h3 className="h3">{value.title}</h3>
                <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="commitment" className="border-t border-line">
        <SectionLabel size="lg">Our commitment</SectionLabel>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-7 lg:pl-14">
            <h2 className="h2-sm max-w-[20ch]">{commitment.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <div className="space-y-6 text-base leading-relaxed text-ink-soft">
              {commitment.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <Prose text={paragraph} />
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section id="slogan" className="border-t border-line">
        <RevealOnScroll y={40}>
          <p className="slogan mt-16">
            <span className="text-ink">You Dream </span>
            <span className="text-brand">We Build</span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll y={24} delay={0.1}>
          <p className="mx-auto mt-12 max-w-[46ch] text-center text-base leading-relaxed text-ink-soft">
            The whole of what we do, in one line.
          </p>
        </RevealOnScroll>
      </Section>

      <ContactFooter />
    </main>
  );
}