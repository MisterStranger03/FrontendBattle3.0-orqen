import { lazy, Suspense, useEffect, useState } from "react";

// Lazy + client-only mount: avoids SSR (WebGL has no DOM on the server)
// and keeps the three.js bundle out of the initial critical path.
const Hero3D = lazy(() => import("./Hero3DScene"));

export function Hero3DMount() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <Hero3D />
    </Suspense>
  );
}
