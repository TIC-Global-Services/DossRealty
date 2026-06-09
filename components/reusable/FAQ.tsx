"use client";

import { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionSectionProps = {
  faqData: FAQItem[];

  heading: string;
  description: string;

  buttonText?: string;
  buttonAction?: () => void;

  defaultOpenIndex?: number;

  bgColor?: string;
  answerBgColor?: string;
};

const FAQ = ({
  faqData,
  heading,
  description,
  buttonText = "Contact Us",
  buttonAction,
  defaultOpenIndex = 0,
  bgColor = "#FEF9F380",
  answerBgColor = "#DED1AD",
}: AccordionSectionProps) => {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(
      defaultOpenIndex
    );

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
    <section className="py-16 md:px-10 md:py-12">
      <div
        className="
          mx-auto
          rounded-[40px]
          px-5
          md:px-14
          md:py-20
        "
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div
          className="
          grid
          gap-14
          md:mx-20
          lg:grid-cols-[58%_42%]
          lg:items-start
        "
        >
          {/* LEFT FAQ */}
          <div className="space-y-4">
            {faqData.map(
              (item, index) => {
                const isOpen =
                  activeIndex ===
                  index;

                return (
                  <div key={index}>
                    {/* Question */}
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
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="
                          text-[18px]
                          font-medium
                          text-[#222]
                        "
                      >
                        {
                          item.question
                        }
                      </span>

                      <span
                        className="
                          text-[28px]
                          text-[#222]
                          transition-transform
                          duration-300
                        "
                      >
                        {isOpen
                          ? "−"
                          : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-in-out
                        ${isOpen
                          ? "max-h-[300px] mt-3"
                          : "max-h-0"
                        }
                      `}
                    >
                      <div
                        className="
                          rounded-[24px]
                          px-8
                          py-7
                        "
                        style={{
                          backgroundColor:
                            answerBgColor,
                        }}
                      >
                        <p
                          className="
                            text-[18px]
                            font-medium
                            leading-[150%]
                            text-[#111]
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

          {/* RIGHT CONTENT */}
          <div
            className="
            lg:self-center
            lg:pl-10
          "
          >
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
              {heading}
            </h2>

            <p
              className="
              mt-5
              max-w-[420px]
              text-[16px]
              leading-[20px]
              text-[#717171ff]
            "
            >
              {description}
            </p>

            <PrimaryBtn
              onClick={buttonAction}
              className="text-[16px] font-[700] hover:text-black
                mt-8
                rounded-full
                border
                border-[rgba(199,168,94,1)]
                bg-[#00256A]
                text-white
                shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {buttonText}
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;