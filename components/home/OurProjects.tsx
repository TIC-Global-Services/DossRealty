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
      <div className="w-full mx-auto ">

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

          <Link href={"/projects"}>
            <button
              className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#111111]
              text-white
              px-8
              md:px-10
              py-4 md:py-6
              text-[15px]
              md:text-[16px]
              font-heading font-normal
              hover:scale-[1.03]
              hover:bg-[#222222]
              transition-all
              duration-300
              cursor-pointer
            "
            >
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

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/10 z-[1]" />

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      z-[2]
                      w-full
                    "
                  >
                    {/* FULL WIDTH OVERLAY */}
                    <div
                      className="
                      w-full
                      bg-black/20
                      backdrop-blur-md
                      border-t
                      border-white/20
                      py-5
                    "
                    >
                      {/* CONTENT CONTAINER */}
                      <div
                        className="
                        max-w-[1440px]
                        mx-auto
                        px-5
                        md:px-8
                      "
                      >
                        <div className="max-w-[550px]">
                          <h3
                            className="
                          text-white
                          text-[32px]
                          md:text-[44px]
                          font-light
                          leading-[100%]
                          mb-4
                        "
                          >
                            {project.title}
                          </h3>

                          <p
                            className="
                            text-white/80
                            text-[15px]
                            md:text-[16px]
                            leading-[150%]
                          "
                          >
                            {project.description}
                          </p>
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