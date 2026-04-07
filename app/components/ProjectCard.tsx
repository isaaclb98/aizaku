type ProjectCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  links?: { label: string; href: string }[];
};

export default function ProjectCard({
  eyebrow,
  title,
  description,
  links = [],
}: ProjectCardProps) {
  return (
    <div
      className="
        bg-[#FFFFFF]
        border border-[#E4E4E7]
        rounded
        p-7
        transition-colors duration-150
        hover:border-[#71717A]
      "
    >
      <p
        className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#C45D35] mb-3"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-[17px] font-medium text-[#18181B] mb-3"
        style={{
          fontFamily: "var(--font-inter)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p className="text-sm text-[#71717A] leading-relaxed mb-5">
        {description}
      </p>
      {links.length > 0 && (
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-[13px]
                text-[#71717A]
                no-underline
                transition-colors
                hover:text-[#C45D35]
                flex items-center gap-1
              "
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
