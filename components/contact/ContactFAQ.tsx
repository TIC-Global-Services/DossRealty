"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
  {
    question: "For project enquiries",
    answer:
      "For availability, pricing, documentation, or project-specific information, connect with our team through any contact channel listed on this page.",
  },
  {
    question: "Can I arrange a site visit?",
    answer:
      "Yes. Site visits can be scheduled for any active DOSS development at a time convenient to you.",
  },
  {
    question: "For land and joint development opportunities",
    answer:
      "Landowners and mediators exploring joint development or outright sale opportunities can contact us through any listed channel. Our acquisitions team will take it forward from there.",
  },
  {
    question: "How does Refer a Friend work?",
    answer:
      "Introduce someone considering a DOSS development through our referral form. Our team will take it forward personally and keep the process clear from there.",
  },
];

const ContactFAQ = () => {
  return (
    <FAQ
      faqData={faqData}
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
