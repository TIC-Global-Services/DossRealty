"use client";

import Image from "next/image";

import heroBg from "@/assets/nri/heroBgImg.webp";

const Hero = () => {
  return (
    <section data-theme="dark" className="relative min-h-screen overflow-hidden">
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

      {/* Top nav contrast gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[50vh] bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      {/* Center Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="max-w-[900px] text-center">
          {/* Heading */}
          <h1
            className="
              font-heading
              text-white
              text-[24px]
              lg:text-[48px]
              leading-[32px] tracking-wide
              lg:leading-[50px]
              lg:tracking-[-1.44px]
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
            lg:text-[18px]
            lg:leading-[20px]
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