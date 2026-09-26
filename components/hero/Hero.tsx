import { HeroMedia } from "@/components/hero/HeroMedia";
import { HeroContent } from "@/components/hero/HeroContent";

export function Hero() {
  return (
    <section
      data-hero
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink text-white"
      aria-label="Northline — engineering what comes next"
    >
      <HeroMedia />
      <HeroContent />
    </section>
  );
}
