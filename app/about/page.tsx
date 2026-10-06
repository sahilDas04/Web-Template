import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ApproachFlow } from "@/components/sections/ApproachFlow";
import { about, approach, values } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bhardwaj Constructions is an engineering, construction and infrastructure services company delivering civil works, electrical works, water pipeline solutions and construction material supply.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title={about.title}
        intro={about.heroIntro}
        image="/images/pages/about.jpg"
      />

      <Section id="company" className="border-t border-line">
        <SectionLabel size="lg" align="center">
          About US
        </SectionLabel>

        {/* <div className="mt-16 grid gap-12 lg:grid-cols-12 text-center"> */}
          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <p className="mt-[10px] text-xl leading-relaxed text-ink">
              {about.intro}
            </p>
          </RevealOnScroll>
        {/* </div> */}
      </Section>

      <Section id="approach" className="border-t border-line">
        <SectionLabel size="lg" align="center">
          Our approach
        </SectionLabel>

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

        <ApproachFlow principles={approach.principles} />
      </Section>

      <Section id="values" className="border-t border-line">
        <SectionLabel size="lg" align="center">
          Our values
        </SectionLabel>

        <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <li
              key={value.title}
              className={`bg-background p-8 text-center md:p-10 ${
                index === values.length - 1 ? "col-span-2" : ""
              }`}
            >
              <RevealOnScroll y={32} delay={index * 0.05}>
                <h3 className="h3">{value.title}</h3>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="slogan" className="border-t border-line">
        <RevealOnScroll y={40}>
          <p className="slogan mt-16">
            <span className="text-ink">You Dream </span>
            <span className="text-brand">We Build</span>
          </p>
        </RevealOnScroll>
      </Section>

      <ContactFooter />
    </main>
  );
}