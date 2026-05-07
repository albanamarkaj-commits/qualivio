export function QMark({ size = 40 }: { size?: number }) {
  const stroke = Math.max(2, size * 0.075);
  const r = size * 0.38;
  const cx = size * 0.44;
  const cy = size * 0.44;
  const tailX1 = cx + r * Math.cos(Math.PI / 4);
  const tailY1 = cy + r * Math.sin(Math.PI / 4);
  const tailX2 = size * 0.9;
  const tailY2 = size * 0.9;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx={cx} cy={cy} r={r} stroke="currentColor" strokeWidth={stroke} />
      <line
        x1={tailX1}
        y1={tailY1}
        x2={tailX2}
        y2={tailY2}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}
