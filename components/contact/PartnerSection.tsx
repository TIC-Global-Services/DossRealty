"use client";

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import bannerImg from "@/assets/contact/partnerBg.webp";

import PartnerForm from "@/components/reusable/forms/PartnerForm";
import JobForm from "@/components/reusable/forms/JobForm";




export default function PartnerSection() {
  const [activeTab, setActiveTab] = useState<"partner" | "job">("partner");
  const [showModal, setShowModal] = useState(false);


useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("form") === "job") {
    setActiveTab("job");
    setShowModal(true);
  }
}, []);


  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.96,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(contentRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
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
              min-h-[800px] 
              md:min-h-[400px]
              lg:min-h-[320px]
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
                h-full
                p-8 md:p-12 lg:p-16
              "
            >
              {/* Top Content */}
              <div className="max-w-[520px] mt-10 md:mt-0">
                <h2
                  className="
                    text-white
                    font-small
                    lg:leading-[50px] lg:tracking-[-1.44px]
                    text-[24px] leading-[30px] md:leading-[24px]
                    lg:text-[48px]
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
                  className="mt-2
                    lg:mt-4
                    text-white/90
                    text-[13px] leading-[16px]
                    lg:text-[16px]
                    lg:leading-[20px] lg:tracking-[-0.48px]
                    max-w-[550px]
                  "
                >
                  {activeTab === "partner"
                    ? "Collaborate with Doss Realty and become a part of our growing network of trusted channel partners and real estate associates."
                    : "At Doss Realty, we believe great spaces are built by great people. Join our team and grow with a company driven by trust, innovation, and a long-term vision for creating meaningful developments across Chennai."}
                </p>

                <button
                  onClick={() => setShowModal(true)}
                  className="mt-4
                    lg:mt-6 font-small
                    bg-white
                    text-[#032B7A] px-6 py-2.5
                    lg:px-8
                    lg:py-3
                    rounded-full text-[13px] leading-[20px]
                    lg:text-[16px] lg:leading-[20px] tracking-[-0.48px]
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
              <div className="flex justify-center mt-auto pt-100 md:pt-20 lg:mt-12 lg:pt-0">
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
                      ${activeTab === "partner"
                        ? "translate-x-0 w-[145px]"
                        : "translate-x-[145px] w-[145px]"
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
                      rounded-full text-[13px] tracking-[-0.5px]
                      lg:text-[14px] leading-[16px] lg:tracking-[-0.48px]
                      font-medium
                      transition-all
                      cursor-pointer
                      duration-300
                      ${activeTab === "partner"
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
                      w-[145px]
                      items-center
                      justify-center
                      rounded-full text-[13px] tracking-[-0.5px]
                      lg:text-[14px] leading-[16px] lg:tracking-[-0.48px]
                      font-medium
                      cursor-pointer
                      transition-all
                      duration-300
                      ${activeTab === "job"
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
          fixed
          inset-0
          z-[9999]
          bg-black/40
          backdrop-blur-sm
          overflow-y-auto
        "
        >
          <div
            className="
            min-h-screen
            flex
            justify-center
            items-start
            lg:items-center
            px-4
            py-8
          "
          >
            <div
              className="
              partner-modal
              relative
              bg-white
              rounded-[10px]
              w-full
              max-w-[550px]
              max-h-[85vh]
              overflow-y-auto
              [scrollbar-gutter:stable]
              p-8
              md:p-10
              lg:p-16
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

              <button
  onClick={() => setShowModal(false)}
  className="
    absolute
    top-5
    right-5
    z-20
    text-[#2F3147]
    text-[28px]
    leading-none
    cursor-pointer
  "
>
  ×
</button>

{activeTab === "partner" ? (
  <PartnerForm />
) : (
  <JobForm />
)}

              
            </div>
          </div>
        </div>
      )}
    </>
  );
}