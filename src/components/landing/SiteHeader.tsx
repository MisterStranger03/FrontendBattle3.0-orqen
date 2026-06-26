import { useEffect, useState } from "react";
import { BoltMark, Icon } from "./Icon";

const LINKS = [
  { label: "AI Strategy", href: "#features" },
  { label: "Custom Agents", href: "#integrations" },
  { label: "Process Automation", href: "#stats" },
  { label: "Data Intelligence", href: "#pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-arctic/10 bg-noir/70 backdrop-blur-md supports-[backdrop-filter]:bg-noir/55">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          aria-label="Orqen home"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-arctic"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-arctic text-noir">
            <BoltMark size={18} />
          </span>
          <span>orqen</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center gap-8 font-display text-sm text-arctic/80 md:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline whitespace-nowrap transition-colors duration-200 hover:text-arctic"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Search the docs"
            onClick={() => setOpen((o) => !o)}
            className="group relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-arctic/15 bg-arctic/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-arctic/60 transition-colors duration-200 hover:border-arctic/30 hover:text-arctic"
          >
            <Icon name="search" size={13} />
            <span className="hidden lg:inline">search</span>
            <kbd className="hidden rounded bg-arctic/10 px-1.5 py-0.5 text-[10px] text-arctic/55 lg:inline">
              ⌘K
            </kbd>
          </button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md text-arctic transition-colors duration-200 hover:bg-arctic/10 md:hidden"
        >
          {open ? (
            <Icon name="x-mark" size={22} />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay menu (used on mobile + as quick command on desktop) */}
      <div
        id="mobile-menu"
        data-open={open}
        aria-hidden={!open}
        className={`acc-panel mx-6 overflow-hidden rounded-2xl border border-arctic/10 bg-noir/95 backdrop-blur md:mx-10 ${open ? "" : "pointer-events-none"}`}
        style={{ marginTop: open ? "-4px" : 0 }}
      >
        <div className="acc-inner">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 p-4 font-display text-base text-arctic"
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-arctic/10"
              >
                {l.label}
                <Icon name="chevron-right" size={16} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
