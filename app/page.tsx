import BrandValues from "@/components/home/BrandValues";
import Hero from "@/components/home/Hero";
import InfoGraphics from "@/components/home/InfoGraphics";
import LivingLocation from "@/components/home/LivingLocation";
import OurProjects from "@/components/home/OurProjects";
import TestimonialSection from "@/components/home/Testimonials";
import WhyDoss from "@/components/home/WhyDoss";
import EnquiryBtn from "@/components/reusable/EnquiryBtn";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
    <EnquiryBtn />
    <Hero />

  <div className="relative z-[100] -mt-[100vh]">
    <LivingLocation />
    <InfoGraphics />
    <OurProjects />
    <TestimonialSection />
    <WhyDoss />
    <BrandValues />
  </div>
</main>
  );
}