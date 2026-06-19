"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../../lib/lenis-context";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  const lenisRef = useLenis();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.06,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lenisRef]);

  return <>{children}</>;
}