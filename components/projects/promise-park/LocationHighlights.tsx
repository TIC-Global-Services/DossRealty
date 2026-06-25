"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import townsideImg from "@/assets/projects/promisePark/galleryImg4.png";
import readyDesignImg from "@/assets/projects/promisePark/galleryImg1.png";
import growthCorridorImg from "@/assets/projects/promisePark/galleryImg2.png";

const highlights = [
  {
    title: "TOWNSIDE LIVING",
    description:
      "Close to Kanchipuram’s schools, colleges, hospitals, temples, and everyday conveniences.",
    image: townsideImg,
  },
  {
    title: "READY TO DESIGN",
    description:
      "Clear approvals, clean documentation, completed infrastructure, and bank loan support make ownership feel simple from day one.",
    image: readyDesignImg,
  },
  {
    title: "GROWTH CORRIDOR",
    description:
      "Connected to Kanchipuram’s next growth story, led by Parandur Airport and regional access.",
    image: growthCorridorImg,
  },
];

const LocationHighlights =
  () => {
     const [activeIndex, setActiveIndex] = useState<number | null>(0);
      const [imageIndex, setImageIndex] = useState(0);

    const sectionRef =
      useRef<HTMLDivElement>(
        null
      );

    const headerRef =
      useRef<HTMLDivElement>(
        null
      );

    const accordionRef =
      useRef<HTMLDivElement>(
        null
      );

    const imageRef =
      useRef<HTMLDivElement>(
        null
      );

    const toggleAccordion = (index: number) => {
      setImageIndex(index);

      setActiveIndex((prev) =>
        prev === index ? null : index
      );
    };

    useLayoutEffect(() => {
      gsap.registerPlugin(
        ScrollTrigger
      );

      const ctx =
        gsap.context(
          () => {
            const tl =
              gsap.timeline(
                {
                  scrollTrigger:
                    {
                      trigger:
                        sectionRef.current,
                      start:
                        "top 75%",
                    },
                }
              );

            // HEADER
            tl.from(
              headerRef
                .current
                ?.children ||
                [],
              {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease:
                  "power3.out",
              }
            );

            // CONTENT
            tl.from(
              accordionRef
                .current
                ?.children ||
                [],
              {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease:
                  "power3.out",
              },
              "-=0.5"
            );

            // IMAGE
            tl.from(
              imageRef.current,
              {
                scale: 0.96,
                opacity: 0,
                duration: 1.2,
                ease:
                  "power3.out",
              },
              "-=0.8"
            );
          },
          sectionRef
        );

      return () =>
        ctx.revert();
    }, []);

    return (
      <section className="py-4 md:py-8">
        <div
          ref={sectionRef}
          className="
            mx-auto
            px-5
            md:px-8
            lg:px-12
          "
        >
          {/* HEADER */}
          <div
            ref={headerRef}
            className="text-center"
          >
            <h2
              className="
                font-heading
                text-[24px] leading-[38px] tracking-normal
                font-[300]
                uppercase
                text-[#111]
                md:text-[48px]
                md:leading-[60px]
                md:tracking-[-1.44px]
              "
            >
              <span className="block md:hidden">Building Spaces, <br/> Creating Trust</span>
              <span className="hidden md:block">Building Spaces, Creating Trust</span>
            </h2>

            <p
              className="
                mt-4
                text-[16px]
                text-[#8A8A8A]
                md:text-[16px]
                leading-[24px]
                tracking-[-0.48px]
              "
            >
              Location key
              highlights
            </p>
          </div>

          {/* MOBILE LAYOUT */}
          <div
            ref={accordionRef}
            className="mt-10 flex flex-col gap-4 lg:hidden"
          >
            {highlights.map(
              (
                item,
                index
              ) => {
                const isOpen =
                  activeIndex ===
                  index;

                return (
                  <div
                    key={index}
                    className="
                      overflow-hidden
                      rounded-[10px]
                      bg-[#F0F0F0]
                    "
                  >
                    {/* HEADER */}
                    <button
                      onClick={() =>
                        toggleAccordion(
                          index
                        )
                      }
                      className="w-full p-5 text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={`
                            text-[20px]
                            leading-[35px]
                            transition-all
                            duration-300
                            ${
                              isOpen
                                ? "font-medium text-[#111]"
                                : "text-[#8A8A8A]"
                            }
                          `}
                        >
                          {
                            item.title
                          }
                        </h3>

                        {/* + / - */}
                        <div
                          className="
                            flex
                            h-[32px]
                            w-[32px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                          "
                        >
                          <span className="text-[16px] font-light leading-none">
                            {isOpen
                              ? "−"
                              : "+"}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? "max-h-[600px]"
                            : "max-h-0"
                        }
                      `}
                    >
                      <div className="px-5 pb-5">
                        <p
                          className="
                            text-[13px]
                            leading-[20px]
                            tracking-[-0.48px]
                            text-[#666]
                          "
                        >
                          {
                            item.description
                          }
                        </p>

                        {/* IMAGE */}
                        <div
                          className="
                            relative
                            mt-5
                            h-[200px]
                            overflow-hidden
                            rounded-[10px]
                          "
                        >
                         <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* DESKTOP LAYOUT */}
          <div
            className="
              mt-14
              hidden
              justify-between
              gap-4
              lg:flex
            "
          >
            {/* LEFT SIDE */}
            <div
              ref={
                accordionRef
              }
              className="
                w-1/2
                rounded-[10px]
                bg-[#F0F0F0]
                p-8
                md:p-10
              "
            >
              {highlights.map(
                (
                  item,
                  index
                ) => {
                  const isOpen =
                    activeIndex ===
                    index;

                  return (
                    <div
                      key={
                        index
                      }
                      className="
                        border-b
                        border-[#E2E2E2]
                        py-8
                        last:border-none
                      "
                    >
                      <button
                        onClick={() =>
                          toggleAccordion(
                            index
                          )
                        }
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3
                              className={`
                                text-[18px]
                                transition-all
                                duration-300
                                md:text-[30px]
                                md:leading-[35px]
                                ${
                                  isOpen
                                    ? "font-medium text-[#111]"
                                    : "text-[#C9C9C9]"
                                }
                              `}
                            >
                              {
                                item.title
                              }
                            </h3>

                            {isOpen && (
                              <p
                                className="
                                  mt-5
                                  max-w-[420px]
                                  text-[15px]
                                  leading-[24px]
                                  text-[#666]
                                  md:text-[16px]
                                  md:leading-[20px]
                                  md:tracking-[-0.48px]
                                "
                              >
                                {
                                  item.description
                                }
                              </p>
                            )}
                          </div>

                          {/* + / - */}
                          <div
                            className="
                              flex
                              h-[52px]
                              w-[52px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-black
                              text-white
                              cursor-pointer
                            "
                          >
                            <span
                              className="
                                text-[28px]
                                font-light
                                leading-none
                              "
                            >
                              {isOpen
                                ? "−"
                                : "+"}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                }
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div
              ref={imageRef}
              className="
                relative
                w-1/2
                min-h-[420px]
                overflow-hidden
                rounded-[10px]
                md:min-h-[450px]
              "
            >
              <Image
                src={highlights[imageIndex].image}
                alt={highlights[imageIndex].title}
                fill
                priority
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

export default LocationHighlights;