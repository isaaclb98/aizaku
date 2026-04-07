type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-32 md:py-40 ${className}`}
    >
      <div className="max-w-[1100px] mx-auto px-10">
        {eyebrow && (
          <p
            className="text-xs font-medium tracking-[0.1em] uppercase text-[var(--accent)] mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text)] mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
