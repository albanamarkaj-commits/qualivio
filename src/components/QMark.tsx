export function QMark({
  size = 40,
  animated = false,
}: {
  size?: number;
  /**
   * When true, the icon gently sweeps left-right and bobs up-down,
   * like a magnifying glass scanning the page. Used on the homepage
   * hero only; keep static everywhere else.
   */
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={animated ? "animate-qmark-search" : undefined}
      style={animated ? { transformOrigin: "center" } : undefined}
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
