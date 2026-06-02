"use client";

import { useState } from "react";

const faqData = [
  {
    question:
      "What does Doss Realty specialize in?",
    answer:
      "We specialize in premium residential and commercial developments designed with modern architecture, functionality, and long-term value.",
  },
  {
    question:
      "Why choose Doss Realty?",
    answer:
      "We focus on quality craftsmanship, strategic planning, and customer satisfaction to create spaces that inspire better living.",
  },
  {
    question:
      "Do you assist with property investments?",
    answer:
      "Yes, we help clients identify investment opportunities aligned with long-term growth and value.",
  },
  {
    question:
      "How does your project process work?",
    answer:
      "Our process includes planning, consultation, design, execution, and seamless project delivery with continuous client support.",
  },
];

const KnowMoreBlogs = () => {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(3);

  const toggleAccordion = (
    index: number
  ) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
    <section className="md:px-10 py-16 md:py-14">
      <div className="mx-auto max-w-[1440px] rounded-[40px] bg-[#FEF9F380] px-5 md:px-14 md:py-20">

        <div className="grid gap-14 lg:grid-cols-[58%_42%] md:items-center md:mx-20">

          {/* LEFT SIDE FAQ */}
          <div className="space-y-4">

            {faqData.map(
              (item, index) => {
                const isOpen =
                  activeIndex ===
                  index;

                return (
                  <div
                    key={index}
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        toggleAccordion(
                          index
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-[24px]
                        border
                        border-[#E2E2E2]
                        bg-white
                        px-4
                        py-4
                        text-left
                        transition
                      "
                    >
                      <span
                        className="
                          text-[18px]
                          md:text-[18px]
                          font-medium
                          text-[#222]
                        "
                      >
                        {
                          item.question
                        }
                      </span>

                      <span className="text-[28px] text-[#222]">
                        {isOpen
                          ? "−"
                          : "+"}
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? "max-h-[200px] mt-3"
                            : "max-h-0"
                        }
                      `}
                    >
                      <div
                        className="
                          rounded-[24px]
                          bg-[#DED1AD]
                          px-8
                          py-7
                        "
                      >
                        <p
                          className="
                            text-[18px]
                            md:text-[18px]
                            leading-[150%]
                            text-[#111]
                            font-medium
                          "
                        >
                          {
                            item.answer
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pl-10">
            <h2
              className="
                font-heading
                text-[24px]
                md:text-[48px]
                leading-[90%]
                tracking-[-0.05em]
                text-[#00256A]
              "
            >
              Know more
              <br />
              about Blogs
            </h2>

            <p
              className="
                mt-5
                max-w-[420px]
                text-[16px]
                leading-[160%]
                text-[#666]
              "
            >
              Insights, ideas, and stories
              crafted to inspire, inform,
              and spark new perspectives.
            </p>

            <button
              className="
                mt-8
                rounded-full
                bg-[#00256A]
                px-10
                py-4
                text-white
                transition
                duration-300
                hover:scale-105
              "
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KnowMoreBlogs;