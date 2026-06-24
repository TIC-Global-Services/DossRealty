"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import KnowMoreBlogs from "../about/KnowMoreBlogs";

// import developmentImg from "@/assets/blogs/development.jpg";

export default function Development() {
  return (
    <>
      <EnquiryBtn />

      <section className="pt-[140px] pb-20">
        <div className="mx-auto max-w-[1100px] px-6">
          {/* Title */}
          <h1
            className="
              font-small
              text-[40px]
              leading-[1]
              tracking-[-1.5px]
              text-[#111111]
              md:text-[72px]
            "
          >
            The Details That Make a
            Development Feel Considered
          </h1>

          {/* Image
          <div className="mt-12">
            <Image
              src={developmentImg}
              alt="The Details That Make a Development Feel Considered"
              priority
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div> */}

          {/* Content */}
          <div className="mt-12 space-y-4">
            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A considered development does not reveal itself through a
              single grand gesture. Its quality is understood gradually,
              through the sequence of decisions that shape how a place is
              entered, experienced, and remembered.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The first of these decisions is often the land itself.
              Orientation, access, surrounding infrastructure, prevailing
              light, and the character of the neighbourhood determine far
              more than appearance. They influence comfort, movement,
              privacy, and the long-term relevance of the development.
              Planning gives these elements order.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A well-composed masterplan creates a natural relationship
              between arrival, circulation, open space, landscape, and
              the built form. Roads feel proportionate rather than
              excessive. Entrances provide a sense of transition. Shared
              spaces are placed where they will be genuinely used.
              Privacy is preserved without weakening the feeling of
              community.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The distinction is equally present at a smaller scale.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              It is found in the alignment of an edge, the meeting of two
              materials, the weight of a gate, the rhythm of planting,
              and the way light moves across a surface through the day.
              None of these details needs to call attention to itself.
              Their value lies in creating a sense of ease and coherence.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Material selection also carries a responsibility beyond
              first impressions. A finish must be judged not only by how
              it appears when new, but by how it will weather, perform,
              and age.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              True quality is revealed over time, when materials retain
              their integrity and spaces continue to serve their purpose
              without unnecessary intervention.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Consideration extends to what is not immediately visible.
              Drainage, infrastructure, service access, security,
              documentation, and maintenance planning rarely feature in
              architectural imagery, yet they determine the confidence
              with which people inhabit and retain an asset.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              This is why a development can feel complete before every
              element has been consciously understood.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Its proportions are calm. Its movement is intuitive. Its
              details belong to one another. Nothing feels accidental.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              In a market where luxury is often communicated through
              scale or abundance, the more enduring distinction lies in
              restraint. It is the discipline to include what adds
              meaning, refine what remains, and remove what does not
              serve the whole.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              At DOSS Realty, we believe a considered development is one
              in which every decision carries purpose, from the reading
              of the land to the final expression of the place.
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