"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  usePathname,
} from "next/navigation";
import {
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";

import PrimaryBtn from "./PrimaryBtn";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    hasDropdown: true,
    dropdown: {
      links: [
        {
          name: "Blog",
          href: "/blogs",
        },
        {
          name: "NRI",
          href: "/nri",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ],
    },
  },
  {
    name: "Projects",
    href: "/projects",
    hasDropdown: true,
    dropdown: {
      links: [
        {
          name: "Active",
          href: "/projects?tab=active",
        },
        {
          name: "Delivered",
          href: "/projects?tab=delivered",
        },
      ],
      projects: [
        {
          title: "Promise Park",
          location: "Kanchipuram",
        },
        {
          title: "Metropettai",
          location: "Poonamallee, Chennai",
        },
      ],
      status: [
        "Active",
        "Delivered",
      ],
    },
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
    pathname === "/blogs" ||
    pathname.startsWith("/blogs/");

  // Refs for the mobile mask-reveal overlay (TIC-style circular clip reveal)
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const revealOriginRef = useRef({ x: 95, y: 5 });

  // Hide the overlay by default (kept mounted so the clip-path reveal works)
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        visibility: "hidden",
        opacity: 0,
      });
    }
    // Cleanup: release scroll lock if the component unmounts mid-open
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const openMobileMenu = useCallback(() => {
    setIsOpen(true);
    // Lock both html and body so the page behind can't scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    if (!overlayRef.current) return;

    // Anchor the reveal to the hamburger button's actual position
    const btn = menuBtnRef.current;
    if (btn) {
      const r = btn.getBoundingClientRect();
      revealOriginRef.current = {
        x: ((r.left + r.width / 2) / window.innerWidth) * 100,
        y: ((r.top + r.height / 2) / window.innerHeight) * 100,
      };
    }

    const { x, y } = revealOriginRef.current;

    gsap.set(overlayRef.current, {
      clipPath: `circle(0% at ${x}% ${y}%)`,
      visibility: "visible",
      opacity: 1,
    });

    gsap.to(overlayRef.current, {
      clipPath: `circle(150% at ${x}% ${y}%)`,
      duration: 0.6,
      ease: "power3.inOut",
    });

    // Cascade the centered items in
    if (menuListRef.current?.children) {
      gsap.fromTo(
        menuListRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, delay: 0.15, ease: "power2.out" }
      );
    }
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.35, delay: 0.4, ease: "power2.out" }
      );
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    const { x, y } = revealOriginRef.current;

    // Fade the content out while the circle collapses back to the button
    if (menuListRef.current?.children) {
      gsap.to(menuListRef.current.children, {
        opacity: 0,
        y: 16,
        duration: 0.25,
        stagger: 0.04,
        ease: "power2.in",
      });
    }
    if (ctaRef.current) {
      gsap.to(ctaRef.current, { opacity: 0, y: 16, duration: 0.25, ease: "power2.in" });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        clipPath: `circle(0% at ${x}% ${y}%)`,
        duration: 0.4,
        delay: 0.1,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: "hidden", opacity: 0 });
          setIsOpen(false);
        },
      });
    } else {
      setIsOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [isOpen, closeMobileMenu, openMobileMenu]);

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
      `}
    >
      <div
        className={`
          mx-auto
          flex
          h-[70px]
          items-center
          justify-between
          px-5
          transition-all
          duration-300
          lg:px-12
          ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}
        `}
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
            width={100}
            height={40}
            priority
            className="
              h-auto
              w-auto
              object-cover
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
                          ? "text-black"
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

                    {/* DROPDOWN (simple links) */}
                    {link.hasDropdown &&
                      link.dropdown.links && (
                        <div
                          className="
                            invisible
                            absolute
                            left-1/2
                            top-[48px]
                            z-[100]
                            w-[150px]
                            -translate-x-1/2
                            rounded-[10px]
                            border
                            border-white/10
                            bg-white/10
                            px-3
                            py-4
                            backdrop-blur-sm
                            opacity-0
                            transition-all
                            duration-300
                            ease-out
                            group-hover:visible
                            group-hover:opacity-100
                          "
                        >
                          <div className="space-y-3">
                            {link.dropdown.links.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="
                                  block
                                  text-center
                                  font-small
                                  text-[13px]
                                  md:text-[18px]
                                  leading-tight
                                  font-medium
                                  text-white/80
                                  transition
                                  duration-300
                                  hover:opacity-70
                                "
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* DROPDOWN (projects grid) */}
                    {link.hasDropdown &&
                      link.dropdown.projects && (
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
                              border-white/10
                              bg-white/10
                              backdrop-blur-sm
                              opacity-0
                              transition-all
                              duration-300
                              ease-out
                              group-hover:visible
                              group-hover:opacity-100
                            "
                        >
                          <div className="grid grid-cols-[50%_50%] gap-12 p-8">
                            <div>
                              <h3 className="text-[14px] font-small md:text-[16px] leading-[21px] uppercase tracking-[1px] underline text-white">
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
                                      <p className="font-small text-[13px] md:text-[18px] leading-[20px] font-medium text-white">
                                        {
                                          project.title
                                        }
                                      </p>

                                      <p className="mt-1 text-[14px] leading-[20px] text-gray-300">
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
                              <h3 className="text-[14px] font-small md:text-[16px] leading-[21px] uppercase tracking-[1px] underline text-white">
                                Project Status
                              </h3>

                              <div className="mt-8 space-y-2">
                                {link.dropdown.status.map(
                                  (item, index) => (
                                    <Link
                                      key={index}
                                      href={`/projects?tab=${item.toLowerCase()}`}
                                      className="block text-left font-small text-[13px] md:text-[18px] leading-[20px] font-medium text-white transition duration-300 hover:opacity-70"
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
          ref={menuBtnRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className={`
            z-[9999]
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            transition-colors
            cursor-pointer
            lg:hidden
          `}
        >
          <div className="relative flex h-[12px] w-5 flex-col items-center justify-between">
            <div
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                transition-all
                duration-300
                ease-in-out
                ${isBlogsPage ? "bg-black" : "bg-white"}
                ${isOpen ? "top-[5px]" : "top-0"}
              `}
            />
            <div
              className={`
                absolute
                left-0
                top-[5px]
                h-[1.5px]
                w-5
                transition-all
                duration-300
                ease-in-out
                ${isBlogsPage ? "bg-black" : "bg-white"}
              `}
            />
            <div
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                transition-all
                duration-300
                ease-in-out
                ${isBlogsPage ? "bg-black" : "bg-white"}
                ${isOpen ? "top-[5px]" : "top-[10px]"}
              `}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={overlayRef}
        aria-hidden={!isOpen}
        className="
          fixed
          inset-0
          z-[9999]
          overflow-y-auto
          bg-black/40
          backdrop-blur-xl
          lg:hidden
        "
        style={{
          clipPath: "circle(0% at 95% 5%)",
          visibility: "hidden",
          opacity: 0,
        }}
      >
        {/* TOP BAR — Doss logo (left) + close button (top right) */}
        <div className="sticky top-0 z-10 flex h-[70px] items-center justify-between bg-gradient-to-b from-black/50 to-transparent px-5 lg:px-12">
          <Link
            href="/"
            onClick={closeMobileMenu}
          >
            <Image
              src="/doss_logo.png"
              alt="Doss Realty Logo"
              width={100}
              height={40}
              priority
              className="h-auto w-auto object-cover"
            />
          </Link>

          <button
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              transition-colors
              cursor-pointer
            "
          >
            {/* collapsed-line state of the hamburger — tap to close */}
            <div className="relative flex h-[12px] w-5 flex-col items-center justify-between">
              <div className="absolute left-0 top-[5px] h-[1.5px] w-5 bg-white" />
              <div className="absolute left-0 top-[5px] h-[1.5px] w-5 bg-white" />
              <div className="absolute left-0 top-[5px] h-[1.5px] w-5 bg-white" />
            </div>
          </button>
        </div>

        {/* CENTERED MENU */}
        <div className="flex min-h-[calc(100dvh-70px)] flex-col items-center justify-center px-6 py-10">
          <ul
            ref={menuListRef}
            className="flex w-full max-w-sm flex-col items-center text-center"
          >
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                {/* MAIN ITEM — always navigates to its page (no dropdown on mobile) */}
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                            flex
                            w-full
                            items-center
                            justify-center
                            py-3
                            font-small
                            text-[24px]
                            font-medium
                            text-white
                          "
                >
                  <span aria-hidden="true" className="w-5 shrink-0" />
                  {link.name}
                  <span aria-hidden="true" className="w-5 shrink-0" />
                </Link>

                {/* FLAT SUB-ITEMS — dropdown children shown directly under the parent */}
                {link.hasDropdown && link.dropdown.links && (
                  <>
                    <div className="mx-auto my-1 h-px w-10 bg-white/25" />
                    <div className="flex flex-col items-center gap-2.5 py-2 pb-4">
                      {link.dropdown.links.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="
                            font-small
                            text-[17px]
                            text-white/70
                            transition
                            hover:text-white
                          "
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div ref={ctaRef} className="mt-12">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
            >
              <PrimaryBtn
                mode="dark"
                className="mx-auto h-[52px] w-[150px] text-base"
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