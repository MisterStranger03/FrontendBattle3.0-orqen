import { useReveal } from "@/lib/useReveal";
import { useTiltHandlers } from "@/lib/useTilt";
import { Icon } from "./Icon";
import { SectionEyebrow } from "./SectionEyebrow";

function DialCard({
  label,
  value,
  caption,
  percent,
}: {
  label: string;
  value: string;
  caption: string;
  percent: number;
}) {
  const tilt = useTiltHandlers(9);
  // Half-circle dial built with SVG stroke-dasharray.
  const radius = 70;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  return (
    <article
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      className="reveal tilt-3d spotlight flex flex-col gap-4 rounded-xl border border-arctic/10 bg-noir p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <span className="mt-1 text-forsythia/80">
            <Icon name="chart-pie" size={14} />
          </span>
          <div>
            <h3 className="font-display text-base text-arctic">{label}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-arctic/45">
              {caption}
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-arctic/55">{percent}%</span>
      </div>
      <div className="relative mx-auto mt-2 h-[110px] w-[180px]">
        <svg width="180" height="110" viewBox="0 0 180 110" aria-hidden="true">
          <path
            d="M20 100 A70 70 0 0 1 160 100"
            fill="none"
            stroke="rgba(241,246,244,0.12)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M20 100 A70 70 0 0 1 160 100"
            fill="none"
            stroke="var(--color-forsythia)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 600ms ease-out" }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-1 text-center font-display text-3xl font-medium text-arctic">
          {value}
        </div>
      </div>
    </article>
  );
}

function BarsCard() {
  const bars = [42, 64, 38, 80, 52, 92, 60, 74, 48];
  const tilt = useTiltHandlers(9);
  return (
    <article
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      className="reveal tilt-3d spotlight flex flex-col gap-4 rounded-xl border border-arctic/10 bg-noir p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-base text-arctic">SLA Response</h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-arctic/45">
            global uptime monitoring
          </p>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-xs text-arctic/55">
          <span className="text-arctic/45">
            <Icon name="arrow-path" size={12} />
          </span>
          99.99%
        </span>
      </div>
      <div className="flex h-[110px] items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="relative flex-1">
            <div className="w-full rounded-sm bg-arctic/15" style={{ height: `${h}%` }} />
            {i === 5 && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-sm bg-forsythia px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-noir">
                64%
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 border-t border-arctic/10 pt-3 font-mono text-[10px] uppercase tracking-widest text-arctic/55">
        <span>94 total queries</span>
        <span className="text-right">71 resolved</span>
      </div>
    </article>
  );
}

export function StatsDashboard() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-noir py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionEyebrow>PRODUCT STATISTICS</SectionEyebrow>
          </div>
          <h2
            id="stats-heading"
            className="reveal mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1] tracking-tight text-arctic"
          >
            Optimized for performance.
          </h2>
          <p
            className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-arctic/60"
            style={{ ["--i" as string]: 1 }}
          >
            Monitor every neural pulse in real-time. Orqen provides deep telemetry into agent
            accuracy, server latency, and token efficiency.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <DialCard
            label="System Load"
            caption="active neural processing"
            value="11"
            percent={74}
          />
          <BarsCard />
          <DialCard
            label="Token Usage"
            caption="monthly volume throughput"
            value="245"
            percent={84}
          />
        </div>
      </div>
    </section>
  );
}
