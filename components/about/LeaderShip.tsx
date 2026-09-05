"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import founder1 from "@/assets/about/FounderSample.webp";
import founder2 from "@/assets/about/FounderSample.webp";

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
    description: `Varun V.P. – Managing Director Varun V.P. leads the strategic direction, product vision, and growth initiatives of Doss Realty. Holding a Bachelor of Engineering (Honours) in Engineering Business Management from the University of Warwick, United Kingdom, he combines entrepreneurial thinking with a deep passion for creating real estate that stands apart in quality, planning, and long-term relevance.
Prior to joining Doss Realty, Varun founded INGA, an investment-focused technology platform, reflecting his longstanding interest in innovation, markets, and business building. At Doss Realty, he focuses on shaping the company's development philosophy, strengthening its market position, and driving its evolution into a modern real estate institution.
He believes that superior developments are created through an uncompromising commitment to design, execution, and customer experience. His vision is to establish Doss Realty as a benchmark for thoughtfully planned communities and enduring value, setting a new standard for land development in India.`,
  },
  {
    name: "Guru V.P",
    role: "Managing Director",
    image: founder2,
    subHeading: "Leadership & Growth",
    description: `Guru V.P. oversees the financial strategy, investment philosophy, and long-term growth initiatives of Doss Realty. Holding a Bachelor of Arts (Honours) in Political Science from O.P. Jindal Global University, New Delhi, he brings a market-oriented perspective to the company's investment and expansion decisions.
Driven by a conviction that real estate should be approached as both a tangible asset class and a long-term wealth creation vehicle, Guru focuses on capital allocation, project viability, investment planning, and the financial foundations that support the company's expansion.
His approach emphasizes disciplined growth, value preservation, and the creation of enduring assets that appreciate across generations.`,
  },
];

const DESCRIPTION_PREVIEW_LENGTH = 450;

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!selectedLeader) return;

    const scrollY = window.scrollY;

    // Freeze page scroll when modal is open
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [selectedLeader]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el || !selectedLeader) return;
    if (window.innerWidth < 768) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      e.stopPropagation();

      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [selectedLeader]);

  const openLeader = (leader: Leader) => {
    setIsExpanded(false);
    setSelectedLeader(leader);
  };

  const closeLeader = () => setSelectedLeader(null);

  return (
    <>
      <section data-theme="light" className="py-2 md:py-6 lg:py-14">
        <div className="mx-auto px-5 md:px-20">
          <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="font-heading text-[30px] leading-[65px] tracking-normal lg:text-[60px] lg:leading-[95%] lg:tracking-[-0.04em] text-[#1B2327]">
                Leadership
              </h2>

              <div className="mt-2 lg:mt-4 h-[1px] w-full bg-[#C8CDD2]" />
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
                  <div className="relative h-[388px] md:h-[420px] lg:h-[450px]">
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
                    <h3 className="text-center leading-[23px] lg:leading-none text-[16px] lg:text-[28px] font-semibold text-white">
                      {leader.name}
                    </h3>

                    <p className="text-center leading-[16px] lg:leading-[30px] text-[13px] lg:text-[20px] text-white/90">
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
            fixed
            inset-0
            z-[999]
            bg-black/60
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-3
            sm:p-6
            md:p-0
            overflow-hidden
          "
          onClick={closeLeader}
        >
          <div
            data-modal
            className="
              relative
              w-full
              lg:max-h-[100dvh]
              max-h-[85dvh]
              md:h-screen
              bg-white
              rounded-[24px]
              sm:rounded-[28px]
              md:rounded-none
              flex
              flex-col
              overflow-y-auto
              md:overflow-hidden
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Close Button (Top Right) */}
            <button
              onClick={closeLeader}
              className="
                hidden
                md:flex
                absolute
                right-6
                top-6
                z-30
                w-10
                h-10
                items-center
                justify-center
                rounded-full
                bg-black/5
                hover:bg-black/10
                text-black
                text-[28px]
                font-light
                cursor-pointer
                transition-all
                leading-none
              "
              aria-label="Close modal"
            >
              ×
            </button>

            <div
              className="
                flex
                flex-col
                flex-1
                md:grid
                md:grid-cols-2
                md:h-full
                w-full
              "
            >
              {/* LEFT IMAGE */}
              <div
                className="
                  relative
                  w-full
                  h-[320px]
                  sm:h-[380px]
                  md:h-screen
                  shrink-0
                  bg-gray-100
                  rounded-t-[24px]
                  sm:rounded-t-[28px]
                  md:rounded-none
                  overflow-hidden
                "
              >
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Mobile Close Button (Top Right of Image) */}
                <button
                  onClick={closeLeader}
                  className="
                    md:hidden
                    absolute
                    top-4
                    right-4
                    z-30
                    w-9
                    h-9
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-black/50
                    hover:bg-black/70
                    active:scale-95
                    text-white
                    text-lg
                    font-light
                    backdrop-blur-md
                    cursor-pointer
                    transition-all
                    shadow-md
                  "
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* RIGHT CONTENT */}
              <div
                ref={contentRef}
                style={{
                  WebkitOverflowScrolling: "touch",
                }}
                className="
                  px-6
                  py-6
                  sm:px-10
                  sm:py-8
                  md:px-12
                  md:py-12
                  lg:px-16
                  lg:py-16
                  overflow-y-auto
                  md:h-full
                  md:scrollbar-thin
                  flex-1
                "
              >
                <div className="relative w-full pt-2 md:pt-4">
                  {/* Quote SVG */}
                  <svg
                    viewBox="0 0 170 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      w-[36px] md:w-[48px] lg:w-[56px]
                      h-auto
                      mb-4
                      pointer-events-none
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
                      mb-2
                      text-[12px]
                      lg:text-[15px]
                      uppercase
                      font-heading
                      font-[500]
                      leading-[100%]
                      tracking-wider
                      text-[#00256A]
                    "
                  >
                    {selectedLeader.role}
                  </p>

                  {/* Name */}
                  <h2
                    className="
                      font-wide
                      font-[700]
                      leading-[110%]
                      tracking-tight
                      uppercase
                      text-[22px]
                      sm:text-[28px]
                      lg:text-[38px]
                      text-[#1B2327]
                    "
                  >
                    {selectedLeader.name}
                  </h2>

                  {/* Description */}
                  <div className="mt-5 lg:mt-7">
                    <p className="text-[14px] sm:text-[15px] leading-[24px] lg:text-[17px] lg:leading-[1.8] text-[#333333] whitespace-pre-line font-normal">
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
                          text-[15px]
                          hover:underline
                          cursor-pointer
                          inline-block
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