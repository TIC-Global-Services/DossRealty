"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import heroBg from "@/assets/home/hero/hero-bg.png";
import houseImg from "@/assets/home/hero/house_img.png";
import cloudImg from "@/assets/home/hero/cloudImg.png";
import cloudMain from "@/assets/home/hero/cloudImgmain.png";

import ContainerLayout from "@/layout/ContainerLayout";
import DossOutline from "./DossOutline";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const dossRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  const topLeftCloudRef = useRef<HTMLDivElement>(null);
  const topRightCloudRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(dossRef.current, {
        opacity: 0,
        scale: 0.85,
      });

      // Hero text fades & goes behind house
      tl.to(heroTextRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 80,
        duration: 2,
        ease: "power2.out",
      });

      // House cinematic move
      tl.to(
        houseRef.current,
        {
          scale: 1.05,
          y: -90,
          duration: 2,
          ease: "power2.out",
        },
        "-=1.5"
      );

      // Clouds move slightly
      tl.to(
        topLeftCloudRef.current,
        {
          x: -120,
          opacity: 0.5,
          duration: 2,
        },
        "-=1.5"
      );

      tl.to(
        topRightCloudRef.current,
        {
          x: 120,
          opacity: 0.5,
          duration: 2,
        },
        "<"
      );

      // DOSS reveal
      tl.to(dossRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
      });

      // Hold
      tl.to({}, { duration: 1 });

      // Fog cinematic cover
      tl.to(fogRef.current, {
        scaleY: 3,
        yPercent: -45,
        duration: 2.5,
        ease: "power2.inOut",
        transformOrigin: "bottom center",
      });

      // Hide DOSS
      tl.to(
        dossRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=1.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-[#F4F4F4]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Top Left Cloud */}
      <div
        ref={topLeftCloudRef}
        className="absolute top-[20%] left-0 z-10 w-[260px] md:w-[320px] lg:w-[380px]"
      >
        <Image
          src={cloudImg}
          alt=""
          className="w-full object-contain"
        />
      </div>

      {/* Top Right Cloud */}
      <div
        ref={topRightCloudRef}
        className="absolute top-[18%] right-0 z-10 w-[260px] md:w-[320px] lg:w-[380px]"
      >
        <Image
          src={cloudImg}
          alt=""
          className="w-full object-contain"
        />
      </div>

      {/* Hero Content */}
      <ContainerLayout
        disablePaddingY
        className="relative z-[20] flex h-screen flex-col items-center pt-[130px] text-center"
      >
        <div
          ref={heroTextRef}
          className="will-change-transform"
        >
          <h1
            className="
              font-heading
              uppercase
              text-[#111]
              text-[44px]
              md:text-[72px]
              lg:text-[92px]
              leading-[95%]
              tracking-[-0.03em]
            "
            style={{ fontWeight: 200 }}
          >
            Discover Your Next Move
          </h1>

          <p className="mt-4 text-[14px] md:text-[16px] text-[#111]">
            Expert Support. Real Insights.
            Clear Direction For What Comes Next.
          </p>

          <Link
            href="/projects"
            className="
              mt-8
              inline-flex
              rounded-full
              border
              border-white/60
              bg-white/20
              backdrop-blur-md
              px-8
              py-3
              text-[14px]
              text-[#111]
              transition
              hover:bg-white/40
            "
          >
            Explore Properties
          </Link>
        </div>
      </ContainerLayout>

      {/* DOSS Reveal */}
      <div
        ref={dossRef}
        className="absolute inset-0 z-[35] flex items-center justify-center pointer-events-none"
      >
        <DossOutline />
      </div>

      {/* House */}
      <div
        ref={houseRef}
        className="
          absolute
          left-1/2
          bottom-[100px]
          lg:bottom-[120px]
          z-[40]
          -translate-x-1/2
          w-[420px]
          md:w-[540px]
          lg:w-[700px]
        "
      >
        <Image
          src={houseImg}
          alt="House"
          priority
          className="w-full object-contain"
        />
      </div>

      {/* Bottom Fog */}
      <div
        ref={fogRef}
        className="absolute bottom-0 left-0 z-[50] w-full"
      >
        <Image
          src={cloudMain}
          alt=""
          className="w-full min-h-[280px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;