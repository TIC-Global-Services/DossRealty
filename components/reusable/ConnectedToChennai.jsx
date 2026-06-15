"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import dynamic from "next/dynamic";
import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";
import Image from "next/image";

const ChennaiMap = dynamic(
  () => import("./ChennaiMap"),
  {
    ssr: false,
  }
);

gsap.registerPlugin(
  ScrollTrigger
);

export default function ConnectedToChennai() {
  const sectionRef =
    useRef(null);

  const carRef =
    useRef(null);

  const [
    activeMinute,
    setActiveMinute,
  ] = useState(0);

  useEffect(() => {
    const ctx =
      gsap.context(() => {
        gsap.to(
          carRef.current,
          {
            x: "83vw",
            ease: "none",

            scrollTrigger: {
              trigger:
                sectionRef.current,
              start:
                "top top",
              end:
                "+=2000",
              scrub: true,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,

              onUpdate:
                (self) => {
                  const progress =
                    self.progress;

                  if (
                    progress < 0.34
                  ) {
                    setActiveMinute(
                      0
                    );
                  } else if (
                    progress >=
                      0.34 &&
                    progress <
                      0.64
                  ) {
                    setActiveMinute(
                      5
                    );
                  } else if (
                    progress >=
                      0.64 &&
                    progress <
                      0.92
                  ) {
                    setActiveMinute(
                      10
                    );
                  } else {
                    setActiveMinute(
                      20
                    );
                  }
                },
            },
          }
        );
      });

    return () =>
      ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        h-screen
        flex-col
        overflow-hidden
        bg-white
      "
    >
      {/* Timeline */}
      <div className="relative flex-shrink-0 px-10 pt-8">
        <div className="relative h-[90px]">

          {/* Line Segments */}
          <div className="absolute left-[7.5%] top-[58px] h-[1px] w-[28%] bg-black" />

          <div className="absolute left-[37%] top-[58px] h-[1px] w-[28.5%] bg-black" />

          <div className="absolute left-[67%] top-[58px] h-[1px] w-[25%] bg-black" />

          <div className="absolute right-[0.5%] top-[58px] h-[1px] w-[6%] bg-black" />

          {/* Car */}
          <div
            ref={carRef}
            className="
              absolute
              left-[2%]
              top-[5px]
              z-20
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                mb-1
                text-center
                text-[14px]
                leading-[14px]
                text-black
              "
            >
              Doss
              <br />
              Realty
            </div>

            <Image
              src="/car.png"
              alt="car"
              width={78}
              height={42}
              className="object-contain"
            />
          </div>

          {/* 5 Minutes */}
          <div className="absolute left-[34%] top-0 flex flex-col items-center pt-2">
            <p
              className={`
                text-[13px]
                leading-[14px]
                text-center
                text-black
                transition-all
                duration-300
                ${
                  activeMinute ===
                  5
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            >
              5
              <br />
              MINUTES
            </p>

            <div className="mt-[18px] h-[8px] w-[8px] rounded-full bg-black" />
          </div>

          {/* 10 Minutes */}
          <div className="absolute left-[64%] top-0 flex flex-col items-center pt-2">
            <p
              className={`
                text-[13px]
                leading-[14px]
                text-center
                text-black
                transition-all
                duration-300
                ${
                  activeMinute ===
                  10
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            >
              10
              <br />
              MINUTES
            </p>

            <div className="mt-[18px] h-[8px] w-[8px] rounded-full bg-black" />
          </div>

          {/* 20 Minutes */}
          <div className="absolute right-[5%] top-0 flex flex-col items-center pt-2">
            <p
              className={`
                text-[13px]
                leading-[14px]
                text-center
                text-black
                transition-all
                duration-300
                ${
                  activeMinute ===
                  20
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            >
              20
              <br />
              MINUTES
            </p>

            <div className="mt-[18px] h-[8px] w-[8px] rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-2 min-h-0 flex-1">
        <ChennaiMap
          activeMinute={
            activeMinute
          }
        />
      </div>
    </section>
  );
}