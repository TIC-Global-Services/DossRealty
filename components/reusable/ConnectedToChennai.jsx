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
            x: "78vw",
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

                  if (progress < 0.15) {
  setActiveMinute(0);
} else if (
  progress < 0.5
) {
  setActiveMinute(5);
} else if (
  progress < 0.9
) {
  setActiveMinute(10);
} else {
  setActiveMinute(20);
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
      className="relative flex h-screen flex-col overflow-hidden bg-white"
    >
      {/* Timeline */}
      <div className="relative mt-4 flex-shrink-0 px-4">
        {/* Line */}
        <div className="absolute top-[50px] left-0 h-[1px] w-full bg-black" />

        {/* Car */}
        <div
          ref={carRef}
          className="absolute left-0 z-20 flex flex-col items-center"
        >
          {/* Dynamic text */}
          <div
            className="
              mb-1
              text-[14px]
              font-bold
              text-black
            "
          >
            Doss Realty
          </div>

          {/* Car image */}
          <Image
            src="/car.png"
            alt="car"
            width={75}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Timeline points */}
        <div className="flex justify-around pt-2">
          {[5, 10, 20].map(
            (
              minute
            ) => (
              <div
                key={
                  minute
                }
                className="flex flex-col items-center"
              >
                <p
                  className={`mb-4 text-sm transition-all duration-300 ${
                    activeMinute ===
                    minute
                      ? "font-bold text-black"
                      : "text-gray-500"
                  }`}
                >
                  {
                    minute
                  }{" "}
                  MINUTES
                </p>

                <div
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeMinute ===
                    minute
                      ? "scale-110 bg-black"
                      : "bg-gray-300"
                  }`}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 min-h-0 flex-1">
        <ChennaiMap
          activeMinute={
            activeMinute
          }
        />
      </div>
    </section>
  );
}