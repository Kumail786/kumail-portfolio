/* Hand-designed UI mockups for each project — each is an app-window rendering of the
   product's real interface (these apps are private, so no real screenshots). */

type CoverProps = { className?: string };
const VB = "0 0 640 360";

/* ---- tiny primitives ---------------------------------------------------- */
function Ln({ x, y, w, h = 6, o = 0.14, c = "#ffffff", r = 3 }: { x: number; y: number; w: number; h?: number; o?: number; c?: string; r?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={c} fillOpacity={o} />;
}
function Txt({ x, y, children, size = 11, o = 0.55, c = "#ffffff", w = 400, anchor = "start" }: { x: number; y: number; children: React.ReactNode; size?: number; o?: number; c?: string; w?: number; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontFamily="sans-serif" fontSize={size} fontWeight={w} fill={c} fillOpacity={o} textAnchor={anchor}>
      {children}
    </text>
  );
}

function Window({ id, title, from, to, children }: { id: string; title: string; from: string; to: string; children: React.ReactNode }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b0f18" />
          <stop offset="1" stopColor="#05060a" />
        </linearGradient>
        <linearGradient id={`${id}-ac`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.1" r="0.8">
          <stop offset="0" stopColor={from} stopOpacity="0.28" />
          <stop offset="1" stopColor={from} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill={`url(#${id}-bg)`} />
      <rect width="640" height="360" fill={`url(#${id}-glow)`} />
      {/* window */}
      <rect x="40" y="28" width="560" height="304" rx="16" fill="#0d1220" stroke="#ffffff" strokeOpacity="0.10" />
      {/* title bar */}
      <path d="M40 44a16 16 0 0116-16h488a16 16 0 0116 16v16H40z" fill="#ffffff" fillOpacity="0.03" />
      <circle cx="62" cy="44" r="4.5" fill={from} />
      <circle cx="78" cy="44" r="4.5" fill="#ffffff" fillOpacity="0.18" />
      <circle cx="94" cy="44" r="4.5" fill="#ffffff" fillOpacity="0.18" />
      <rect x="238" y="37" width="164" height="15" rx="7.5" fill="#ffffff" fillOpacity="0.05" />
      <Txt x={320} y={48} size={10} o={0.4} anchor="middle">{title}</Txt>
      {children}
    </>
  );
}

/* ---- CLEA: AI interview / respondent chat ------------------------------- */
function CleaCover({ className }: CoverProps) {
  const id = "clea";
  const from = "#a78bfa";
  const to = "#e879f9";
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CLEA interface mockup">
      <Window id={id} title="clea — interview session" from={from} to={to}>
        {/* sidebar */}
        <line x1="182" y1="60" x2="182" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={56} y={82} size={10} o={0.4} w={700}>STUDIES</Txt>
        <rect x="52" y="94" width="120" height="26" rx="7" fill={from} fillOpacity="0.16" stroke={from} strokeOpacity="0.4" />
        <circle cx="66" cy="107" r="5" fill={`url(#${id}-ac)`} />
        <Ln x={78} y={104} w={72} o={0.5} />
        {[132, 166, 200].map((y) => (
          <g key={y}>
            <circle cx="66" cy={y + 13} r="5" fill="#ffffff" fillOpacity="0.12" />
            <Ln x={78} y={y + 10} w={70} o={0.14} />
          </g>
        ))}
        {/* conversation */}
        <Txt x={202} y={82} size={10} o={0.4} w={700}>SESSION 24 · LIVE</Txt>
        <circle cx="580" cy="78" r="4" fill="#34d399" />
        {/* AI bubble */}
        <rect x="202" y="94" width="250" height="42" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <Ln x={214} y={106} w={210} o={0.3} />
        <Ln x={214} y={120} w={150} o={0.16} />
        {/* respondent bubble (right) */}
        <rect x="330" y="146" width="256" height="36" rx="12" fill={from} fillOpacity="0.16" stroke={from} strokeOpacity="0.35" />
        <Ln x={344} y={161} w={200} o={0.45} c={from} />
        {/* AI bubble */}
        <rect x="202" y="192" width="284" height="52" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <Ln x={214} y={205} w={252} o={0.3} />
        <Ln x={214} y={219} w={220} o={0.18} />
        <Ln x={214} y={231} w={120} o={0.14} />
        {/* input bar with waveform + mic */}
        <rect x="202" y="286" width="384" height="34" rx="17" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
        <g transform="translate(218,303)">
          {[10, 16, 9, 20, 13, 22, 12, 8, 15].map((h, i) => (
            <rect key={i} x={i * 9} y={-h / 2} width="3.5" height={h} rx="1.75" fill={`url(#${id}-ac)`} fillOpacity="0.7" />
          ))}
        </g>
        <Txt x={320} y={307} size={10} o={0.3}>Speak or type your answer…</Txt>
        <circle cx="568" cy="303" r="13" fill={`url(#${id}-ac)`} />
        <rect x="564" y="296" width="8" height="10" rx="4" fill="#0d1220" />
      </Window>
    </svg>
  );
}

/* ---- Arcade: collaborative workspace OS -------------------------------- */
function ArcadeCover({ className }: CoverProps) {
  const id = "arcade";
  const from = "#fb923c";
  const to = "#f59e0b";
  const nav = ["BELA", "CLEA", "QORA", "PIVO", "DRIO"];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arcade workspace interface mockup">
      <Window id={id} title="arcade — workspace" from={from} to={to}>
        {/* left nav */}
        <line x1="176" y1="60" x2="176" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="52" y="74" width="112" height="26" rx="7" fill="#ffffff" fillOpacity="0.05" />
        <rect x="60" y="81" width="12" height="12" rx="4" fill={`url(#${id}-ac)`} />
        <Txt x={80} y={91} size={10} o={0.55} w={700}>h2 · Workspace</Txt>
        {nav.map((m, i) => {
          const y = 112 + i * 30;
          const active = i === 1;
          return (
            <g key={m}>
              {active && <rect x="52" y={y} width="112" height="24" rx="7" fill={from} fillOpacity="0.16" />}
              <circle cx="66" cy={y + 12} r="4" fill={active ? from : "#ffffff"} fillOpacity={active ? 1 : 0.25} />
              <Txt x={78} y={y + 16} size={10} o={active ? 0.7 : 0.35} w={active ? 700 : 400}>{m}</Txt>
            </g>
          );
        })}
        {/* center thread */}
        <Txt x={196} y={82} size={10} o={0.4} w={700}>THREAD</Txt>
        <rect x="196" y="92" width="238" height="44" rx="10" fill="#ffffff" fillOpacity="0.05" />
        <circle cx="210" cy="106" r="6" fill={`url(#${id}-ac)`} />
        <Ln x={224} y={101} w={120} o={0.4} />
        <Ln x={208} y={118} w={210} o={0.18} />
        {/* deep research card */}
        <rect x="196" y="146" width="238" height="60" rx="10" fill={from} fillOpacity="0.10" stroke={from} strokeOpacity="0.3" />
        <Txt x={208} y={164} size={9} o={0.6} c={from} w={700}>DEEP RESEARCH</Txt>
        <Ln x={208} y={174} w={200} o={0.2} />
        <Ln x={208} y={186} w={170} o={0.16} />
        <Ln x={208} y={196} w={120} o={0.12} />
        {/* user msg */}
        <rect x="250" y="216" width="184" height="30" rx="10" fill="#ffffff" fillOpacity="0.04" />
        <Ln x={262} y={228} w={150} o={0.22} />
        {/* composer */}
        <rect x="196" y="290" width="238" height="30" rx="9" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={208} y={309} size={9} o={0.3}>Ask across your workspace…</Txt>
        {/* right artifact panel */}
        <line x1="444" y1="60" x2="444" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={458} y={82} size={10} o={0.4} w={700}>ARTIFACT</Txt>
        <rect x="524" y="72" width="60" height="16" rx="8" fill={from} fillOpacity="0.15" />
        <Txt x={554} y={84} size={8} o={0.6} c={from} anchor="middle">v3</Txt>
        <rect x="458" y="98" width="126" height="222" rx="10" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.07" />
        <Ln x={470} y={114} w={90} o={0.35} h={8} />
        {[134, 150, 166, 186, 202, 218, 238, 254, 270].map((y) => (
          <Ln key={y} x={470} y={y} w={y % 3 === 0 ? 78 : 102} o={0.13} />
        ))}
        <rect x="470" y={292} width="60" height="18" rx="6" fill={`url(#${id}-ac)`} />
        <Txt x={500} y={304} size={9} o={0.9} c="#0d1220" anchor="middle" w={700}>Export</Txt>
      </Window>
    </svg>
  );
}

/* ---- Dextruss: agent chat + live run panel ----------------------------- */
function DextrussCover({ className }: CoverProps) {
  const id = "dextruss";
  const from = "#34d399";
  const to = "#2dd4bf";
  const steps = [
    { t: "Planner", d: "done" },
    { t: "Agent · research", d: "done" },
    { t: "Tool · search", d: "done" },
    { t: "Agent · compose", d: "run" },
  ];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dextruss agent interface mockup">
      <Window id={id} title="dextruss — agent" from={from} to={to}>
        {/* slim icon rail */}
        <line x1="92" y1="60" x2="92" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="60" y="76" width="20" height="20" rx="6" fill={from} fillOpacity="0.2" />
        {[108, 140, 172].map((y) => (
          <rect key={y} x="60" y={y} width="20" height="20" rx="6" fill="#ffffff" fillOpacity="0.06" />
        ))}
        {/* chat */}
        <Txt x={112} y={82} size={10} o={0.4} w={700}>CHAT</Txt>
        <rect x="112" y="92" width="278" height="46" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <circle cx="126" cy="106" r="6" fill={`url(#${id}-ac)`} />
        <Ln x={140} y={101} w={150} o={0.4} />
        <Ln x={124} y={120} w={250} o={0.18} />
        {/* tool chip */}
        <rect x="112" y="150" width="120" height="22" rx="11" fill={from} fillOpacity="0.14" stroke={from} strokeOpacity="0.35" />
        <circle cx="126" cy="161" r="3.5" fill={from} />
        <Txt x={136} y={165} size={9} o={0.7} c={from}>tool: web.search</Txt>
        {/* streaming assistant */}
        <rect x="112" y="184" width="278" height="66" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <Ln x={124} y={198} w={250} o={0.3} />
        <Ln x={124} y={212} w={236} o={0.2} />
        <Ln x={124} y={226} w={180} o={0.16} />
        <rect x="308" y={222} width="7" height="12" rx="2" fill={from} />
        {/* composer */}
        <rect x="112" y="290" width="278" height="30" rx="9" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={124} y={309} size={9} o={0.3}>Message the agent…</Txt>
        <circle cx="374" cy="305" r="10" fill={`url(#${id}-ac)`} />
        {/* right: run trace */}
        <line x1="404" y1="60" x2="404" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={418} y={82} size={10} o={0.4} w={700}>AGENT RUN</Txt>
        <rect x="536" y="72" width="48" height="16" rx="8" fill="#34d399" fillOpacity="0.15" />
        <Txt x={560} y={84} size={8} o={0.8} c="#34d399" anchor="middle">live</Txt>
        {steps.map((s, i) => {
          const y = 104 + i * 46;
          return (
            <g key={i}>
              {i < steps.length - 1 && <line x1="424" y1={y + 20} x2="424" y2={y + 40} stroke="#ffffff" strokeOpacity="0.12" />}
              <circle cx="424" cy={y + 8} r="7" fill={s.d === "run" ? "none" : from} fillOpacity={s.d === "run" ? 1 : 0.9} stroke={from} strokeOpacity="0.6" />
              {s.d === "done" && <path d={`M${420.5} ${y + 8}l2.5 2.5 4-5`} stroke="#0d1220" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
              {s.d === "run" && <circle cx="424" cy={y + 8} r="2.5" fill={from} />}
              <rect x="440" y={y - 2} width="132" height="24" rx="7" fill="#ffffff" fillOpacity="0.04" />
              <Txt x={450} y={y + 13} size={9} o={0.6}>{s.t}</Txt>
            </g>
          );
        })}
      </Window>
    </svg>
  );
}

/* ---- Acttov: agent config + execution console -------------------------- */
function ActtovCover({ className }: CoverProps) {
  const id = "acttov";
  const from = "#38bdf8";
  const to = "#22d3ee";
  const pipeline = ["Persona", "Function", "Task", "Tool"];
  const json = [
    { k: 12, w: 90, o: 0.5 },
    { k: 28, w: 150, o: 0.3 },
    { k: 28, w: 120, o: 0.3 },
    { k: 44, w: 110, o: 0.22 },
    { k: 28, w: 160, o: 0.3 },
    { k: 12, w: 60, o: 0.4 },
  ];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acttov console mockup">
      <Window id={id} title="acttov — execution console" from={from} to={to}>
        {/* left config list */}
        <line x1="186" y1="60" x2="186" y2="332" stroke="#ffffff" strokeOpacity="0.08" />
        <Txt x={56} y={82} size={10} o={0.4} w={700}>CONFIG</Txt>
        {["Personas", "Functions", "Tasks", "Tools"].map((t, i) => {
          const y = 96 + i * 30;
          const active = i === 0;
          return (
            <g key={t}>
              {active && <rect x="52" y={y} width="120" height="24" rx="7" fill={from} fillOpacity="0.14" />}
              <rect x="60" y={y + 7} width="10" height="10" rx="3" fill={active ? from : "#ffffff"} fillOpacity={active ? 1 : 0.2} />
              <Txt x={78} y={y + 16} size={10} o={active ? 0.7 : 0.35} w={active ? 700 : 400}>{t}</Txt>
            </g>
          );
        })}
        <rect x="52" y="240" width="120" height="26" rx="8" fill={`url(#${id}-ac)`} fillOpacity="0.9" />
        <Txt x={112} y={257} size={10} o={0.95} c="#0d1220" anchor="middle" w={700}>Run request</Txt>
        {/* pipeline chips */}
        <Txt x={202} y={82} size={10} o={0.4} w={700}>EXECUTION GRAPH</Txt>
        {pipeline.map((p, i) => {
          const x = 202 + i * 96;
          return (
            <g key={p}>
              {i < pipeline.length - 1 && <line x1={x + 84} y1={102} x2={x + 96} y2={102} stroke={from} strokeOpacity="0.6" strokeWidth="1.6" />}
              <rect x={x} y="92" width="84" height="22" rx="7" fill="#ffffff" fillOpacity="0.05" stroke={from} strokeOpacity="0.35" />
              <Txt x={x + 42} y={106} size={9} o={0.65} anchor="middle">{p}</Txt>
            </g>
          );
        })}
        {/* response card */}
        <rect x="202" y="130" width="384" height="150" rx="10" fill="#070b12" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="202" y="130" width="384" height="26" rx="10" fill="#ffffff" fillOpacity="0.03" />
        <circle cx="510" cy="143" r="3.5" fill="#34d399" />
        <Txt x={520} y={147} size={9} o={0.6}>200 · streaming</Txt>
        <Txt x={214} y={147} size={9} o={0.5} w={700}>ExecutionResult</Txt>
        <g transform="translate(0,8)">
          {json.map((r, i) => (
            <Ln key={i} x={214 + r.k} y={164 + i * 16} w={r.w} o={r.o} c={i === 0 || i === 5 ? from : "#ffffff"} />
          ))}
        </g>
        {/* status bar */}
        <rect x="202" y="290" width="384" height="30" rx="9" fill="#ffffff" fillOpacity="0.03" />
        <Txt x={214} y={309} size={9} o={0.4}>POST /v1/execute · multi-tenant · encrypted secrets</Txt>
      </Window>
    </svg>
  );
}

/* ---- trades.org: web platform dashboard -------------------------------- */
function TradesCover({ className }: CoverProps) {
  const id = "trades";
  const from = "#60a5fa";
  const to = "#818cf8";
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="trades.org dashboard mockup">
      <Window id={id} title="trades.org" from={from} to={to}>
        {/* app top nav */}
        <rect x="56" y="70" width="16" height="16" rx="5" fill={`url(#${id}-ac)`} />
        <Txt x={80} y={82} size={11} o={0.7} w={700}>trades</Txt>
        {[160, 210, 258].map((x) => (
          <Ln key={x} x={x} y={74} w={34} o={0.16} h={7} />
        ))}
        <rect x="516" y="70" width="68" height="18" rx="9" fill={`url(#${id}-ac)`} />
        <Txt x={550} y={83} size={9} o={0.95} c="#0d1220" anchor="middle" w={700}>Sign in</Txt>
        <line x1="40" y1="100" x2="600" y2="100" stroke="#ffffff" strokeOpacity="0.07" />
        {/* stat cards */}
        {[0, 1, 2].map((i) => {
          const x = 56 + i * 130;
          return (
            <g key={i}>
              <rect x={x} y="116" width="118" height="60" rx="10" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.07" />
              <Ln x={x + 12} y={130} w={54} o={0.2} />
              <Txt x={x + 12} y={162} size={18} o={0.85} c={from} w={800}>{["82%", "1.2k", "340"][i]}</Txt>
            </g>
          );
        })}
        {/* chart panel */}
        <rect x="56" y="188" width="248" height="128" rx="10" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.07" />
        <Ln x={68} y={202} w={80} o={0.25} />
        <polyline points="68,286 104,262 140,272 176,232 212,248 248,210 288,224" fill="none" stroke={`url(#${id}-ac)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="68,286 104,262 140,272 176,232 212,248 248,210 288,224 288,304 68,304" fill={from} fillOpacity="0.08" />
        {/* table panel */}
        <rect x="320" y="188" width="264" height="128" rx="10" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.07" />
        <Ln x={332} y={202} w={90} o={0.25} />
        {[220, 244, 268, 292].map((y, i) => (
          <g key={y}>
            <circle cx={340} cy={y + 6} r="6" fill={i === 0 ? from : "#ffffff"} fillOpacity={i === 0 ? 0.8 : 0.12} />
            <Ln x={356} y={y + 3} w={150} o={0.16} />
            <Ln x={520} y={y + 3} w={44} o={0.12} />
          </g>
        ))}
      </Window>
    </svg>
  );
}

const COVERS: Record<string, (p: CoverProps) => React.ReactElement> = {
  clea: CleaCover,
  arcade: ArcadeCover,
  dextruss: DextrussCover,
  acttov: ActtovCover,
  trades: TradesCover,
};

export function Cover({ slug, className }: { slug: string; className?: string }) {
  const C = COVERS[slug] ?? TradesCover;
  return <C className={className} />;
}
