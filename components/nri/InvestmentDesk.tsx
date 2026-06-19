"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import investmentImg from "@/assets/nri/investmentDeskImg.png";

gsap.registerPlugin(
  ScrollTrigger
);

const InvestmentDesk = () => {
  const contentRef =
    useRef<HTMLDivElement>(null);

  const imageWrapperRef =
    useRef<HTMLDivElement>(null);

  const imageRef =
    useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* LEFT CONTENT REVEAL */
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger:
            contentRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      /* IMAGE ONLY PARALLAX */
      gsap.to(imageRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger:
            imageWrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto px-5 md:px-24">

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* LEFT CONTENT */}
          <div
            ref={contentRef}
            className="max-w-[580px]"
          >
            <p
              className="
                mb-5 text-[13px] leading-[20px]
                md:text-[20px]
                font-medium
                text-[#111111]
              "
            >
              NRI Investment Desk
            </p>

            <h2
              className="
                font-heading
                text-[24px] leading-[30px] tracking-normal
                md:leading-[50px]
                md:tracking-[-1.44px]
                text-[#111111]
                md:text-[48px]
              "
            >
            <span className="md:block hidden">India, Within Reach.</span>
            <span className="md:hidden block">India, Within Reach.</span>
            </h2>

            <p
              className="
                mt-8
                text-[16px] leading-[20px] tracking-normal
                md:leading-[24px] md:tracking-[-0.48px]
                text-[#6B6B6B]
                md:text-[16px]
              "
            >
              Distance should never create uncertainty. Our NRI Investment Desk offers considered, end-to-end guidance across project selection, documentation, financing coordination, registration, and post-purchase support.
              <br/> <br/>Every interaction is handled with clarity and discretion, allowing you to invest in India with the confidence of having a trusted team on the ground.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageWrapperRef}
            className="h-[380px]
              relative
              overflow-hidden
              rounded-[10px]
              md:h-[450px]
            "
          >
            <Image
              ref={imageRef}
              src={investmentImg}
              alt="Investment Desk"
              className="h-[120%]
                md:h-[125%]
                w-full
                object-cover
                will-change-transform
              "
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentDesk;