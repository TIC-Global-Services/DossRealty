"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

import ContainerLayout from "@/layout/ContainerLayout";

import image1 from "@/assets/home/infographics/img1.jpg";
import image2 from "@/assets/home/infographics/img2.png";
import image3 from "@/assets/home/infographics/img3.jpg";
import image4 from "@/assets/home/infographics/img4.jpg";
import image5 from "@/assets/home/infographics/img5.png";

const infographicData = [
  {
    id: "01",
    image: image1,
    stat: "Est. 2010",
    description: "In Chennai, India",
  },
  {
    id: "02",
    image: image2,
    stat: "50,000+",
    description: "Homes delivered",
  },
  {
    id: "03",
    image: image3,
    stat: "8",
    description: "Master communities",
  },
  {
    id: "04",
    image: image4,
    stat: "54,000+",
    description: "In planning and progress",
  },
  {
    id: "05",
    image: image5,
    stat: "100+ M SQFT",
    description: "Project area in planning and progress",
  },
];

const NEEDLE_ANGLES = [216, 234, 252, 270, 288];

const CX = 225;
const CY = 225;
const R  = 222;

function tipPoint(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * R, y: CY + Math.sin(rad) * R };
}

function extendedPoint(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * R * 3.2, y: CY + Math.sin(rad) * R * 3.2 };
}

const InfoGraphics = () => {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const hasEnteredRef = useRef(false);

  const [activeIndex,   setActiveIndex]   = useState(0);
  const [circleVisible, setCircleVisible] = useState(false);

  const needleSpring = useSpring(NEEDLE_ANGLES[0], {
    stiffness: 55,
    damping: 18,
    mass: 1,
  });

  // ── useScroll is far more reliable than window.addEventListener("scroll")
  //    It auto-detects the correct scroll container (window, div, Lenis, etc.)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Trigger circle scale-up once
      if (latest > 0.01 && !hasEnteredRef.current) {
        hasEnteredRef.current = true;
        setCircleVisible(true);
      }

      const index = Math.min(
        Math.floor(latest * infographicData.length),
        infographicData.length - 1
      );

      // All three panels update together in the same state write
      setActiveIndex((prev) => {
        if (prev !== index) needleSpring.set(NEEDLE_ANGLES[index]);
        return index;
      });
    });

    return unsubscribe;
  }, [scrollYProgress, needleSpring]);

  const tipX = useTransform(needleSpring, (a) => tipPoint(a).x);
  const tipY = useTransform(needleSpring, (a) => tipPoint(a).y);
  const extX = useTransform(needleSpring, (a) => extendedPoint(a).x);
  const extY = useTransform(needleSpring, (a) => extendedPoint(a).y);

  const jumpTo = (index: number) => {
    if (!sectionRef.current) return;
    const trackHeight    = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top:
        sectionRef.current.offsetTop +
        (index / (infographicData.length - 1)) *
          (trackHeight - viewportHeight),
      behavior: "smooth",
    });
  };

  const currentData = infographicData[activeIndex];

  return (
    // sectionRef must sit on the OUTER scroll-track div, not the sticky child
    <div ref={sectionRef} className="relative bg-white"
      style={{ height: `${infographicData.length * 100}vh` }}
    >
      {/* Sticky viewport — pinned while outer div scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <ContainerLayout className="w-full flex items-center justify-between gap-8">

          {/* ── LEFT: all numbers visible, active = bold ── */}
          <div className="flex flex-col gap-[18px] shrink-0">
            {infographicData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => jumpTo(index)}
                  className="text-left"
                >
                  <motion.span
                    animate={{
                      color:      isActive ? "#1a1814" : "#C4C4C4",
                      fontSize:   isActive ? "18px"   : "13px",
                      fontWeight: isActive ? 700      : 300,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-mono tracking-wider leading-none block"
                  >
                    {item.id}
                  </motion.span>
                </button>
              );
            })}
          </div>

          {/* ── CENTER: circle + needle ── */}
          <div className="relative flex items-center justify-center flex-1">
            <div className="relative h-[440px] w-[440px]">

              {/* Circle — scales up from 0 on entry */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden z-10"
                initial={{ scale: 0 }}
                animate={{ scale: circleVisible ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1.1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentData.image}
                      alt={currentData.stat}
                      fill
                      className="object-cover"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Needle SVG */}
              <svg
                viewBox="0 0 450 450"
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                style={{ overflow: "visible" }}
              >
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none" stroke="#1a1814"
                  strokeWidth="0.5" opacity="0.1"
                />

                <motion.line
                  x1={CX} y1={CY} x2={tipX} y2={tipY}
                  stroke="#1a1814" strokeWidth="0.7" opacity="0.45"
                />

                <motion.line
                  x1={tipX} y1={tipY} x2={extX} y2={extY}
                  stroke="#1a1814" strokeWidth="0.5" opacity="0.22"
                />

                <circle cx={CX} cy={CY} r={3} fill="#1a1814" opacity="0.85" />

                <motion.circle
                  cx={tipX} cy={tipY} r={3.5} fill="#1a1814" opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* ── RIGHT: label / stat / description ── */}
          <div className="max-w-[260px] text-right shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="text-[10px] uppercase tracking-[3px] text-[#9A9A9A] font-light">
                  View Infographics
                </p>

                <h2
                  className="mt-3 font-semibold text-[#1a1814] leading-none tracking-tight"
                  style={{ fontSize: currentData.stat.length > 6 ? "2.4rem" : "3rem" }}
                >
                  {currentData.stat}
                </h2>

                <p className="mt-2 text-[12px] text-[#9A9A9A] leading-snug">
                  {currentData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </ContainerLayout>
      </div>
    </div>
  );
};

export default InfoGraphics;