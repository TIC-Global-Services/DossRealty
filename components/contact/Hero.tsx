"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";

import bgImage from "@/assets/contact/heroBg.webp";

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

      {/* Top nav contrast gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[50vh] bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

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
            leading-[50px] tracking-wide
            lg:tracking-[-1.44px]
            text-[24px]
            lg:text-[48px]
          "
        >
          Let's Connect
        </h2>
      </div>
    </section>
  );
}