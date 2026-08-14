"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import article1 from "@/assets/nri/articleImg1.webp";
import article2 from "@/assets/nri/articleImg2.webp";
import article3 from "@/assets/nri/articleImg3.webp";

import PrimaryBtn from "../reusable/PrimaryBtn";

gsap.registerPlugin(ScrollTrigger);

const RelatedArticles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredImgRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT IMAGE PARALLAX
      gsap.to(featuredImgRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      // TEXT REVEAL
      gsap.from(textRevealRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-theme="light" ref={sectionRef} className="overflow-hidden py-14 md:py-16">
      <div className="mx-auto px-5 md:px-24">
        {/* Heading */}
        <h2
          ref={(el) => {
            if (el) textRevealRef.current[0] = el;
          }}
          className="font-heading text-[30px] leading-[50px] lg:tracking-[-0.05em] text-[#111111] lg:text-[48px]"
        >
          Related articles
        </h2>

        {/* MAIN LAYOUT */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-8
            lg:grid
            lg:grid-cols-[1fr_1fr]
            lg:gap-[20px]
            lg:items-start
          "
        >
          {/* LEFT FEATURED ARTICLE */}
          <Link href="/blogs" >
            <div
              className="
                relative h-[450px]
                md:h-[550px]
                w-full
                overflow-hidden
                rounded-[10px]
              "
            >
              {/* PARALLAX IMAGE */}
              <div
                ref={featuredImgRef}
                className="absolute inset-0 h-[150%] w-full"
              >
                <Image
                  src={article1}
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-black/20" />

              {/* Title */}
              <div
                ref={(el) => {
                  if (el) textRevealRef.current[1] = el;
                }}
                className="absolute left-6 top-10 p-8 lg:p-6 z-20 lg:max-w-[46ch] lg:left-8 lg:top-8"
              >
                <h3 className="font-small text-[16px] leading-[20px] lg:leading-[26px] lg:tracking-[-0.72px] tracking-wide text-white lg:text-[24px]">
                  A Complete Guide to NRI Property Investment in India
                </h3>
              </div>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            {/* ARTICLES */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-[20px]">
              {/* ARTICLE 1 */}
              <Link
                href="/blogs"
                className="
                  group
                  mx-auto
                  flex
                  w-[290px]
                  flex-col
                  items-center
                  md:w-auto
                  md:items-start
                "
              >
                <div
                  className="
                    relative
                    h-[295px]
                    w-[290px]
                    overflow-hidden
                    rounded-[12px]
                    md:aspect-[4/4.2]
                    md:h-auto
                    md:w-full
                    md:rounded-[10px]
                  "
                >
                  <Image
                    src={article2}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Text container */}
                <div
                  className="w-[290px] text-center md:w-full md:max-w-[35ch] md:text-left"
                  ref={(el) => {
                    if (el) textRevealRef.current[2] = el;
                  }}
                >
                  <h3 className="text-start mt-4 text-[16px] font-[500] leading-[20px] md:leading-[25px] text-[#111111] lg:text-[20px]">
                    Key Benefits of Investing in Chennai Real Estate for NRIs
                  </h3>

                  <p className="text-start mt-3 text-[13px] leading-[16px] lg:leading-[20px] text-[#717171] lg:text-[16px]">
                    Explore why Chennai continues to attract NRI investors through strong infrastructure growth, high rental demand, trusted developments, and long-term investment potential.
                  </p>
                </div>
              </Link>

              {/* ARTICLE 2 */}
              <Link
                href="/blogs"
                className="
                  group
                  mx-auto
                  flex
                  w-[290px]
                  flex-col
                  items-center
                  md:w-auto
                  md:items-start
                "
              >
                <div
                  className="
                    relative
                    h-[295px]
                    w-[290px]
                    overflow-hidden
                    rounded-[10px]
                    md:aspect-[4/4.2]
                    md:h-auto
                    md:w-full
                  "
                >
                  <Image
                    src={article3}
                    alt=""
                    fill
                    className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div
                  className="w-[290px] text-center md:w-full md:max-w-[35ch] md:text-left"
                  ref={(el) => {
                    if (el) textRevealRef.current[3] = el;
                  }}
                >
                  <h3 className="text-start mt-4 text-[16px] font-[500] leading-[20px] lg:leading-[25px] text-[#111111] lg:text-[20px]">
                    Key Benefits of Investing in Chennai Real Estate for NRIs
                  </h3>

                  <p className="text-start mt-3 text-[13px] leading-[16px] lg:leading-[20px] text-[#717171] lg:text-[16px]">
                    Explore why Chennai continues to attract NRI investors through strong infrastructure growth, high rental demand, trusted developments, and long-term investment potential.
                  </p>
                </div>
              </Link>
            </div>

            {/* BUTTON */}
            <div
              ref={(el) => {
                if (el) textRevealRef.current[4] = el;
              }}
              className="mt-10 flex justify-center lg:justify-end"
            >
              <Link href="/blogs">
                <PrimaryBtn
                  className="text-[13px]
                    font-small
                    rounded-full
                    bg-[#00256A]
                    lg:text-[16px]
                    tracking-[-0.48px]
                    text-white
                    transition
                    duration-300
                    hover:scale-105
                    hover:text-black
                  "
                >
                  Browse all articles
                </PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;