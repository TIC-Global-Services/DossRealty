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
const MOBILE_PIN_DISTANCE = 500;

export default function ConnectedToChennai({
  projectLocation,
  locationData,
}: {
  projectLocation: any;
  locationData: any;
}) {
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mobileSectionRef = useRef(null);
  const carRef = useRef<HTMLDivElement>(null);
  const mobilePlaneRef = useRef<HTMLDivElement>(null);

  const [activeMinute, setActiveMinute] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    isMountedRef.current = true;

    const isMobile = () => window.innerWidth < 768;

    const setWrapperHeight = () => {
      const wrapper = pinWrapperRef.current;
      const activeSection = isMobile() ? mobileSectionRef.current : sectionRef.current;
      const pinDistance = isMobile() ? MOBILE_PIN_DISTANCE : PIN_DISTANCE;

      if (wrapper && activeSection) {
        wrapper.style.minHeight = `${activeSection.offsetHeight + pinDistance}px`;
      }
    };

    const ctx = gsap.context(() => {
      setWrapperHeight();

      if (!isMobile()) {
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
            pinType: "fixed",
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!isMountedRef.current) return;
              const progress = self.progress;
              if (progress < 0.34) setActiveMinute(0);
              else if (progress < 0.64) setActiveMinute(5);
              else if (progress < 0.92) setActiveMinute(10);
              else setActiveMinute(20);
            },
          },
        });
      } else {
        gsap.to(mobilePlaneRef.current, {
          x: "78vw",
          ease: "none",
          scrollTrigger: {
            id: "connected-to-chennai-mobile",
            trigger: mobileSectionRef.current,
            start: "top top",
            end: `+=${MOBILE_PIN_DISTANCE}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!isMountedRef.current) return;
              const progress = self.progress;
              if (progress < 0.34) setActiveMinute(0);
              else if (progress < 0.64) setActiveMinute(5);
              else if (progress < 0.94) setActiveMinute(10);
              else setActiveMinute(20);
            },
          },
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, pinWrapperRef);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth;
          setWrapperHeight();
          ScrollTrigger.refresh();
        }
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    const observedSection = isMobile() ? mobileSectionRef.current : sectionRef.current;

    if (observedSection && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        setWrapperHeight();
      });
      resizeObserver.observe(observedSection);
    }

    return () => {
      isMountedRef.current = false;
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
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
        className="hidden
          relative
          md:flex
          h-screen
          flex-col
          overflow-hidden
          bg-white
        "
      >
        {/* Timeline */}
        <div className="relative flex-shrink-0 px-2 md:pt-8">
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
          <ChennaiMap
  activeMinute={activeMinute}
  projectLocation={projectLocation}
  locationData={locationData}
/>
        </div>
      </section>


      {/* MOBILE */}
      <section
        ref={mobileSectionRef}
        className="relative h-screen flex flex-col
        md:hidden
        overflow-hidden
      "
      >
        {/* Timeline */}
        <div className="px-4 pt-2 flex-shrink-0">
          <div className="relative h-[80px]">

            {/* Line Segments */}
            <div className="absolute left-[15%] top-[20px] h-[2px] w-[18%] bg-black" />
            <div className="absolute left-[40%] top-[20px] h-[2px] w-[23%] bg-black" />
            <div className="absolute left-[70%] top-[20px] h-[2px] w-[18%] bg-black" />

            {/* Plane */}
            <div
              ref={mobilePlaneRef}
              className="
              absolute
              left-0
              top-[4px]
              z-20
            "
            >
              <Image
                src="/flight.png"
                alt="plane"
                width={34}
                height={34}
              />
            </div>

            {/* Start Label */}
            <div className="absolute left-0 top-[40px] w-[70px]">
              <p
                className="
                text-[9px]
                leading-[11px]
                uppercase
                text-black
              "
              >
                Sophisticated
                <br />
                Living Spaces
              </p>
            </div>

            {/* 5 Min */}
            <div
              className="
              absolute
              left-[31%]
              top-[19px]
              flex
              flex-col
              items-center
            "
            >
              <div className="h-[7px] w-[7px] rounded-full bg-black" />

              <p
                className={`
                mt-2
                text-center
                text-[10px]
                leading-[11px]
                transition-all
                duration-300
                ${activeMinute === 5
                        ? "opacity-100 font-medium"
                        : "opacity-50"
                      }
              `}
              >
                5
                <br />
                MINUTES
              </p>
            </div>

            {/* 10 Min */}
            <div
              className="
              absolute
              left-[61%]
              top-[19px]
              flex
              flex-col
              items-center
            "
            >
              <div className="h-[7px] w-[7px] rounded-full bg-black" />

              <p
                className={`
                mt-2
                text-center
                text-[10px]
                leading-[11px]
                transition-all
                duration-300
                ${activeMinute === 10
                        ? "opacity-100 font-medium"
                        : "opacity-50"
                      }
              `}
              >
                10
                <br />
                MINUTES
              </p>
            </div>

            {/* 20 Min */}
            <div
              className="
              absolute
              right-[4%]
              top-[19px]
              flex
              flex-col
              items-center
            "
            >
              <div className="h-[7px] w-[7px] rounded-full bg-black" />

              <p
                className={`
                mt-2
                text-center
                text-[10px]
                leading-[11px]
                transition-all
                duration-300
                ${activeMinute === 20
                        ? "opacity-100 font-medium"
                        : "opacity-50"
                      }
              `}
              >
                20
                <br />
                MINUTES
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-2 min-h-0 flex-1">
          <ChennaiMap
  activeMinute={activeMinute}
  projectLocation={projectLocation}
  locationData={locationData}
/>
        </div>
      </section>
    </div>
  );
}