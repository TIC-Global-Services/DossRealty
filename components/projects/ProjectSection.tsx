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

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
};

const activeProjects: Project[] = [
  {
    title: "Promise Park",
    description:
      "Located on the Kanchi–Arakkonam Highway in the heart of Kanchipuram, this ready-to-build community offers approved plots, completed infrastructure, and easy access to schools, hospitals, temples, and everyday conveniences. With a familiar location and a strong foundation in place, it provides the perfect setting to build your future with confidence.",
    image: project1,
  },
  {
    title: "Metropettai",
    description:
      "Metropettai is a well-connected modern community strategically located near the upcoming Metro corridor, Chennai–Bengaluru Highway, and Outer Ring Road. Surrounded by key employment hubs, educational institutions, and growing infrastructure, it offers seamless access, everyday convenience, and strong long-term value.",
    image: project2,
  },
];

const deliveredProjects: Project[] = [
  {
    title: "VV Nagar",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project1,
  },
  {
    title: "Anjanayar Avenue",
    description:
      "The Palms Residences is a premium residential community inspired by tropical living and contemporary design.",
    image: project2,
  },
  {
    title: "Poonamallee Farms",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project1,
  },
  {
    title: "Samayapuram",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project2,
  },
  {
    title: "Everest Garden",
    description:
      "A premium neighborhood developed with quality infrastructure and long-term investment value.",
    image: project1,
  },
  {
    title: "Sri Vari Nagar",
    description:
      "The Palms Residences is a premium residential community inspired by tropical living and contemporary design.",
    image: project2,
  },
  {
    title: "Golden Avenue",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project1,
  },
  {
    title: "Hari Avenue",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project1,
  },
];

const ProjectSection = () => {
  const [activeTab, setActiveTab] =
    useState("active");

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
    <section className="py-10 md:py-12">
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
                ${
                  activeTab ===
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
                ${
                  activeTab ===
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
        <div className="grid gap-5 lg:grid-cols-2">
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
                      ${
                        isClickable
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
                            ${
                              activeTab ===
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
                        "
                      >
                        {activeTab ===
                        "active"
                          ? "Villas"
                          : "Plots"}
                      </button>
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 z-[2] w-full">
                      <div className="relative flex md:min-h-[145px] w-full items-end overflow-hidden">
                        <div className="absolute inset-0 z-0 overflow-hidden">
                          <div
                            className="absolute inset-0"
                            style={{
                              backdropFilter:
                                "blur(5px)",
                              WebkitBackdropFilter:
                                "blur(5px)",
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
                            <h3 className="text-[13px] text-white md:text-[26px]">
                              {
                                project.title
                              }
                            </h3>

                            <p className="mt-2 w-[54ch] md:max-w-[500px] md:w-[60ch] text-[11px] md:text-[13px] leading-[15px] text-[#FFFFFF80] font-[300]">
                              {
                                project.description
                              }
                            </p>
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