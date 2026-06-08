"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImg from "@/assets/home/hero/hero-bg.png";
import cloudImg from "@/assets/home/hero/cloudImg.png";
import houseImg from "@/assets/home/hero/house_img.png";
import fogImg from "@/assets/home/hero/cloudImgmain.png";

gsap.registerPlugin(ScrollTrigger);

const PD =
  "M1393 715Q1393 497 1307.5 334.5Q1222 172 1065.5 86Q909 0 707 0H137V1409H647Q1003 1409 1198 1229.5Q1393 1050 1393 715ZM1096 715Q1096 942 978 1061.5Q860 1181 641 1181H432V228H682Q872 228 984 359Q1096 490 1096 715Z";

const PO =
  "M1507 711Q1507 491 1420 324Q1333 157 1171 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272 1240Q460 1430 795 1430Q1130 1430 1318.5 1238Q1507 1046 1507 711ZM1206 711Q1206 939 1098 1068.5Q990 1198 795 1198Q597 1198 489 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342Q1206 472 1206 711Z";

const PS =
  "M1286 406Q1286 199 1132.5 89.5Q979 -20 682 -20Q411 -20 257 76Q103 172 59 367L344 414Q373 302 457 251.5Q541 201 690 201Q999 201 999 389Q999 449 963.5 488Q928 527 863.5 553Q799 579 616 616Q458 653 396 675.5Q334 698 284 728.5Q234 759 199 802Q164 845 144.5 903Q125 961 125 1036Q125 1227 268.5 1328.5Q412 1430 686 1430Q948 1430 1079.5 1348Q1211 1266 1249 1077L963 1038Q941 1129 873.5 1175Q806 1221 680 1221Q412 1221 412 1053Q412 998 440.5 963Q469 928 525 903.5Q581 879 752 842Q955 799 1042.5 762.5Q1130 726 1181 677.5Q1232 629 1259 561.5Q1286 494 1286 406Z";

const PR =
  "M1105 0 778 535H432V0H137V1409H841Q1093 1409 1230 1300.5Q1367 1192 1367 989Q1367 841 1283 733.5Q1199 626 1056 592L1437 0ZM1070 977Q1070 1180 810 1180H432V764H818Q942 764 1006 820Q1070 876 1070 977Z";

const PE = "M137 0V1409H1245V1181H432V827H1184V599H432V228H1286V0Z";

const PA =
  "M1133 0 1008 360H471L346 0H51L565 1409H913L1425 0ZM739 1192 733 1170Q723 1134 709 1088Q695 1042 537 582H942L803 987L760 1123Z";

const PL = "M137 0V1409H432V228H1188V0Z";

const PT = "M773 1181V0H478V1181H23V1409H1229V1181Z";

const PY =
  "M831 578V0H537V578L35 1409H344L682 813L1024 1409H1333Z";

const WORDMARK: Array<{
  t: string;
  d: string;
  sw: number;
}> = [
    {
      t: "translate(295,600) scale(0.07421875,-0.07421875)",
      d: PD,
      sw: 5,
    },
    {
      t: "translate(398.7695,600) scale(0.07421875,-0.07421875)",
      d: PO,
      sw: 5,
    },
    {
      t: "translate(510,600) scale(0.07421875,-0.07421875)",
      d: PS,
      sw: 5,
    },
    {
      t: "translate(610.3828,600) scale(0.07421875,-0.07421875)",
      d: PS,
      sw: 5,
    },
    {
      t: "translate(468,640) scale(0.01660156,-0.013)",
      d: PR,
      sw: 15,
    },
    {
      t: "translate(495,640) scale(0.01660156,-0.013)",
      d: PE,
      sw: 15,
    },
    {
      t: "translate(518,640) scale(0.01660156,-0.013)",
      d: PA,
      sw: 15,
    },
    {
      t: "translate(545,640) scale(0.01660156,-0.013)",
      d: PL,
      sw: 15,
    },
    {
      t: "translate(565,640) scale(0.01660156,-0.013)",
      d: PT,
      sw: 15,
    },
    {
      t: "translate(590,640) scale(0.01660156,-0.013)",
      d: PY,
      sw: 15,
    },
  ];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const heroTopRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const compositeRef = useRef<HTMLDivElement>(null);
  const compositeInnerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const cloudLRef = useRef<HTMLDivElement>(null);
  const cloudRRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const maskSvg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 1080">` +
      WORDMARK.map(
        ({ t, d }) =>
          `<g transform="${t}"><path fill="white" d="${d}"/></g>`
      ).join("") +
      `</svg>`;

    const maskUri = `url("data:image/svg+xml,${encodeURIComponent(
      maskSvg
    )}")`;

    const ce = compositeRef.current!;

    ce.style.setProperty("mask-image", maskUri);
    ce.style.setProperty("-webkit-mask-image", maskUri);
    ce.style.setProperty("mask-size", "100% 100%");
    ce.style.setProperty("-webkit-mask-size", "100% 100%");
    ce.style.setProperty("mask-repeat", "no-repeat");
    ce.style.setProperty("-webkit-mask-repeat", "no-repeat");

    const ctx = gsap.context(() => {
      gsap.set(rootRef.current, {
        opacity: 1,
      });

      gsap.set(cloudLRef.current, {
        x: -100,
      });

      gsap.set(cloudRRef.current, {
        x: 100,
      });

      gsap.set(smokeRef.current, {
        yPercent: 40,
        opacity: 40,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
      });

      gsap.set(compositeRef.current, {
        opacity: 0,
      });

      const paths =
        gsap.utils.toArray<SVGPathElement>(
          ".doss-outline-path"
        );

      paths.forEach((p) => {
        const len = p.getTotalLength();

        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
          fill: "rgba(255,255,255,0)",
          strokeOpacity: 1,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });

      tl.to(
        heroTextRef.current,
        {
          opacity: 0,
          yPercent: 20,
          ease: "power2.out",
          duration: 0.8,
        },
        0
      );

      tl.to(
        houseRef.current,
        {
          scale: 1.9,
          ease: "power1.out",
          duration: 7,
          force3D: true,
        },
        0
      );

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          ease: "none",
          duration: 0.1,
        },
        1
      );

      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          stagger: 0.04,
          duration: 3.5,
          ease: "power1.out",
        },
        1.1
      );

      tl.to(
        houseRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power1.in",
        },
        4.15
      );

      tl.to(
        logoRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.in",
        },
        4.15
      );

      tl.to(
        compositeRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        4.15
      );

      tl.to(
        compositeInnerRef.current,
        {
          scale: 1,
          yPercent: -10,
          ease: "none",
          duration: 4,
        },
        4.9
      );

      tl.to(
        smokeRef.current,
        {
          yPercent: 0,
          ease: "none",
          duration: 4.5,
        },
        4.5
      );

      const isMobile =
        window.matchMedia(
          "(max-width: 767px)"
        ).matches;

      if (isMobile) {
        tl.to(
          cloudLRef.current,
          {
            x: 140,
            y: -20,
            ease: "power2.out",
            duration: 5,
          },
          0
        );

        tl.to(
          cloudRRef.current,
          {
            x: -140,
            y: -20,
            ease: "power2.out",
            duration: 5,
          },
          0
        );
      } else {
        tl.to(
          cloudLRef.current,
          {
            x: 240,
            ease: "power2.out",
            duration: 5,
          },
          0
        );

        tl.to(
          cloudRRef.current,
          {
            x: -240,
            ease: "power2.out",
            duration: 5,
          },
          0
        );
      }

      tl.to({}, { duration: 2 }, 9);
    }, rootRef);

    requestAnimationFrame(() =>
      ScrollTrigger.refresh()
    );

    return () => ctx.revert();
  }, []);


  return (
    <>
      <section
        ref={rootRef}
        className="
        relative opacity-0
        h-[100vh] md:h-[150vh]
      "
        style={{ zIndex: 0 }}
      >
        <div
          ref={heroTopRef}
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImg}
              alt=""
              fill
              priority
              className="object-cover object-right md:object-center"
            />
          </div>

          {/* Hero Text */}
          <div
            ref={heroTextRef}
            id="hero-text"
            className="
            absolute inset-0 z-50 pointer-events-auto
            flex flex-col items-center text-center
            px-[20px]
            pt-[22vh]
            md:px-6
            md:pt-[16vh]
            lg:pt-[18vh]
            xl:pt-[20vh]
            "
          >
            <div className="max-w-[min(90vw,900px)]">
              <h2
                className="
                font-heading uppercase text-black tracking-tight
                leading-[120%] md:leading-[100%]
                text-[clamp(36px,4vw,60px)]
              "
              >
                Discover Your Next Move
              </h2>

              <p
                className="text-[clamp(13px,3.5vw,18px)] mt-4 md:mt-0 leading-[18px] md:leading-[20px] text-black font-body"
              >
                Expert Support. Real Insights. Clear Direction
                For What Comes Next.
              </p>

              <button
                className="
                mt-6 font-regular font-[400] leading-[20px]
                rounded-full
                border border-white/50
                bg-white/10
                backdrop-blur-lg
                text-white
                transition-all duration-300
                hover:bg-white/20 hover:scale-105
                cursor-pointer
                px-6
                py-3
                text-[clamp(13px,1vw,16px)]
              "
              >
                Explore Properties
              </button>
            </div>
          </div>

          {/* Left Cloud */}
          <div
            ref={cloudLRef}
            className="
            pointer-events-none
            absolute
            top-[40%]
            right-[-30%]
            md:top-[10%]
            md:right-[-12%]
            z-[0]
          "
          >
            <Image
              src={cloudImg}
              alt=""
              width={520}
              height={220}
              className="
              h-auto
              w-[288px]
              md:w-[896px]
            "
            />
          </div>

          {/* Right Cloud */}
          <div
            ref={cloudRRef}
            className="
            pointer-events-none
            absolute
            top-[40%]
            left-[-30%]
            md:top-[10%]
            md:left-[-12%] z-[0]
          "
          >
            <Image
              src={cloudImg}
              alt=""
              width={520}
              height={220}
              className="
              h-auto
              w-[224px]
              scale-x-[-1]
              md:w-[736px]
            "
            />
          </div>

          {/* House */}
          <div
            ref={houseRef}
            className="
            absolute left-0 right-0
            z-[10]
            will-change-transform
          "
            style={{
              top:
                window.innerWidth < 768
                  ? "56vh"
                  : "48vh",

              height:
                window.innerWidth < 768
                  ? "46vh"
                  : "100vh",

              transformOrigin:
                "bottom center",
            }}
          >
            <Image
              src={houseImg}
              alt="Luxury building"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* Logo + Composite */}
          <div className="pointer-events-none absolute inset-0 z-[15]">
            <div
              className="
              absolute top-1/2 left-1/2
              w-[240vw]
              max-w-none
              sm:w-[200vw]
              md:w-[140vw]
              md:min-w-[900px]
              md:max-w-[1600px]
              2xl:max-w-[1900px]
              min-[1800px]:max-w-[2200px]
              "
              style={{
                transform:
                  window.innerWidth < 768
                    ? "translate(-49%, -50%) scale(0.92)"
                    : "translate(-50%, -50%) scale(1.05)",
                aspectRatio:
                  "1040 / 1080",
              }}
            >
              {/* House inside text */}
              <div
                ref={compositeRef}
                className="
                absolute inset-0
                opacity-0
              "
              >
                <div
                  ref={compositeInnerRef}
                  className="
                  absolute inset-0
                  will-change-transform
                "
                >
                  <Image
                    src={houseImg}
                    alt="Building visible through letterforms"
                    fill
                    className="object-contain"
                    style={{
                      objectPosition:
                        "center 55%",
                    }}
                  />
                </div>
              </div>

              {/* SVG Outline */}
              <div
                ref={logoRef}
                className="
                absolute inset-0
                opacity-0
              "
              >
                <svg
                  viewBox="0 0 1040 1080"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  style={{
                    overflow: "visible",
                  }}
                >
                  {WORDMARK.map(
                    (
                      { t, d, sw },
                      i
                    ) => (
                      <g
                        key={i}
                        transform={t}
                      >
                        <path
                          className="doss-outline-path"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth={sw}
                          d={d}
                        />
                      </g>
                    )
                  )}
                </svg>
              </div>
            </div>
          </div>


          {/* ── BOTTOM FOG ── */}
          <div ref={smokeRef} className="absolute bottom-0 md:bottom-[-40%] left-0 z-[20] md:z-0 w-full pointer-events-none">
            <Image src={fogImg} alt="Bottom fog" width={1920} height={500} priority className="w-full h-auto object-cover md:opacity-60" />
          </div>
        </div>


        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{ bottom: "150vh", zIndex: -1 }}
        />
      </section>
    </>
  );
}
