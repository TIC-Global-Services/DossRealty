"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import leftLocation from "@/assets/home/luxury_img.jpg";
import rightLocation from "@/assets/home/stay_img.jpg";
import fogImg from "@/assets/home/hero/cloudImgmain.png";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    title: "Luxury",
    location: "Chennai, India",
    image: leftLocation,
  },
  {
    title: "Stay",
    location: "Chennai, India",
    image: rightLocation,
  },
];

const LivingLocation = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const tagRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [tagRef.current, titleRef.current, descRef.current],
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        }
      );

      // Reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(tagRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-white py-0"
    >
      {/* TOP FOG */}
      <div className="pointer-events-none absolute -top-20 left-0 z-[40] w-full">
        <Image
          src={fogImg}
          alt="Fog"
          width={2000}
          height={500}
          priority
          className="
            h-auto
            w-full -translate-y-[40%]
            md:-translate-y-[80%]
            object-cover
            opacity-100
          "
        />
      </div>

      {/* TOP CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-10 md:px-8 md:pb-12 md:pt-14 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT SIDE */}
          <div className="max-w-[650px]">
            <p
              ref={tagRef}
              className="mb-4 ml-2 font-body text-[14px] uppercase tracking-normal text-[#00256A]"
            >
              Luxury Living Begins Here
            </p>

            <h2
              ref={titleRef}
              className="font-heading text-[30px] leading-[120%] tracking-[-0.04em] text-[#111111] md:text-[48px]"
            >
              Crafting a Harmonious Blend of Luxury & Design
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[450px] lg:pt-4">
            <p
              ref={descRef}
              className="font-body text-[15px] leading-[165%] text-[#666666] md:w-[50ch] md:text-[16px]"
            >
              Doss Realty is a Chennai-based real estate brand focused on
              creating thoughtfully designed residential and commercial
              spaces that combine modern architecture, functionality, and
              timeless elegance. With a commitment to quality craftsmanship
              and customer trust, Doss Realty develops premium properties
              tailored to contemporary lifestyles and evolving urban needs.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {locations.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
          >
            <div className="relative h-[50vh] overflow-hidden md:h-screen">

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 z-[1] bg-black/10" />

              {/* CENTER TITLE */}
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-20">
                <h2 className="font-heading text-center text-4xl text-white md:text-5xl">
                  {item.title}
                </h2>
              </div>

              {/* LOCATION */}
              <div
                className="
                  absolute
                  bottom-6
                  right-5
                  z-10
                  flex
                  items-center
                  gap-2
                  lg:bottom-10
                  lg:left-1/2
                  lg:right-auto
                  lg:-translate-x-1/2
                "
              >
                <MapPin className="h-5 w-5 text-white" />

                <p className="font-body whitespace-nowrap text-sm text-white md:text-base">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LivingLocation;