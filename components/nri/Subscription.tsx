"use client";

import Image from "next/image";
import phoneImg from "@/assets/nri/phoneImg.png";

export default function Subscription() {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1440px] mx-10 px-5">
        <div className="bg-[#00256a] rounded-[10px] h-[400px] flex items-center justify-between overflow-visible">

          {/* Left Content */}
          <div className="pl-[50px] md:pl-[90px] py-12">
            <h2 className="text-white font-light text-[32px] md:text-[40px] leading-[95%] tracking-[-0.02em] max-w-[520px]">
              Subscribe for weekly
              <br />
              real estate insights
            </h2>

            <p className="text-white text-[14px] md:text-[16px] leading-[150%] mt-6 max-w-[470px] opacity-90">
              Invest in premium real estate opportunities in India with
              confidence, wherever you are in the world. Doss Realty offers
              transparent processes, trusted guidance, and seamless support
              tailored for NRI investors.
            </p>

            <div className="relative mt-8 w-full max-w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[56px] rounded-full bg-white px-6 pr-[120px] outline-none"
              />

              <button
                className="
                  absolute
                  right-[6px]
                  top-1/2
                  -translate-y-1/2
                  h-[44px]
                  px-8
                  rounded-full
                  bg-[#002878]
                  text-white
                  cursor-pointer
                "
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Phone Image */}
          <div className="hidden lg:flex items-end justify-center pr-10 self-end">
            <Image
              src={phoneImg}
              alt="Doss Realty Mobile App"
              className="
                w-[420px]
                md:w-[800px]
                h-auto
                object-contain
                -translate-y-0
              "
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}