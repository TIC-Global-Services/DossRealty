"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import bannerImg from "@/assets/contact/partnerBg.jpg";

gsap.registerPlugin(ScrollTrigger);


const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .regex(
    /^[A-Za-z\s]+$/,
    "Only letters are allowed"
  );

const textValidation = z
  .string()
  .min(3, "Minimum 3 characters required")
  .regex(
    /^[A-Za-z\s]+$/,
    "Only letters are allowed"
  );

const gmailValidation = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address")
  .refine(
    (email) => email.toLowerCase().endsWith("@gmail.com"),
    {
      message: "Only Gmail addresses are allowed",
    }
  );

const phoneValidation = z
  .string()
  .min(1, "Phone number is required")
  .length(10, "Phone number must be 10 digits")
  .regex(/^[6-9]\d{9}$/, "Enter valid mobile number");

const partnerSchema = z.object({
  brokerageFirm: textValidation,

  fullName: textValidation,

  email: gmailValidation,

  city: textValidation,

  phone: phoneValidation,
});

const jobSchema = z.object({
  name: nameValidation,

  email: gmailValidation,

  phone: phoneValidation,

  position: z
    .string()
    .min(1, "Please select a position"),

  cvLink: z
    .string()
    .min(10, "Please enter your CV link and message"),
});

type PartnerFormData = z.infer<typeof partnerSchema>;
type JobFormData = z.infer<typeof jobSchema>;

export default function PartnerSection() {
  const [activeTab, setActiveTab] = useState<"partner" | "job">("partner");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);


  const {
    register: partnerRegister,
    handleSubmit: partnerHandleSubmit,
    reset: resetPartner,
    formState: {
      errors: partnerErrors,
    },
  } = useForm<PartnerFormData>({
    resolver: zodResolver(
      partnerSchema
    ),
  });

  const {
    register: jobRegister,
    handleSubmit: jobHandleSubmit,
    reset: resetJob,
    formState: {
      errors: jobErrors,
    },
  } = useForm<JobFormData>({
    resolver: zodResolver(
      jobSchema
    ),
  });

  const onPartnerSubmit = async (
    data: PartnerFormData
  ) => {
    try {
      setLoading(true);

      console.log(
        "Partner Form:",
        data
      );

      resetPartner();

      alert(
        "Partner enquiry submitted successfully"
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onJobSubmit = async (
    data: JobFormData
  ) => {
    try {
      setLoading(true);

      console.log(
        "Job Form:",
        data
      );

      resetJob();

      alert(
        "Application submitted successfully"
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
                      ${activeTab === "partner"
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
                      w-[120px]
                      items-center
                      justify-center
                      rounded-full
                      md:text-[14px] md:leading-[16px] md:tracking-[-0.48px]
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

              {activeTab === "partner" ? (
                <>
                  <h2 className="text-center font-heading text-[#2F3147] text-[36px] md:text-[45px]">
                    REGISTER NOW
                  </h2>

                  <form
                    onSubmit={partnerHandleSubmit(onPartnerSubmit)} className="mt-10 space-y-4">
                    <div>
                      <input
                        {...partnerRegister("brokerageFirm")}
                        type="text"
                        placeholder="Your Brokerage Firm name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {partnerErrors.brokerageFirm && (
                        <p className="text-red-500 text-xs mt-1">
                          {partnerErrors.brokerageFirm.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...partnerRegister("fullName")}
                        type="text"
                        placeholder="Full Name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {partnerErrors.fullName && (
                        <p className="text-red-500 text-xs mt-1">
                          {partnerErrors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...partnerRegister("email")}
                        type="email"
                        placeholder="Email*"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {partnerErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {partnerErrors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...partnerRegister("city")}
                        type="text"
                        placeholder="City*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {partnerErrors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          {partnerErrors.city.message}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <input
                        type="text"
                        value="+91"
                        readOnly
                        className="w-[90px] border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      <div className="flex-1">
                        <input
                          {...partnerRegister("phone")}
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="9876543210"
                          onInput={(e) => {
                            e.currentTarget.value =
                              e.currentTarget.value.replace(/\D/g, "");
                          }}
                          className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                        />

                        {partnerErrors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {partnerErrors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="
                      bg-[#032B7A]
                      text-white
                      px-10
                      py-3
                      rounded-full
                      transition
                      duration-300
                      hover:scale-105
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                      >
                        {loading ? "Sending..." : "Send inquiry"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-center font-heading text-[#2F3147] text-[36px] md:text-[45px]">
                    APPLY NOW
                  </h2>

                  <form
                    onSubmit={jobHandleSubmit(onJobSubmit)}
                    className="mt-10 space-y-3"
                  >
                    {/* Name */}
                    <div>
                      <input
                        {...jobRegister("name")}
                        type="text"
                        placeholder="Your name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {jobErrors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {jobErrors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        {...jobRegister("email")}
                        type="email"
                        placeholder="Your email address*"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {jobErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {jobErrors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        {...jobRegister("phone")}
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Your phone"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(/\D/g, "");
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                      />

                      {jobErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {jobErrors.phone.message}
                        </p>
                      )}
                    </div>


                    {/* Opening Position */}
                    <div className="relative max-w-[500px]">
                      <select
                        {...jobRegister("position")}
                        defaultValue=""
                        className="
                        w-full
                        appearance-none
                        border-b
                        border-[#E5E5E5]
                        pb-4
                        pr-10
                        outline-none
                        bg-transparent
                        text-[16px]
                        text-[#7f7f7f]
                        cursor-pointer
                      "
                      >
                        <option value="" disabled>
                          Opening Positions
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                      {/* Custom Arrow */}
                      <svg
                        className="
                        pointer-events-none
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        h-4
                        w-4
                        text-[#8A8A8A]
                      "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {jobErrors.position && (
                        <p className="text-red-500 text-xs mt-2">
                          {jobErrors.position.message}
                        </p>
                      )}
                    </div>

                    {/* CV Link */}
                    <div>
                      <textarea
                        {...jobRegister("cvLink")}
                        rows={3}
                        placeholder="Paste your CV & Message"
                        className="w-full border-b border-[#E5E5E5] pb-2 outline-none resize-none"
                      />

                      {jobErrors.cvLink && (
                        <p className="text-red-500 text-xs mt-1">
                          {jobErrors.cvLink.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="
                      bg-[#032B7A]
                      text-white
                      px-10
                      py-3
                      rounded-full
                      transition
                      duration-300
                      hover:scale-105
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                      >
                        {loading ? "Applying..." : "Apply now"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}