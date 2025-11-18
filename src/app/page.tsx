import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <CTA />
    </div>
  );
}
