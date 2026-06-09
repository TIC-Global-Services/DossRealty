import Image from "next/image";

import futureImg from "@/assets/about/shapeFutureImg.jpg";

const ShapeTheFuture = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* LEFT SIDE - 30% */}
          <div className="lg:w-[30%] translate-y-30">
            <p
              className="ml-2
                mb-4 text-[14px]
                md:text-[16px] font-semibold
                uppercase leading-[26px]
                tracking-[1.6%]
                text-[#111111]
              "
            >
              Mission
            </p>

            <h2
              className="
                font-heading
                text-[34px]
                md:text-[52px]
                leading-[95%]
                tracking-[-0.04em]
                text-[#111111]
              "
            >
              Shaping <br /> the Future <br /> of Living
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-[70%]">
            {/* Top Paragraph */}
            <div className="w-[90ch]">
              <p
                className="font-regular
                  text-[14px]
                  md:text-[18px]
                  leading-[21px] tracking-[1px]
                  text-[#222A2C]
                "
              >
                At Doss Realty, our vision is to shape the future of real estate through developments that reflect excellence, 
                innovation, and purposeful living. We aspire to create spaces that go beyond structures environments that 
                inspire comfort, connection, and a higher standard of living for individuals and communities alike. 
                We believe every project should stand as a symbol of quality, trust, and timeless design. 
                By combining modern architecture, strategic locations, and sustainable thinking, our goal is to deliver 
                lasting value while continuously evolving with the needs of contemporary lifestyles.
              </p> <br />
              <p className="font-regular
                  text-[14px]
                  md:text-[18px]
                  leading-[21px] tracking-[1px]
                  text-[#222A2C]
                ">Driven by integrity and a customer-first approach, Doss Realty aims to become a 
                trusted name in real estate, known for creating landmark developments that enrich everyday experiences and 
                leave a lasting impact for generations to come.
              </p>
            </div>

            {/* Image */}
            <div className="mt-10 relative h-[350px] md:h-[400px] overflow-hidden rounded-[10px]">
              <Image
                src={futureImg}
                alt="Shape The Future"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeTheFuture;