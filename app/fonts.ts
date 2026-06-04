import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";

/* AGRANDIR */

export const agrandirRegular = localFont({
  src: "./fonts/Agrandir-Regular.otf",
  variable: "--font-agrandir-regular",
  display: "swap",
});

export const agrandirWideLight = localFont({
  src: "./fonts/Agrandir-WideLight.otf",
  variable: "--font-agrandir-wide-light",
  display: "swap",
});

export const agrandirGrandHeavy = localFont({
  src: "./fonts/Agrandir-GrandHeavy.otf",
  variable: "--font-agrandir-grand-heavy",
  display: "swap",
});

export const agrandirGrandLight = localFont({
  src: "./fonts/Agrandir-GrandLight.otf",
  variable: "--font-agrandir-grand-light",
  display: "swap",
});

export const agrandirNarrow = localFont({
  src: "./fonts/Agrandir-Narrow.otf",
  variable: "--font-agrandir-narrow",
  display: "swap",
});

export const agrandirTextBold = localFont({
  src: "./fonts/Agrandir-TextBold.otf",
  variable: "--font-agrandir-text-bold",
  display: "swap",
});

export const agrandirThinItalic = localFont({
  src: "./fonts/Agrandir-ThinItalic.otf",
  variable: "--font-agrandir-thin-italic",
  display: "swap",
});

export const agrandirTight = localFont({
  src: "./fonts/Agrandir-Tight.otf",
  variable: "--font-agrandir-tight",
  display: "swap",
});

export const agrandirWideBlack = localFont({
  src: "./fonts/Agrandir-WideBlackItalic.otf",
  variable: "--font-agrandir-wide-black",
  display: "swap",
});

/* INTER */

export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});