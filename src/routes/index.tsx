import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { CaseStudy } from "@/components/landing/CaseStudy";
import { ProductIntro } from "@/components/landing/ProductIntro";
import { BentoFeatures } from "@/components/landing/BentoFeatures";
import { StatsDashboard } from "@/components/landing/StatsDashboard";
import { Integrations } from "@/components/landing/Integrations";
import { PricingMatrix } from "@/components/landing/PricingMatrix";
import { Faq } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";

const TITLE = "Orqen — Enterprise AI orchestration platform";
const DESCRIPTION =
  "Orqen is an enterprise AI orchestration platform for building, observing, and scaling autonomous workflows with secure agent deployment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI agent platform, enterprise automation, workflow orchestration, autonomous agents, agent observability, secure deployment",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { name: "theme-color", content: "#114C5A" },
      { name: "author", content: "Orqen" },
      { name: "application-name", content: "Orqen" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Orqen" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <CaseStudy />
        <ProductIntro />
        <BentoFeatures />
        <StatsDashboard />
        <Integrations />
        <PricingMatrix />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
