"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import missionOutlineImg from "@/assets/about/missionOutline.png";
import missionColorImg from "@/assets/about/missionImg.png";

gsap.registerPlugin(ScrollTrigger);

const Vission = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Desktop pin
  const pinWrapRef = useRef<HTMLDivElement>(null);

  // Separate refs for animation
  const mobileColorImageRef =
    useRef<HTMLDivElement>(null);

  const desktopColorImageRef =
    useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT REVEAL
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      tl.from(textRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      // HEADING WORD STAGGER
      const words =
        headingRef.current?.querySelectorAll(
          ".word"
        );

      if (words?.length) {
        gsap.from(words, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        });
      }

      // MOBILE IMAGE REVEAL
      gsap.fromTo(
        mobileColorImageRef.current,
        {
          clipPath:
            "inset(100% 0% 0% 0%)",
        },
        {
          clipPath:
            "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );

      // DESKTOP IMAGE REVEAL
      gsap.fromTo(
        desktopColorImageRef.current,
        {
          clipPath:
            "inset(100% 0% 0% 0%)",
        },
        {
          clipPath:
            "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1.2,
          },
        }
      );

      // DESKTOP PIN ONLY
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          ScrollTrigger.create({
            trigger: pinWrapRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: true,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* TOP CONTENT */}
      <div
        ref={textRef}
        className="mx-auto max-w-[900px] px-5 py-10 md:py-16 text-center"
      >
        <p
          className="
            leading-[21px]
            mb-4
            text-[13px]
            font-semibold
            md:text-[16px]
            uppercase
            tracking-[1.6px]
            text-[#111111]
          "
        >
          Vision
        </p>

        <h2
          ref={headingRef}
          className="
            font-heading
            text-[30px]
            leading-[36px]
            tracking-normal
            md:text-[60px]
            md:leading-[1.1]
            md:tracking-[-2.3px]
            text-[#111111]
          "
        >
          <span className="inline-block overflow-hidden">
            <span className="word inline-block">
              Creating
            </span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="word inline-block">
              timeless
            </span>
          </span>{" "}
          <span className="hidden md:inline-block overflow-hidden">
            <span className="word inline-block">
              value
            </span>
          </span>

          <br />

          <span className="inline-block overflow-hidden">
            <span className="hidden word md:inline-block">
              through
            </span>

            <span className="word inline-block md:hidden">
              value through
            </span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="word inline-block">
              Artistic
            </span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="word inline-block">
              Engineering.
            </span>
          </span>
        </h2>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden relative h-[40vh] overflow-hidden">
        <div
          className="
            sticky
            top-0
            h-[40vh]
            flex
            items-center
            justify-center
            bg-white
            overflow-hidden
          "
        >
          <div className="relative h-[34vh] min-h-[180px] w-full">
            {/* Outline */}
            <Image
              src={missionOutlineImg}
              alt="Mission Sketch"
              fill
              priority
              className="object-contain"
            />

            {/* Color Reveal */}
            <div
              ref={mobileColorImageRef}
              className="absolute inset-0"
            >
              <Image
                src={missionColorImg}
                alt="Mission Color"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block md:h-[200vh]">
        <div
          ref={pinWrapRef}
          className="relative h-screen overflow-hidden"
        >
          {/* Outline */}
          <Image
            src={missionOutlineImg}
            alt="Mission Sketch"
            fill
            priority
            className="object-cover"
          />

          {/* Color Reveal */}
          <div
            ref={desktopColorImageRef}
            className="absolute inset-0"
          >
            <Image
              src={missionColorImg}
              alt="Mission Color"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;