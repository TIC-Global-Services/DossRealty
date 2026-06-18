"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";

import bgImage from "@/assets/contact/heroBg.png";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover object-[10%] md:object-bottom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        ref={contentRef}
        className="
          relative z-10
          flex h-full flex-col
          items-center justify-center
          text-center -translate-y-[20%]
          px-6 md:px-10
          md:-translate-y-[25%]
        "
      >
        <h2
          className="
            text-white
            font-heading
            leading-[50px]
            tracking-[-1.44px]
            text-[24px]
            md:text-[48px]
          "
        >
          Let's Connect
        </h2>

        <p
          className="max-w-[215px]
            md:mt-6
            md:max-w-[700px]
            text-white/90
            tracking-normal
            capitalize
            text-[13px] leading-[16px]
            md:text-[18px]
            md:leading-[20px]
          "
        >
          Have a question or project in mind?
          Our team is here to help every step of the way.
        </p>
      </div>
    </section>
  );
}