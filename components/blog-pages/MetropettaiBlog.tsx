"use client";

import Image from "next/image";
import EnquiryBtn from "../reusable/EnquiryBtn";

import metropettaiLogo from "@/assets/projects/metropettai/logo.png";
import KnowMoreBlogs from "../about/KnowMoreBlogs";

export default function MetropettaiBlog() {
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
            Metropettai: Where Chennai's Next
            Chapter Feels Closer
          </h1>

          {/* Image */}
          <div className="mt-2 flex justify-center">
            <Image
              src={metropettaiLogo}
              alt="Metropettai"
              priority
              className="h-auto w-full max-w-[500px]"
            />
          </div>

          {/* Intro */}
          <div className="mt-2 space-y-4">
            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              The most compelling locations are rarely defined by distance
              alone. They are shaped by how easily people can move, how
              closely work and everyday life come together, and how
              confidently a neighbourhood can remain relevant as the city
              evolves. Metropettai was conceived around this understanding.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              Located in Nazarethpettai, near Poonamallee, the development
              sits within one of West Chennai's most important points of
              convergence. The Chennai–Bengaluru Highway connects it to the
              city and the wider industrial economy. The Outer Ring Road
              opens access across Chennai's expanding edges. Most
              significantly, the upcoming Metro places dependable public
              transport within minutes of the community.
            </p>

            <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
              This is the meaning within the name. "Metro" represents
              movement, opportunity, and a city becoming more connected.
              "Pettai" retains the familiarity of neighbourhood life:
              rooted, recognisable, and close to the essentials that allow
              a family to live well.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-20">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              A Location Supported by Everyday Demand
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Infrastructure is valuable when it connects people to
                something real.West Chennai is supported by a broad economic base
                extending from Porur and Poonamallee towards the
                manufacturing and employment centres of Sriperumbudur and
                Oragadam.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Alongside this are established schools, colleges,
                hospitals, retail destinations, and places of work that
                continue to attract families to the corridor.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                For residents, this means access to opportunity without
                surrendering the space and independence of a home of their
                own. For investors, it offers a location supported by
                employment, mobility, and an expanding residential
                population rather than a single speculative announcement.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              The Freedom of an Independent Home
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Metropettai offers something increasingly difficult to find
                within a growing metropolis: the freedom to shape an
                individual home within a planned community.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Across approximately 20 acres, its villa plots accommodate
                different stages of life, from a first home to a larger
                multigenerational residence.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                The value lies not merely in owning land, but in deciding
                how that land should serve the family: the number of rooms,
                the relationship between indoor and outdoor space, the
                possibility of expansion, and the character of the home
                itself.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                This freedom is supported by the discipline of an organised
                development, with defined roads, landscaped spaces,
                community infrastructure, and the assurance of CMDA and
                RERA approvals.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Connectivity That Improves Daily Life
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                The Metro is often discussed as an investment catalyst.
                Its more immediate value, however, is personal.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Reliable public transport can reduce dependence on private
                vehicles, simplify access to education and employment, and
                give different generations within a household greater
                independence.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Combined with the Outer Ring Road and the
                Chennai–Bengaluru Highway, it creates multiple ways to move
                rather than relying on a single route.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                That flexibility is what makes connectivity meaningful.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <h2 className="text-[38px] font-semibold text-[#111111]">
              Built for the Present, Positioned for the Future
            </h2>

            <div className="mt-6 space-y-8">
              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                A good real estate decision should answer two questions:
                Does the place support life today? And will its relevance
                deepen over time?
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                Metropettai brings both considerations together. It is
                close to the institutions and economic activity already
                shaping West Chennai while being positioned to benefit from
                the city's expanding transport network.
              </p>

              <p className="text-[18px] leading-[34px] text-[#4D4D4D]">
                It is not simply a plotted development named after a Metro
                station. It is a neighbourhood built around the larger
                idea of connection: to work, education, family,
                opportunity, and the future direction of Chennai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <KnowMoreBlogs />
    </>
  );
}