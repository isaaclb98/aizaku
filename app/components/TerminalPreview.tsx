export default function TerminalPreview() {
  return (
    <div
      className="font-mono text-sm text-[var(--text-muted)] leading-relaxed"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      <div className="text-[var(--text-muted)] text-xs mb-2">QUERY</div>
      <div className="text-[#FAFAF9] mb-6">
        &quot;The tension between Modernism and Postmodernism&quot;
      </div>

      <div className="text-[var(--text-muted)] text-xs mb-2">RESULTS — 6 hops</div>

      <div
        className="pl-4 border-l-2 mb-4 text-[var(--text-muted)]"
        style={{ borderColor: "var(--accent)" }}
      >
        Postmodernism rejects the grand narratives of modernism, treating
        style as a cultural construct rather than an aesthetic absolute.
        <br />
        <span className="text-[#52525B] italic">
          Source: Postmodernism
        </span>
      </div>

      <div
        className="pl-4 border-l-2 mb-4 text-[var(--text-muted)]"
        style={{ borderColor: "var(--accent)" }}
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
