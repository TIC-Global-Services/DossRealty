"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "WE CREATE SPACES THAT",
    subtitle: "INSPIRE",
    description:
      "Designed with timeless architecture and thoughtful aesthetics.",
    color: "#C5A556",
  },
  {
    title: "WE CREATE SPACES THAT",
    subtitle: "OFFER",
    description:
      "Prime locations with excellent connectivity and everyday convenience.",
    color: "#032B7A",
  },
];

export default function BuiltForLiving() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const totalScroll =
        sectionRef.current.offsetHeight -
        window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / totalScroll, 0),
        1
      );

      setActiveCard(progress > 0.5 ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[130vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-[550px]">
              <h2 className="text-[#2F3147] font-light leading-[95%] text-[38px] md:text-[54px] lg:text-[64px] xl:text-[72px]">
                Built for Living,
                <br />
                Built with Purpose
              </h2>

              <p className="mt-6 text-[#666] text-[14px] md:text-[16px] lg:text-[18px] leading-[180%]">
                Creating elegant spaces that bring together comfort,
                quality, and timeless design. Creating timeless spaces
                that blend thoughtful design with modern living.
                Designed with purpose and built to deliver comfort,
                convenience, and long-term value.
              </p>
            </div>

            {/* RIGHT STACKED CARDS */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] md:w-[360px] lg:w-[380px] h-[420px]">

                {cards.map((card, index) => {
                  const offset = index - activeCard;

                  return (
                    <motion.div
                      key={index}
                      animate={{
                        y: offset * 100,
                        scale: offset === 0 ? 1 : 0.96,
                        opacity: offset < 0 ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-[22px] p-8 flex flex-col justify-between shadow-lg"
                      style={{
                        backgroundColor: card.color,
                        zIndex: cards.length - index,
                      }}
                    >
                      <div>
                        <h3 className="text-white text-[24px] md:text-[28px] leading-[100%] font-medium">
                          {card.title}
                        </h3>

                        <h3 className="text-white text-[24px] md:text-[28px] leading-[100%] font-medium mt-1">
                          {card.subtitle}
                        </h3>
                      </div>

                      <p className="text-white/90 text-[15px] md:text-[16px] leading-[140%] max-w-[220px]">
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}