import { useCallback } from "react";

/**
 * Returns pointer handlers that drive --rx / --ry / --mx / --my on a
 * .tilt-3d .spotlight element. Strength = max degrees of tilt.
 */
export function useTiltHandlers(strength = 10) {
  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${(px - 0.5) * strength}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * strength}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    },
    [strength],
  );
  const onPointerLeave = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);
  return { onPointerMove, onPointerLeave };
}
