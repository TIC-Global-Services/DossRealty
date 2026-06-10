"use client";

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "outline" | "ghost";
type Mode = "dark" | "light";

type PrimaryBtnProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    loading?: boolean;
    animated?: boolean;
    variant?: Variant;
    mode?: Mode;
  };

export default function PrimaryBtn({
  text,
  children,
  loading = false,
  variant = "primary",
  mode = "dark",
  className,
  ...props
}: PrimaryBtnProps) {
  const baseStyles = `
    relative group
    w-[180px]
    h-[44px]
    rounded-[100px]
    flex items-center justify-center
    overflow-hidden isolate
    font-medium text-[16px]
    tracking-wide
    cursor-pointer
    transition-all duration-300 ease-out
    active:scale-[0.97]
    backdrop-blur-[20px]
  `;

  const darkVariants: Record<Variant, string> = {
    primary: `
      bg-[rgba(255,255,255,0.1)]
      text-white
      border border-white/20
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.25)]
      hover:bg-[rgba(255,255,255,0.16)]
      hover:border-white/30
    `,
    outline: `
      bg-transparent
      text-white
      border border-white/30
      hover:bg-white/10
    `,
    ghost: `
      bg-transparent
      text-white/80
      hover:text-white
      hover:bg-white/10
    `,
  };

  const lightVariants: Record<Variant, string> = {
    primary: `
      bg-[rgba(255,255,255,0.1)]
      text-black
      border border-white/40
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.12)]
      hover:bg-[rgba(255,255,255,0.2)]
    `,
    outline: `
      bg-transparent
      text-black
      border border-black/20
      hover:bg-black/5
    `,
    ghost: `
      bg-transparent
      text-black/70
      hover:text-black
      hover:bg-black/5
    `,
  };

  const variantStyles =
    mode === "light"
      ? lightVariants[variant]
      : darkVariants[variant];

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variantStyles, className)
      )}
      {...props}
    >
      {/* glass shine */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/20
          to-transparent
          pointer-events-none
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <span className="h-4 w-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        ) : (
          children ?? text
        )}
      </span>
    </button>
  );
}