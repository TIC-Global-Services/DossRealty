"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "@/components/reusable/BlogReveal";

import completeGuideImg from "@/assets/blogs/blogPage/completeGuideImg.jpeg";

export default function CompleteGuide() {
  return (
    <>
      <EnquiryBtn />

      <section className="pt-[110px] pb-16 md:pt-[140px] md:pb-20">
        <div className="mx-auto px-5 sm:px-6 lg:px-30">
          {/* Title */}
          <Reveal>
            <h1
              className="
                font-small
                text-[28px]
                leading-[1.1]
                tracking-[-0.5px]
                text-[#111111]
                sm:text-[36px]
                md:text-[52px]
                lg:text-[72px]
                lg:tracking-[-1.5px]
              "
            >
              A Complete Guide to Buying
              Property in India as an NRI
            </h1>
          </Reveal>

          {/* Image */}
          <Reveal y={80} duration={2}>
            <div className="mt-8 flex justify-left md:mt-12">
              <Image
                src={completeGuideImg}
                alt="A Complete Guide to Buying Property in India as an NRI"
                priority
                className="
                  w-full
                  h-[200px]
                  md:max-w-[800px]
                  rounded-[4px]
                  object-cover
                  md:h-[400px]
                "
              />
            </div>
          </Reveal>

          {/* Intro */}
          <Reveal>
            <p
              className="
                mt-10
                text-[15px]
                leading-[28px]
                text-[#4D4D4D]
                sm:text-[16px]
                md:text-[18px]
                md:leading-[30px]
              "
            >
              For an NRI, purchasing property in India is rarely a purely
              financial decision. It may represent a return to familiar roots,
              a home for the future, or an asset intended to remain within the
              family for generations. Yet distance makes clarity essential.
            </p>
          </Reveal>

          {/* Section 1 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Know What You Can Purchase
              </h2>
            </Reveal>

            <Reveal>
              <p
                className="
                  text-[15px]
                  leading-[28px]
                  text-[#4D4D4D]
                  sm:text-[16px]
                  md:text-[18px]
                  md:leading-[30px]
                "
              >
                NRIs and Overseas Citizens of India may generally acquire
                residential and commercial property without seeking prior
                approval from the Reserve Bank of India. Agricultural land,
                plantation property, and farmhouses are subject to restrictions
                and should be considered only with qualified legal guidance.
              </p>
            </Reveal>
          </div>

          {/* Section 2 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Begin with the Location, Not the Brochure
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A sound purchase begins with understanding the forces shaping
                the location. Study existing social infrastructure, employment
                centres, transport links, industrial development, and planned
                public investment.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A compelling masterplan matters, but enduring value begins
                with land, access, and long-term relevance.
              </p>
            </Reveal>
          </div>

          {/* Section 3 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Establish Legal Clarity
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Before committing, appoint an independent property lawyer to
                examine the title chain, encumbrance certificate, land
                classification, planning approval, RERA registration where
                applicable, sanctioned layout or building plan, tax receipts,
                and the developer’s authority to sell.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                The dimensions, survey numbers, undivided share,
                specifications, possession schedule, payment milestones, and
                remedies for delay should be stated clearly in the agreement.
                Verbal assurances should never replace documented commitments.
              </p>
            </Reveal>
          </div>

          {/* Section 4 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Structure Payments Correctly
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Payments should be made through recognised banking channels,
                ordinarily using eligible NRE, NRO, or FCNR funds, inward
                remittances, or an approved home loan.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Avoid cash transactions and preserve every remittance record,
                receipt, demand letter, and bank confirmation.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Where the seller is resident in India and the applicable
                threshold is met, the buyer is responsible for deducting
                property TDS. A purchase from an NRI seller follows a
                different tax framework under Section 195 and requires
                specialist advice before any payment is released.
              </p>
            </Reveal>
          </div>

          {/* Section 5 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Buying Through a Power of Attorney
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                When travel is impractical, a carefully drafted Power of
                Attorney may allow a trusted representative to complete
                defined activities in India.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                It should identify the property and expressly state the
                powers granted, including signing agreements, making
                payments, appearing for registration, or taking possession.
                Execution and authentication requirements vary by
                jurisdiction.
              </p>
            </Reveal>
          </div>

          {/* Section 6 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Plan Beyond Registration
              </h2>
            </Reveal>

            <Reveal>
              <p className="ext-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Consider maintenance, property tax, insurance, rental
                management, succession planning, future sale taxation, and
                repatriation before purchasing.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                These questions influence how easily the asset can be held,
                managed, and eventually transferred.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                For an overseas buyer, confidence is created through
                verified documentation, accountable advice, and a team that
                remains present after the transaction. At Doss Realty, we
                approach every NRI relationship with discretion,
                continuity, and the belief that distance should never
                diminish certainty.
              </p>
            </Reveal>
          </div>

          {/* Disclaimer */}
          <Reveal>
            <div className="mt-12 border-t border-[#E5E5E5] pt-6 md:mt-24 md:pt-8">
              <p
                className="
                  text-[13px]
                  leading-[24px]
                  text-[#777777]
                  md:text-[14px]
                  md:leading-[28px]
                "
              >
                Disclaimer: This article is for general informational
                purposes only and does not constitute legal, tax,
                financial, or investment advice. Readers should seek
                independent professional advice before making any
                property-related decision.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}