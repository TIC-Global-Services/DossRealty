import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";
import SmoothScroll from "@/components/provider/SmoothScroll";

import { agrandir, interTight } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Doss Realty",
  description: "Real estate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${agrandir.variable} ${interTight.variable}`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}