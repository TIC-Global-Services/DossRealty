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
    <section data-theme="light" className="py-4 lg:py-14">
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
                lg:leading-[50px]
                lg:tracking-[-0.48px]
                text-[#111111]
                lg:text-[46px]
              "
            >
             <span className="hidden md:block">One Relationship. <br/> Every Step.</span>
            <span className="md:hidden">One Relationship. <br/> Every Step.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p
              className="lg:ml-6
                lg:max-w-[600px]
                text-[16px] tracking-[-0.48px]
                leading-[20px]
                text-[#6B6B6B]
                lg:text-[16px]
              "
            >
              From the first conversation to final registration, a dedicated relationship manager remains your single point of contact. We coordinate virtual project presentations, document reviews, payment milestones, banking requirements, and Power of Attorney-led processes where applicable.
              <br/> <br/>The result is a measured, transparent experience designed around your time zone, priorities, and long-term interests.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div
          ref={imageRef}
          className="mt-10 lg:mt-6"
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
                lg:h-[460px]
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