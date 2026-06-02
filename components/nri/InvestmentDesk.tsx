import Image from "next/image";

import investmentImg from "@/assets/nri/investmentDeskImg.png";

const InvestmentDesk = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-20 max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w">
            <p
              className="
                mb-5
                text-[20px]
                font-medium
                text-[#111111]
              "
            >
              NRI Investment Desk
            </p>

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
              Invest with
              <br />
              Confidence.
              <br />
              From Anywhere.
            </h2>

            <p
              className="
                mt-8
                text-[15px]
                md:text-[16px]
                leading-[180%]
                text-[#6B6B6B]
              "
            >
              Secure, well-planned properties with
              complete support from selection to
              registration, handled seamlessly.
              Thoughtfully developed properties
              designed for comfort, value, and
              long-term growth. Strategically
              located developments that offer
              excellent connectivity and future
              investment potential. Designed to
              create balanced communities with
              modern amenities and peaceful
              surroundings.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <div className="relative overflow-hidden rounded-[10px] md:rounded-[10px] md:h-[450px]">
              <Image
                src={investmentImg}
                alt="Investment Desk"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentDesk;