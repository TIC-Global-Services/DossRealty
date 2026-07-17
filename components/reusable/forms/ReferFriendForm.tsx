"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import {
  referSchema,
  type ReferFormData,
} from "@/data/contactSchema";
import { GOOGLE_SCRIPT_URL } from "./JobForm";

// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbxXvRWkA7Vp6YrUX17ZatLbs2lkvZ-NF8T_DqIq8jGvwFEKmA0MdyyLFrRQewEawurphg/exec";

export default function ReferFriendForm() {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReferFormData>({
    resolver: zodResolver(
      referSchema
    ),
  });

  const onSubmit = async (
    data: ReferFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await fetch(
          GOOGLE_SCRIPT_URL,
          {
            method: "POST",
            body: JSON.stringify({
              formType: "Referrals",

              yourName: data.yourName,
              yourEmail: data.yourEmail,
              yourPhone: data.yourPhone,

              friendName:
                data.friendName,
              friendEmail:
                data.friendEmail,
              friendPhone:
                data.friendPhone,

              project: data.project,
            }),
          }
        );

      const result =
        await response.json();

      if (!result.success) {
        throw new Error(
          "Failed to submit referral."
        );
      }

      reset();

      toast.success(
        "Referral submitted successfully!"
      );
    } catch (error) {
      console.error(error);

      toast.error(
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
          lg:text-[45px]
          leading-[48px]
        "
      >
        REFER A FRIEND
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
        {/* Your Name */}
        <div>
          <input
            {...register("yourName")}
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

          {errors.yourName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.yourName.message}
            </p>
          )}
        </div>

        {/* Your Email */}
        <div>
          <input
            {...register("yourEmail")}
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

          {errors.yourEmail && (
            <p className="mt-1 text-xs text-red-500">
              {errors.yourEmail.message}
            </p>
          )}
        </div>

        {/* Your Phone */}
        <div>
          <input
            {...register("yourPhone")}
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

          {errors.yourPhone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.yourPhone.message}
            </p>
          )}
        </div>

        {/* Friend Name */}
        <div>
          <input
            {...register("friendName")}
            type="text"
            placeholder="Friend's name*"
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

          {errors.friendName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.friendName.message}
            </p>
          )}
        </div>

        {/* Friend Email */}
        <div>
          <input
            {...register("friendEmail")}
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

          {errors.friendEmail && (
            <p className="mt-1 text-xs text-red-500">
              {errors.friendEmail.message}
            </p>
          )}
        </div>

        {/* Friend Phone */}
        <div>
          <input
            {...register("friendPhone")}
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="Friend's phone*"
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

          {errors.friendPhone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.friendPhone.message}
            </p>
          )}
        </div>

        {/* Project */}
        <div>
          <input
            {...register("project")}
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

          {errors.project && (
            <p className="mt-1 text-xs text-red-500">
              {errors.project.message}
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