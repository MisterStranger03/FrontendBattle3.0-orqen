import { useEffect, useRef, useState } from "react";
import {
  CURRENCIES,
  PLANS,
  PLAN_META,
  computePrice,
  type Currency,
  type Cycle,
} from "@/lib/pricing";
import { useReveal } from "@/lib/useReveal";
import { useTiltHandlers } from "@/lib/useTilt";
import { Icon } from "./Icon";
import { SectionEyebrow } from "./SectionEyebrow";

/**
 * State-isolated pricing matrix.
 *
 * Parent `<PricingMatrix>` renders ONCE. Price text lives inside refs; the
 * controls flush new values directly into `el.textContent` so changing the
 * cycle or currency mutates only the price text nodes — no React re-render
 * cascades through the surrounding cards or sections.
 */
export function PricingMatrix() {
  const ref = useReveal<HTMLElement>();
  const tilt = useTiltHandlers(8);
  const priceRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const noteRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  // Initial state — read once for first paint; subsequent updates bypass React.
  const cycleRef = useRef<Cycle>("monthly");
  const currencyRef = useRef<Currency>("USD");

  function flush() {
    const cycle = cycleRef.current;
    const currency = currencyRef.current;
    for (const plan of PLANS) {
      const el = priceRefs.current[plan];
      if (el) el.textContent = computePrice(plan, currency, cycle);
      const note = noteRefs.current[plan];
      if (note) {
        note.textContent = cycle === "annual" ? "/mo · billed annually" : "/mo · billed monthly";
      }
    }
  }

  return (
    <section
      ref={ref}
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-arctic py-28 text-noir md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
          <div className="text-noir">
            <SectionEyebrow>PRICING MATRIX</SectionEyebrow>
            <h2
              id="pricing-heading"
              className="reveal mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1] tracking-tight"
            >
              One matrix.
              <br />
              Three currencies.
            </h2>
          </div>
          <div className="md:text-right">
            <p
              className="reveal max-w-md text-base leading-relaxed text-noir/65 md:ml-auto"
              style={{ ["--i" as string]: 1 }}
            >
              Flexible plans for teams building, deploying, and scaling custom AI workflows.
            </p>
          </div>
        </div>

        <PriceControls
          onChange={(next) => {
            if (next.cycle) cycleRef.current = next.cycle;
            if (next.currency) currencyRef.current = next.currency;
            flush();
          }}
        />

        <div className="reveal mt-10 grid gap-4 md:grid-cols-3" style={{ ["--i" as string]: 2 }}>
          {PLANS.map((plan) => {
            const meta = PLAN_META[plan];
            const highlight = meta.highlight;
            return (
              <article
                key={plan}
                aria-labelledby={`plan-${plan}`}
                onPointerMove={tilt.onPointerMove}
                onPointerLeave={tilt.onPointerLeave}
                className={[
                  "tilt-3d spotlight relative flex flex-col gap-6 rounded-2xl border p-7",
                  highlight
                    ? "border-noir bg-noir text-arctic shimmer"
                    : "border-noir/15 bg-mint/40 text-noir",
                ].join(" ")}
              >
                {highlight && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-forsythia px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-noir">
                    most adopted
                  </span>
                )}
                <header>
                  <h3
                    id={`plan-${plan}`}
                    className="font-display text-xl font-medium tracking-tight"
                  >
                    {plan}
                  </h3>
                  <p
                    className={[
                      "mt-2 text-sm leading-relaxed",
                      highlight ? "text-arctic/70" : "text-noir/65",
                    ].join(" ")}
                  >
                    {meta.tagline}
                  </p>
                </header>

                <div className="flex items-baseline gap-2 border-y border-current/10 py-6">
                  <span
                    ref={(el) => {
                      priceRefs.current[plan] = el;
                    }}
                    className="font-display text-5xl font-medium tracking-tight"
                  >
                    {computePrice(plan, "USD", "monthly")}
                  </span>
                  <span
                    ref={(el) => {
                      noteRefs.current[plan] = el;
                    }}
                    className={[
                      "font-mono text-xs",
                      highlight ? "text-arctic/55" : "text-noir/55",
                    ].join(" ")}
                  >
                    /mo · billed monthly
                  </span>
                </div>

                <ul className="flex flex-col gap-3 text-sm">
                  {meta.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={[
                          "mt-1 grid h-4 w-4 place-items-center rounded-full",
                          highlight ? "bg-arctic text-noir" : "bg-noir text-arctic",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        >
                          <path d="M1.5 4.7 L3.7 6.8 L7.5 2.2" />
                        </svg>
                      </span>
                      <span className={highlight ? "text-arctic/85" : "text-noir/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "mt-auto inline-flex items-center justify-between gap-3 rounded-md px-4 py-3 font-mono text-[12px] uppercase tracking-widest transition-transform duration-200 hover:-translate-y-[1px]",
                    highlight ? "bg-arctic text-noir" : "bg-noir text-arctic",
                  ].join(" ")}
                >
                  {meta.cta}
                  <Icon name="arrow-trending-up" size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Local controls. State lives only here. Parent never re-renders.
 */
function PriceControls({
  onChange,
}: {
  onChange: (next: { cycle?: Cycle; currency?: Currency }) => void;
}) {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const knobRef = useRef<HTMLSpanElement | null>(null);
  const ddRef = useRef<HTMLDivElement | null>(null);

  // close dropdown on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!ddRef.current?.contains(e.target as Node)) setCurrencyOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="reveal relative z-40 mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-noir/10 py-5">
      {/* Segmented toggle */}
      <div
        role="tablist"
        aria-label="Billing cycle"
        className="relative inline-flex items-center rounded-full bg-noir/5 p-1"
      >
        <span
          ref={knobRef}
          aria-hidden="true"
          className="seg-knob absolute left-1 top-1 h-[calc(100%-8px)] rounded-full bg-noir"
          style={{
            width: "calc(50% - 4px)",
            transform: cycle === "annual" ? "translateX(100%)" : "translateX(0)",
          }}
        />
        {(["monthly", "annual"] as Cycle[]).map((c) => {
          const active = cycle === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => {
                setCycle(c);
                onChange({ cycle: c });
              }}
              className={[
                "relative z-10 min-w-[110px] rounded-full px-5 py-2 font-mono text-[12px] uppercase tracking-widest transition-colors duration-200",
                active ? "text-arctic" : "text-noir/60 hover:text-noir",
              ].join(" ")}
            >
              {c}
              {c === "annual" && (
                <span
                  className={[
                    "ml-2 rounded-full px-1.5 py-0.5 text-[9px]",
                    active ? "bg-forsythia text-noir" : "bg-noir/10 text-noir/60",
                  ].join(" ")}
                >
                  -20%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Currency dropdown (custom, no Radix) */}
      <div ref={ddRef} className="relative z-50">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={currencyOpen}
          onClick={() => setCurrencyOpen((o) => !o)}
          className="inline-flex items-center gap-3 rounded-md border border-noir/15 px-4 py-2 font-mono text-[12px] uppercase tracking-widest text-noir transition-colors duration-200 hover:bg-noir hover:text-arctic"
        >
          <span className="opacity-60">currency //</span>
          <span>{currency}</span>
          <Icon
            name="chevron-down"
            size={14}
            style={{
              transform: currencyOpen ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 180ms ease-out",
            }}
          />
        </button>
        {currencyOpen && (
          <ul
            role="listbox"
            aria-label="Currency"
            className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-noir/10 bg-arctic shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
          >
            {CURRENCIES.map((c) => {
              const active = currency === c;
              return (
                <li key={c}>
                  <button
                    role="option"
                    aria-selected={active}
                    type="button"
                    onClick={() => {
                      setCurrency(c);
                      setCurrencyOpen(false);
                      onChange({ currency: c });
                    }}
                    className={[
                      "flex w-full items-center justify-between px-4 py-2.5 font-mono text-[12px] uppercase tracking-widest transition-colors duration-150",
                      active ? "bg-noir text-arctic" : "text-noir hover:bg-mint/60",
                    ].join(" ")}
                  >
                    {c}
                    <span className="opacity-50">
                      {c === "USD" ? "$" : c === "EUR" ? "€" : "₹"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
