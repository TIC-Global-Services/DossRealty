"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import project1 from "@/assets/home/project1.webp";
import project2 from "@/assets/home/project2.webp";

import PrimaryBtn from "../reusable/PrimaryBtn";

type Project = {
  title: string;

  // Same copy as the Active cards in ProjectSection.tsx
  text1?: string;
  text2?: string;

  mobileTitle?: string;

  image: any;
  mobileImage?: any;

  href: string;
};

const projects: Project[] = [
  {
    title: "Promises Park",
    text1: "From ₹15L Onwards in Kanchipuram",
    text2:
      "Indulge in the Divine Aura of Kanchipuram, Alluring Plots from 443 to 2348 SQFT",
    image: project1,
    href: "/projects/promise-park",
  },

  {
    title: "Metropettai",
    text1: "From ₹45L Onwards in  Poonamallee, chennai",
    text2:
      "Connected West Chennai address with  luxury plots from 711 to 2,400 SQFT",

    // Images
    image: project2,
    mobileImage: project2,

    href: "/projects/metropettai",
  },
];

export default function OurProjects() {
  return (
    <section data-theme="dark"
      className="
        mt-10
        md:pt-10
        overflow-hidden
      "
    >
      <div className="w-full mx-auto">

        {/* TOP CENTER HEADING */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-5
            md:px-10
            mb-10
          "
        >
          <h2
            className="
              text-[24px]
              lg:text-[48px]
              font-small font-[400]
              tracking-[-0.04em]
              text-black
            "
          >
            Recognized for Project Excellence
          </h2>

          <Link href="/projects">
            <PrimaryBtn mode="light" className="mt-5 !text-[13px] lg:!text-[16px] !w-[140px] !h-[40px] lg:!w-[160px] lg:!h-[44px] text-black transition duration-300 hover:scale-105">
              View Projects
            </PrimaryBtn>
          </Link>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.95,
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
                ease: "easeOut",
              }}
            >
              <Link href={project.href} className="block w-full">
                <div
                  className="
                    relative
                    h-[500px]
                    overflow-hidden
                    cursor-pointer
                    group
                  "
                >
                  {/* DESKTOP IMAGE */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      hidden
                      md:block
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* MOBILE IMAGE */}
                  <Image
                    src={
                      project.mobileImage ||
                      project.image
                    }
                    alt={project.title}
                    fill
                    className="
                      md:hidden
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* TOP OVERLAY */}
                  <div className="absolute top-15 left-15 right-15 z-[3] flex items-start justify-between">

                    {/* ACTIVE STATUS */}
                    <div
                      className="
                      flex items-center gap-2
                      lg:h-[40px]              
                    "
                    >
                      <span className="relative flex">
                        {/* solid dot */}
                        <span
                          className="
                          relative inline-flex
                          h-[5px] w-[5px]
                          rounded-full
                          bg-yellow-400
                        "
                        />
                      </span>

                      <span className="text-white text-[14px] font-light">
                        Active
                      </span>
                    </div>

                    {/* GLASS BUTTON */}
                    <div
                      className="h-[40px]
                      lg:h-[44px]
                      px-5.5
                      rounded-full
                      text-white text-[13px]
                      lg:text-[16px] tracking-wide
                      border border-white/20
                      bg-[rgba(255,255,255,0.10)]
                      backdrop-blur-[20px]
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]
                      transition duration-300
                      hover:bg-white/20
                      cursor-pointer
                      flex items-center justify-center
                    "
                    >
                      Plots
                    </div>
                  </div>

                  {/* CONTENT AREA */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      z-[2]
                      w-full
                    "
                  >
                    {/* GLASS CONTENT STRIP */}
                    <div
                      className="
                        relative
                        w-full
                        min-h-[145px]
                        lg:min-h-[165px]
                        overflow-hidden
                        flex
                        items-end
                      "
                    >
                      {/* BACKGROUND */}
                      <div className="absolute inset-0 z-0 overflow-hidden">

                        {/* BLUR */}
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

                        {/* GRADIENT */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              index === 0
                                ? `
                                  linear-gradient(
                                    155.23deg,
                                    rgba(0,0,0,0.08) 0%,
                                    rgba(0,0,0,0.55) 100%,
                                    rgba(0,0,0,0.75) 100%
                                  )
                                `
                                : `
                                  linear-gradient(
                                    155.23deg,
                                    rgba(0,0,0,0.1) 0%,
                                    rgba(0,0,0,0.63) 100%
                                  )
                                `,
                          }}
                        />
                      </div>

                      {/* CONTENT */}
                      <div
                        className="
                          relative
                          z-[2]
                          w-full
                          py-6
                          lg:py-8
                        "
                      >
                        <div
                          className="
                            mx-auto
                            px-5 md:px-8
                            lg:px-20
                          "
                        >
                          <div className="max-w-full">

                            {/* TITLE */}
                            <h3
                              className="font-small
                                text-white
                                text-[18px]
                                lg:text-[26px]
                                font-light
                                leading-[18px] mb-2
                                lg:mb-4
                              "
                            >
                              <span className="hidden md:inline">
                                {project.title}
                              </span>

                              <span className="md:hidden">
                                {project.mobileTitle ||
                                  project.title}
                              </span>
                            </h3>

                            {/* DESCRIPTION — same copy as ProjectSection text1/text2 */}
                            <div className="w-full">
                              <p
                                className="
                                  font-body
                                  font-semibold
                                  w-full
                                  text-white
                                  text-[14px]
                                  lg:text-[16px]
                                  leading-[20px]
                                "
                              >
                                {project.text1}
                              </p>

                              <p
                                className="
                                  font-body
                                  font-light
                                  w-full
                                  text-[#FFFFFF80]
                                  text-[14px]
                                  lg:text-[16px]
                                  leading-[20px]
                                  mt-1
                                "
                              >
                                {project.text2}
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}