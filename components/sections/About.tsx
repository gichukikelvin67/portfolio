"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I focus on understanding the problem first, then building practical and reliable solutions.",
  },
  {
    icon: Code2,
    title: "Full-Stack Thinking",
    description:
      "I can work across the frontend, backend, databases and APIs to build complete applications.",
  },
  {
    icon: Rocket,
    title: "Practical Builder",
    description:
      "I learn by building real applications and turning ideas into functional digital products.",
  },
  {
    icon: Users,
    title: "User Focused",
    description:
      "I care about creating responsive interfaces that are simple, intuitive and enjoyable to use.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Ambient light */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Building with curiosity,
            <span className="text-gray-400 dark:text-gray-500">
              {" "}purpose and creativity.
            </span>
          </h2>
        </motion.div>

        {/* Main About Content */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02] md:p-10">

              <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                I'm{" "}
                <span className="font-semibold text-gray-950 dark:text-white">
                  Kelvin Kariuki
                </span>
                , a Full-Stack Software Developer passionate about
                creating modern digital solutions that solve real-world
                problems.
              </p>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                My journey into software development has given me the
                opportunity to work with modern frontend technologies,
                backend systems, databases, APIs and development tools.
              </p>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                I enjoy turning ideas into working applications, from
                designing responsive interfaces to building the backend
                logic that powers them. I'm especially interested in
                software that can make everyday business processes
                simpler and more efficient.
              </p>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                I'm currently focused on growing as a developer,
                building meaningful projects and looking for opportunities
                where I can contribute, learn and continue improving.
              </p>

              {/* Mini stats */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-2xl font-bold">
                    Full-Stack
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Development
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-2xl font-bold">
                    MERN
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Stack
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-2xl font-bold">
                    REST
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    APIs
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Why Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
                Why Me
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                What I bring
              </h3>
            </div>

            <div className="space-y-4">
              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group rounded-2xl border border-black/10 bg-black/[0.02] p-5 transition hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <div className="flex gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition group-hover:bg-emerald-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}