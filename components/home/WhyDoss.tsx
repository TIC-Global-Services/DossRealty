"use client";

import Image from "next/image";
import bgImage from "@/assets/home/whyDossBg.jpg";
import GlassCard from "@/components/reusable/GlassCard";

export default function WhyDoss() {
  return (
    <section className="relative h-[100dvh] overflow-hidden mx-5 lg:mx-10 my-20">

      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Why Doss"
        fill
        priority
        className="object-cover"
      />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7]/60 to-transparent z-[1]" />

      {/* Content Wrapper */}
      <div className="relative z-[2] h-full">

        {/* Glass Card */}
        <GlassCard
          absolute
          className="
            top-8 left-8
            md:top-10 md:left-10
            lg:top-12 lg:left-12
            !max-w-[420px]
          "
        >

          <h2 className="font-heading text-black text-[34px] md:text-[48px] font-light leading-[100%] mb-5">
            Why Doss ?
          </h2>

          <p className="font-body text-black text-[15px] md:text-[16px] leading-[150%]">
            At Doss Realty, we believe every space should reflect purpose,
            elegance, and long-term value. With a commitment to quality
            craftsmanship and thoughtful development, we create properties
            that balance modern living with timeless design.
            <br />
            <br />
            Driven by trust, transparency, and customer satisfaction,
            Doss Realty believes in developing more than just properties —
            we create lasting experiences and meaningful communities.
            Our vision is centered on innovation, sustainable growth,
            and delivering excellence in every aspect of real estate
            development.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}