"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import builtImg from "@/assets/about/builtsImg.jpg";
import PrimaryBtn from "../reusable/PrimaryBtn";

const readMore = [
  {
    id: 1,
    name: "D.V. Prathap Reddy",
    role: "Founder & Chairman",
    description: [
      "D.V. Prathap Reddy is the Founder and Chairman of DOSS Realty. In 1991, he recognized the growing potential of Chennai's real estate market and established a business founded on transparency, reliability, and long-term value creation.",

      "Beginning with land development, he built a reputation for identifying opportunities and transforming them into thriving communities. Over the past three decades, Mr. Prathap has overseen the development of more than 5 million square feet and helped thousands of families realize their aspirations through real estate.",

      "Under his leadership, DOSS Realty has evolved into a trusted name built on integrity, disciplined growth, and a commitment to delivering lasting value.",

      "Mr. Prathap also serves as a Board Member of Sri Ramakrishna Polytechnic College and supports a range of community and philanthropic initiatives, reflecting the values of stewardship and social responsibility that have guided his career.",

      "Today, he continues to guide the company’s strategic direction while upholding the principles that have defined its success since inception.",
    ],
  },
];

const Builts = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">

          {/* IMAGE SECTION */}
          <div className="relative h-[500px] overflow-hidden rounded-[10px] md:h-[400px]">

            <Image
              src={builtImg}
              alt="Built Spaces"
              fill
              className="object-cover"
            />

            {/* CONTENT */}
            <div
              className="
                absolute inset-0
                flex items-center justify-end
                p-6 md:p-10 lg:p-16
              "
            >
              <div className="max-w-[500px] text-white">

                <h2
                  className="
                    font-heading font-[300]
                    text-[24px] md:text-[30px]
                    leading-[35px]
                    text-white
                  "
                >
                  Built on Trust.
                  <br />
                  Driven by Purpose.
                </h2>

                <p
                  className="
                    mt-6
                    text-[15px]
                    md:text-[18px]
                    leading-[21px]
                    text-[#F5F4F2]
                  "
                >
                  Clients Built on Trust
                  represents the strong
                  relationships we’ve created
                  through transparency,
                  reliability, and consistent
                  quality.
                </p>

                <PrimaryBtn
                  mode="dark"
                  onClick={() =>
                    setOpen(true)
                  }
                  className="
                    mt-6
                    text-white
                    transition duration-300
                    hover:scale-105
                  "
                >
                  Read More
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onClick={() =>
              setOpen(false)
            }
            className="
              fixed inset-0
              z-[9999]
              flex items-center justify-center
              bg-black/50
              backdrop-blur-md
              px-5
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                w-full
                max-w-[750px]
                overflow-hidden
                rounded-[32px]
                border border-white/20
                bg-[rgba(255,255,255,0.08)]
                p-8 md:p-12
                backdrop-blur-[30px]
                shadow-[0_20px_80px_rgba(0,0,0,0.30)]
              "
            >
              {/* Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/10
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Close */}
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                  absolute top-5 right-5
                  z-20
                  flex h-[42px] w-[42px]
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition duration-300
                  hover:bg-white/20
                "
              >
                ✕
              </button>

              {/* Dynamic Content */}
              {readMore.map((item) => (
                <div
                  key={item.id}
                  className="
                    relative z-10
                    text-white
                  "
                >
                  <h2
                    className="
                      text-[32px]
                      md:text-[48px]
                      font-light
                      leading-tight
                    "
                  >
                    {item.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[16px]
                      text-white/60
                    "
                  >
                    {item.role}
                  </p>

                  <div className="mt-8 space-y-4">
                    {item.description.map(
                      (
                        paragraph,
                        index
                      ) => (
                        <p
                          key={index}
                          className="
                            text-[15px]
                            md:text-[18px]
                            leading-[1.2]
                            text-white/75
                          "
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Builts;