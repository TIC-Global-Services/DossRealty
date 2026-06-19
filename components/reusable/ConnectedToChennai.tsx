"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const ChennaiMap = dynamic(() => import("./ChennaiMap"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const PIN_DISTANCE = 2000;

export default function ConnectedToChennai() {
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  const [activeMinute, setActiveMinute] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    isMountedRef.current = true;

    const ctx = gsap.context(() => {
      const wrapper = pinWrapperRef.current;
      const section = sectionRef.current;

      if (wrapper && section) {
        wrapper.style.minHeight = `${section.offsetHeight + PIN_DISTANCE}px`;
      }

      gsap.to(carRef.current, {
        x: "83vw",
        ease: "none",
        scrollTrigger: {
          id: "connected-to-chennai",
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${PIN_DISTANCE}`,
          scrub: true,
          pin: true,
          pinType: "transform",
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!isMountedRef.current) return;

            const progress = self.progress;

            if (progress < 0.34) {
              setActiveMinute(0);
            } else if (progress >= 0.34 && progress < 0.64) {
              setActiveMinute(5);
            } else if (progress >= 0.64 && progress < 0.92) {
              setActiveMinute(10);
            } else {
              setActiveMinute(20);
            }
          },
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    let resizeObserver: ResizeObserver | null = null;
    if (sectionRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      isMountedRef.current = false;
      resizeObserver?.disconnect();
      ctx.revert();
      if (pinWrapperRef.current) {
        pinWrapperRef.current.style.minHeight = "";
      }
    };
  }, []);

  return (
    <div ref={pinWrapperRef} className="relative">
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
                  ${activeMinute === 5 ? "opacity-0" : "opacity-100"}
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
                  ${activeMinute === 10 ? "opacity-0" : "opacity-100"}
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
                  ${activeMinute === 20 ? "opacity-0" : "opacity-100"}
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
          <ChennaiMap activeMinute={activeMinute} />
        </div>
      </section>
    </div>
  );
}