"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroBg from "@/assets/projects/heroImg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cardRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.92,
        filter: "blur(10px)",
      });

      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions:
            "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
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
              py-15
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
              <div className="lg:w-[50%]">
                <h2
                  className="
                    font-heading
                    text-[30px]
                    leading-[33px] tracking-normal
                    md:tracking-[-0.04em]
                    text-[#00256A]
                    md:text-[70px]
                    md:leading-[65px]
                    md:px-5
                    text-left
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

              {/* DESKTOP CENTER LINE ONLY */}
              <div
                className="w-[350px] h-[1px]
                  md:h-[180px]
                  md:w-[1px]
                  bg-[#E2E2E2]
                "
              />

              {/* BOTTOM / RIGHT */}
              <div className="lg:w-[50%]">
                <p
                  className="max-w-[330px]
                    text-[16px] tracking-normal
                    leading-[20px]
                    text-[#6c7072]
                    md:text-[18px]
                    md:ml-8
                    md:max-w-[420px]
                    md:px-2
                    text-left
                    md:leading-[20px]
                  "
                >
                  Each Doss Realty project
                  reflects our commitment
                  to quality, thoughtful
                  planning, and creating
                  homes that offer comfort,
                  value, and lasting
                  distinction. From elegant
                  residences to inspiring
                  developments, our
                  projects are created to
                  deliver exceptional
                  living experiences for
                  today and generations
                  ahead.
                </p>
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