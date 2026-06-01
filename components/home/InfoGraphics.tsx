"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
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
    title: "Oasis Retreat",
    location: "Provence, France",
    coordinates: "43°56′18″N  5°21′47″E",
  },
  {
    id: "02",
    image: image2,
    title: "Château Elegance",
    location: "Marrakech, Morocco",
    coordinates: "31°37′52″N  8°00′24″W",
  },
  {
    id: "03",
    image: image3,
    title: "Enchanted Oasis Villa",
    location: "Kyoto, Japan",
    coordinates: "35°01′12″N  135°46′08″E",
  },
  {
    id: "04",
    image: image4,
    title: "Azure Serenity",
    location: "Santorini, Greece",
    coordinates: "36°25′30″N  25°25′49″E",
  },
  {
    id: "05",
    image: image5,
    title: "Tuscan Dreams",
    location: "Tuscany, Italy",
    coordinates: "43°25′00″N  11°09′00″E",
  },
];

const NEEDLE_ANGLES = [180, 216, 252, 288, 324];

const CX = 225;
const CY = 225;
const R = 222;

function tipPoint(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * R,
    y: CY + Math.sin(rad) * R,
  };
}

function extendedPoint(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * R * 2.4,
    y: CY + Math.sin(rad) * R * 2.4,
  };
}

const InfoGraphics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const needleSpring = useSpring(NEEDLE_ANGLES[0], {
    stiffness: 60,
    damping: 18,
    mass: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const scrollHeight =
        sectionRef.current.offsetHeight -
        window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollHeight, 0),
        0.9999
      );

      const newIndex = Math.floor(
        progress * infographicData.length
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);

        needleSpring.set(
          NEEDLE_ANGLES[newIndex]
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [activeIndex, needleSpring]);

  const arcCircumference = 2 * Math.PI * R;
  const arcDashoffset =
    arcCircumference * (1 - (activeIndex + 1) / infographicData.length);

  const tipX = useTransform(needleSpring, (a) => tipPoint(a).x);
  const tipY = useTransform(needleSpring, (a) => tipPoint(a).y);
  const extX = useTransform(needleSpring, (a) => extendedPoint(a).x);
  const extY = useTransform(needleSpring, (a) => extendedPoint(a).y);

  const jumpTo = (index: number) => {
    if (!sectionRef.current) return;
    const trackHeight = sectionRef.current.offsetHeight;
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
    <div ref={sectionRef} className="relative bg-[#F5F5F5]">
      {/* Scroll Track */}
      <div style={{ height: `${infographicData.length * 100}vh` }}>
        {/* Sticky Section */}
        <section className="sticky top-0 h-screen overflow-hidden flex flex-col">

          {/* ── Main content row ── */}
          <ContainerLayout className="flex-1 flex items-center justify-between gap-8 overflow-hidden">

            {/* LEFT — Numbered list with bullet dot */}
            <div className="flex flex-col gap-5 shrink-0">
              {infographicData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => jumpTo(index)}
                  className="relative flex items-center pl-5 text-left"
                >
                  {/* Bullet dot slides in from left */}
                  <motion.span
                    animate={{
                      color:
                        activeIndex === index
                          ? "#1a1814"
                          : "#A0A0A0",
                      fontSize:
                        activeIndex === index
                          ? "28px"
                          : "18px",
                      fontWeight:
                        activeIndex === index
                          ? 600
                          : 300,
                      x:
                        activeIndex === index
                          ? 12
                          : 0,
                      opacity:
                        activeIndex === index
                          ? 1
                          : 0.6,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="tracking-wider font-mono block"
                  >
                    {item.id}
                  </motion.span>
                </button>
              ))}
            </div>


            {/* CENTER — Circular destinations carousel */}
            <div className="relative flex items-center justify-center flex-1 overflow-hidden">
              <div className="relative h-[450px] w-[450px]">

                {/* Soft glow background */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-black/5 blur-[60px]"
                />

                {/* Previous image preview */}
                <motion.div
                  key={`prev-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.2,
                    scale: 0.85,
                    x: -120,
                  }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 rounded-full overflow-hidden blur-[2px]"
                >
                  <Image
                    src={
                      infographicData[
                        activeIndex === 0
                          ? infographicData.length - 1
                          : activeIndex - 1
                      ].image
                    }
                    alt="previous destination"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Next image preview */}
                <motion.div
                  key={`next-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.2,
                    scale: 0.85,
                    x: 120,
                  }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 rounded-full overflow-hidden blur-[2px]"
                >
                  <Image
                    src={
                      infographicData[
                        (activeIndex + 1) %
                        infographicData.length
                      ].image
                    }
                    alt="next destination"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Main circular image */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-20 border border-black/10">

                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeIndex}
                      initial={{
                        x: 180,
                        scale: 1.15,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        x: -180,
                        scale: 0.9,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      {/* Image parallax */}
                      <motion.div
                        animate={{
                          scale: [1.08, 1],
                        }}
                        transition={{
                          duration: 1.4,
                          ease: "easeOut",
                        }}
                        className="h-full w-full"
                      >
                        <Image
                          src={currentData.image}
                          alt={currentData.title}
                          fill
                          priority={activeIndex === 0}
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Luxury dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Floating destination card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-[-35px] left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/20 bg-white/70 px-6 py-3 backdrop-blur-xl shadow-xl"
                  >
                    <p className="text-[11px] uppercase tracking-[3px] text-[#7A7A7A]">
                      Destination
                    </p>

                    <h3 className="mt-1 text-[18px] font-light whitespace-nowrap">
                      {currentData.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>

                {/* Compass / needle SVG */}
                <svg
                  viewBox="0 0 450 450"
                  className="absolute inset-0 w-full h-full pointer-events-none z-30"
                >
                  {/* Base ring */}
                  <circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke="#1a1814"
                    strokeWidth="0.6"
                    opacity="0.13"
                  />

                  {/* Progress arc */}
                  <motion.circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke="#1a1814"
                    strokeWidth="1.2"
                    opacity="0.35"
                    strokeLinecap="round"
                    strokeDasharray={arcCircumference}
                    animate={{
                      strokeDashoffset: arcDashoffset,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    transform={`rotate(-90 ${CX} ${CY})`}
                  />

                  {/* Needle */}
                  <motion.line
                    x1={CX}
                    y1={CY}
                    x2={tipX}
                    y2={tipY}
                    stroke="#1a1814"
                    strokeWidth="0.8"
                    opacity="0.55"
                  />

                  <motion.line
                    x1={tipX}
                    y1={tipY}
                    x2={extX}
                    y2={extY}
                    stroke="#1a1814"
                    strokeWidth="0.6"
                    opacity="0.3"
                  />

                  <circle
                    cx={CX}
                    cy={CY}
                    r={2.5}
                    fill="#1a1814"
                  />

                  <motion.circle
                    cx={tipX}
                    cy={tipY}
                    r={3.5}
                    fill="#1a1814"
                  />
                </svg>
              </div>
            </div>

            {/* RIGHT — Villa name + location */}
            <div className="max-w-[240px] text-right shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 40,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: -40,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[3px] text-[#5A5A5A]">
                    Destinations
                  </p>

                  <h2 className="mt-4 text-5xl font-light leading-tight tracking-tight">
                    {currentData.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#707070] tracking-wide">
                    — {currentData.location}
                  </p>

                  <p className="mt-2 text-xs text-[#999]">
                    {currentData.coordinates}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </ContainerLayout>

        </section>
      </div>
    </div>
  );
};

export default InfoGraphics;