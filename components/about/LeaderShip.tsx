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
    name: "Varun V.P",
    role: "Managing Director",
    image: founder1,
    subHeading: "Founder's Note",
    description:"Varun V.P. leads the strategic direction, product vision, and growth initiatives of DOSS Realty. Holding a Bachelor of Engineering (Honours) in Engineering Business Management from the University of Warwick, United Kingdom, he combines entrepreneurial thinking with a deep passion for creating real estate that stands apart in quality, planning, and long-term relevance."},
{
    name: "Guru V.P",
    role: "Managing Director",
    image: founder2,
    subHeading: "Leadership & Growth",
    description:"Guru V.P. oversees the financial strategy, investment philosophy, and long-term growth initiatives of DOSS Realty. Holding a Bachelor of Arts (Honours) in Political Science from O.P. Jindal Global University, New Delhi, he brings a market-oriented perspective to the company's investment and expansion decisions." 
},
];

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] =
    useState<Leader | null>(null);

  return (
    <>
      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-[1440px] px-5 md:px-20">
          <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className="font-heading text-[42px] md:text-[60px] leading-[95%] tracking-[-0.04em] text-[#1B2327]">
                Leadership
              </h2>

              <div className="mt-5 h-[1px] w-full bg-[#C8CDD2]" />
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
            className="relative w-screen h-[500px] overflow-hidden bg-white"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              onClick={() =>
                setSelectedLeader(null)
              }
              className="absolute right-5 top-5 z-20 text-[40px]"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">

              {/* LEFT IMAGE */}
              <div className="relative h-[400px] md:h-screen">
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
            <div className="relative">

              <svg
                viewBox="0 0 170 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  absolute hidden md:block
                  -top-20
                  left-[-10px]
                  w-[60px]
                  h-auto
                  pointer-events-none
                  z-10
                "
              >
                <path
                  d="M35 22C35 9.8 44.8 0 57 0H76V31H62C58.1 31 55 34.1 55 38V54H91V120H35V22Z"
                  fill="#00256A"
                />
                <path
                  d="M112 22C112 9.8 121.8 0 134 0H153V31H139C135.1 31 132 34.1 132 38V54H168V120H112V22Z"
                  fill="#00256A"
                />
              </svg>

              <p className="mb-4 md:text-[16px] uppercase font-heading font-[300] leading-[100%] tracking-normal text-[#000000]">
                {selectedLeader.role}
              </p>

              <h2 className="font-wide font-[700] leading-[100%] tracking-normal uppercase text-[38px] md:text-[40px]">
                {selectedLeader.name}
              </h2>

              <p className="mt-8 text-[16px] md:text-[20px] font-regular tracking-normal leading-[28px%] text-[#00000080]">
                {selectedLeader.description}
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