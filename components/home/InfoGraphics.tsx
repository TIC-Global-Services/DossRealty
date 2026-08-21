"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

import experienceimg from "@/assets/home/infographics/experience.webp";
import sqftimg from "@/assets/home/infographics/sqft-delivered.webp";
import projectsimg from "@/assets/home/infographics/projects.webp";
import familyimg from "@/assets/home/infographics/family.webp";

gsap.registerPlugin(ScrollTrigger);

type InfographicItem = {
  id: string;
  image: StaticImageData;
  stat: string;
  description: string;
};

const infographicData: InfographicItem[] = [
  { id: "01", image: experienceimg, stat: "30+", description: "Years Experience" },
  { id: "02", image: sqftimg, stat: "5+", description: "Million SQFT Delivered" },
  { id: "03", image: projectsimg, stat: "15+", description: "Projects" },
  { id: "04", image: familyimg, stat: "4000+", description: "Family's Served" },
];

const LINE_ANGLE_DEG = 225;

function degToRad(d: number) {
  return (d * Math.PI) / 180;
}

function polarPoint(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = degToRad(angleDeg - 90);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcClipPath(sweep: number): string {
  const SIZE = 420;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const r = SIZE * 0.72;

  if (sweep <= 0) {
    return `M ${cx} ${cy} Z`;
  }

  if (sweep >= 359.99) {
    return `M 0 0 H ${SIZE} V ${SIZE} H 0 Z`;
  }

  const startAngle = LINE_ANGLE_DEG;
  const endAngle = LINE_ANGLE_DEG - sweep;

  const start = polarPoint(cx, cy, r, startAngle);
  const end = polarPoint(cx, cy, r, endAngle);

  const largeArc = sweep > 180 ? 1 : 0;

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
    `Z`,
  ].join(" ");
}

export default function InfoGraphics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const desktopImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const desktopClipRefs = useRef<(SVGPathElement | null)[]>([]);


  const mobileImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileClipRefs = useRef<(SVGPathElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndexRef = useRef(0);

  const mobileTlRef = useRef<gsap.core.Timeline | null>(null);

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

  const animateToIndex = (
    nextIndex: number,
    direction: "next" | "prev" = "next"
  ) => {
    if (
      nextIndex < 0 ||
      nextIndex >= infographicData.length ||
      nextIndex === currentIndexRef.current
    ) return;

    const currentIndex = currentIndexRef.current;

    const currentImage = mobileImageRefs.current[currentIndex];
    const nextImage = mobileImageRefs.current[nextIndex];
    const currentText = mobileTextRefs.current[currentIndex];
    const nextText = mobileTextRefs.current[nextIndex];

    const clipPath =
      direction === "prev"
        ? mobileClipRefs.current[currentIndex]
        : mobileClipRefs.current[nextIndex];

    currentIndexRef.current = nextIndex;

    if (clipPath) {
      clipPath.setAttribute(
        "d",
        arcClipPath(direction === "prev" ? 360 : 0)
      );
    }

    if (direction === "prev" && nextIndex > 0) {
      const nc = mobileClipRefs.current[nextIndex];
      if (nc) nc.setAttribute("d", arcClipPath(360));
    }

    const proxy = {
      sweep: direction === "prev" ? 360 : 0,
    };

    const tl = gsap.timeline({
      onComplete: () => setActiveIndex(nextIndex),
    });

    if (direction === "prev") {
      tl.set(nextImage, { opacity: 1, zIndex: 10 });
      tl.set(currentImage, { zIndex: 20 });
    } else {
      tl.set(nextImage, { opacity: 1, zIndex: 20 });
      tl.set(currentImage, { zIndex: 10 });
    }

    // Circular wipe
    tl.to(
      proxy,
      {
        sweep: direction === "prev" ? 0 : 360,
        duration: 0.9,
        ease: "power2.inOut",
        onUpdate() {
          if (clipPath) {
            clipPath.setAttribute("d", arcClipPath(proxy.sweep));
          }
        },
      },
      0
    );

    // Fade old image
    tl.to(
      currentImage,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      0.78
    );

    // Text out
    tl.to(
      currentText,
      {
        opacity: 0,
        y: direction === "next" ? -20 : 20,
        filter: "blur(8px)",
        duration: 0.35,
        ease: "power3.out",
      },
      0
    );

    // Text in
    tl.fromTo(
      nextText,
      {
        opacity: 0,
        y: direction === "next" ? 20 : -20,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
      },
      0.2
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

  
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (!isDesktop) {
      // Mobile + Tablet init
      gsap.set(mobileImageRefs.current, { opacity: 0 });
      gsap.set(mobileImageRefs.current[0], { opacity: 1 });

      mobileClipRefs.current.forEach((p) => {
        if (p) p.setAttribute("d", arcClipPath(0));
      });

      gsap.set(mobileTextRefs.current, {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      });

      gsap.set(mobileTextRefs.current[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      setActiveIndex(0);
      currentIndexRef.current = 0;

      return () => {
        mobileTlRef.current?.kill();
      };
    }

    // Desktop init + ScrollTrigger
    const ctx = gsap.context(() => {
      gsap.set(desktopImageRefs.current, { opacity: 0 });
      gsap.set(desktopImageRefs.current[0], { opacity: 1 });

      desktopClipRefs.current.forEach((p) => {
        if (p) p.setAttribute("d", arcClipPath(0));
      });

      gsap.set(desktopTextRefs.current, {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      });

      gsap.set(desktopTextRefs.current[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      gsap.set(desktopNumberRefs.current, {
        y: 0,
        scale: 1,
      });

      setActiveIndex(0);
      currentIndexRef.current = 0;

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
            currentIndexRef.current = index;
            setActiveIndex(index);
          },
        },
      });

      infographicData.forEach((_, index) => {
        if (index === 0) return;

        const prevImage = desktopImageRefs.current[index - 1];
        const curImage = desktopImageRefs.current[index];
        const clipPath = desktopClipRefs.current[index];
        const prevText = desktopTextRefs.current[index - 1];
        const curText = desktopTextRefs.current[index];
        const prevNumber = desktopNumberRefs.current[index - 1];
        const curNumber = desktopNumberRefs.current[index];

        tl.to({}, { duration: 0.45 });
        tl.addLabel(`transition-${index}`);

        const proxy = { sweep: 0 };

        tl.set(curImage, { opacity: 1 }, "<");

        tl.fromTo(
          proxy,
          { sweep: 0 },
          {
            sweep: 360,
            duration: 1.4,
            ease: "power2.inOut",
            onUpdate() {
              if (clipPath) {
                clipPath.setAttribute("d", arcClipPath(proxy.sweep));
              }
            },
            onComplete() {
              if (clipPath) {
                clipPath.setAttribute("d", arcClipPath(360));
              }
            },
          },
          "<"
        );

        tl.to(
          prevImage,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "<+0.9"
        );

        tl.to(
          prevText,
          {
            opacity: 0,
            y: -25,
            filter: "blur(8px)",
            duration: 0.55,
            ease: "power3.inOut",
          },
          "<"
        );

        tl.fromTo(
          curText,
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

        tl.to(
          prevNumber,
          {
            y: -8,
            scale: 0.96,
            duration: 0.35,
            ease: "power2.out",
          },
          "<"
        );

        tl.fromTo(
          curNumber,
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

    return () => {
      ctx.revert();
      mobileTlRef.current?.kill();
    };
  }, [snapPoints]);

  return (
    <section data-theme="light" ref={sectionRef} className="relative min-h-screen bg-white">

      {/* DESKTOP */}
      <div className="hidden lg:grid h-full grid-cols-[120px_1fr_320px] items-center px-6 lg:px-10">

        {/* LEFT — slide numbers */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:gap-5">
            {infographicData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => jumpTo(index)}
                className="group flex justify-center"
              >
                <span
                  ref={(el) => {
                    desktopNumberRefs.current[index] = el;
                  }}
                  className={`
                    block font-['Inter_Tight'] font-medium
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

        {/* CENTER — circular image with wipe clip */}
        <div className="flex items-center justify-center xl:ml-[18%]">
          <div className="relative h-[clamp(260px,40vw,420px)] w-[clamp(260px,40vw,420px)]">

            <div className="absolute inset-0 z-[3] rounded-full border border-black/10" />

            <div className="absolute inset-0 z-[2] overflow-hidden rounded-full">
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
                        id={`wipe-clip-desktop-${index}`}
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path
                          ref={(el) => {
                            desktopClipRefs.current[index] = el;
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
                    desktopImageRefs.current[index] = el;
                  }}
                  className="absolute inset-0 will-change-transform backface-hidden"
                  style={{
                    zIndex: index,
                    clipPath:
                      index > 0
                        ? `url(#wipe-clip-desktop-${index})`
                        : undefined,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.stat}
                    fill
                    priority={index === 0}
                    className="object-cover scale-[1.06]"
                  />
                </div>
              ))}
            </div>

            {/* Fixed diagonal line */}
            <svg
              className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="50"
                y1="50"
                x2="-20"
                y2="120"
                stroke="#1A1814"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </svg>

            {/* Center dot */}
            <div className="absolute left-1/2 top-1/2 z-[10] h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A1814]" />
          </div>
        </div>

        {/* RIGHT — stat text */}
        <div className="flex justify-center text-center">
          <div className="relative min-h-[220px] w-[300px]">
            {infographicData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  desktopTextRefs.current[index] = el;
                }}
                className="absolute inset-0 flex will-change-transform flex-col items-center justify-center"
              >
                <p className="font-body text-[24px] font-[300] uppercase tracking-normal text-black">
                  View Infographics
                </p>

                <h2 className="font-['Inter_Tight'] text-[36px] font-medium leading-[150%] tracking-[0px] text-center text-[#1A1814]">
                  {item.stat}
                </h2>

                <p className="font-['Inter_Tight'] text-center text-[18px] font-light leading-[150%] tracking-[0] text-[#222222]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE + TABLET */}
      <div className="flex h-full flex-col items-center px-6 pt-20 pb-8 lg:hidden">

        {/* CENTER */}
        <div className="flex items-center justify-center mt-20 mb-10">
          <div className="relative h-[400px] w-[400px]">

            <div className="absolute inset-0 z-[3] rounded-full border border-black/10" />

            <div className="absolute inset-0 z-[2] overflow-hidden rounded-full">
              <svg
                style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
                aria-hidden="true"
              >
                <defs>
                  {infographicData.map((item, index) =>
                    index > 0 ? (
                      <clipPath
                        key={item.id}
                        id={`wipe-clip-mobile-${index}`}
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path
                          ref={(el) => { mobileClipRefs.current[index] = el; }}
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
                  ref={(el) => { mobileImageRefs.current[index] = el; }}
                  className="absolute inset-0"
                  style={{
                    zIndex: index,
                    clipPath: index > 0 ? `url(#wipe-clip-mobile-${index})` : undefined,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.stat}
                    fill
                    priority={index === 0}
                    className="object-cover scale-[1]"
                  />
                </div>
              ))}
            </div>

            {/* Diagonal line */}
            <svg
              className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
              viewBox="0 0 420 420"
            >
              <line x1="210" y1="234" x2="-100" y2="520" stroke="#1A1814" strokeWidth="1" opacity="20" />
              <line x1="210" y1="234" x2="-100" y2="520" stroke="#1A1814" strokeWidth="1" opacity="20" />
            </svg>

            {/* Center dot */}
            <div className="absolute left-[51%] top-[54%] z-[10] h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A1814]" />
          </div>
        </div>

        {/* Stat text */}
        <div className="mt-8 text-center min-h-[140px] flex flex-col items-center justify-center">
          {infographicData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { mobileTextRefs.current[index] = el; }}
              className="absolute"
            >
              <p className="font-body text-[14px] font-light uppercase text-[#222]">
                View Infographics
              </p>
              <h2 className="font-['Inter_Tight'] text-[38px] font-medium leading-[120%] text-[#1A1814]">
                {item.stat}
              </h2>
              <p className="font-['Inter_Tight'] text-[16px] font-light text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow nav buttons */}
        <div className="mt-6 flex items-center gap-4 ">
          <button
            onClick={() =>
              animateToIndex(
                currentIndexRef.current - 1,
                "prev"
              )
            }
            className="
                  flex h-[42px] w-[42px]
                  items-center justify-center
                  rounded-full border
                  border-[#D2D2D2]
                  transition-transform duration-300
                  active:scale-95
                "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() =>
              animateToIndex(
                currentIndexRef.current + 1,
                "next"
              )
            }
            className="
                  flex h-[42px] w-[42px]
                  items-center justify-center
                  rounded-full
                  bg-[#EEF1F5]
                  transition-transform duration-300
                  active:scale-95
                "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}