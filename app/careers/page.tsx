import type { Metadata } from "next";
import Link from "next/link";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Life at Northline — culture, learning and open roles across engineering and technology.",
};

const roles = [
  { title: "Senior Structural Engineer", location: "Bengaluru", type: "Full time" },
  { title: "Controls Engineer", location: "Gujarat", type: "Full time" },
  { title: "Digital Twin Developer", location: "Rotterdam", type: "Full time" },
  { title: "Graduate Programme 2027", location: "Multiple", type: "Programme" },
  { title: "Geotechnical Engineer", location: "Bengaluru", type: "Full time" },
  { title: "Project Director", location: "Stuttgart", type: "Full time" },
];

const culture = [
  {
    title: "On site, early",
    body: "Everyone works on a live asset. Engineers at every level, including new graduates, spend time where the system actually operates.",
  },
  {
    title: "Technical ownership",
    body: "You are accountable for the decisions you sign. We do not hide senior engineers behind review layers to reduce individual exposure.",
  },
  {
    title: "Funded learning",
    body: "Professional registration, research time and site training are paid for and expected, not requested on your own initiative.",
  },
];

export default function CareersPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Careers"
        index="05"
        title="Build your future with us."
        intro="This is not a job board. It is an argument that the best engineering happens when people are trusted close to the work and given the time to think about it."
      />

      <Section>
        <SectionLabel index="01">Life here</SectionLabel>

        <ul className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {culture.map((item, index) => (
            <li key={item.title} className="bg-background p-8 md:p-10">
              <RevealOnScroll y={32} delay={index * 0.06}>
                <span className="eyebrow text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="h3 mt-6">{item.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <SectionLabel index="02">Open roles</SectionLabel>

        <ul className="mt-16">
          {roles.map((role) => (
            <li key={role.title} className="border-t border-line">
              <RevealOnScroll y={28}>
                <a
                  href={`mailto:careers@northline.example?subject=${encodeURIComponent(role.title)}`}
                  className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
                >
                  <h3 className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-6">
                    {role.title}
                  </h3>
                  <span className="text-ink-soft md:col-span-3">
                    {role.location}
                  </span>
                  <span className="eyebrow flex items-center justify-between text-ink-soft md:col-span-3 md:justify-end">
                    {role.type}
                    <Arrow className="ml-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </span>
                </a>
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
          Nothing matching your discipline? We hire ahead of need for the
          graduate programme. Send a CV to{" "}
          <Link
            href="mailto:careers@northline.example"
            className="underline underline-offset-4 hover:text-ink"
          >
            careers@northline.example
          </Link>{" "}
          and we will keep it.
        </p>
      </Section>

      <PageCta
        title="Come and see how we work."
        body="We run open site visits for candidates at every stage. If you are considering a move, ask for a day on site before you decide anything."
        href="/contact"
        label="Arrange a visit"
      />
    </main>
  );
}
