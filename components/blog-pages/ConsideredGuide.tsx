"use client";

import KnowMoreBlogs from "../about/KnowMoreBlogs";
import EnquiryBtn from "../reusable/EnquiryBtn";

export default function ConsideredGuide() {
return (
<> 
<EnquiryBtn />

  <section className="pt-[140px] pb-20">
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
        A Considered Guide to Buying
        <br />
        Property in India
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
        Property is rarely a routine purchase. It may become a family
        home, an income-producing asset, or a store of value carried
        across generations. The quality of the decision therefore
        depends not only on what is being acquired, but on the
        discipline applied before ownership.
      </p>

      {/* Section 1 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Begin with Purpose
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          The first question is not which property to buy, but what
          the property must achieve.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          A residence intended for immediate occupation should be
          assessed differently from land held for long-term
          appreciation or a home expected to generate rental income.
          Define the intended use, investment horizon, financing
          capacity, and acceptable level of liquidity before
          evaluating projects.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Read the Location Beyond Distance
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          A strong location is supported by more than proximity to
          the city centre. Consider its access to employment,
          education, healthcare, transport, established roads, and
          everyday commerce.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          Infrastructure can reshape demand, but proposed
          development should not be treated as guaranteed value. The
          most resilient locations combine future potential with
          present-day utility.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Examine the Developer
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          A developer’s record offers insight into the likelihood of
          delivery.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          Review completed projects, construction quality,
          approvals, customer support, maintenance, delivery
          history, and the condition of earlier developments. The
          standard maintained after possession can be as revealing as
          the promise made before purchase.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Establish Legal Certainty
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          Before committing funds, appoint an independent property
          lawyer to examine the title deed, ownership history,
          parent documents, encumbrance certificate, planning
          permission, sanctioned plan, land classification, tax
          records, and the seller’s authority to transfer the
          property.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          Where applicable, confirm the project’s RERA registration
          and compare the registered information with the sales
          material, agreement, specifications, and delivery
          commitments.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Understand the Entire Cost
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          The advertised price is only one part of the acquisition.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          Account for stamp duty, registration charges, taxes, legal
          fees, loan processing costs, maintenance deposits,
          infrastructure charges, parking, fit-outs, and other
          contractual payments. Review the payment schedule against
          construction progress and retain records of every
          transaction.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Read Before You Sign
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          The agreement should clearly define the property,
          consideration, specifications, delivery timeline, common
          areas, cancellation provisions, delay remedies,
          maintenance obligations, and the responsibilities of each
          party.
        </p>
      </div>

      {/* Section 7 */}
      <div className="mt-20">
        <h2 className="text-[38px] font-semibold text-[#111111]">
          Inspect the Product
        </h2>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          For completed property, examine workmanship, dimensions,
          water supply, drainage, electrical systems, access, common
          areas, and surrounding development.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          For land, confirm the physical boundaries, survey
          measurements, road access, and readiness of promised
          infrastructure.
        </p>

        <p className="mt-6 text-[18px] leading-[34px] text-[#4D4D4D]">
          A considered purchase is not driven by urgency. It is
          built through independent verification, financial clarity,
          and an understanding of how the asset will serve both the
          present owner and those who may hold it next.
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
