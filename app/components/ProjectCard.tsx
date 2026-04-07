type ProjectCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  links?: { label: string; href: string }[];
};

function safeHref(href: string): string {
  // Reject javascript: and data: schemes — allow http/https and relative links
  if (
    href.startsWith("javascript:") ||
    href.startsWith("data:") ||
    href.startsWith("vbscript:")
  ) {
    return "#";
  }
  return href;
}

export default function ProjectCard({
  eyebrow,
  title,
  description,
  links = [],
}: ProjectCardProps) {
  return (
    <div
      className="
        bg-[var(--surface)]
        border border-[var(--border)]
        rounded
        p-7
        transition-colors duration-150
        hover:border-[var(--text-muted)]
      "
    >
      <p
        className="text-[11px] font-medium tracking-[0.06em] uppercase text-[var(--accent)] mb-3"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-[17px] font-medium text-[var(--text)] mb-3"
        style={{
          fontFamily: "var(--font-inter)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
        {description}
      </p>
      {links.length > 0 && (
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={safeHref(link.href)}
              className="
                text-[13px]
                text-[var(--text-muted)]
                no-underline
                transition-colors
                hover:text-[var(--accent)]
                flex items-center gap-1
              "
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
