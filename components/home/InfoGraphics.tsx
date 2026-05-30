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
    label: "View Infographics",
    title: "Est. 2010",
    location: "Chennai, India",
  },
  {
    id: "02",
    image: image2,
    label: "Our Portfolio",
    title: "Luxury Living",
    location: "Bangalore, India",
  },
  {
    id: "03",
    image: image3,
    label: "The Team",
    title: "Premium Villas",
    location: "Hyderabad, India",
  },
  {
    id: "04",
    image: image4,
    label: "Recognition",
    title: "Modern Spaces",
    location: "Mumbai, India",
  },
  {
    id: "05",
    image: image5,
    label: "Vision 2030",
    title: "Future Homes",
    location: "Delhi, India",
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

      const totalScrollableHeight =
        rect.height - window.innerHeight;

      const scrollProgress = Math.min(
        Math.max(
          -rect.top / totalScrollableHeight,
          0
        ),
        1
      );

      const index = Math.min(
        Math.floor(
          scrollProgress *
            infographicData.length
        ),
        infographicData.length - 1
      );

      setActiveIndex((prev) => {
        if (prev !== index) {
          needleSpring.set(
            NEEDLE_ANGLES[index]
          );
        }
        return index;
      });
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [needleSpring]);

  const arcCircumference =
    2 * Math.PI * R;

  const arcDashoffset =
    arcCircumference *
    (1 -
      (activeIndex + 1) /
        infographicData.length);

  const tipX = useTransform(
    needleSpring,
    (a) => tipPoint(a).x
  );

  const tipY = useTransform(
    needleSpring,
    (a) => tipPoint(a).y
  );

  const extX = useTransform(
    needleSpring,
    (a) => extendedPoint(a).x
  );

  const extY = useTransform(
    needleSpring,
    (a) => extendedPoint(a).y
  );

  const jumpTo = (
    index: number
  ) => {
    if (!sectionRef.current) return;

    const trackHeight =
      sectionRef.current.offsetHeight;

    const viewportHeight =
      window.innerHeight;

    window.scrollTo({
      top:
        sectionRef.current.offsetTop +
        (index /
          (infographicData.length - 1)) *
          (trackHeight -
            viewportHeight),
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F5F5F5]"
    >
      {/* Scroll Track */}
      <div
        style={{
          height: `${
            (infographicData.length - 1) *
              80 +
            100
          }vh`,
        }}
      >
        {/* Sticky Section */}
        <section className="sticky top-0 h-screen overflow-hidden flex items-center">
          <ContainerLayout className="flex items-center justify-between gap-8">

            {/* LEFT */}
            <div className="flex flex-col gap-5 shrink-0">
              {infographicData.map(
                (item, index) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      jumpTo(index)
                    }
                    className="text-left relative"
                  >
                    <motion.span
                      animate={{
                        color:
                          activeIndex ===
                          index
                            ? "#1a1814"
                            : "#A0A0A0",
                        fontSize:
                          activeIndex ===
                          index
                            ? "22px"
                            : "18px",
                        fontWeight:
                          activeIndex ===
                          index
                            ? 500
                            : 300,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="tracking-wider font-mono block"
                    >
                      {item.id}
                    </motion.span>

                    <motion.span
                      animate={{
                        scaleX:
                          activeIndex ===
                          index
                            ? 1
                            : 0,
                        opacity:
                          activeIndex ===
                          index
                            ? 1
                            : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="absolute -bottom-0.5 left-0 h-px w-5 bg-[#1a1814] origin-left block"
                    />
                  </button>
                )
              )}
            </div>

            {/* CENTER */}
            <div className="relative flex items-center justify-center flex-1">
              <div className="relative h-[450px] w-[450px]">

                <div className="absolute inset-0 rounded-full overflow-hidden z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{
                        opacity: 0,
                        scale: 0.94,
                        rotate: -10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.94,
                        rotate: 10,
                      }}
                      transition={{
                        duration: 0.75,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          infographicData[
                            activeIndex
                          ].image
                        }
                        alt={
                          infographicData[
                            activeIndex
                          ].title
                        }
                        fill
                        className="object-cover"
                        priority={
                          activeIndex === 0
                        }
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <svg
                  viewBox="0 0 450 450"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    overflow:
                      "visible",
                  }}
                >
                  <circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke="#1a1814"
                    strokeWidth="0.6"
                    opacity="0.13"
                  />

                  <motion.circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke="#1a1814"
                    strokeWidth="1.2"
                    opacity="0.3"
                    strokeLinecap="round"
                    strokeDasharray={
                      arcCircumference
                    }
                    animate={{
                      strokeDashoffset:
                        arcDashoffset,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    transform={`rotate(-90 ${CX} ${CY})`}
                  />

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

            {/* RIGHT */}
            <div className="max-w-[220px] text-right shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[3px] text-[#5A5A5A]">
                    {
                      infographicData[
                        activeIndex
                      ].label
                    }
                  </p>

                  <h2 className="mt-4 text-5xl">
                    {
                      infographicData[
                        activeIndex
                      ].title
                    }
                  </h2>

                  <p className="mt-2 text-sm text-[#707070]">
                    {
                      infographicData[
                        activeIndex
                      ].location
                    }
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