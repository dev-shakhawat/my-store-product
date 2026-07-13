import DiscoverDetails from "@/components/sections/discover-details";
import FAQ from "@/components/sections/FAQ";
import FeaturesGrid from "@/components/sections/feature-grid";
import FeelEnjoy from "@/components/sections/feel-enjoy";
import MarqueeSection from "@/components/sections/marque";
import ProductBanner from "@/components/sections/product-banner";
import ProductCombine from "@/components/sections/product-combine";
import ProductDetails from "@/components/sections/product-details";
import SlideShow from "@/components/sections/slide-show";
import ComfortableChairSection from "@/components/sections/supper-confort";
import Testimonial from "@/components/sections/testimonial";



import DiscoverDetails from "@/components/sections/discover-details";
import FAQ from "@/components/sections/FAQ";
import FeaturesGrid from "@/components/sections/feature-grid";
import FeelEnjoy from "@/components/sections/feel-enjoy";
import MarqueeSection from "@/components/sections/marque";
import ProductBanner from "@/components/sections/product-banner";
import ProductCombine from "@/components/sections/product-combine";
import ProductDetails from "@/components/sections/product-details";
import SlideShow from "@/components/sections/slide-show";
import ComfortableChairSection from "@/components/sections/supper-confort";
import Testimonial from "@/components/sections/testimonial";



export default function Home() {
  return (
    <main className=" relative z-1! pt-20 bg-white">

      {/* banner */}
      <ProductBanner />

      {/* product details */}
      <ProductDetails/>

      {/* slide show */}
      <SlideShow/>

      {/* product combine */}
      <ProductCombine/>

      {/* marque */}
      <MarqueeSection/>

      {/* feel enjoy */}
      <FeelEnjoy/>

      {/* supper confort / discover details */}
      <ComfortableChairSection/>   


      {/* testimonial */}
      <Testimonial/>

      {/* Discover details */}
      <DiscoverDetails/>

      {/* FAQ  */}
      <FAQ/>
      
      {/* featue grid */}
      <FeaturesGrid/> 
      
    </main>
  );
}
