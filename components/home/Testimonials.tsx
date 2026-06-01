"use client";

import Image from "next/image";

import testimonial1 from "@/assets/home/testimonials/testimonial1.jpg";
import testimonial2 from "@/assets/home/testimonials/testimonial2.jpg";
import testimonial3 from "@/assets/home/testimonials/testimonial3.jpg";
import testimonial4 from "@/assets/home/testimonials/testimonial4.jpg";
import testimonial5 from "@/assets/home/testimonials/testimonial2.jpg";

const testimonials = [
  {
    name: "Lilly Woods",
    location: "Los Angeles, CA",
    text:
      "Remarkable service, thoughtful process, and a final result that speaks for itself refined, timeless, and functional.",
    image: testimonial1,
  },
  {
    name: "John Carter",
    location: "New York, NY",
    text:
      "They understood our vision perfectly and delivered a design beyond our expectations efficient, elegant, and inspiring.",
    image: testimonial2,
  },
  {
    name: "Sophie Moore",
    location: "San Francisco, CA",
    text:
      "Creative minds, clear communication, and a space that reflects who we are functional, beautiful, and uniquely ours.",
    image: testimonial3,
  },
  {
    name: "Matt Cannon",
    location: "Ottawa, CA",
    text:
      "Inspired ideas, detailed planning, and a result that elevates everyday life smart, timeless, and stunning in every way.",
    image: testimonial4,
  },
  {
    name: "Sandy Houston",
    location: "Amsterdam, NL",
    text:
      "From our first call to the final reveal, every detail was handled with care precise, elegant, and made for living.",
    image: testimonial5,
  },
];

export default function TestimonialSection() {
  const duplicated = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto px-5 lg:px-20">

        {/* MOBILE */}
        <div className="block lg:hidden">
          {/* Single Column Testimonials */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="animate-scroll-mobile flex flex-col gap-5">
              {duplicated.map(
                (item, index) => (
                  <Card
                    key={index}
                    item={item}
                  />
                )
              )}
            </div>

            {/* Fade */}
            <div className="absolute left-0 top-0 z-10 h-20 w-full bg-gradient-to-b from-white to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Content Below */}
          <div className="mt-10">
            <h2 className="mb-5 text-[34px] font-heading font-normal leading-[100%] text-[#111]">
              Experiences Shared <br />
              by Our Clients
            </h2>

            <p className="mb-8 text-[15px] leading-[170%] text-[#6B6B6B]">
              Doss Realty believes great
              architecture goes beyond
              structures, it creates
              experiences. Our approach
              combines modern aesthetics,
              smart planning, and
              sustainable thinking to
              design spaces that feel
              refined, practical, and
              future-ready.
            </p>

            <button className="rounded-full bg-[#00256a] px-7 py-4 text-white">
              Get in touch
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="grid h-full grid-cols-2 gap-6">

              {/* COLUMN 1 */}
              <div className="relative overflow-hidden">
                <div className="animate-scroll-up flex flex-col gap-6">
                  {duplicated.map(
                    (item, index) => (
                      <Card
                        key={index}
                        item={item}
                      />
                    )
                  )}
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="relative overflow-hidden">
                <div className="animate-scroll-down flex flex-col gap-6">
                  {duplicated.map(
                    (item, index) => (
                      <Card
                        key={index}
                        item={item}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Fade */}
            <div className="absolute left-0 top-0 z-10 h-28 w-full bg-gradient-to-b from-white to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 h-28 w-full bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[550px]">
            <h2 className="mb-5 text-[30px] font-heading font-normal leading-[100%] text-[#111] md:text-[48px]">
              Experiences Shared <br />
              by Our Clients
            </h2>

            <p className="mb-8 w-[46ch] text-[16px] leading-[160%] text-[#6B6B6B]">
              Doss Realty believes great
              architecture goes beyond
              structures, it creates
              experiences. Our approach
              combines modern aesthetics,
              smart planning, and
              sustainable thinking to
              design spaces that feel
              refined, practical, and
              future-ready.
            </p>

            <button className="rounded-full bg-[#00256a] px-8 py-4 text-white duration-300 hover:scale-105">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx global>{`
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          from {
            transform: translateY(-50%);
          }

          to {
            transform: translateY(0);
          }
        }

        @keyframes scrollMobile {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scrollUp
            25s linear infinite;
        }

        .animate-scroll-down {
          animation: scrollDown
            25s linear infinite;
        }

        .animate-scroll-mobile {
          animation: scrollMobile
            25s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Card({ item }: any) {
  return (
    <div className="rounded-b-[30px] border-b border-[#ECECEC] bg-white p-6 shadow-sm">
      <p className="mb-6 text-[15px] leading-[170%] text-[#6B6B6B]">
        {item.text}
      </p>

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-[16px] font-medium text-[#111]">
            {item.name}
          </h4>

          <p className="text-[14px] text-[#7B7B7B]">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}