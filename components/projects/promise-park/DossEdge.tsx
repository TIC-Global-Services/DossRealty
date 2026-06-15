"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import edge1 from "@/assets/projects/metropettai/edgeImg1.png";
import edge2 from "@/assets/projects/metropettai/edgeImg2.png";
import edge3 from "@/assets/projects/metropettai/edgeImg3.png";

const edgeData = [
  {
    title: "PRIME LOCATIONS",
    description:
      "Strategically selected locations with excellent connectivity and access to everything essential for modern living.",
    image: edge1,
  },
  {
    title: "THOUGHTFUL DESIGN",
    description:
      "Carefully planned spaces that bring together elegance, comfort, and practical everyday functionality.",
    image: edge2,
  },
  {
    title: "CONSTRUCTION",
    description:
      "Built with trusted craftsmanship and attention to detail to deliver lasting value for generations.",
    image: edge3,
  },
];

const DossEdge = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // TITLE REVEAL
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // CARDS REVEAL
      tl.from(
      cardsRef.current?.children || [],
      {
        y: 60,
        scale: 0.96,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.3"
    );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-12"
    >
      <div className="mx-auto">

        {/* TITLE */}
        <div
          ref={titleRef}
          className="px-5 md:px-8 lg:px-12"
        >
          <h2
            className="
              font-heading
              text-center
              text-[34px]
              font-[300]
              uppercase
              tracking-[-1px]
              text-[#111]
              md:mb-[2%]
              md:text-[46px]
            "
          >
            THE DOSS EDGE
          </h2>

          {/* TOP BAR */}
          <div className="relative mt-4 h-[2px] w-full bg-[#D7D7D7]">
            <div
              className="
                absolute
                top-0
                h-full
                w-1/3
                bg-[#C59D5F]
                transition-all
                duration-500
                ease-in-out
              "
              style={{
                left:
                  activeIndex === 0
                    ? "0%"
                    : activeIndex === 1
                    ? "33.33%"
                    : "66.66%",
              }}
            />
          </div>
        </div>

        {/* GRID */}
        <div
          ref={cardsRef}
          className="
            mt-10
            grid
            gap-4
            px-5
            md:px-8
            lg:grid-cols-3
            lg:px-0
          "
        >
          {edgeData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                group
                relative
                cursor-pointer
                overflow-hidden
                transition-all
                duration-500
                md:h-[550px]
                ${
                  activeIndex === index
                    ? "scale-[1.02]"
                    : "scale-[0.96] opacity-80"
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative h-[400px] md:h-[550px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(102,102,102,0.2) 100%)",
                }}
              />

              {/* GLASS CONTENT */}
              <div
                className="
                  absolute
                  bottom-8
                  left-1/2
                  w-[370px]
                  h-[187px]
                  -translate-x-1/2
                  rounded-[20px]
                  border
                  border-white/30
                  bg-white/10
                  p-6
                  shadow-[inset_0px_1px_2px_rgba(255,255,255,0.8)]
                  backdrop-blur-[2px]
                "
              >
                <h4
                  className="
                    font-small font-[300]
                    text-start
                    text-[24px]
                    uppercase
                    text-white
                    md:text-[30px]
                    md:leading-[32px]
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    font-small
                    mt-4 font-[300]
                    w-[26ch]
                    text-sm
                    leading-[22px]
                    text-white
                    md:text-[18px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DossEdge;