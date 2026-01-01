type SectionProps = {
  eyebrow?: string
  title: string
  children: React.ReactNode
}

export default function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="py-10 first:border-t-0 border-t border-zinc-800/60">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-wider text-zinc-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-200">
        {children}
      </div>
    </section>
  )
}
