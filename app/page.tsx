import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import BuyOpportunities from "@/components/BuyOpportunities";
import ProfitProjection from "@/components/ProfitProjection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OpportunitiesSection from "@/components/OpportunitiesSection"

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="OpportunitiesSection">
        <OpportunitiesSection />
      </section>

      <section id="buy-opportunities">
        <BuyOpportunities />
      </section>

      <section id="opportunities">
        <InvestmentOpportunities />
      </section>

      <section id="profit-projection">
        <ProfitProjection />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>
    </main>
  );
}
