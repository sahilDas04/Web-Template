export function SectionLabel({
  index,
  children,
  className = "",
  size = "sm",
  align = "start",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
  align?: "start" | "center";
}) {
  const tone = size === "lg" ? "eyebrow-lg" : "eyebrow";

  /* Centred variant flanks the label with two rules that share the leftover
     width equally, so it stays optically centred from 320px to 1600px without
     the rules ever pushing the text out of the container. */
  if (align === "center") {
    return (
      <div className={`flex items-center gap-4 md:gap-6 ${className}`}>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        {index && <span className={`${tone} text-ink-soft`}>{index}</span>}
        <span className={`${tone} text-center`}>{children}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index && <span className={`${tone} text-ink-soft`}>{index}</span>}
      <span className="h-px w-10 shrink-0 bg-line" aria-hidden="true" />
      <span className={tone}>{children}</span>
    </div>
  );
}
