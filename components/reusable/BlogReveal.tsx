"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  scale?: boolean;
}

export default function BlogReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  scale = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y,
        scale: scale ? 0.95 : 1,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [delay, y, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}