export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #fdf7ff 0%, #f5f8ff 40%, #f7f8fe 100%)" }} />
      <div className="absolute inset-0 grid-bg" />
      {/* vibrant blobs */}
      <div
        className="aurora left-[-8%] top-[-12%] h-[42vw] w-[42vw]"
        style={{ background: "radial-gradient(circle, #c4b5fd, transparent 62%)" }}
      />
      <div
        className="aurora right-[-12%] top-[-6%] h-[38vw] w-[38vw]"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent 62%)", animationDelay: "-7s" }}
      />
      <div
        className="aurora left-[28%] top-[24%] h-[40vw] w-[40vw]"
        style={{ background: "radial-gradient(circle, #7dd3fc, transparent 62%)", animationDelay: "-13s" }}
      />
      <div
        className="aurora right-[6%] bottom-[-14%] h-[34vw] w-[34vw]"
        style={{ background: "radial-gradient(circle, #a7f3d0, transparent 62%)", animationDelay: "-4s" }}
      />
      {/* fade to page bg at edges */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 40%, rgba(247,248,254,0.75) 100%)" }} />
    </div>
  );
}
