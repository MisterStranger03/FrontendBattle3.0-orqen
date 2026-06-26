// Multi-dimensional pricing matrix.
// All UI numbers are derived from this — never hardcoded in components.

export const PLANS = ["Starter", "Scale", "Enterprise"] as const;
export type Plan = (typeof PLANS)[number];

export const CURRENCIES = ["USD", "EUR", "INR"] as const;
export type Currency = (typeof CURRENCIES)[number];

export const CYCLES = ["monthly", "annual"] as const;
export type Cycle = (typeof CYCLES)[number];

/** Base monthly rate in USD per plan. */
export const BASE_USD: Record<Plan, number> = {
  Starter: 29,
  Scale: 99,
  Enterprise: 299,
};

/** Regional tariff multiplier (also doubles as USD→X currency rate). */
export const TARIFF: Record<Currency, number> = {
  USD: 1,
  EUR: 0.93,
  INR: 83.2,
};

export const SYMBOL: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  INR: "₹",
};

export const ANNUAL_DISCOUNT = 0.2;

/** Returns a fully formatted price string for a given matrix cell. */
export function computePrice(plan: Plan, currency: Currency, cycle: Cycle): string {
  const monthly = BASE_USD[plan] * TARIFF[currency];
  const value = cycle === "annual" ? monthly * (1 - ANNUAL_DISCOUNT) : monthly;
  const decimals = currency === "INR" ? 0 : 2;
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
  return `${SYMBOL[currency]}${formatted}`;
}

export const PLAN_META: Record<
  Plan,
  { tagline: string; features: string[]; cta: string; highlight?: boolean }
> = {
  Starter: {
    tagline: "For solo operators wiring their first agent.",
    features: [
      "1 active workspace",
      "5,000 monthly tokens",
      "Slack + GitHub connectors",
      "Community support",
    ],
    cta: "Deploy Starter",
  },
  Scale: {
    tagline: "For product teams shipping autonomous workflows.",
    features: [
      "Unlimited workspaces",
      "1.2M monthly tokens",
      "All standard connectors",
      "SLA-backed uptime",
      "Priority engineering review",
    ],
    cta: "Deploy Scale",
    highlight: true,
  },
  Enterprise: {
    tagline: "For regulated orgs running fleet-scale agent grids.",
    features: [
      "Dedicated neural cluster",
      "Custom token pool",
      "SOC2 + HIPAA posture",
      "On-prem deploy targets",
      "Named solutions engineer",
    ],
    cta: "Talk to sales",
  },
};
