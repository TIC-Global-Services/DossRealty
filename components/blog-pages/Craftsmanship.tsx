"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import KnowMoreBlogs from "../about/KnowMoreBlogs";

// import craftsmanshipImg from "@/assets/blogs/craftsmanship.jpg";

export default function Craftsmanship() {
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
            Where Craftsmanship Meets
            <br />
            Real Estate
          </h1>

          {/* Image
          <div className="mt-12">
            <Image
              src={craftsmanshipImg}
              alt="Where Craftsmanship Meets Real Estate"
              priority
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div> */}

          {/* Content */}
          <div className="mt-12 space-y-2">
            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Craftsmanship in real estate is often mistaken for finish
              alone. A polished surface, a striking entrance, or a
              carefully detailed façade may be the most visible expression
              of it, but true craftsmanship begins much earlier.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              It begins with judgement.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The judgement to understand the land before drawing upon it.
              To consider how light enters a space, how people move
              through a community, how materials will respond to time, and
              how every element contributes to the experience of living
              there.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              At DOSS, craftsmanship is approached as a discipline that
              brings planning, design, engineering, and execution into one
              considered whole. It is present in the proportion of a
              street, the placement of landscape, the clarity of
              circulation, and the quiet precision with which one surface
              meets another.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              These details matter because customers live with them every
              day.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A thoughtfully planned development creates greater ease of
              movement, stronger privacy, safer surroundings, and a more
              natural relationship between built space and open space.
              Well-selected materials require less intervention over time.
              Precise execution reduces inconsistencies, improves
              durability, and allows the development to age with dignity
              rather than simply appear complete at handover. Craftsmanship also creates emotional value.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              There is a difference between entering a place that has been
              assembled and one that has been composed. The latter feels
              calm, coherent, and instinctively right. Its quality is not
              announced through excess; it is understood through balance,
              restraint, and the sense that nothing has been left
              unresolved.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              For the customer, this translates into more than visual
              distinction. It means living in a place that functions with
              greater ease, holds its character for longer, and remains
              relevant as lifestyles evolve.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              It also supports long-term asset value, because developments
              shaped with care tend to preserve their appeal beyond the
              first impression.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              In this sense, craftsmanship is not an added luxury. It is
              a form of responsibility.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              It protects the customer’s experience, the integrity of the
              development, and the value carried forward to the next
              generation.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              This is the principle behind Artistic Engineering at DOSS:
              bringing creativity and technical discipline together to
              create places where beauty performs, details endure, and
              every decision has a purpose.
            </p>
          </div>
        </div>
      </section>

      <KnowMoreBlogs />
    </>
  );
}