"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .regex(
    /^[A-Za-z\s]+$/,
    "Only letters are allowed"
  );

const phoneValidation = z
  .string()
  .min(1, "Phone number is required")
  .length(10, "Phone number must be 10 digits")
  .regex(/^[6-9]\d{9}$/, "Enter valid mobile number");

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

const contactSchema = z.object({
  name: nameValidation,
  email: gmailValidation,
  phone: phoneValidation,
  message: z.string().min(
    10,
    "Message must be at least 10 characters"
  ),
});

const referSchema = z.object({
  yourName: nameValidation,
  yourEmail: gmailValidation,
  yourPhone: phoneValidation,

  friendName: nameValidation,
  friendEmail: gmailValidation,
  friendPhone: phoneValidation,

  project: z
    .string()
    .min(2, "Project name is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type ReferFormData = z.infer<typeof referSchema>;

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"contact" | "refer">("contact");
  const [loading, setLoading] = useState(false);

  const {
    register: contactRegister,
    handleSubmit: contactHandleSubmit,
    reset: resetContact,
    formState: { errors: contactErrors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const {
    register: referRegister,
    handleSubmit: referHandleSubmit,
    reset: resetRefer,
    formState: { errors: referErrors },
  } = useForm<ReferFormData>({
    resolver: zodResolver(referSchema),
  });

  const onContactSubmit = async (
    data: ContactFormData
  ) => {
    try {
      setLoading(true);

      console.log(data);

      resetContact();

      alert("Inquiry submitted successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onReferSubmit = async (
    data: ReferFormData
  ) => {
    try {
      setLoading(true);

      console.log(data);

      resetRefer();

      alert("Referral submitted successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
                  Number : +91 99629 96977 <br /> Address: 14, Prathap Palace, Porur-Kundrathur Main Road, Kovur, Chennai-128
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
                  info@dossrealty.in
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
                  text-[12px] md:text-[16px] font-grand leading-[20px]
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

                  <form
                    onSubmit={contactHandleSubmit(onContactSubmit)}
                    className="mt-6 lg:mt-7 space-y-4 lg:space-y-5"
                  >

                    <div>
                      <input
                        {...contactRegister("name")}
                        type="text"
                        placeholder="Your name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {contactErrors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {contactErrors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...contactRegister("email")}
                        type="email"
                        placeholder="Your email address*"
                        required
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {contactErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {contactErrors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...contactRegister("phone")}
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Your phone*"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {contactErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {contactErrors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <textarea
                        {...contactRegister("message")}
                        rows={3}
                        placeholder="Your message*"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none resize-none text-[14px]"
                      />

                      {contactErrors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {contactErrors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
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
                        disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send inquiry"}
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

                  <form
                    onSubmit={referHandleSubmit(onReferSubmit)}
                    className="mt-6 lg:mt-7 space-y-4 lg:space-y-5"
                  >

                    <div>
                      <input
                        {...referRegister("yourName")}
                        type="text"
                        placeholder="Your name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.yourName && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.yourName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("yourEmail")}
                        type="email"
                        placeholder="Your email address*"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.yourEmail && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.yourEmail.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("yourPhone")}
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Your phone"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.yourPhone && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.yourPhone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("friendName")}
                        type="text"
                        placeholder="Friend's name*"
                        onInput={(e) => {
                          e.currentTarget.value =
                            e.currentTarget.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.friendName && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.friendName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("friendEmail")}
                        type="email"
                        placeholder="Friend's email address*"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.friendEmail && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.friendEmail.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("friendPhone")}
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Friend's phone"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                        }}
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.friendPhone && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.friendPhone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...referRegister("project")}
                        type="text"
                        placeholder="Project for which you are referring"
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none text-[14px]"
                      />

                      {referErrors.project && (
                        <p className="text-red-500 text-xs mt-1">
                          {referErrors.project.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="
                        font-small
                        tracking-[-0.48px]
                        bg-[#032B7A]
                        text-white
                        px-8
                        py-3
                        rounded-full
                        text-[16px]
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}