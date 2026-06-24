"use client";

import { useState } from "react";
import Image, {
  StaticImageData,
} from "next/image";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import profile1 from "@/assets/projects/profilePic.jpg";
import profile2 from "@/assets/projects/profilePic.jpg";
import profile3 from "@/assets/projects/profilePic.jpg";

type Testimonial = {
  name: string;
  country: string;
  image: StaticImageData;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anna Joy",
    country: "United States",
    image: profile1,
    review:
      "The team delivered a seamless experience from planning to execution. Every space felt thoughtfully designed and highly functional.",
  },
  {
    name: "Anna Joy",
    country: "United States",
    image: profile2,
    review:
      "The team delivered a seamless experience from planning to execution. Every space felt thoughtfully designed and highly functional.",
  },
  {
    name: "Anna Joy",
    country: "United States",
    image: profile3,
    review:
      "The team delivered a seamless experience from planning to execution. Every space felt thoughtfully designed and highly functional.",
  },
  {
    name: "Anna Joy",
    country: "United States",
    image: profile1,
    review:
      "Exceptional planning and execution. The team transformed ideas into spaces that feel modern, premium, and welcoming.",
  },
  {
    name: "Anna Joy",
    country: "United States",
    image: profile1,
    review:
      "Exceptional planning and execution. The team transformed ideas into spaces that feel modern, premium, and welcoming.",
  },
  {
    name: "Anna Joy",
    country: "United States",
    image: profile1,
    review:
      "Exceptional planning and execution. The team transformed ideas into spaces that feel modern, premium, and welcoming.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  return (
    <section data-theme="light" className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mx-auto text-center">
          <h2
            className="
              font-heading
              text-[30px] leading-[36px]
              md:text-[48px]
              md:leading-[54px]
              tracking-[-1.44px]
              text-[#00256A]
            "
          >
            Spaces Designed with Trust & Satisfaction
          </h2>
        </div>

        {/* SLIDER */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={true}
            speed={800}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSlideChange={(
              swiper
            ) =>
              setActiveIndex(
                swiper.realIndex
              )
            }
            className="testimonial-swiper"
          >
            {testimonials.map(
              (
                item,
                index
              ) => (
                <SwiperSlide
                  key={index}
                  className="
                    !w-[90%]
                    md:!w-[48%]
                    lg:!w-[31.5%]
                  "
                >
                  {({
                    isActive,
                  }) => (
                    <div
                      className={`
                        rounded-[10px]
                        bg-white
                        p-6
                        shadow-[0_4px_20px_rgba(0,0,0,0.10)]
                        transition-all
                        duration-500
                        h-full
                        ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-[0.94] opacity-70"
                        }
                      `}
                    >
                      {/* TOP */}
                      <div className="flex items-center gap-4">

                        {/* IMAGE */}
                        <div className="relative w-[50px] h-[50px] md:h-[100px] md:w-[100px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={
                              item.image
                            }
                            alt={
                              item.name
                            }
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* INFO */}
                        <div>
                          <h3 className="text-[16px] md:text-[22px] leading-[24px] font-small tracking-[-2%] text-[#222]">
                            {
                              item.name
                            }
                          </h3>

                          <p className="text-[13px] md:text-[14px] leading-[16px] tracking-[-3%] text-[#000000]">
                            {
                              item.country
                            }
                          </p>

                          {/* STARS */}
                          <div className="mt-1 md:mt-2.5 flex gap-1 text-[#D0A93E]">
                            {[
                              ...Array(
                                5
                              ),
                            ].map(
                              (
                                _,
                                i
                              ) => (
                                <span
                                  key={
                                    i
                                  }
                                >
                                  ★
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* REVIEW */}
                      <p
                        className="
                          mt-6 text-[13px]
                          md:text-[14px]
                          leading-[16px]
                          text-[#606060]
                        "
                      >
                        {`"${item.review}"`}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* PROGRESS LINE */}
          <div className="mt-12 flex justify-center">
            <div className="relative h-[4px] w-[140px] overflow-hidden rounded-full bg-[#D8D8D8]">
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  rounded-full
                  bg-[#00256A]
                  transition-all
                  duration-500
                "
                style={{
                  width: `${
                    100 /
                    testimonials.length
                  }%`,
                  transform: `translateX(${
                    activeIndex *
                    100
                  }%)`,
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;