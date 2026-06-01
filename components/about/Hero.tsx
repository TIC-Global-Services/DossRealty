"use client";

import Image from "next/image";

import heroBg from "@/assets/about/aboutHeroImg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-25 flex h-full items-center">
        <div className="px-6 md:px-14 lg:px-20">

          <h1 className="text-white text-[30px] leading-[100%] md:text-[60px] lg:text-[88px] font-light tracking-[-2px]">
            Elevating Modern  <br/> Living with Purpose
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] md:text-[18px] leading-[120%] text-white/80">
            Thoughtfully crafted spaces that bring together modern architecture, premium quality, and everyday functionality. 
            At Doss Realty, every development is designed with purpose — creating environments that offer comfort, elegance, and 
            long-term value for individuals, families, and communities alike. 
            Driven by trust and innovation, we create spaces that inspire better living and 
            meaningful experiences for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;