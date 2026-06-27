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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] =
    useState(false);

  const pathname =
    usePathname();

  const isBlogsPage =
    pathname === "/blogs" ||
    pathname.startsWith("/blogs/");

  return (
    <header
      className={`
        absolute
        left-0
        top-0
        z-[10000]
        w-full
        transition-all
        duration-300
        ${isBlogsPage
          ? "bg-transparent border-transparent"
          : "lg:border-b lg:border-white/10 lg:bg-black/15 lg:backdrop-blur-[10px]"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-[70px]
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
                    className="group relative"
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
                        ${isBlogsPage
                          ? "text-black font-semibold"
                          : "text-white"
                        }
                      `}
                    >
                      {link.name}

                      {link.hasDropdown && (
                        <ChevronDown
                          size={16}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 ease-out group-hover:rotate-180"
                        />
                      )}
                    </Link>

                    {/* DROPDOWN */}
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
                            rounded-[10px]
                            border
                            border-[#EAEAEA]
                            bg-white
                            opacity-0
                            shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                            transition-all
                            duration-300
                            ease-out
                            group-hover:visible
                            group-hover:opacity-100
                          "
                        >
                          <div className="grid grid-cols-[50%_50%] gap-12 p-8">
                            <div>
                              <h3 className="text-[14px] font-small md:text-[16px] leading-[21px] uppercase tracking-[1px] underline text-black">
                                All Projects
                              </h3>

                              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8">
                                {link.dropdown.projects.map(
                                  (
                                    project,
                                    index
                                  ) => (
                                    <Link
                                      key={index}
                                      href="/projects"
                                      className="transition duration-300 hover:opacity-70"
                                    >
                                      <p className="font-small text-[13px] md:text-[18px] leading-[20px] font-medium text-black">
                                        {
                                          project.title
                                        }
                                      </p>

                                      <p className="mt-1 text-[14px] leading-[20px] text-black/40">
                                        {
                                          project.location
                                        }
                                      </p>
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-[14px] font-small md:text-[16px] leading-[21px] uppercase tracking-[1px] underline text-black">
                                Project Status
                              </h3>

                              <div className="mt-8 space-y-2">
                                {link.dropdown.status.map(
                                  (item, index) => (
                                    <Link
                                      key={index}
                                      href={`/projects?tab=${item.toLowerCase()}`}
                                      className="block text-left font-small text-[13px] md:text-[18px] leading-[20px] font-medium text-black transition duration-300 hover:opacity-70"
                                    >
                                      {item}
                                    </Link>
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
              className={`
                font-small
                text-[16px]
                rounded-full
                border
                bg-transparent
                px-6
                py-2.5
                text-sm
                transition-all
                duration-300
                hover:scale-105
                cursor-pointer
                ${isBlogsPage
                  ? "border-black text-black hover:bg-black/10 font-[500]"
                  : "border-white text-white hover:bg-white/20"
                }
              `}
            >
              Get in Touch
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className={`
            z-[9999]
            lg:hidden
            ${isBlogsPage
              ? "text-black"
              : "text-white"
            }
          `}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
            <div
              className={`
                fixed
                inset-0
                z-[9999]
                bg-white
                transition-transform
                duration-500
                ease-in-out
                lg:hidden
                ${isOpen ? "translate-x-0" : "translate-x-full"}
              `}
            >
              {/* TOP BAR */}
              <div
                className="
                  sticky
                  top-0
                  z-10
                  flex
                  h-[72px]
                  items-center
                  justify-between
                  border-b
                  border-black/10
                  bg-white
                  px-5
                "
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/blackLogo.png"
                    alt="Doss Realty Logo"
                    width={160}
                    height={50}
                    priority
                  />
                </Link>
              
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black"
                >
                  <X size={30} />
                </button>
              </div>
              
              {/* SCROLLABLE CONTENT */}
              <div
                className="
                  flex
                  h-[calc(100dvh-72px)]
                  flex-col
                  overflow-y-auto
                  px-6
                  pt-4
                  pb-[max(20px,env(safe-area-inset-bottom))]
                "
              >
                {/* MENU */}
                <ul className="flex flex-1 flex-col">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-black/10"
                    >
                      {link.hasDropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === link.name
                                  ? null
                                  : link.name
                              )
                            }
                            className="
                              flex
                              w-full
                              items-center
                              justify-between
                              py-5
                              text-left
                              text-[20px]
                              font-medium
                              text-black
                            "
                          >
                            <span>{link.name}</span>
                          
                            <ChevronDown
                              size={20}
                              className={`
                                transition-transform
                                duration-300
                                ${
                                  openDropdown === link.name
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </button>
                              
                          <div
                            className={`
                              overflow-hidden
                              transition-all
                              duration-300
                              ${
                                openDropdown === link.name
                                  ? "max-h-40 pb-4"
                                  : "max-h-0"
                              }
                            `}
                          >
                            <div className="ml-5 flex flex-col gap-3">
                              <Link
                                href="/projects?tab=active"
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="
                                  text-[16px]
                                  text-black/70
                                  transition
                                  hover:text-black
                                "
                              >
                                Active
                              </Link>
                              
                              <Link
                                href="/projects?tab=delivered"
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="
                                  text-[16px]
                                  text-black/70
                                  transition
                                  hover:text-black
                                "
                              >
                                Delivered
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="
                            flex
                            items-center
                            justify-between
                            py-5
                            text-[20px]
                            font-medium
                            text-black
                          "
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
            
                  {/* MOBILE ONLY BLOGS */}
                  <li className="border-b border-black/10">
                    <Link
                      href="/blogs"
                      onClick={() => setIsOpen(false)}
                      className="
                        flex
                        items-center
                        justify-between
                        py-5
                        text-[20px]
                        font-medium
                        text-black
                      "
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
                
                {/* BUTTON */}
                <div className="mt-auto pt-10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    <PrimaryBtn
                      mode="light"
                      className="
                        mx-auto
                        flex
                        w-full
                        max-w-[200px]
                        justify-center
                        bg-black
                        px-6
                        py-3
                        font-small
                        text-[16px]
                        text-white
                      "
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