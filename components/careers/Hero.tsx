"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroBg from "@/assets/careers/herobgImg.png";

const Hero = () => {
  const contentRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        ".hero-reveal",
        {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="
          object-cover
          object-[20%_20%]
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-black/35
        "
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
        "
      >
        <div
          className="
            max-w-[900px]
            text-center
          "
        >
          {/* Heading */}
          <h1
            className="
              hero-reveal
              capitalize
              font-heading
              text-white
              text-[24px]
              md:text-[48px]
              leading-[50px]
              md:tracking-[-1.44px]
            "
          >
            Build With Us
          </h1>

          {/* Paragraph */}
          <p
            className="
              hero-reveal
              mx-auto
              mt-4
              max-w-[780px]
              text-[13px]
              leading-[20px]
              text-white/90
              md:text-[18px]
            "
          >
            Join a team driven by
            creativity, innovation,
            and meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;