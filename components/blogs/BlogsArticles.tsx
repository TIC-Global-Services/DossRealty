"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { blogs } from "@/data/blogs";

import rightArrow from "@/assets/blogs/rightArrow.png";

const AUTO_SLIDE_INTERVAL = 4000;
const RESUME_AFTER_INTERACTION = 6000;

export default function BlogsArticles() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafIdRef.current !== null) return;

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;

      const el = sliderRef.current;
      if (!el) return;

      const slideWidth = el.clientWidth;
      if (!slideWidth) return;

      setActiveSlide(Math.round(el.scrollLeft / slideWidth));
    });
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const slideWidth = el.clientWidth;
    if (!slideWidth) return;

    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
  }, []);

  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, RESUME_AFTER_INTERACTION);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      pauseAutoSlide();
      scrollToIndex(index);
      setActiveSlide(index);
    },
    [pauseAutoSlide, scrollToIndex]
  );

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % blogs.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_SLIDE_INTERVAL);

    return () => window.clearInterval(id);
  }, [isPaused, scrollToIndex]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      if (pauseTimeoutRef.current !== null)
        window.clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section data-theme="light" className="pb-10">
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
            data-lenis-prevent
            onScroll={handleScroll}
            onTouchStart={pauseAutoSlide}
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
              transform: "translateZ(0)",
            }}
            className="
              flex
              overflow-x-auto
              overflow-y-hidden
              overscroll-x-contain
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
                  min-w-[300px]
                  text-[16px]
                  leading-[24px]
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
                <div className="mt-12 w-full border-b border-[#D9D9D9] px-3" />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-2 flex justify-center gap-2">
            {blogs.map((blog, index) => (
              <button
                key={blog.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeSlide === index
                      ? "w-6 bg-[#00256A]"
                      : "w-2 bg-[#D9D9D9]"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}