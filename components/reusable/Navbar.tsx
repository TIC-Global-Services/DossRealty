"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  usePathname,
} from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import PrimaryBtn from "./PrimaryBtn";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
    hasDropdown: true,
    dropdown: {
      projects: [
        {
          title: "Lorem",
          location: "Anna Nagar",
        },
        {
          title: "Lorem",
          location: "xxxxx",
        },
        {
          title: "Lorem",
          location: "xxxxx",
        },
        {
          title: "Lorem",
          location: "xxxxx",
        },
        {
          title: "Lorem",
          location: "xxxxx",
        },
        {
          title: "Lorem",
          location: "xxxxx",
        },
      ],
      status: [
        "Active",
        "Delivered",
      ],
    },
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "NRI",
    href: "/nri",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const pathname =
    usePathname();

  const isBlogsPage =
    pathname === "/blogs";

  return (
    <header
      className={`
        absolute
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          isBlogsPage
            ? "bg-transparent border-transparent"
            : "border-b border-white/10 bg-black/15 backdrop-blur-[10px]"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-[80px]
          items-center
          justify-between
          px-5
          lg:px-12
        "
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src={
              isBlogsPage
                ? "/blackLogo.png"
                : "/doss_logo.png"
            }
            alt="Doss Realty Logo"
            width={160}
            height={50}
            priority
            className="
              h-auto
              w-auto
              object-contain
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="ml-auto hidden items-center lg:flex">
          <nav className="mr-10">
            <ul className="flex items-center gap-[40px]">
              {navLinks.map(
                (link) => (
                  <li
                    key={link.name}
                    className="
                      group
                      relative
                    "
                  >
                    <Link
                      href={link.href}
                      className={`
                        flex
                        items-center
                        gap-0.5
                        text-sm
                        font-body
                        tracking-wide
                        transition
                        duration-300
                        hover:opacity-70
                        ${
                          isBlogsPage
                            ? "text-black font-semibold"
                            : "text-white"
                        }
                      `}
                    >
                      {link.name}

                      {link.hasDropdown && (
                        <ChevronDown
                          size={16}
                          strokeWidth={
                            1.8
                          }
                          className="
                            transition-transform
                            duration-300
                            ease-out
                            group-hover:rotate-180
                          "
                        />
                      )}
                    </Link>

                    {/* PROJECTS DROPDOWN */}
                    {link.hasDropdown &&
                      link.dropdown && (
                        <div
                          className="
                            invisible
                            absolute
                            left-1/2
                            top-[48px]
                            z-[100]
                            w-[480px]
                            -translate-x-1/2
                            rounded-[18px]
                            border
                            border-white/20
                            bg-[rgba(255,255,255,0.10)]
                            opacity-0
                            backdrop-blur-[100%]
                            shadow-[
                              inset_0_1px_1px_rgba(255,255,255,0.25),
                              0_10px_40px_rgba(0,0,0,0.08)
                            ]
                            transition-all
                            duration-300
                            ease-out
                            group-hover:visible
                            group-hover:opacity-100
                          "
                        >
                          <div className="grid grid-cols-[68%_32%] gap-8 p-8">
                            {/* LEFT */}
                            <div>
                              <h3
                                className="
                                  text-[16px]
                                  uppercase
                                  tracking-[1px]
                                  underline
                                  text-black
                                "
                              >
                                All Projects
                              </h3>

                              <div
                                className="
                                  mt-8
                                  grid
                                  grid-cols-2
                                  gap-x-8
                                  gap-y-8
                                "
                              >
                                {link.dropdown.projects.map(
                                  (
                                    project,
                                    index
                                  ) => (
                                    <Link
                                      key={index}
                                      href="/projects"
                                      className="
                                        transition
                                        duration-300
                                        hover:opacity-70
                                      "
                                    >
                                      <p className="text-[18px] font-medium text-black">
                                        {
                                          project.title
                                        }
                                      </p>

                                      <p className="mt-1 text-[14px] text-black/40">
                                        {
                                          project.location
                                        }
                                      </p>
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>

                            {/* RIGHT */}
                            <div>
                              <h3
                                className="
                                  text-[16px]
                                  uppercase
                                  tracking-[1px]
                                  underline
                                  text-black
                                "
                              >
                                Project Status
                              </h3>

                              <div className="mt-8 space-y-5">
                                {link.dropdown.status.map(
                                  (
                                    item,
                                    index
                                  ) => (
                                    <button
                                      key={index}
                                      className="
                                        block
                                        text-left
                                        text-[18px]
                                        text-black
                                        transition
                                        duration-300
                                        hover:opacity-70
                                      "
                                    >
                                      {item}
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* BUTTON */}
          <Link href="/contact">
            <button
              className={`font-small text-[16px]
                rounded-full
                border
                bg-transparent
                px-8
                py-3
                text-sm
                transition-all
                duration-300
                hover:scale-105
                cursor-pointer
                ${
                  isBlogsPage
                    ? "border-black text-black hover:bg-black/10 font-[500]"
                    : "border-white text-white hover:bg-white/20"
                }
              `}
            >
              Get in Touch
            </button>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className={`
            z-[60]
            lg:hidden
            ${
              isBlogsPage
                ? "text-black"
                : "text-white"
            }
          `}
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          left-0
          top-[80px]
          w-full
          overflow-hidden
          ${
            isBlogsPage
              ? "bg-white/90"
              : "bg-black/20"
          }
          backdrop-blur-xl
          transition-all
          duration-500
          ease-in-out
          lg:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map(
              (link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      border-b
                      pb-4
                      text-lg
                      ${
                        isBlogsPage
                          ? "border-black/10 text-black"
                          : "border-white/10 text-white"
                      }
                    `}
                  >
                    {link.name}

                    {link.hasDropdown && (
                      <ChevronDown
                        size={18}
                      />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <PrimaryBtn className="w-full">
                Get in Touch
              </PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;