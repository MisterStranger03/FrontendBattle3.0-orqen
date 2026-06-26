import { useReveal } from "@/lib/useReveal";
import { useTiltHandlers } from "@/lib/useTilt";
import { Icon } from "./Icon";
import { SectionEyebrow } from "./SectionEyebrow";

const CELLS = [
  { label: "OpenAI", glyph: "A\\" },
  { label: "AWS", glyph: "aws" },
  { label: "Azure", glyph: "▦" },
  { label: "Bolt", glyph: "bolt" },
  { label: "Anthropic", glyph: "✸" },
  { label: "Linear", glyph: "▢" },
  { label: "Slack", glyph: "#" },
  { label: "Postgres", glyph: "pg" },
];

export function Integrations() {
  const ref = useReveal<HTMLElement>();
  const tilt = useTiltHandlers(12);
  return (
    <section
      ref={ref}
      id="integrations"
      aria-labelledby="integrations-heading"
      className="bg-noir py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionEyebrow>INTEGRATIONS</SectionEyebrow>
        <h2
          id="integrations-heading"
          className="reveal mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-arctic"
        >
          Orqen bridges your data, tools, and agent workflows. Deploy custom AI agents that operate
          inside the systems your team already uses.
        </h2>

        <div className="reveal mt-6 inline-flex items-center gap-2 rounded-full border border-arctic/15 bg-noir/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-arctic/60">
          <Icon name="cog" size={12} />
          <span>fully configurable connectors</span>
        </div>

        <div
          className="reveal mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
          style={{ ["--i" as string]: 1 }}
        >
          {CELLS.map((c) => (
            <div
              key={c.label}
              onPointerMove={tilt.onPointerMove}
              onPointerLeave={tilt.onPointerLeave}
              className="tilt-3d spotlight group relative flex aspect-[5/3] items-center justify-center rounded-xl border border-arctic/10 bg-noir transition-colors duration-200 hover:bg-arctic/5"
            >
              <span className="tilt-deep font-display text-2xl font-semibold tracking-tight text-arctic/70 transition-colors duration-200 group-hover:text-arctic">
                {c.glyph}
              </span>
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-arctic/45">
                <Icon name="link" size={11} />
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
