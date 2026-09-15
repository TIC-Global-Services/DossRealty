"use client";

import FAQ from "../../reusable/FAQ";

const faqData = [
  {
    question: "Where is Promise Park located?",
    answer:
      "Near White Gate, Kanchipuram, just off the Kanchi–Arakkonam Highway, with easy access to educational institutions, and Kanchipuram town.",
  },
  {
    question: "Is Promise Park approved and ready to build?",
    answer:
      "Yes. Promise Park is DTCP and RERA-approved, with internal roads, TNEB connection, street lighting, and other essential infrastructure already in place.",
  },
  {
    question: "Is bank financing available for Promise Park?",
    answer:
      "Yes. Bank loan facilities are available, supported by clear documentation and statutory approvals for a more straightforward purchase process.",
  },
  {
    question: "What supports Promise Park's investment potential?",
    answer:
      "Its White Gate location is supported by direct highway access, established institutions, and proximity to Kanchipuram town.",
  },
];

const PromiseParkFAQ = () => {
  return (
    <FAQ
      faqData={faqData}
      heading={
        <>
          Everything
          <br /> You Need to Know
        </>
      }
      description="Find answers to common questions about Promise Park's location, approvals, and financing."
      buttonText="Contact Us"
      defaultOpenIndex={0}
    />
  );
};

export default PromiseParkFAQ;
