"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { blogs } from "@/data/blogs";


import rightArrow from "@/assets/blogs/rightArrow.png";


export default function BlogsArticles() {

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;

    setActiveSlide(Math.round(scrollLeft / slideWidth));
  };
  return (
    <section className="pb-20">
      <div className="px-6 lg:px-30">

        {/* DESKTOP */}
        <div className="hidden lg:block">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
              group
              border-t
              border-[#D9D9D9]
              py-10
            "
            >
              <div
                className="
                grid
                items-center
                gap-10
                lg:grid-cols-[1.4fr_1fr_180px]
              "
              >
                {/* Number + Title */}
                <div
                  className="
                  flex
                  flex-col
                  items-start
                  gap-6
                  min-w-0
                "
                >
                  <p
                    className="
                    font-wide
                    text-[18px]
                    leading-[20px]
                    italic
                    font-[900]
                    tracking-[-0.04em]
                    text-[#111111]
                  "
                  >
                    {blog.id}
                    <span className="font-light">/</span>
                  </p>

                  <h3
                    className="
                    max-w-[300px]
                    text-[22px]
                    leading-[32px]
                    text-[#000000]
                    font-[300]
                  "
                  >
                    {blog.title}
                  </h3>
                </div>

                {/* Hover Image */}
                <div className="flex justify-center">
                  <div
                    className="
                    relative
                    h-[160px]
                    w-[250px]
                    overflow-hidden
                    rounded-[20px]
                    -rotate-6
                  "
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="
                      object-cover
                      opacity-0
                      scale-95
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:scale-105
                    "
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-end">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="
                    group/button
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#00256A]
                    px-8
                    py-4
                    text-[13.5px]
                    font-medium
                    text-white
                    transition
                    duration-300
                    hover:scale-105
                  "
                  >
                    Read More

                    <Image
                      src={rightArrow}
                      alt="arrow"
                      width={18}
                      height={18}
                      className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t border-[#D9D9D9]" />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
            flex
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-hide
            pb-6
          "
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="
                min-w-full
                snap-center
                border-t
                border-[#D9D9D9]
                pt-8
                px-3
              "
              >
                {/* Number */}
                <p
                  className="mt-4
                  font-wide
                  text-[13px] leading-[20px]
                  italic
                  font-[900]
                  tracking-normal
                  text-[#111111]
                "
                >
                  {blog.id}
                  <span className="font-light">/</span>
                </p>

                {/* Title */}
                <h3
                  className="
                  mt-2
                  max-w-[320px]
                  text-[16px]
                  leading-[32px]
                  font-[300]
                  text-[#000]
                "
                >
                  {blog.title}
                </h3>

                {/* Image */}
                <div className="flex justify-center">
                  <div
                    className="
                    relative
                    mt-20
                    h-[190px]
                    w-[75%]
                    overflow-hidden
                    rounded-[28px]
                    -rotate-10
                  "
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="mt-16 flex justify-center">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#00256A]
                    px-7
                    py-2.5
                    text-[13px] leading-[20px]
                    font-medium
                    text-white
                  "
                  >
                    Read More

                    <Image
                      src={rightArrow}
                      alt="arrow"
                      width={14}
                      height={14}
                      className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    />
                  </Link>
                </div>

                {/* Border-B */}
                <div className="mt-12 border-b border-[#D9D9D9]" />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-0 flex justify-center">
            <div className="relative h-[4px] w-[200px] overflow-hidden rounded-full bg-[#D9D9D9]">
              <div
                className="
                absolute
                top-0
                left-0
                h-full
                rounded-full
                bg-[#00256A]
                transition-all
                duration-300
              "
                style={{
                  width: `${100 / blogs.length}%`,
                  transform: `translateX(${activeSlide * 100}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}