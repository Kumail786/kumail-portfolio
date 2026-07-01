export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="aurora left-[-10%] top-[-10%] h-[45vw] w-[45vw]"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 60%)" }}
      />
      <div
        className="aurora right-[-15%] top-[10%] h-[40vw] w-[40vw]"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 60%)", animationDelay: "-6s" }}
      />
      <div
        className="aurora bottom-[-20%] left-[20%] h-[42vw] w-[42vw]"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent 60%)", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
