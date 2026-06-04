"use client";

import { useState } from "react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"contact" | "refer">("contact");

  return (
    <section className="min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-[#2F3147] text-[28px] lg:text-[34px] font-semibold uppercase">
              Chennai
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 max-w-[500px]">
              <div>
                <h3 className="text-[#2F3147] text-[15px] font-medium mb-3">
                  Doss Realty - INDIA
                </h3>

                <p className="text-[#666] text-[14px] leading-[180%]">
                  Plot No. XX, Block A
                  <br />
                  Demo Layout,
                  Chennai
                </p>
              </div>

              <div>
                <h3 className="text-[#2F3147] text-[15px] font-medium mb-3">
                  Get in touch
                </h3>

                <a
                  href="tel:+12345678910"
                  className="block text-[#666] text-[14px]"
                >
                  +1 234 567 8910
                </a>

                <a
                  href="mailto:info@dossrealty.com"
                  className="block text-[#666] text-[14px] mt-2"
                >
                  info@dossrealty.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[560px] xl:max-w-[620px] lg:ml-auto">

            {/* Tabs */}
            <div className="flex border-b border-[#D8D8D8] mb-4">
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-3 text-[12px] uppercase tracking-[1px] relative ${
                  activeTab === "contact"
                    ? "text-[#2F3147]"
                    : "text-[#9A9A9A]"
                }`}
              >
                Get In Touch

                {activeTab === "contact" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[2px] bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("refer")}
                className={`flex-1 py-3 text-[12px] uppercase tracking-[1px] relative ${
                  activeTab === "refer"
                    ? "text-[#2F3147]"
                    : "text-[#9A9A9A]"
                }`}
              >
                Refer A Friend

                {activeTab === "refer" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[2px] bg-black" />
                )}
              </button>
            </div>

            {/* Card */}
            <div
              className="
                bg-white
                rounded-[20px]
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                p-6 lg:p-8
                max-h-[75vh]
                overflow-y-auto
              "
            >
              {activeTab === "contact" ? (
                <>
                  <h3 className="text-center text-[#2F3147] font-light text-[28px] lg:text-[42px] leading-[100%]">
                    WE’LL GET IN TOUCH
                    <br />
                    WITH YOU SOON
                  </h3>

                  <form className="mt-8 space-y-6">
                    <input
                      type="text"
                      placeholder="Your name*"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <textarea
                      rows={3}
                      placeholder="Your message"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none resize-none text-[14px]"
                    />

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-[#032B7A] text-white px-8 py-3 rounded-full text-[13px]"
                      >
                        Send inquiry
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="text-center text-[#2F3147] font-light text-[28px] lg:text-[42px] leading-[100%]">
                    REFER A FRIEND
                  </h3>

                  <form className="mt-8 space-y-6">
                    <input
                      type="text"
                      placeholder="Your name*"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="email"
                      placeholder="Your email address*"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="text"
                      placeholder="Friend's name*"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="email"
                      placeholder="Friend's email address*"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="tel"
                      placeholder="Friend's phone"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <input
                      type="text"
                      placeholder="Project for which you are referring"
                      className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                    />

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-[#032B7A] text-white px-8 py-3 rounded-full text-[13px]"
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