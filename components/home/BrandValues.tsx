"use client";

import Image, {
    StaticImageData,
} from "next/image";
import { motion } from "framer-motion";

import designImg from "@/assets/home/designImg.webp";
import craftImg from "@/assets/home/craftmanshipImg.webp";
import qualityImg from "@/assets/home/qualityImg.webp";
import purposeMobileImg from "@/assets/home/puposeMobileImg.webp";

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

            {/* MOBILE — horizontal slider */}
            <section className="bg-white py-10 md:hidden overflow-hidden">
                <div
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 pt-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <style>{`div::-webkit-scrollbar{display:none}`}</style>
                    {values.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative flex w-[78vw] max-w-[300px] shrink-0 snap-center flex-col items-center"
                        >
                            {/* title — above image */}
                            <h2 className="mb-3 flex min-h-[44px] items-end text-center text-[17px] font-medium leading-[20px] tracking-tight text-[#111111]">
                                {item.title}
                            </h2>

                            {/* image + horizontal connector */}
                            <div className="relative w-full">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#F2F2F2]">
                                    <Image
                                        src={item.mobileImage || item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="78vw"
                                    />
                                </div>

                                {/* ── line to next card — sits in the 24px gap, centered on image ── */}
                                {index !== values.length - 1 && (
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute top-1/2 -right-6 h-px w-6 bg-[#D5D5D5]"
                                        style={{ transform: "translateY(-50%)" }}
                                    />
                                )}
                            </div>

                            {/* description — below image */}
                            <p className="mt-3 max-w-[26ch] text-center text-[13px] leading-[18px] text-[#666666]">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* subtle edge fade + scroll hint */}
                <p className="mt-1 text-center text-[11px] tracking-[0.14em] text-[#AAAAAA]">
                    ← swipe →
                </p>
            </section>
        </>
    );
}