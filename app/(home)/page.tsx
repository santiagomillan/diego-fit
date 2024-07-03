import Image from "next/image";
import { Carousel } from "../../components/organisms/Carousel/Carousel";
import { HeroBanner } from "../../components/organisms/HeroBanner/HeroBanner";
import { PricingSection } from "../../components/organisms/PricingSection/PricingSection";
import { BasicInfo } from "../../components/organisms/BasicInfo/BasicInfo";

export default function Home() {
  return (
    <div className="mt-16">
      <HeroBanner />
      {/* <Carousel /> */}
      <div className="max-w-screen-xl items-center justify-between mx-auto">
        <h1>Home</h1>
        <PricingSection />
        <BasicInfo />
      </div>
    </div>
  );
}
