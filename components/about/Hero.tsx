"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroBg from "@/assets/about/aboutHeroImg.jpg";

const Hero = () => {
  const sectionRef =
    useRef<HTMLElement>(null);

  const contentRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
      });

      // Heading reveal
      tl.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power4.out",
      });

      // Paragraph reveal
      tl.from(
        ".hero-para",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          pt-[100px]
          md:pt-[120px]
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            px-6
            md:px-14
            lg:px-20
          "
        >
          <div
            ref={contentRef}
            className="max-w-[780px]"
          >
            {/* TITLE */}
            <h1
              className="
                text-white
                text-[36px]
                leading-[40px]
                md:leading-[1.1]
                md:text-[60px]
                uppercase
                font-heading
                font-[300]
              "
            >
              <div className="hidden md:block overflow-hidden">
                <span className="hero-title-line block uppercase">
                  About Doss
                </span>
              </div>


              <div className="md:hidden block uppercase">
                <span>About Doss</span>
              </div>
            </h1>

            {/* PARAGRAPH */}
            <p
              className="
                hero-para
                mt-6 w-[40ch] md:w-full
                md:max-w-[650px]
                text-[13px]
                leading-[16px]
                md:text-[18px]
                md:leading-[21px]
                text-white/90
              "
            >
              DOSS Realty is driven by a vision to shape enduring legacies through transformative real estate. Built on over three decades of
              experience, we bring together integrity, strategic vision, and disciplined execution to deliver developments of lasting
              significance. Guided by a commitment to craftsmanship, distinctive design, and uncompromising quality, we create
              communities that enrich lives, preserve wealth, and stand as enduring expressions of our pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;