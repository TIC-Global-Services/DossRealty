"use client";

import Image from "next/image";

import solarImg from "@/assets/projects/metropettai/homeImg.png";
import indoorImg from "@/assets/projects/metropettai/tennisImg.png";
import kidsImg from "@/assets/projects/metropettai/wheelImg.png";
import walkingImg from "@/assets/projects/metropettai/walkImg.png";
import securityImg from "@/assets/projects/metropettai/shieldImg.png";
import waterImg from "@/assets/projects/metropettai/swimImg.png";

const amenities = [
  {
    title: "Solar Lights",
    image: solarImg,
  },
  {
    title: "Compound Wall",
    image: indoorImg,
  },
  {
    title: "Children's \n Park",
    image: kidsImg,
  },
  {
    title: "Walking &\nJogging Track",
    image: walkingImg,
  },
  {
    title: "24/7 Security",
    image: securityImg,
  },
  {
    title: "Domestic Water\nProvision",
    image: waterImg,
  },
];

const Highlights = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div
          className="
            rounded-[32px]
            bg-[#C7A85E1A]
            px-5
            py-10
            shadow-[0_4px_20px_rgba(0,0,0,0.03)]
            md:px-10
            md:py-20
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-y-10
              md:grid-cols-3
              lg:grid-cols-6
            "
          >
            {amenities.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-4
                  text-center
                "
              >
                {/* Divider */}
                {index !== amenities.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-[110px]
                      w-[1px]
                      -translate-y-1/2
                      bg-[#DED9D0]
                      lg:block
                    "
                  />
                )}

                {/* Circle Shape */}
                <div className="relative flex h-[68px] w-[68px] items-center justify-center">
                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-full
                      bg-[#D8BB72]
                      [clip-path:polygon(0_0,100%_0,100%_0%,0%_100%,0_100%)]
                      ${index === 3 || index === 5 ? "rotate-180" : ""}
                    `}
                  />
                
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="relative z-10 object-contain"
                  />
                </div>

                {/* Title */}
                <p
                  className="
                    mt-5
                    whitespace-pre-line
                    text-[13px]
                    font-medium
                    leading-[16px]
                    text-[#2A2A2A]
                    lg:text-[19px]
                    lg:leading-[26px]
                    lg:tracking-normal
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;