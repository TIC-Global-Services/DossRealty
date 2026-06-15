"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bannerImg from "@/assets/contact/partnerBg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerSection() {
  const [activeTab, setActiveTab] = useState<"partner" | "job">("partner");
  const [showModal, setShowModal] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      // Content stagger
      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="px-6 lg:px-12">
          <div
            ref={cardRef}
            className="
              relative
              overflow-hidden
              rounded-[10px]
              min-h-[300px]
              md:min-h-[320px]
              will-change-transform
            "
          >
            {/* Background */}
            <Image
              src={bannerImg}
              alt="Partner Background"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content */}
            <div
              ref={contentRef}
              className="
                relative z-10
                flex flex-col
                justify-between
                h-full
                p-8 md:p-12 lg:p-16
              "
            >
              {/* Top Content */}
              <div className="max-w-[520px]">
                <h2
                  className="
                    text-white
                    font-small
                    leading-[50px] tracking-[-1.44px]
                    text-[32px]
                    md:text-[48px]
                  "
                >
                  {activeTab === "partner" ? (
                    <>
                      Channel
                      <br />
                      Partner Enquiry
                    </>
                  ) : (
                    <>Join Us</>
                  )}
                </h2>

                <p
                  className="
                    mt-4
                    text-white/90
                    text-[14px]
                    md:text-[16px]
                    leading-[20px] tracking-[-0.48px]
                    max-w-[550px]
                  "
                >
                  {activeTab === "partner"
                    ? "Collaborate with Doss Realty and become a part of our growing network of trusted channel partners and real estate associates."
                    : "At Doss Realty, we believe great spaces are built by great people. Join our team and grow with a company driven by trust, innovation, and a long-term vision for creating meaningful developments across Chennai."}
                </p>

                <button
                  onClick={() => setShowModal(true)}
                  className="
                    mt-6 font-regular
                    bg-white
                    text-[#032B7A]
                    px-8
                    py-3
                    rounded-full
                    text-[16px] md:leading-[20px] md:tracking-[-0.48px]
                    font-medium
                    transition-all
                    duration-300
                    hover:scale-105
                    cursor-pointer
                  "
                >
                  {activeTab === "partner"
                    ? "Become a Partner"
                    : "Apply Now"}
                </button>
              </div>

              {/* Premium Glass Tabs */}
              <div className="flex justify-center mt-12">
                <div
                  className="
                    relative
                    flex
                    items-center
                    rounded-full
                    bg-[rgba(255,255,255,0.14)]
                    backdrop-blur-[20px]
                    border border-white/10
                    p-[6px]
                    shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                    overflow-hidden
                  "
                >
                  {/* Active Slider */}
                  <span
                    className={`
                      absolute
                      top-[6px]
                      left-[6px]
                      h-[42px]
                      rounded-full
                      bg-white
                      shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        activeTab === "partner"
                          ? "translate-x-0 w-[145px]"
                          : "translate-x-[145px] w-[120px]"
                      }
                    `}
                  />

                  {/* Channel Partner */}
                  <button
                    onClick={() => setActiveTab("partner")}
                    className={`
                      relative
                      z-10
                      flex
                      h-[42px]
                      w-[145px]
                      items-center
                      justify-center
                      rounded-full
                      md:text-[14px] md:leading-[16px] md:tracking-[-0.48px]
                      font-medium
                      transition-all
                      cursor-pointer
                      duration-300
                      ${
                        activeTab === "partner"
                          ? "text-[#032B7A]"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >
                    Channel Partner
                  </button>

                  {/* Job Enquiry */}
                  <button
                    onClick={() => setActiveTab("job")}
                    className={`
                      relative
                      z-10
                      flex
                      h-[42px]
                      w-[120px]
                      items-center
                      justify-center
                      rounded-full
                      md:text-[14px] md:leading-[16px] md:tracking-[-0.48px]
                      font-medium
                      cursor-pointer
                      transition-all
                      duration-300
                      ${
                        activeTab === "job"
                          ? "text-[#032B7A]"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >
                    Job Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/40 backdrop-blur-sm p-4
          "
        >
          <div
            className="
              relative bg-white rounded-[24px]
              w-full max-w-[550px]
              max-h-[90vh]
              shadow-[0_20px_80px_rgba(0,0,0,0.15)]
              p-8 md:p-12
            "
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="
                absolute top-5 right-5
                text-[#2F3147]
                text-[28px]
                leading-none
                cursor-pointer
              "
            >
              ×
            </button>

            {activeTab === "partner" ? (
              <>
                <h2 className="text-center font-heading text-[#2F3147] text-[36px] md:text-[45px]">
                  REGISTER NOW
                </h2>

                <form className="mt-10 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Brokerage Firm name*"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="City*"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="+91"
                      className="w-[90px] border-b border-[#E5E5E5] pb-3 outline-none"
                    />

                    <input
                      type="tel"
                      placeholder="xxx xxx xxx"
                      className="flex-1 border-b border-[#E5E5E5] pb-3 outline-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="
                        bg-[#032B7A]
                        text-white
                        px-10 py-3
                        rounded-full
                        transition duration-300
                        hover:scale-105
                        cursor-pointer
                      "
                    >
                      Send inquiry
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-center font-heading text-[#2F3147] text-[36px] md:text-[45px]">
                  APPLY NOW
                </h2>

                <form className="mt-10 space-y-4">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your email address*"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                  />

                  <textarea
                    rows={4}
                    placeholder="Your CV Link and message"
                    className="w-full border-b border-[#E5E5E5] pb-3 outline-none resize-none"
                  />

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="
                        bg-[#032B7A]
                        text-white
                        px-10 py-3
                        rounded-full
                        transition duration-300
                        hover:scale-105
                        cursor-pointer
                      "
                    >
                      Apply now
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}