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
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const colorImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        colorImageRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1.2,
          },
        }
      );

      ScrollTrigger.create({
        trigger: pinWrapRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative"
>
  {/* TOP CONTENT - Separate */}
  <div className="mx-auto max-w-[900px] px-5 py-10 md:py-16 text-center">
    <p
      className="
        mb-4
        text-[14px]
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
      className="
        font-heading
        text-[34px]
        md:text-[60px]
        leading-[1.1]
        tracking-[-2.3px]
        text-[#111111]
      "
    >
      Creating timeless value
      <br />
      through Artistic Engineering.
    </h2>
  </div>

  {/* PINNED IMAGE SECTION */}
  <div className="h-[200vh]">
    <div
      ref={pinWrapRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Sketch Image */}
      <Image
        src={missionOutlineImg}
        alt="Mission Sketch"
        fill
        priority
        className="object-cover"
      />

      {/* Color Reveal */}
      <div
        ref={colorImageRef}
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