import BrandValues from '@/components/home/BrandValues';
import Hero from '@/components/home/Hero'
import InfoGraphics from '@/components/home/InfoGraphics';
import LivingLocation from '@/components/home/LivingLocation';
import OurProjects from '@/components/home/OurProjects';
import TestimonialSection from '@/components/home/Testimonials';
import WhyDoss from '@/components/home/WhyDoss';

export default function Home() {
  return (
    <main>
      <Hero />
      <LivingLocation />
      {/* <InfoGraphics /> */}
      <OurProjects />
      <TestimonialSection />
      <WhyDoss />
      <BrandValues/>
    </main>
  );
}
