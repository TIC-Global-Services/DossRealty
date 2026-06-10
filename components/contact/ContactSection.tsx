"use client";

import { useState } from "react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"contact" | "refer">("contact");

  return (
    <section className="min-h-screen flex items-center overflow-hidden py-10 lg:py-14">
      <div className="w-full mx-auto px-6 lg:px-15">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2
              className="font-secondary font-[700]
                text-black leading-[20px]
                text-[24px]
                lg:text-[28px]
                tracking-tighter
                uppercase
              "
            >
              Chennai
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 max-w-[500px]">

              <div>
                <p className="text-[#262B35] text-sm md:text-[18px] md:leading-[26px] tracking-normal font-[300] mb-3">
                  Doss Realty - INDIA
                </p>

                <p className="text-[#000000] md:text-[16px] leading-[24px] md:tracking-normal font-[300]">
                  Plot No. XX, Block A
                  <br />
                  Demo Layout,
                  Chennai
                </p>
              </div>

              <div>
                <h3 className="text-[#262B35] text-sm md:text-[18px] md:leading-[20px] font-[300] mb-1">
                  Get in touch
                </h3>

                <a
                  href="tel:+12345678910"
                  className="block text-[#717580] text-sm md:text-[18px] md:leading-[20px] font-heading font-[300] mb-3"
                >
                  +1 234 567 8910
                </a>

                <a
                  href="mailto:info@dossrealty.com"
                  className="block text-sm md:text-[18px] md:leading-[20px] font-heading font-[300] underline"
                >
                  info@dossrealty.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[560px] xl:max-w-[660px] lg:ml-auto">

            {/* Tabs */}
            <div className="flex border-b border-[#D8D8D8] mb-4">

              <button
                onClick={() => setActiveTab("contact")}
                className={`
                  flex-1 py-3
                  text-[12px] md:text-[16px] font-grand leading-[20px]
                  uppercase
                  tracking-[0px]
                  relative
                  transition-colors
                  duration-300
                  ${
                    activeTab === "contact"
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
                  text-[12px] md:text-[16px] font-grand leading-[20px]
                  uppercase
                  tracking-[0px]
                  relative
                  transition-colors
                  duration-300
                  ${
                    activeTab === "refer"
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
            <div
              className="w-[570px]
                bg-white
                rounded-[10px]
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
                p-5 md:p-6 lg:p-7 xl:p-8
                h-auto
              "
            >
              {activeTab === "contact" ? (
                <>
                  <h3
                    className="
                      text-center
                      text-[#2F3147]
                      font-heading
                      text-[26px]
                      md:text-[45px]
                      leading-[48px] tracking-[0px]
                    "
                  >
                    WE’LL GET IN TOUCH WITH YOU SOON
                  </h3>

                  <form className="mt-6 lg:mt-7 space-y-4 lg:space-y-5">

                    <input
                      type="text"
                      placeholder="Your name*"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="email"
                      placeholder="Your email address"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <textarea
                      rows={3}
                      placeholder="Your message"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        resize-none
                        text-[14px]
                      "
                    />

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="font-small tracking-[-0.48px]
                          bg-[#032B7A]
                          text-white
                          px-8
                          py-3
                          rounded-full
                          text-[13px]
                          transition
                          duration-300
                          hover:scale-105
                        "
                      >
                        Send inquiry
                      </button>
                    </div>

                  </form>
                </>
              ) : (
                <>
                  <h3
                    className="
                      text-center
                      text-[#2F3147]
                      font-heading
                      text-[26px]
                      md:text-[45px]
                      leading-[48px] tracking-[0px]
                    "
                  >
                    REFER A FRIEND
                  </h3>

                  <form className="mt-6 lg:mt-7 space-y-4 lg:space-y-5">

                    <input
                      type="text"
                      placeholder="Your name*"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="email"
                      placeholder="Your email address*"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="text"
                      placeholder="Friend's name*"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="email"
                      placeholder="Friend's email address*"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="tel"
                      placeholder="Friend's phone"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <input
                      type="text"
                      placeholder="Project for which you are referring"
                      className="
                        w-full
                        border-b
                        border-[#E5E5E5]
                        pb-3
                        outline-none
                        text-[14px]
                      "
                    />

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit" 
                        className="font-small tracking-[-0.48px]
                          bg-[#032B7A]
                          text-white
                          px-8
                          py-3
                          rounded-full
                          text-[16px]
                          transition
                          duration-300
                          hover:scale-105
                        "
                      >
                        Send inquiry
                      </button>
                    </div>

                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}