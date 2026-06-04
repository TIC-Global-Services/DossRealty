"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  },
  {
    name: "Contact",
    href: "/contact",
    hasDropdown: true,
  },
  {
    name: "EN",
    href: "/en",
    hasDropdown: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header
      className="
        absolute
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/15
        backdrop-blur-[10px]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[80px]
          max-w-[1440px]
          items-center
          justify-between
          px-5
          lg:px-12
        "
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/doss_logo.png"
            alt="Doss Realty Logo"
            width={160}
            height={50}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="ml-auto hidden items-center lg:flex">
          <nav className="mr-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      font-body
                      text-white
                      transition
                      duration-300
                      hover:opacity-70
                    "
                  >
                    {link.name}

                    {link.hasDropdown && (
                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          ease-out
                          group-hover:rotate-180
                        "
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contact">
            <button
              className="font-regular
            rounded-full
            border border-white
            bg-transparent
            px-8 lg:px-6
            py-3 lg:py-2
            text-sm lg:text-base
            text-white
            transition-all duration-300
            hover:bg-white/20
            hover:scale-105 cursor-pointer
          "
            >
              Get in Touch
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            z-[60]
            text-white
            lg:hidden
          "
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
          bg-transparent
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
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-4
                    text-lg
                    font-body
                    text-white
                  "
                >
                  {link.name}

                  {link.hasDropdown && (
                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <PrimaryBtn
                variant="primary"
                size="lg"
                className="w-full"
              >
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