"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import journeyImg from "@/assets/nri/journeyImg.png";

gsap.registerPlugin(
  ScrollTrigger
);

const PropertyJourney = () => {
  const textRef =
    useRef<HTMLDivElement>(null);

  const imageRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* TEXT REVEAL */
      gsap.set(textRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      /* IMAGE REVEAL */
      gsap.set(imageRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.96,
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions:
            "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-4 md:py-14">
      <div className="mx-auto px-5 md:px-24">

        {/* TOP CONTENT */}
        <div
          ref={textRef}
          className="
            grid
            gap-4
            lg:grid-cols-2
            lg:gap-2
          "
        >
          {/* LEFT */}
          <div>
            <h2
              className="
                font-heading
                text-[24px] leading-[30px]
                md:leading-[50px]
                tracking-[-0.48px]
                text-[#111111]
                md:text-[46px]
              "
            >
             <span className="hidden md:block">Your Property
              <br />
              Journey,
              Simplified</span>
            <span className="md:hidden">Your Property Journey, <br/> Simplified</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p
              className="md:ml-6
                md:max-w-[600px]
                text-[16px] tracking-[-0.48px]
                leading-[20px]
                text-[#6B6B6B]
                md:text-[16px]
              "
            >
              Secure your ideal property from anywhere in the world with complete transparency and trusted support. Seamless virtual
              assistance, verified documentation, and end-to-end guidance for effortless remote investments. Invest confidently in premium
              real estate while we manage every step onyour behalf.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div
          ref={imageRef}
          className="mt-12 md:mt-6"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[10px]
            "
          >
            <Image
              src={journeyImg}
              alt="Property Journey"
              className="
                h-[340px]
                w-full
                object-cover object-bottom
                md:h-[460px]
              "
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyJourney;