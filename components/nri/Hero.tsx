"use client";

import Image from "next/image";

import heroBg from "@/assets/nri/heroBgImg.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Center Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="max-w-[900px] text-center">
          {/* Heading */}
          <h1
            className="
              font-heading
              text-white
              text-[24px]
              md:text-[48px]
              leading-[32px]
              md:leading-[50px]
              tracking-[-1.44px]
              capitalize
            "
          >
            Investing From Abroad
          </h1>
        </div>
      </div>

      {/* Bottom Left Text */}
      <div
        className="
          absolute
          bottom-6
          left-5
          z-10
          max-w-[320px]
          md:bottom-10
          md:left-10
          lg:max-w-[420px]
        "
      >
        <p
          className="
            text-white/80
            text-[13px]
            leading-[20px]
            md:text-[18px]
            md:leading-[20px]
            tracking-[-2%]
          "
        >
          -Photo by  Ekansh Goel
        </p>
      </div>
    </section>
  );
};

export default Hero;