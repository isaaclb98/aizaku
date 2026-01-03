type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: SectionProps) {
  return (
    <section className="relative pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            {title}
          </h2>

          <div className="text-zinc-400 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
