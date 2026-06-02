import Image from "next/image";

import journeyImg from "@/assets/nri/journeyImg.png";

const PropertyJourney = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-20 max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* TOP CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div className="lg:pt-10">
            <h2
              className="
                font-heading
                text-[24px]
                md:text-[48px]
                leading-[92%]
                tracking-[-0.05em]
                text-[#111111]
              "
            >
              Your Property
              <br />
              Journey,
              Simplified
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-10">
            <p
              className="
                max-w-[620px]
                text-[15px]
                md:text-[16px]
                leading-[180%]
                text-[#6B6B6B]
              "
            >
              Secure your ideal property from anywhere
              in the world with complete transparency
              and trusted support. Seamless virtual
              assistance, verified documentation, and
              end-to-end guidance for effortless remote
              investments. Invest confidently in premium
              real estate while we manage every step on
              your behalf.
            </p>
          </div>

        </div>

        {/* IMAGE */}
        <div className="mt-12 md:mt-10">
          <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px]">

            <Image
              src={journeyImg}
              alt="Property Journey"
              className="
                h-[300px]
                md:h-[500px]
                w-full
                object-cover
              "
              priority
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyJourney;