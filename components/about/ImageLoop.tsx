"use client";

import { useEffect, useState } from "react";
import Image, {
  StaticImageData,
} from "next/image";
import { motion } from "framer-motion";

import image1 from "@/assets/about/loopImg.jpg";
import image2 from "@/assets/about/loopImg2.jpg";
import image3 from "@/assets/about/loopImg3.jpg";
import image4 from "@/assets/about/loopImg4.jpg";

type LoopItem = {
  image: StaticImageData;
  title: string;
  description: string;
};

const loopItems: LoopItem[] = [
  {
    image: image1,
    title: "Private villa pool",
    description: "Private Spaces",
  },
  {
    image: image2,
    title: "Grand luxury pool estate",
    description:
      "Where Grandeur Finds Its Address",
  },
  {
    image: image3,
    title: "Coastal pool + hill view",
    description:
      "Luxury Framed by Nature",
  },
  {
    image: image4,
    title: "Infinity pool",
    description:
      "A Lifestyle Beyond Expectations",
  },
];

const ImageLoop = () => {
  const [activeGroup, setActiveGroup] =
    useState(0);

  const [activeMobileIndex, setActiveMobileIndex] =
    useState(0);

  const [isMobile, setIsMobile] =
    useState(false);

  const duplicatedItems = [
    ...loopItems,
    ...loopItems,
  ];

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkScreen();

    window.addEventListener(
      "resize",
      checkScreen
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkScreen
      );
  }, []);

  // DESKTOP animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prev) =>
        prev === 0 ? 1 : 0
      );
    }, 2500);

    return () =>
      clearInterval(interval);
  }, []);

  // MOBILE animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMobileIndex(
        (prev) =>
          (prev + 1) % loopItems.length
      );
    }, 2500);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section data-theme="light" className="overflow-hidden py-14 md:py-20">
      <div className="relative overflow-hidden">
        {/* LOOP TRACK */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
            flex
            items-center
            gap-4
            md:gap-8
            w-max
            px-4 md:px-0
          "
        >
          {duplicatedItems.map(
            (item, index) => {
              const originalIndex =
                index % loopItems.length;

              // DESKTOP GROUPING
              const firstGroup =
                originalIndex === 0 ||
                originalIndex === 2;

              const secondGroup =
                originalIndex === 1 ||
                originalIndex === 3;

              const desktopActive =
                activeGroup === 0
                  ? firstGroup
                  : secondGroup;

              // MOBILE ACTIVE IMAGE
              const mobileActive =
                originalIndex ===
                activeMobileIndex;

              // FINAL ACTIVE STATE
              const isActive =
                isMobile
                  ? mobileActive
                  : desktopActive;

              // HEIGHTS
              const activeHeight =
                isMobile ? 240 : 360;

              const inactiveHeight =
                isMobile ? 160 : 237.59;

              return (
                <div
                  key={index}
                  className="
                    w-[240px]
                    sm:w-[280px]
                    md:w-[360px]
                    shrink-0
                  "
                >
                  {/* IMAGE AREA */}
                  <div
                    className="
                      relative
                      h-[240px]
                      w-[240px]

                      sm:h-[280px]
                      sm:w-[280px]

                      md:h-[360px]
                      md:w-[360px]
                    "
                  >
                    <motion.div
                      animate={{
                        height:
                          isActive
                            ? activeHeight
                            : inactiveHeight,
                      }}
                      transition={{
                        duration: 1,
                        ease:
                          "easeInOut",
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        overflow-hidden
                        rounded-[10px]
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4 md:mt-5">
                    <h3
                      className="
                        uppercase
                        text-[14px]
                        md:text-[18px]
                        text-[#666]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[15px]
                        md:text-[18px]
                        leading-[140%]
                        text-[#777]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageLoop;