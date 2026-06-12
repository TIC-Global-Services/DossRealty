"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Card {
  title: string;
  subtitle: string;
  description: string;
  bg: string;
}

const CARDS: Card[] = [
  {
    title:
      "WE CREATE SPACES THAT",
    subtitle: "INSPIRE",
    description:
      "Designed with timeless architecture and thoughtful aesthetics.",
    bg: "#C5A556",
  },
  {
    title:
      "WE CREATE SPACES THAT",
    subtitle: "OFFER",
    description:
      "Prime locations with excellent connectivity and everyday convenience.",
    bg: "#032B7A",
  },
];

export default function BuiltForLiving() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const yellowCardRef =
    useRef<HTMLDivElement>(null);

  const blueCardRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger
    );

    const ctx =
      gsap.context(() => {
        const tl =
          gsap.timeline({
            scrollTrigger: {
              trigger:
                sectionRef.current,
              start:
                "top top",
              end:
                "+=1200",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

        // YELLOW CARD EXIT
        tl.to(
          yellowCardRef.current,
          {
            y: -320,
            scale: 0.92,
            opacity: 0,
            ease: "power2.out",
          },
          0
        );

        // BLUE CARD STACK UP
        tl.to(
          blueCardRef.current,
          {
            y: 0,
            scale: 1,
            ease: "power2.out",
          },
          0
        );
      },
      sectionRef
    );

    return () =>
      ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      <div
        className="
          flex
          h-full
          items-center
          px-6
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div className="max-w-[550px]">
            <h2
              className="
                text-[38px]
                font-light
                leading-[95%]
                text-[#2F3147]
                md:text-[54px]
                lg:text-[64px]
                xl:text-[72px]
              "
            >
              Built for Living,
              <br />
              Built with Purpose
            </h2>

            <p
              className="
                mt-6
                text-[14px]
                leading-[180%]
                text-[#666]
                md:text-[16px]
                lg:text-[18px]
              "
            >
              Creating elegant
              spaces that bring
              together comfort,
              quality, and timeless
              design. Designed with
              purpose and built to
              deliver comfort,
              convenience, and
              long-term value.
            </p>
          </div>

          {/* RIGHT STACK */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                h-[420px]
                w-[320px]
                overflow-hidden
                rounded-[24px]
                md:w-[360px]
              "
            >
              {/* YELLOW CARD */}
              <div
                ref={
                  yellowCardRef
                }
                className="
                  absolute
                  inset-0
                  z-10
                "
              >
                <CardContent
                  card={
                    CARDS[0]
                  }
                />
              </div>

              {/* BLUE CARD */}
              <div
                ref={
                  blueCardRef
                }
                className="
                  absolute
                  inset-0
                  z-20
                  translate-y-[180px]
                  scale-[0.93]
                "
              >
                <CardContent
                  card={
                    CARDS[1]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardContent({
  card,
}: {
  card: Card;
}) {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        rounded-[24px]
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.18)]
      "
      style={{
        backgroundColor:
          card.bg,
      }}
    >
      <div>
        <h3
          className="
            text-[26px]
            font-semibold
            leading-tight
            text-white
            md:text-[28px]
          "
        >
          {card.title}
        </h3>

        <h3
          className="
            mt-1
            text-[26px]
            font-semibold
            leading-tight
            text-white
            md:text-[28px]
          "
        >
          {card.subtitle}
        </h3>
      </div>

      <p
        className="
          mt-auto
          max-w-[220px]
          pt-20
          text-[14px]
          leading-[160%]
          text-white/80
        "
      >
        {card.description}
      </p>
    </div>
  );
}