"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";

import {
  brochureSchema,
  BrochureFormData,
} from "@/data/brochureSchema";

interface BrochureModalProps {
  project: string;
  brochure: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOfuJyXdftiZVb8IYeBc_h9gTQVPjfup5HkwFGddrXM_OIUDbyss9Ul1l64rltJKia/exec";

export default function BrochureModal({
  project,
  brochure,
}: BrochureModalProps) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BrochureFormData>({
    resolver: zodResolver(
      brochureSchema
    ),
    defaultValues: {
      project,
    },
  });

  const downloadBrochure =
    async () => {
      const response =
        await fetch(brochure);

      const blob =
        await response.blob();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        `${project}-brochure.pdf`;

      document.body.appendChild(
        link
      );

      link.click();

      link.remove();

      window.URL.revokeObjectURL(
        url
      );
    };

  const onSubmit = async (
    data: BrochureFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await fetch(
          GOOGLE_SCRIPT_URL,
          {
            method: "POST",
            body: JSON.stringify({
              formType:
                "Brochure",
              name: data.name,
              email: data.email,
              phone: data.phone,
              project,
              downloaded:
                "Yes",
              downloadTime:
                new Date().toLocaleString(
                  "en-IN"
                ),
            }),
          }
        );

      const result =
        await response.json();

      if (!result.success) {
        throw new Error(
          "Failed to save enquiry."
        );
      }

      await downloadBrochure();

      reset({
        project,
      });

      setIsOpen(false);

      alert(
        "Brochure downloaded successfully!"
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
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          mt-2
          lg:mt-6
          rounded-full
          border
          border-white/20
          bg-[rgba(0,37,106,0.2)]
          px-4
          py-2
          lg:px-8
          lg:py-3
          text-[13px]
          lg:text-[16px]
          text-white
          backdrop-blur-md
          transition
          duration-300
          hover:bg-[rgba(0,37,106,0.3)]
          cursor-pointer
        "
      >
        Download Brochure
      </button>

      {isOpen &&
  createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        px-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[420px]
          rounded-[20px]
          bg-[#F5F5F5]
          p-8
        "
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute
            right-5
            top-5
            text-xl
            text-black/50
            hover:text-black
            cursor-pointer
          "
        >
          ✕
        </button>

        <h3
          className="
            mb-6
            text-center
            font-heading
            text-[26px]
            leading-[32px]
            text-[#2F3147]
            md:text-[45px]
            md:leading-[48px]
          "
        >
          Enquiry Form
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name*"
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
                border-[#D9D9D9]
                bg-transparent
                pb-2
                outline-none
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
              placeholder="Your Email*"
              className="
                w-full
                border-b
                border-[#D9D9D9]
                bg-transparent
                pb-2
                outline-none
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
              placeholder="Your Phone*"
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
                border-[#D9D9D9]
                bg-transparent
                pb-2
                outline-none
              "
            />

            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Project */}
          <div>
            <input
              {...register("project")}
              value={project}
              readOnly
              className="
                w-full
                border-b
                border-[#D9D9D9]
                bg-transparent
                pb-2
                outline-none
                capitalize
              "
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="
                rounded-full
                bg-[#00256A]
                px-6
                py-2
                text-sm
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-50
                cursor-pointer
              "
            >
              {loading
                ? "Downloading..."
                : "Download Brochure"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )}
    </>
  );
}