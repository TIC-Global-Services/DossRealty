"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import founderImg from "@/assets/about/FounderSample.webp";

const founder = {
  name: "D.V. Prathap Reddy",
  role: "Founder & Chairman",
  description: [
    "D.V. Prathap Reddy is the Founder and Chairman of Doss Realty. In 1991, he recognized the growing potential of Chennai's real estate market and established a business founded on transparency, reliability, and long-term value creation.",

    "Beginning with land development, he built a reputation for identifying opportunities and transforming them into thriving communities. Over the past three decades, Mr. Prathap has overseen the development of more than 5 million square feet and helped thousands of families realize their aspirations through real estate.",

    "Under his leadership, Doss Realty has evolved into a trusted name built on integrity, disciplined growth, and a commitment to delivering lasting value.",

    "Mr. Prathap also serves as a Board Member of Sri Ramakrishna Polytechnic College and supports a range of community and philanthropic initiatives, reflecting the values of stewardship and social responsibility that have guided his career.",

    "Today, he continues to guide the company’s strategic direction while upholding the principles that have defined its success since inception.",
  ],
};

const Builts = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <>
      <section data-theme="light" className="py-14 lg:py-20 bg-white">
        <div className="mx-auto px-0 md:px-8 lg:px-10">
          {/* MOBILE — image on top, content below on white */}
          <div className="md:hidden">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={founderImg}
                alt={founder.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-5 pt-8 text-center">
              <p className="text-[13px] uppercase tracking-wider text-[#00256A] font-[500]">
                {founder.role}
              </p>

              <h2 className="mt-2 font-heading font-[300] text-[25px] leading-[34px] text-[#1B2327]">
                {founder.name}
              </h2>

              <p className="mt-4 text-[14px] leading-[1.7] text-[#333333] font-[300]">
                {founder.description[0]}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="
                  mt-6
                  rounded-full
                  border
                  border-[#00256A]/20
                  bg-[#00256A]/5
                  px-6
                  py-2.5
                  text-[13px]
                  font-[500]
                  text-[#00256A]
                  transition
                  duration-300
                  hover:bg-[#00256A]/10
                  cursor-pointer
                "
              >
                Read more
              </button>
            </div>
          </div>

          {/* DESKTOP — image confined to left half, content in white panel on right */}
          <div className="hidden md:flex md:h-[420px] lg:h-[560px] overflow-hidden border border-[#D9D9D9] md:rounded-[10px]">
            <div className="relative w-1/2 lg:w-[55%]">
              <Image
                src={founderImg}
                alt={founder.name}
                fill
                className="object-cover object-left"
                priority
              />

              {/* WHITE BLEND (seam into the content panel) */}
              <div className="absolute inset-y-0 right-0 w-24 lg:w-32 bg-gradient-to-r from-transparent to-white" />
            </div>

            {/* CONTENT PANEL */}
            <div className="flex w-1/2 lg:w-[45%] items-center bg-white p-10 lg:p-16">
              <div className="w-full text-[#1B2327]">
                <p className="text-[13px] lg:text-[15px] uppercase tracking-wider text-[#00256A] font-[500]">
                  {founder.role}
                </p>

                <h2 className="mt-2 font-heading font-[300] text-[25px] leading-[34px] lg:text-[37px] lg:leading-[48px] text-[#1B2327]">
                  {founder.name}
                </h2>

                <p className="mt-4 text-[14px] lg:text-[16px] leading-[1.7] text-[#333333] font-[300]">
                  {founder.description[0]}
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => setOpen(true)}
                    className="
                      rounded-full
                      border
                      border-[#00256A]/20
                      bg-[#00256A]/5
                      px-6
                      py-2.5
                      text-[13px]
                      lg:text-[15px]
                      font-[500]
                      text-[#00256A]
                      transition
                      duration-300
                      hover:bg-[#00256A]/10
                      cursor-pointer
                    "
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {open &&
        mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[10050]
              flex
              items-center
              justify-center
              bg-black/50
              backdrop-blur-md
              px-5
            "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-[750px]
                max-h-[85dvh]
                overflow-y-auto
                rounded-[24px]
                sm:rounded-[32px]
                bg-white
                p-6
                sm:p-8
                md:p-12
                shadow-2xl
              "
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-5
                  right-5
                  z-20
                  flex
                  h-9
                  w-9
                  md:h-10
                  md:w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/5
                  text-black
                  transition
                  duration-300
                  hover:bg-black/10
                  cursor-pointer
                "
                aria-label="Close modal"
              >
                ✕
              </button>

              <p className="text-[13px] lg:text-[15px] uppercase tracking-wider text-[#00256A] font-[500]">
                {founder.role}
              </p>

              <h2 className="mt-2 font-heading font-[300] text-[25px] leading-[34px] lg:text-[37px] lg:leading-[48px] text-[#1B2327]">
                {founder.name}
              </h2>

              <div className="mt-6 space-y-4">
                {founder.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] lg:text-[17px] leading-[1.7] text-[#333333] font-[300]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Builts;
