"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    year: "April 2026 — August 2026",
    title: "Full-Stack Software Development",
    institution: "GomyCode Kenya BootCamp",
    description:
      "Completed practical training covering modern frontend and backend development, databases, APIs, version control and deployment.",
    icon: GraduationCap,
  },
];

const experience = [
  {
    year: "2026 — Present",
    title: "Full-Stack Development Projects",
    type: "Practical Project Experience",
    description:
      "Designed and developed full-stack applications focused on solving practical business and user problems.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2026",
    title: "M-Pesa Business POS",
    type: "Featured Project",
    description:
      "Built a full-stack point-of-sale solution with product management, orders, authentication, dashboard functionality and M-Pesa payment integration.",
    icon: Code2,
  },
];

const skills = [
  {
    icon: Globe2,
    label: "Frontend",
    value: "React · Next.js · TypeScript",
  },
  {
    icon: Database,
    label: "Backend & Database",
    value: "Node.js · Express · MongoDB",
  },
  {
    icon: Code2,
    label: "Development",
    value: "REST APIs · Git · GitHub",
  },
];

export default function EducationExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* 
          AMBIENT BACKGROUND
                          */}

      <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-amber-400/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] top-[45%] h-72 w-72 rounded-full bg-rose-400/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[5%] left-[40%] h-64 w-64 rounded-full bg-pink-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* 
            SECTION HEADING
                              */}

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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Education &{" "}
            <span className="text-gray-400 dark:text-gray-500">
              Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
            My journey from learning software development to building
            practical full-stack applications.
          </p>
        </motion.div>

        {/* 
            EDUCATION + EXPERIENCE
        */}

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/*
              EDUCATION
        */}

          <div>

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Education
                </p>

                <h3 className="text-xl font-bold">
                  Academic Background
                </h3>
              </div>
            </div>

            {/* Timeline */}

            <div className="relative pl-8">

              {/* Vertical line */}

              <div className="absolute left-[7px] top-2 h-[calc(100%-10px)] w-px bg-amber-500/20" />

              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >

                    {/* Timeline dot */}

                    <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-amber-500 dark:border-black" />

                    {/* Card */}

                    <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.025]">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
                            {item.year}
                          </span>

                          <h4 className="mt-3 text-xl font-bold">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.institution}
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 sm:flex">
                          <Icon size={19} />
                        </div>

                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* 
              EXPERIENCE
                              */}

          <div>

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
                <BriefcaseBusiness size={21} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Experience
                </p>

                <h3 className="text-xl font-bold">
                  Practical Experience
                </h3>
              </div>
            </div>

            {/* Timeline */}

            <div className="relative pl-8">

              {/* Vertical line */}

              <div className="absolute left-[7px] top-2 h-[calc(100%-10px)] w-px bg-rose-500/20" />

              {experience.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="relative mb-6 last:mb-0"
                  >

                    {/* Timeline dot */}

                    <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-rose-500 dark:border-black" />

                    {/* Card */}

                    <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.025]">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
                            {item.year}
                          </span>

                          <h4 className="mt-3 text-xl font-bold">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.type}
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 sm:flex">
                          <Icon size={19} />
                        </div>

                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* 
            TECHNOLOGY SUMMARY
                                   */}

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
          className="mt-16"
        >

          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02]">

            <div className="grid gap-6 md:grid-cols-3">

              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {skill.label}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {skill.value}
                      </p>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </motion.div>

        {/* 
            CTA
                      */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-black/10 p-7 dark:border-white/10 md:flex-row md:items-center"
        >

          <div className="flex items-start gap-4">

            <CheckCircle2
              size={21}
              className="mt-1 shrink-0 text-amber-500"
            />

            <div>
              <h3 className="font-semibold">
                Ready for the next opportunity.
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                I&apos;m looking forward to applying my skills to
                meaningful software projects.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Let&apos;s Talk

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}