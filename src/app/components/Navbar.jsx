'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Scroll logic to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(prevScroll > current || current < 10);
      setPrevScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-full"} 
      shadow-md backdrop-blur-md bg-black/30`}>
      <div className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-pulse">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">
            CodeWith<span className="text-purple-400">Kanye</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!isMobileOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-black/80 px-8 pb-6 space-y-4 text-lg text-white">
          <a onClick={() => setMobileOpen(false)} href="#about" className="block hover:text-purple-400">About</a>
          <a onClick={() => setMobileOpen(false)} href="#projects" className="block hover:text-purple-400">Projects</a>
          <a onClick={() => setMobileOpen(false)} href="#skills" className="block hover:text-purple-400">Skills</a>
          <a onClick={() => setMobileOpen(false)} href="#contact" className="block hover:text-purple-400">Contact</a>
        </div>
      )}
    </header>
  );
}
