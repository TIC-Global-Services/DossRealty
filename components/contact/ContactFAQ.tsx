"use client";

import FAQ from "../reusable/FAQ";
import { contactFaqData } from "@/data/faq";

const ContactFAQ = () => {
  return (
    <FAQ
      faqData={contactFaqData}
      heading={
        <>
          <span className="hidden md:block">
            Know more
            <br />
            before you connect
          </span>

          <span className="block md:hidden">Know more before you connect</span>
        </>
      }
      description="Answers to what buyers, landowners, and referrers ask us most."
      buttonText="Contact Us"
      defaultOpenIndex={0}
    />
  );
};

export default ContactFAQ;
