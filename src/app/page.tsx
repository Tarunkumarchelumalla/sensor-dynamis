import GetStartedSection from "@/components/landing-page/get-started-section/page";
import HeroSection from "@/components/landing-page/hero-section/page";
import MidContent from "@/components/landing-page/mid-content/page";
import Pricing from "@/components/landing-page/pricing/page";
import ProductSection from "@/components/landing-page/products-section/page";
import Testimonials from "@/components/landing-page/Testimonials-new/testimonial";
import VideoSection from "@/components/landing-page/video-content-section/page";
import WhyItMattersSection from "@/components/landing-page/why-it-matters-section/page";


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
