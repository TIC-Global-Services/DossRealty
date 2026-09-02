"use client";

import { useRef, useState } from "react";
import Image, {
    StaticImageData,
} from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import designImg from "@/assets/home/designImg.webp";
import craftImg from "@/assets/home/craftmanshipImg.webp";
import qualityImg from "@/assets/home/qualityImg.webp";

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
        image: qualityImg,
        mobileImage: qualityImg,
    },
];

export default function LegacyVisionPurpose() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 40;

        if (diff > threshold && currentIndex < values.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (diff < -threshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

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

            {/* MOBILE — interactive horizontal slider */}
            <section className="bg-white py-12 md:hidden overflow-hidden select-none">
                {/* Top category label & counter */}
                <div className="mx-auto flex w-full max-w-[340px] items-center justify-between px-4 mb-2">
                    <span className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-[#8C8C8C]">
                        Brand Values
                    </span>
                    <span className="font-['Inter_Tight'] text-[14px] font-medium tracking-wider text-[#111111]">
                        0{currentIndex + 1} <span className="text-[#999999]">/ 0{values.length}</span>
                    </span>
                </div>

                <div
                    className="relative w-full overflow-hidden px-4"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    >
                        {values.map((item, index) => (
                            <div
                                key={item.title}
                                className="w-full shrink-0 px-2 flex flex-col items-center"
                            >
                                {/* title — above image */}
                                <h2 className="mb-3 flex min-h-[36px] items-center text-center text-[20px] font-medium leading-[24px] tracking-tight text-[#111111]">
                                    {item.title}
                                </h2>

                                {/* image card */}
                                <div className="relative w-full max-w-[320px] aspect-[4/3] overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#F5F5F5]">
                                    <Image
                                        src={item.mobileImage || item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 85vw, 320px"
                                        priority={index === 0}
                                    />
                                </div>

                                {/* description — below image */}
                                <p className="mt-4 max-w-[280px] text-center text-[14px] leading-[20px] text-[#555555]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Controls: Arrows + Dots */}
                <div className="mt-7 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                            disabled={currentIndex === 0}
                            aria-label="Previous brand value"
                            className="flex h-11 w-11 items-center justify-center rounded-full border bg-[#111111] text-white transition-all active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-black/5 cursor-pointer"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => Math.min(values.length - 1, prev + 1))}
                            disabled={currentIndex === values.length - 1}
                            aria-label="Next brand value"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white transition-all active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-black/85 cursor-pointer"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Dots */}
                    {/* <div className="flex items-center gap-2">
                        {values.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === currentIndex
                                        ? "w-6 bg-[#111111]"
                                        : "w-2 bg-black/20 hover:bg-black/40"
                                }`}
                            />
                        ))}
                    </div> */}
                </div>
            </section>
        </>
    );
}