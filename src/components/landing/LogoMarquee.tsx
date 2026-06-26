const LOGOS = ["AETNA", "CIGNA", "ANTHEM", "HUMANA", "KAISER", "MOLINA", "CENTENE", "OSCAR"];

export function LogoMarquee() {
  return (
    <section aria-label="Customers" className="border-y border-arctic/5 bg-noir py-10">
      <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-arctic/45">
        // trusted by neural ops teams worldwide
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span
              key={i}
              className="font-display text-3xl font-semibold tracking-tight text-arctic/40"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
