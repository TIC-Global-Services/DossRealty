"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "@/components/reusable/BlogReveal";

import artisticEngineeringImg from "@/assets/blogs/blogPage/artisticImg.webp";

export default function ArtisticEngineering() {
  const paragraphs = [
    "The finest places are rarely defined by a single gesture. Their distinction emerges through the considered relationship between structure and landscape, proportion and movement, material and light.",
    
    "This is the principle behind Artistic Engineering.",

    "In real estate, engineering is often understood through performance alone: stability, efficiency, infrastructure, and durability. Art is treated separately, as an expression applied once the practical work is complete. Artistic Engineering rejects that separation.",

    "It brings imagination and technical discipline into the same process, allowing function and beauty to shape one another from the beginning.",

    "A well-designed development must first understand its setting. The character of the land, the direction of light, patterns of movement, surrounding infrastructure, and the needs of those who will inhabit it all inform the plan.",

    "Roads, entrances, open spaces, architecture, and landscape are not isolated components. They are composed as parts of one coherent experience.",

    "The value of this approach is often found in details that are felt before they are consciously noticed. The natural progression from entrance to home. The proportion of a street. The space between built forms. The way materials meet. The balance between privacy and community.",

    "Each decision contributes to the quiet order of the whole.",

    "Yet Artistic Engineering is not design for appearance alone. It recognises that beauty without performance is temporary.",

    "Materials must be selected for how they endure. Infrastructure must support everyday life with ease. Planning must remain relevant as communities and cities evolve.",

    "Craftsmanship, therefore, is not an ornamental final layer; it is the precision with which an idea is carried through every stage of execution.",

    "This discipline also creates lasting financial value. Thoughtful planning protects the character of a development, while strong engineering preserves its utility and quality over time.",

    "Together, they create assets capable of remaining desirable across changing tastes and generations.",

    "Artistic Engineering is ultimately a way of thinking. It asks more of every decision, insisting that the practical can be beautiful, that beauty can serve a purpose, and that real estate can offer more than ownership alone.",

    "At Doss Realty, it is the standard through which we seek to create places of distinctive character, enduring relevance, and timeless value.",
  ];

  return (
    <>
      <EnquiryBtn />

      <section className="pt-[110px] pb-16 md:pt-[140px] md:pb-20">
        <div className="mx-auto px-5 sm:px-6 lg:px-30">
          {/* Title */}
          <Reveal>
            <h1
              className="
                font-small
                text-[28px]
                leading-[1.1]
                tracking-[-0.5px]
                text-[#111111]
                sm:text-[36px]
                md:text-[52px]
                lg:text-[72px]
                lg:tracking-[-1.5px]
              "
            >
              What Artistic Engineering Means in Real Estate
            </h1>
          </Reveal>

          {/* Image */}
          <Reveal y={80} duration={2

          } scale>
            <div className="mt-8 flex justify-center md:mt-12">
              <Image
                src={artisticEngineeringImg}
                alt="What Artistic Engineering Means in Real Estate"
                priority
                className="
                  h-[220px]
                  w-full
                  md:max-w-[400px]
                  rounded-[4px]
                  object-cover
                  sm:h-[280px]
                  md:h-[350px]
                  lg:h-[400px]
                "
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="mt-8 space-y-4 md:mt-12 md:space-y-2">
            {paragraphs.map((paragraph, index) => (
              <Reveal
                key={index}
                delay={index * 0.03}
              >
                <p
                  className="
                    text-[15px]
                    leading-[28px]
                    text-[#4D4D4D]
                    sm:text-[16px]
                    md:text-[18px]
                    md:leading-[30px]
                  "
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Disclaimer */}
          <Reveal>
            <div className="mt-10 border-t border-[#E5E5E5] pt-6 md:mt-14 md:pt-8">
              <p
                className="
                  text-[13px]
                  leading-[24px]
                  text-[#777777]
                  md:text-[14px]
                  md:leading-[28px]
                "
              >
                Disclaimer: This article is for general informational
                purposes only and does not constitute legal, tax,
                financial, or investment advice. Readers should seek
                independent professional advice before making any
                property-related decision.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}