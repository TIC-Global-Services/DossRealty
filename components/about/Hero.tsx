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
      <div
        className="
        relative
        z-10
        flex
        min-h-screen
        items-center
        pt-[100px]
        md:pt-[120px]
      "
      >
        <div
          className="
          flex
          w-full
          items-center
          px-6
          md:px-14
          lg:px-20
        "
        >
          <div className="max-w-[780px]">

            <h1 className="text-white text-[30px] leading-[77px] md:text-[60px] uppercase tracking-normal  font-heading font-[300]">
              Elevating Modern
              <br />
              Living with Purpose
            </h1>

            <p className="mt-6 max-w-[650px] text-[16px] md:text-[18px] leading-[21px] tracking-normal text-white/90">
              DOSS Realty is driven by a vision to shape enduring legacies through transformative real estate. 
              Built on over three decades of experience, we bring together integrity, strategic vision, and 
              disciplined execution to deliver developments of lasting significance. Guided by a commitment to 
              craftsmanship, distinctive design, and uncompromising quality, we create communities that enrich lives, 
              preserve wealth, and stand as enduring expressions of our pursuit of excellence.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;