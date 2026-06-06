"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImg from "@/assets/home/hero/hero-bg.png";
import cloudLeft from "@/assets/home/hero/cloudImg.png";
import cloudRight from "@/assets/home/hero/cloudImg.png";
import houseImg from "@/assets/home/hero/house_img.png";
import fogImg from "@/assets/home/hero/cloudImgmain.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const buildingWrapRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLDivElement>(null);
  const cloudRightRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ── grab elements ─── */
      const paths = gsap.utils.toArray<SVGPathElement>(".doss-outline-path");
      // querySelector inside the context scope (rootRef) finds the SVG image
      const clipImg = rootRef.current!.querySelector<SVGImageElement>(".house-clip-img");

      /* ── STROKE SETUP ─── */
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 1,
          fill: "none",
        });
      });

      gsap.set(svgWrapRef.current, { opacity: 0 });
      // set via GSAP so there's no inline-style conflict
      gsap.set(clipImg, { opacity: 0 });

      /* ── MAIN HERO TIMELINE ── */
      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=4000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      /* hero text fades */
      heroTL.to(heroTextRef.current, { opacity: 0, y: 60, ease: "power2.out" }, 0.1);

      /* clouds part */
      heroTL.to(cloudLeftRef.current, { x: -160, ease: "none" }, 0);
      heroTL.to(cloudRightRef.current, { x: 160, ease: "none" }, 0);

      /* fog drifts */
      heroTL.to(fogRef.current, { y: 100, scale: 1.15, opacity: 0.9, ease: "none", force3D: true }, 0);

      /* ───────────────── HOUSE ZOOM ───────────────── */
      heroTL.to(
        buildingWrapRef.current,
        {
          scale: 1.55,
          y: -180,
          transformOrigin: "center bottom",
          duration: 8,
          ease: "none",
          force3D: true,
        },
        0
      );

      /* SVG layer visible */
      heroTL.to(svgWrapRef.current, {
        opacity: 1,
        ease: "none",
      }, 0.3);

      /* ───────── OUTLINE DRAW ───────── */
      heroTL.to(
        paths,
        {
          strokeDashoffset: 0,
          stagger: 0.04,
          duration: 8,
          ease: "power1.out",
        },
        0.4
      );

      /* ───────── HOUSE FADES DURING DRAW ───────── */
      heroTL.to(
        buildingWrapRef.current,
        {
          opacity: 0,
          duration: 5.5,
          ease: "power1.out",
        },
        1.8
      );

      /* ───────── FINAL TEXT COMPLETES ───────── */
      heroTL.to({}, { duration: 0.4 }, 7.2);

      /* 90% draw complete */
      heroTL.to(
        buildingWrapRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        6.8
      );

      /* complete final outline */
      heroTL.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: "power1.out",
        },
        7.2
      );

      /* final outline finishes */
      heroTL.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        7.2
      );

      /* immediately switch to text image */
      heroTL.to(
        clipImg,
        {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        },
        7.25
      );

      /* remove outline smoothly */
      heroTL.to(
        paths,
        {
          strokeOpacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        7.3
      );

      /* ───────── HOUSE SCROLLS INSIDE TEXT ───────── */
      heroTL.to(
        clipImg,
        {
          attr: {
            y: 80,
          },
          duration: 5,
          ease: "none",
        },
        7.6
      );

      /* hold */
      heroTL.to({}, { duration: 2 }, 10);

      /* final fade */
      heroTL.to(
        svgWrapRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power2.out",
        },
        12
      );

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        className="relative h-[100vh] overflow-hidden bg-[#D8E8F2]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ── BACKGROUND ── */}
          <div className="absolute inset-0 z-0">
            <Image src={bgImg} alt="Hero background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-[#D8E8F2]/20" />
          </div>

          {/* ── CLOUDS ── */}
          <div ref={cloudLeftRef} className="pointer-events-none absolute left-[-8%] top-[12%] z-[5]">
            <Image src={cloudLeft} alt="cloud" width={520} height={220} className="h-auto w-[18rem] xl:w-[40rem]" />
          </div>
          <div ref={cloudRightRef} className="pointer-events-none absolute right-[-8%] top-[18%] z-[5]">
            <Image src={cloudRight} alt="cloud" width={520} height={220} className="h-auto w-[18rem] scale-x-[-1] xl:w-[40rem]" />
          </div>

          {/* ── HERO TEXT ── */}
          <div
            ref={heroTextRef}
            id="hero-text"
            className="absolute inset-0 z-50 pointer-events-auto flex flex-col items-center text-center px-6 pt-[16vh] lg:pt-[18vh] xl:pt-[20vh]"
          >
            <h2 className="font-heading uppercase leading-[66px] text-black tracking-tight text-[30px] md:text-[60px]">
              Discover Your Next Move
            </h2>
            <p className="max-w-[420px] lg:max-w-[540px] text-sm md:text-[18px] leading-[20px] text-black font-body">
              Expert Support. Real Insights. Clear Direction For What Comes Next.
            </p>
            <button className="mt-8 rounded-full border border-white/50 bg-white/10 px-8 lg:px-10 py-3 lg:py-4 text-sm lg:text-base text-white backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
              Explore Properties
            </button>
          </div>

          {/* ── BUILDING ── */}
          <div
            ref={buildingWrapRef}
            className="absolute bottom-[-45%] md:bottom-[-50%] xl:bottom-[-42%] left-1/2 z-30 w-[75vh] md:w-[50vh] xl:w-[90vh] 2xl:w-[110vh] min-w-[420px] max-w-[1200px] -translate-x-1/2 will-change-transform"
          >
            <Image src={houseImg} alt="Luxury building" width={1800} height={1200} priority className="h-auto w-full object-cover" />
          </div>

          {/* ── SVG LAYER ── */}
          <div
            ref={svgWrapRef}
            className="absolute inset-0 z-[60] flex flex-col items-center justify-center pointer-events-none opacity-0"
          >
            <svg
              viewBox="0 0 1040 1080"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[clamp(900px,140vw,2500px)] h-auto shrink-0"
              style={{ overflow: "visible", transform: "translateY(-46px) translateX(30px) scale(1.2)" }}
            >
              <defs>
                <mask id="dossTextMask" maskUnits="userSpaceOnUse">
                  <rect width="1040" height="1080" fill="black" />
                  {/* D */}
                  <g transform="translate(295,600) scale(0.07421875,-0.07421875)">
                    <path fill="white" d="M1393 715Q1393 497 1307.5 334.5Q1222 172 1065.5 86Q909 0 707 0H137V1409H647Q1003 1409 1198 1229.5Q1393 1050 1393 715ZM1096 715Q1096 942 978 1061.5Q860 1181 641 1181H432V228H682Q872 228 984 359Q1096 490 1096 715Z" />
                  </g>
                  {/* O */}
                  <g transform="translate(398.7695,600) scale(0.07421875,-0.07421875)">
                    <path fill="white" d="M1507 711Q1507 491 1420 324Q1333 157 1171 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272 1240Q460 1430 795 1430Q1130 1430 1318.5 1238Q1507 1046 1507 711ZM1206 711Q1206 939 1098 1068.5Q990 1198 795 1198Q597 1198 489 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342Q1206 472 1206 711Z" />
                  </g>
                  {/* S */}
                  <g transform="translate(510,600) scale(0.07421875,-0.07421875)">
                    <path fill="white" d="M1286 406Q1286 199 1132.5 89.5Q979 -20 682 -20Q411 -20 257 76Q103 172 59 367L344 414Q373 302 457 251.5Q541 201 690 201Q999 201 999 389Q999 449 963.5 488Q928 527 863.5 553Q799 579 616 616Q458 653 396 675.5Q334 698 284 728.5Q234 759 199 802Q164 845 144.5 903Q125 961 125 1036Q125 1227 268.5 1328.5Q412 1430 686 1430Q948 1430 1079.5 1348Q1211 1266 1249 1077L963 1038Q941 1129 873.5 1175Q806 1221 680 1221Q412 1221 412 1053Q412 998 440.5 963Q469 928 525 903.5Q581 879 752 842Q955 799 1042.5 762.5Q1130 726 1181 677.5Q1232 629 1259 561.5Q1286 494 1286 406Z" />
                  </g>
                  {/* S */}
                  <g transform="translate(610.3828,600) scale(0.07421875,-0.07421875)">
                    <path fill="white" d="M1286 406Q1286 199 1132.5 89.5Q979 -20 682 -20Q411 -20 257 76Q103 172 59 367L344 414Q373 302 457 251.5Q541 201 690 201Q999 201 999 389Q999 449 963.5 488Q928 527 863.5 553Q799 579 616 616Q458 653 396 675.5Q334 698 284 728.5Q234 759 199 802Q164 845 144.5 903Q125 961 125 1036Q125 1227 268.5 1328.5Q412 1430 686 1430Q948 1430 1079.5 1348Q1211 1266 1249 1077L963 1038Q941 1129 873.5 1175Q806 1221 680 1221Q412 1221 412 1053Q412 998 440.5 963Q469 928 525 903.5Q581 879 752 842Q955 799 1042.5 762.5Q1130 726 1181 677.5Q1232 629 1259 561.5Q1286 494 1286 406Z" />
                  </g>
                  {/* R */}
                  <g transform="translate(468,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M1105 0 778 535H432V0H137V1409H841Q1093 1409 1230 1300.5Q1367 1192 1367 989Q1367 841 1283 733.5Q1199 626 1056 592L1437 0ZM1070 977Q1070 1180 810 1180H432V764H818Q942 764 1006 820Q1070 876 1070 977Z" />
                  </g>
                  {/* E */}
                  <g transform="translate(495,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M137 0V1409H1245V1181H432V827H1184V599H432V228H1286V0Z" />
                  </g>
                  {/* A */}
                  <g transform="translate(518,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M1133 0 1008 360H471L346 0H51L565 1409H913L1425 0ZM739 1192 733 1170Q723 1134 709 1088Q695 1042 537 582H942L803 987L760 1123Z" />
                  </g>
                  {/* L */}
                  <g transform="translate(545,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M137 0V1409H432V228H1188V0Z" />
                  </g>
                  {/* T */}
                  <g transform="translate(565,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M773 1181V0H478V1181H23V1409H1229V1181Z" />
                  </g>
                  {/* Y */}
                  <g transform="translate(590,640) scale(0.01660156,-0.013)">
                    <path fill="white" d="M831 578V0H537V578L35 1409H344L682 813L1024 1409H1333Z" />
                  </g>
                </mask>
              </defs>

              {/* House image clipped */}
              <image
                className="house-clip-img"
                href={houseImg.src}
                x="180"
                y="220"
                width="850"
                height="850"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#dossTextMask)"
              />

              {/* ── OUTLINE PATHS ── */}

              {/* D */}
              <g transform="translate(295,600) scale(0.07421875,-0.07421875)">
                <path className="doss-outline-path" fill="none" stroke="#ffffff" strokeWidth="5"
                  d="M1393 715Q1393 497 1307.5 334.5Q1222 172 1065.5 86Q909 0 707 0H137V1409H647Q1003 1409 1198 1229.5Q1393 1050 1393 715ZM1096 715Q1096 942 978 1061.5Q860 1181 641 1181H432V228H682Q872 228 984 359Q1096 490 1096 715Z" />
              </g>
              {/* O */}
              <g transform="translate(398.7695,600) scale(0.07421875,-0.07421875)">
                <path className="doss-outline-path" fill="none" stroke="#ffffff" strokeWidth="5"
                  d="M1507 711Q1507 491 1420 324Q1333 157 1171 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272 1240Q460 1430 795 1430Q1130 1430 1318.5 1238Q1507 1046 1507 711ZM1206 711Q1206 939 1098 1068.5Q990 1198 795 1198Q597 1198 489 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342Q1206 472 1206 711Z" />
              </g>
              {/* S */}
              <g transform="translate(510,600) scale(0.07421875,-0.07421875)">
                <path className="doss-outline-path" fill="none" stroke="#ffffff" strokeWidth="5"
                  d="M1286 406Q1286 199 1132.5 89.5Q979 -20 682 -20Q411 -20 257 76Q103 172 59 367L344 414Q373 302 457 251.5Q541 201 690 201Q999 201 999 389Q999 449 963.5 488Q928 527 863.5 553Q799 579 616 616Q458 653 396 675.5Q334 698 284 728.5Q234 759 199 802Q164 845 144.5 903Q125 961 125 1036Q125 1227 268.5 1328.5Q412 1430 686 1430Q948 1430 1079.5 1348Q1211 1266 1249 1077L963 1038Q941 1129 873.5 1175Q806 1221 680 1221Q412 1221 412 1053Q412 998 440.5 963Q469 928 525 903.5Q581 879 752 842Q955 799 1042.5 762.5Q1130 726 1181 677.5Q1232 629 1259 561.5Q1286 494 1286 406Z" />
              </g>
              {/* S */}
              <g transform="translate(610.3828,600) scale(0.07421875,-0.07421875)">
                <path className="doss-outline-path" fill="none" stroke="#ffffff" strokeWidth="5"
                  d="M1286 406Q1286 199 1132.5 89.5Q979 -20 682 -20Q411 -20 257 76Q103 172 59 367L344 414Q373 302 457 251.5Q541 201 690 201Q999 201 999 389Q999 449 963.5 488Q928 527 863.5 553Q799 579 616 616Q458 653 396 675.5Q334 698 284 728.5Q234 759 199 802Q164 845 144.5 903Q125 961 125 1036Q125 1227 268.5 1328.5Q412 1430 686 1430Q948 1430 1079.5 1348Q1211 1266 1249 1077L963 1038Q941 1129 873.5 1175Q806 1221 680 1221Q412 1221 412 1053Q412 998 440.5 963Q469 928 525 903.5Q581 879 752 842Q955 799 1042.5 762.5Q1130 726 1181 677.5Q1232 629 1259 561.5Q1286 494 1286 406Z" />
              </g>
              {/* R */}
              <g transform="translate(468,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M1105 0 778 535H432V0H137V1409H841Q1093 1409 1230 1300.5Q1367 1192 1367 989Q1367 841 1283 733.5Q1199 626 1056 592L1437 0ZM1070 977Q1070 1180 810 1180H432V764H818Q942 764 1006 820Q1070 876 1070 977Z" />
              </g>
              {/* E */}
              <g transform="translate(495,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M137 0V1409H1245V1181H432V827H1184V599H432V228H1286V0Z" />
              </g>
              {/* A */}
              <g transform="translate(518,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M1133 0 1008 360H471L346 0H51L565 1409H913L1425 0ZM739 1192 733 1170Q723 1134 709 1088Q695 1042 537 582H942L803 987L760 1123Z" />
              </g>
              {/* L */}
              <g transform="translate(545,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M137 0V1409H432V228H1188V0Z" />
              </g>
              {/* T */}
              <g transform="translate(565,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M773 1181V0H478V1181H23V1409H1229V1181Z" />
              </g>
              {/* Y */}
              <g transform="translate(590,640) scale(0.01660156,-0.013)">
                <path className="doss-outline-path" fill="none" stroke="#fff" strokeWidth="15"
                  d="M831 578V0H537V578L35 1409H344L682 813L1024 1409H1333Z" />
              </g>
            </svg>
          </div>

          {/* ── BOTTOM FOG ── */}
          <div ref={fogRef} className="absolute bottom-[-20%] left-0 z-0 w-full pointer-events-none">
            <Image src={fogImg} alt="Bottom fog" width={1920} height={500} priority className="w-full h-auto object-cover opacity-60" />
          </div>

        </div>
      </section>
    </>
  );
}