"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import Image from "next/image";
import gsap from "gsap";

import heroImg from "@/assets/projects/metropettai/heroBg.png";

const Hero = () => {
  const leftContentRef =
    useRef<HTMLDivElement>(null);

  const rightContentRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT CONTENT
      gsap.from(
        leftContentRef.current,
        {
          x: -120,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
        }
      );

      // RIGHT CONTENT
      gsap.from(
        rightContentRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 1.3,
          delay: 0.2,
          ease: "power3.out",
        }
      );
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
        className="object-cover object-[25%] md:object-cover md:object-bottom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          px-5
          py-24
          md:px-10
          lg:px-16
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
            translate-x-10 translate-y-10 md:translate-x-0 md:translate-y-0
            justify-between
            md:flex-row
            md:items-end
          "
        >
          {/* LEFT CONTENT */}
          <div
            ref={leftContentRef}
            className="max-w-[600px]"
          >
            <p
              className="
                font-[600]
                text-[13px]
                text-white/80
                md:text-[22px]
                leading-[24px]
              "
            >
              Plotted Development
            </p>

            <h2
              className="
                mt-2
                font-heading
                text-[24px] leading-[30px]
                font-[300]
                text-white
                md:text-[54px]
                md:leading-[56px]
              "
            >
              Promise Park
            </h2>

            <button
              className="mt-4
                md:mt-6
                rounded-full
                border
                border-white/20
                bg-[rgba(0,37,106,0.2)]
                md:px-8 px-4 py-2
                md:py-3 text-[13px]
                md:text-[16px]
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
              flex
              items-end
              gap-4
              pb-3
              lg:gap-6
              lg:pb-5
            "
          >
            {/* Vertical Line */}
            <div
              className="
                h-[100px]
                w-[2px]
                bg-white
                lg:h-[160px]
              "
            />

            <div className="md:max-w-[420px]">
              <p
                className="w-[320px]
                  text-[13px]
                  font-light
                  leading-[16px]
                  text-white/90
                  md:text-[18px]
                  lg:w-[42ch]
                  lg:leading-[24px]
                "
              >
                A modern architectural
                residence crafted with
                clean geometry, open
                living spaces, and
                timeless material
                aesthetics designed for
                elevated contemporary
                living.
              </p>

              <div
                className="mt-3
                  md:mt-5
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#C7A85E]
                  md:text-[16px]
                  lg:mt-6
                "
              >
                <span>
                  Luxury Living
                </span>

                <span className="h-[4px] w-[4px] rounded-full bg-[#D2B48C]" />

                <span>
                  Chennai, TN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;