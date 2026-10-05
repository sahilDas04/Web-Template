export function SectionLabel({
  index,
  children,
  className = "",
  size = "sm",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}) {
  const tone = size === "lg" ? "eyebrow-lg" : "eyebrow";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index && <span className={`${tone} text-ink-soft`}>{index}</span>}
      <span className="h-px w-10 bg-line" aria-hidden="true" />
      <span className={tone}>{children}</span>
    </div>
  );
}

/** Width the `size="lg"` rule + gap occupies, so content can align to the label text. */
export const SECTION_LABEL_LG_INDENT = "lg:pl-14";
