"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContainerLayout from "@/layout/ContainerLayout";

import image1 from "@/assets/home/infographics/img1.jpg";
import image2 from "@/assets/home/infographics/img2.png";
import image3 from "@/assets/home/infographics/img3.jpg";
import image4 from "@/assets/home/infographics/img4.jpg";
import image5 from "@/assets/home/infographics/img5.png";

gsap.registerPlugin(ScrollTrigger);

type InfographicItem = {
  id: string;
  image: StaticImageData;
  stat: string;
  description: string;
};

const infographicData: InfographicItem[] = [
  {
    id: "01",
    image: image1,
    stat: "Est. 2010",
    description: "In Chennai, India",
  },
  {
    id: "02",
    image: image2,
    stat: "50,000+",
    description: "Homes delivered",
  },
  {
    id: "03",
    image: image3,
    stat: "8",
    description: "Master communities",
  },
  {
    id: "04",
    image: image4,
    stat: "54,000+",
    description: "In planning and progress",
  },
  {
    id: "05",
    image: image5,
    stat: "100+ M SQFT",
    description: "Project area in planning and progress",
  },
];

export default function InfoGraphics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const snapPoints = useMemo(
    () =>
      infographicData.map((_, i) => i / (infographicData.length - 1)),
    []
  );

  const jumpTo = (index: number) => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const progress = index / (infographicData.length - 1);

    const scrollTarget =
      sectionTop +
      progress * (sectionHeight - viewportHeight);

    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ------------------------------------------------
      // INITIAL STATES
      // ------------------------------------------------

      gsap.set(imageRefs.current, {
        opacity: 0,
        scale: 1.12,
        filter: "blur(8px)",
      });

      gsap.set(textRefs.current, {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      });

      gsap.set(numberRefs.current, {
        opacity: 0.35,
        y: 10,
        scale: 0.92,
      });

      // first active state
      gsap.set(imageRefs.current[0], {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      });

      gsap.set(textRefs.current[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      gsap.set(numberRefs.current[0], {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      gsap.set(wheelRef.current, {
        rotation: 0,
        transformOrigin: "center center",
      });

      gsap.set(lineRef.current, {
        rotation: 0,
        transformOrigin: "left center",
      });

      // ------------------------------------------------
      // APPLE-STYLE BREATHING IMAGE
      // ------------------------------------------------

      imageRefs.current.forEach((image) => {
        if (!image) return;

        gsap.to(image, {
          scale: 1.03,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });

      // ------------------------------------------------
      // MAIN TIMELINE
      // ------------------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 4.2}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });


      infographicData.forEach((_, index) => {
        if (index === 0) return;

        const previousImage = imageRefs.current[index - 1];
        const currentImage = imageRefs.current[index];

        const previousText = textRefs.current[index - 1];
        const currentText = textRefs.current[index];

        const previousNumber = numberRefs.current[index - 1];
        const currentNumber = numberRefs.current[index];


        tl.to({}, { duration: 0.45 });


        tl.addLabel(`transition-${index}`);

        // ANTI-CLOCKWISE ROTATION
        tl.to(
          wheelRef.current,
          {
            rotation: -(index * 28),
            duration: 1.4,
            ease: "power4.inOut",
          },
          "<"
        );

        tl.to(
          lineRef.current,
          {
            rotation: -(index * 28),
            duration: 1.4,
            ease: "power4.inOut",
          },
          "<"
        );

        // PREVIOUS IMAGE EXIT
        tl.to(
          previousImage,
          {
            opacity: 0,
            scale: 0.92,
            rotation: 8,
            filter: "blur(6px)",
            duration: 1.35,
            ease: "power3.inOut",
          },
          "<"
        );

        // NEW IMAGE ENTER
        tl.fromTo(
          currentImage,
          {
            opacity: 0,
            scale: 1.18,
            rotation: -8,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power3.inOut",
          },
          "<+0.15"
        );

        // PREVIOUS TEXT EXIT
        tl.to(
          previousText,
          {
            opacity: 0,
            y: -40,
            filter: "blur(8px)",
            duration: 0.65,
            ease: "expo.inOut",
          },
          "<"
        );

        // NEW TEXT ENTER
        tl.fromTo(
          currentText,
          {
            opacity: 0,
            y: 50,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power4.out",
          },
          "<+0.08"
        );

        // PREVIOUS NUMBER EXIT
        tl.to(
          previousNumber,
          {
            opacity: 0.35,
            y: -24,
            scale: 0.92,
            duration: 0.55,
            ease: "power4.out",
          },
          "<"
        );

        // NEW NUMBER ENTER
        tl.to(
          currentNumber,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power4.out",
          },
          "<+0.04"
        );

        // ACTIVE INDEX UPDATE
        tl.call(() => {
          setActiveIndex(index);
        });

        // HOLD AFTER TRANSITION
        tl.to({}, { duration: 0.35 });
      });


      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 4.2}`,
        snap: {
          snapTo: snapPoints,
          duration: 0.6,
          ease: "power2.inOut",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [snapPoints]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{
        height: "100vh",
      }}
    >
      <div
        ref={stickyRef}
        className="h-screen overflow-hidden"
      >
        <ContainerLayout className="h-full">
          <div className="flex h-full items-center justify-between gap-10">

            {/* LEFT NUMBERS */}
            <div className="w-[90px] shrink-0">
              <div className="flex flex-col gap-5">
                {infographicData.map((item, index) => (
                  <button
                    key={item.id}
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    onClick={() => jumpTo(index)}
                    className="group text-left"
                  >
                    <span
                      className={`
                        block
                        font-mono
                        tracking-[0.15em]
                        leading-none
                        transition-colors
                        duration-300
                        ${activeIndex === index
                          ? "text-[#1A1814]"
                          : "text-[#BFBFBF]"
                        }
                      `}
                    >
                      {item.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="flex flex-1 items-center justify-center">
              <div className="relative h-[380px] w-[380px] md:h-[420px] md:w-[420px]">

                {/* OUTER CIRCLE */}
                <div className="absolute inset-0 rounded-full border border-black/10" />

                {/* ROTATING WHEEL */}
                <div
                  ref={wheelRef}
                  className="absolute inset-0"
                >
                  {/* IMAGE CIRCLE */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">

                    {infographicData.map((item, index) => (
                      <div
                        key={item.id}
                        ref={(el) => {
                          imageRefs.current[index] = el;
                        }}
                        className="absolute inset-0 will-change-transform"
                      >
                        <Image
                          src={item.image}
                          alt={item.stat}
                          fill
                          priority={index === 0}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* ROTATING LINE */}
                  <div
                    ref={lineRef}
                    className="absolute left-1/2 top-1/2 h-[1px] w-[450px] origin-left -translate-y-1/2 bg-black/30"
                  />
                </div>

                {/* CENTER DOT */}
                <div className="absolute left-1/2 top-1/2 z-20 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A1814]" />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-[300px] shrink-0 text-right">
              <div className="relative min-h-[220px]">
                {infographicData.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      textRefs.current[index] = el;
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A9A9A] font-light">
                      View Infographics
                    </p>

                    <h2
                      className="mt-5 font-semibold leading-[0.95] tracking-[-0.04em] text-[#1A1814]"
                      style={{
                        fontSize:
                          item.stat.length > 10
                            ? "clamp(2.4rem,5vw,4rem)"
                            : "clamp(3rem,6vw,5rem)",
                      }}
                    >
                      {item.stat}
                    </h2>

                    <p className="mt-4 max-w-[250px] ml-auto text-[13px] leading-[1.6] text-[#8C8C8C]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </section>
  );
}