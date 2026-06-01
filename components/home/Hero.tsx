"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import heroBg from "@/assets/home/hero/hero-bg.png";
import houseImg from "@/assets/home/hero/house_img.png";
import cloudImg from "@/assets/home/hero/cloudImg.png";
import cloudMain from "@/assets/home/hero/cloudImgmain.png";

import ContainerLayout from "@/layout/ContainerLayout";

gsap.registerPlugin(
  ScrollTrigger
);

const Hero = () => {
  const heroRef =
    useRef<HTMLDivElement>(null);

  const heroTextRef =
    useRef<HTMLDivElement>(null);

  const houseRef =
    useRef<HTMLDivElement>(null);

  const houseMaskRef =
    useRef<HTMLDivElement>(null);

  const fogRef =
    useRef<HTMLDivElement>(null);

  const logoRef =
    useRef<SVGGElement>(null);

  const logoWrapperRef =
    useRef<HTMLDivElement>(null);

  const topLeftCloudRef =
    useRef<HTMLDivElement>(null);

  const topRightCloudRef =
    useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(
      () => {
        const logoElements = Array.from(
          logoRef.current?.querySelectorAll(
            "path, polygon, text"
          ) || []
        );

        // Stroke setup
        logoElements?.forEach(
          (el: any) => {
            const length =
              el.getTotalLength?.() ||
              1000;

            gsap.set(el, {
              strokeDasharray:
                length,
              strokeDashoffset:
                length,
            });
          }
        );

        // Initial states
        gsap.set(
          [
            heroTextRef.current,
            houseRef.current,
            topLeftCloudRef.current,
            topRightCloudRef.current,
          ],
          {
            y: 180,
            opacity: 0,
          }
        );

        gsap.set(
          logoWrapperRef.current,
          {
            opacity: 0,
            scale: 0.8,
          }
        );

        gsap.set(
          houseMaskRef.current,
          {
            opacity: 0,
          }
        );

        const tl =
          gsap.timeline({
            scrollTrigger: {
              trigger:
                heroRef.current,
              start:
                "top top",
              end:
                "+=5000",
              scrub: 1.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

        tl.to(
          [
            heroTextRef.current,
            houseRef.current,
            topLeftCloudRef.current,
            topRightCloudRef.current,
          ],
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 1.2,
            ease:
              "power3.out",
          }
        );

        tl.to(
          heroTextRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.92,
            filter:
              "blur(8px)",
            duration: 1.5,
            ease:
              "power2.out",
          },
          1
        );

        tl.to(
          houseRef.current,
          {
            y: -180,
            scale: 1.45,
            duration: 3,
            ease: "none",
          },
          1
        );

        tl.to(
          [
            topLeftCloudRef.current,
            topRightCloudRef.current,
          ],
          {
            x: (i) =>
              i === 0
                ? -100
                : 100,
            opacity: 0.3,
            duration: 3,
            ease: "none",
          },
          1
        );

        tl.to(
          logoWrapperRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          2.5
        );

        if (logoElements.length) {
          tl.to(
            logoElements,
            {
              strokeDashoffset: 0,
              duration: 2,
              stagger: 0.08,
              ease: "power2.out",
            },
            2.5
          );
        }

        tl.to(
          houseMaskRef.current,
          {
            opacity: 1,
            duration: 1,
          },
          4
        );

        tl.to(
          houseRef.current,
          {
            opacity: 0,
            duration: 0.4,
          },
          4
        );

        tl.to(
          fogRef.current,
          {
            scaleY: 3,
            yPercent: -55,
            transformOrigin:
              "bottom center",
            duration: 2,
            ease:
              "power2.inOut",
          },
          4.4
        );
      },
      heroRef
    );

    return () =>
      ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
      relative
      h-screen
      overflow-hidden
      bg-black
    "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* LEFT CLOUD */}
      <div
        ref={topLeftCloudRef}
        className="
        absolute
        top-[14%]
        left-0
        z-10
        w-[180px]
        sm:w-[220px]
        md:w-[280px]
        lg:w-[360px]
        xl:w-[440px]
      "
      >
        <Image
          src={cloudImg}
          alt=""
          className="w-full object-contain"
        />
      </div>

      {/* RIGHT CLOUD */}
      <div
        ref={topRightCloudRef}
        className="
        absolute
        top-[14%]
        right-0
        z-10
        w-[180px]
        sm:w-[220px]
        md:w-[280px]
        lg:w-[360px]
        xl:w-[440px]
      "
      >
        <Image
          src={cloudImg}
          alt=""
          className="
          w-full
          object-contain
          scale-x-[-1]
        "
        />
      </div>

      {/* HERO TEXT */}
      <ContainerLayout
        disablePaddingY
        className="
        relative
        z-[20]
        flex
        h-screen
        flex-col
        items-center
        justify-start
        text-center
        pt-[15vh]
      "
      >
        <div
          ref={heroTextRef}
          className="
          will-change-transform
        "
        >
          <h1
            className="
            font-heading
            uppercase
            text-white
            leading-[92%]
            tracking-[-0.04em]
            text-[clamp(2.8rem,6vw,7rem)]
          "
            style={{
              fontWeight: 300,
            }}
          >
            Discover Your
            <br />
            Next Move
          </h1>

          <p
            className="
            mt-5
            text-white
            max-w-[680px]
            mx-auto
            px-4
            leading-[160%]
            text-[clamp(0.95rem,1.2vw,1.2rem)]
          "
          >
            Expert Support.
            Real Insights.
            Clear Direction
            For What Comes Next.
          </p>

          <Link
            href="/projects"
            className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/10
            backdrop-blur-md
            hover:bg-white/20
            transition-all
            duration-300
            px-8
            py-4
            text-white
          "
          >
            Explore Properties
          </Link>
        </div>
      </ContainerLayout>

      {/* HOUSE */}
      <div
        ref={houseRef}
        className="
        absolute
        left-1/2
        z-[40]
        bottom-[-15%]
        -translate-x-1/2
        w-[clamp(520px,58vw,1400px)]
        will-change-transform
      "
      >
        <Image
          src={houseImg}
          alt="House"
          priority
          className="
          w-full
          object-contain
        "
        />
      </div>

      {/* SVG LOGO DRAW */}
      <div
        ref={logoWrapperRef}
        className="
        absolute
        inset-0
        z-[60]
        flex
        items-center
        justify-center
        pointer-events-none
      "
      >
        <svg
          className="
          w-[90vw]
          max-w-[900px]
        "
          viewBox="0 0 900 400"
          fill="none"
        >
          <g
            ref={logoRef}
            transform="translate(45, 110)"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <polygon points="0,144 195,144 175,164 0,164" />
            <polygon points="0,112 195,112 175,132 0,132" />
            <polygon points="14,80 195,80 175,100 0,100" />
            <polygon points="34,48 195,48 175,68 14,68" />
            <polygon points="58,16 195,16 175,36 38,36" />

            <path d="M 230,0 L 230,180 L 300,180 Q 392,180 392,90 Q 392,0 300,0 Z M 268,34 L 298,34 Q 354,34 354,90 Q 354,146 298,146 L 268,146 Z" />

            <path d="M 408,90 Q 408,0 482,0 Q 556,0 556,90 Q 556,180 482,180 Q 408,180 408,90 Z M 444,90 Q 444,144 482,144 Q 520,144 520,90 Q 520,36 482,36 Q 444,36 444,90 Z" />

            <path d="M 572,16 Q 592,0 628,0 Q 676,0 696,28 Q 710,46 706,70 Q 702,92 678,106 L 646,122 Q 624,134 624,150 Q 624,163 638,166 Q 650,170 663,163 Q 676,156 680,142 L 710,158 Q 696,184 668,192 Q 646,198 628,192 Q 588,182 580,154 Q 574,134 582,114 Q 590,94 614,82 L 644,66 Q 664,54 665,36 Q 665,24 651,20 Q 640,16 629,21 Q 616,26 612,42 Z" />

            <path d="M 724,16 Q 744,0 780,0 Q 828,0 848,28 Q 862,46 858,70 Q 854,92 830,106 L 798,122 Q 776,134 776,150 Q 776,163 790,166 Q 802,170 815,163 Q 828,156 832,142 L 862,158 Q 848,184 820,192 Q 798,198 780,192 Q 740,182 732,154 Q 726,134 734,114 Q 742,94 766,82 L 796,66 Q 816,54 817,36 Q 817,24 803,20 Q 792,16 781,21 Q 768,26 764,42 Z" />

            <text
              x="448"
              y="240"
              fontSize="44"
              fontWeight="300"
              stroke="#fff"
              fill="none"
              textAnchor="middle"
              letterSpacing="16"
            >
              REALTY
            </text>
          </g>
        </svg>
      </div>

      {/* MASK HOUSE */}
      <div
        ref={houseMaskRef}
        className="
        absolute
        inset-0
        z-[55]
        opacity-0
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          inset-0
        "
          style={{
            WebkitMaskImage:
              "url('/logo-mask.svg')",
            WebkitMaskRepeat:
              "no-repeat",
            WebkitMaskPosition:
              "center",
            WebkitMaskSize:
              "80%",
            maskImage:
              "url('/logo-mask.svg')",
            maskRepeat:
              "no-repeat",
            maskPosition:
              "center",
            maskSize:
              "80%",
          }}
        >
          <Image
            src={houseImg}
            alt=""
            fill
            className="
            object-cover
            scale-[1.4]
          "
          />
        </div>
      </div>

      {/* FOG */}
      <div
        ref={fogRef}
        className="
        absolute
        bottom-0
        left-0
        z-[80]
        w-full
        pointer-events-none
      "
      >
        <Image
          src={cloudMain}
          alt=""
          className="
          w-full
          min-h-[180px]
          md:min-h-[240px]
          lg:min-h-[320px]
          object-cover
        "
        />
      </div>
    </section>
  );
};

export default Hero;