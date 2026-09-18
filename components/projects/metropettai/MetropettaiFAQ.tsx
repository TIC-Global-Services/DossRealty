"use client";

import FAQ from "../../reusable/FAQ";
import { metropettaiFaqData } from "@/data/faq";

const MetropettaiFAQ = () => {
  return (
    <FAQ
      faqData={metropettaiFaqData}
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
