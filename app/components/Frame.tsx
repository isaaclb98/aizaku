type FrameProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Frame({ title, children }: FrameProps) {
  return (
    <div
      className="
        relative
        rounded-2xl

        bg-white/8
        backdrop-blur-lg

        border border-white/15
        shadow-xl shadow-black/50
      "
    >
      {title ? (
        <div
          className="
            px-5 py-3
            text-xs uppercase tracking-wide
            text-zinc-400
            border-b border-white/10
          "
        >
          {title}
        </div>
      ) : null}

      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
