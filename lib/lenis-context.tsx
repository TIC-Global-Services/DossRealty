"use client";

import { createContext, useContext, useRef, RefObject } from "react";

type ScrollController = {
  stop: () => void;
  start: () => void;
} | null;

const LenisContext = createContext<RefObject<ScrollController> | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ScrollController>(null);

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