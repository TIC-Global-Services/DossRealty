import Image from "next/image";
import { MapPin } from "lucide-react";

import leftLocation from "@/assets/home/luxury_img.jpg";
import rightLocation from "@/assets/home/stay_img.jpg";

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
    <section className="py-0 bg-[#F7F7F7]">
      {/* TOP CONTENT */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 pt-10 md:pt-14 pb-8 md:pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT SIDE */}
          <div className="max-w-[650px]">
            <p
              className="
                font-body
                text-[14px]
                uppercase
                tracking-normal
                text-[#00256A]
                mb-4 ml-2
              "
            >
              Luxury Living Begins Here
            </p>

            <h2
              className="
                font-heading
                text-[30px]
                md:text-[48px]
                leading-[95%]
                tracking-[-0.04em]
                text-[#111111]
              "
            >
              Crafting a Harmonious Blend of Luxury & Design
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[450px] lg:pt-4">
            <p
              className="
                font-body
                text-[15px]
                md:text-[16px] w-[50ch]
                leading-[165%]
                text-[#666666]
              "
            >
              Doss Realty is a Chennai-based real estate brand focused on creating thoughtfully designed residential and 
              commercial spaces that combine modern architecture, functionality, and timeless elegance. 
              With a commitment to quality craftsmanship and customer trust, Doss Realty develops premium 
              properties tailored to contemporary lifestyles and evolving urban needs.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        {locations.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-screen overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 z-[1]" />

              {/* Top Center Heading */}
              <div className="absolute left-1/2 top-10 z-10 -translate-x-1/2 text-center">
                <h2 className="font-heading text-4xl text-white md:text-5xl">
                  {item.title}
                </h2>
              </div>

              {/* Bottom Center Location */}
              <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />

                <p className="font-body whitespace-nowrap text-sm text-white md:text-base">
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