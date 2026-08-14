"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "../reusable/BlogReveal";

import craftsmanshipImg from "@/assets/blogs/blogPage/craftmanshipImg.webp";

export default function Craftsmanship() {
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
              Where Craftsmanship Meets
              Real Estate
            </h1>
          </Reveal>

          <Reveal y={80}>
            <div className="mt-8 md:mt-12">
              <Image
                src={craftsmanshipImg}
                alt="Where Craftsmanship Meets Real Estate"
                priority
                className="md:max-w-[800px]
                  md:h-[400px]
                  w-full h-[200px]
                  rounded-[4px]
                  object-cover
                "
              />
            </div>
          </Reveal>

          <div className="mt-8 space-y-2 md:mt-12">

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                Craftsmanship in real estate is often mistaken for finish
                alone. A polished surface, a striking entrance, or a
                carefully detailed façade may be the most visible expression
                of it, but true craftsmanship begins much earlier.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                It begins with judgement.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                The judgement to understand the land before drawing upon it.
                To consider how light enters a space, how people move
                through a community, how materials will respond to time, and
                how every element contributes to the experience of living
                there.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                At DOSS, craftsmanship is approached as a discipline that
                brings planning, design, engineering, and execution into one
                considered whole. It is present in the proportion of a
                street, the placement of landscape, the clarity of
                circulation, and the quiet precision with which one surface
                meets another.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                These details matter because customers live with them every
                day.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                A thoughtfully planned development creates greater ease of
                movement, stronger privacy, safer surroundings, and a more
                natural relationship between built space and open space.
                Well-selected materials require less intervention over time.
                Precise execution reduces inconsistencies, improves
                durability, and allows the development to age with dignity
                rather than simply appear complete at handover.
                Craftsmanship also creates emotional value.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                There is a difference between entering a place that has been
                assembled and one that has been composed. The latter feels
                calm, coherent, and instinctively right. Its quality is not
                announced through excess; it is understood through balance,
                restraint, and the sense that nothing has been left
                unresolved.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                For the customer, this translates into more than visual
                distinction. It means living in a place that functions with
                greater ease, holds its character for longer, and remains
                relevant as lifestyles evolve.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                It also supports long-term asset value, because developments
                shaped with care tend to preserve their appeal beyond the
                first impression.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                In this sense, craftsmanship is not an added luxury. It is
                a form of responsibility.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                It protects the customer’s experience, the integrity of the
                development, and the value carried forward to the next
                generation.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                This is the principle behind Artistic Engineering at DOSS:
                bringing creativity and technical discipline together to
                create places where beauty performs, details endure, and
                every decision has a purpose.
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