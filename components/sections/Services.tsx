
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Palette,
  Puzzle,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building fast, modern and interactive interfaces using React, Next.js and TypeScript.",
    icon: Code2,
    accent: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing secure and scalable server-side applications, APIs and business logic.",
    icon: Server,
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Creating websites and applications that work smoothly across phones, tablets and desktops.",
    icon: Smartphone,
    accent: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "group-hover:border-sky-500/30",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive and user-focused digital experiences with attention to usability.",
    icon: Palette,
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/30",
  },
  {
    number: "05",
    title: "Chrome Extensions",
    description:
      "Building useful browser extensions that improve workflows and solve specific everyday problems.",
    icon: Puzzle,
    accent: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/30",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* =========================================
          AMBIENT BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-72 w-72 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute left-[45%] top-[40%] h-64 w-64 rounded-full bg-orange-500/5 blur-[130px]" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-2xl"
        >
          {/* Small label */}

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            What I Do
          </p>

          {/* Heading */}

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Services that turn
            <span className="text-gray-400 dark:text-gray-500">
              {" "}
              ideas into reality.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400">
            I build practical digital solutions with a focus on
            performance, usability, clean code and modern design.
          </p>
        </motion.div>

        {/* =========================================
            SERVICES GRID
        ========================================= */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.025] ${service.border}`}
              >

                {/* =========================================
                    BACKGROUND NUMBER
                ========================================= */}

                <span className="pointer-events-none absolute right-6 top-3 text-6xl font-bold text-black/[0.035] dark:text-white/[0.035]">
                  {service.number}
                </span>

                {/* =========================================
                    ICON
                ========================================= */}

                <div
                  className={`relative flex h-13 w-13 items-center justify-center rounded-2xl ${service.bg} ${service.accent}`}
                >
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* =========================================
                    SERVICE TITLE
                ========================================= */}

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* =========================================
                    SERVICE DESCRIPTION
                ========================================= */}

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* =========================================
                    ARROW
                ========================================= */}

                <div
                  className={`mt-7 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 ${service.accent} transition-all duration-300 group-hover:translate-x-1 group-hover:border-current dark:border-white/10`}
                >
                  <ArrowUpRight size={17} />
                </div>

                {/* =========================================
                    BOTTOM ACCENT LINE
                ========================================= */}

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                    service.accent.replace("text-", "bg-")
                  }`}
                />

              </motion.article>
            );
          })}

        </div>

        {/* =========================================
            CTA CARD
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02]"
        >

          {/* CTA ambient effect */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            {/* Text */}

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Have a project?
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                Whether you need a website, web application, API or
                custom digital solution, let&apos;s talk about your idea.
              </p>
            </div>

            {/* Button */}

            <a
              href="#contact"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}