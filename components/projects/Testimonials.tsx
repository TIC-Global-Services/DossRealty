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
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className="
              font-heading
              text-[32px]
              md:text-[58px]
              leading-[95%]
              tracking-[-0.04em]
              text-[#00256A]
            "
          >
            Spaces Designed with Trust
            & Satisfaction
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]
              text-[15px]
              md:text-[16px]
              leading-[160%]
              text-[#666]
            "
          >
            Hear from homeowners and
            clients who experienced Doss
            Realty’s approach to thoughtful
            architecture, refined design,
            and seamless project execution.
          </p>
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
                        rounded-[24px]
                        bg-white
                        p-6
                        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
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
                        <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full">
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
                          <h3 className="text-[24px] font-medium text-[#222]">
                            {
                              item.name
                            }
                          </h3>

                          <p className="text-[15px] text-[#777]">
                            {
                              item.country
                            }
                          </p>

                          {/* STARS */}
                          <div className="mt-2 flex gap-1 text-[#D0A93E]">
                            {[
                              ...Array(
                                6
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
                          mt-6
                          text-[15px]
                          leading-[165%]
                          text-[#666]
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