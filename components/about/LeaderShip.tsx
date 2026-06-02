"use client";

import { useState } from "react";
import Image, {
  StaticImageData,
} from "next/image";

import founder1 from "@/assets/about/FounderSample.jpg";
import founder2 from "@/assets/about/FounderSample.jpg";

type Leader = {
  name: string;
  role: string;
  image: StaticImageData;
  subHeading: string;
  description: string;
};

const leaders: Leader[] = [
  {
    name: "Bill",
    role: "Managing Director",
    image: founder1,
    subHeading: "Founder's Note",
    description:
      "At Doss Realty, our vision is rooted in creating meaningful spaces that balance innovation, quality, and long-term value. Every development is thoughtfully planned to shape experiences that stand the test of time while building communities for tomorrow.",
  },
  {
    name: "Bill",
    role: "Managing Director",
    image: founder2,
    subHeading: "Leadership & Growth",
    description:
      "With a passion for excellence and strategic planning, our leadership team focuses on delivering projects that reflect trust, craftsmanship, and customer satisfaction through every stage of development.",
  },
];

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] =
    useState<Leader | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-20">
          <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className="font-heading text-[42px] md:text-[60px] leading-[95%] tracking-[-0.04em] text-[#1B2327]">
                Leadership
              </h2>

              <div className="mt-5 h-[1px] w-full bg-[#C8CDD2]" />

              <p className="mt-6 max-w-[420px] text-[18px] leading-[140%] text-[#404040]">
                At the heart of Doss Realty is a vision-driven team committed to shaping exceptional living spaces with purpose and precision. 
                Guided by deep market insight, thoughtful planning, and a passion for quality, 
                we create developments that reflect modern aspirations while standing the test of time.
              </p>

              <button className="mt-8 rounded-full font-bold bg-white px-8 py-4 shadow-md transition duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-6 sm:grid-cols-2">
              {leaders.map(
                (leader, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedLeader(
                        leader
                      )
                    }
                    className="group relative overflow-hidden bg-[#D9D9D9] text-left"
                  >
                    {/* Image */}
                    <div className="relative h-[450px]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Blur Content */}
                    <div className="absolute bottom-0 left-0 w-full bg-white/10 px-6 py-5 backdrop-blur-xl">
                      <h3 className="text-center text-[28px] font-semibold text-white">
                        {leader.name}
                      </h3>

                      <p className="text-center text-[20px] text-white/90">
                        {leader.role}
                      </p>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5"
          onClick={() =>
            setSelectedLeader(null)
          }
        >
          <div
            className="relative w-full max-w-[1100px] overflow-hidden rounded-[30px] bg-white"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              onClick={() =>
                setSelectedLeader(null)
              }
              className="absolute right-5 top-5 z-20 text-[32px]"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">

              {/* LEFT IMAGE */}
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={
                    selectedLeader.image
                  }
                  alt={
                    selectedLeader.name
                  }
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex items-center p-8 md:p-14">
                <div>
                  <p className="mb-4 text-[14px] uppercase tracking-[0.08em] text-[#00256A]">
                    {
                      selectedLeader.subHeading
                    }
                  </p>

                  <h2 className="font-heading text-[38px] md:text-[56px] leading-[95%] tracking-[-0.04em] text-[#111]">
                    {
                      selectedLeader.name
                    }
                  </h2>

                  <p className="mt-3 text-[18px] text-[#666]">
                    {
                      selectedLeader.role
                    }
                  </p>

                  <p className="mt-8 text-[16px] leading-[180%] text-[#444]">
                    {
                      selectedLeader.description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leadership;