import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";

export const agrandir = localFont({
  src: "./Agrandir-WideLight.otf",
  variable: "--font-agrandir",
  display: "swap",
});

export const interTight =
  Inter_Tight({
    subsets: ["latin"],
    variable:
      "--font-inter-tight",
    display: "swap",
  });