"use client";

import { useState } from "react";
import ContactForm from "@/components/reusable/forms/ContactForm";
import ReferFriendForm from "@/components/reusable/forms/ReferFriendForm";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"contact" | "refer">("contact");

  return (
    <section className="min-h-screen flex items-center overflow-hidden py-10 lg:py-14">
      <div className="w-full mx-auto px-6 lg:px-15">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 mt-10 md:mt-0 text-center lg:text-left">
            <h2
              className="font-secondary font-[700]
              text-black leading-[20px] md:pl-0
              text-[24px]
              lg:text-[28px]
              tracking-tighter
              uppercase"
            >
              Chennai
            </h2>

            <div className="mt-2 grid lg:grid-cols-2 gap-8  max-w-[250px] md:max-w-[500px] mx-auto lg:mx-0">

              <div>
                <p className="text-[#262B35] text-sm md:text-[18px] md:leading-[26px] tracking-normal font-[300] mb-2">
                  Doss Realty - INDIA
                </p>

                <p className="text-[#000000] md:text-[16px] leading-[24px] md:tracking-normal font-[300]">
                  Number : +91 99629 96977 <br />
                  Address: 14, Prathap Palace, Porur-Kundrathur Main Road,
                  Kovur, Chennai-128
                </p>
              </div>

              <div>
                <h3 className="text-[#262B35] text-sm md:text-[18px] md:leading-[20px] font-[300] mb-1.5">
                  Get in touch / WhatsApp
                </h3>

                <a
                  href="tel:+919962996977"
                  className="block text-[#717580] text-sm md:text-[18px] md:leading-[20px] font-heading font-[300] mb-3"
                >
                  +91 9962996977
                </a>

                <a
                  href="mailto:info@dossrealty.com"
                  className="block text-sm md:text-[18px] md:leading-[20px] font-heading font-[300] underline"
                >
                  info@dossrealty.in
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2 w-full lg:max-w-[660px] lg:ml-auto">

            {/* Tabs */}
            <div className="flex border-b border-[#D8D8D8] mb-4">

              <button
                onClick={() => setActiveTab("contact")}
                className={`
                  flex-1 py-3
                  text-[12px] lg:text-[16px] font-grand leading-[20px]
                  uppercase
                  tracking-[0px]
                  relative
                  transition-colors
                  duration-300
                  cursor-pointer
                  ${activeTab === "contact"
                    ? "text-black"
                    : "text-[#9A9A9A]"
                  }
                `}
              >
                Get In Touch

                {activeTab === "contact" && (
                  <span
                    className="
                      absolute
                      bottom-[-2.5]
                      left-1/2
                      -translate-x-1/2
                      w-[180px] rounded-full
                      h-[4px]
                      bg-black
                    "
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab("refer")}
                className={`
                  flex-1 py-3
                  text-[12px] lg:text-[16px] font-grand leading-[20px]
                  uppercase
                  tracking-[0px]
                  relative
                  transition-colors
                  duration-300
                  cursor-pointer
                  ${activeTab === "refer"
                    ? "text-[#2F3147]"
                    : "text-[#9A9A9A]"
                  }
                `}
              >
                Refer A Friend

                {activeTab === "refer" && (
                  <span
                    className="
                      absolute
                      bottom-[-2.5]
                      left-1/2
                      -translate-x-1/2
                      w-[180px] rounded-full
                      h-[4px]
                      bg-black
                    "
                  />
                )}
              </button>
            </div>

            {/* Card */}
              <div className="flex justify-center lg:justify-end w-full">
                <div
                  className="
                    w-full
                    lg:w-[570px]
                    bg-white
                    rounded-[10px]
                    shadow-[0_10px_40px_rgba(0,0,0,0.10)]
                    p-5
                    md:p-6
                    lg:p-7
                    xl:p-8
                    h-auto
                  "
                >
                  {activeTab === "contact" ? (
                    <ContactForm />
                  ) : (
                    <ReferFriendForm />
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}