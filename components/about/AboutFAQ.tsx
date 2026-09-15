"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
  {
    question: "What has DOSS built over three decades?",
    answer:
      "More than 5 million sq. ft. across 15+ developments, supported by a business built on long-term judgement, disciplined execution, and continuity.",
  },
  {
    question: "What is Artistic Engineering?",
    answer:
      "A way of working where design and engineering are developed together, balancing expression with precision at every stage.",
  },
  {
    question: "Why does detail matter so much at DOSS?",
    answer:
      "Because quality is experienced in small things: how spaces meet, how materials age, how light enters, and how naturally everything comes together.",
  },
  {
    question: "What is DOSS building toward?",
    answer:
      "A more considered kind of real estate company, combining the judgement of experience with the standards, design culture, and discipline of an institution.",
  },
];

const AboutFAQ = () => {
  return (
    <FAQ
      faqData={faqData}
      heading={
        <>
          <span className="hidden md:block">
            Know more
            <br />
            about DOSS
          </span>

          <span className="block md:hidden">Know more about DOSS</span>
        </>
      }
      description="Three decades of judgement, discipline, and continuity behind every DOSS development."
      buttonText="Contact Us"
      defaultOpenIndex={0}
    />
  );
};

export default AboutFAQ;
