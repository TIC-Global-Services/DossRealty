"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import ContainerLayout from "@/layout/ContainerLayout";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "NRI", href: "/nri" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full h-[700px] lg:mt-[10%] bg-white px-4 py-6 md:px-8 md:py-8">
      <ContainerLayout
        disablePaddingX
        disablePaddingY
        className="min-h-[600px] rounded-[36px] bg-[#050505] text-white"
      >
        <div className="flex min-h-[600px] flex-col justify-between px-8 py-10 md:px-14 md:py-12 lg:px-[20px] lg:py-14">
          {/* Main wrapper */}
          <div className="flex min-h-[600px] flex-col justify-between">

            {/* Top Section */}
            <div className="flex flex-col justify-between gap-10 lg:flex-row">

              {/* Left */}
              <div className="max-w-[420px]">
                <h3 className="text-[28px] font-light leading-none md:text-[36px]">
                  About{" "}
                  <span className="text-[#B59A52]">
                    Doss Realty
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-[1.6] text-[#B8B8B8] md:text-[15px]">
                  We Craft Functional Luxury,
                  Focusing On Intentional Design &
                  Bringing It To Life With Ethical
                  Craftsmanship, Using Responsibly
                  Sourced Materials.
                </p>
              </div>

              {/* Right */}
              <div className="lg:text-right">
                <h3 className="text-[28px] font-light md:text-[36px]">
                  Menu
                </h3>

                <div className="mt-4 flex flex-wrap gap-5 lg:justify-end">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm text-[#D0D0D0] transition duration-300 hover:text-[#B59A52]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="flex flex-1 items-center justify-center text-center">
              <div>
                <p className="text-[24px] font-light text-white md:text-[42px]">
                  Build Beyond
                </p>

                <h2 className="font-light leading-[0.9] tracking-[-0.05em] text-white text-[60px] sm:text-[90px] md:text-[130px] lg:text-[180px]">
                  Ordinary
                </h2>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 lg:flex-row">

              {/* Left */}
              <p className="text-center text-sm text-[#AFAFAF] lg:text-left">
                Copyright © 2026{" "}
                <span className="text-[#B59A52]">
                  Doss Realty
                </span>{" "}
                All Rights Reserved.
              </p>

              {/* Social */}
              <div className="flex items-center gap-5">
                <Link
                  href="#"
                  className="transition hover:opacity-70"
                >
                  <FaWhatsapp className="text-[22px]" />
                </Link>

                <Link
                  href="#"
                  className="transition hover:opacity-70"
                >
                  <MdOutlineEmail className="text-[24px]" />
                </Link>

                <Link
                  href="#"
                  className="transition hover:opacity-70"
                >
                  <FaFacebookF className="text-[18px]" />
                </Link>

                <Link
                  href="#"
                  className="transition hover:opacity-70"
                >
                  <FaInstagram className="text-[22px]" />
                </Link>
              </div>

              {/* Right */}
              <p className="text-center text-sm text-[#AFAFAF] lg:text-right">
                Designed & Developed by{" "}
                <span className="text-[#B59A52]">
                  the internet company
                </span>
              </p>
            </div>
          </div>

        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;