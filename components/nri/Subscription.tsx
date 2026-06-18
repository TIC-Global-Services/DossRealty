"use client";

import Image from "next/image";
import phoneImg from "@/assets/nri/handImg.png";

export default function Subscription() {
  return (
    <section className="py-10 md:py-[40px] md:mt-25">
      <div className="mx-5 max-w-[1440px] md:mx-10 md:px-5">
        <div
          className="h-[80vh]
            overflow-visible
            rounded-[10px]
            bg-[#00256a]

            flex
            flex-col
            items-center

            md:h-[400px]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              px-5
              pt-20
              text-center

              md:px-8

              lg:pl-[90px]
              lg:pr-0
              lg:py-12
              lg:text-left
            "
          >
            <h2
              className="text-start font-small
                max-w-[520px]
                text-[20px] leading-[24px]
                font-light
                md:leading-[95%]
                md:tracking-[-0.02em]
                text-white
                md:text-[40px]
                lg:max-w-[520px]
              "
            >
              Subscribe for weekly
              <br />
              real estate insights
            </h2>

            <p
              className="text-start
                mx-auto
                mt-6
                max-w-[470px]
                text-[13px] leading-[16px]
                md:leading-[150%]
                text-white
                opacity-90

                md:text-[16px]

                lg:mx-0
              "
            >
              Invest in premium
              real estate
              opportunities in
              India with
              confidence,
              wherever you are
              in the world. Doss
              Realty offers
              transparent
              processes, trusted
              guidance, and
              seamless support
              tailored for NRI
              investors.
            </p>

            {/* INPUT */}
            <div
              className="
                relative
                mx-auto
                mt-8
                w-full
                max-w-[500px]

                lg:mx-0
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[56px]
                  w-full
                  rounded-full
                  bg-white
                  px-6
                  pr-[120px]
                  outline-none
                "
              />

              <button
                className="
                  absolute
                  right-[6px]
                  top-1/2
                  h-[44px]
                  -translate-y-1/2
                  cursor-pointer
                  rounded-full
                  bg-[#002878]
                  px-8
                  text-white
                "
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              mt-8
              flex
              w-full
              items-end
              

              lg:mt-0
              lg:self-end
              
            "
          >
            <Image
              src={phoneImg}
              alt="Doss Realty Mobile App"
              className="
                w-[550px] h-[500px] -translate-y-20
                object-cover

                md:w-[360px]

                lg:w-[800px] lg:h-[650px] 
                lg:translate-y-0
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}