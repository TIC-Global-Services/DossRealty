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
    <footer className="w-full bg-white px-4 py-6 md:px-8 md:py-8">
      <ContainerLayout
        disablePaddingX
        disablePaddingY
        className="rounded-[32px] bg-[#121212ff] text-white overflow-hidden"
      >
        {/* DESKTOP  */}
        <div className="hidden lg:block">
          <div className="flex flex-col justify-between px-[20px] py-14">
            <div className="flex px-10 flex-col justify-between">
              {/* Top Section */}
              <div className="flex justify-between gap-10">
                {/* Left */}
                <div className="max-w-[500px]">
                  <h3 className="text-[30px] font-heading leading-none">
                    About{" "}
                    <span className="text-[#B59A52]">
                      Doss Realty
                    </span>
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.6] text-[#B8B8B8]">
                    We Craft Functional Luxury,
                    Focusing On Intentional Design &
                    Bringing It To Life With Ethical
                    Craftsmanship, Using Responsibly
                    Sourced Materials.
                  </p>
                </div>

                {/* Right */}
                <div className="text-right">
                  <h3 className="text-[30px] font-heading font-normal">
                    Menu
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-5 justify-end">
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
              <div className="flex flex-1 items-center justify-center text-center pt-6">
                <div>
                  <p className="text-[42px] font-heading text-white">
                    Build Beyond
                  </p>

                  <h2 className="font-heading leading-[0.9] tracking-[-0.05em] text-white text-[200px]">
                    Ordinary
                  </h2>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-10">
                <p className="text-[16px] text-[#AFAFAF]">
                  Copyright © 2026{" "}
                  <span className="text-[#B59A52]">
                    Doss Realty
                  </span>{" "}
                  All Rights Reserved.
                </p>

                <div className="flex items-center gap-5">
                  <Link href="#">
                    <FaWhatsapp className="text-[22px]" />
                  </Link>

                  <Link href="#">
                    <MdOutlineEmail className="text-[24px]" />
                  </Link>

                  <Link href="#">
                    <FaFacebookF className="text-[18px]" />
                  </Link>

                  <Link href="#">
                    <FaInstagram className="text-[22px]" />
                  </Link>
                </div>

                <p className="text-[16px] text-[#AFAFAF]">
                  Designed & Developed by{" "}
                  <span className="text-[#B59A52]">
                    the internet company
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-5 py-8">
          {/* Menu */}
          <div>
            <h3 className="text-[24px] font-heading text-left">
              Menu
            </h3>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#D0D0D0]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="mt-10">
            <h3 className="text-[26px] font-heading leading-none">
              About{" "}
              <span className="text-[#B59A52]">
                Doss Realty
              </span>
            </h3>

            <p className="mt-4 text-sm leading-[1.7] text-[#B8B8B8]">
              We Craft Functional Luxury,
              Focusing On Intentional Design &
              Bringing It To Life With Ethical
              Craftsmanship, Using Responsibly
              Sourced Materials.
            </p>
          </div>

          {/* Heading */}
          <div className="mt-14 text-center">
            <p className="text-[24px] font-heading">
              Build Beyond
            </p>

            <h2 className="font-heading text-[62px] leading-[0.95] tracking-[-0.05em]">
              Ordinary
            </h2>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex justify-between gap-4">
            <p className="max-w-[140px] text-[13px] leading-[1.6] text-[#AFAFAF]">
              Copyright © 2026{" "}
              <span className="text-[#B59A52]">
                Doss Realty
              </span>{" "}
              All Rights Reserved.
            </p>

            <p className="max-w-[150px] text-right text-[13px] leading-[1.6] text-[#AFAFAF]">
              Designed & Developed by{" "}
              <span className="text-[#B59A52]">
                the internet company
              </span>
            </p>
          </div>

          {/* Social
          <div className="mt-8 flex items-center gap-5">
            <FaWhatsapp className="text-[22px]" />
            <MdOutlineEmail className="text-[24px]" />
            <FaFacebookF className="text-[18px]" />
            <FaInstagram className="text-[22px]" />
          </div> */}
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;