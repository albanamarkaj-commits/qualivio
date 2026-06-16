export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  dark = false,
  id,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:py-28 ${dark ? "bg-[#0D0D0F]" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#4ECDC4]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-[#E8E6FF]" : "text-[#0D0D0F]"}`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-[#9896B6]" : "text-[#6B6A8F]"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
