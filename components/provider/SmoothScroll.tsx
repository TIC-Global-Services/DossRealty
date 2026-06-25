"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

const DESKTOP_QUERY = "(min-width: 768px)";
const SMOOTH_CLASS = "smooth-scroll";

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const mq = window.matchMedia(DESKTOP_QUERY);

    const applyScrollBehavior = (isDesktop: boolean) => {
      root.classList.toggle(SMOOTH_CLASS, isDesktop);
    };

    applyScrollBehavior(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      applyScrollBehavior(e.matches);
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
      root.classList.remove(SMOOTH_CLASS);
    };
  }, []);

  return <>{children}</>;
}