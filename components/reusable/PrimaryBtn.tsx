"use client";

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "outline" | "ghost";
type Mode = "dark" | "light";
type Size = "sm" | "md" | "lg" | "xl";

type PrimaryBtnProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    loading?: boolean;
    animated?: boolean;
    variant?: Variant;
    mode?: Mode;
    size?: Size;
  };

export default function PrimaryBtn({
  text,
  children,
  loading = false,
  animated = true,
  variant = "primary",
  mode = "dark",
  size = "md",
  className,
  ...props
}: PrimaryBtnProps) {
  const sizeStyles: Record<Size, string> = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm",
    xl: "px-4 py-8 text-base",
  };

  const baseStyles = `
    relative group
    rounded-full
    flex items-center justify-center
    overflow-hidden isolate
    font-medium tracking-wide
    backdrop-blur-sm
    transition-all duration-300 ease-out
    active:scale-[0.96]
    cursor-pointer
  `;

  const darkVariants: Record<Variant, string> = {
    primary: `
      text-white
      border border-white/20
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.25)]
      hover:bg-white/20
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
      text-black
      border border-white
      shadow-[inset_0_1px_1px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.12)]
      hover:bg-white/60
      hover:border-white/80
    `,
    outline: `
      bg-transparent
      text-black
      border border-black/30
      hover:bg-black/10
    `,
    ghost: `
      bg-transparent
      text-black/70
      hover:text-black
      hover:bg-black/10
    `,
  };

  const variantStyles =
    mode === "light"
      ? lightVariants[variant]
      : darkVariants[variant];

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles,
          className
        )
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        ) : (
          children ?? text
        )}
      </span>
    </button>
  );
}