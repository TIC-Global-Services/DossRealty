import type { Metadata, Viewport } from "next";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";
import SmoothScroll from "@/components/provider/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import { LenisProvider } from "@/lib/lenis-context";
import { ToastContainer } from "react-toastify";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { BRAND, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/config";

import { poppins } from "@/app/fonts";
import { itcBlair } from "@/font";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Real Estate Developer in Chennai`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Doss Realty",
    "Doss Developers",
    "real estate Chennai",
    "plotted development Chennai",
    "RERA approved plots Chennai",
    "Metropettai Poonamallee",
    "Promise Park Kanchipuram",
    "NRI real estate investment Tamil Nadu",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Real Estate Developer in Chennai`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Real Estate Developer in Chennai`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "real estate",
};

export const viewport: Viewport = {
  themeColor: BRAND.bg,
  colorScheme: "light",
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
          ${itcBlair.variable}
          ${poppins.variable}
        `}
      >
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <LenisProvider>
          <ScrollToTop />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} style={{ zIndex: 10100 }} />
        </LenisProvider>
      </body>
    </html>
  );
}