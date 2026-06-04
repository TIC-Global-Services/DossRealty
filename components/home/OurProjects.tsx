"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import project1 from "@/assets/home/project1.jpg";
import project2 from "@/assets/home/project2.jpg";

const projects = [
  {
    title: "Serene Grove Villas",
    description:
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
    image: project1,
    href: "/projects/luxury-villa",
  },
  {
    title: "Signature Villa Community",
    description:
      "An exclusive collection of premium villas designed to offer modern comfort, elegant architecture, and a vibrant community lifestyle.",
    image: project2,
    href: "/projects/premium-urban",
  },
];

export default function OurProjects() {
  return (
    <section
      className="
        pt-[10px]
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
            mb-16
          "
        >
          <h2
            className="
              text-[42px]
              md:text-[60px]
              font-heading
              tracking-[-0.04em]
              text-[#111111]
            "
          >
            Recognized for Project Excellence
          </h2>

          <Link href="/projects">
            <button className="mt-0 rounded-full font-bold bg-white px-8 py-4 shadow-md transition duration-300 hover:scale-105">
                View Projects
              </button>
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
              <Link href={project.href}>
                <div
                  className="
                    relative
                    h-[500px]
                    overflow-hidden
                    cursor-pointer
                    group
                  "
                >
                  {/* IMAGE */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

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
                        md:min-h-[165px]
                        overflow-hidden
                        flex
                        items-end
                      "
                    >
                      {/* FIGMA BACKGROUND */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* REAL BLUR */}
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

                        {/* GRADIENT TINT */}
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
                          md:py-8
                        "
                      >
                        <div
                          className="
                            max-w-[1440px]
                            mx-auto
                            px-5
                            md:px-20
                          "
                        >
                          <div className="max-w-[550px]">
                            <h3
                              className=" font-regular
                                text-white
                                text-[18px]
                                md:text-[26px]
                                font-light
                                leading-[18px]
                                mb-4
                              "
                            >
                              {project.title}
                            </h3>

                            <p
                              className="font-body font-light w-[42ch]
                                text-[#FFFFFF80]
                                text-[15px]
                                md:text-[14px]
                                leading-[15px]
                              "
                            >
                              {project.description}
                            </p>
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

