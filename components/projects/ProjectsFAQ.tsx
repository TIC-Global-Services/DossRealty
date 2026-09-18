"use client";

import FAQ from "../reusable/FAQ";
import { projectsFaqData } from "@/data/faq";

const ProjectsFAQ = () => {
  return (
    <FAQ
      faqData={projectsFaqData}
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
