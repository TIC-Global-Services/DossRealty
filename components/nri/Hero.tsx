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
        className="object-cover object-[20%_20%]"
      />


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="max-w-[900px] text-center">

          {/* Heading */}
          <h1
            className="
              font-heading
              text-white
              text-[24px]
              md:text-[48px]
              leading-[95%]
              tracking-[-0.04em]
            "
          >
           Global Living, Indian Roots
          </h1>

          {/* Paragraph */}
          <p
            className="
              mx-auto
              mt-6
              max-w-[780px]
              text-[15px]
              md:text-[18px]
              leading-[170%]
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