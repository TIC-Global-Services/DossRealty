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
      "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
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
    <section className="my-24 overflow-hidden">
      <div className="w-full mx-auto">

        {/* Projects */}
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              <Link href={project.href}>
                <div className="relative h-[500px] overflow-hidden cursor-pointer group">

                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 z-[2] max-w-[500px]">

                    {/* Overlay only for text */}
                    <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-[28px] px-6 py-5">

                      <h3 className="text-white text-[32px] md:text-[44px] font-light leading-[100%] mb-4">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-[15px] md:text-[16px] leading-[150%]">
                        {project.description}
                      </p>

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