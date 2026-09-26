export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index && <span className="eyebrow text-ink-soft">{index}</span>}
      <span className="h-px w-10 bg-line" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
