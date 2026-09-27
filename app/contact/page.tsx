import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Northline about an engineering, technology or infrastructure project.",
};

const offices = [
  { city: "Bengaluru", detail: "Engineering headquarters · India" },
  { city: "Rotterdam", detail: "Infrastructure and water · Netherlands" },
  { city: "Gujarat", detail: "Industrial technology · India" },
  { city: "Stuttgart", detail: "Manufacturing and process · Germany" },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        index="07"
        title="Let's build something great."
        intro="Tell us what you are trying to do and what is making it difficult. A senior engineer will read it, not a sales team."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index="01">Start a conversation</SectionLabel>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <SectionLabel index="02">Offices</SectionLabel>
            <ul className="mt-10">
              {offices.map((office, index) => (
                <li key={office.city} className="border-t border-line">
                  <RevealOnScroll y={28} delay={index * 0.05}>
                    <div className="py-5">
                      <h2 className="text-lg font-medium tracking-tight">
                        {office.city}
                      </h2>
                      <p className="mt-2 text-sm text-ink-soft">
                        {office.detail}
                      </p>
                    </div>
                  </RevealOnScroll>
                </li>
              ))}
            </ul>

            <div className="mt-16 border border-line p-8">
              <h2 className="h3">Prefer to talk?</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                For anything time critical, call the engineering office
                directly during business hours.
              </p>
              <a
                href="tel:+918000000000"
                className="mt-6 inline-block font-mono text-sm tracking-[0.12em] underline underline-offset-4 hover:text-ink-soft"
              >
                +91 80000 00000
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
