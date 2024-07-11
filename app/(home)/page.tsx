// import { Carousel } from "../../components/organisms/Carousel/Carousel";
import { HeroBanner } from "../../components/organisms/HeroBanner/HeroBanner";
import { PricingSection } from "../../components/organisms/PricingSection/PricingSection";
import { BasicInfo } from "../../components/organisms/BasicInfo/BasicInfo";
import FAQ from "../../components/organisms/FAQ/FAQ";
import IgIfrane from "../../components/organisms/IgIframe/IgIframe";
import Benefits from "../../components/organisms/Benefits/Benefits";
import HoverCardsGrid from "../../components/organisms/HoverCardsGrid/HoverCardsGrid";
import ContactSection from "../../components/organisms/ContactSection/ContactSection";

export default function Home() {
  return (
    <div className="mt-16">
      <section id="inicio">
        <HeroBanner />
      </section>

      {/* <Carousel /> */}
      <div className="max-w-screen-xl items-center justify-between mx-auto">
        <section id="beneficios">
          <Benefits />
        </section>
        <section id="sobre-mi">
          <BasicInfo />
        </section>
        <section id="entrenamientos">
          <HoverCardsGrid />
        </section>
        <section id="sigueme">
          <IgIfrane />
        </section>

        <PricingSection />

        <section id="contactame">
          <ContactSection />
        </section>

        <FAQ />
      </div>
    </div>
  );
}
