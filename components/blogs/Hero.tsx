import React from "react";


const Hero = () => {
  return (
    <section
      className="
        flex
        min-h-[80vh]
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <div className="max-w-[700px]">

        <h1
          className="
            font-heading
            text-[#111111]
            text-[34px]
            md:text-[52px]
            leading-[100%]
            tracking-[-0.04em]
          "
        >
          Learn Before You Invest
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-[520px]
            text-[#666666]
            text-[14px]
            md:text-[16px]
            leading-[170%]
          "
        >
          Gain practical insights, tips, and
          essential knowledge to make informed
          real estate decisions with confidence.
        </p>

      </div>
    </section>
  );
};

export default Hero;