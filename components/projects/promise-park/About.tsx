"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutImg from "@/assets/projects/metropettai/heroBg.png";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topInfoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // TOP INFO REVEAL
      tl.from(topInfoRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // HEADING + TEXT REVEAL
      tl.from(
        contentRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // VIDEO IMAGE REVEAL
      tl.from(
        videoRef.current,
        {
          scale: 0.94,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
    >
      <div className="mx-auto px-5 md:px-8 lg:px-20">

        {/* TOP INFO */}
        <div
          ref={topInfoRef}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-y-4
            text-center
            text-[15px]
            text-[#1F1F1F]
            md:gap-x-10
          "
        >
          <div className="flex items-center gap-1">
            <span className="font-small text-sm md:text-[18px] md:leading-[20px]">
              Area :
            </span>
            <span className="font-small text-sm text-[#C7A85E] md:text-[18px] md:leading-[20px]">
              10 Acres
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-1">
            <span className="font-small text-sm md:text-[18px] md:leading-[20px]">
              Year of build:
            </span>
            <span className="font-small text-sm text-[#C59D5F] md:text-[18px] md:leading-[20px]">
              2026
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-1">
            <span className="font-small text-sm md:text-[18px] md:leading-[20px]">
              Property status:
            </span>
            <span className="font-small text-sm text-[#C59D5F] md:text-[18px] md:leading-[20px]">
              Active
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-1">
            <span className="font-small text-sm md:text-[18px] md:leading-[20px]">
              Size :
            </span>
            <span className="font-small text-sm text-[#C59D5F] md:text-[18px] md:leading-[20px]">
              270 Units
            </span>
          </div>
        </div>

        {/* LINE */}
        <div className="mt-8 border-b border-[#D9D9D9]" />

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="mt-12"
        >
          <h2
            className="
              font-heading
              text-[42px]
              font-[300]
              tracking-[0px]
              text-[#111]
              md:text-[46px]
              md:leading-[50px]
            "
          >
            About the project
          </h2>

          <p
            className="
              mt-6
              max-w-[1100px]
              w-[102ch]
              text-[15px]
              leading-[24px]
              text-[#717171]
              md:text-[18px]
              md:leading-[30px]
              md:tracking-[0.48px]
            "
          >
            Metropettai is a modern community defined by connection.
            Located at the intersection of the upcoming Metro corridor,
            the Chennai–Bengaluru Highway, and the Outer Ring Road,
            it oﬀers direct access to the people, places, and opportunities
            that shape everyday life. Surrounded by leading employment hubs,
            educational institutions, and evolving infrastructure,
            Metropettai is designed for those who value access,
            opportunity, and long-term relevance.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div
          ref={videoRef}
          className="mt-10"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[10px]
            "
          >
            {/* IMAGE / VIDEO THUMBNAIL */}
            <div className="relative h-[320px] md:h-[450px]">
              <Image
                src={aboutImg}
                alt="About Project"
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />

            {/* PLAY BUTTON */}
            <button
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                gap-4
                text-white
              "
            >
              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  transition
                  duration-300
                  group-hover:scale-110
                "
              >
                <Play
                  size={22}
                  fill="white"
                />
              </div>

              <span
                className="
                  text-[24px]
                  font-[300]
                  md:text-[38px]
                "
              >
                Watch Showreel
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;