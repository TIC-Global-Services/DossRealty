"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutImg from "@/assets/projects/metropettai/heroBg.png";

const About = () => {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const topInfoRef =
    useRef<HTMLDivElement>(null);

  const contentRef =
    useRef<HTMLDivElement>(null);

  const videoRef =
    useRef<HTMLDivElement>(null);

  const videoElementRef =
    useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const handlePlay = () => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = false;
      videoElementRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
      } else {
        handlePlay();
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (videoElementRef.current) {
      videoElementRef.current.currentTime = 0;
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger
    );

    const ctx = gsap.context(() => {
      const tl =
        gsap.timeline({
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: "top 75%",
          },
        });

      // TOP INFO
      tl.from(
        topInfoRef.current
          ?.children || [],
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // CONTENT
      tl.from(
        contentRef.current
          ?.children || [],
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // VIDEO
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
      className="py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-40">
        {/* TOP INFO */}
        <div
          ref={topInfoRef}
          className="
            flex
            flex-col
            items-start
            gap-4
            text-[15px]
            text-[#1F1F1F]

            md:flex-row
            md:flex-wrap
            md:items-center
            md:justify-center
            md:gap-y-4
            md:text-center
            lg:gap-x-8
          "
        >
          <div className="flex items-center gap-2">
            <div className=" h-5 w-[1px] bg-black md:hidden" />
            <span className="font-small text-sm lg:text-[18px] lg:leading-[20px]">
              Area :
            </span>

            <span className="font-small text-sm text-[#C7A85E] lg:text-[18px] lg:leading-[20px]">
              10 Acres
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-2">
            <div className=" h-5 w-[1px] bg-black md:block" />
            <span className="font-small text-sm lg:text-[18px] lg:leading-[20px]">
              Year of build:
            </span>

            <span className="font-small text-sm text-[#C59D5F] lg:text-[18px] lg:leading-[20px]">
              2026
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-2">
            <div className=" h-5 w-[1px] bg-black md:block" />
            <span className="font-small text-sm lg:text-[18px] lg:leading-[20px]">
              Property status:
            </span>

            <span className="font-small text-sm text-[#C59D5F] lg:text-[18px] lg:leading-[20px]">
              Active
            </span>
          </div>

          <div className="hidden h-5 w-[1px] bg-black md:block" />

          <div className="flex items-center gap-2">
            <div className=" h-5 w-[1px] bg-black md:block" />
            <span className="font-small text-sm lg:text-[18px] lg:leading-[20px]">
              Size :
            </span>

            <span className="font-small text-sm text-[#C59D5F] lg:text-[18px] lg:leading-[20px]">
              270 Units
            </span>
          </div>
        </div>

        {/* LINE */}
        <div className="hidden md:block mt-8 border-b border-[#D9D9D9]" />

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="mt-8 lg:mt-12"
        >
          <h2
            className="
              font-heading
              text-[24px]
              font-[300]
              tracking-[0px]
              text-[#111]
              lg:text-[46px]
              leading-[50px]
            "
          >
            About the project
          </h2>

          <p
            className="
              lg:mt-6
              text-[16px]
              leading-[20px]
              text-[#717171]

              lg:max-w-[800px]
              lg:text-[18px]
              lg:leading-[20px]
              lg:tracking-[0.48px]
            "
          >
            Metropettai is a modern
            community defined by
            connection. Located at the
            intersection of the upcoming
            Metro corridor, the
            Chennai–Bengaluru Highway,
            and the Outer Ring Road, it
            oﬀers direct access to the
            people, places, and
            opportunities that shape
            everyday life. Surrounded by
            leading employment hubs,
            educational institutions,
            and evolving infrastructure,
            Metropettai is designed for
            those who value access,
            opportunity, and long-term
            relevance.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div
          ref={videoRef}
          className="mt-6 lg:mt-10"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[10px]
            "
          >
            {/* VIDEO */}
            <div className="relative h-[460px] md:h-[450px] w-full">
              <video
                ref={videoElementRef}
                src="/Metropettai-showreel1.mp4"
                poster={aboutImg.src}
                playsInline
                onClick={handleVideoClick}
                onPause={handlePause}
                onEnded={handleEnded}
                className="
                  w-full
                  h-full
                  object-cover
                  cursor-pointer
                "
              />
            </div>

            {/* OVERLAY */}
            {!isPlaying && (
              <div
                onClick={handlePlay}
                className="absolute inset-0 bg-black/10 cursor-pointer z-10"
              />
            )}

            {/* PLAY BUTTON */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  gap-3
                  text-white
                  md:gap-4
                "
              >
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    transition
                    duration-300
                    group-hover:scale-110

                    lg:h-[60px]
                    lg:w-[60px]
                  "
                >
                  <Play
                    size={22}
                    fill="white"
                    className="lg:size-[22px] size-[18px]"
                  />
                </div>

                <span
                  className="
                    whitespace-nowrap
                    text-[18px]
                    font-[300]

                    lg:text-[38px]
                  "
                >
                  Watch Showreel
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;