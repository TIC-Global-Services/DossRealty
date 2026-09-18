"use client";

import FAQ from "../../reusable/FAQ";
import { promiseParkFaqData } from "@/data/faq";

const PromiseParkFAQ = () => {
  return (
    <FAQ
      faqData={promiseParkFaqData}
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
