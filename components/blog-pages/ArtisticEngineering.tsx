"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import KnowMoreBlogs from "../about/KnowMoreBlogs";

// import artisticEngineeringImg from "@/assets/blogs/artisticEngineering.jpg";

export default function ArtisticEngineering() {
  return (
    <>
      <EnquiryBtn />

      <section className="pt-[140px] pb-20">
        <div className="mx-auto max-w-[1100px] px-6">
          {/* Title */}
          <h1
            className="
              font-small
              text-[24px]
              md:leading-[1]
              md:tracking-[-1.5px]
              text-[#111111]
              md:text-[72px]
            "
          >
            What Artistic Engineering Means
            in Real Estate
          </h1>

          {/* Image
          <div className="mt-12">
            <Image
              src={artisticEngineeringImg}
              alt="What Artistic Engineering Means in Real Estate"
              priority
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div> */}

          {/* Content */}
          <div className="mt-12 space-y-2">
            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              The finest places are rarely defined by a single gesture.
              Their distinction emerges through the considered
              relationship between structure and landscape, proportion
              and movement, material and light.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              This is the principle behind Artistic Engineering.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              In real estate, engineering is often understood through
              performance alone: stability, efficiency, infrastructure,
              and durability. Art is treated separately, as an
              expression applied once the practical work is complete.
              Artistic Engineering rejects that separation.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              It brings imagination and technical discipline into the
              same process, allowing function and beauty to shape one
              another from the beginning.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              A well-designed development must first understand its
              setting. The character of the land, the direction of
              light, patterns of movement, surrounding infrastructure,
              and the needs of those who will inhabit it all inform the
              plan.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Roads, entrances, open spaces, architecture, and landscape
              are not isolated components. They are composed as parts of
              one coherent experience.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              The value of this approach is often found in details that
              are felt before they are consciously noticed. The natural
              progression from entrance to home. The proportion of a
              street. The space between built forms. The way materials
              meet. The balance between privacy and community.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Each decision contributes to the quiet order of the whole.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Yet Artistic Engineering is not design for appearance
              alone. It recognises that beauty without performance is
              temporary.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Materials must be selected for how they endure.
              Infrastructure must support everyday life with ease.
              Planning must remain relevant as communities and cities
              evolve.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Craftsmanship, therefore, is not an ornamental final
              layer; it is the precision with which an idea is carried
              through every stage of execution.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              This discipline also creates lasting financial value.
              Thoughtful planning protects the character of a
              development, while strong engineering preserves its
              utility and quality over time.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Together, they create assets capable of remaining
              desirable across changing tastes and generations.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              Artistic Engineering is ultimately a way of thinking. It
              asks more of every decision, insisting that the practical
              can be beautiful, that beauty can serve a purpose, and
              that real estate can offer more than ownership alone.
            </p>

            <p className="text-[18px] leading-[21px] md:leading-[34px] text-[#4D4D4D]">
              At DOSS Realty, it is the standard through which we seek
              to create places of distinctive character, enduring
              relevance, and timeless value.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-14 border-t border-[#E5E5E5] pt-8">
            <p className="text-[14px] leading-[28px] text-[#777777]">
              Disclaimer: This article is for general informational
              purposes only and does not constitute legal, tax,
              financial, or investment advice. Readers should seek
              independent professional advice before making any
              property-related decision.
            </p>
          </div>
        </div>
      </section>

      <KnowMoreBlogs />
    </>
  );
}