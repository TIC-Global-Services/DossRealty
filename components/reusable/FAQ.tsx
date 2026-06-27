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
    <section data-theme="light" className="py-16 md:px-8 md:py-12 lg:px-10">
      <div
        className="
          mx-auto
          rounded-[40px]
          px-5
          py-10
          md:px-5
          md:py-10
          lg:px-14
          lg:py-20
        "
        style={{
          backgroundColor: bgColor,
        }}
      >
        {/* Wrapper */}
        <div
          className="
            relative
            md:mx-8
            lg:mx-20
          "
        >
          {/* LEFT FAQ */}
          <div className="space-y-4 md:w-[52%] lg:w-[50%]">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index}>
                  {/* Question */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-[24px]
                      border
                      border-[#E2E2E2]
                      bg-white
                      px-6
                      py-2
                      md:px-3
                      md:py-3
                      lg:py-4
                      md:text-left
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                    text-[13px]
                    font-medium
                    text-[#222]
                    md:text-[14px]
                    lg:text-[18px]
                  "
                    >
                      {item.question}
                    </span>

                    <span
                      className="
                    cursor-pointer
                    text-[28px]
                    text-[#222]
                    transition-transform
                    duration-300
                  "
                    >
                      {isOpen ? "−" : "+"}
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
                    px-4
                    py-6
                    lg:py-7
                  "
                      style={{
                        backgroundColor: answerBgColor,
                      }}
                    >
                      <p
                        className="
                      text-[13px]
                      font-medium
                      leading-[160%]
                      text-[#111]
                      md:text-[14px]
                      lg:text-[18px]
                    "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
          mt-14
          md:absolute
          md:right-0
          md:top-[50px]
          lg:top-[80px]
          md:mt-0
          md:w-[40%]
          lg:w-[42%]
        "
          >
            <h2
              className="
            font-heading
            text-[24px]
            leading-[30px]
            tracking-normal
            text-[#00256A]
            md:w-[12ch]
            md:text-[30px]
            md:leading-[38px]
            md:tracking-[-0.05em]
            lg:w-[14ch]
            lg:text-[48px]
            lg:leading-[50px]
          "
            >
              {heading}
            </h2>

            <p
              className="
            mt-5
            max-w-[420px]
            text-[13px]
            leading-[20px]
            tracking-[-0.48px]
            text-[#717171]
            md:text-[15px]
            lg:text-[16px]
            md:leading-[22px]
            lg:leading-[20px]
          "
            >
              {description}
            </p>

            <PrimaryBtn
              onClick={
                buttonAction ??
                (() => router.push("/contact"))
              }
              className="
                mt-8
                h-[40px]
                w-[140px]
                rounded-full
                border
                border-[rgba(199,168,94,1)]
                bg-[#00256A]
                text-[13px]
                font-[700]
                text-white
                shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]
                transition-all
                duration-300
                hover:scale-105
                hover:text-black
                md:h-[42px]
                md:w-[165px]
                md:text-[15px]
                lg:h-[44px]
                lg:w-[180px]
                lg:text-[16px]
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