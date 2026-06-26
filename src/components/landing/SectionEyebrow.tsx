import { HatchMark } from "./Icon";

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]">
      <HatchMark />
      <span>{children}</span>
    </div>
  );
}
