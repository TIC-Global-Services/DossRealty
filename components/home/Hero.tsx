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
  const buildingRef = useRef<HTMLDivElement>(null);

  const cloudLeftRef = useRef<HTMLDivElement>(null);
  const cloudRightRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  const svgWrapRef = useRef<HTMLDivElement>(null);
  const realEstateRef = useRef<HTMLParagraphElement>(null);

  const maskWrapRef = useRef<HTMLDivElement>(null);
  const maskTextRef = useRef<HTMLHeadingElement>(null);
  const maskSubRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>(
        ".doss-outline-path"
      );

      /* STROKE SETUP */
      paths.forEach((path) => {
        const len = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 1,
        });
      });

      gsap.set(svgWrapRef.current, {
        opacity: 0,
      });

      gsap.set(maskWrapRef.current, {
        opacity: 0,
        scale: 1,
      });

      /* Main Hero Timeline */
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

      /* Hero text */
      heroTL.to(
        heroTextRef.current,
        {
          opacity: 0,
          y: 60,
          ease: "power2.out",
        },
        0.1
      );

     /* Cloud Moves */
      heroTL.to(
        cloudLeftRef.current,
        {
          x: -160,
          ease: "none",
        },
        0
      );

      heroTL.to(
        cloudRightRef.current,
        {
          x: 160,
          ease: "none",
        },
        0
      );

      /* Fog Moves */
      heroTL.to(
        fogRef.current,
        {
          y: 100,
          scale: 1.15,
          opacity: 0.9,
          ease: "none",
          force3D: true,
        },
        0
      );

      /* House Moves */
      heroTL.to(
        buildingWrapRef.current,
        {
          scale: 1.5,
          y: -160,
          transformOrigin: "center bottom",
          duration: 5,
          ease: "none",
          force3D: true,
          willChange: "transform",
        },
        0.25
      );

     /* Doss Svg */
      heroTL.to(
        svgWrapRef.current,
        {
          opacity: 1,
          ease: "none",
        },
        0.35
      );

      /* Outline */
      heroTL.to(
        paths,
        {
          strokeDashoffset: 0,
          stagger: 0.01,
          duration: 5,
          ease: "none",
          force3D: true,
          immediateRender: false,
        },
        0.4
      );

      /* Behind Text */
      heroTL.to(
        {},
        {
          duration: 1.5,
        },
        3.8
      );

      /* HOUSE FADES */
      heroTL.to(
        buildingWrapRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        },
        4.2
      );

      /* INSTANT SWITCH */
      heroTL.set(
        svgWrapRef.current,
        {
          opacity: 0,
        },
        4.3
      );

      heroTL.set(
        maskWrapRef.current,
        {
          opacity: 1,
        },
        4.3
      );

      
     /* TEXTURE PARALLAX
      INSIDE TEXT */
     
      heroTL.to(
        [maskTextRef.current, maskSubRef.current],
        {
          backgroundPosition: "center 18%",
          duration: 5,
          ease: "none",
        },
        4.3
      );

      /* Textured DOss */
      heroTL.to(
        {},
        {
          duration: 2.5,
        },
        5.2
      );

     /* Fade */
      heroTL.to(
        maskWrapRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.98,
          ease: "power2.out",
          duration: 1,
        },
        7.5
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
        {/* STICKY HERO */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImg}
              alt="Hero background"
              fill
              priority
              className="object-cover"
            />

            {/* Optional soft overlay */}
            <div className="absolute inset-0 bg-[#D8E8F2]/20" />
          </div>

          {/* CLOUDS */}
          <div
            ref={cloudLeftRef}
            className="pointer-events-none absolute left-[-8%] top-[12%] z-[5]"
          >
            <Image
              src={cloudLeft}
              alt="cloud"
              width={520}
              height={220}
              className="h-auto w-[18rem] xl:w-[40rem]"
            />
          </div>

          <div
            ref={cloudRightRef}
            className="pointer-events-none absolute right-[-8%] top-[18%] z-[5]"
          >
            <Image
              src={cloudRight}
              alt="cloud"
              width={520}
              height={220}
              className="h-auto w-[18rem] scale-x-[-1] xl:w-[40rem]"
            />
          </div>

          {/* HERO TEXT */}
          <div ref={heroTextRef}
            id="hero-text"
            className="
          absolute inset-0 z-20
          flex flex-col items-center
          text-center
          px-6
          pt-[16vh]
          lg:pt-[18vh]
          xl:pt-[20vh]
        "
          >

            <h2
              className="
            font-heading
            uppercase
            leading-[66px]
            text-black
            tracking-tight
            text-[30px]
            md:text-[60px]
            
          "
            >
              Discover Your Next Move
            </h2>

            <p
              className="
            max-w-[420px]
            lg:max-w-[540px]
            text-sm
            md:text-[18px]
            leading-[20px]
            text-black
            font-body
          "
            >
              Expert Support. Real Insights.
              Clear Direction For What Comes Next.
            </p>

            <button
              className="
            mt-8
            rounded-full
            border border-white/50
            bg-white/10
            px-8 lg:px-10
            py-3 lg:py-4
            text-sm lg:text-base
            text-white
            backdrop-blur-lg
            transition-all duration-300
            hover:bg-white/20
            hover:scale-105 cursor-pointer
          "
            >
              Explore Properties
            </button>
          </div>


          {/* BUILDING */}
          <div
            ref={buildingWrapRef}
            className="
            absolute
            bottom-[-45%]
            md:bottom-[-50%]
            xl:bottom-[-42%]
          
            left-1/2
            z-30
          
            w-[75vh]
            md:w-[50vh]
            xl:w-[90vh]
            2xl:w-[52vh]
          
            min-w-[420px]
            max-w-[1200px]
          
            -translate-x-1/2
            will-change-transform
          "
          >
            <div ref={buildingRef}>
              <Image
                src={houseImg}
                alt="Luxury building"
                width={1800}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* FIND SVG */}
          <div
            ref={svgWrapRef}
            className="
            absolute inset-0
            z-[60]
            flex items-center justify-center
            pointer-events-none
            opacity-0
          "
          >
            <svg
              viewBox="0 0 926 435"
              className="w-[65vw] max-w-[1400px] h-auto overflow-visible"
              fill="none"
            >
              <g
                transform="translate(0,435) scale(0.03,-0.03)"
                fill="none"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              >
                <path className="doss-outline-path" d="M0 5687 l0 -2514 55 19 c31 10 180 50 333 89 152 39 450 118 662 175 1313 355 1950 484 2398 484 429 0 931 -106 1447 -307 246 -96 356 -158 381 -218 12 -30 34 -208 34 -282 l0 -32 -142 68 c-488 233 -1054 373 -1603 397 -333 14 -802 -38 -1880 -211 -1151 -185 -1551 -245 -1642 -245 l-43 0 0 -1555 0 -1555 7350 0 7350 0 0 755 0 755 313 0 c337 0 400 -7 503 -54 107 -49 194 -157 224 -279 7 -27 11 -91 8 -154 -3 -91 -8 -117 -30 -165 -52 -112 -166 -202 -291 -231 l-56 -12 120 -185 c66 -102 154 -240 197 -307 l77 -123 318 0 317 0 0 755 0 755 435 0 436 0 -3 -97 -3 -98 -307 -3 -308 -2 0 -225 0 -225 275 0 275 0 0 -95 0 -95 -275 0 -275 0 0 -235 0 -235 311 0 310 0 -3 -100 -3 -100 273 2 274 3 277 740 277 740 141 3 140 3 186 -498 c102 -274 227 -609 277 -745 l92 -248 304 0 304 0 0 755 0 755 120 0 120 0 2 -657 3 -658 258 -3 257 -2 0 -95 0 -95 460 0 460 0 0 655 0 655 -210 0 -210 0 0 100 0 100 545 0 545 0 0 -100 0 -100 -210 0 -210 0 0 -655 0 -655 705 0 705 0 0 279 0 279 -186 353 c-102 195 -215 409 -250 477 l-65 122 144 0 143 0 168 -340 c92 -187 171 -340 175 -340 4 0 83 153 175 340 l168 340 139 0 c76 0 139 -2 139 -4 0 -5 -406 -782 -461 -882 l-39 -71 0 -277 0 -276 3980 0 3980 0 -1 2258 c-1 1277 -5 2222 -10 2178 -18 -173 -66 -333 -145 -486 -74 -143 -135 -223 -278 -365 -209 -207 -449 -349 -792 -468 -237 -82 -518 -139 -824 -168 -163 -15 -591 -15 -750 0 -1050 101 -1895 575 -2227 1251 -72 146 -115 101 357 379 226 134 413 242 415 240 2 -2 20 -35 40 -74 179 -338 559 -624 1041 -784 284 -94 523 -126 868 -118 328 7 519 47 722 151 115 58 137 73 212 148 87 87 132 178 139 285 7 102 -12 171 -71 251 -73 98 -188 171 -376 237 -226 78 -298 92 -1290 250 -620 99 -917 178 -1214 327 -438 218 -662 533 -695 979 -19 252 21 490 115 697 120 262 380 527 684 694 282 156 665 264 1090 310 153 16 635 16 775 0 500 -59 912 -201 1265 -437 243 -162 423 -353 554 -584 39 -69 45 -86 34 -96 -7 -7 -98 -68 -203 -135 -104 -68 -269 -175 -365 -238 -96 -63 -179 -116 -185 -118 -6 -3 -35 33 -65 78 -73 113 -230 268 -356 351 -121 80 -315 174 -444 215 -227 72 -425 97 -694 89 -336 -10 -585 -83 -780 -229 -160 -120 -237 -306 -191 -464 51 -180 204 -285 540 -374 155 -41 220 -52 765 -131 572 -83 664 -98 875 -145 795 -178 1251 -490 1399 -960 33 -108 47 -173 56 -263 4 -42 8 722 9 1697 l1 1772 -7277 -2 c-4003 0 -7199 -4 -7103 -8 566 -24 1059 -146 1500 -371 273 -139 470 -280 670 -479 347 -345 561 -744 659 -1229 43 -209 54 -362 48 -629 -6 -255 -21 -372 -73 -581 -48 -195 -94 -319 -184 -496 -130 -259 -261 -436 -477 -645 -464 -452 -1106 -725 -1908 -812 -163 -18 -770 -17 -930 0 -392 44 -727 126 -1033 252 -630 259 -1100 683 -1368 1235 -110 228 -170 415 -215 676 -27 157 -38 566 -19 746 88 871 590 1577 1405 1977 446 219 908 331 1470 355 94 5 -2820 8 -6475 8 -3655 0 -6603 -3 -6552 -8 319 -28 752 -202 1124 -451 144 -96 232 -176 264 -239 27 -54 50 -177 58 -316 l6 -93 -29 0 c-24 0 -39 14 -104 104 -131 178 -264 281 -552 426 -256 129 -504 208 -730 230 -221 22 -294 0 -521 -156 -245 -170 -719 -509 -1289 -924 -590 -429 -1083 -780 -1096 -780 -5 0 -9 18 -9 39 0 37 4 43 123 142 67 57 156 133 197 169 717 632 1763 1505 2061 1719 104 75 206 119 301 130 42 5 -639 9 -1614 10 l-1688 1 0 -2513z m23501 2479 c754 -91 1395 -432 1712 -911 87 -132 112 -185 95 -200 -17 -16 -734 -484 -751 -490 -7 -3 -31 27 -57 68 -61 97 -251 288 -360 359 -249 164 -539 266 -850 299 -142 15 -433 6 -560 -16 -135 -24 -269 -69 -385 -128 -121 -63 -245 -178 -288 -267 -54 -111 -58 -225 -11 -328 58 -130 181 -216 415 -292 146 -47 351 -86 759 -145 560 -80 712 -104 850 -131 388 -78 735 -195 962 -325 264 -151 453 -356 548 -593 144 -358 109 -821 -87 -1161 -141 -246 -390 -477 -683 -634 -446 -239 -1108 -364 -1761 -331 -523 26 -980 135 -1386 330 -409 196 -701 436 -905 740 -66 98 -168 289 -168 315 0 6 84 61 188 122 103 60 288 170 412 243 174 103 226 130 232 119 5 -8 29 -50 54 -94 236 -420 790 -751 1419 -851 138 -21 523 -30 667 -15 416 45 729 205 836 429 35 73 37 82 37 177 0 93 -2 105 -33 167 -102 209 -405 335 -1047 438 -137 22 -392 63 -565 90 -173 28 -376 62 -450 76 -864 162 -1338 467 -1494 964 -80 252 -74 604 14 855 72 203 177 365 344 530 125 123 252 214 417 299 347 180 741 279 1224 310 123 8 534 -4 656 -18z m-13066 -156 c952 -81 1619 -415 2020 -1015 132 -198 230 -427 298 -701 61 -245 72 -355 72 -739 -1 -381 -12 -491 -79 -755 -165 -655 -576 -1143 -1194 -1420 -297 -133 -594 -208 -1015 -257 -124 -15 -331 -17 -1649 -20 l-1508 -4 0 2461 0 2460 1468 0 c902 0 1513 -4 1587 -10z m-6855 -810 c288 -25 586 -118 933 -291 289 -144 428 -234 452 -293 18 -43 34 -181 37 -311 3 -108 3 -110 -19 -108 -13 2 -62 42 -115 96 -153 153 -375 283 -653 381 -323 113 -620 154 -805 110 -108 -25 -189 -72 -585 -336 -369 -247 -740 -482 -1170 -743 -603 -367 -1160 -695 -1178 -695 -4 0 -7 22 -7 49 0 47 3 51 58 103 121 112 524 427 1087 849 312 235 1358 998 1470 1074 128 86 171 104 275 115 97 11 96 11 220 0z m241 -1040 c330 -33 763 -161 1116 -330 121 -59 118 -53 133 -255 12 -174 12 -185 0 -185 -6 0 -51 25 -100 56 -300 185 -704 312 -1096 344 -201 16 -341 -8 -493 -85 -37 -18 -136 -79 -220 -135 -262 -173 -465 -294 -796 -473 -156 -84 -678 -353 -795 -409 -41 -20 -343 -167 -670 -327 l-595 -290 -7 32 c-14 62 5 89 115 164 122 84 600 387 1082 688 915 569 1118 700 1541 987 94 64 198 130 231 146 144 73 315 95 554 72z m68 -706 c285 -42 797 -208 1082 -350 154 -77 161 -89 174 -294 3 -58 8 -120 11 -137 8 -51 -25 -43 -101 27 -36 32 -94 78 -128 100 -90 60 -397 208 -587 283 -516 203 -800 255 -1130 206 -36 -5 -73 -12 -82 -15 -14 -4 -18 1 -18 25 0 22 8 36 33 55 47 36 151 76 247 97 111 23 352 25 499 3z m-250 -599 c126 -19 276 -53 415 -97 401 -124 1108 -452 1130 -525 8 -27 24 -166 32 -272 l7 -93 -24 12 c-13 7 -46 29 -74 49 -274 202 -981 483 -1400 556 -128 22 -307 30 -391 16 -112 -17 -280 -69 -854 -262 -719 -242 -1096 -354 -1930 -575 -135 -35 -253 -67 -262 -70 -14 -4 -18 1 -18 24 0 16 6 34 13 40 7 6 156 67 332 136 540 211 881 355 1410 596 261 118 845 359 1025 422 47 17 117 36 155 43 97 18 307 18 434 0z" />
                <path className="doss-outline-path" d="M8602 5563 l3 -1508 795 0 c604 0 819 3 895 13 549 73 930 316 1135 722 125 248 166 467 157 838 -6 308 -47 492 -153 703 -65 131 -114 199 -217 306 -229 237 -549 378 -959 422 -60 7 -399 11 -878 11 l-780 0 2 -1507z" />
                <path className="doss-outline-path" d="M16560 7194 c-296 -22 -601 -105 -829 -224 -162 -86 -259 -157 -392 -290 -228 -228 -349 -451 -421 -782 -19 -90 -22 -132 -23 -333 0 -204 3 -242 24 -339 41 -195 104 -357 196 -505 255 -412 694 -683 1240 -765 175 -27 389 -36 546 -25 345 24 582 84 844 215 459 229 758 628 841 1124 22 130 28 339 15 473 -39 373 -182 678 -441 938 -264 264 -622 433 -1050 494 -104 15 -445 27 -550 19z" />
                <path className="doss-outline-path" d="M14940 1040 l0 -262 193 4 c177 3 196 5 240 27 94 46 132 124 126 254 -6 103 -40 160 -124 202 -59 30 -62 30 -247 33 l-188 4 0 -262z" />
                <path className="doss-outline-path" d="M18490 1175 c-13 -42 -213 -607 -225 -637 -7 -17 9 -18 239 -18 135 0 246 2 246 4 0 7 -216 618 -232 656 l-15 35 -13 -40z" />
                <path className="doss-outline-path" d="M14940 300 l0 -300 275 0 275 0 -58 93 c-31 51 -115 186 -186 300 l-129 207 -89 0 -88 0 0 -300z" />
                <path className="doss-outline-path" d="M18164 253 c-15 -43 -42 -117 -60 -165 l-32 -88 433 0 434 0 -55 156 c-30 87 -57 161 -60 165 -3 5 -146 9 -319 9 l-313 0 -28 -77z" />
              </g>
            </svg>
          </div>

          {/* MASK TEXT */}
          <div
            ref={maskWrapRef}
            className="
            absolute inset-0 z-[60]
            flex flex-col items-center
            justify-center
            opacity-0
          "
          >
            <h1
              ref={maskTextRef}
              style={{
                backgroundImage: `url(${houseImg.src})`,
              }}
              className="
              text-center font-black
              tracking-[-0.04em]
              leading-none
              text-[clamp(120px,22vw,280px)]
              text-transparent
              bg-transparent
              bg-[length:140%_auto]
              bg-[position:center_40%]
              bg-no-repeat
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
            "
            >
              DOSS
            </h1>

            <p
              ref={maskSubRef}
              style={{
                backgroundImage: `url(${houseImg.src})`,
              }}
              className="
              -mt-3 text-center
              text-[clamp(24px,4vw,52px)]
              font-bold tracking-[0.05em]
              text-transparent
              bg-[length:200%_auto]
              bg-[position:center_80%]
              bg-no-repeat
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
            "
            >
              REALTY
            </p>
          </div>
        </div>

        {/* BOTTOM FOG */}
        <div ref={fogRef}
          className="
          absolute bottom-[-20%] left-0
          z-0
          w-full
          pointer-events-none
        "
        >
          <Image
            src={fogImg}
            alt="Bottom fog"
            width={1920}
            height={500}
            priority
            className="
            w-full
            h-auto
            object-cover
            opacity-60
          "
          />
        </div>
      </section>

    </>
  );
}