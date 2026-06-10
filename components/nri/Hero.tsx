"use client";

import Image from "next/image";

import heroBg from "@/assets/nri/heroImg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-[80%_30%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/20 to-black/20"/>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pt-[20vh] md:pt-[20vh] lg:pt-[20vh]">
        <div className="max-w-[900px] text-center self-start">

          {/* Heading */}
          <h1
            className="capitalize
              font-heading
              text-white
              text-[24px]
              md:text-[48px]
              leading-[50px]
              tracking-[-1.44px]
            "
          >
           Global Living, Indian Roots
          </h1>

          {/* Paragraph */}
          <p
            className="capitalize
              mx-auto
              mt-2
              text-[15px]
              md:text-[18px]
              leading-[20px]
              text-white/80
            "
          >
            Helping NRIs invest, build, and stay connected to opportunities back home with ease and confidence.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Hero;