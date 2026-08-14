"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroBg from "@/assets/projects/heroImg.webp";

const Hero = () => {
  const cardRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the card in on page load so it's visible when entering the page
      // (previously scroll-gated via ScrollTrigger, which kept it hidden on mobile until scroll)
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 120, scale: 0.92, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section data-theme="dark" className="relative">
      {/* HERO */}
      <div className="relative h-[90vh] min-h-[700px] overflow-visible">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Top nav contrast gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[50vh] bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        {/* Floating Card */}
        <div
          className="
            absolute
            bottom-[-100px]
            left-1/2
            z-20
            w-[92%]
            max-w-[1280px]
            -translate-x-1/2
          "
        >
          <div
            ref={cardRef}
            className="
              rounded-[10px]
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              px-6
              py-20
              md:px-10
              md:py-10
              lg:px-16
              lg:py-16
              will-change-transform
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-center
              "
            >
              {/* TOP / LEFT */}
              <div className="md:w-full">
                <h2
                  className="
                    font-heading
                    text-[30px]
                    leading-[33px] tracking-normal
                    lg:tracking-[-0.04em]
                    text-[#00256A]
                    lg:text-[70px]
                    lg:leading-[65px]
                    lg:px-5
                    text-center
                  "
                >
                <span className="hidden md:block">Spaces Built
                  <br />
                  for Modern
                  <br />
                  Living</span> 
                  <span className="md:hidden block">Spaces Built for Modern Living</span> 
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-[120px] md:h-[160px]" />
    </section>
  );
};

export default Hero;