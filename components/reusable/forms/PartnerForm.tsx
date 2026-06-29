"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  partnerSchema,
  type PartnerFormData,
} from "@/data/partnerSchema";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOfuJyXdftiZVb8IYeBc_h9gTQVPjfup5HkwFGddrXM_OIUDbyss9Ul1l64rltJKia/exec";

export default function PartnerForm() {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerFormData>({
    resolver: zodResolver(
      partnerSchema
    ),
  });

  const onSubmit = async (
    data: PartnerFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await fetch(
          GOOGLE_SCRIPT_URL,
          {
            method: "POST",
            body: JSON.stringify({
              formType: "Partner",

              brokerageFirm:
                data.brokerageFirm,

              fullName:
                data.fullName,

              email:
                data.email,

              city:
                data.city,

              phone:
                data.phone,
            }),
          }
        );

      const text =
        await response.text();

      const result =
        JSON.parse(text);

      if (!result.success) {
        throw new Error(
          "Failed to submit partner enquiry."
        );
      }

      reset();

      alert(
        "Partner enquiry submitted successfully!"
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
      <h2
        className="
          text-center
          font-heading
          text-[#2F3147]
          text-[36px]
          lg:text-[45px]
        "
      >
        REGISTER NOW
      </h2>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="
          mt-10
          space-y-4
        "
      >
        {/* Brokerage Firm */}
        <div>
          <input
            {...register("brokerageFirm")}
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

          {errors.brokerageFirm && (
            <p className="text-red-500 text-xs mt-1">
              {errors.brokerageFirm.message}
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <input
            {...register("fullName")}
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

          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email*"
            className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <input
            {...register("city")}
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

          {errors.city && (
            <p className="text-red-500 text-xs mt-1">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <input
            type="text"
            value="+91"
            readOnly
            className="w-[90px] border-b border-[#E5E5E5] pb-3 outline-none"
          />

          <div className="flex-1">
            <input
              {...register("phone")}
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="9876543210"
              onInput={(e) => {
                e.currentTarget.value =
                  e.currentTarget.value.replace(
                    /\D/g,
                    ""
                  );
              }}
              className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
            />

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
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