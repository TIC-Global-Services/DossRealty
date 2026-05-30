"use client";

import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  absolute?: boolean; //control positioning
};

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  absolute = false,
}) => {
  return (
    <div
      className={`
        ${absolute ? "absolute" : "relative"}
        w-full
        max-w-sm sm:max-w-md md:max-w-lg
        bg-white/10
        backdrop-blur-md
        border border-white/30
        rounded-2xl
        shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]
        p-4 sm:p-5 md:p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;