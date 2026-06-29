"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "@/data/contactSchema";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOfuJyXdftiZVb8IYeBc_h9gTQVPjfup5HkwFGddrXM_OIUDbyss9Ul1l64rltJKia/exec";

export default function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(
      contactSchema
    ),
  });

  const onSubmit = async (
    data: ContactFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await fetch(
          GOOGLE_SCRIPT_URL,
          {
            method: "POST",
            body: JSON.stringify({
              formType: "Contact",

              name: data.name,
              email: data.email,
              phone: data.phone,
              message: data.message,
            }),
          }
        );

      const result =
        await response.json();

      if (!result.success) {
        throw new Error(
          "Failed to submit enquiry."
        );
      }

      reset();

      alert(
        "Inquiry submitted successfully!"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3
        className="
          text-center
          text-[#2F3147]
          font-heading
          text-[26px]
          leading-[30px]
          lg:text-[45px]
          lg:leading-[48px]
        "
      >
        WE’LL GET IN TOUCH WITH YOU SOON
      </h3>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="
          mt-6
          lg:mt-7
          space-y-6
          lg:space-y-5
        "
      >
        {/* Name */}
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name*"
            onInput={(e) => {
              e.currentTarget.value =
                e.currentTarget.value.replace(
                  /[^A-Za-z\s]/g,
                  ""
                );
            }}
            className="
              w-full
              border-b
              border-[#E5E5E5]
              pb-3
              outline-none
              text-[14px]
            "
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
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

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="Your phone*"
            onInput={(e) => {
              e.currentTarget.value =
                e.currentTarget.value.replace(
                  /\D/g,
                  ""
                );
            }}
            className="
              w-full
              border-b
              border-[#E5E5E5]
              pb-3
              outline-none
              text-[14px]
            "
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            rows={3}
            placeholder="Your message*"
            className="
              w-full
              resize-none
              border-b
              border-[#E5E5E5]
              pb-3
              outline-none
              text-[14px]
            "
          />

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
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
              text-[13px]
              transition
              duration-300
              hover:scale-105
              disabled:opacity-50
              disabled:cursor-not-allowed
              cursor-pointer
            "
          >
            {loading
              ? "Sending..."
              : "Send Inquiry"}
          </button>
        </div>
      </form>
    </>
  );
}