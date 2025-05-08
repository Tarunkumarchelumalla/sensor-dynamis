import GetStartedSection from "@/components/get-started-section/page";
import HeroSection from "@/components/hero-section/page";
import MidContent from "@/components/mid-content/page";
import Pricing from "@/components/pricing/page";
import ProductSection from "@/components/products-section/page";
import Testimonials from "@/components/Testimonials-new/testimonial";

import VideoSection from "@/components/video-content-section/page";
import WhyItMattersSection from "@/components/why-it-matters-section/page";

export default function Home() {

  return (<>
    <HeroSection/>
    <ProductSection/>
    <GetStartedSection/>
    <MidContent/>
    <Testimonials/>
    <Pricing/>
    <VideoSection/>
    <WhyItMattersSection/>
    </>
  );
}
