"use client";

import Link from "next/link";
import {
  ArrowUp,
  
  
  Mail,
} from "lucide-react";

import { FaWhatsapp,FaGithub,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "Responsive Design",
  "UI/UX Development",
  "Chrome Extensions",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/10">

      {/* Subtle ambient effects */}

      <div className="pointer-events-none absolute right-[10%] top-0 h-64 w-64 rounded-full bg-yellow-300/5 blur-[120px]" />

      <div className="pointer-events-none absolute left-[10%] bottom-0 h-64 w-64 rounded-full bg-neutral-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/*  MAIN FOOTER*/}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <Link
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Kelvin
              <span className="text-yellow-500">.</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
              Full-Stack Software Developer focused on building
              modern, responsive and practical digital solutions
              that solve real-world problems.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <a
                href="https://github.com/gichukikelvin67"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="www.linkedin.com/in/kelvin-gichuki-402b0a437"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://wa.me/254758475640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="gichukikelvin679@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-sm font-semibold">
              Services
            </h3>

            <ul className="mt-5 space-y-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/*  CTA */}

        <div className="mb-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02] md:flex-row md:items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              Let&apos;s build something useful together.
            </h3>

          </div>

          <Link
            href="#contact"
            className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Let&apos;s Talk
          </Link>

        </div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-5 border-t border-black/10 py-7 dark:border-white/10 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} Kelvin Kariuki. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with Next.js & TypeScript
          </p>

          {/* Back to top */}

          <Link
            href="#home"
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-gray-500 transition-all duration-300 hover:border-yellow-500 hover:text-yellow-600 dark:border-white/10 dark:text-gray-400"
          >
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>
    </footer>
  );
}