"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

const items = [
  {
    title:
      "THOUGHTFUL DESIGN APPROACH",
    description:
      "We create spaces that blend functionality with refined aesthetics, ensuring every detail contributes to a seamless living experience.",
  },
  {
    title:
      "PRIME LOCATIONS",
    description:
      "Our projects are strategically positioned to offer excellent connectivity, convenience, and long-term investment potential.",
  },
  {
    title:
      "QUALITY THAT ENDURES",
    description:
      "From planning to execution, we focus on superior construction standards and attention to detail that stand the test of time.",
  },
  {
    title:
      "TRUST & TRANSPARENCY",
    description:
      "We build lasting relationships through integrity, clear communication, and a customer-first approach at every stage.",
  },
  {
    title:
      "MODERN LIVING EXPERIENCES",
    description:
      "Our developments are designed to complement contemporary lifestyles with comfort, elegance, and purposeful spaces.",
  },
];

const words = [
  "Builders",
  "Researchers",
  "Risk Takers",
  "Historians",
  "Designers",
  "Innovators",
  "Strategists",
  "Curious"
];

export default function WhyWorkWithUs() {
  const sectionRef =
    useRef<HTMLDivElement>(
      null
    );

  const [
    currentWord,
    setCurrentWord,
  ] = useState(0);

  // Auto text change
  useEffect(() => {
    const interval =
      setInterval(() => {
        setCurrentWord(
          (prev) =>
            (prev + 1) %
            words.length
        );
      }, 1000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  // GSAP animation
  useEffect(() => {
    const ctx =
      gsap.context(() => {
        // Heading reveal
        gsap.from(
          ".reveal-heading",
          {
            y: 50,
            opacity: 0,
            duration: 1,
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

        // Stagger items reveal
        gsap.from(
          ".reveal-item",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease:
              "power3.out",
            scrollTrigger: {
              trigger:
                ".items-wrapper",
              start:
                "top 85%",
            },
          }
        );
      }, sectionRef);

    return () =>
      ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        bg-[#F4EFE3]
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          md:px-10
          lg:px-16
        "
      >
        {/* Heading */}
        <h2
          className="
            reveal-heading
            font-heading
            font-[300]
            text-[#39384C]
            text-[24px] leading-[30px]
            md:text-[50px]
            md:leading-[52px]
          "
        >
          Why work with us
        </h2>

        {/* Progress Bar */}
        <div className="mt-6 mb-8 reveal-heading">
          <div
            className="w-[100%]
              h-[2px]
              md:w-[60%]
            "
            style={{
              background:
                "linear-gradient(90deg, #39384C 0%, #3E3D4C 75%, #C7A85E 75%, #C7A85E 100%)",
            }}
          />
        </div>

        {/* Auto Change Title */}
        <h2
          className="
            reveal-heading
            font-heavy
            font-[800]
            max-w-[1100px]
            uppercase
            text-[#39384C]
            text-[18px] leading-[20px]
            md:leading-[24px]
            mb-10
            md:pl-20
            md:text-[30px]
          "
        >
          We Are:{" "}
          <span
            key={
              currentWord
            }
            className="
              inline-block
              text-[#39384C]
              animate-pulse
              transition-all
              duration-500
            "
          >
            {
              words[
                currentWord
              ]
            }
          </span>
        </h2>

        {/* Items */}
        <div
          className="
            items-wrapper
            space-y-8
            lg:pl-20
          "
        >
          {items.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="
                  reveal-item
                  pb-2
                "
              >
                <h3
                  className="
                    font-grand
                    text-[#31304A]
                    text-[16px]
                    mb-3
                    md:text-[20px]
                    leading-[24px]
                    tracking-normal
                  "
                >
                  {
                    item.title
                  }
                </h3>

                <p
                  className="tracking-normal
                    text-[16px]
                    text-[#39384c]
                    md:text-[16px]
                    leading-[18px]
                  "
                >
                  {
                    item.description
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}