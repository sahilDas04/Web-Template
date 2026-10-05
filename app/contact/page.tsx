import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Bhardwaj Constructions about an engineering, technology or infrastructure project.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Let's build something great."
        intro="Tell us what you are trying to do and what is making it difficult. A senior engineer will read it, not a sales team."
        image="/images/pages/contact.jpg"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel size="lg">Start a conversation</SectionLabel>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <SectionLabel size="lg">Contact Details</SectionLabel>

            <RevealOnScroll y={32}>
              <div className="mt-16 border border-line p-8">
              <h2 className="h3">Prefer to talk?</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                For any query and for any question contact us.
              </p>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="eyebrow text-ink-soft">Phone</dt>
                  <dd className="mt-3">
                    <a
                      href="tel:+918000000000"
                      className="font-mono text-sm tracking-[0.12em] underline underline-offset-4 hover:text-ink-soft"
                    >
                      +91 80000 00000
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow text-ink-soft">Email</dt>
                  <dd className="mt-3">
                    <a
                      href="mailto:hello@bhardwajconstructions.example"
                      className="font-mono text-sm tracking-[0.12em] underline underline-offset-4 hover:text-ink-soft"
                    >
                      hello@bhardwajconstructions.example
                    </a>
                  </dd>
                </div>
              </dl>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Section>
    </main>
  );
}
