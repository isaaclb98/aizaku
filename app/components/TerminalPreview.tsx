export default function TerminalPreview() {
  return (
    <div
      className="font-mono text-sm text-[#A1A1AA] leading-relaxed"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      <div className="text-[#71717A] text-xs mb-2">QUERY</div>
      <div className="text-[#FAFAF9] mb-6">
        &quot;the tension between modernism and postmodernism&quot;
      </div>

      <div className="text-[#71717A] text-xs mb-2">RESULTS — 6 hops</div>

      <div
        className="pl-4 border-l-2 mb-4 text-[#A1A1AA]"
        style={{ borderColor: "#C45D35" }}
      >
        Postmodernism rejects the grand narratives of modernism, treating
        style as a cultural construct rather than an aesthetic absolute.
        <br />
        <span className="text-[#52525B] italic">
          Source: Postmodernism
        </span>
      </div>

      <div
        className="pl-4 border-l-2 mb-4 text-[#A1A1AA]"
        style={{ borderColor: "#C45D35" }}
      >
        Modernism sought universal truths through rationalism; postmodernism
        questioned whether those truths were anything more than power structures
        dressed in philosophy.
        <br />
        <span className="text-[#52525B] italic">Source: Modernism</span>
      </div>
    </div>
  );
}
