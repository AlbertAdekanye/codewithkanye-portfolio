'use client';
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-8 py-6 shadow-md backdrop-blur-md bg-black/30 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="CodeWithKanye Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          CodeWith<span className="text-purple-400">Kanye</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <a href="#about" className="hover:text-purple-400 transition duration-300">About</a>
        <a href="#projects" className="hover:text-purple-400 transition duration-300">Projects</a>
        <a href="#skills" className="hover:text-purple-400 transition duration-300">Skills</a>
        <a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a>
      </nav>

      {/* Right-Side Controls */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          <button aria-label="Open mobile menu" className="text-white hover:text-purple-400">☰</button>
        </div>
      </div>
    </header>
  );
}
