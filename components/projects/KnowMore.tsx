"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
  {
    question:
      "What types of properties does Doss Realty offer?",
    answer:
      "We specialize in premium residential and commercial developments designed with modern architecture, functionality, and long-term value.",
  },
  {
    question:
      "Where are Doss Realty projects located?",
    answer:
      "We focus on quality craftsmanship, strategic planning, and customer satisfaction to create spaces that inspire better living.",
  },
  {
    question:
      "Are the properties approved by local authorities?",
    answer:
      "Yes, we help clients identify investment opportunities aligned with long-term growth and value.",
  },
  {
    question:
      "Do you offer both villas and plots?",
    answer:
      "Yes, we provide a range of luxury villas and premium residential plots to suit different lifestyle and investment needs.",
  },
];

const KnowMore = () => {
  return (
    <>
      <FAQ
        faqData={faqData}
        heading={
          <>
            Everything
            <br/>
            {" "}You Need to Know
          </>
        }
        description="Find answers to common questions about our architectural process, project planning, timelines, and design approach."
        buttonText="Contact Us"
        defaultOpenIndex={0}
      />
    </>
  );
};

export default KnowMore;