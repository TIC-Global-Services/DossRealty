"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const JOB_LIST = [
  "Sales Executive / 3+ Years Experience (Location - Chennai)",
  "Pre-Sales Executive / 1+ Years Experience (Location - Chennai)",
  "project Manager / 1+ Years Experience (Location - Chennai)",
];

const PIN_DISTANCE = 1800;

export default function BuiltForLiving() {
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // desktop
  const goldCardRef = useRef<HTMLDivElement>(null);
  const navyCardRef = useRef<HTMLDivElement>(null);

  // mobile
  const mobileGoldRef = useRef<HTMLDivElement>(null);
  const mobileNavyRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);

  // tablet
  const tabletGoldRef = useRef<HTMLDivElement>(null);
  const tabletNavyRef = useRef<HTMLDivElement>(null);
  const tabletCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const prevScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isMobile, isTablet, isDesktop } = context.conditions as {
          isMobile: boolean;
          isTablet: boolean;
          isDesktop: boolean;
        };

        const ctx = gsap.context(() => {
          // DESKTOP
          if (isDesktop) {
            const gold = goldCardRef.current;
            const navy = navyCardRef.current;
            const wrapper = pinWrapperRef.current;
            const section = sectionRef.current;
            if (!gold || !navy || !wrapper || !section) return;

            gsap.set(gold, { y: 640, zIndex: 10 });
            gsap.set(navy, { y: 850, zIndex: 20 });

            wrapper.style.minHeight = `${section.offsetHeight + PIN_DISTANCE}px`;

            const tl = gsap.timeline({
              scrollTrigger: {
                id: "built-for-living-desktop",
                trigger: section,
                start: "top top",
                end: `+=${PIN_DISTANCE}`,
                scrub: 1.5,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(gold, { y: 0, ease: "power3.out", duration: 0.4 });
            tl.to({}, { duration: 0.15 });
            tl.to(navy, { y: 90, ease: "power4.out", duration: 0.55 });
            tl.to(gold, { y: -10, scale: 0.97, ease: "power2.out", duration: 0.3 }, "<");
          }

          // MOBILE
          if (isMobile) {
            const gold = mobileGoldRef.current;
            const navy = mobileNavyRef.current;
            if (!gold || !navy) return;

            gsap.set(gold, { y: 180, zIndex: 10 });
            gsap.set(navy, { y: 260, zIndex: 20 });

            const tl = gsap.timeline({
              scrollTrigger: {
                id: "built-for-living-mobile",
                trigger: mobileCardsRef.current,
                start: "top 80%",
                end: "+=300",
                scrub: 1.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(gold, { y: 0, ease: "power3.out", duration: 0.4 });
            tl.to({}, { duration: 0.15 });
            tl.to(navy, { y: 70, ease: "power4.out", duration: 0.55 });
            tl.to(gold, { y: -10, scale: 0.97, ease: "power2.out", duration: 0.3 }, "<");
          }

          // TABLET 
          if (isTablet) {
            const gold = tabletGoldRef.current;
            const navy = tabletNavyRef.current;
            if (!gold || !navy) return;

            gsap.set(gold, { y: 220, zIndex: 10 });
            gsap.set(navy, { y: 320, zIndex: 20 });

            const tl = gsap.timeline({
              scrollTrigger: {
                id: "built-for-living-tablet",
                trigger: tabletCardsRef.current,
                start: "top 80%",
                end: "+=350",
                scrub: 1.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(gold, { y: 0, ease: "power3.out", duration: 0.4 });
            tl.to({}, { duration: 0.15 });
            tl.to(navy, { y: 80, ease: "power4.out", duration: 0.55 });
            tl.to(gold, { y: -10, scale: 0.97, ease: "power2.out", duration: 0.3 }, "<");
          }
        }, sectionRef);

        requestAnimationFrame(() => ScrollTrigger.refresh());


        return () => {
          ctx.revert();
          if (pinWrapperRef.current) {
            pinWrapperRef.current.style.minHeight = "";
          }
        };
      }
    );

    return () => {
      mm.revert();
      root.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return (
    <div ref={pinWrapperRef} className="lg:relative">
      <section
        data-theme="light"
        ref={sectionRef}
        className="
          mx-auto
          bg-white
          px-5
          py-14
          md:px-12
          md:py-16
          lg:flex
          lg:h-screen
          lg:items-center
          lg:px-26
          lg:py-0
        "
      >
        {/* MOBILE (<768px) — unchanged */}
        <div className="md:hidden">
          <div
            ref={mobileCardsRef}
            className="relative mx-auto h-[320px] w-full max-w-[320px] mb-34"
          >
            <div
              ref={mobileGoldRef}
              className="
              absolute left-0 top-0 z-10 h-[280px] w-full
              rounded-[24px] bg-[#BFA55A] p-6
            "
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="font-heading text-[30px] leading-[30px] text-white">
                  PEOPLE<br />DEFINE THE<br />STANDARD
                </h2>
                <p className="text-[15px] text-white/80">
                  We seek those with the judgement to make the exceptional feel effortless.
                </p>
              </div>
            </div>

            <div
              ref={mobileNavyRef}
              className="
              absolute left-0 top-[70px] z-20 h-[280px] w-full
              rounded-[24px] bg-[#1A2857] p-6
            "
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="font-heading text-[30px] leading-[30px] text-white">
                  CRAFT LIVES<br />IN THE<br />DETAILS
                </h2>
                <p className="text-[15px] text-white/80">
                  From first thought to final finish, nothing is incidental.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="font-heading text-[24px] leading-[30px] tracking-[0px] text-[#3A3A3A]">
              View opening<br />positions
            </h2>

            <ul className="flex flex-col items-center justify-center ml-20 mt-4 max-w-[270px] space-y-2 text-start">
              {JOB_LIST.map((job, i) => (
                <li key={i} className="flex items-start gap-2 text-[16px] leading-[26px] text-[#8C8C8C]">
                  <span className="mt-[8px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#8C8C8C]" />
                  {job}
                </li>
              ))}
            </ul>

            <Link href="/contact?form=job">
              <button className="mt-6 font-small w-fit rounded-full bg-[#00256A] px-10 py-2.5 text-[13px] font-medium text-white transition duration-300 hover:scale-105 cursor-pointer">
                Apply now
              </button>
            </Link>

            <div className="mt-10 max-w-[520px]">
              <p className="font-bold mt-4 text-[16px] leading-[20px] text-[#00000080]">
                Don&apos;t see your role?<br />
                <span className="font-[400]">We welcome exceptional talent across emerging roles. Share your CV, and we will contact you when a suitable opportunity arises.</span>
              </p>

              <button type="button" className="font-small mt-5 rounded-full bg-[#00256A] px-8 py-2.5 text-[13px] leading-[20px] tracking-[-0.48px] font-medium text-white">
                Share your cv
              </button>
            </div>
          </div>
        </div>

        {/* TABLET */}
        <div className="hidden md:block lg:hidden">
          <div
            ref={tabletCardsRef}
            className="relative mx-auto h-[400px] w-full max-w-[420px] mb-28"
          >
            <div
              ref={tabletGoldRef}
              className="
              absolute left-0 top-0 z-10 h-[340px] w-full
              rounded-[26px] bg-[#BFA55A] p-8
            "
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="font-heading text-[36px] leading-[38px] uppercase text-white">
                  PEOPLE<br />DEFINE THE<br />STANDARD
                </h2>
                <p className="max-w-[280px] text-[17px] leading-relaxed text-white/80">
                  We seek those with the judgement to make the exceptional feel effortless.
                </p>
              </div>
            </div>

            <div
              ref={tabletNavyRef}
              className="
              absolute left-0 top-[80px] z-20 h-[340px] w-full
              rounded-[26px] bg-[#1A2857] p-8
            "
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="font-heading text-[36px] leading-[38px] uppercase text-white">
                  CRAFT LIVES<br />IN THE<br />DETAILS
                </h2>
                <p className="max-w-[280px] text-[17px] leading-relaxed text-white/80">
                  From first thought to final finish, nothing is incidental.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-40 text-center">
            <h2 className="font-heading text-[32px] leading-[38px] text-[#1E1E1E]">
              View opening<br />positions
            </h2>

            <ul className="mx-auto mt-5 max-w-[350px] space-y-2 text-left">
              {JOB_LIST.map((job, i) => (
                <li key={i} className="flex items-start gap-2 text-[17px] leading-[26px] text-[#00000080]">
                  <span className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-gray-500" />
                  {job}
                </li>
              ))}
            </ul>

            <Link href="/contact?form=job">
              <button className="mt-7 font-small w-fit rounded-full bg-[#00256A] px-10 py-3 text-[15px] font-medium text-white transition duration-300 hover:scale-105 cursor-pointer">
                Apply now
              </button>
            </Link>

            <div className="mt-10 mx-auto max-w-[480px]">
              <p className="font-bold mt-4 text-[18px] leading-[24px] text-[#00000080]">
                Don&apos;t see your role?<br />
                <span className="font-[400]">We welcome exceptional talent across emerging roles. Share your CV, and we will contact you when a suitable opportunity arises.</span>
              </p>

              <button type="button" className="font-small mt-5 rounded-full bg-[#00256A] px-9 py-3 text-[15px] font-medium text-white transition duration-300 hover:scale-105 cursor-pointer">
                Share your cv
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP (>=1024px) — unchanged */}
        <div className="hidden lg:flex lg:w-full lg:items-center">
          <div className="flex flex-1 flex-col">
            <h2 className="mb-8 text-[24px] md:text-[50px] md:leading-[55px] font-heading leading-[1.05] text-[#1E1E1E]">
              View opening<br />positions
            </h2>

            <ul className="mb-8 space-y-1">
              {JOB_LIST.map((job, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] md:text-[20px] md:leading-[26px] text-[#00000080]">
                  <span className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-gray-500" />
                  {job}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?form=job"
              className="font-small w-fit rounded-full bg-[#00256A] px-10 py-2.5 text-sm md:text-[16px] font-medium text-white transition duration-300 hover:scale-105 cursor-pointer"
            >
              Apply now
            </Link>

            <div className="mt-6 max-w-[520px]">
              <p className="font-bold mt-4 text-[20px] leading-[26px] text-[#00000080]">
                Don&apos;t see your role?<br />
                <span className="font-[400]">We welcome exceptional talent across emerging roles. Share your CV, and we will contact you when a suitable opportunity arises.</span>
              </p>

              <button type="button" className="font-small w-fit mt-4 rounded-full bg-[#00256A] px-10 py-2.5 text-sm md:text-[16px] font-medium text-white transition duration-300 hover:scale-105 cursor-pointer">
                Share your cv
              </button>
            </div>
          </div>

          <div className="relative h-[560px] w-[415px] flex-shrink-0">
            <div
              ref={goldCardRef}
              className="absolute left-0 top-0 z-10 h-[415px] w-[415px] rounded-[28px] bg-[#BFA55A] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.18)] will-change-transform"
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-sm md:text-[44px] md:leading-[48px] md:tracking-[-3px] uppercase text-white">
                  PEOPLE<br />DEFINE THE<br />STANDARD
                </h2>
                <p className="max-w-[300px] text-sm md:text-[20px] leading-relaxed text-white/75">
                  We seek those with the judgement to make the exceptional feel effortless.
                </p>
              </div>
            </div>

            <div
              ref={navyCardRef}
              className="absolute left-0 top-0 z-20 h-[415px] w-[415px] rounded-[28px] bg-[#00256A] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.18)] will-change-transform"
            >
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-sm md:text-[44px] md:leading-[48px] md:tracking-[-3px] uppercase text-white">
                  CRAFT LIVES<br />IN THE<br />DETAILS
                </h2>
                <p className="max-w-[300px] text-sm md:text-[20px] leading-relaxed text-white/75">
                  From first thought to final finish, nothing is incidental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}