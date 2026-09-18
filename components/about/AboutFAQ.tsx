"use client";

import FAQ from "../reusable/FAQ";
import { aboutFaqData } from "@/data/faq";

const AboutFAQ = () => {
  return (
    <FAQ
      faqData={aboutFaqData}
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
