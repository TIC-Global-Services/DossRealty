"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import legacyImg from "@/assets/home/legacyImg.png";
import visionImg from "@/assets/home/visionImg.png";
import purposeImg from "@/assets/home/purposeImg.png";

type ValueCard = {
    title: string;
    description: string;
    image: StaticImageData;
};

const values: ValueCard[] = [
    {
        title: "Legacy",
        description:
            "At Doss Realty, our legacy is built on trust, commitment, and the relationships we continue to nurture with every project we deliver. We believe that quality construction and honest business practices create more than developments — they create lasting confidence.",
        image: legacyImg,
    },
    {
        title: "Vision",
        description:
            "Our vision is to create thoughtfully planned spaces that redefine modern living while delivering lasting value. At Doss Realty, we focus on blending smart design, strategic locations, and quality construction to build spaces that meet today’s lifestyle and tomorrow’s aspirations.",
        image: visionImg,
    },
    {
        title: "Purpose",
        description:
            "Our purpose goes beyond building homes and developments — we create spaces designed to enrich everyday life. Every Doss Realty project is planned with care to bring together comfort, functionality, and long-term value in the right location.",
        image: purposeImg,
    },
];

export default function LegacyVisionPurpose() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="hidden md:flex h-[100vh] overflow-hidden items-center">
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-3 gap-6 xl:gap-8">
                    {values.map((item, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="relative h-[85vh] flex flex-col"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* IMAGE */}
                                <motion.div
                                    animate={{
                                        y: isHovered ? 40 : 0,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                    relative
                                    h-[42vh]
                                    xl:h-[48vh]
                                    min-h-[280px]
                                    max-h-[520px]
                                    rounded-[14px]
                                    overflow-hidden
                                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                    z-10
                                  "
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                <AnimatePresence>
                                    {isHovered && (
                                        <>
                                            {/* VERTICAL LINE */}
                                            <motion.div
                                                initial={{
                                                    scaleY: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    scaleY: 1,
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    scaleY: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    ease: "easeOut",
                                                }}
                                                style={{
                                                    transformOrigin: "top",
                                                }}
                                                className="
                                                absolute
                                                left-[48px]
                                                top-[calc(42vh+40px)]
                                                xl:top-[calc(48vh+40px)]
                                                w-[1px]
                                                h-[300px]
                                                bg-[#D5D5D5]
                                                z-0
                                              "
                                            />

                                            {/* CONTENT */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 30,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: 0.08,
                                                    ease: "easeOut",
                                                }}
                                                className="
                                                  absolute
                                                  left-[60px]
                                                  top-[calc(42vh+90px)]
                                                  xl:top-[calc(48vh+90px)]
                                                  max-w-[260px]
                                                  min-h-[220px]
                                                  flex flex-col
                                                  md:ml-5
                                                  "
                                            >
                                                <h2
                                                    className="
                                                    text-[30px]
                                                    md:text-[48px]
                                                    font-heading
                                                    tracking-normal
                                                    leading-[90%]
                                                    text-[#111111]
                                                    mb-5
                                                  "
                                                >
                                                    {item.title}
                                                </h2>

                                                <p
                                                    className="
                                                    text-[14px]
                                                    md:text-[16px]
                                                    leading-[150%]
                                                    text-[#666666]
                                                  "
                                                >
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}