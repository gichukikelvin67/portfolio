"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Globe,
} from "lucide-react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
};

const categories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
  },
  {
    id: "apis",
    name: "APIs",
    icon: Globe,
  },
  {
    id: "tools",
    name: "Tools",
    icon: Wrench,
  },
];

const skills: Record<string, Skill[]> = {
  frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      description: "Semantic and accessible web structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      description: "Responsive layouts and modern styling",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
      description: "Interactive and dynamic applications",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-blue-500",
      description: "Type-safe JavaScript development",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400",
      description: "Component-based user interfaces",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-gray-900 dark:text-white",
      description: "Modern full-stack React applications",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
      description: "Utility-first responsive design",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-purple-500",
      description: "Responsive UI development",
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      description: "Server-side JavaScript runtime",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-700 dark:text-gray-200",
      description: "REST API and backend development",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      color: "text-purple-500",
      description: "Authentication and authorization",
    },
  ],

  database: [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-500",
      description: "NoSQL database development",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-blue-500",
      description: "Relational database management",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "text-blue-400",
      description: "Relational SQL database",
    },
  ],

  apis: [
    {
      name: "REST APIs",
      icon: <Globe />,
      color: "text-emerald-500",
      description: "Designing and consuming REST services",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "text-orange-500",
      description: "API testing and documentation",
    },
    {
      name: "M-Pesa Daraja",
      icon: <Server />,
      color: "text-green-500",
      description: "M-Pesa payment API integration",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-orange-500",
      description: "Version control and collaboration",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-900 dark:text-white",
      description: "Source control and project hosting",
    },
  
    
    {
      name: "npm",
      icon: <FaNpm />,
      color: "text-red-500",
      description: "JavaScript package management",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "text-gray-900 dark:text-white",
      description: "Frontend deployment and hosting",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      color: "text-pink-500",
      description: "Interface design and prototyping",
    },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skills[activeCategory];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Ambient effects */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-emerald-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Skills & Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Tools I use to turn
            <span className="text-gray-400 dark:text-gray-500">
              {" "}ideas into products.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            A growing toolkit built through practical projects,
            coursework and hands-on development.
          </p>
        </motion.div>

        {/* Category buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition ${
                  active
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/10"
                    : "border-black/10 bg-black/[0.02] text-gray-600 hover:border-emerald-500/40 hover:text-emerald-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-400"
                }`}
              >
                <Icon size={17} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
            }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition dark:border-white/10 dark:bg-white/[0.025]"
              >
                {/* Small decorative glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition group-hover:bg-emerald-500/10" />

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black/[0.04] text-3xl dark:bg-white/[0.06] ${skill.color}`}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="relative mt-5 font-semibold">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {skill.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full stack summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02] md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                Full-Stack Workflow
              </p>

              <h3 className="mt-2 text-xl font-bold">
                From interface to database
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">

              <span className="rounded-lg border border-black/10 px-3 py-2 dark:border-white/10">
                React / Next.js
              </span>

              <span className="text-gray-400">
                →
              </span>

              <span className="rounded-lg border border-black/10 px-3 py-2 dark:border-white/10">
                Node / Express
              </span>

              <span className="text-gray-400">
                →
              </span>

              <span className="rounded-lg border border-black/10 px-3 py-2 dark:border-white/10">
                MongoDB
              </span>

              <span className="text-gray-400">
                →
              </span>

              <span className="rounded-lg border border-black/10 px-3 py-2 dark:border-white/10">
                Deployment
              </span>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}