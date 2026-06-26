import { useEffect, useState } from "react";

export type LayoutMode = "bento" | "accordion";

/**
 * Returns the current layout mode and a shared activeIndex that survives
 * the bento <-> accordion flip. The active index is preserved exactly as-is
 * when the breakpoint crosses, so a hovered desktop bento node becomes the
 * open mobile accordion panel.
 */
export function useResponsiveMode(breakpoint = 900) {
  const query = `(min-width: ${breakpoint}px)`;
  // Always start as "bento" so SSR and first client render agree.
  const [mode, setMode] = useState<LayoutMode>("bento");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const apply = (matches: boolean) => setMode(matches ? "bento" : "accordion");
    apply(mql.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return { mode, activeIndex, setActiveIndex };
}
