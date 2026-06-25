"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useLenis } from "@/lib/lenis-context";

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
    description: `Varun V.P. – Managing Director Varun V.P. leads the strategic direction, product vision, and growth initiatives of DOSS Realty. Holding a Bachelor of Engineering (Honours) in Engineering Business Management from the University of Warwick, United Kingdom, he combines entrepreneurial thinking with a deep passion for creating real estate that stands apart in quality, planning, and long-term relevance.
Prior to joining DOSS Realty, Varun founded INGA, an investment-focused technology platform, reflecting his longstanding interest in innovation, markets, and business building. At DOSS Realty, he focuses on shaping the company's development philosophy, strengthening its market position, and driving its evolution into a modern real estate institution.
He believes that superior developments are created through an uncompromising commitment to design, execution, and customer experience. His vision is to establish DOSS Realty as a benchmark for thoughtfully planned communities and enduring value, setting a new standard for land development in India.`,
  },
  {
    name: "Guru V.P",
    role: "Managing Director",
    image: founder2,
    subHeading: "Leadership & Growth",
    description: `Guru V.P. oversees the financial strategy, investment philosophy, and long-term growth initiatives of DOSS Realty. Holding a Bachelor of Arts (Honours) in Political Science from O.P. Jindal Global University, New Delhi, he brings a market-oriented perspective to the company's investment and expansion decisions.
Driven by a conviction that real estate should be approached as both a tangible asset class and a long-term wealth creation vehicle, Guru focuses on capital allocation, project viability, investment planning, and the financial foundations that support the company's expansion.
His approach emphasizes disciplined growth, value preservation, and the creation of enduring assets that appreciate across generations.`,
  },
];

const DESCRIPTION_PREVIEW_LENGTH = 450;

const Leadership = () => {
  const lenisRef = useLenis();

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedLeader) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenisRef.current?.stop();

  
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      lenisRef.current?.start();
    };
  }, [selectedLeader, lenisRef]);

  const openLeader = (leader: Leader) => {
    setIsExpanded(false);
    setSelectedLeader(leader);
  };

  const closeLeader = () => setSelectedLeader(null);

  return (
    <>
      <section data-theme="light" className="py-2 md:py-14">
        <div className="mx-auto max-w-[1440px] px-5 md:px-20">
          <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="font-heading text-[30px] leading-[65px] tracking-normal md:text-[60px] md:leading-[95%] md:tracking-[-0.04em] text-[#1B2327]">
                Leadership
              </h2>

              <div className="mt-2 md:mt-4 h-[1px] w-full bg-[#C8CDD2]" />
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-5 sm:grid-cols-2">
              {leaders.map((leader, index) => (
                <button
                  key={index}
                  onClick={() => openLeader(leader)}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-[#D9D9D9]
                    text-left
                    md:rounded-none
                    cursor-pointer
                  "
                >
                  {/* Image */}
                  <div className="relative h-[388px] sm:h-[420px] md:h-[450px]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Blur Content */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      w-full
                      bg-white/10
                      px-5 py-4
                      md:px-6 md:py-5 backdrop-blur-md
                      md:backdrop-blur-xl
                    "
                  >
                    <h3 className="text-center leading-[23px] md:leading-none text-[16px] md:text-[28px] font-semibold text-white">
                      {leader.name}
                    </h3>

                    <p className="text-center leading-[16px] md:leading-[30px] text-[13px] md:text-[20px] text-white/90">
                      {leader.role}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedLeader && (
        <div
          className="
            fixed inset-0
            z-[999]
            flex items-center justify-center
            bg-black/60
            p-5
          "
          onClick={closeLeader}
        >
          <div
            className="
              relative
              w-full
              md:w-screen
              h-[60vh]
              md:h-screen
              bg-white
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLeader}
              className="
                absolute
                right-4 top-4
                md:right-5 md:top-5
                z-20
                text-[32px]
                md:text-[40px]
                cursor-pointer
              "
            >
              ×
            </button>

            <div className="flex h-full gap-10 md:gap-0 flex-col md:grid md:grid-cols-2 md:h-full">
              {/* LEFT IMAGE */}
              <div className="relative h-[250px] md:h-screen flex-shrink-0">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div
                ref={contentRef}
                data-lenis-prevent
                className="
                  p-10
                  md:p-12
                  lg:p-16
                  flex-1
                  min-h-0
                  overflow-y-auto
                  overscroll-contain
                  scrollbar-thin
                  [-webkit-overflow-scrolling:touch]
                "
              >
                <div className="relative w-full">
                  {/* Quote SVG */}
                  <svg
                    viewBox="0 0 170 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                    absolute md:block w-[40px] -top-10 -left-[10px]
                    md:-top-15
                    md:left-[-10px]
                    md:w-[60px]
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

                  {/* Role */}
                  <p
                    className="
                    mb-3
                    text-[12px]
                    md:text-[16px]
                    uppercase
                    font-heading
                    font-[300]
                    leading-[100%]
                    tracking-normal
                    text-[#000000]
                  "
                  >
                    {selectedLeader.role}
                  </p>

                  {/* Name */}
                  <h2
                    className="
                    font-wide
                    font-[700]
                    leading-[100%]
                    tracking-normal
                    uppercase
                    text-[20px]
                    md:text-[40px]
                  "
                  >
                    {selectedLeader.name}
                  </h2>

                  {/* Description */}
                  <div className="mt-4 md:mt-8">
                    <p className="text-[13px] leading-[20px] md:text-[18px] font-small md:leading-[1.8] text-[#00000080] whitespace-pre-line">
                      {isExpanded
                        ? selectedLeader.description
                        : `${selectedLeader.description.slice(
                            0,
                            DESCRIPTION_PREVIEW_LENGTH
                          )}...`}
                    </p>

                    {selectedLeader.description.length >
                      DESCRIPTION_PREVIEW_LENGTH && (
                      <button
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className="
                          mt-5
                          text-[#00256A]
                          font-semibold
                          text-[16px]
                          hover:underline
                          cursor-pointer
                        "
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
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