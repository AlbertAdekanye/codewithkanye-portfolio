"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const previousScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsVisible(
        currentScroll < 80 ||
          currentScroll < previousScroll.current
      );

      previousScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen
      ? "hidden"
      : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileOpen]);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 transition-transform duration-300 ${
        isVisible
          ? "translate-y-0"
          : "-translate-y-28"
      }`}
    >
      <div className="flex h-16 items-center rounded-2xl border border-white/10 bg-zinc-950/80 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-2"
          aria-label="CodeWithKanye homepage"
        >
          <Image
            src="/logo.png"
            alt=""
            width={38}
            height={38}
            className="rounded-lg"
            priority
          />

          <span className="text-base font-bold tracking-tight sm:text-xl">
            CodeWith
            <span className="text-purple-400">
              Kanye
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="ml-auto hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="ml-7 hidden rounded-xl bg-purple-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-purple-600 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() =>
            setIsMobileOpen((current) => !current)
          }
          className="ml-auto grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label={
            isMobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        {navigationLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMobileMenu}
            className="flex items-center gap-4 rounded-xl px-4 py-4 text-lg font-medium text-zinc-200 transition hover:bg-white/5 hover:text-purple-400"
          >
            <span className="font-mono text-xs text-purple-400">
              0{index + 1}
            </span>

            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="mt-2 flex items-center justify-center rounded-xl bg-purple-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-purple-300"
        >
          Let&apos;s work together
        </a>
      </nav>
    </header>
  );
}