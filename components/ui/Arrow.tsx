export function Arrow({
  className = "",
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`h-2.5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}
