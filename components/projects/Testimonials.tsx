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

import testimonial1 from "@/assets/home/testimonials/testimonial1.jpg";
import testimonial3 from "@/assets/home/testimonials/testimonial3.jpg";
import testimonial4 from "@/assets/home/testimonials/testimonial4.jpg";
import priyaImg from "@/assets/home/testimonials/priyaImg.webp";
import prabhuImg from "@/assets/home/testimonials/prabhuImg2.webp";

type Testimonial = {
  name: string;
  country: string;
  image: StaticImageData;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya H",
    country: "Chennai, India",
    image: priyaImg,
    review:
      "Been staying in DOSS community for 16 years now, they have provided me with a wonderful safe neighbourhood for my family.",
  },
  {
    name: "Dhilip Reddy",
    country: "Chennai, India",
    image: testimonial1,
    review:
      "Expert investment advice, our property doubled in value in two years. The salespeople made it feel more like consultation, helping us choose the perfect unit.",
  },
  {
    name: "Chinnarasu",
    country: "Chennai, India",
    image: testimonial3,
    review:
      "Thank you so much to the DOSS staff, I had a resale transaction after 9 years and they assisted us promptly and professionally throughout the entire process, very good customer support.",
  },
  {
    name: "Senthil Kumar",
    country: "Chennai, India",
    image: testimonial1,
    review: "Bought my first plot from DOSS, good support and maintenance.",
  },
  {
    name: "Ajay Eshwar",
    country: "Chennai, India",
    image: testimonial3,
    review:
      "Highly impressed with the layout quality, the gated community has excellent security and is packed with tress providing a good nature living experience in the city.",
  },
  {
    name: "K Dhanasekar",
    country: "Chennai, India",
    image: testimonial1,
    review:
      "I’m an NRI buying from Dubai, the sales team clearly explained and assisted in all the processes, it was very smooth and easy.",
  },
  {
    name: "Harikumar G",
    country: "Chennai, India",
    image: testimonial3,
    review:
      "We have seen plenty of plots, but DOSS felt instantly different. Everything felt like it was thought about, the attention to detail is spectacular. The quality stands out.",
  },
  {
    name: "Archana",
    country: "Chennai, India",
    image: testimonial4,
    review: "Quality of the project was definitely the key factor behind choosing DOSS.",
  },
  {
    name: "Prabhu M",
    country: "Chennai, India",
    image: prabhuImg,
    review:
      "What gave us confidence was the transparency. The documentation, approvals, and process were clearly explained, which made the decision feel secure from the beginning.",
  },
  {
    name: "Sanjana Shankar",
    country: "Chennai, India",
    image: testimonial4,
    review:
      "What we appreciated most was how organised everything felt. The project and the finish also just felt premium comparatively.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  return (
    <section data-theme="light" className="py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-5 md:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mx-auto text-center">
          <h2
            className="
              font-heading
              text-[23px] leading-[36px]
              lg:text-[37px]
              lg:leading-[54px]
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
                    md:!w-[41%]
                    lg:!w-[31.5%]
                  "
                >
                  {({
                    isActive,
                  }) => (
                    <div
                      className={`
                        rounded-[10px]
                        bg-white p-4
                        lg:p-6
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
                        <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px] shrink-0 overflow-hidden rounded-full">
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
                          <h3 className="text-[14px] lg:text-[19px] leading-[24px] font-small tracking-[-2%] text-[#222]">
                            {
                              item.name
                            }
                          </h3>

                          <p className="text-[13px] lg:text-[14px] leading-[16px] tracking-[-3%] text-[#000000]">
                            {
                              item.country
                            }
                          </p>

                          {/* STARS */}
                          <div className="mt-1 lg:mt-2.5 flex gap-1 text-[#D0A93E]">
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
                          lg:text-[14px]
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