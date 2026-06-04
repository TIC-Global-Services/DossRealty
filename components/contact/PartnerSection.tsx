"use client";

import { useState } from "react";
import Image from "next/image";

import bannerImg from "@/assets/contact/partnerBg.jpg";

export default function PartnerSection() {
  const [activeTab, setActiveTab] = useState<"partner" | "job">("partner");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-16 lg:py-16">
        <div className="px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[10px] min-h-[300px] md:min-h-[320px]">

            {/* Background */}
            <Image
              src={bannerImg}
              alt="Partner Background"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 lg:p-16">

              {/* Top Content */}
              <div className="max-w-[520px]">
                <h2
                  className="
                    text-white
                    font-heading
                    leading-[95%]
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
                    leading-[160%]
                    max-w-[450px]
                  "
                >
                  {activeTab === "partner"
                    ? "Collaborate with Doss Realty and become a part of our growing network of trusted channel partners and real estate associates."
                    : "Build your future with a team committed to thoughtful development, lasting relationships, and excellence in every space we create."}
                </p>

                <button
                  onClick={() => setShowModal(true)}
                  className="
                    mt-6
                    bg-white
                    text-[#032B7A]
                    px-6
                    py-3
                    rounded-full
                    text-[14px]
                    font-medium
                    transition-all
                    hover:scale-105
                  "
                >
                  {activeTab === "partner"
                    ? "Become a Partner"
                    : "Apply Now"}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex justify-center mt-12">
                <div className="bg-white rounded-full p-[4px] shadow-lg flex items-center">

                  <button
                    onClick={() => setActiveTab("partner")}
                    className={`
                      px-6
                      py-2
                      rounded-full
                      text-[12px]
                      md:text-[13px]
                      font-medium
                      transition-all
                      ${
                        activeTab === "partner"
                          ? "bg-[#032B7A] text-white"
                          : "text-[#2F3147]"
                      }
                    `}
                  >
                    Channel Partner
                  </button>

                  <button
                    onClick={() => setActiveTab("job")}
                    className={`
                      px-6
                      py-2
                      rounded-full
                      text-[12px]
                      md:text-[13px]
                      font-medium
                      transition-all
                      ${
                        activeTab === "job"
                          ? "bg-[#032B7A] text-white"
                          : "text-[#2F3147]"
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
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
            p-4
          "
        >
          <div
            className="
              relative
              bg-white
              rounded-[24px]
              w-full
              max-w-[550px]
              max-h-[90vh]
              shadow-[0_20px_80px_rgba(0,0,0,0.15)]
              p-8
              md:p-12
            "
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="
                absolute
                top-5
                right-5
                text-[#2F3147]
                text-[28px]
                leading-none
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
                        px-10
                        py-3
                        rounded-full
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
                        px-10
                        py-3
                        rounded-full
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