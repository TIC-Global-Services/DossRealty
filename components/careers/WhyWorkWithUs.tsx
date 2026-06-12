"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "THOUGHTFUL DESIGN APPROACH",
    description:
      "We create spaces that blend functionality with refined aesthetics, ensuring every detail contributes to a seamless living experience.",
  },
  {
    title: "PRIME LOCATIONS",
    description:
      "Our projects are strategically positioned to offer excellent connectivity, convenience, and long-term investment potential.",
  },
  {
    title: "QUALITY THAT ENDURES",
    description:
      "From planning to execution, we focus on superior construction standards and attention to detail that stand the test of time.",
  },
  {
    title: "TRUST & TRANSPARENCY",
    description:
      "We build lasting relationships through integrity, clear communication, and a customer-first approach at every stage.",
  },
  {
    title: "MODERN LIVING EXPERIENCES",
    description:
      "Our developments are designed to complement contemporary lifestyles with comfort, elegance, and purposeful spaces.",
  },
];

export default function WhyWorkWithUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const totalScroll =
        sectionRef.current.offsetHeight -
        window.innerHeight;

      const currentScroll = Math.min(
        Math.max(-rect.top, 0),
        totalScroll
      );

      const percentage = currentScroll / totalScroll;

      setProgress(percentage * 100);

      const currentStep = Math.min(
        items.length - 1,
        Math.floor(percentage * items.length)
      );

      setActiveIndex(currentStep);
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
      className="relative h-[100vh] bg-[#F4EFE3]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full flex items-center">
          <div className="max-h-[90vh] mx-10 overflow-hidden">

            {/* Heading */}
            <h2 className="text-[#31304A] text-[36px] md:text-[48px] lg:text-[60px] font-light leading-none">
              Why work with us
            </h2>

            {/* Progress Bar */}
            <div className="mt-6 mb-8">
              <div className="relative h-[2px] bg-[#D7CBAE] overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#31304A] transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            {/* Intro */}
            <h2 className="max-w-[1100px] pl-20 uppercase text-[#555555] text-[14px] md:text-[16px] lg:text-[30px] leading-[24px] mb-8">
             We Are: Builders
            </h2>

            {/* Items */}
            <div className="space-y-5 lg:space-y-6 lg:pl-20">

              {items.map((item, index) => {
                const active = index === activeIndex;

                return (
                  <div key={index}>
                    <h3
                      className={`
                        text-[18px]
                        md:text-[20px]
                        lg:text-[22px]
                        font-semibold
                        tracking-wide
                        transition-all
                        duration-500
                        ${
                          active
                            ? "text-[#31304A]"
                            : "text-[#B8B8B8]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-in-out
                        ${
                          active
                            ? "max-h-[200px] opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p className="max-w-[900px] text-[14px] md:text-[16px] lg:text-[18px] leading-[180%] text-[#555555]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}