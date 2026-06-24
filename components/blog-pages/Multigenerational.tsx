"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import KnowMoreBlogs from "../about/KnowMoreBlogs";

// import multigenerationalImg from "@/assets/blogs/multigenerational.jpg";

export default function Multigenerational() {
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
            Real Estate as a
            <br />
            Multigenerational Asset
          </h1>

          {/* Image
          <div className="mt-12">
            <Image
              src={multigenerationalImg}
              alt="Real Estate as a Multigenerational Asset"
              priority
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div> */}

          {/* Content */}
          <div className="mt-12 space-y-8">
            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              In India, real estate has long occupied a place beyond
              conventional investment. It may provide a home, support a
              business, preserve family identity, produce income, or offer
              security during periods of uncertainty. Few assets combine
              financial value with such personal utility.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              That combination explains its enduring appeal. It also
              explains why real estate is frequently inherited rather than
              sold.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Yet ownership across generations is not the same as
              multigenerational wealth.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A property becomes a durable family asset only when it
              retains three qualities: relevance, economic utility, and
              transferability. Location must continue to attract demand.
              The asset must remain usable, leasable, developable, or
              capable of being sold. Ownership must also pass clearly,
              without fragmented titles, unresolved claims, or
              disagreement among heirs.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              This distinction is particularly important in India, where
              family wealth remains heavily concentrated in land, homes,
              commercial property, and gold. Physical assets may offer
              familiarity and protection from short-term market volatility,
              but they also introduce concentration risk.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A family may appear asset-rich while remaining cash-flow
              poor, especially when property is vacant, low-yielding,
              difficult to divide, or expensive to maintain.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The most resilient real estate therefore possesses more than
              appreciation potential. It offers optionality.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              A well-located parcel of land may later support a residence,
              commercial use, redevelopment, or strategic sale. A
              thoughtfully selected home can provide occupation today and
              rental income tomorrow.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Property near enduring infrastructure, employment,
              education, healthcare, and transport networks is more likely
              to remain relevant as lifestyles and cities evolve.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The quality of ownership matters equally. Clear title,
              credible approvals, accurate records, appropriate insurance,
              tax compliance, and planned maintenance are not
              administrative details. They protect the asset's liquidity
              and ensure that value created by one generation is not lost
              through neglect in the next.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Succession requires the same discipline. A will,
              nomination, family arrangement, trust structure, or other
              appropriate mechanism should reflect both legal requirements
              and family intent.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Without such planning, an indivisible property may become a
              source of conflict rather than continuity.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              For Indian families, the most intelligent approach is not to
              treat real estate as an unquestioned symbol of security. It
              is to evaluate each property as part of a wider portfolio,
              considering yield, liquidity, future use, carrying cost,
              and the needs of the next generation.The true measure of a multigenerational asset is not simply
              that it survives.It is that it continues to serve.
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