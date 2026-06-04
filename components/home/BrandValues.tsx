"use client";

import Image, {
    StaticImageData,
} from "next/image";
import { motion } from "framer-motion";

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
    return (
        <>
            {/* Desktop */}
            <section className="hidden h-[100vh] items-center overflow-hidden md:flex md:mt-20 xl:mt-10">
                <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
                    <div className="grid grid-cols-3 gap-6 xl:gap-8">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex lg:h-[85vh] xl:[85vh] flex-col"
                            >

                                {/* IMAGE */}
                                <div
                                    className="
                                    group
                                    relative
                                    z-10
                                    h-[42vh]
                                    xl:h-[48vh]
                                    min-h-[280px]
                                    max-h-[520px]
                                    overflow-hidden
                                    rounded-[14px]
                                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                  "
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

                                {/* VERTICAL LINE - TOUCHING IMAGE */}
                                <div
                                    className="
                                      absolute
                                      left-[48px]
                                      top-[42vh]
                                      xl:top-[48vh]
                                      h-[320px]
                                      w-[1px]
                                      bg-[#D5D5D5]
                                      z-0
                                    "
                                />

                                {/* CONTENT ALWAYS VISIBLE */}
                                <div
                                    className="
                                      absolute
                                      left-[60px]
                                      top-[calc(42vh+32px)]
                                      xl:top-[calc(48vh+32px)]
                                      max-w-[260px]
                                      min-h-[220px]
                                      flex
                                      flex-col
                                      md:ml-5
                                    "
                                >
                                    <h2
                                        className="
                                        mb-5
                                        text-[30px]
                                        md:text-[48px]
                                        font-heading
                                        tracking-normal
                                        leading-[90%]
                                        text-[#111111]
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE */}
            <section className="bg-white py-16 md:hidden">
                <div className="relative mx-auto max-w-[500px] px-5">
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
                                    <div className="relative h-[500px] overflow-hidden rounded-[20px]">
                                        <Image
                                            src={item.image}
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
                                                  text-[42px]
                                                  font-heading
                                                  leading-[90%]
                                                  tracking-[-0.03em]
                                                  text-[#111111]
                                                "
                                            >
                                                {item.title}
                                            </h2>

                                            <p
                                                className="
                                                  text-[15px]
                                                  leading-[170%]
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