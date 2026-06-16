"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import icon1 from "@/assets/about/Img.png";
import icon2 from "@/assets/about/Img2.png";
import icon3 from "@/assets/about/Img3.png";

const stats = [
  {
    icon: icon1,
    value: 5000,
    suffix: "+",
    title: "Units delivered",
  },
  {
    icon: icon2,
    value: 54000,
    suffix: "+",
    title:
      "Units in progress and planning",
  },
  {
    icon: icon3,
    value: 100,
    suffix: "+ M SQFT",
    title:
      "Project area in planning and progress",
  },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section
      ref={ref}
      className="py-10 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-14 text-center sm:grid-cols-3 md:gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
              "
            >
              {/* ICON */}
              <div className="relative mb-5 h-[60px] w-[60px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* NUMBER */}
              <h2
                className="
                  text-[20px] leading-[38px] tracking-normal font-[300]
                  md:text-[44px]
                  md:font-semibold
                  md:leading-none
                  md:tracking-[-0.03em]
                  text-[#202020]
                "
              >
                {inView && (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    separator=","
                  />
                )}
                {item.suffix}
              </h2>

              {/* TEXT */}
              <p
                className="mt-2
                  md:mt-3 text-[16px] leading-[19px] tracking-normal
                  max-w-[300px]
                  md:text-[14px]
                  md:leading-[150%]
                  text-[#444]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;