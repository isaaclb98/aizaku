type FrameProps = {
  title?: string
  children: React.ReactNode
}

export default function Frame({ title, children }: FrameProps) {
  return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
      {title ? (
        <div className="border-b border-zinc-800 px-4 py-2 text-sm text-zinc-400">
          {title}
        </div>
      ) : null}

      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
