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

  const mobileGoldRef = useRef<HTMLDivElement>(null);
  const mobileNavyRef = useRef<HTMLDivElement>(null);

  const mobileCardsRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const isMobile = window.innerWidth < 768;

    const gold = isMobile
      ? mobileGoldRef.current
      : goldCardRef.current;

    const navy = isMobile
      ? mobileNavyRef.current
      : navyCardRef.current;

    if (!gold || !navy) return;

    gsap.set(gold, {
      y: isMobile ? 180 : 640,
      zIndex: 10,
    });

    gsap.set(navy, {
      y: isMobile ? 260 : 850,
      zIndex: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: isMobile
          ? mobileCardsRef.current
          : sectionRef.current,

        start: isMobile
          ? "top 80%"
          : "top top",

        end: isMobile
          ? "+=300"
          : "+=1800",

        scrub: 1.5,

        // Desktop only
        pin: !isMobile,

        anticipatePin: 1,
      },
    });

    tl.to(gold, {
      y: 0,
      ease: "power3.out",
      duration: 0.4,
    });

    tl.to({}, { duration: 0.15 });

    tl.to(navy, {
      y: isMobile ? 70 : 90,
      ease: "power4.out",
      duration: 0.55,
    });

    tl.to(
      gold,
      {
        y: -10,
        scale: 0.97,
        ease: "power2.out",
        duration: 0.3,
      },
      "<"
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className=" mx-auto
      bg-white
      px-5
      py-10
      md:flex
      md:h-screen
      md:items-center
      md:px-24
        "
    >

      {/* MOBILE */}
      <div className="md:hidden">

        {/* PINNED CARDS */}
        <div
          ref={mobileCardsRef}
          className="relative mx-auto h-[320px] w-full max-w-[320px] mb-34"
        >
          <div
            ref={mobileGoldRef}
            className="
            absolute
            left-0
            top-0
            z-10
            h-[280px]
            w-full
            rounded-[24px]
            bg-[#BFA55A]
            p-6
          "
          >
            <div className="flex h-full flex-col justify-between">
              <h2 className="font-heading text-[30px] leading-[30px] text-white">
                WE CREATE
                <br />
                SPACES THAT
                <br />
                INSPIRE
              </h2>

              <p className="text-[15px] text-white/80">
                Designed with timeless architecture and
                thoughtful aesthetics.
              </p>
            </div>
          </div>

          <div
            ref={mobileNavyRef}
            className="
            absolute
            left-0
            top-[70px]
            z-20
            h-[280px]
            w-full
            rounded-[24px]
            bg-[#1A2857]
            p-6
          "
          >
            <div className="flex h-full flex-col justify-between">
              <h2 className="font-heading text-[30px] leading-[30px] text-white">
                WE CREATE
                <br />
                SPACES THAT
                <br />
                OFFER
              </h2>

              <p className="text-[15px] text-white/80">
                Prime locations with excellent connectivity
                and everyday convenience.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 text-center">
          <h2
            className="
            font-heading
            text-[24px]
            leading-[30px]
            tracking-[0px]
            text-[#3A3A3A]
          "
          >
            View opening
            <br />
            positions
          </h2>

          <ul
            className="
              mx-auto
              mt-8
              max-w-[270px]
              space-y-2
              text-left
            "
          >
            {JOB_LIST.map((job, i) => (
              <li
                key={i}
                className="
                flex
                items-start
                gap-2
                text-[16px]
                leading-[26px]
                text-[#8C8C8C]
              "
              >
                <span
                  className="
                  mt-[8px]
                  h-[6px]
                  w-[6px]
                  flex-shrink-0
                  rounded-full
                  bg-[#8C8C8C]
                "
                />

                {job}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="font-small
            mt-8
            rounded-full
            bg-[#00256A]
            px-8
            py-2.5
            text-[13px] leading-[20px] tracking-[-0.48px]
            font-medium
            text-white
          "
          >
            Apply now
          </button>
        </div>

      </div>


      <div className="hidden md:flex md:w-full md:items-center">
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
      </div>
    </section>
  );
}