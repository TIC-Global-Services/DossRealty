"use client";

import KnowMoreBlogs from "../about/KnowMoreBlogs";
import EnquiryBtn from "../reusable/EnquiryBtn";

export default function CompleteGuide() {
  return (
    <>
      <EnquiryBtn />

      <section className="pb-20 pt-[140px]">
        <div className="mx-auto max-w-[1100px] px-6">

          {/* Title */}
          <h1
            className="
              font-small
              text-[40px]
              leading-[1]
              tracking-[-1.5px]
              text-[#111111]
              md:text-[72px]
            "
          >
            A Complete Guide to Buying
            <br />
            Property in India as an NRI
          </h1>

          {/* Intro */}
          <p
            className="
              mt-10
              text-[18px]
              leading-[34px]
              text-[#4D4D4D]
            "
          >
            For an NRI, purchasing property in India is rarely a purely
            financial decision. It may represent a return to familiar roots,
            a home for the future, or an asset intended to remain within the
            family for generations. Yet distance makes clarity essential.
          </p>

          {/* Section 1 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Know What You Can Purchase
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              NRIs and Overseas Citizens of India may generally acquire
              residential and commercial property without seeking prior
              approval from the Reserve Bank of India. Agricultural land,
              plantation property, and farmhouses are subject to restrictions
              and should be considered only with qualified legal guidance.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Begin with the Location, Not the Brochure
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              A sound purchase begins with understanding the forces shaping
              the location. Study existing social infrastructure, employment
              centres, transport links, industrial development, and planned
              public investment.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              A compelling masterplan matters, but enduring value begins
              with land, access, and long-term relevance.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Establish Legal Clarity
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              Before committing, appoint an independent property lawyer to
              examine the title chain, encumbrance certificate, land
              classification, planning approval, RERA registration where
              applicable, sanctioned layout or building plan, tax receipts,
              and the developer’s authority to sell.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              The dimensions, survey numbers, undivided share,
              specifications, possession schedule, payment milestones, and
              remedies for delay should be stated clearly in the agreement.
              Verbal assurances should never replace documented commitments.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Structure Payments Correctly
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              Payments should be made through recognised banking channels,
              ordinarily using eligible NRE, NRO, or FCNR funds, inward
              remittances, or an approved home loan.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              Avoid cash transactions and preserve every remittance record,
              receipt, demand letter, and bank confirmation.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              Where the seller is resident in India and the applicable
              threshold is met, the buyer is responsible for deducting
              property TDS. A purchase from an NRI seller follows a
              different tax framework under Section 195 and requires
              specialist advice before any payment is released.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Buying Through a Power of Attorney
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              When travel is impractical, a carefully drafted Power of
              Attorney may allow a trusted representative to complete
              defined activities in India.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              It should identify the property and expressly state the
              powers granted, including signing agreements, making
              payments, appearing for registration, or taking possession.
              Execution and authentication requirements vary by
              jurisdiction.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Plan Beyond Registration
            </h2>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              Consider maintenance, property tax, insurance, rental
              management, succession planning, future sale taxation, and
              repatriation before purchasing.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              These questions influence how easily the asset can be held,
              managed, and eventually transferred.
            </p>

            <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
              For an overseas buyer, confidence is created through
              verified documentation, accountable advice, and a team that
              remains present after the transaction. At DOSS Realty, we
              approach every NRI relationship with discretion,
              continuity, and the belief that distance should never
              diminish certainty.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-24 border-t border-[#E5E5E5] pt-8">
            <p className="text-[14px] leading-[28px] text-[#777777]">
              Disclaimer: This article is for general informational
              purposes only and does not constitute legal, tax,
              financial, or investment advice. Readers should seek
              independent professional advice before making any
              property-related decision.
            </p>
          </div>

        </div>
      </section>

      <KnowMoreBlogs />
    </>
  );
}