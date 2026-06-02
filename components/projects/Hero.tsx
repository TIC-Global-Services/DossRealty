"use client";

import Image from "next/image";

import heroBg from "@/assets/projects/heroImg.jpg";

const Hero = () => {
  return (
    <section className="relative">

      {/* HERO */}
      <div className="relative h-[90vh] min-h-[700px] overflow-visible">

        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Card */}
        <div
          className="
            absolute
            bottom-[-100px]
            left-1/2
            z-20
            w-[92%]
            max-w-[1280px]
            -translate-x-1/2
          "
        >
          <div
            className="
              rounded-[32px]
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              px-6
              py-8
              md:px-10
              md:py-10
              lg:px-16
              lg:py-16
            "
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

              {/* LEFT */}
              <div className="lg:w-[40%]">
                <h2
                  className="
                    font-heading
                    text-[32px]
                    md:text-[48px]
                    lg:text-[70px]]
                    leading-[95%]
                    tracking-[-0.04em]
                    text-[#00256A]
                  "
                >
                  Spaces Built <br/> for Modern <br /> Living
                </h2>
              </div>

              {/* CENTER LINE */}
              <div
                className="
                  hidden
                  lg:block
                  h-[180px]
                  w-[1px]
                  bg-[#E2E2E2]
                "
              />

              {/* RIGHT */}
              <div className="lg:w-[60%]">
                <p
                  className="
                    text-[15px]
                    md:text-[18px]
                    leading-[170%]
                    text-[#666]
                    max-w-[620px]
                  "
                >
                  Each Doss Realty project reflects our commitment to quality, thoughtful planning, and creating homes that offer comfort, 
                  value, and lasting distinction. From elegant residences to inspiring developments, 
                  our projects are created to deliver exceptional living experiences for today and generations ahead.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-[140px] md:h-[160px]" />
    </section>
  );
};

export default Hero;