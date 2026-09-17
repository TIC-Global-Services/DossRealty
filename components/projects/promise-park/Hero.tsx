"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroImg from "@/assets/projects/promisePark/galleryImg1.webp";
import BrochureModal from "@/components/reusable/BrochureModal";

const Hero = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftContentRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

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
    <section data-theme="dark" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Promise Park"
        fill
        priority
        className="object-cover object-[25%] md:object-bottom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top nav contrast gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[50vh] bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          px-[6%]
          py-24
          md:px-[8%]
          lg:px-[8%]
          lg:pb-20
          lg:pt-0
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            flex-col
            justify-between
            md:flex-row
            md:items-end
          "
        >
          {/* LEFT CONTENT */}
          <div
            ref={leftContentRef}
            className="w-full max-w-[600px] lg:max-w-[460px]"
          >
            <p
              className="
                text-[13px]
                text-white/80
                lg:text-[22px]
                lg:leading-[24px]
              "
            >
              Plotted Development
            </p>

            <h2
              className="
                mt-1
                lg:mt-2
                font-heading
                text-[18px]
                leading-[30px]
                font-[300]
                text-white
                lg:text-[42px]
                lg:leading-[56px]
              "
            >
              Promise Park
            </h2>

            <BrochureModal
              project="promise-park"
              brochure="/brochure/promisePark-brochure.pdf"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightContentRef}
            className="
              mt-8
              flex
              w-full
              items-end
              gap-4
              pb-3
              md:mt-0
              md:w-auto
              lg:gap-6
              lg:pb-5
            "
          >
            {/* Vertical Line */}
            <div
              className="
                h-[100px]
                w-[2px]
                shrink-0
                bg-white
                lg:h-[160px]
              "
            />

            <div className="w-full md:max-w-[420px] lg:max-w-[560px]">
              <p
                className="
                  w-full
                  text-[13px]
                  font-light
                  leading-[16px]
                  text-white/90
                  lg:w-[42ch]
                  lg:text-[18px]
                  lg:leading-[24px]
                "
              >
                A modern architectural residence crafted with
                clean geometry, open living spaces, and
                timeless material aesthetics designed for
                elevated contemporary living.
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#e4a30c]
                  lg:mt-6
                  lg:text-[16px]
                "
              >
                <span>Luxury Living</span>

                <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-[#C7A85E]" />

                <span>Kanchipuram, TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;