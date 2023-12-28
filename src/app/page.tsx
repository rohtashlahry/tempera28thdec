"use client"
import Cart from "@/Components/shopping-cart/Cart";
import { HeroSection } from "../Components/HeroSection";
import PriceGrid from "@/Components/price-packages/priceGrid";
import Testimonials from "@/Components/reusable-components/testimonials";
import TempAccordion from "@/Components/reusable-components/tempAccordion";

export default function Home() {
  const heading = "Empowering Businesses with Our Startup Agency";
  const paraText = "Harness the boundless potential of Artificial Intelligence to transcend the realms of imagination and create mesmerizing masterpieces that time and space, captivating hearts and minds with beauty."
  const ButtonTitle = "See All Projects";
  const ButtonTitle2 = "Learn More";
  return (
    <>
      <HeroSection 
        heading={heading}
        paraText={paraText}
        ButtonTitle={ButtonTitle}
        ButtonTitle2={ButtonTitle2}
      />
      {/* <div style={{marginTop: 100}}>
        <Cart />
      </div> */}
      <PriceGrid />
      <Testimonials />
      <TempAccordion />
    </>
  )
}
