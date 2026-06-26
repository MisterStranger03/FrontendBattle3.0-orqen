import { useEffect, useId, useRef } from "react";
import { useResponsiveMode } from "@/lib/useResponsiveMode";
import { useReveal } from "@/lib/useReveal";
import { Icon } from "./Icon";
import { SectionEyebrow } from "./SectionEyebrow";

type IconName = Parameters<typeof Icon>[0]["name"];

interface BentoNode {
  title: string;
  caption: string;
  body: string;
  icon: IconName;
  span: string;
}

const NODES: BentoNode[] = [
  {
    title: "Visual Workflow Composer",
    caption: "// composer",
    body: "Drag, drop, and version every node. Compose multi-agent topologies on an infinite canvas — Orqen turns intent into deployable graph code.",
    icon: "cube",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Live Telemetry",
    caption: "// telemetry",
    body: "Trace every token, every retry, every fallback. Latency, cost, and policy drift surface in one stream.",
    icon: "chart-pie",
    span: "md:col-span-2",
  },
  {
    title: "Policy Engine",
    caption: "// policy",
    body: "Native guardrails per node. Approve, escalate, or roll back without leaving the runtime.",
    icon: "cog",
    span: "",
  },
  {
    title: "Auto-Retry & Repair",
    caption: "// resilience",
    body: "Self-healing pipelines. Orqen diff-patches failing steps using prior successful trajectories.",
    icon: "arrow-path",
    span: "",
  },
  {
    title: "Universal Connectors",
    caption: "// integrations",
    body: "Slack, GitHub, AWS, Postgres, custom HTTP — every connector ships with typed schemas and replayable invocations.",
    icon: "link",
    span: "md:col-span-2",
  },
];

function ComposerVisual() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{
        background:
          "radial-gradient(circle at 20% 22%, rgba(255,200,1,0.16), transparent 22%), radial-gradient(circle at 76% 26%, rgba(17,76,90,0.18), transparent 24%), linear-gradient(135deg, rgba(241,246,244,0.9), rgba(217,232,226,0.72))",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,43,54,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,43,54,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-xl bg-noir/90 text-arctic shadow-lg">
        <Icon name="cube" size={18} />
      </div>
      <div className="absolute right-8 top-8 rounded-full border border-noir/10 bg-arctic/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-noir/60">
        live canvas
      </div>
      <div className="absolute left-10 top-[44%] h-16 w-24 rounded-2xl border border-noir/10 bg-arctic shadow-[0_18px_40px_-24px_rgba(23,43,54,0.55)]" />
      <div className="absolute left-[40%] top-[30%] h-24 w-36 rounded-2xl border border-noir/10 bg-noir/88 shadow-[0_20px_50px_-28px_rgba(23,43,54,0.6)]" />
      <div className="absolute right-[16%] top-[52%] h-18 w-28 rounded-2xl border border-noir/10 bg-forsythia/85 shadow-[0_18px_40px_-24px_rgba(23,43,54,0.45)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 700" aria-hidden="true">
        <path
          d="M212 328 C315 296, 370 286, 444 324 S593 414, 682 360 S806 262, 882 306"
          fill="none"
          stroke="rgba(23,43,54,0.26)"
          strokeWidth="4"
          strokeDasharray="10 14"
        />
        <circle cx="444" cy="324" r="10" fill="#114C5A" />
        <circle cx="682" cy="360" r="10" fill="#172B36" />
        <circle cx="212" cy="328" r="10" fill="#FFC801" />
      </svg>
    </div>
  );
}

function TelemetryVisual() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{
        background:
          "radial-gradient(circle at 70% 24%, rgba(255,200,1,0.12), transparent 20%), radial-gradient(circle at 18% 76%, rgba(241,246,244,0.08), transparent 26%), linear-gradient(180deg, rgba(17,43,54,0.98), rgba(23,43,54,0.88))",
      }}
    >
      <div className="absolute inset-x-6 top-6 h-[1px] bg-arctic/10" />
      <div className="absolute left-6 top-12 flex items-center gap-2 rounded-full border border-arctic/10 bg-arctic/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-arctic/55">
        <Icon name="chart-pie" size={11} />
        stream
      </div>
      <div className="absolute left-6 right-6 top-24">
        <div className="mb-4 flex items-end gap-3">
          {[38, 62, 48, 70, 54, 82, 66].map((h, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-md bg-arctic/20"
              style={{
                height: `${h}px`,
                background: index === 5 ? "var(--color-forsythia)" : "rgba(241,246,244,0.2)",
              }}
            />
          ))}
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/4 rounded-full bg-arctic/12" />
          <div className="h-3 w-2/3 rounded-full bg-arctic/10" />
          <div className="h-3 w-5/6 rounded-full bg-arctic/8" />
        </div>
      </div>
    </div>
  );
}

function MicroVisual({ tone = "teal" }: { tone?: "teal" | "cream" }) {
  const background =
    tone === "teal"
      ? "radial-gradient(circle at 20% 20%, rgba(255,200,1,0.14), transparent 26%), linear-gradient(180deg, rgba(17,76,90,0.95), rgba(23,43,54,0.9))"
      : "radial-gradient(circle at 80% 20%, rgba(17,76,90,0.15), transparent 24%), linear-gradient(135deg, rgba(241,246,244,0.95), rgba(217,232,226,0.86))";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{ background }}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(241,246,244,0.12) 25%, transparent 25%, transparent 50%, rgba(241,246,244,0.12) 50%, rgba(241,246,244,0.12) 75%, transparent 75%, transparent)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-arctic/10 bg-noir/18 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-arctic/70">
          <span>signal</span>
          <span>online</span>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="h-2 flex-1 rounded-full bg-arctic/35" />
          <span className="h-2 w-2 rounded-full bg-forsythia" />
          <span className="h-2 flex-1 rounded-full bg-arctic/20" />
        </div>
      </div>
    </div>
  );
}

export function BentoFeatures() {
  const { mode, activeIndex, setActiveIndex } = useResponsiveMode(900);
  const ref = useReveal<HTMLElement>();
  const baseId = useId();
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const demoActive = useRef(true);

  // Auto-play 3D hover demo on mount: sweeps each card in sequence for ~5s,
  // then releases so user pointer takes over.
  useEffect(() => {
    if (mode !== "bento") return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    demoActive.current = true;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    const start = performance.now();
    const DURATION = 5000;
    let raf = 0;

    const tick = (now: number) => {
      const t = (now - start) / DURATION; // 0 → 1
      if (t >= 1 || !demoActive.current) {
        cards.forEach((c) => {
          c.style.setProperty("--rx", "0deg");
          c.style.setProperty("--ry", "0deg");
          c.style.removeProperty("--mx");
          c.style.removeProperty("--my");
        });
        setActiveIndex(0);
        return;
      }
      // Sweep one card at a time; each gets ~ DURATION / N seconds in focus.
      const per = 1 / cards.length;
      const idx = Math.min(cards.length - 1, Math.floor(t / per));
      const local = (t - idx * per) / per; // 0 → 1 within this card
      // Highlight the focused card via shared state.
      setActiveIndex(idx);
      cards.forEach((c, i) => {
        if (i === idx) {
          // Smooth circular orbit of the tilt vector
          const angle = local * Math.PI * 2;
          const ease = Math.sin(local * Math.PI); // ramp in & out
          const rx = Math.sin(angle) * 9 * ease;
          const ry = Math.cos(angle) * 9 * ease;
          const mx = 50 + Math.sin(angle) * 35;
          const my = 50 + Math.cos(angle) * 35;
          c.style.setProperty("--rx", `${rx}deg`);
          c.style.setProperty("--ry", `${ry}deg`);
          c.style.setProperty("--mx", `${mx}%`);
          c.style.setProperty("--my", `${my}%`);
        } else {
          c.style.setProperty("--rx", "0deg");
          c.style.setProperty("--ry", "0deg");
        }
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const stopOnInteract = () => {
      demoActive.current = false;
    };
    window.addEventListener("pointerdown", stopOnInteract, { once: true });
    window.addEventListener("keydown", stopOnInteract, { once: true });

    return () => {
      cancelAnimationFrame(raf);
      demoActive.current = false;
      window.removeEventListener("pointerdown", stopOnInteract);
      window.removeEventListener("keydown", stopOnInteract);
    };
  }, [mode, setActiveIndex]);

  return (
    <section
      ref={ref}
      id="features"
      aria-labelledby="features-heading"
      className="bg-noir py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
          <SectionEyebrow>PRODUCT FEATURES</SectionEyebrow>
          <div className="md:text-right">
            <h2
              id="features-heading"
              className="reveal font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1] tracking-tight text-arctic"
            >
              Engineered for autonomy.
            </h2>
            <p
              className="reveal mt-4 max-w-xl text-base leading-relaxed text-arctic/60 md:ml-auto"
              style={{ ["--i" as string]: 1 }}
            >
              Go beyond simple chat interfaces. Orqen provides the underlying architecture to build,
              test, and scale enterprise-grade agents.
            </p>
          </div>
        </div>

        {mode === "bento" ? (
          <div
            role="list"
            className="reveal mt-16 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 md:grid-cols-4"
            style={{ ["--i" as string]: 2 }}
          >
            {NODES.map((n, i) => {
              const active = i === activeIndex;
              return (
                <article
                  role="listitem"
                  key={n.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  onPointerEnter={() => {
                    demoActive.current = false;
                    setActiveIndex(i);
                  }}
                  onFocus={() => setActiveIndex(i)}
                  onPointerMove={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    const r = el.getBoundingClientRect();
                    const px = (e.clientX - r.left) / r.width;
                    const py = (e.clientY - r.top) / r.height;
                    el.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
                    el.style.setProperty("--rx", `${(0.5 - py) * 10}deg`);
                    el.style.setProperty("--mx", `${px * 100}%`);
                    el.style.setProperty("--my", `${py * 100}%`);
                  }}
                  onPointerLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.setProperty("--rx", "0deg");
                    el.style.setProperty("--ry", "0deg");
                  }}
                  tabIndex={0}
                  className={[
                    "tilt-3d spotlight group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6",
                    n.span,
                    active
                      ? "border-forsythia/40 bg-arctic text-noir"
                      : "border-arctic/10 bg-noir text-arctic hover:border-arctic/25",
                  ].join(" ")}
                >
                  {i === 0 ? (
                    <ComposerVisual />
                  ) : i === 1 ? (
                    <TelemetryVisual />
                  ) : (
                    <MicroVisual tone={active ? "cream" : "teal"} />
                  )}
                  <div className="flex items-start justify-between">
                    <span
                      className={[
                        "tilt-deep grid h-10 w-10 place-items-center rounded-md",
                        active ? "bg-noir text-arctic" : "bg-arctic/10 text-arctic",
                      ].join(" ")}
                    >
                      <Icon name={n.icon} size={18} />
                    </span>
                    <span
                      className={[
                        "relative z-10 font-mono text-[10px] uppercase tracking-[0.22em]",
                        active ? "text-noir/60" : "text-arctic/45",
                      ].join(" ")}
                    >
                      {n.caption}
                    </span>
                  </div>
                  <div className="tilt-deep relative z-10 mt-12">
                    <h3 className="font-display text-xl font-medium tracking-tight">{n.title}</h3>
                    <p
                      className={[
                        "mt-2 text-sm leading-relaxed",
                        active ? "text-noir/70" : "text-arctic/55",
                      ].join(" ")}
                    >
                      {n.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <ul
            className="reveal mt-12 divide-y divide-arctic/10 border-y border-arctic/10"
            style={{ ["--i" as string]: 2 }}
          >
            {NODES.map((n, i) => {
              const open = i === activeIndex;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-btn-${i}`;
              return (
                <li key={n.title}>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-arctic"
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-arctic/10 text-arctic">
                        <Icon name={n.icon} size={18} />
                      </span>
                      <span>
                        <span className="block font-display text-lg text-arctic">{n.title}</span>
                        <span className="block font-mono text-[11px] uppercase tracking-widest text-arctic/45">
                          {n.caption}
                        </span>
                      </span>
                    </span>
                    <span
                      className="grid h-9 w-9 place-items-center rounded-full border border-arctic/15 text-arctic transition-transform duration-200"
                      style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
                    >
                      <Icon name="chevron-down" size={14} />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    data-open={open}
                    className="acc-panel"
                  >
                    <div className="acc-inner">
                      <p className="pb-6 pl-14 pr-4 text-[15px] leading-relaxed text-arctic/65">
                        {n.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
