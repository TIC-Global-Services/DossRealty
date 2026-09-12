"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import phoneImg from "@/assets/nri/handImg.webp";
import { GOOGLE_SCRIPT_URL } from "@/components/reusable/forms/JobForm";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          formType: "Subscriptions",
          email,
        }),
      });

      const text = await response.text();
      const result = JSON.parse(text);

      if (!result.success) {
        throw new Error("Failed to subscribe.");
      }

      setEmail("");
      toast.success("Subscribed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 lg:py-[40px] lg:mt-25">
      <div className="mx-5 md:mx-10 md:px-5">
        <div
          className="
            min-h-[60vh]
            overflow-visible
            rounded-[10px]
            bg-[#00256a]
            flex
            flex-col
            items-center
            lg:h-[400px]
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              px-5
              pt-20
              text-center

              md:px-8

              lg:pl-[90px]
              lg:pr-0
              lg:py-12
              lg:text-left
            "
          >
            <h2
              className="text-start font-small
                max-w-[520px]
                text-[20px] leading-[24px]
                font-light
                lg:leading-[95%]
                lg:tracking-[-0.02em]
                text-white
                lg:text-[40px]
                lg:max-w-[520px]
              "
            >
              Subscribe for weekly
              <br className="md:hidden lg:block" />
              real estate insights
            </h2>

            <p
              className="text-start
                mx-auto
                mt-6
                max-w-[470px]
                text-[13px] leading-[16px]
                lg:leading-[150%]
                text-white
                opacity-90

                lg:text-[16px]

                md:mx-0
              "
            >
              Invest in premium
              real estate
              opportunities in
              India with
              confidence,
              wherever you are
              in the world. Doss
              Realty offers
              transparent
              processes, trusted
              guidance, and
              seamless support
              tailored for NRI
              investors.
            </p>

            {/* INPUT */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
              className="
                relative
                mx-auto
                mt-8
                w-full
                max-w-[500px]

                md:mx-0
              "
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  h-[56px]
                  w-full
                  rounded-full
                  bg-white
                  px-6
                  pr-[120px]
                  outline-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  absolute
                  right-[6px]
                  top-1/2
                  h-[44px]
                  -translate-y-1/2
                  cursor-pointer
                  rounded-full
                  bg-[#002878]
                  px-8
                  text-white
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div
            className="
              mt-4
              flex
              w-full
              justify-center
              items-end
              overflow-visible
              md:mt-4
              lg:mt-0
              lg:self-end
            "
          >
            <Image
                src={phoneImg}
                alt="Doss Realty Mobile App"
                priority
                className="
                  mx-auto
                  h-auto
                  w-full
                  object-cover
                  md:w-[640px] md:h-[500px]
                  lg:w-[800px]
                  lg:h-[650px]
                "
              />
          </div>
        </div>
      </div>
    </section>
  );
}