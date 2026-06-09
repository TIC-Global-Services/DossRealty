"use client";

import { useEffect, useState } from "react";
import Image, {StaticImageData,} from "next/image";
import { motion,} from "framer-motion";

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
    description:
      "Private Spaces",
  },
  {
    image: image2,
    title:
      "Grand luxury pool estate",
    description:
      "Where Grandeur Finds Its Address",
  },
  {
    image: image3,
    title:
      "Coastal pool + hill view",
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

  const duplicatedItems = [
    ...loopItems,
    ...loopItems,
  ];

  // SWITCH ACTIVE IMAGES
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prev) =>
        prev === 0 ? 1 : 0
      );
    }, 2500);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-10 md:py-20">
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
            gap-8
            w-max
          "
        >
          {duplicatedItems.map(
            (item, index) => {
              const originalIndex =
                index % 4;

              // 1 & 3
              const firstGroup =
                originalIndex === 0 ||
                originalIndex === 2;

              // 2 & 4
              const secondGroup =
                originalIndex === 1 ||
                originalIndex === 3;

              const isActive =
                activeGroup === 0
                  ? firstGroup
                  : secondGroup;

              return (
                <div
                  key={index}
                  className="
                  w-[360px]
                  shrink-0
                "
                >
                  {/* FIXED IMAGE AREA */}
                  <div
                    className="
                    relative
                    h-[360px]
                    w-[360px]
                  "
                  >
                    <motion.div
                      animate={{
                        height: isActive
                          ? 360
                          : 237.59,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
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
                  <div className="mt-5">
                    <h3
                      className="
                      uppercase
                      text-[18px]
                      text-[#666]
                    "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-2
                      text-[18px]
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