import { useReveal } from "@/lib/useReveal";
import { useTiltHandlers } from "@/lib/useTilt";
import { Icon } from "./Icon";

const CASES = [
  {
    year: "2026",
    brand: "Aetna Member Care",
    body: "We automated Aetna's member data management using secure AI to provide personalised care and clinical insights.",
    accent: "linear-gradient(135deg,#FF9932 0%,#FFC801 100%)",
  },
  {
    year: "2026",
    brand: "Anthem Neural Care Network",
    body: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent.",
    accent: "linear-gradient(135deg,#114C5A 0%,#172B36 100%)",
  },
  {
    year: "2025",
    brand: "Cigna Risk Atlas",
    body: "A geospatial agent grid that surfaces population-level risk shifts to underwriters in near real time.",
    accent: "linear-gradient(135deg,#D9E8E2 0%,#F1F6F4 100%)",
  },
];

function CaseVisual({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] overflow-hidden rounded-md border border-noir/10 shadow-[0_24px_50px_-28px_rgba(23,43,54,0.4)] md:aspect-[5/3] md:h-24 md:w-64"
      style={{ background: accent }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.55), transparent 18%), radial-gradient(circle at 80% 28%, rgba(255,255,255,0.2), transparent 22%), radial-gradient(circle at 50% 80%, rgba(23,43,54,0.18), transparent 30%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,43,54,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,43,54,0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360">
        <path
          d="M76 276 C132 220, 178 228, 230 184 S330 110, 390 152 S494 250, 584 126"
          fill="none"
          stroke="rgba(23,43,54,0.45)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="230" cy="184" r="14" fill="rgba(241,246,244,0.9)" />
        <circle cx="390" cy="152" r="14" fill="rgba(17,76,90,0.9)" />
        <circle cx="584" cy="126" r="14" fill="rgba(23,43,54,0.72)" />
      </svg>
      <div className="absolute left-4 top-4 rounded-full border border-noir/10 bg-arctic/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-noir/60">
        case snapshot
      </div>
    </div>
  );
}

export function CaseStudy() {
  const ref = useReveal<HTMLElement>();
  const tilt = useTiltHandlers(14);

  return (
    <section ref={ref} aria-labelledby="case-heading" className="bg-arctic text-noir">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 border-b border-noir/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="reveal font-mono text-[11px] uppercase tracking-[0.22em] text-noir/55">
              // proof_of_work
            </p>
            <h2
              id="case-heading"
              className="reveal mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-tight"
              style={{ ["--i" as string]: 1 }}
            >
              Enterprise
              <br />
              case studies.
            </h2>
          </div>
          <div className="reveal flex items-center gap-2" style={{ ["--i" as string]: 2 }}>
            <button
              type="button"
              aria-label="Previous case"
              className="grid h-9 w-9 place-items-center rounded-md border border-noir/15 text-noir transition-colors duration-200 hover:bg-noir hover:text-arctic"
            >
              <Icon name="chevron-left" size={14} />
            </button>
            <button
              type="button"
              aria-label="Next case"
              className="grid h-9 w-9 place-items-center rounded-md border border-noir/15 text-noir transition-colors duration-200 hover:bg-noir hover:text-arctic"
            >
              <Icon name="chevron-right" size={14} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-md border border-noir/15 px-4 py-2 font-mono text-[12px] uppercase tracking-widest transition-colors duration-200 hover:bg-noir hover:text-arctic"
            >
              More deployments
              <Icon name="arrow-trending-up" size={14} />
            </a>
          </div>
        </div>

        <ul className="mt-2 divide-y divide-noir/10">
          {CASES.map((c, i) => (
            <li
              key={c.brand}
              className="reveal group grid items-center gap-6 py-8 md:grid-cols-[260px_120px_1fr_auto]"
              style={{ ["--i" as string]: i + 1 }}
            >
              <div
                onPointerMove={tilt.onPointerMove}
                onPointerLeave={tilt.onPointerLeave}
                className="tilt-3d spotlight"
              >
                <CaseVisual accent={c.accent} />
              </div>
              <span className="font-mono text-xs text-noir/55">//{c.year}</span>
              <div>
                <h3 className="font-display text-2xl font-medium">{c.brand}</h3>
                <p className="mt-2 max-w-xl font-mono text-[13px] leading-relaxed text-noir/70">
                  {c.body}
                </p>
              </div>
              <span
                className="grid h-12 w-12 place-items-center rounded-full border border-noir/15 text-noir transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-noir group-hover:text-arctic"
                aria-hidden="true"
              >
                <Icon name="arrow-trending-up" size={16} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
