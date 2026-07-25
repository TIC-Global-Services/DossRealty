"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "../reusable/BlogReveal";

import developmentImg from "@/assets/blogs/blogPage/developmentImg.jpeg";

export default function Development() {
  return (
    <>
      <EnquiryBtn />

      <section className="pt-[110px] pb-16 md:pt-[140px] md:pb-20">
        <div className="mx-auto px-5 sm:px-6 lg:px-30">

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
              The Details That Make a
              Development Feel Considered
            </h1>
          </Reveal>

          <Reveal y={80}>
            <div className="mt-8 md:mt-12">
              <Image
                src={developmentImg}
                alt="The Details That Make a Development Feel Considered"
                priority
                className="
                  h-auto
                  w-full
                  rounded-[4px]
                  object-cover
                "
              />
            </div>
          </Reveal>

          <div className="mt-8 space-y-2 md:mt-12">

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                A considered development does not reveal itself through a
                single grand gesture. Its quality is understood gradually,
                through the sequence of decisions that shape how a place is
                entered, experienced, and remembered.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                The first of these decisions is often the land itself.
                Orientation, access, surrounding infrastructure, prevailing
                light, and the character of the neighbourhood determine far
                more than appearance. They influence comfort, movement,
                privacy, and the long-term relevance of the development.
                Planning gives these elements order.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                A well-composed masterplan creates a natural relationship
                between arrival, circulation, open space, landscape, and
                the built form. Roads feel proportionate rather than
                excessive. Entrances provide a sense of transition. Shared
                spaces are placed where they will be genuinely used.
                Privacy is preserved without weakening the feeling of
                community.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                The distinction is equally present at a smaller scale.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                It is found in the alignment of an edge, the meeting of two
                materials, the weight of a gate, the rhythm of planting,
                and the way light moves across a surface through the day.
                None of these details needs to call attention to itself.
                Their value lies in creating a sense of ease and coherence.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                Material selection also carries a responsibility beyond
                first impressions. A finish must be judged not only by how
                it appears when new, but by how it will weather, perform,
                and age.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                True quality is revealed over time, when materials retain
                their integrity and spaces continue to serve their purpose
                without unnecessary intervention.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                Consideration extends to what is not immediately visible.
                Drainage, infrastructure, service access, security,
                documentation, and maintenance planning rarely feature in
                architectural imagery, yet they determine the confidence
                with which people inhabit and retain an asset.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                This is why a development can feel complete before every
                element has been consciously understood.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                Its proportions are calm. Its movement is intuitive. Its
                details belong to one another. Nothing feels accidental.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                In a market where luxury is often communicated through
                scale or abundance, the more enduring distinction lies in
                restraint. It is the discipline to include what adds
                meaning, refine what remains, and remove what does not
                serve the whole.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                At Doss Realty, we believe a considered development is one
                in which every decision carries purpose, from the reading
                of the land to the final expression of the place.
              </p>
            </Reveal>

          </div>

          <Reveal>
            <div className="mt-16 border-t border-[#E5E5E5] pt-6 md:mt-24 md:pt-8">
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