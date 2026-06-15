"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import img1 from "@/assets/projects/metropettai/galleryImg1.png";
import img2 from "@/assets/projects/metropettai/galleryImg2.jpg";
import img3 from "@/assets/projects/metropettai/galleryImg3.jpg";
import img4 from "@/assets/projects/metropettai/galleryImg1.png";

const images = [img1, img2, img3, img4];


const CW  = 53;   
const SW  = 40;   
const GAP = 3; 

const TX: Record<string, string> = {
  center:   `-${CW / 2}vw`,           
  right:    `${CW / 2 + GAP}vw`,       
  left:     `-${CW / 2 + GAP + SW}vw`, 
  offRight: `110vw`,                   
};

const SIZE: Record<string, { width: string; height: string }> = {
  center:   { width: `${CW}vw`, height: "480px" },
  right:    { width: `${SW}vw`, height: "370px" },
  left:     { width: `${SW}vw`, height: "370px" },
  offRight: { width: `${SW}vw`, height: "370px" },
};

export default function Gallery() {
  const [active,  setActive]  = useState(0);
  const [jumpIdx, setJumpIdx] = useState<number | null>(null);
  const n = images.length;

  const slot = (i: number): string => {
    if (i === jumpIdx) return "offRight";
    const d = ((i - active) % n + n) % n;
    if (d === 0) return "center";
    if (d === 1) return "right";
    return "left";
  };

  const advance = useCallback(() => {
    const leftIdx = ((active - 1) % n + n) % n;
    setJumpIdx(leftIdx);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setJumpIdx(null);
        setActive(p => (p + 1) % n);
      })
    );
  }, [active, n]);

  useEffect(() => {
    const t = setTimeout(advance, 2500);
    return () => clearTimeout(t);
  }, [advance]);

  return (
  <section className="overflow-hidden py-8 md:py-14">

    {/* Title */}
    <div className="mb-8 md:mb-10 text-center">
      <h2
        className="font-heading
          text-[32px]
          md:text-[48px] md:leading-[20px]
          font-[400]
          leading-none
          text-[#00256A]
          tracking-[-1px]
        "
      >
        Gallery
      </h2>
    </div>

    {/* Carousel */}
    <div
      className="relative overflow-hidden"
      style={{ height: 520 }}
    >
      {images.map((img, i) => {
        const s = slot(i);
        const jumping = i === jumpIdx;

        return (
          <div
            key={i}
            className="absolute top-1/2 overflow-hidden rounded-xl"
            style={{
              left: "50%",
              width: SIZE[s].width,
              height: SIZE[s].height,
              transform: `translateY(-50%) translateX(${TX[s]})`,
              zIndex: s === "center" ? 10 : 5,
              transition: jumping
                ? "none"
                : "transform 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out",
            }}
          >
            <Image
              src={img}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  </section>
);
}