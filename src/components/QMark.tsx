export function QMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="140"
        cy="135"
        r="65"
        fill="none"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <line
        x1="190"
        y1="180"
        x2="210"
        y2="204"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}
