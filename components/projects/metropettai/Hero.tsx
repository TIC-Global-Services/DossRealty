"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroImg from "@/assets/projects/metropettai/heroBg.png";

const Hero = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT CONTENT → from LEFT
      gsap.from(leftContentRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

      // RIGHT CONTENT → from RIGHT
      gsap.from(rightContentRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.3,
        delay: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Metropettai"
        fill
        priority
        className="object-cover object-bottom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-5 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-end">

          {/* LEFT CONTENT */}
          <div
            ref={leftContentRef}
            className="max-w-[600px]"
          >
            <p
              className="
                font-[600]
                text-[14px]
                text-white/80
                md:text-[22px]
                md:leading-[24px]
              "
            >
              Plotted Development
            </p>

            <h2
              className="
                font-heading
                mt-2
                text-[52px]
                font-[300]
                leading-none
                text-white
                md:text-[54px]
                md:leading-[56px]
              "
            >
              Metropettai
            </h2>

            <button
              className="
                mt-6
                rounded-full
                border
                border-white/20
                bg-[rgba(0,37,106,0.2)]
                px-8
                py-3
                text-[15px]
                text-white
                backdrop-blur-md
                transition
                duration-300
                hover:bg-[rgba(0,37,106,0.3)]
              "
            >
              Download Brochure
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightContentRef}
            className="
              hidden
              items-end
              gap-6
              pb-5
              lg:flex
            "
          >
            {/* Vertical Line */}
            <div
              className="
                h-[120px]
                w-[2px]
                bg-white
              "
            />

            <div className="max-w-[420px]">
              <p
                className="
                  w-[42ch]
                  text-[13px]
                  font-light
                  leading-[28px]
                  text-white/90
                  md:text-[18px]
                "
              >
                A modern architectural residence
                crafted with clean geometry,
                open living spaces, and timeless
                material aesthetics designed for
                elevated contemporary living.
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#C7A85E]
                  md:text-[16px]
                "
              >
                <span>Luxury Living</span>

                <span className="h-[4px] w-[4px] rounded-full bg-[#D2B48C]" />

                <span>Chennai, TN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;