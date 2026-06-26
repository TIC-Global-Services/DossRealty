"use client";

import Image, {
    StaticImageData,
} from "next/image";
import { motion } from "framer-motion";

import designImg from "@/assets/home/designImg.png";
import craftImg from "@/assets/home/craftmanshipImg.jpeg";
import qualityImg from "@/assets/home/qualityImg.webp";
import purposeMobileImg from "@/assets/home/puposeMobileImg.jpg";

type ValueCard = {
    title: string;
    description: string;
    image: StaticImageData;
    mobileImage?: StaticImageData;
};

const values: ValueCard[] = [
    {
        title: "Distinctive Design",
        description:
            "Measured proportions, composed planning, and a visual language shaped to feel timeless rather than temporary.",
        image: designImg,
    },
    {
        title: "Craftmanship",
        description:
            "A quiet mastery to how spaces are felt, from the rhythm of a façade to the quiet meeting of light, texture, and form.",
        image: craftImg,
    },
    {
        title: "Uncompromising Quality",
        description:
            "Materials, methods, and finishes selected with discipline, so every development carries a sense of permanence.",

        // desktop image
        image: qualityImg,

        // mobile image
        mobileImage: qualityImg,
    },
];

export default function LegacyVisionPurpose() {
    return (
        <>
            {/* Desktop */}
            <section
                data-theme="light"
                className="hidden min-h-screen items-center overflow-hidden md:flex md:py-8 lg:py-10"
            >
                <div className="mx-auto w-full px-6 md:px-8 lg:px-30">
                    <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                        {values.map((item, index) => {
                            const initialAnimation =
                                index === 0
                                    ? { opacity: 0, x: -120 }
                                    : index === 1
                                        ? { opacity: 0, y: 120 }
                                        : { opacity: 0, x: 120 };

                            return (
                                <motion.div
                                    key={index}
                                    initial={initialAnimation}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: index * 0.15,
                                    }}
                                    className="relative flex flex-col"
                                >
                                    {/* IMAGE */}
                                    <div
                                        className={`
                group
                relative
                z-10
                aspect-[3/4]
                overflow-hidden
                rounded-[14px]
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                ${index === 1 ? "md:mt-[30px] lg:mt-[60px]" : ""}
              `}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
                                        />
                                    </div>

                                    {/* LINE */}
                                    <div
                                        className="
                absolute
                left-[28px]
                lg:left-[36px]
                top-[20%]
                bottom-[-40px]
                w-[1px]
                bg-[#D5D5D5]
                z-0
              "
                                    />

                                    {/* CONTENT */}
                                    <div
                                        className="
                relative
                z-10
                pl-[46px]
                lg:pl-[60px]
                pt-14
                lg:pt-12
              "
                                    >
                                        <h2
                                            className="
                                                  mb-3
                                                  text-[26px] leading-[30px]
                                                  lg:text-[48px]
                                                  font-small
                                                  lg:leading-[50px]
                                                  tracking-tighter
                                                  text-[#111111]
                                                "
                                        >
                                            {item.title}
                                        </h2>

                                        <p
                                            className="
                                              w-[24ch]
                                              lg:w-[33ch]
                                              text-[12px] leading-[16px]
                                              lg:text-[16px]
                                              lg:leading-[20px]
                                              text-[#666666]
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MOBILE */}
            <section className="bg-white py-16 md:hidden">
                <div className="relative mx-auto px-18">
                    {values.map(
                        (item, index) => (
                            <div
                                key={index}
                                className="relative mb-12"
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 60,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [
                                            0.22, 1, 0.36, 1,
                                        ],
                                    }}
                                    className="relative"
                                >
                                    {/* IMAGE */}
                                    <div className="relative w-[280px] h-[290px] overflow-hidden rounded-[10px]">
                                        <Image
                                            src={item.mobileImage || item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* LINE + CONTENT */}
                                    <div className="relative pl-[60px] pt-8">
                                        {index !==
                                            values.length -
                                            1 && (
                                                <motion.div
                                                    initial={{
                                                        scaleY: 0,
                                                        opacity: 0,
                                                    }}
                                                    whileInView={{
                                                        scaleY: 1,
                                                        opacity: 1,
                                                    }}
                                                    viewport={{
                                                        once: true,
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.15,
                                                    }}
                                                    style={{
                                                        transformOrigin:
                                                            "top",
                                                    }}
                                                    className="
                                                      absolute
                                                      left-[40px]
                                                      top-0
                                                      h-[1040px]
                                                      w-[1px]
                                                      bg-[#D5D5D5]
                                                    "
                                                />
                                            )}

                                        {/* CONTENT */}
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: 30,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.1,
                                                ease: [
                                                    0.22, 1, 0.36, 1,
                                                ],
                                            }}
                                        >
                                            <h2
                                                className="
                                                  mb-4
                                                  text-[24px]
                                                  font-heading
                                                  leading-[30px]
                                                  tracking-normal
                                                  text-[#111111]
                                                "
                                            >
                                                {item.title}
                                            </h2>

                                            <p
                                                className="max-w-[220px]
                                                  text-[13px]
                                                  leading-[18px]
                                                  text-[#666666]
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    )}
                </div>
            </section>
        </>
    );
}