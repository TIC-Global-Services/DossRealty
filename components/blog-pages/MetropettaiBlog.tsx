"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";
import Reveal from "../reusable/BlogReveal";

import metropettaiLogo from "@/assets/projects/metropettai/logo.png";

export default function MetropettaiBlog() {
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
              Metropettai: Where Chennai's Next
              Chapter Feels Closer
            </h1>
          </Reveal>

          <Reveal y={80}>
            <div className="mt-6 flex justify-center md:mt-8">
              <Image
                src={metropettaiLogo}
                alt="Metropettai"
                priority
                className="
                  h-auto
                  w-full
                  max-w-[280px]
                  sm:max-w-[350px]
                  md:max-w-[450px]
                  lg:max-w-[500px]
                "
              />
            </div>
          </Reveal>

          <div className="mt-8 space-y-2 md:mt-8">

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                The most compelling locations are rarely defined by distance
                alone. They are shaped by how easily people can move, how
                closely work and everyday life come together, and how
                confidently a neighbourhood can remain relevant as the city
                evolves. Metropettai was conceived around this understanding.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                Located in Nazarethpettai, near Poonamallee, the development
                sits within one of West Chennai's most important points of
                convergence. The Chennai–Bengaluru Highway connects it to the
                city and the wider industrial economy. The Outer Ring Road
                opens access across Chennai's expanding edges. Most
                significantly, the upcoming Metro places dependable public
                transport within minutes of the community.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                This is the meaning within the name. "Metro" represents
                movement, opportunity, and a city becoming more connected.
                "Pettai" retains the familiarity of neighbourhood life:
                rooted, recognisable, and close to the essentials that allow
                a family to live well.
              </p>
            </Reveal>

          </div>

          {/* Section 1 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                A Location Supported by Everyday Demand
              </h2>
            </Reveal>

            <div className="mt-6 space-y-2">
              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Infrastructure is valuable when it connects people to
                  something real. West Chennai is supported by a broad economic
                  base extending from Porur and Poonamallee towards the
                  manufacturing and employment centres of Sriperumbudur and
                  Oragadam.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Alongside this are established schools, colleges,
                  hospitals, retail destinations, and places of work that
                  continue to attract families to the corridor.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  For residents, this means access to opportunity without
                  surrendering the space and independence of a home of their
                  own. For investors, it offers a location supported by
                  employment, mobility, and an expanding residential
                  population rather than a single speculative announcement.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                The Freedom of an Independent Home
              </h2>
            </Reveal>

            <div className="mt-6 space-y-2">
              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Metropettai offers something increasingly difficult to find
                  within a growing metropolis: the freedom to shape an
                  individual home within a planned community.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Across approximately 20 acres, its villa plots accommodate
                  different stages of life, from a first home to a larger
                  multigenerational residence.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  The value lies not merely in owning land, but in deciding
                  how that land should serve the family: the number of rooms,
                  the relationship between indoor and outdoor space, the
                  possibility of expansion, and the character of the home
                  itself.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  This freedom is supported by the discipline of an organised
                  development, with defined roads, landscaped spaces,
                  community infrastructure, and the assurance of CMDA and
                  RERA approvals.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Connectivity That Improves Daily Life
              </h2>
            </Reveal>

            <div className="mt-6 space-y-2">
              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  The Metro is often discussed as an investment catalyst.
                  Its more immediate value, however, is personal.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Reliable public transport can reduce dependence on private
                  vehicles, simplify access to education and employment, and
                  give different generations within a household greater
                  independence.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Combined with the Outer Ring Road and the
                  Chennai–Bengaluru Highway, it creates multiple ways to move
                  rather than relying on a single route.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  That flexibility is what makes connectivity meaningful.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-12 md:mt-20">
            <Reveal>
              <h2 className="text-[28px] font-semibold text-[#111111] md:text-[38px]">
                Built for the Present, Positioned for the Future
              </h2>
            </Reveal>

            <div className="mt-6 space-y-2">
              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  A good real estate decision should answer two questions:
                  Does the place support life today? And will its relevance
                  deepen over time?
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  Metropettai brings both considerations together. It is
                  close to the institutions and economic activity already
                  shaping West Chennai while being positioned to benefit from
                  the city's expanding transport network.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-[15px] leading-[28px] text-[#4D4D4D] sm:text-[16px] md:text-[18px] md:leading-[34px]">
                  It is not simply a plotted development named after a Metro
                  station. It is a neighbourhood built around the larger
                  idea of connection: to work, education, family,
                  opportunity, and the future direction of Chennai.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-16 border-t border-[#E5E5E5] pt-6 md:mt-24 md:pt-8">
              <p className="text-[13px] leading-[24px] text-[#777777] md:text-[14px] md:leading-[28px]">
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