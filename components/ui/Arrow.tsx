export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`h-2.5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}
