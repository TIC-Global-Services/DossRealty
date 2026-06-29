"use client";

import Image from "next/image";
import PrimaryBtn from "../reusable/PrimaryBtn";

import testimonial1 from "@/assets/home/testimonials/testimonial1.jpg";
import testimonial2 from "@/assets/home/testimonials/testimonial2.jpg";
import testimonial3 from "@/assets/home/testimonials/testimonial3.jpg";
import testimonial4 from "@/assets/home/testimonials/testimonial4.jpg";

import Link from "next/link";


const testimonials = [
  {
    name: "Priya H",
    location: "Chennai, India",
    text:
      "Been staying in DOSS community for 16 years now, they have provided me with a wonderful safe neighbourhood for my family.",
    image: testimonial2,
  },
  {
    name: "Dhilip Reddy",
    location: "Chennai, Inida",
    text:
      "Expert investment advice, our property doubled in value in two years. The salespeople made it feel more like consultation, helping us choose the perfect unit.",
    image: testimonial1,
  },
  {
    name: "Chinnarasu",
    location: "Chennai, India",
    text:
      "Thank you so much to the DOSS staff, I had a resale transaction after 9 years and they assisted us promptly and professionally throughout the entire process, very good customer support.",
    image: testimonial3,
  },
  {
    name: "Senthil Kumar",
    location: "Chennai, India",
    text:
      "Bought my first plot from DOSS, good support and maintenance.",
    image: testimonial1,
  },
  {
    name: "Ajay Eshwar",
    location: "Chennai, India",
    text:
      "Highly impressed with the layout quality, the gated community has excellent security and is packed with tress providing a good nature living experience in the city.",
    image: testimonial3,
  },
  {
    name: "K Dhanasekar",
    location: "Chennai, India",
    text:
      "I’m an NRI buying from Dubai, the sales team clearly explained and assisted in all the processes, it was very smooth and easy.",
    image: testimonial1,
  },
  {
    name: "Harikumar G",
    location: "Chennai, India",
    text:
      "We have seen plenty of plots, but DOSS felt instantly different. Everything felt like it was thought about, the attention to detail is spectacular. The quality stands out.",
    image: testimonial3,
  },
];

export default function TestimonialSection() {
  const duplicated = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section data-theme="light" className="overflow-hidden py-20">
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
            <h2 className="mb-5 text-[24px] font-heading font-normal leading-[120%] text-[#111]">
              A Measure Of Trust
            </h2>
            
            <Link href="./contact">
            <button className="rounded-full bg-[#00256a] px-7 py-2 text-white">
              Get in touch
            </button>
            </Link>
          </div>
        </div>


        {/* Desktop */}
        <div className="relative hidden h-[700px] lg:block">

          {/* LEFT SIDE */}
          <div className="w-[54%] h-full">
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
          </div>

          {/* RIGHT SIDE */}
          <div className="absolute right-0 top-1/2 max-w-[550px] -translate-y-1/2">
            <h2 className="mb-5 text-[30px] font-small font-normal leading-[50px] tracking-tight text-[#121212] md:text-[48px]">
              A Measure Of Trust
            </h2>

            <Link href="./contact">
            <PrimaryBtn mode="dark"  className="primary font-small bg-[#00256A] hover:text-black text-white duration-300 hover:scale-105">
              Get in touch
            </PrimaryBtn>
            </Link>
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
    <div
      className="
        rounded-[32px]
        border
        border-white
        bg-white
        p-4
        shadow-[0px_4px_4px_rgba(233,227,220,0.25),0px_1px_1px_rgba(166,101,24,0.08)]
      "
    >
      <p className="mb-6 text-[13px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#717171]">
        {item.text}
      </p>

      <div className="flex items-center gap-3">
        <div className="relative h-[30px] w-[30px] md:h-[40px] md:w-[40px] overflow-hidden rounded-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-[12px] md:text-[16px] font-medium leading-[20px] text-[#121212]">
            {item.name}
          </h4>

          <p className="text-[12px] md:text-[16px] font-medium leading-[20px] text-[#717171]">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}