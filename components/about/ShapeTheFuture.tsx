"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import futureImg from "@/assets/about/shapeFutureImg.jpg";

gsap.registerPlugin(ScrollTrigger);

const ShapeTheFuture = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // LEFT TITLE REVEAL
      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // PARAGRAPH REVEAL
      tl.from(
        textRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // IMAGE WRAPPER REVEAL
      tl.from(
        imageWrapperRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // IMAGE SCALE REVEAL
      tl.from(
        imageRef.current,
        {
          scale: 1.2,
          duration: 1.5,
          ease: "power3.out",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 md:gap-12 lg:flex-row">
          
          {/* LEFT SIDE */}
          <div
            ref={titleRef}
            className="lg:w-[30%] lg:translate-y-30"
          >
            <p
              className="ml-1 md:ml-2 mb-4 text-[14px]
              md:text-[16px] font-semibold
              uppercase leading-[26px]
              tracking-[1.6%] text-[#111111]"
            >
              Mission
            </p>

            <h2
              className="font-heading
              text-[30px] leading-[38px]
              md:text-[52px]
              md:leading-[95%]
              tracking-[-0.04em]
              text-[#111111]"
            >
             <span className="hidden md:block">Shaping <br />
              the Future <br />
              of Living</span>

              <span className="block md:hidden">Shaping the Future <br />
              of Living</span>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-[70%]">
            {/* TEXT */}
            <div
              ref={textRef}
              className="md:max-w-[90ch]"
            >
              <p
                className="font-small
                text-[13px] leading-[16px] tracking-normal
                md:text-[18px] 
                md:leading-[21px]
                md:tracking-[1px]
                text-[#222A2C]"
              >
                At Doss Realty, our vision is to shape the future of real estate
                through developments that reflect excellence, innovation, and
                purposeful living. We aspire to create spaces that go beyond
                structures environments that inspire comfort, connection, and a
                higher standard of living for individuals and communities alike.
                We believe every project should stand as a symbol of quality,
                trust, and timeless design. By combining modern architecture,
                strategic locations, and sustainable thinking, our goal is to
                deliver lasting value while continuously evolving with the needs
                of contemporary lifestyles.
              </p>

              <br />

              <p
                className="font-small
                text-[13px] leading-[16px] tracking-normal
                md:text-[18px]
                md:leading-[21px]
                md:tracking-[1px]
                text-[#222A2C]"
              >
                Driven by integrity and a customer-first approach, Doss Realty
                aims to become a trusted name in real estate, known for creating
                landmark developments that enrich everyday experiences and leave
                a lasting impact for generations to come.
              </p>
            </div>

            {/* IMAGE */}
            <div
              ref={imageWrapperRef}
              className="mt-10 relative h-[230px] md:h-[400px]
              overflow-hidden rounded-[10px]"
            >
              <div
                ref={imageRef}
                className="h-full w-full"
              >
                <Image
                  src={futureImg}
                  alt="Shape The Future"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeTheFuture;