"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* Social icons as inline SVGs — avoids pulling the entire
   react-icons/fa + react-icons/md icon-set bundles into every page. */
type IconProps = { className?: string };

const WhatsAppIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 320 512"
    width="1em"
    height="1em"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const MailIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

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
        <div className="hidden md:block">
          <div className="flex flex-col justify-between px-[18px] lg:px-[20px] py-10 lg:py-14">
            <div className="flex flex-col justify-between lg:px-10">

              {/* Top Section */}
              <div className="flex justify-between gap-10">

                {/* Left */}
                <div className="max-w-[300px] lg:max-w-[500px]">
                  <h3 className="font-heading text-[18px] lg:text-[30px] leading-none">
                    About{" "}
                    <span className="text-[#B59A52]">
                      Doss Realty
                    </span>
                  </h3>

                  <p className="mt-4 text-[12px] lg:text-[14px] leading-[1.6] text-[#B8B8B8]">
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
                  <p className="font-heading text-[30px] lg:text-[42px] text-white">
                    Build Beyond
                  </p>

                  <h2
                    className="
                      font-heading text-[100px]
                      lg:text-[200px]
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

                <p className="text-[14px] lg:text-[16px] text-[#AFAFAF]">
                  Copyright © 2026{" "}
                  <span className="text-[#B59A52]">
                    Doss Realty
                  </span>{" "}
                  All Rights Reserved.
                </p>

                {/* Social */}
                <div className="hidden items-center gap-5 lg:flex">

                  <Link href="#">
                    <WhatsAppIcon
                      className="
                        text-[22px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <MailIcon
                      className="
                        text-[24px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <FacebookIcon
                      className="
                        text-[18px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                  <Link href="#">
                    <InstagramIcon
                      className="
                        text-[22px]
                        transition
                        duration-300
                        hover:text-[#B59A52]
                      "
                    />
                  </Link>

                </div>

                <p className="text-[14px] lg:text-[16px] text-[#AFAFAF]">
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
        <div className="px-5 py-8 md:hidden">

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
              <WhatsAppIcon
                className="
                  text-[22px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <MailIcon
                className="
                  text-[24px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <FacebookIcon
                className="
                  text-[18px]
                  transition
                  duration-300
                  hover:text-[#B59A52]
                "
              />
            </Link>

            <Link href="#">
              <InstagramIcon
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