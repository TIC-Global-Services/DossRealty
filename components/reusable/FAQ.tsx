"use client";

import { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { useRouter } from "next/navigation";

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionSectionProps = {
  faqData: FAQItem[];
  heading: React.ReactNode;
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
  bgColor = "#fef9f3",
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

  const router = useRouter();

  return (
    <section className="py-16 md:px-10 md:py-12">
      <div
        className="
          mx-auto
          rounded-[40px]
          px-5
          py-10
          md:px-14
          md:py-20
        "
        style={{
          backgroundColor:
            bgColor,
        }}
      >
        {/* Wrapper */}
        <div
          className="
            relative
            md:mx-20
          "
        >
          {/* LEFT FAQ */}
          <div className="space-y-4 md:w-[50%]">
            {faqData.map(
              (
                item,
                index
              ) => {
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
                        justify-between rounded-full
                        md:rounded-[24px]
                        border
                        border-[#E2E2E2]
                        bg-white px-2 py-2
                        md:px-4
                        md:py-4 
                        md:text-left
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="text-[13px]
                          md:text-[18px]
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
                      mt-3
                      overflow-hidden
                      transition-[max-height,opacity]
                      duration-500
                      ease-in-out
                      ${isOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
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
                          text-[13px]
                          md:text-[18px]
                          font-medium
                          leading-[150%]
                          text-[#111]
                        "
                        >
                          {item.answer}
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
              mt-14
              md:absolute
              md:right-0
              md:top-[80px]
              md:mt-0
              md:w-[42%]
            "
          >
            <h2
              className="tracking-normal
                md:w-[14ch]
                font-heading
                text-[24px]
                leading-[30px]
                md:tracking-[-0.05em]
                text-[#00256A]
                md:text-[48px]
                md:leading-[50px]
              "
            >
              {heading}
            </h2>

            <p
              className="
                mt-5
                max-w-[420px] text-[13px] leading-[20px] tracking-[-0.48px]
                md:text-[16px]
                md:leading-[20px]
                text-[#717171]
              "
            >
              {description}
            </p>

            <PrimaryBtn
                onClick={
                  buttonAction ??
                  (() => router.push("/contact"))
                }
                className="w-[140px] h-[40px] md:w-[180px] md:h-[44px]
                  mt-8
                  rounded-full
                  border
                  border-[rgba(199,168,94,1)]
                  bg-[#00256A]
                  md:text-[16px] text-[13px]
                  font-[700]
                  text-white
                  shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:text-black
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