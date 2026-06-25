"use client";

import {
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Image, {
  StaticImageData,
} from "next/image";
import { motion } from "framer-motion";


import project1 from "@/assets/projects/projectImg1.jpg";
import project2 from "@/assets/projects/projectImg2.jpg";
import promiseParkImg from "@/assets/projects/promisePark/galleryImg1.png";
import metropettaiImg from "@/assets/projects/metropettai/galleryImg2.jpg";
import plotsIcon from "@/assets/projects/plotImg.png";
import acreIcon from "@/assets/projects/mapImg.png";
import villaIcon from "@/assets/projects/villaIcon.png";


type Project = {
  title: string;
  image: StaticImageData;

  // Active Projects
  text1?: string;
  text2?: string;

  // Delivered Projects
  location?: string;
  size?: string;
  category?: string;
  plotsIcon?: StaticImageData;
  acreIcon?: StaticImageData;
};

const activeProjects: Project[] = [
  {
    title: "Promise Park",
    text1:
      "From ₹15L Onwards in Kanchipuram",
    text2:
      "Indulge in the Divine Aura of Kanchipuram, Alluring Plots from 443 to 2348 SQFT",
    image: promiseParkImg,
  },
  {
    title: "Metropettai",
    text1:
      "From ₹45L Onwards in  Poonamallee, chennai",
    text2:
      "Connected West Chennai address with  luxury plots from 711 to 2,400 SQFT",
    image: metropettaiImg,
  }
];

const deliveredProjects: Project[] = [
  {
    title: "VV Nagar",
    location: "Kovur",
    size: "2.5 Acres",
    category: "Plots",
    image: project1,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Anjanayar Avenue",
    location: "Mangadu",
    size: "1 Acre",
    category: "Plots",
    image: project2,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Poonamallee Farms",
    location: "Avadi",
    size: "20 Acres",
    category: "Villas",
    image: project1,
    plotsIcon: villaIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Samayapuram",
    location: "Kundrathur",
    size: "17 Acres",
    category: "Plots",
    image: project2,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Everest Garden",
    location: "Porur",
    size: "18 Acres",
    category: "Plots",
    image: project1,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Sri Vari Nagar",
    location: "Poonamalle",
    size: "9 Acres",
    category: "Plots",
    image: project2,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Golden Avenue",
    location: "Kundrathur",
    size: "4 Acres",
    category: "Plots",
    image: project1,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
  {
    title: "Hari Avenue",
    location: "Mangadu",
    size: "4 Acres",
    category: "Plots",
    image: project2,
    plotsIcon: plotsIcon,
    acreIcon: acreIcon,
  },
];

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("active");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab");

  if (tab === "active" || tab === "delivered") {
    setActiveTab(tab);
  }
}, []);

  const [
    showAllDelivered,
    setShowAllDelivered,
  ] = useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  // Detect mobile
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkScreen();

    window.addEventListener(
      "resize",
      checkScreen
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkScreen
      );
  }, []);

  // Reset when tab changes
  useEffect(() => {
    setShowAllDelivered(false);
  }, [activeTab]);

  // Projects logic
  const projects =
    activeTab === "active"
      ? activeProjects
      : isMobile &&
        !showAllDelivered
        ? deliveredProjects.slice(0, 4)
        : deliveredProjects;

  return (
    <section data-theme="light" className="py-10 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        {/* TOGGLE */}
        <div className="mb-14 flex justify-center">
          <div
            className="
              flex
              items-center
              rounded-full
              bg-white
              p-1.5
              shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            "
          >
            <button
              onClick={() =>
                setActiveTab("active")
              }
              className={`
                rounded-full px-15 py-2.5
                md:px-8
                md:py-3
                text-[13px]
                md:text-[15px]
                transition-all
                duration-300
                cursor-pointer
                ${activeTab ===
                  "active"
                  ? "bg-[#00256A] text-white"
                  : "text-[#999]"
                }
              `}
            >
              Active
            </button>

            <div className="mx-4 h-5 w-[1px] bg-[#E5E5E5]" />

            <button
              onClick={() =>
                setActiveTab(
                  "delivered"
                )
              }
              className={`
                rounded-full px-15 py-2.5
                md:px-8
                md:py-3
                text-[13px]
                md:text-[15px]
                transition-all
                duration-300
                cursor-pointer
                ${activeTab ===
                  "delivered"
                  ? "bg-[#00256A] text-white"
                  : "text-[#999]"
                }
              `}
            >
              Delivered
            </button>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map(
            (project, index) => {
              const isClickable =
                project.title ===
                "Metropettai" ||
                project.title ===
                "Promise Park";

              return (
                <Link
                  key={index}
                  href={
                    project.title ===
                      "Metropettai"
                      ? "/projects/metropettai"
                      : project.title ===
                        "Promise Park"
                        ? "/projects/promise-park"
                        : "#"
                  }
                  className={
                    !isClickable
                      ? "pointer-events-none"
                      : ""
                  }
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 100,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      delay:
                        index * 0.12,
                      ease: "easeOut",
                    }}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[10px]
                      md:aspect-[16/9]
                      ${isClickable
                        ? "cursor-pointer"
                        : "cursor-default"
                      }
                    `}
                  >
                    {/* IMAGE */}
                    <div className="relative h-[300px] overflow-hidden md:h-[370px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* TOP BADGES */}
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        z-20
                        flex
                        w-full
                        items-center
                        justify-between
                        p-5
                      "
                    >
                      <div className="flex items-center gap-2 px-4 py-2">
                        <span
                          className={`
                            h-2
                            w-2
                            rounded-full
                            ${activeTab ===
                              "active"
                              ? "bg-yellow-400"
                              : "bg-green-500"
                            }
                          `}
                        />

                        <span className="text-[13px] leading-[18px] md:text-[14px] text-white">
                          {activeTab ===
                            "active"
                            ? "Active"
                            : "Delivered"}
                        </span>
                      </div>

                      <button
                        className="
                          h-[44px]
                          rounded-full
                          border
                          border-white/20
                          bg-[rgba(255,255,255,0.10)]
                          px-5.5
                          text-[13px]
                          tracking-wide
                          text-white
                          backdrop-blur-[20px]
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]
                          transition
                          duration-300
                          hover:bg-white/20
                          md:text-[16px]
                          cursor-pointer
                        "
                      >
                        {activeTab === "active"
                          ? "Villas"
                          : project.category}
                      </button>
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 z-[2] w-full">
                      <div className="relative flex w-full items-end overflow-hidden">
                        <div className="absolute inset-0 z-0 overflow-hidden">
                          <div
                            className="absolute inset-0"
                            style={{
                              backdropFilter: "blur(20px)",
                              WebkitBackdropFilter: "blur(20px)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.25) 30%, rgba(0,0,0,1) 100%)",
                              maskImage:
                                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.25) 30%, rgba(0,0,0,1) 100%)",
                            }}
                          />

                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(155.23deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.55) 100%, rgba(0,0,0,0.63) 100%)",
                            }}
                          />
                        </div>

                        <div className="relative z-[2] w-full py-6 md:py-8">
                          <div className="px-5 md:px-8">
                            {activeTab === "active" ? (
                              <>
                                <h3 className="text-[13px] text-white md:text-[26px]">
                                  {project.title}
                                </h3>

                                <div className="max-w-[500px]">
                                  <p className="text-[11px] md:text-[13px] leading-[15px] text-white font-semibold">
                                    {project.text1}
                                  </p>

                                  <p className="text-[11px] md:text-[13px] leading-[15px] text-white/80 font-[300]">
                                    {project.text2}
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  {/* Title + Location */}
                                  <div className="flex flex-wrap items-center gap-4">
                                    <h3
                                      className="
                                      text-[24px]
                                      md:text-[34px]
                                      font-[400]
                                      leading-none
                                      text-white
                                    "
                                    >
                                      {project.title}
                                    </h3>

                                    <span
                                      className="
                                      inline-flex
                                      items-center
                                      rounded-full
                                      border
                                      border-white
                                      px-6
                                      py-1.5
                                      text-[12px]
                                      md:text-[14px] leading-[16px]
                                      text-white
                                    "
                                    >
                                      {project.location}
                                    </span>
                                  </div>

                                  {/* Icons */}
                                  <div className="mt-3 flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                      <Image
                                        src={project.plotsIcon!}
                                        alt="Plots"
                                        width={20}
                                        height={20}
                                      />

                                      <span
                                        className="
                                        text-[13px]
                                        md:text-[13px] leading-[15px]
                                        text-white
                                      "
                                      >
                                        plots
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                      <Image
                                        src={project.acreIcon!}
                                        alt="Acre"
                                        width={20}
                                        height={20}
                                      />

                                      <span
                                        className="
                                        text-[13px]
                                        md:text-[13px] leading-[15px]
                                        text-white
                                      "
                                      >
                                        {project.size}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            }
          )}
        </div>

        {/* MOBILE VIEW MORE */}
        {activeTab ===
          "delivered" &&
          isMobile &&
          !showAllDelivered &&
          deliveredProjects.length >
          4 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() =>
                  setShowAllDelivered(
                    true
                  )
                }
                className="
                  rounded-full
                  bg-[#00256A]
                  px-6
                  py-3
                  text-[14px]
                  text-white
                  transition
                  duration-300
                  hover:opacity-90
                "
              >
                View More
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default ProjectSection;