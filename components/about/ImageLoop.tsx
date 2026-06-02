"use client";

import Image, {
  StaticImageData,
} from "next/image";

import image1 from "@/assets/about/loopImg.jpg";
import image2 from "@/assets/about/loopImg2.jpg";
import image3 from "@/assets/about/loopImg3.jpg";
import image4 from "@/assets/about/loopImg4.jpg";
import image5 from "@/assets/about/loopImg.jpg";

type LoopItem = {
  image: StaticImageData;
  title: string;
  description: string;
};

const loopItems: LoopItem[] = [
  {
    image: image1,
    title: "Private villa pool",
    description:
      "Thoughtfully crafted spaces designed for elevated lifestyles.",
  },
  {
    image: image2,
    title: "Grand luxury pool estate",
    description:
      "Where Grandeur Finds Its Address",
  },
  {
    image: image3,
    title: "Coastal pool + hill view",
    description:
      "Luxury Framed by Nature",
  },
  {
    image: image4,
    title: "Infinity pool",
    description:
      "A Lifestyle Beyond Expectations",
  },
  {
    image: image5,
    title: "Future Spaces",
    description:
      "Built to inspire modern communities and better living.",
  },
];

const ImageLoop = () => {
  const duplicatedItems = [
    ...loopItems,
    ...loopItems,
  ];

  return (
    <section className="overflow-hidden py-16 md:py-20">

      {/* LOOP CONTAINER */}
      <div className="relative overflow-hidden">
        <div className="animate-loop flex w-max gap-6">
          {duplicatedItems.map(
            (item, index) => (
              <div
                key={index}
                className="w-[300px] shrink-0 md:w-[420px]"
              >
                {/* IMAGE */}
                <div className="relative h-[380px] overflow-hidden rounded-[24px] md:h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-5">
                  <h3 className="font-heading text-[14px] md:text-[18px] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[140%] text-[#666]">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* LOOP ANIMATION */}
      <style jsx global>{`
        @keyframes imageLoop {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-loop {
          animation: imageLoop
            28s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ImageLoop;