"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "../reusable/BlogReveal";

import consideredGuideImg from "@/assets/blogs/blogPage/consideredImg.webp";

export default function ConsideredGuide() {
  return (
    <>
      <EnquiryBtn />

      <section className="pt-[110px] pb-16 md:pt-[140px] md:pb-20">
        <div className="mx-auto px-5 sm:px-6 lg:px-30">

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
              A Considered Guide to Buying
              Property in India
            </h1>
          </Reveal>

          <Reveal y={80} duration={2}>
            <div className="mt-8 flex justify-left md:mt-12">
              <Image
                src={consideredGuideImg}
                alt="A Considered Guide to Buying Property in India"
                priority
                className="
                  h-[220px]
                  w-full
                  md:max-w-[800px]
                  rounded-[4px]
                  object-cover
                  sm:h-[280px]
                  md:h-[350px]
                  lg:h-[400px]
                "
              />
            </div>
          </Reveal>

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
              Property is rarely a routine purchase. It may become a family
              home, an income-producing asset, or a store of value carried
              across generations. The quality of the decision therefore
              depends not only on what is being acquired, but on the
              discipline applied before ownership.
            </p>
          </Reveal>

          {/* Section 1 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Begin with Purpose
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                The first question is not which property to buy, but what
                the property must achieve.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A residence intended for immediate occupation should be
                assessed differently from land held for long-term
                appreciation or a home expected to generate rental income.
                Define the intended use, investment horizon, financing
                capacity, and acceptable level of liquidity before
                evaluating projects.
              </p>
            </Reveal>
          </div>

          {/* Section 2 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Read the Location Beyond Distance
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A strong location is supported by more than proximity to
                the city centre. Consider its access to employment,
                education, healthcare, transport, established roads, and
                everyday commerce.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Infrastructure can reshape demand, but proposed
                development should not be treated as guaranteed value. The
                most resilient locations combine future potential with
                present-day utility.
              </p>
            </Reveal>
          </div>

          {/* Section 3 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Examine the Developer
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A developer’s record offers insight into the likelihood of
                delivery.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Review completed projects, construction quality,
                approvals, customer support, maintenance, delivery
                history, and the condition of earlier developments. The
                standard maintained after possession can be as revealing as
                the promise made before purchase.
              </p>
            </Reveal>
          </div>

          {/* Section 4 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Establish Legal Certainty
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Before committing funds, appoint an independent property
                lawyer to examine the title deed, ownership history,
                parent documents, encumbrance certificate, planning
                permission, sanctioned plan, land classification, tax
                records, and the seller’s authority to transfer the
                property.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Where applicable, confirm the project’s RERA registration
                and compare the registered information with the sales
                material, agreement, specifications, and delivery
                commitments.
              </p>
            </Reveal>
          </div>

          {/* Section 5 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Understand the Entire Cost
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                The advertised price is only one part of the acquisition.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                Account for stamp duty, registration charges, taxes, legal
                fees, loan processing costs, maintenance deposits,
                infrastructure charges, parking, fit-outs, and other
                contractual payments. Review the payment schedule against
                construction progress and retain records of every
                transaction.
              </p>
            </Reveal>
          </div>

          {/* Section 6 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Read Before You Sign
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                The agreement should clearly define the property,
                consideration, specifications, delivery timeline, common
                areas, cancellation provisions, delay remedies,
                maintenance obligations, and the responsibilities of each
                party.
              </p>
            </Reveal>
          </div>

          {/* Section 7 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Inspect the Product
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                For completed property, examine workmanship, dimensions,
                water supply, drainage, electrical systems, access, common
                areas, and surrounding development.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                For land, confirm the physical boundaries, survey
                measurements, road access, and readiness of promised
                infrastructure.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[30px]">
                A considered purchase is not driven by urgency. It is
                built through independent verification, financial clarity,
                and an understanding of how the asset will serve both the
                present owner and those who may hold it next.
              </p>
            </Reveal>
          </div>

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