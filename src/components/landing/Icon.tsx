// Inline icon component. Paths are lifted verbatim from the provided SVG pack.
// No external icon library is imported anywhere on the landing page.

import type { SVGProps } from "react";

type IconName =
  | "chevron-down"
  | "chevron-up"
  | "chevron-up-solid"
  | "chevron-left"
  | "chevron-right"
  | "x-mark"
  | "search"
  | "cog"
  | "arrow-path"
  | "arrow-trending-up"
  | "chart-pie"
  | "link"
  | "link-solid"
  | "cube";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

const STROKE: Partial<Record<IconName, string>> = {
  "chevron-down": "m19.5 8.25l-7.5 7.5l-7.5-7.5",
  "chevron-up": "m4.5 15.75l7.5-7.5l7.5 7.5",
  "chevron-left": "M15.75 19.5L8.25 12l7.5-7.5",
  "chevron-right": "m8.25 4.5l7.5 7.5l-7.5 7.5",
  "x-mark": "M6 18L18 6M6 6l12 12",
  "arrow-path":
    "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
  "arrow-trending-up":
    "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  "chart-pie": "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z",
  search: "m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  link: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
};

const FILL: Partial<Record<IconName, string>> = {
  "chevron-up-solid":
    "M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06z",
  "link-solid":
    "M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304M12.97 8.471a.75.75 0 0 1 .647-1.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037Z",
  cube: "M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z",
};

const COG_GROUP = (
  <g
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
  >
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
  </g>
);

export function Icon({ name, size = 20, ...rest }: IconProps) {
  const isCube = name === "cube";
  const viewBox = isCube ? "0 0 16 16" : "0 0 24 24";

  if (name === "cog") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        aria-hidden="true"
        {...rest}
      >
        {COG_GROUP}
      </svg>
    );
  }

  const strokePath = STROKE[name];
  const fillPath = FILL[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      aria-hidden="true"
      {...rest}
    >
      {strokePath && (
        <path
          d={strokePath}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      )}
      {fillPath && <path d={fillPath} fill="currentColor" />}
    </svg>
  );
}

/** Brand bolt mark — derived from the provided 'link-solid' lightning silhouette. */
export function BoltMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M13.5 2L4 13.5h6L9 22l10.5-11.5h-6z" />
    </svg>
  );
}

/** Hatched ▨ marker used as a section eyebrow icon. */
export function HatchMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <defs>
        <pattern
          id="hatch-pat"
          patternUnits="userSpaceOnUse"
          width="4"
          height="4"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="18" height="18" fill="url(#hatch-pat)" />
    </svg>
  );
}
