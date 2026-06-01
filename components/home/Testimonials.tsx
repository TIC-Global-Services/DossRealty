"use client";

import Image from "next/image";
import testimonial1 from '@/assets/home/testimonials/testimonial1.jpg'
import testimonial2 from '@/assets/home/testimonials/testimonial2.jpg'
import testimonial3 from '@/assets/home/testimonials/testimonial3.jpg'
import testimonial4 from '@/assets/home/testimonials/testimonial4.jpg'
import testimonial5 from '@/assets/home/testimonials/testimonial2.jpg'

const testimonials = [
  {
    name: "Lilly Woods",
    location: "Los Angeles, CA",
    text: "Remarkable service, thoughtful process, and a final result that speaks for itself refined, timeless, and functional.",
    image: testimonial1
  },
  {
    name: "John Carter",
    location: "New York, NY",
    text: "They understood our vision perfectly and delivered a design beyond our expectations efficient, elegant, and inspiring.",
    image: testimonial2
  },
  {
    name: "Sophie Moore",
    location: "San Francisco, CA",
    text: "Creative minds, clear communication, and a space that reflects who we are functional, beautiful, and uniquely ours.",
    image: testimonial3
  },
  {
    name: "Matt Cannon",
    location: "Ottawa, CA",
    text: "Inspired ideas, detailed planning, and a result that elevates everyday life smart, timeless, and stunning in every way.",
    image: testimonial4
  },
  {
    name: "Sandy Houston",
    location: "Amsterdam, NL",
    text: "From our first call to the final reveal, every detail was handled with care precise, elegant, and made for living.",
    image: testimonial5
  },
];

export default function TestimonialSection() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto px-5 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="grid grid-cols-2 gap-6 h-full">
              
              {/* COLUMN 1 */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up flex flex-col gap-6">
                  {duplicated.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-down flex flex-col gap-6">
                  {duplicated.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Fade effect */}
            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent z-10" />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[550px]">
            <h2 className="text-[30px] md:text-[48px] font-heading font-normal leading-[100%] text-[#111] mb-5">
              Experiences Shared <br />
              by Our Clients
            </h2>

            <p className="text-[#6B6B6B] text-[16px]  leading-[160%] w-[46ch] mb-8">
              Doss Realty believes great architecture goes beyond
              structures, it creates experiences. Our approach combines
              modern aesthetics, smart planning, and sustainable thinking
              to design spaces that feel refined, practical, and future-ready.
            </p>

            <button className="bg-[#00256a] text-white px-8 py-4 rounded-full hover:scale-105 duration-300">
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

        .animate-scroll-up {
          animation: scrollUp 25s linear infinite;
        }

        .animate-scroll-down {
          animation: scrollDown 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Card({ item }: any) {
  return (
    <div className="bg-white rounded-b-[30px] p-6 shadow-sm border-b border-[#ECECEC]">
      <p className="text-[#6B6B6B] text-[15px] leading-[170%] mb-6">
        {item.text}
      </p>

      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-medium text-[16px] text-[#111]">
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