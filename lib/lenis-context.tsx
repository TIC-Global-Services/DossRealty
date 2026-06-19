"use client";

import { createContext, useContext, useRef, RefObject } from "react";
import type Lenis from "lenis";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return ctx;
}