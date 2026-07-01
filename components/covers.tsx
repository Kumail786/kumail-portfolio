/* Custom-designed SVG cover art for each project. Abstract, branded, no stock imagery. */

type CoverProps = { className?: string };

const VB = "0 0 640 360";

function Frame({
  id,
  from,
  to,
  children,
}: {
  id: string;
  from: string;
  to: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a0e16" />
          <stop offset="1" stopColor="#05060a" />
        </linearGradient>
        <linearGradient id={`${id}-ac`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor={from} stopOpacity="0.5" />
          <stop offset="1" stopColor={from} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="360" fill={`url(#${id}-bg)`} />
      <rect width="640" height="360" fill={`url(#${id}-grid)`} />
      <rect width="640" height="360" fill={`url(#${id}-glow)`} />
      {children}
    </>
  );
}

function CleaCover({ className }: CoverProps) {
  const id = "clea";
  const from = "#a78bfa";
  const to = "#e879f9";
  const bars = [18, 34, 56, 40, 72, 96, 64, 44, 80, 52, 30, 60, 88, 46, 26];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CLEA cover art">
      <Frame id={id} from={from} to={to}>
        {/* chat bubbles */}
        <g>
          <rect x="70" y="70" width="210" height="60" rx="16" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.1" />
          <circle cx="100" cy="100" r="10" fill={`url(#${id}-ac)`} />
          <rect x="122" y="90" width="130" height="8" rx="4" fill="#ffffff" fillOpacity="0.35" />
          <rect x="122" y="106" width="90" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
        </g>
        <g>
          <rect x="330" y="150" width="240" height="60" rx="16" fill={from} fillOpacity="0.14" stroke={from} strokeOpacity="0.4" />
          <rect x="350" y="170" width="170" height="8" rx="4" fill="#ffffff" fillOpacity="0.5" />
          <rect x="350" y="186" width="120" height="8" rx="4" fill="#ffffff" fillOpacity="0.28" />
        </g>
        {/* waveform */}
        <g transform="translate(70,250)">
          {bars.map((h, i) => (
            <rect key={i} x={i * 24} y={60 - h / 2} width="10" height={h} rx="5" fill={`url(#${id}-ac)`} fillOpacity={0.55 + (i % 3) * 0.15} />
          ))}
        </g>
        {/* mic */}
        <g transform="translate(548,250)">
          <circle cx="0" cy="30" r="34" fill={from} fillOpacity="0.15" stroke={from} strokeOpacity="0.5" />
          <rect x="-8" y="8" width="16" height="30" rx="8" fill={`url(#${id}-ac)`} />
          <path d="M-16 30a16 16 0 0032 0" fill="none" stroke={to} strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="46" x2="0" y2="56" stroke={to} strokeWidth="3" />
        </g>
      </Frame>
    </svg>
  );
}

function ArcadeCover({ className }: CoverProps) {
  const id = "arcade";
  const from = "#fb923c";
  const to = "#f59e0b";
  const modules = ["BELA", "CLEA", "QORA", "PIVO", "DRIO"];
  const cx = 320;
  const cy = 180;
  const R = 118;
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arcade cover art">
      <Frame id={id} from={from} to={to}>
        {/* links */}
        {modules.map((_, i) => {
          const a = (Math.PI * 2 * i) / modules.length - Math.PI / 2;
          const x = cx + Math.cos(a) * R;
          const y = cy + Math.sin(a) * R;
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={from} strokeOpacity="0.35" strokeWidth="2" />;
        })}
        {/* module chips */}
        {modules.map((m, i) => {
          const a = (Math.PI * 2 * i) / modules.length - Math.PI / 2;
          const x = cx + Math.cos(a) * R;
          const y = cy + Math.sin(a) * R;
          return (
            <g key={m} transform={`translate(${x - 40},${y - 18})`}>
              <rect width="80" height="36" rx="10" fill="#ffffff" fillOpacity="0.05" stroke={from} strokeOpacity="0.45" />
              <text x="40" y="23" textAnchor="middle" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#f2d9c0">
                {m}
              </text>
            </g>
          );
        })}
        {/* central hub */}
        <circle cx={cx} cy={cy} r="46" fill={`url(#${id}-ac)`} />
        <circle cx={cx} cy={cy} r="46" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
        <text x={cx} y={cy + 6} textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#0a0e16">
          Arcade
        </text>
      </Frame>
    </svg>
  );
}

function DextrussCover({ className }: CoverProps) {
  const id = "dextruss";
  const from = "#34d399";
  const to = "#2dd4bf";
  const nodes = [
    { x: 150, y: 110 },
    { x: 320, y: 80 },
    { x: 490, y: 120 },
    { x: 470, y: 250 },
    { x: 300, y: 280 },
    { x: 160, y: 240 },
  ];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dextruss cover art">
      <Frame id={id} from={from} to={to}>
        {/* orchestration loop */}
        <path
          d="M150 110 Q320 40 490 120 Q560 200 470 250 Q380 320 300 280 Q200 300 160 240 Q100 170 150 110 Z"
          fill="none"
          stroke={from}
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        {/* center agent */}
        <circle cx="320" cy="185" r="40" fill={`url(#${id}-ac)`} />
        <text x="320" y="190" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="800" fill="#04140f">
          agent
        </text>
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1="320" y1="185" x2={n.x} y2={n.y} stroke={to} strokeOpacity="0.3" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="16" fill="#ffffff" fillOpacity="0.06" stroke={from} strokeOpacity="0.5" />
            <circle cx={n.x} cy={n.y} r="5" fill={`url(#${id}-ac)`} />
          </g>
        ))}
        {/* streaming line */}
        <g transform="translate(70,320)">
          <rect x="0" y="0" width="500" height="6" rx="3" fill="#ffffff" fillOpacity="0.08" />
          <rect x="0" y="0" width="300" height="6" rx="3" fill={`url(#${id}-ac)`} />
        </g>
      </Frame>
    </svg>
  );
}

function ActtovCover({ className }: CoverProps) {
  const id = "acttov";
  const from = "#38bdf8";
  const to = "#22d3ee";
  const steps = ["Persona", "Function", "Task", "Tool"];
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acttov cover art">
      <Frame id={id} from={from} to={to}>
        {steps.map((s, i) => {
          const x = 60 + i * 140;
          const y = 150;
          return (
            <g key={s}>
              {i < steps.length - 1 && (
                <line x1={x + 118} y1={y + 22} x2={x + 140} y2={y + 22} stroke={from} strokeOpacity="0.6" strokeWidth="2" markerEnd={`url(#${id}-arrow)`} />
              )}
              <rect x={x} y={y} width="118" height="44" rx="12" fill="#ffffff" fillOpacity="0.05" stroke={from} strokeOpacity="0.45" />
              <text x={x + 59} y={y + 28} textAnchor="middle" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#cfeefb">
                {s}
              </text>
            </g>
          );
        })}
        <defs>
          <marker id={`${id}-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0L8 4L0 8Z" fill={from} />
          </marker>
        </defs>
        {/* state machine label */}
        <text x="60" y="120" fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#8fb9cc">
          LangGraph state machine
        </text>
        {/* looping edge */}
        <path d="M119 240 Q320 320 521 240" fill="none" stroke={to} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="5 7" />
        <circle cx="320" cy="286" r="6" fill={`url(#${id}-ac)`} />
      </Frame>
    </svg>
  );
}

function TradesCover({ className }: CoverProps) {
  const id = "trades";
  const from = "#60a5fa";
  const to = "#818cf8";
  return (
    <svg viewBox={VB} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="trades.org cover art">
      <Frame id={id} from={from} to={to}>
        {/* browser window */}
        <rect x="90" y="70" width="460" height="230" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="90" y="70" width="460" height="40" rx="16" fill="#ffffff" fillOpacity="0.05" />
        <circle cx="116" cy="90" r="5" fill={from} />
        <circle cx="134" cy="90" r="5" fill="#ffffff" fillOpacity="0.25" />
        <circle cx="152" cy="90" r="5" fill="#ffffff" fillOpacity="0.25" />
        <rect x="180" y="84" width="330" height="12" rx="6" fill="#ffffff" fillOpacity="0.07" />
        {/* content blocks */}
        <rect x="112" y="132" width="150" height="146" rx="10" fill={from} fillOpacity="0.12" stroke={from} strokeOpacity="0.3" />
        <rect x="280" y="132" width="248" height="18" rx="6" fill="#ffffff" fillOpacity="0.16" />
        <rect x="280" y="162" width="200" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />
        <rect x="280" y="180" width="230" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />
        {/* chart */}
        <polyline points="290,270 330,240 370,252 410,214 450,230 500,196" fill="none" stroke={`url(#${id}-ac)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="500" cy="196" r="5" fill={to} />
      </Frame>
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
