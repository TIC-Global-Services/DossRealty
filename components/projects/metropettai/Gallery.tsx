"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import img1 from "@/assets/projects/metropettai/galleryImg1.png";
import img2 from "@/assets/projects/metropettai/galleryImg2.jpg";
import img3 from "@/assets/projects/metropettai/galleryImg3.jpg";

const images = [img1, img2, img3];

// ── Carousel geometry ─────────────────────────────────────────────────────────
// Viewport:  |← 21vw →|← 2.5vw →|←── 53vw center ──→|← 2.5vw →|← 21vw →|
//             left peek   gap                             gap     right peek
// Every image anchors at `left: 50%` (viewport centre) and slides via translateX.
// ─────────────────────────────────────────────────────────────────────────────

const CW  = 53;   // centre image width  (vw)
const SW  = 40;   // side   image width  (vw) — mostly clipped off-screen
const GAP = 2.5;  // gap between images  (vw)

const TX: Record<string, string> = {
  center:   `-${CW / 2}vw`,            // −26.5vw → image centred
  right:    `${CW / 2 + GAP}vw`,       //  +29vw  → left edge just right of centre image
  left:     `-${CW / 2 + GAP + SW}vw`, // −69vw   → right edge just left of centre image
  offRight: `110vw`,                    // invisible, beyond right edge
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

  /**
   * Loop strategy for the wrap-around image (was "left", must reappear on right):
   *   Paint 1 — instantly teleport it to offRight (transition: none)
   *   Paint 2 — re-enable transitions + bump active index
   *           → image slides in smoothly from the right  ✓
   */
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
    <section className="overflow-hidden py-8 md:py-10">

      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: 520 }}>
        {images.map((img, i) => {
          const s       = slot(i);
          const jumping = i === jumpIdx;

          return (
            <div
              key={i}
              className="absolute top-1/2 overflow-hidden rounded-xl"
              style={{
                left:      "50%",
                width:     SIZE[s].width,
                height:    SIZE[s].height,
                transform: `translateY(-50%) translateX(${TX[s]})`,
                zIndex:    s === "center" ? 10 : 5,
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

      {/* ── Button ───────────────────────────────────────────────────────── */}
      <div className="mt-10 flex justify-center">
        <button className="rounded-full bg-[#00256A] px-8 py-3 text-[15px] text-white transition duration-300 hover:scale-105">
          view gallery
        </button>
      </div>

    </section>
  );
}