import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";

export const agrandir = localFont({
  src: [
    {
      path: "./Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Agrandir-TextBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Agrandir-GrandHeavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Agrandir-GrandLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Agrandir-Narrow.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Agrandir-Tight.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Agrandir-WideLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Agrandir-WideBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Agrandir-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-agrandir",
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});