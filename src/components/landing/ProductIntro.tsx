import { useReveal } from "@/lib/useReveal";
import { SectionEyebrow } from "./SectionEyebrow";

export function ProductIntro() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} aria-labelledby="product-heading" className="bg-noir py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-[auto_1fr] md:px-10">
        <div>
          <SectionEyebrow>OUR PRODUCT</SectionEyebrow>
        </div>
        <div>
          <h2
            id="product-heading"
            className="reveal max-w-3xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-tight text-arctic"
          >
            Build AI workflows at scale.
          </h2>
          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-arctic/60"
            style={{ ["--i" as string]: 1 }}
          >
            Design, deploy, and manage sophisticated AI workflows through an intuitive visual
            interface. Orchestrate agents, automate handoffs, and keep enterprise logic easy to
            understand.
          </p>
        </div>
      </div>
    </section>
  );
}
