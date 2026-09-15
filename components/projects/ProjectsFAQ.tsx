"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
  {
    question: "What does DOSS develop?",
    answer:
      "Residential and commercial developments shaped around location, demand, design quality, and long-term relevance.",
  },
  {
    question: "How do I choose between DOSS projects?",
    answer:
      "It begins with intent. Whether the objective is to live, build, hold, or invest, we help assess location, product, timing, and capital fit with clarity.",
  },
  {
    question: "How can I check pricing and current availability?",
    answer:
      "Availability, configurations, and pricing vary by project and are updated periodically. Our sales team can provide the latest project-specific information.",
  },
  {
    question: "Is bank financing available for DOSS projects?",
    answer:
      "Financing is available on eligible projects through leading banks and financial institutions. Our team can guide buyers through the applicable options.",
  },
];

const ProjectsFAQ = () => {
  return (
    <FAQ
      faqData={faqData}
      heading={
        <>
          Everything
          <br /> You Need to Know
        </>
      }
      description="Find answers to common questions about our projects, pricing, availability, and financing."
      buttonText="Contact Us"
      defaultOpenIndex={0}
    />
  );
};

export default ProjectsFAQ;
