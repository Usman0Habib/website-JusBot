import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Security from "@/components/sections/security";
import Partners from "@/components/sections/partners";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Help from "@/components/sections/help";
import Team from "@/components/sections/team";
import Disclaimer from "@/components/sections/disclaimer";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Security />
      <Partners />
      <Features />
      <Pricing />
      <Help />
      <Team />
      <Disclaimer />
      <Footer />
    </div>
  );
}
