"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    jobSchema,
    positions,
    type JobFormData,
} from "@/data/partnerSchema";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzOfuJyXdftiZVb8IYeBc_h9gTQVPjfup5HkwFGddrXM_OIUDbyss9Ul1l64rltJKia/exec";

export default function JobForm() {
    const [loading, setLoading] =
        useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<JobFormData>({
        resolver: zodResolver(
            jobSchema
        ),
    });

    const onSubmit = async (
        data: JobFormData
    ) => {
        try {
            setLoading(true);

            const response =
                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {
                        method: "POST",
                        body: JSON.stringify({
                          formType: "Job",

                          name: data.name,
                          email: data.email,
                          phone: data.phone,
                          position: data.position,
                          cvLink: data.cvLink,
                          message: data.message,
                        }),
                    }
                );

            const text =
                await response.text();

            const result =
                JSON.parse(text);

            if (!result.success) {
                throw new Error(
                    "Failed to submit application."
                );
            }

            reset();

            alert(
                "Application submitted successfully!"
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
                APPLY NOW
            </h2>

            <form
                onSubmit={handleSubmit(
                    onSubmit
                )}
                className="
                  mt-10
                  space-y-3
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
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                    />

                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
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
                        className="w-full border-b border-[#E5E5E5] pb-3 outline-none"
                    />

                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
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
                        placeholder="Your phone"
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

                {/* Position */}
                <div className="relative max-w-[500px]">
                    <select
                        {...register("position")}
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

                        {positions.map((position) => (
                            <option
                                key={position}
                                value={position}
                            >
                                {position}
                            </option>
                        ))}
                    </select>

                    {/* Arrow */}
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

                    {errors.position && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.position.message}
                        </p>
                    )}
                </div>

                {/* CV Link */}
                <div>
                    <input
                        {...register("cvLink")}
                        type="url"
                        placeholder="Paste your CV link*"
                        className="
                          w-full
                          border-b
                          border-[#E5E5E5]
                          pb-3
                          outline-none
                        "
                    />

                    {errors.cvLink && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.cvLink.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Your message"
                        className="
                          w-full
                          border-b
                          border-[#E5E5E5]
                          pb-2
                          outline-none
                          resize-none
                        "
                    />

                    {errors.message && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.message.message}
                        </p>
                    )}
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
                            ? "Applying..."
                            : "Apply Now"}
                    </button>
                </div>
            </form>
        </>
    );
}