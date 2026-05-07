export function Card({
  children,
  className = "",
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "primary" | "teal";
}) {
  const borderColor =
    accent === "primary"
      ? "border-[#7C6AF7]/40"
      : accent === "teal"
      ? "border-[#4ECDC4]/40"
      : "border-[#2E2E36]";

  return (
    <div
      className={`rounded-2xl border bg-[#1A1A1E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6AF7]/60 hover:shadow-[0_8px_40px_rgba(124,106,247,0.12)] ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}
