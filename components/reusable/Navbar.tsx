"use client";

import Link from "next/link";
import Image from "next/image";
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
          px-6
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
            className="
              h-auto
              w-auto
              object-contain
            "
          />
        </Link>

        {/* LINKS */}
        <nav className="ml-auto mr-10">
          <ul
            className="
              flex
              items-center
              gap-8
            "
          >
            {navLinks.map(
              (link) => (
                <li
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="
                      flex
                      items-center
                      gap-1 
                      text-sm
                      font-body
                      text-white
                      transition
                      hover:opacity-70
                    "
                  >
                    {link.name}

                    {link.hasDropdown && (
                      <span className="text-xs">
                        ▼
                      </span>
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* BUTTON - SEPARATE */}
        <Link href="/contact">
          <PrimaryBtn variant="primary" size="lg">
            Get in Touch
          </PrimaryBtn>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;