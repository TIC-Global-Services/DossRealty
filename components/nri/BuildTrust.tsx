"use client";

import {useState,useLayoutEffect,useRef,} from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import trust1 from "@/assets/nri/buildImg1.jpg";
import trust2 from "@/assets/nri/buildImg2.jpg";

gsap.registerPlugin(
  ScrollTrigger
);

const contentSlides = [
  {
    heading:
      "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
  {
    heading:
      "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
  {
    heading:
      "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
];

const BuildTrust = () => {
  const [activeSlide, setActiveSlide] =
    useState(0);

  const sectionRef =
    useRef<HTMLDivElement>(null);

  const headingRef =
    useRef<HTMLHeadingElement>(null);

  const descriptionRef =
    useRef<HTMLParagraphElement>(null);

  const image1Ref =
    useRef<HTMLDivElement>(null);

  const image2Ref =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* TEXT REVEAL */
      gsap.from(
        [
          headingRef.current,
          descriptionRef.current,
        ],
        {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /* IMAGE REVEAL */
      gsap.from(
        [
          image1Ref.current,
          image2Ref.current,
        ],
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          stagger: 0.15,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev + 1) %
        contentSlides.length
    );
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        prev === 0
          ? contentSlides.length - 1
          : prev - 1
    );
  };

  return (
    <section className="py-14 md:py-16">
      <div
        ref={sectionRef}
        className="
          mx-auto
          px-5
          md:px-8
          lg:px-18
        "
      >
        <div className="grid gap-12 lg:grid-cols-[30%_70%]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <div key={activeSlide}>
              <h2
                ref={headingRef}
                className="
                  font-heading
                  text-[24px]
                  leading-[50px]
                  tracking-[-1.44px]
                  text-[#111111]
                  md:text-[48px]
                "
              >
                {
                  contentSlides[
                    activeSlide
                  ].heading
                }
              </h2>

              <p
                ref={descriptionRef}
                className="
                  mt-6
                  w-[38ch]
                  text-[15px]
                  leading-[24px]
                  tracking-[-0.48px]
                  text-[#6B6B6B]
                  md:text-[16px]
                "
              >
                {
                  contentSlides[
                    activeSlide
                  ].description
                }
              </p>
            </div>

            {/* NAVIGATION */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={prevSlide}
                className="
                  flex
                  h-12
                  w-12 cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00256A]
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                <ChevronLeft
                  size={18}
                />
              </button>

              <button
                onClick={nextSlide}
                className="
                  flex
                  h-12
                  w-12 cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00256A]
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                <ChevronRight
                  size={18}
                />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid gap-0 md:grid-cols-2">

            {/* IMAGE 1 */}
            <div
              ref={image1Ref}
              className="group
                relative
                h-[600px]
                w-[370px]
                overflow-hidden
                rounded-[10px]
              "
            >
              <Image
                src={trust1}
                alt="Trust Image"
                className="
                  h-full
                  w-full
                  scale-[1]
                  object-cover
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.15]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

              <div className="absolute left-0 top-0 p-7">
                <p
                  className="
                    max-w-[40ch]
                    text-[16px]
                    font-[500]
                    leading-[20px]
                    tracking-[-0.48px]
                    text-white
                  "
                >
                  • Verified properties with transparent processes <br /> <span className="pl-3">and trusted end-to-end assistance.</span>
                </p>
              </div>
            </div>

            {/* IMAGE 2 */}
            <div
              ref={image2Ref}
              className="group
                relative
                h-[600px]
                w-[370px]
                overflow-hidden
                rounded-[10px]
              "
            >
              <Image
                src={trust2}
                alt="Trust Image"
                className="
                h-full
                w-full
                scale-[1]
                object-cover
                transition-transform
                duration-300
                ease-out
                group-hover:scale-[1.15]
              "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

              <div className="absolute left-0 top-0 p-6">
                <p
                  className="
                    max-w-[50ch]
                    text-[16px]
                    font-[500]
                    leading-[20px]
                    tracking-[-0.48px]
                    text-white
                  "
                >
                  • Seamless remote investment support
                  designed <br />  <span className="pl-3">for secure and hassle-free ownership.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTrust;