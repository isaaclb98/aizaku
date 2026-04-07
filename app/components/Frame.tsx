type FrameProps = {
  variant?: "default" | "terminal";
  children: React.ReactNode;
  className?: string;
};

export default function Frame({
  variant = "default",
  children,
  className = "",
}: FrameProps) {
  if (variant === "terminal") {
    return (
      <div
        className={`rounded overflow-hidden border border-[#27272A] ${className}`}
      >
        {/* macOS-style title bar */}
        <div className="bg-[#18181B] px-4 py-3 flex items-center gap-2 border-b border-[#27272A]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="bg-[#18181B] p-8">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`
        bg-[#FFFFFF]
        border border-[#E4E4E7]
        rounded
        p-6 md:p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}
