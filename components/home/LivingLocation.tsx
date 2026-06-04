import Image from "next/image";
import { MapPin } from "lucide-react";

import leftLocation from "@/assets/home/luxury_img.jpg";
import rightLocation from "@/assets/home/stay_img.jpg";
import fogImg from "@/assets/home/hero/cloudImgmain.png";

const locations = [
  {
    title: "Luxury",
    location: "Chennai, India",
    image: leftLocation,
  },
  {
    title: "Stay",
    location: "Chennai, India",
    image: rightLocation,
  },
];

const LivingLocation = () => {
  return (
    <section className="relative py-0 overflow-visible bg-white">
      {/* TOP FOG */}
      <div className="absolute -top-20 left-0 z-[20] w-full pointer-events-none">
        <Image
          src={fogImg}
          alt="Fog"
          width={2000}
          height={500}
          priority
          className="
            w-full
            h-auto
            object-cover
            opacity-100
            -translate-y-[80%]
          "
        />
      </div>

      {/* TOP CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 pt-10 md:pt-14 pb-8 md:pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT SIDE */}
          <div className="max-w-[650px]">
            <p className="font-body text-[14px] uppercase tracking-normal text-[#00256A] mb-4 ml-2">
              Luxury Living Begins Here
            </p>

            <h2 className="font-heading text-[30px] md:text-[48px] leading-[120%] tracking-[-0.04em] text-[#111111]">
              Crafting a Harmonious Blend of Luxury & Design
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[450px] lg:pt-4">
            <p className="font-body text-[15px] md:text-[16px] leading-[165%] text-[#666666] md:w-[50ch]">
              Doss Realty is a Chennai-based real estate brand focused on
              creating thoughtfully designed residential and commercial
              spaces that combine modern architecture, functionality, and
              timeless elegance. With a commitment to quality craftsmanship
              and customer trust, Doss Realty develops premium properties
              tailored to contemporary lifestyles and evolving urban needs.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {locations.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
          >
            <div className="relative h-[50vh] md:h-screen overflow-hidden">
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/10 z-[1]" />

              {/* CENTER TITLE */}
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-20">
                <h2 className="font-heading text-4xl md:text-5xl text-white text-center">
                  {item.title}
                </h2>
              </div>

              {/* LOCATION */}
              <div
                className="
                  absolute z-10 flex items-center gap-2
                  bottom-6 right-5
                  lg:bottom-10 lg:left-1/2
                  lg:right-auto lg:-translate-x-1/2
                "
              >
                <MapPin className="h-5 w-5 text-white" />

                <p className="font-body whitespace-nowrap text-sm md:text-base text-white">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LivingLocation;