"use client";

import Image from "next/image";

import bgImage from "@/assets/home/whyDossBg.jpg";
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
        className="object-cover object-left"
      />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 z-[1] h-40 w-full bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7]/60 to-transparent" />

      {/* Content Wrapper */}
      <div className="relative z-[2] h-full">

        {/* MOBILE */}
        <div className="block md:hidden px-5 pt-6 pb-12">
          <GlassCard
            className="
              !max-w-full
              !w-full
            "
          >
            <h2 className="mb-5 font-regular text-[34px] tracking-tight lowercase leading-[100%] text-black">
              Why Doss ?
            </h2>

            <p className="font-body text-[15px] leading-[20px] text-black">
              At Doss Realty, we believe every
              space should reflect purpose,
              elegance, and long-term value.
              With a commitment to quality
              craftsmanship and thoughtful
              development, we create properties
              that balance modern living with
              timeless design.
              <br />
              <br />
              Driven by trust, transparency,
              and customer satisfaction,
              Doss Realty believes in
              developing more than just
              properties — we create lasting
              experiences and meaningful
              communities. Our vision is
              centered on innovation,
              sustainable growth, and
              delivering excellence in every
              aspect of real estate
              development.
            </p>
          </GlassCard>
        </div>

        {/* DESKTOP  */}
        <div className="hidden md:block">
          <GlassCard
            absolute
            className="
              top-8 left-8
              md:top-15 md:left-10
              !max-w-[550px] !px-10
            "
          >
            <h2 className="mb-5 font-regular text-[34px] md:text-[48px] tracking-tight lowercase leading-[100%] text-black">
              Why Doss?
            </h2>

            <p className="font-body text-[15px] md:text-[16px] leading-[20px] text-black">
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