"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I focus on understanding the real problem before building a solution.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "I aim for readable, maintainable and well-structured code.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description:
      "I continuously learn new technologies and improve my development skills.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "I build applications with usability, performance and reliability in mind.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const qualities = [
  "Full-stack development skills",
  "Practical project experience",
  "Responsive and modern interfaces",
  "REST API development",
  "Database integration",
  "Git and GitHub workflow",
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Ambient effects */}

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[15%] h-72 w-72 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute left-[50%] top-[45%] h-64 w-64 rounded-full bg-orange-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}

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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            Why Work With Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            More than just
            <span className="text-gray-400 dark:text-gray-500">
              {" "}
              writing code.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
            I combine technical skills with curiosity, problem-solving
            and a focus on creating solutions that are actually useful.
          </p>
        </motion.div>

        {/* Main content */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}

          <div className="grid gap-5 sm:grid-cols-2">

            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.div
                  key={strength.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.025]"
                >

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${strength.bg} ${strength.color}`}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {strength.description}
                  </p>

                  <div
                    className={`mt-6 h-[2px] w-8 rounded-full ${strength.bg.replace(
                      "/10",
                      ""
                    )} transition-all duration-300 group-hover:w-16`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-8 dark:border-white/10 dark:bg-white/[0.025]"
          >

            {/* Decorative circle */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-cyan-500/10" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-violet-500/10" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              What I Bring
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              A developer who cares about the complete solution.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              From the user interface to the backend and database, I
              understand how the different parts of a modern web
              application work together.
            </p>

            {/* Qualities */}

            <div className="mt-7 space-y-4">

              {qualities.map((quality, index) => (
                <motion.div
                  key={quality}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-cyan-500"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {quality}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10"
            >
              Let&apos;s Work Together

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}