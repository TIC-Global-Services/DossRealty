import BrandValues from '@/components/home/BrandValues';
import Hero from '@/components/home/Hero'
import InfoGraphics from '@/components/home/InfoGraphics';
import LivingLocation from '@/components/home/LivingLocation';
import OurProjects from '@/components/home/OurProjects';
import TestimonialSection from '@/components/home/Testimonials';
import WhyDoss from '@/components/home/WhyDoss';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
  <Hero />

  {/* NEXT SECTION OVER HERO */}
  <div className="relative z-[100] -mt-[100vh]">
    <LivingLocation />
  </div>
  {/* <InfoGraphics /> */}
  <OurProjects />
  <TestimonialSection />
  <WhyDoss />
  <BrandValues />
</main>
  );
}
