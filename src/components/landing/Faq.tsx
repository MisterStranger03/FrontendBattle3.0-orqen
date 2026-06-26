import { useId, useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { Icon } from "./Icon";

const ITEMS = [
  {
    icon: "cube" as const,
    q: "What is the Orqen platform?",
    a: "Orqen is a specialised infrastructure for building and deploying custom AI agents. It provides the orchestration layer and runtime controls required to run autonomous workflows at enterprise scale.",
  },
  {
    icon: "cog" as const,
    q: "Who is this template designed for?",
    a: "Founding engineers, platform teams, and AI-native product orgs that need agent fleets running production traffic — not prototypes.",
  },
  {
    icon: "arrow-path" as const,
    q: "Does Orqen provide pre-built agents?",
    a: "Yes. A curated library of opinionated agents ships with every workspace: triage, retrieval, scheduling, finance ops, and incident response.",
  },
  {
    icon: "chart-pie" as const,
    q: "How does it differ from a standard chatbot?",
    a: "Orqen agents own state, tools, and policy. They retry, escalate, and audit themselves — chatbots only respond.",
  },
  {
    icon: "link" as const,
    q: "Can I use my own custom domain?",
    a: "Every workspace ships with a managed subdomain and supports custom domains via DNS verification.",
  },
  {
    icon: "arrow-trending-up" as const,
    q: "Is there a limit to how many agents I can build?",
    a: "Starter and Scale plans run within fair-use token pools. Enterprise plans run on dedicated clusters with custom limits.",
  },
];

export function Faq() {
  const ref = useReveal<HTMLElement>();
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-arctic py-28 text-noir md:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <div>
          <h2
            id="faq-heading"
            className="reveal font-display text-[clamp(2.4rem,6vw,4.4rem)] font-medium leading-[0.95] tracking-tight"
          >
            Common
            <br />
            inquiries.
          </h2>
          <p
            className="reveal mt-8 max-w-md text-base leading-relaxed text-noir/65"
            style={{ ["--i" as string]: 1 }}
          >
            Everything you need to know about deploying, scaling, and securing enterprise AI agents
            with Orqen. Can&apos;t find an answer?
          </p>
          <a
            href="#contact"
            className="reveal mt-8 inline-flex items-center gap-3 rounded-md bg-noir px-4 py-3 font-mono text-[12px] uppercase tracking-widest text-arctic transition-transform duration-200 hover:-translate-y-[1px]"
            style={{ ["--i" as string]: 2 }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-arctic text-noir">
              <Icon name="link-solid" size={12} />
            </span>
            Contact us
          </a>
        </div>

        <ul
          className="reveal divide-y divide-noir/10 border-y border-noir/10"
          style={{ ["--i" as string]: 1 }}
        >
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-p-${i}`;
            const btnId = `${baseId}-b-${i}`;
            return (
              <li key={it.q}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-md border border-noir/15 text-noir">
                      <Icon name={it.icon} size={16} />
                    </span>
                    <span className="font-display text-base font-medium md:text-lg">{it.q}</span>
                  </span>
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full border border-noir/15 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  data-open={isOpen}
                  className="acc-panel"
                >
                  <div className="acc-inner">
                    <p className="pb-6 pl-12 pr-2 text-[15px] leading-relaxed text-noir/70">
                      {it.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
