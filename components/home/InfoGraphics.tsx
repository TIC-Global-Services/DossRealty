"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "@/assets/home/infographics/img1.jpg";
import image2 from "@/assets/home/infographics/img2.png";
import image3 from "@/assets/home/infographics/img3.jpg";
import image4 from "@/assets/home/infographics/img4.jpg";
import image5 from "@/assets/home/infographics/img5.png";

gsap.registerPlugin(ScrollTrigger);

type InfographicItem = {
  id: string;
  image: StaticImageData;
  stat: string;
  description: string;
};

const infographicData: InfographicItem[] = [
  { id: "01", image: image1, stat: "Est. 2010", description: "In Chennai, India" },
  { id: "02", image: image2, stat: "30+", description: "Years Experience" },
  { id: "03", image: image3, stat: "5+", description: "Million SQFT Delivered" },
  { id: "04", image: image4, stat: "15+", description: "Projects" },
  { id: "05", image: image5, stat: "4000+", description: "Family's Served" },
];

const CX = 210;  
const CY = 210;   
const R = 300; 

const LINE_ANGLE_DEG = 225;

function degToRad(d: number) { return (d * Math.PI) / 180; }

function polarPoint(cx: number, cy: number, r: number, angleDeg: number) {
  // angleDeg: clockwise
  const rad = degToRad(angleDeg - 90);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function arcClipPath(sweep: number): string {
  if (sweep <= 0) return `M ${CX} ${CY} Z`;                       // nothing
  if (sweep >= 359.99) return `M 0 0 H 420 V 420 H 0 Z`;            // full rect

  const startAngle = LINE_ANGLE_DEG;
  const endAngle = LINE_ANGLE_DEG - sweep; // CCW 

  const start = polarPoint(CX, CY, R, startAngle);
  const end = polarPoint(CX, CY, R, endAngle);

  const largeArc = sweep > 180 ? 1 : 0;

  return [
    `M ${CX} ${CY}`,
    `L ${start.x} ${start.y}`,
    `A ${R} ${R} 0 ${largeArc} 0 ${end.x} ${end.y}`,
    `Z`,
  ].join(" ");
}

export default function InfoGraphics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const clipPathRefs = useRef<(SVGPathElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const snapPoints = useMemo(
    () => infographicData.map((_, i) => i / (infographicData.length - 1)),
    []
  );

  const jumpTo = (index: number) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const progress = index / (infographicData.length - 1);
    window.scrollTo({
      top: sectionTop + progress * (sectionHeight - viewportHeight),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      //INITIAL STATES

      // All images hidden
      gsap.set(imageRefs.current, { opacity: 0 });

      // index 0 
      gsap.set(imageRefs.current[0], { opacity: 1 });

      // All clip paths start at 0° sweep
      clipPathRefs.current.forEach((path) => {
        if (path) path.setAttribute("d", arcClipPath(0));
      });

      // Text
      gsap.set(textRefs.current, { opacity: 0, y: 50, filter: "blur(8px)" });
      gsap.set(textRefs.current[0], { opacity: 1, y: 0, filter: "blur(0px)" });

      // NUMBERS 
      gsap.set(numberRefs.current, {
        y: 0,
        scale: 1,
      });

      // First active state
      setActiveIndex(0);

      // MAIN SCROLL TIMELINE

      const totalItems = infographicData.length - 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 4.2}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const index = Math.round(self.progress * totalItems);
            setActiveIndex(index);
          },
        },
      });

      infographicData.forEach((_, index) => {
        if (index === 0) return;

        const previousImage = imageRefs.current[index - 1];
        const currentImage = imageRefs.current[index];
        const clipPath = clipPathRefs.current[index];

        const previousText = textRefs.current[index - 1];
        const currentText = textRefs.current[index];

        const previousNumber = numberRefs.current[index - 1];
        const currentNumber = numberRefs.current[index];

        tl.to({}, { duration: 0.45 });
        tl.addLabel(`transition-${index}`);

        //CCW ARC WIPE 
        const proxy = { sweep: 0 };

        tl.set(currentImage, { opacity: 1 }, "<");

        tl.fromTo(
          proxy,
          { sweep: 0 },
          {
            sweep: 360,
            duration: 1.4,
            ease: "power2.inOut",
            onUpdate() {
              if (clipPath) clipPath.setAttribute("d", arcClipPath(proxy.sweep));
            },
            onComplete() {
              // Once fully revealed, remove clip so it stays clean
              if (clipPath) clipPath.setAttribute("d", arcClipPath(360));
            },
          },
          "<"
        );

        // Fade out old image as wipe finishes
        tl.to(
          previousImage,
          { opacity: 0, duration: 0.4, ease: "power2.in" },
          "<+0.9"
        );

        // IMAGE + TEXT + NUMBER SAME TIME

        // TEXT EXIT
        tl.to(
          previousText,
          {
            opacity: 0,
            y: -25,
            filter: "blur(8px)",
            duration: 0.55,
            ease: "power3.inOut",
          },
          "<"
        );

        // TEXT ENTER
        tl.fromTo(
          currentText,
          {
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power4.out",
          },
          "<+0.08"
        );

        // NUMBER MICRO MOTION
        tl.to(
          previousNumber,
          {
            y: -8,
            scale: 0.96,
            duration: 0.35,
            ease: "power2.out",
          },
          "<"
        );

        tl.fromTo(
          currentNumber,
          {
            y: 8,
            scale: 0.96,
          },
          {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          "<"
        );
      });

      // SNAP
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 4.2}`,
        snap: {
          snapTo: snapPoints,
          duration: 0.6,
          ease: "power2.inOut",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [snapPoints]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "100vh" }}
    >
      <div ref={stickyRef} className="h-screen overflow-hidden">
        <div className="grid h-full grid-cols-[120px_1fr_320px] items-center px-10">

          {/* LEFT NUMBERS */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-5">
              {infographicData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => jumpTo(index)}
                  className="group flex justify-center"
                >
                  <span
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className={`
                    block
                    font-['Inter_Tight']
                    font-medium
                    text-[32px]
                    leading-[20px]
                    tracking-[1.2px]
                    text-center
                    uppercase
                    transition-colors
                    duration-500
                    ${index === activeIndex
                                ? "!text-[#1A1814]"
                                : "!text-[#BFBFBF]"
                              }
                    `}
                          >
                    {item.id}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex items-center justify-center md:ml-[15%] xl:ml-[18%]">
            <div className="relative h-[380px] w-[380px] md:h-[420px] md:w-[420px]">

              {/* OUTER RING */}
              <div className="absolute inset-0 z-[3] rounded-full border border-black/10" />

              <div className="absolute inset-0 z-[2] overflow-hidden rounded-full">

                {/* Hidden SVG defs */}
                <svg
                  style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                  }}
                  aria-hidden="true"
                >
                  <defs>
                    {infographicData.map((item, index) =>
                      index > 0 ? (
                        <clipPath
                          key={item.id}
                          id={`wipe-clip-${index}`}
                          clipPathUnits="userSpaceOnUse"
                        >
                          <path
                            ref={(el) => {
                              clipPathRefs.current[index] = el;
                            }}
                            d={arcClipPath(0)}
                          />
                        </clipPath>
                      ) : null
                    )}
                  </defs>
                </svg>

                {infographicData.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className="absolute inset-0 will-change-transform backface-hidden"
                    style={{
                      zIndex: index,
                      clipPath:
                        index > 0
                          ? `url(#wipe-clip-${index})`
                          : undefined,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.stat}
                      fill
                      priority={index === 0}
                      className="object-cover scale-[1.08]"
                    />
                  </div>
                ))}
              </div>

              {/* FIXED DIAGONAL LINE */}
              <svg
                className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
                viewBox="0 0 420 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="210"
                  y1="210"
                  x2="-100"
                  y2="520"
                  stroke="#1A1814"
                  strokeWidth="1"
                  opacity="20"
                />
              </svg>

              {/* CENTER DOT */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-[10]
                  h-[20px]
                  w-[20px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#1A1814]
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center text-center">
            <div className="relative min-h-[220px] w-[300px]">
              {infographicData.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  className="absolute inset-0 will-change-transform flex flex-col items-center justify-center"
                >
                  <p className="font-body text-[14px] font-[300] uppercase tracking-normal text-black md:text-[24px]">
                    View Infographics
                  </p>

                  <h2
                    className="
                      font-['Inter_Tight']
                      text-[24px]
                      font-medium
                      leading-[150%]
                      tracking-[0px]
                      text-center
                      text-[#1A1814]
                      md:text-[36px]
                    "
                  >
                    {item.stat}
                  </h2>

                  <p
                    className="
                      font-['Inter_Tight']
                      text-center
                      text-[14px]
                      font-light
                      leading-[150%]
                      tracking-[0]
                      text-[#222222]
                      md:text-[18px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}