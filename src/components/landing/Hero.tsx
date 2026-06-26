import { Hero3DMount } from "./Hero3DMount";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section
      id="top"
      className="noise relative isolate overflow-hidden bg-noir pb-24 pt-40 md:pt-48"
      aria-label="Hero"
    >
      {/* Atmospheric backdrop — palette-tinted radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 38%, rgba(17,76,90,0.55), transparent 60%), radial-gradient(circle at 12% 78%, rgba(255,153,50,0.16), transparent 55%), radial-gradient(circle at 50% 0%, rgba(241,246,244,0.06), transparent 70%)",
        }}
      />
      {/* Faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F1F6F4 1px, transparent 1px), linear-gradient(to bottom, #F1F6F4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Three.js scene — sits behind the hero content, blended */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          maskImage: "radial-gradient(ellipse at 70% 45%, #000 0%, #000 45%, transparent 75%)",
        }}
      >
        <Hero3DMount />
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className="hero-rise font-mono text-[11px] uppercase tracking-[0.3em] text-arctic/55"
            style={{ ["--i" as string]: 0 }}
          >
            // 2026 · neural infrastructure
          </p>
          <h1
            className="hero-rise mt-8 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-medium leading-[0.95] tracking-tight text-arctic"
            style={{ ["--i" as string]: 1 }}
          >
            Enterprise
            <br />
            AI agent platform{" "}
            <span className="relative inline-block">
              built for scale
              <span
                aria-hidden="true"
                className="draw-line absolute -bottom-1 left-0 block h-[6px] w-full rounded-full bg-forsythia"
                style={{ animationDelay: "320ms" }}
              />
            </span>
          </h1>
          <p
            className="hero-rise mt-8 max-w-md text-base leading-relaxed text-arctic/65"
            style={{ ["--i" as string]: 3 }}
          >
            Deploy custom AI agents, automate complex workflows, and manage enterprise orchestration
            in one platform.
          </p>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ ["--i" as string]: 4 }}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 rounded-md bg-arctic px-5 py-3 font-mono text-[13px] uppercase tracking-widest text-noir transition-transform duration-200 hover:-translate-y-[1px]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-sm bg-noir text-arctic">
                <Icon name="cube" size={12} />
              </span>
              Build a Workflow
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-widest text-arctic/70 transition-colors duration-200 hover:text-arctic"
            >
              See the architecture
              <Icon name="arrow-trending-up" size={16} />
            </a>
          </div>
        </div>

        {/* Right column — pricing-tier preview card */}
        <div className="hero-rise relative" style={{ ["--i" as string]: 2 }} aria-hidden="true">
          {/* Orbiting ring backdrop */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 -z-10 h-72 w-72 spin-slow opacity-50"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0 70%, rgba(255,200,1,0.35) 80%, transparent 100%)",
              filter: "blur(28px)",
              borderRadius: "50%",
            }}
          />
          <div
            onPointerMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const r = el.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width;
              const py = (e.clientY - r.top) / r.height;
              el.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
              el.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
              el.style.setProperty("--mx", `${px * 100}%`);
              el.style.setProperty("--my", `${py * 100}%`);
            }}
            onPointerLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.setProperty("--rx", "0deg");
              el.style.setProperty("--ry", "0deg");
            }}
            className="tilt-3d spotlight float-slow relative ml-auto w-full max-w-md rounded-2xl border border-arctic/10 bg-noir/70 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-arctic/50">
              <span>// agent.runtime</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-forsythia pulse-ring" />
                live
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-3 font-display">
              <span className="text-5xl font-medium text-arctic">99.99%</span>
              <span className="font-mono text-xs text-arctic/55">SLA</span>
            </div>
            <p className="mt-2 text-sm text-arctic/55">Token throughput last 30d</p>
            <div className="mt-6 flex h-28 items-end gap-1.5">
              {[42, 78, 56, 88, 72, 95, 64, 86, 58, 92, 76, 68].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 origin-bottom rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5 ? "var(--color-forsythia)" : "rgba(241,246,244,0.18)",
                    animation: `hero-rise 700ms cubic-bezier(0.22, 0.61, 0.36, 1) both`,
                    animationDelay: `${600 + i * 55}ms`,
                  }}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-arctic/10 pt-4">
              {[
                ["Plans", "3"],
                ["Currencies", "3"],
                ["Discount", "20%"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-arctic/45">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-lg text-arctic">{v}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Floating sticker */}
          <div className="float-fast absolute -bottom-4 -left-4 hidden rounded-md border border-arctic/10 bg-noir px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-arctic/70 md:block">
            // bootloader · 420ms
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-arctic/50 transition-colors duration-200 hover:text-arctic md:flex"
      >
        <span>scroll</span>
        <span className="float-fast inline-block" style={{ transform: "rotate(180deg)" }}>
          <Icon name="chevron-up-solid" size={16} />
        </span>
      </a>
    </section>
  );
}
