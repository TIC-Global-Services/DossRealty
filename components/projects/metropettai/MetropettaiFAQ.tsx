"use client";

import FAQ from "../../reusable/FAQ";

const faqData = [
  {
    question: "Where is Metropettai located?",
    answer:
      "In Nazarethpettai, near Poonamallee, positioned between Poonamallee Metro station, Chennai–Bengaluru Highway, and Outer Ring Road.",
  },
  {
    question: "Is Metropettai approved and ready to build?",
    answer:
      "Yes. Metropettai is a CMDA and RERA-approved plotted community with completed infrastructure designed for residential construction.",
  },
  {
    question: "Is bank financing available for Metropettai?",
    answer:
      "Yes. The project is pre-approved by leading banks, giving buyers access to established financing channels and a more streamlined loan process.",
  },
  {
    question: "What supports Metropettai's investment potential?",
    answer:
      "Its West Chennai location brings Metro access, major road links, education, and employment corridors into one connected address.",
  },
];

const MetropettaiFAQ = () => {
  return (
    <FAQ
      faqData={faqData}
      heading={
        <>
          Everything
          <br /> You Need to Know
        </>
      }
      description="Find answers to common questions about Metropettai's location, approvals, and financing."
      buttonText="Contact Us"
      defaultOpenIndex={0}
    />
  );
};

export default MetropettaiFAQ;
