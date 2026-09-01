"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Code2,
  Database,
  Server,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import ProfileImage from "../ProfileImage";

const floatingIcons = [
  {
    name: "React",
    icon: <FaReact />,
    position: "top-[8%] left-[8%]",
    color: "text-cyan-400",
    delay: 0,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    position: "top-[18%] right-[5%]",
    color: "text-green-500",
    delay: 0.5,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    position: "bottom-[18%] left-[4%]",
    color: "text-green-400",
    delay: 1,
  },
  {
    name: "Express",
    icon: <SiExpress />,
    position: "bottom-[8%] right-[10%]",
    color: "text-gray-500 dark:text-gray-300",
    delay: 1.5,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    position: "top-[48%] left-[-2%]",
    color: "text-blue-500",
    delay: 2,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    position: "top-[50%] right-[-2%]",
    color: "text-gray-800 dark:text-white",
    delay: 2.5,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 md:pt-40"
    >
      {/* Ambient background lights */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-64 w-64 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <ProfileImage/>


          {/* Availability */}
          <div className="mt-8 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building
            <span className="block">
              Digital
            </span>

            <span className="relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-emerald-500" />
            </span>
          </h1>

          {/* Developer title */}
          <p className="mt-8 text-xl font-medium text-gray-700 dark:text-gray-300">
            Hi, I'm{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Kelvin Kariuki
            </span>
            .
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
            A Full-Stack Software Developer focused on building modern,
            responsive and practical web applications that solve real-world
            problems.
          </p>

          {/* Tech stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/50 px-6 py-3.5 font-semibold text-gray-800 backdrop-blur-sm transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            >
              Let's Talk
            </Link>

            <a
              href="/cv/Kelvin-Kariuki-CV.pdf"
              download
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 font-medium text-gray-600 transition hover:text-emerald-500 dark:text-gray-400"
            >
              <Download size={18} />
               Download CV
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE - 3D VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex h-[500px] w-full max-w-[520px] items-center justify-center"
        >


          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[360px] w-[360px] rounded-full border border-emerald-500/10"
          />

          {/* Second ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[280px] w-[280px] rounded-full border border-cyan-500/10"
          />

          {/* Main 3D-like core */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-52 w-52 items-center justify-center rounded-[35%] border border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 shadow-2xl shadow-emerald-500/10 dark:from-gray-900 dark:via-black dark:to-gray-950"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Core light */}
            <div className="absolute inset-8 rounded-[30%] border border-emerald-400/20 bg-emerald-500/5 shadow-inner shadow-emerald-500/20" />

            <div className="relative text-center">
              <Code2
                size={52}
                className="mx-auto text-emerald-400"
              />

              <p className="mt-3 text-sm font-semibold text-white">
                FULL-STACK
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Developer
              </p>
            </div>
          </motion.div>

          {/* Floating technology icons */}
          {floatingIcons.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: item.delay,
                },
                scale: {
                  duration: 0.5,
                  delay: item.delay,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
              className={`absolute ${item.position} z-20`}
            >
              <div className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-black/10 bg-white/80 text-2xl shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:scale-110 dark:border-white/10 dark:bg-black/70">
                <span className={item.color}>
                  {item.icon}
                </span>

                <span className="pointer-events-none absolute -bottom-8 scale-0 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Decorative objects */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[15%] top-[8%] h-8 w-8 rounded-lg border border-emerald-400/20 bg-emerald-400/5"
          />

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -90, -180],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] left-[15%] h-6 w-6 rounded-full border border-cyan-400/20 bg-cyan-400/5"
          />

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}