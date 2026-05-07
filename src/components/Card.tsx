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
      : "border-[#E5E4F0]";

  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-[0_4px_24px_rgba(124,106,247,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6AF7]/50 hover:shadow-[0_8px_40px_rgba(124,106,247,0.15)] ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}
