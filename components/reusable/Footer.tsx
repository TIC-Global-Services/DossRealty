"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "NRI", href: "/nri" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <section data-theme="dark">
    <footer className="w-full bg-white px-4 py-6 md:px-8 md:py-8">
      <div className="overflow-hidden rounded-[32px] bg-[#121212] text-white">

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="flex flex-col justify-between px-[20px] py-14">
            <div className="flex flex-col justify-between px-10">

              {/* Top Section */}
              <div className="flex justify-between gap-10">

                {/* Left */}
                <div className="max-w-[500px]">
                  <h3 className="font-heading text-[30px] leading-none">
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
                  <div className="mt-4 flex flex-wrap justify-end gap-5">

                    {footerLinks.map((link) => {
                      const isActive =
                        pathname === link.href;

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`
                            text-sm
                            transition
                            duration-300
                            hover:text-[#B59A52]
                            ${
                              isActive
                                ? "text-[#B59A52]"
                                : "text-[#D0D0D0]"
                            }
                          `}
                        >
                          {link.name}
                        </Link>
                      );
                    })}

                  </div>
                </div>
              </div>

              {/* Center */}
              <div className="flex flex-1 items-center justify-center pt-6 text-center">
                <div>
                  <p className="font-heading text-[42px] text-white">
                    Build Beyond
                  </p>

                  <h2
                    className="
                      font-heading
                      text-[200px]
                      leading-[0.9]
                      tracking-[-0.05em]
                      text-white
                    "
                  >
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

                {/* Social */}
                <div className="flex items-center gap-5">

                  <Link href="#">
                    <FaWhatsapp
                      className="
                        text-[22px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <MdOutlineEmail
                      className="
                        text-[24px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <FaFacebookF
                      className="
                        text-[18px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <FaInstagram
                      className="
                        text-[22px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
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

        {/* MOBILE */}
        <div className="px-5 py-8 lg:hidden">

          {/* Menu */}
          <div>
            <div className="mt-5 flex flex-wrap gap-x-10 gap-y-3">

              {footerLinks.map((link) => {
                const isActive =
                  pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      text-sm
                      transition
                      duration-300
                      hover:text-[#B59A52]
                      ${
                        isActive
                          ? "text-[#B59A52]"
                          : "text-[#D0D0D0]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

            </div>
          </div>

          {/* About */}
          <div className="mt-10">
            <h3 className="font-heading text-[16px] md:text-[26px] leading-none">
              About{" "}
              <span className="text-[#B59A52]">
                Doss Realty
              </span>
            </h3>

            <p className="mt-4 text-[13px] leading-[16px] md:text-sm md:leading-[1.7] text-[#B8B8B8]">
              We Craft Functional Luxury,
              Focusing On Intentional Design &
              Bringing It To Life With Ethical
              Craftsmanship, Using Responsibly
              Sourced Materials.
            </p>
          </div>

          {/* Heading */}
          <div className="mt-14 text-center">
            <p className="font-small text-[16px] leading-[50px] md:text-[24px]">
              Build Beyond
            </p>

            <h2
              className="
                font-small text-[48px] leading-[50px] tracking-[-1.44px]
                md:text-[62px]
                md:leading-[0.95]
                md:tracking-[-0.05em]
              "
            >
              Ordinary
            </h2>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex justify-between gap-4">

            <p className="max-w-[140px] text-[13px] leading-[24px] tracking-[-0.48px] text-[#AFAFAF]">
              Copyright © 2026{" "} <br/>
              <span className="text-[#B59A52]">
                Doss Realty 
              </span>{" "} 
              All <br/>Rights Reserved.
            </p>

            <p className="max-w-[150px] capitalize text-left text-[13px] leading-[24px] tracking-[-0.48px] text-[#AFAFAF]">
              Designed & <br/> Developed by {" "}
              <span className="text-[#B59A52]">
                the <br/> internet company
              </span>
            </p>
          </div>

          {/* Social */}
          <div className="mt-8 hidden md:block items-center gap-5">

            <Link href="#">
              <FaWhatsapp
                className="
                  text-[22px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <MdOutlineEmail
                className="
                  text-[24px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <FaFacebookF
                className="
                  text-[18px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <FaInstagram
                className="
                  text-[22px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;