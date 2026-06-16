"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JOB_LIST = [
  "Executive / Sr Executive - Sales (Location - Chennai)",
  "Assistant Manager - Contracts (Compliance)",
  "Quality Engineer / Assistant Manager Quality (Location Chennai)",
  "Executive / Senior Executive Contracts",
];

export default function BuiltForLiving() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const goldCardRef =
    useRef<HTMLDivElement>(null);

  const navyCardRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(goldCardRef.current, {
        y: 640,
        zIndex: 10,
      });

      gsap.set(navyCardRef.current, {
        y: 850,
        zIndex: 20,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(goldCardRef.current, {
        y: 0,
        ease: "power3.out",
        duration: 0.4,
      });

      tl.to({}, { duration: 0.15 });

      tl.to(
        navyCardRef.current,
        {
          y: 90,
          ease: "power4.out",
          duration: 0.55,
        }
      );

      tl.to(
        goldCardRef.current,
        {
          y: -10,
          scale: 0.97,
          ease: "power2.out",
          duration: 0.3,
        },
        "<"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto
        flex
        h-screen
        items-center
        bg-white
        px-8
        md:px-16
        lg:px-24
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex
          flex-1
          flex-col
        "
      >
        <h2
          className="
            mb-8
            text-[24px]
            md:text-[50px]
            md:leading-[55px]
            font-heading
            leading-[1.05]
            text-[#1E1E1E]
          "
        >
          View opening
          <br />
          positions
        </h2>

        <ul className="mb-10 space-y-2">
          {JOB_LIST.map(
            (job, i) => (
              <li
                key={i}
                className="
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  md:text-[20px]
                  md:leading-[26px]
                  text-[#00000080]
                "
              >
                <span
                  className="
                    mt-[10px]
                    h-[5px]
                    w-[5px]
                    flex-shrink-0
                    rounded-full
                    bg-gray-500
                  "
                />

                {job}
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className="
            w-fit
            rounded-full
            bg-[#00256A]
            px-10
            py-3
            text-sm
            md:text-[16px]
            font-medium
            text-white
            transition
            duration-300
            hover:scale-105
            cursor-pointer
          "
        >
          Apply now
        </button>
      </div>

      {/* RIGHT STACK */}
      <div
        className="
          relative
          h-[560px]
          w-[415px]
          flex-shrink-0
        "
      >
        {/* GOLD CARD */}
        <div
          ref={goldCardRef}
          className="
            absolute
            left-0
            top-0
            z-10
            h-[415px]
            w-[415px]
            rounded-[28px]
            bg-[#BFA55A]
            p-10
            shadow-[0_25px_60px_rgba(0,0,0,0.18)]
            will-change-transform
          "
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2
                className="
                  text-sm
                  md:text-[44px]
                  md:leading-[48px]
                  md:tracking-[-3px]
                  uppercase
                  text-white
                "
              >
                WE CREATE
                <br />
                SPACES THAT
                <br />
                INSPIRE
              </h2>
            </div>

            <p
              className="
                max-w-[300px]
                text-sm
                md:text-[20px]
                leading-relaxed
                text-white/75
              "
            >
              Designed with timeless
              architecture and
              thoughtful aesthetics.
            </p>
          </div>
        </div>

        {/* NAVY CARD */}
        <div
          ref={navyCardRef}
          className="
            absolute
            left-0
            top-0
            z-20
            h-[415px]
            w-[415px]
            rounded-[28px]
            bg-[#1A2857]
            p-10
            shadow-[0_25px_60px_rgba(0,0,0,0.18)]
            will-change-transform
          "
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2
                className="
                  text-sm
                  md:text-[44px]
                  md:leading-[48px]
                  md:tracking-[-3px]
                  uppercase
                  text-white
                "
              >
                WE CREATE
                <br />
                SPACES THAT
                <br />
                OFFER
              </h2>
            </div>

            <p
              className="
                max-w-[300px]
                text-sm
                md:text-[20px]
                leading-relaxed
                text-white/75
              "
            >
              Prime locations with
              excellent connectivity
              and everyday
              convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}