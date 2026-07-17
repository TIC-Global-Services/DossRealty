import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";
import SmoothScroll from "@/components/provider/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import { LenisProvider } from "@/lib/lenis-context";
import { ToastContainer } from "react-toastify";

import {
  agrandirRegular,
  agrandirWideLight,
  agrandirGrandHeavy,
  agrandirGrandLight,
  agrandirNarrow,
  agrandirTextBold,
  agrandirThinItalic,
  agrandirTight,
  agrandirWideBlack,
  interTight,
} from "@/app/fonts";

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
        className={`
          ${agrandirRegular.variable}
          ${agrandirWideLight.variable}
          ${agrandirGrandHeavy.variable}
          ${agrandirGrandLight.variable}
          ${agrandirNarrow.variable}
          ${agrandirTextBold.variable}
          ${agrandirThinItalic.variable}
          ${agrandirTight.variable}
          ${agrandirWideBlack.variable}
          ${interTight.variable}
        `}
      >
        <LenisProvider>
          <ScrollToTop />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        </LenisProvider>
      </body>
    </html>
  );
}