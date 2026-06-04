"use client";

import Image from "next/image";

import bgImage from "@/assets/contact/heroBgImg.png";
import houseImage from "@/assets/contact/layerImg.png";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40">

        <h1 className="max-w-[1200px] text-white font-heading leading-[100%]
          text-[24px]
          md:text-[48px]"
        >
         Let's Connect
        </h1>

        <p className="mt-8 max-w-[800px] text-white/90
          text-[16px]
          md:text-[18px]
          leading-[140%]"
        >
          Have a question or project in mind? Our team is here to help every step of the way.
        </p>
      </div>

      {/* House Image Layer */}
      <div className="absolute bottom-0 left-0 z-20 w-full flex justify-center">
        <Image
          src={houseImage}
          alt="House"
          priority
          className="
            w-[90%]
            md:w-full
            h-auto
            object-cover
          "
        />
      </div>

    </section>
  );
}