"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import gsap from "gsap";

import heroImg from "@/assets/projects/metropettai/galleryImg3.jpg";


const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .regex(
    /^[A-Za-z\s]+$/,
    "Only letters are allowed"
  );

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

const phoneValidation = z
  .string()
  .min(1, "Phone number is required")
  .length(10, "Phone number must be 10 digits")
  .regex(/^[6-9]\d{9}$/, "Enter valid mobile number");


const brochureSchema = z.object({
  name: nameValidation,
  email: gmailValidation,
  phone: phoneValidation,
  project: z.string(),
});

type BrochureFormData = z.infer<typeof brochureSchema>;

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const leftContentRef =
    useRef<HTMLDivElement>(null);

  const rightContentRef =
    useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BrochureFormData>({
    resolver: zodResolver(brochureSchema),
  });

  const onSubmit = async (
    data: BrochureFormData
  ) => {
    try {
      setLoading(true);

      console.log(
        "Brochure Form:",
        data
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      window.open(
        "/brochure/metropettai.pdf",
        "_blank"
      );

      reset();

      setIsModalOpen(false);

      alert(
        "Brochure downloaded successfully!"
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT CONTENT
      gsap.from(
        leftContentRef.current,
        {
          x: -120,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
        }
      );

      // RIGHT CONTENT
      gsap.from(
        rightContentRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 1.3,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Metropettai"
        fill
        priority
        className="object-cover object-[25%] md:object-cover md:object-bottom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          px-5
          py-24
          md:px-10
          lg:px-16
          lg:pb-20
          lg:pt-0
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            flex-col
            translate-x-10 translate-y-10 md:translate-x-0 md:translate-y-0
            justify-between
            md:flex-row
            md:items-end
          "
        >
          {/* LEFT CONTENT */}
          <div
            ref={leftContentRef}
            className="max-w-[600px]"
          >
            <p
              className="
                font-[600]
                text-[13px]
                text-white/80
                lg:text-[22px]
                lg:leading-[24px]
              "
            >
              Plotted Development
            </p>

            <h2
              className="mt-1
                lg:mt-2
                font-heading
                text-[24px] leading-[30px]
                font-[300]
                text-white
                lg:text-[54px]
                lg:leading-[56px]
              "
            >
              Metropettai
            </h2>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4
                lg:mt-6
                rounded-full
                border
                border-white/20
                bg-[rgba(0,37,106,0.2)]
                lg:px-8 px-4 py-2
                lg:py-3 text-[13px]
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
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightContentRef}
            className="
              flex
              items-end
              gap-4
              pb-3
              lg:gap-6
              lg:pb-5
            "
          >
            {/* Vertical Line */}
            <div
              className="
                h-[100px]
                w-[2px]
                bg-white
                lg:h-[160px]
              "
            />

            <div className="md:max-w-[420px]">
              <p
                className="w-[330px]
                  text-[13px]
                  font-light
                  leading-[16px]
                  text-white/90
                  lg:text-[18px]
                  lg:w-[44ch]
                  lg:leading-[20px]
                "
              >
               Metropettai is a strategically located community near the upcoming Metro corridor, Chennai–Bengaluru Highway, and Outer Ring Road, offering excellent connectivity, everyday convenience, and long-term value.
              </p>

              <div
                className="mt-3
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#C7A85E]
                  lg:text-[16px]
                  lg:mt-6
                "
              >
                <span>
                  Luxury Living
                </span>

                <span className="h-[4px] w-[4px] rounded-full bg-[#C7A85E]" />

                <span>
                  Chennai, TN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-black/50
          backdrop-blur-sm
          px-4
        "
          onClick={() => setIsModalOpen(false)}
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
              onClick={() => setIsModalOpen(false)}
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
              className="mb-6
              text-center
              text-[#2F3147]
              font-heading
              text-[26px]
              md:text-[45px]
              leading-[48px] tracking-[0px]
            "
            >
              Enquiry Form
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
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

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your email address*"
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

              <div>
                <input
                  {...register("project")}
                  value="metropettai"
                  readOnly
                  className="
                  w-full
                  border-b
                  border-[#D9D9D9]
                  bg-transparent
                  pb-2
                  outline-none
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
                  text-white
                  text-sm
                  cursor-pointer
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                >
                  {loading
                    ? "Downloading..."
                    : "Download Brochure"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;