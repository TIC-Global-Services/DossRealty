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

const HOLD_DISTANCE = 600;
const MOBILE_HOLD_DISTANCE = 150;

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
      const pinDistance = isMobile()
        ? MOBILE_PIN_DISTANCE + MOBILE_HOLD_DISTANCE
        : PIN_DISTANCE + HOLD_DISTANCE;

      if (wrapper && activeSection) {
        wrapper.style.minHeight = `${activeSection.offsetHeight + pinDistance}px`;
      }
    };

    const ctx = gsap.context(() => {
      setWrapperHeight();

      if (!isMobile()) {
        const totalDistance = PIN_DISTANCE + HOLD_DISTANCE;
        const movementFraction = PIN_DISTANCE / totalDistance;

        const tl = gsap.timeline({
          scrollTrigger: {
            id: "connected-to-chennai",
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalDistance}`,
            scrub: true,
            pin: true,
            pinType: "fixed",
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!isMountedRef.current) return;
              const carProgress = Math.min(self.progress / movementFraction, 1);
              if (carProgress < 0.34) setActiveMinute(0);
              else if (carProgress < 0.64) setActiveMinute(5);
              else if (carProgress < 0.92) setActiveMinute(10);
              else setActiveMinute(20);
            },
          },
        });

        tl.to(carRef.current, {
          x: "86vw",
          ease: "none",
          duration: PIN_DISTANCE,
        });

        tl.to({}, { duration: HOLD_DISTANCE });
      } else {
        const totalDistance = MOBILE_PIN_DISTANCE + MOBILE_HOLD_DISTANCE;
        const movementFraction = MOBILE_PIN_DISTANCE / totalDistance;

        const tl = gsap.timeline({
          scrollTrigger: {
            id: "connected-to-chennai-mobile",
            trigger: mobileSectionRef.current,
            start: "top top",
            end: `+=${totalDistance}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!isMountedRef.current) return;
              const planeProgress = Math.min(self.progress / movementFraction, 1);
              if (planeProgress < 0.35) setActiveMinute(0);
              else if (planeProgress < 0.68) setActiveMinute(5);
              else if (planeProgress < 0.98) setActiveMinute(10);
              else setActiveMinute(20);
            },
          },
        });

        tl.to(mobilePlaneRef.current, {
          x: "78vw",
          ease: "none",
          duration: MOBILE_PIN_DISTANCE,
        });

        tl.to({}, { duration: MOBILE_HOLD_DISTANCE });
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
        <div className="relative flex-shrink-0 px-8 pt-2 lg:pt-8">
          <div className="relative h-[60px] lg:h-[90px]">
            {(() => {
              const GAP = 10;
              const points = [3, 34, 64, 95];
              const segments: { left: string; width: string; tail?: boolean }[] = [];

              for (let i = 0; i < points.length - 1; i++) {
                segments.push({
                  left: `calc(${points[i]}% + ${GAP}px)`,
                  width: `calc(${points[i + 1] - points[i]}% - ${GAP * 2}px)`,
                });
              }
              segments.push({
                left: `calc(${points[3]}% + ${GAP}px)`,
                width: `calc(${100 - points[3]}% - ${GAP}px)`,
                tail: true,
              });

              return segments.map((seg, i) => (
                <div
                  key={i}
                  style={{ left: seg.left, width: seg.width }}
                  className={`absolute top-[54px] lg:top-[58px] h-[1px] bg-black ${seg.tail ? "hidden lg:block" : ""
                    }`}
                />
              ));
            })()}

            {/* Car */}
            <div
              ref={carRef}
              className="absolute left-[3%] -translate-x-1/2 lg:top-[5px] z-40 flex flex-col items-center"
            >
              <div className="mb-1 text-center text-[12px] leading-[12px] lg:text-[14px] lg:leading-[14px] text-black">
                Doss
                <br />
                Realty
              </div>
              <Image
                src="/car.png"
                alt="car"
                width={78}
                height={42}
                className="object-contain md:w-[60px] md:h-[40px] lg:w-[78px] lg:h-[42px]"
              />
            </div>

            {/* Stops */}
            {[
              { minute: 5, left: "34%" },
              { minute: 10, left: "64%" },
              { minute: 20, left: "95%" },
            ].map((stop) => (
              <div
                key={stop.minute}
                style={{ left: stop.left }}
                className="absolute top-0 z-20 flex -translate-x-1/2 flex-col items-center pt-1.5 lg:pt-2"
              >
                <p
                  className={`text-[13px] leading-[14px] text-center text-black transition-all duration-300 ${activeMinute === stop.minute ? "opacity-0" : "opacity-100"
                    }`}
                >
                  {stop.minute}
                  <br />
                  MINUTES
                </p>
                <div className="mt-[16px] lg:mt-[18px] h-[8px] w-[8px] rounded-full bg-black" />
              </div>
            ))}
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
              top-0
              z-20
            "
            >
              <Image
                src="/car.png"
                alt="plane"
                width={60}
                height={60}
              />
            </div>

            {/* Start Label */}
            <div className="absolute left-0 top-[30px] w-[70px]">
              <p
                className="
                text-[9px]
                leading-[10px]
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