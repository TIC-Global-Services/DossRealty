import localFont from "next/font/local";

export const itcBlair = localFont({
  src: [
    { path: "./ITC Blair Light.otf", weight: "300", style: "normal" },
    { path: "./ITC Blair Medium.otf", weight: "500", style: "normal" },
    { path: "./ITC Blair Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-itc-blair",
  display: "swap",
});
