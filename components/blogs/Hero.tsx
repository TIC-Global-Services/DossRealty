"use client";

import React from "react";
import { motion } from "framer-motion";

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
        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            font-small
            text-[#111111]
            text-[34px]
            md:text-[60px]
            leading-[66px]
            tracking-[-1.8px]
          "
        >
          Learn Before You Invest
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-4
            max-w-[600px]
            text-[#666666]
            text-[14px]
            md:text-[16px]
            leading-[24px]
            tracking-[-0.48px]
          "
        >
          Clear, practical insights to help you make informed
          property decisions. Thoughtful perspectives, market
          insights, and stories shaping the future of modern
          real estate.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;