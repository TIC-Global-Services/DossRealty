"use client";

import { useState } from "react";
import Image, {
    StaticImageData,
} from "next/image";

import project1 from "@/assets/projects/projectImg1.jpg";
import project2 from "@/assets/projects/projectImg2.jpg";

type Project = {
    title: string;
    description: string;
    image: StaticImageData;
};

const activeProjects: Project[] = [
    {
        title: "Serene Grove Villas",
        description:
            "Serene Grove Villas is an exclusive residential enclave designed around peaceful living, modern architecture, and lush natural surroundings.",
        image: project1,
    },
    {
        title: "The Palms Residences",
        description:
            "The Palms Residences is a premium residential community inspired by tropical living and contemporary design.",
        image: project2,
    },
];

const deliveredProjects: Project[] = [
    {
        title: "Green Valley Homes",
        description:
            "A completed residential project designed for modern family living.",
        image: project1,
    },
    {
        title: "Skyline Residency",
        description:
            "Luxury urban residences with timeless architecture and comfort.",
        image: project2,
    },
];

const ProjectSection = () => {
    const [activeTab, setActiveTab] =
        useState("active");

    const projects =
        activeTab === "active"
            ? activeProjects
            : deliveredProjects;

    return (
        <section className="py-16 md:py-24">
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
                                setActiveTab(
                                    "active"
                                )
                            }
                            className={`
                rounded-full
                px-8
                py-3
                text-[15px]
                transition-all
                duration-300
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
                rounded-full
                px-8
                py-3
                text-[15px]
                transition-all
                duration-300
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
                <div className="grid gap-5 lg:grid-cols-2">
                    {projects.map(
                        (project, index) => (
                            <div
                                key={index}
                                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[18px]
                "
                            >
                                {/* IMAGE */}
                                <div className="relative h-[320px] md:h-[470px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={
                                            project.title
                                        }
                                        fill
                                        className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                                    />
                                </div>

                                {/* GRADIENT */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                                {/* FULL OVERLAY */}
                                <div
                                    className="
                                    absolute
                                    bottom-0
                                    left-0
                                    z-10
                                    w-full
                                    bg-gradient-to-t
                                    from-black/85
                                    via-black/50
                                    to-transparent
                                    px-5
                                    py-6
                                    md:px-8
                                    md:py-8
                                  "
                                >
                                    <h3
                                        className="
                                      font-heading
                                      text-[24px]
                                      md:text-[38px]
                                      text-white
                                      leading-[100%]
                                    "
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className="
                                      mt-2
                                      max-w-[520px]
                                      text-[13px]
                                      md:text-[15px]
                                      leading-[160%]
                                      text-white/80
                                    "
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProjectSection;