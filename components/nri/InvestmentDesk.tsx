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
      <div className="mx-auto px-5 md:px-8 lg:px-20">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div
            ref={contentRef}
            className="max-w-[580px]"
          >
            <p
              className="
                mb-5
                text-[20px]
                font-medium
                text-[#111111]
              "
            >
              NRI Investment Desk
            </p>

            <h2
              className="
                font-heading
                text-[24px]
                leading-[50px]
                tracking-[-1.44px]
                text-[#111111]
                md:text-[48px]
              "
            >
              Invest with
              <br />
              Confidence.
              <br />
              From Anywhere.
            </h2>

            <p
              className="
                mt-8
                text-[15px]
                leading-[24px] tracking-[-0.48px]
                text-[#6B6B6B]
                md:text-[16px]
              "
            >
              Secure, well-planned properties with complete support from selection to registration, handled seamlessly. Thoughtfully developed properties designed
              for comfort, value, and long-term growth. Strategically located developments that offer excellent connectivity and
              future investment potential. Designed to create balanced communities with modern amenities and peaceful surroundings.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageWrapperRef}
            className="
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
              className="
                h-[125%]
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