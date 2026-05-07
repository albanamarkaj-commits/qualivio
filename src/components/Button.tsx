import Link from "next/link";

type Variant = "primary" | "ghost" | "teal";

const styles: Record<Variant, string> = {
  primary:
    "bg-[#7C6AF7] text-white hover:bg-[#6a58e0] shadow-[0_0_24px_rgba(124,106,247,0.25)] hover:shadow-[0_0_32px_rgba(124,106,247,0.4)]",
  ghost:
    "border border-[#7C6AF7] text-[#7C6AF7] hover:bg-[#7C6AF7]/10",
  teal:
    "bg-[#4ECDC4] text-[#0D0D0F] font-semibold hover:bg-[#3ebdb4]",
};

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
