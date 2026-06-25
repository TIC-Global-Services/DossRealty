"use client";

import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import logo from "@/assets/careers/logoImg.png";
import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

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

        gsap.from(".career-logo", {
              y: 30,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            });
      }, sectionRef);

    return () =>
      ctx.revert();
  }, []);

  return (
    <section data-theme="light"
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

        {/* Center Content */}
        <div
          className="min-h-[40vh]
            reveal-heading
            flex
            flex-col
            items-center
            justify-center
            md:min-h-[65vh]
            text-center
            md:px-5
          "
        >
          {/* Logo */}
          <div
            key={currentWord}
            className="mb-10 animate-pulse"
          >
            <Image
              src={logo}
              alt="Doss Realty Logo"
              className="
                w-[180px]
                md:w-[240px]
                lg:w-[300px]
                h-auto
                object-contain
              "
              priority
            />
        </div>

          {/* Auto Change Title */}
          <h2
            className="mt-8
              flex
              flex-row
              md:flex-row
              items-center
              justify-center
              gap-2
              md:gap-4
              font-heavy
              font-[800]
              uppercase
              text-[#39384C]
              leading-none
              text-center
            "
          >
            <span
              className="
                text-[20px]
                md:text-[30px]
                lg:text-[40px]
                lg:leading-[54px]
              "
            >
              WE ARE :
            </span>

            <span
              key={currentWord}
              className="
                block
                text-center
                md:text-left
                animate-pulse
                transition-all
                duration-500
                text-[20px]
                md:text-[30px]
                lg:text-[40px]
                lg:leading-[54px]
              "
            >
              {words[currentWord]}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}