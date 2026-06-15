"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import article1 from "@/assets/nri/articleImg1.jpg";
import article2 from "@/assets/nri/articleImg2.jpg";
import article3 from "@/assets/nri/articleImg3.jpg";

import PrimaryBtn from "../reusable/PrimaryBtn";

gsap.registerPlugin(
  ScrollTrigger
);

const RelatedArticles = () => {
  const sectionRef =
    useRef<HTMLDivElement>(
      null
    );

  const featuredImgRef =
    useRef<HTMLDivElement>(
      null
    );

  const textRevealRef =
    useRef<
      HTMLDivElement[]
    >([]);

  useLayoutEffect(() => {
    const ctx =
      gsap.context(() => {
        // LEFT IMAGE PARALLAX
        gsap.to(
          featuredImgRef.current,
          {
            yPercent: -25,
            ease: "none",
            scrollTrigger: {
              trigger:
                sectionRef.current,
              start:
                "top bottom",
              end:
                "bottom top",
              scrub: 2.5,
            },
          }
        );

        // TEXT REVEAL
        gsap.from(
          textRevealRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease:
              "power3.out",
            scrollTrigger: {
              trigger:
                sectionRef.current,
              start:
                "top 80%",
            },
          }
        );
      },
      sectionRef
    );

    return () =>
      ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        overflow-hidden
        py-14
        md:py-16
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-5
          md:px-8
          lg:px-10
        "
      >
        {/* Heading */}
        <h2
          ref={(el) => {
            if (el)
              textRevealRef.current[0] =
                el;
          }}
          className="
            font-heading
            text-[30px]
            leading-[50px]
            tracking-[-0.05em]
            text-[#111111]
            md:text-[48px]
          "
        >
          Related articles
        </h2>

        {/* MAIN LAYOUT */}
        <div
          className="
            mt-6
            grid
            gap-[20px]
            lg:grid-cols-[minmax(0,580px)_minmax(0,580px)]
            lg:items-start
            lg:justify-between
          "
        >
          {/* LEFT FEATURED ARTICLE */}
          <Link
            href="/blogs"
            className="w-full"
          >
            <div
              className="
                relative
                aspect-[4/4.1]
                w-full
                overflow-hidden
                rounded-[10px]
              "
            >
              {/* PARALLAX IMAGE */}
              <div
                ref={
                  featuredImgRef
                }
                className="
                  absolute
                  inset-0
                  h-[140%]
                  w-full
                "
              >
                <Image
                  src={article1}
                  alt="Featured Article"
                  fill
                  className="
                    object-cover
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* Title */}
              <div
                ref={(el) => {
                  if (el)
                    textRevealRef.current[1] =
                      el;
                }}
                className="
                  absolute
                  left-6
                  top-6
                  z-20
                  max-w-[40ch]
                  md:left-8
                  md:top-8
                "
              >
                <h3
                  className="
                    text-[18px]
                    leading-[26px]
                    tracking-[-0.72px]
                    text-white
                    md:text-[24px]
                  "
                >
                  A Complete Guide
                  to NRI Property
                  Investment in
                  India
                </h3>
              </div>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            {/* TOP TWO ARTICLES */}
            <div
              className="
                grid
                gap-[20px]
                md:grid-cols-2
              "
            >
              {/* ARTICLE 1 */}
              <Link
                href="/blogs"
                className="group"
              >
                <div
                  className="
                    relative
                    aspect-[4/4.2]
                    w-full
                    overflow-hidden
                    rounded-[12px]
                    md:rounded-[10px]
                  "
                >
                  <Image
                    src={
                      article2
                    }
                    alt=""
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                <div
                  className="
                    max-w-[250px]
                  "
                  ref={(el) => {
                    if (el)
                      textRevealRef.current[2] =
                        el;
                  }}
                >
                  <h3
                    className="
                      mt-4
                      text-[14px]
                      font-[500]
                      leading-[115%]
                      tracking-[-0.6px]
                      text-[#111111]
                      md:text-[20px]
                    "
                  >
                    Key Benefits of
                    Investing in
                    Chennai Real
                    Estate for NRIs
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      leading-[20px]
                      text-[#717171]
                      md:text-[16px]
                    "
                  >
                    Explore why
                    Chennai continues
                    to attract NRI
                    investors through
                    strong
                    infrastructure
                    growth.
                  </p>
                </div>
              </Link>

              {/* ARTICLE 2 */}
              <Link
                href="/blogs"
                className="group"
              >
                <div
                  className="
                    relative
                    aspect-[4/4.2]
                    w-full
                    overflow-hidden
                    rounded-[10px]
                    md:rounded-[10px]
                  "
                >
                  <Image
                    src={
                      article3
                    }
                    alt=""
                    fill
                    className="
                      object-cover
                      object-bottom
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                <div
                  className="
                    max-w-[250px]
                  "
                  ref={(el) => {
                    if (el)
                      textRevealRef.current[3] =
                        el;
                  }}
                >
                  <h3
                    className="
                      mt-4
                      text-[14px]
                      font-[500]
                      leading-[25px]
                      tracking-[-0.6px]
                      text-[#111111]
                      md:text-[20px]
                    "
                  >
                    Key Benefits of
                    Investing in
                    Chennai Real
                    Estate for NRIs
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      leading-[20px]
                      text-[#717171]
                      md:text-[16px]
                    "
                  >
                    Explore why
                    Chennai continues
                    to attract NRI
                    investors through
                    strong
                    infrastructure
                    growth.
                  </p>
                </div>
              </Link>
            </div>

            {/* BUTTON */}
            <div
              ref={(el) => {
                if (el)
                  textRevealRef.current[4] =
                    el;
              }}
              className="
                mt-10
                flex
                justify-end
              "
            >
              <Link href="/blogs">
                <PrimaryBtn
                  className="
                    rounded-full
                    bg-[#00256A]
                    text-[16px]
                    tracking-[-0.48px]
                    text-white
                    transition
                    duration-300
                    hover:scale-105
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