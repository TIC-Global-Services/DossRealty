"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import trust1 from "@/assets/nri/buildImg1.jpg";
import trust2 from "@/assets/nri/buildImg2.jpg";

const contentSlides = [
  {
    heading: "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
  {
    heading: "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
  {
    heading: "Building Trust Through Design",
    description:
      "Invest with confidence through a seamless and transparent real estate experience designed for NRIs. From property selection and virtual assistance to verified documentation and final registration, every step is managed with trusted guidance, ensuring secure investments and long-term value from anywhere in the world.",
  },
];

const BuildTrust = () => {
  const [activeSlide, setActiveSlide] =
    useState(0);

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
    <section className="py-16 md:py-20">
      <div className="mx-20 max-w-[1440px] px-5 md:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[30%_70%]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            <div
              key={activeSlide}
              className="animate-fade-up"
            >
              <h2
                className="
                  font-heading
                  text-[24px]
                  md:text-[48px]
                  leading-[92%]
                  tracking-[-0.05em]
                  text-[#111111]
                "
              >
                {
                  contentSlides[
                    activeSlide
                  ].heading
                }
              </h2>

              <p
                className="
                  mt-6
                  max-w-[350px]
                  text-[15px]
                  md:text-[16px]
                  leading-[140%]
                  text-[#6B6B6B]
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
            <div className="mt-10 flex gap-4">

              <button
                onClick={prevSlide}
                className="
                  flex
                  h-12
                  w-12
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
                  w-12
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
          <div className="grid gap-4 md:grid-cols-2">

            {/* IMAGE 1 */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                md:rounded-[24px]
              "
            >
              <Image
                src={trust1}
                alt="Trust Image"
                className="
                  h-[500px]
                  md:h-[650px]
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

              <div className="absolute left-0 top-0 p-7">
                <p
                  className="
                    max-w-[40ch]
                    text-[15px]
                    leading-[160%]
                    text-white
                  "
                >
                  • Verified properties with
                  transparent processes and
                  trusted end-to-end
                  assistance.
                </p>
              </div>
            </div>

            {/* IMAGE 2 */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                md:rounded-[24px]
              "
            >
              <Image
                src={trust2}
                alt="Trust Image"
                className="
                  h-[500px]
                  md:h-[650px]
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

              <div className="absolute left-0 top-0 p-8">
                <p
                  className="
                    max-w-[40ch]
                    text-[15px]
                    leading-[160%]
                    text-white
                  "
                >
                  • Seamless remote investment
                  support designed for secure
                  and hassle-free ownership.
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