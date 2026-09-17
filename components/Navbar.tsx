"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {

  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { FaWhatsapp,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/70">

        {/* LOGO */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          Kelvin<span className="text-red-500">.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 md:flex">

          {/* GITHUB */}
          <a
            href="https://github.com/gichukikelvin67"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-gray-700 transition hover:bg-black/5 hover:text-red-500 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <FaGithub size={18} />
          </a>

          {/* LINKEDIN */}
          <a
            href="www.linkedin.com/in/kelvin-gichuki-402b0a437"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-gray-700 transition hover:bg-black/5 hover:text-red-500 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/254758475640"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-lg p-2 text-gray-700 transition hover:bg-black/5 hover:text-red-500 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <FaWhatsapp size={18} />
          </a>

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-700 transition hover:bg-black/5 hover:text-red-500 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* LET'S TALK */}
          <Link
            href="#contact"
            className="ml-1 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Let's Talk
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">

          {/* MOBILE THEME */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-700 dark:text-gray-300"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-700 dark:text-gray-300"
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="mx-4 mt-2 rounded-2xl border border-black/10 bg-white/95 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/95 md:hidden">

          <div className="flex flex-col gap-3">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-red-500/10 hover:text-red-500 dark:text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-2 rounded-xl bg-red-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Let's Talk
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}