"use client";

import {
  useState,
  useLayoutEffect,
  useRef,
} from "react";
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

const mobileImages = [
  {
    image: trust1,
    text: "• Verified properties with transparent processes and trusted end-to-end assistance.",
  },
  {
    image: trust2,
    text: "• Seamless remote investment support designed for secure and hassle-free ownership.",
  },
];

const BuildTrust = () => {
  const [activeSlide, setActiveSlide] =
    useState(0);

  const [mobileImageIndex, setMobileImageIndex] =
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

    return () =>
      ctx.revert();
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

  const nextImage = () => {
    setMobileImageIndex(
      (prev) =>
        (prev + 1) %
        mobileImages.length
    );
  };

  const prevImage = () => {
    setMobileImageIndex(
      (prev) =>
        prev === 0
          ? mobileImages.length - 1
          : prev - 1
    );
  };

  return (
    <section className="py-14 md:py-16">
      <div
        ref={sectionRef}
        className="
          mx-auto
          max-w-[1440px]
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
                  leading-[36px]
                  md:tracking-[-1.44px]
                  text-[#111111]
                  md:text-[48px]
                  md:leading-[50px]
                "
              >
               <span className="md:hidden"> Building Trust Through
                <br className="md:hidden" />
                Design</span>

                <span className="hidden md:inline">
                  {
                    contentSlides[
                      activeSlide
                    ].heading
                  }
                </span>
              </h2>

              <p
                ref={descriptionRef}
                className="
                  mt-6
                  text-[16px]
                  leading-[24px]
                  tracking-[-0.48px]
                  text-[#6B6B6B]
                  md:w-[38ch]
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

            {/* MOBILE IMAGE */}
            <div className="mt-8 lg:hidden">
              <div
                className="
                relative
                h-[520px]
                overflow-hidden
                rounded-[10px]
              "
              >
                <Image
                  src={
                    mobileImages[
                      mobileImageIndex
                    ].image
                  }
                  alt="Trust Image"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

                <div className="absolute left-0 top-0 p-5">
                  <p className="text-[16px] leading-[20px] tracking-[-0.48px] text-white">
                    {mobileImageIndex ===
                      0 ? (
                      <>
                        • Verified properties
                        with transparent processes
                        <br />
                        <span className="pl-3">
                          and trusted
                          end-to-end
                          assistance.
                        </span>
                      </>
                    ) : (
                      <>
                        • Seamless remote
                        investment support designed
                        <br />
                        <span className="pl-3">
                          for secure
                          and hassle-free
                          ownership.
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* BUTTONS BELOW */}
              <div className="mt-8 flex justify-center gap-4 md:mt-5">
                <button
                  onClick={prevImage}
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00256A]
                  text-white
                "
                >
                  <ChevronLeft
                    size={18}
                  />
                </button>

                <button
                  onClick={nextImage}
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00256A]
                  text-white
                "
                >
                  <ChevronRight
                    size={18}
                  />
                </button>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <div className="mt-6 hidden gap-4 lg:flex">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00256A] text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00256A] text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* DESKTOP IMAGES */}
          <div className="hidden gap-0 md:grid md:grid-cols-2">
            <div
              ref={image1Ref}
              className="group relative h-[600px] w-[370px] overflow-hidden rounded-[10px]"
            >
              <Image
                src={trust1}
                alt="Trust Image"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.15]"
              />
            </div>

            <div
              ref={image2Ref}
              className="group relative h-[600px] w-[370px] overflow-hidden rounded-[10px]"
            >
              <Image
                src={trust2}
                alt="Trust Image"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.15]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTrust;