import Image from "next/image";
import { MapPin } from "lucide-react";

import ContainerLayout from "@/layout/ContainerLayout";

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
    <section className="py-20">
      <ContainerLayout>
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
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Top Center Heading */}
                <div className="absolute left-1/2 top-10 z-10 -translate-x-1/2 text-center">
                  <h2 className="font-heading text-4xl text-white md:text-5xl">
                    {item.title}
                  </h2>
                </div>

                {/* Bottom Center Location */}
                <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                  <MapPin className="h-5 w-5 text-white" />

                  <p className="font-body text-sm text-white md:text-base whitespace-nowrap">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default LivingLocation;