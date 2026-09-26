import type { Metadata } from "next";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Northline is an engineering and technology firm building the systems heavy industry runs on.",
};

const principles = [
  {
    title: "Evidence over assertion",
    body: "We would rather be measured on an outcome than admired on a proposal. Every claim we make has to survive contact with an operating asset.",
  },
  {
    title: "Long horizons",
    body: "We are structured for decisions that take decades to pay back, which is unusual, and deliberately so. Most engineering firms are organised around the quarter.",
  },
  {
    title: "Build the people, not just the asset",
    body: "Every project transfers capability to the team that will own it. A system that only our engineers understand is a liability we have sold.",
  },
];

const leadership = [
  { name: "Adaeze Okonkwo", role: "Chief Executive Officer" },
  { name: "Ruben Hallberg", role: "Chief Engineer, Infrastructure" },
  { name: "Mei-Lin Chow", role: "Director, Industrial Technology" },
  { name: "Tomas Vrba", role: "Director, Sustainability" },
];

const milestones = [
  { year: "2006", event: "Founded as a structural engineering practice." },
  { year: "2011", event: "First multi-discipline infrastructure programme." },
  { year: "2015", event: "Industrial technology practice established." },
  { year: "2019", event: "First continuous-operations control migration." },
  { year: "2023", event: "Two hundredth delivered project." },
  { year: "2026", event: "Operating across fifty markets." },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        index="02"
        title="Engineering what comes next."
        intro="Northline was founded on a frustration: that the organisations doing the most consequential engineering work are the least well understood. We build the systems industry depends on, and we explain them properly."
      />

      <Section id="company">
        <SectionLabel index="01">Company</SectionLabel>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-7">
            <p className="h3 max-w-[22ch] leading-tight">
              We are an engineering and technology firm working on the assets
              that everything else depends on.
            </p>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1} className="lg:col-span-5">
            <div className="space-y-6 text-base leading-relaxed text-ink-soft">
              <p>
                We work across heavy infrastructure, energy, manufacturing and
                the industrial technology that connects them. Our projects are
                rarely small, rarely simple, and almost always constrained by
                an operating asset that cannot stop.
              </p>
              <p>
                That constraint shapes how we work. We plan around live
                operations, build capability into the teams who inherit what
                we deliver, and measure ourselves on whether an asset still
                performs in year ten.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <ul className="mt-24 grid gap-px border border-line bg-line md:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title} className="bg-background p-8 md:p-10">
              <RevealOnScroll y={32} delay={index * 0.06}>
                <span className="eyebrow text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="h3 mt-6">{principle.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {principle.body}
                </p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="leadership" className="border-t border-line">
        <SectionLabel index="02">Leadership</SectionLabel>

        <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person, index) => (
            <li key={person.name} className="bg-background p-8">
              <RevealOnScroll y={32} delay={index * 0.05}>
                <div
                  aria-hidden="true"
                  className="flex aspect-square items-end bg-[radial-gradient(80%_80%_at_50%_20%,#dedcd4_0%,#f4f3ef_100%)] p-5"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-ink-soft">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{person.role}</p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="milestones" className="border-t border-line">
        <SectionLabel index="03">Milestones</SectionLabel>

        <ol className="mt-16">
          {milestones.map((milestone, index) => (
            <li key={milestone.year} className="border-t border-line">
              <RevealOnScroll y={28}>
                <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <span className="h3 font-mono tabular-nums md:col-span-2">
                    {milestone.year}
                  </span>
                  <p className="max-w-[52ch] text-ink-soft md:col-span-8">
                    {milestone.event}
                  </p>
                  <span className="eyebrow text-ink-soft md:col-span-2 md:text-right">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </Section>

      <PageCta
        title="Work with the people who will still be accountable in ten years."
        body="We take on a small number of programmes each year so that senior engineers stay close to the work. If you have a constraint that is genuinely difficult, that is where we are most useful."
        href="/contact"
        label="Start a conversation"
      />
    </main>
  );
}
