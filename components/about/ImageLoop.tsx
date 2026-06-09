"use client";

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
    description:
      "Thoughtfully crafted spaces designed for elevated lifestyles.",
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
  const duplicatedItems = [
    ...loopItems,
    ...loopItems,
  ];

  return (
    <section className="overflow-visible py-10 md:py-20">

      <div className="relative overflow-hidden px-5">

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
          className="flex w-max items-center gap-6"
        >
          {duplicatedItems.map(
            (item, index) => {
              const originalIndex =
                index % 4;

              const scaleAnimation =
                originalIndex === 0 ||
                originalIndex === 2
                  ? {
                      scale: [
                        1,
                        1.08,
                        1,
                        1,
                      ],
                    }
                  : {
                      scale: [
                        1,
                        1,
                        1.08,
                        1,
                      ],
                    };

              return (
                <motion.div
                  key={index}
                  animate={
                    scaleAnimation
                  }
                  transition={{
                    duration: 6,
                    repeat:
                      Infinity,
                    ease:
                      "easeInOut",
                  }}
                  className="
                    w-[300px]
                    shrink-0
                    origin-center
                    md:w-[320px]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[380px]
                      overflow-hidden
                      rounded-[24px]
                      md:h-[300px]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        object-bottom
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5">
                    <h3
                      className="
                        font-heading
                        text-[14px]
                        md:text-[18px]
                        text-[#111]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[16px]
                        leading-[140%]
                        text-[#666]
                      "
                    >
                      {
                        item.description
                      }
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageLoop;