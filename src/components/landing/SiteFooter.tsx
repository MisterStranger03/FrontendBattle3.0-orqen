import { BoltMark, Icon, HatchMark } from "./Icon";

const COLUMNS = [
  {
    title: "Product",
    items: ["Composer", "Telemetry", "Connectors", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    items: ["Docs", "API reference", "Status", "Security", "Brand"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact", "Legal"],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-noir text-arctic" aria-label="Site footer">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-center gap-8 border-b border-arctic/10 py-16 md:grid-cols-[1fr_auto]">
          <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
            Deploy your
            <br />
            first agent.
          </h2>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 rounded-md bg-forsythia px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-noir transition-transform duration-200 hover:-translate-y-[1px]"
          >
            <HatchMark size={14} />
            Get Started
            <Icon name="arrow-trending-up" size={14} />
          </a>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-arctic text-noir">
                <BoltMark size={18} />
              </span>
              orqen
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-arctic/60">
              Specialised infrastructure for custom AI agents. Built for teams who ship.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-arctic/45">
              // crafted in 2026 · neural-grade
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-arctic/45">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-arctic/75">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="transition-colors duration-200 hover:text-arctic">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-arctic/10 py-6 font-mono text-[11px] uppercase tracking-widest text-arctic/45 sm:flex sm:flex-wrap sm:justify-between">
          <span className="min-w-0 truncate">© 2026 Orqen Labs</span>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-arctic/15 px-3 py-1.5 text-arctic/70 transition-colors duration-200 hover:border-arctic/40 hover:text-arctic"
          >
            <span className="hidden sm:inline">top</span>
            <Icon name="chevron-up" size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
