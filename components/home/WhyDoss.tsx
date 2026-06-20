"use client";

import Image from "next/image";

import bgImage from "@/assets/home/whyDossImg.jpeg";
import GlassCard from "@/components/reusable/GlassCard";

export default function WhyDoss() {
  return (
    <section
      className="
        relative
        min-h-[100dvh]
        md:h-[100dvh]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Why Doss"
        fill
        priority
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Top Gradient Overlay
      <div className="absolute top-0 left-0 z-[1] h-40 w-full bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7]/60 to-transparent" /> */}

      {/* Content Wrapper */}
      <div className="relative z-[2] h-full">

        {/* MOBILE */}
        <div className="block md:hidden px-5 pt-6 pb-12">
          <GlassCard
            className="backdrop-blur-[30px]
              !max-w-full
              !w-full
            "
          >
            <h2 className="mb-5 font-small text-[34px] tracking-tight lowercase leading-[100%] text-white">
              Why Doss ?
            </h2>

            <p className="font-body text-[14px] leading-[20px] text-white">
              At DOSS, we begin with the land and refine from there.
              Every line, material, finish, and proportion is considered by a team that believes true quality is felt before it is 
              explained. Our work is shaped through design, measured through detail, and completed through the discipline 
              of craftsmanship.
              <br />
              <br />
              Distinctive. Precise. Enduring.
            </p>
          </GlassCard>
        </div>

        {/* DESKTOP  */}
        <div className="hidden md:block">
          <GlassCard
            absolute
            className="backdrop-blur-[35px]
              top-8 left-8
              md:top-15 md:left-10
              !max-w-[550px] !px-10
            "
          >
            <h2 className="mb-5 font-small text-[34px] md:text-[48px] tracking-tight lowercase leading-[100%] text-white">
              Why Doss?
            </h2>

            <p className="font-body text-[15px] md:text-[16px] leading-[20px] text-white">
              At DOSS, we begin with the land and refine from there.
              Every line, material, finish, and proportion is considered by a team that believes true quality is felt before it is 
              explained. Our work is shaped through design, measured through detail, and completed through the discipline 
              of craftsmanship.
              <br />
              <br />
              Distinctive. Precise. Enduring.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}