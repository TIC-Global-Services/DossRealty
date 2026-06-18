"use client";

import dynamic from "next/dynamic";

const ChennaiMap = dynamic(
  () => import("@/components/reusable/ChennaiMap"),
  {
    ssr: false,
  }
);

const Location = () => {
  return (
    <section className="py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-10
            lg:gap-12
          "
        >
          {/* LEFT MAP */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[10px]
              w-full
              max-w-[600px]
              h-[260px]
              md:h-[340px]
              lg:h-[300px]
              flex-shrink-0
            "
          >
            <ChennaiMap
              simpleMode
              pinLocation={[13.0328, 80.1268] as any}
              pinTitle="Doss Realty"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              max-w-[420px]
              flex
              flex-col
              justify-center
              text-left
              lg:text-left
            "
          >
            <h2
              className="
                font-small
                text-[#111111]
                md:leading-[1]
                md:tracking-[-1.44px]
                text-[32px] leading-[36px]
                md:text-[48px]
              "
            >
              Everyday Access
              <br />
              Made Easy
            </h2>

            <p
              className="
                mt-5
                text-[#666666]
                text-[16px]
                md:text-[16px]
                leading-[20px]
                tracking-[-0.48px]
              "
            >
              Serene Grove Villas is located in a well-connected
              residential area with easy access to schools,
              healthcare, shopping destinations, business hubs,
              and major transport routes.
            </p>

            <a
              href="https://maps.google.com/?q=13.0328,80.1268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start lg:justify-start"
            >
              <button
                className="
                  mt-8
                  rounded-full
                  bg-[#002D80]
                  px-8
                  py-3
                  text-white text-[13px] leading-[20px]
                  md:text-[16px]
                  font-medium
                  transition
                  duration-300
                  hover:scale-105
                  cursor-pointer
                "
              >
                View Location Map
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;