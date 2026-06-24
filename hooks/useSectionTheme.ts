"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("light");
  const previousTheme = useRef<Theme>("light");
  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    let sections: HTMLElement[] = [];

    const getViewportHeight = () =>
      window.visualViewport?.height || window.innerHeight;

    const updateSections = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[data-theme]")
      );
    };

    const getTriggerY = () => {
      const vh = getViewportHeight();
      return position === "top" ? vh * 0.1 : vh * 0.9;
    };

    const detectTheme = () => {
      if (!sections.length) {
        updateSections();
        if (!sections.length) return;
      }

      const triggerY = getTriggerY();

      let foundTheme: Theme | null = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerY && rect.bottom > triggerY) {
          const t = section.dataset.theme as Theme;
          if (t) foundTheme = t;
        }
      }

      if (foundTheme && foundTheme !== previousTheme.current) {
        previousTheme.current = foundTheme;
        setTheme(foundTheme);
      } else if (!foundTheme && previousTheme.current !== "light") {
          previousTheme.current = "light";
          setTheme("light");
        }
    };

    const rafDetect = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          detectTheme();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSections();
        detectTheme();
      }, 150);
    };

    const setupObserver = () => {
      updateSections();
      detectTheme();

      const observer = new MutationObserver(() => {
        updateSections();
        detectTheme();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      return observer;
    };

    const observer = setupObserver();

    window.addEventListener("scroll", rafDetect, { passive: true });
    window.addEventListener("touchmove", rafDetect, { passive: true });
    window.addEventListener("resize", handleResize);

    if ("visualViewport" in window) {
      window.visualViewport?.addEventListener("resize", handleResize);
      window.visualViewport?.addEventListener("scroll", rafDetect);
    }

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", rafDetect);
      window.removeEventListener("touchmove", rafDetect);
      window.removeEventListener("resize", handleResize);

      if ("visualViewport" in window) {
        window.visualViewport?.removeEventListener("resize", handleResize);
        window.visualViewport?.removeEventListener("scroll", rafDetect);
      }

      observer.disconnect();
    };
  }, [pathname, position]);

  return theme;
};