"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";
import Image from "next/image";

import img1 from "@/assets/projects/promisePark/galleryImg1.png";
import img2 from "@/assets/projects/promisePark/galleryImg2.png";
import img3 from "@/assets/projects/promisePark/galleryImg3.png";
import img4 from "@/assets/projects/promisePark/galleryImg4.png";

const images = [
  img1,
  img2,
  img3,
  img4,
];

// DESKTOP VALUES
const CW = 53;
const SW = 40;
const GAP = 3;

// MOBILE VALUES
const MCW = 82;
const MSW = 64;
const MGAP = 4;

type Slot =
  | "center"
  | "right"
  | "left"
  | "offRight";

export default function Gallery() {
  const [active, setActive] =
    useState(0);

  const [jumpIdx, setJumpIdx] =
    useState<number | null>(
      null
    );

  const [isMobile, setIsMobile] =
    useState(false);

  const n = images.length;

  // SCREEN DETECTION
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkScreen();

    window.addEventListener(
      "resize",
      checkScreen
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkScreen
      );
  }, []);

  // POSITION VALUES
  const TX: Record<
    Slot,
    string
  > = isMobile
    ? {
        center: `-${
          MCW / 2
        }vw`,
        right: `${
          MCW / 2 + MGAP
        }vw`,
        left: `-${
          MCW / 2 +
          MGAP +
          MSW
        }vw`,
        offRight: `110vw`,
      }
    : {
        center: `-${
          CW / 2
        }vw`,
        right: `${
          CW / 2 + GAP
        }vw`,
        left: `-${
          CW / 2 +
          GAP +
          SW
        }vw`,
        offRight: `110vw`,
      };

  // SIZE VALUES
  const SIZE: Record<
    Slot,
    {
      width: string;
      height: string;
    }
  > = isMobile
    ? {
        center: {
          width: `${MCW}vw`,
          height: "360px",
        },
        right: {
          width: `${MSW}vw`,
          height: "280px",
        },
        left: {
          width: `${MSW}vw`,
          height: "280px",
        },
        offRight: {
          width: `${MSW}vw`,
          height: "280px",
        },
      }
    : {
        center: {
          width: `${CW}vw`,
          height: "480px",
        },
        right: {
          width: `${SW}vw`,
          height: "370px",
        },
        left: {
          width: `${SW}vw`,
          height: "370px",
        },
        offRight: {
          width: `${SW}vw`,
          height: "370px",
        },
      };

  // SLOT LOGIC
  const slot = (
    i: number
  ): Slot => {
    if (i === jumpIdx)
      return "offRight";

    const d =
      ((i - active) % n + n) %
      n;

    if (d === 0)
      return "center";

    if (d === 1)
      return "right";

    return "left";
  };

  // AUTO ADVANCE
  const advance =
    useCallback(() => {
      const leftIdx =
        ((active - 1) % n + n) %
        n;

      setJumpIdx(leftIdx);

      requestAnimationFrame(
        () =>
          requestAnimationFrame(
            () => {
              setJumpIdx(null);

              setActive(
                (p) =>
                  (p + 1) % n
              );
            }
          )
      );
    }, [active, n]);

  useEffect(() => {
    const t = setTimeout(
      advance,
      2500
    );

    return () =>
      clearTimeout(t);
  }, [advance]);

  return (
    <section className="overflow-hidden py-8 md:py-14">
      {/* TITLE */}
      <div className="mb-8 text-center md:mb-10">
        <h2
          className="
            font-heading
            text-[30px]
            font-[400]
            leading-[20px]
            tracking-[-1px]
            text-[#00256A]
            md:text-[48px]
          "
        >
          Gallery
        </h2>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative overflow-hidden"
        style={{
          height: isMobile
            ? 400
            : 520,
        }}
      >
        {images.map(
          (img, i) => {
            const s = slot(i);

            const jumping =
              i === jumpIdx;

            return (
              <div
                key={i}
                className="
                  absolute
                  top-1/2
                  overflow-hidden
                  rounded-xl
                "
                style={{
                  left: "50%",
                  width:
                    SIZE[s].width,
                  height:
                    SIZE[s].height,
                  transform: `translateY(-50%) translateX(${TX[s]})`,
                  zIndex:
                    s ===
                    "center"
                      ? 10
                      : 5,
                  transition:
                    jumping
                      ? "none"
                      : "transform 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out",
                }}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${
                    i + 1
                  }`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}