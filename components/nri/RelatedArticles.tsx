"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import article1 from "@/assets/nri/articleImg1.jpg";
import article2 from "@/assets/nri/articleImg2.jpg";
import article3 from "@/assets/nri/articleImg3.jpg";

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
    <section
      ref={sectionRef}
      className="py-14 md:py-16 overflow-hidden"
    >
      <div className="mx-auto px-5 md:px-8 lg:px-15">

        {/* Heading */}
        <h2
          ref={(el) => {
            if (el) textRevealRef.current[0] = el;
          }}
          className="
            font-heading
            text-[30px]
            md:text-[48px]
            leading-[50px]
            tracking-[-0.05em]
            text-[#111111]
          "
        >
          Related articles
        </h2>

        {/* Main Layout */}
        <div className="mt-6 grid gap-2 lg:grid-cols-[50%_50%]">

          {/* LEFT FEATURED ARTICLE */}
          <Link href="/blogs">
            <div className="relative overflow-hidden rounded-[10px] md:w-[540px] md:h-[560px]">

              {/* PARALLAX IMAGE */}
              <div
                ref={featuredImgRef}
                className="absolute inset-0 w-full h-[120%]" 
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

              {/* Title */}
              <div
                ref={(el) => {
                  if (el) textRevealRef.current[1] = el;
                }}
                className="absolute left-7 top-7 md:left-8 md:top-8 w-[40ch] z-20"
              >
                <h3
                  className="
                    text-[18px]
                    md:text-[24px]
                    leading-[26px]
                    tracking-[-0.72px]
                    text-white
                  "
                >
                  A Complete Guide to NRI Property
                  Investment in India
                </h3>
              </div>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">

            {/* TOP TWO ARTICLES */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* ARTICLE 1 */}
              <Link href="/blogs" className="group">
                <div
                  className="
                    overflow-hidden
                    rounded-[12px]
                    md:rounded-[10px]
                    md:w-[280px]
                    md:h-[290px]
                  "
                >
                  <Image
                    src={article2}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                <div
                  ref={(el) => {
                    if (el) textRevealRef.current[2] = el;
                  }}
                >
                  <h3
                    className="
                      mt-4
                      font-[500]
                      text-[14px]
                      md:text-[20px]
                      tracking-[-0.6px]
                      leading-[115%]
                      text-[#111111]
                    "
                  >
                    Key Benefits of Investing in
                    Chennai Real Estate for NRIs
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      md:text-[16px]
                      leading-[20px]
                      text-[#717171]
                    "
                  >
                    Explore why Chennai continues
                    to attract NRI investors through
                    strong infrastructure growth,
                    high rental demand, trusted
                    developments, and long-term
                    investment potential.
                  </p>
                </div>
              </Link>

              {/* ARTICLE 2 */}
              <Link href="/blogs" className="group">
                <div
                  className="
                    overflow-hidden
                    rounded-[12px]
                    md:rounded-[10px]
                    md:w-[280px]
                    md:h-[290px]
                  "
                >
                  <Image
                    src={article3}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                <div
                  ref={(el) => {
                    if (el) textRevealRef.current[3] = el;
                  }}
                >
                  <h3
                    className="
                      mt-4
                      font-[500]
                      tracking-[-0.6px]
                      text-[14px]
                      md:text-[20px]
                      leading-[25px]
                      text-[#111111]
                    "
                  >
                    Key Benefits of Investing in
                    Chennai Real Estate for NRIs
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      md:text-[16px]
                      leading-[20px]
                      text-[#717171]
                    "
                  >
                    Explore why Chennai continues
                    to attract NRI investors through
                    strong infrastructure growth,
                    high rental demand, trusted
                    developments, and long-term
                    investment potential.
                  </p>
                </div>
              </Link>

            </div>

            {/* BUTTON */}
            <div
              ref={(el) => {
                if (el) textRevealRef.current[4] = el;
              }}
              className="mt-10 flex justify-end"
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