"use client";

import{useState} from "react";
import{motion,AnimatePresence}from "framer-motion";


import { ArrowUpRight,ExternalLink,X,Code2,Server, Database,Wrench} from "lucide-react";
import{FaGithub} from "react-icons/fa";

type Project={
    title:string;
    category:string;
    description:string;
    image:string;
    


    frontend:string[];
    backend:string[];
    database:string[];
    tools:string[];

    demo:string;
    github:string;
};

const project:Project={
    title:"M-Pesa Businness POS",
    category: "Full-Stack Application",

    description:
    "A full-stack point-of-sale system designed to help businesses manage products,customers,orders,sales and M-pesa payments from one platform.",

    image:"/images/Screenshot 2026-08-31 173814.png",

    frontend:[
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    ],

    backend:[
     "Node.js",
    "Express.js",
    "REST API",
    ],

    database:[
    "MongoDB",
    "Mongoose",
    ],

    tools:[
    "Git",
    "GitHub",
    "M-Pesa Daraja API",
    "Vercel",
    ],

    demo:"https://main-agenda.vercel.app/",

    github:
      "https://github.com/gichukikelvin67/Main-Agenda.git",

      

};

export default function Projects(){
    const[selectedProject, setSelectedProject]=useState<Project | null>(null);

    return(
        <section
        id="projects"
        className="relative overflow-hiddden px-6 py-28"
        >

      <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}

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
          }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Selected Project
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Something I&apos;ve
            <span className="text-gray-400 dark:text-gray-500">
              {" "}built.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            A practical full-stack application built to solve
            real-world business problems using modern web
            technologies.
          </p>
        </motion.div>

        {/* Project card */}

        <motion.article
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
          }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            y: -7,
          }}
          className="group mt-14 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:shadow-black/30"
        >

          {/* Project image */}

          <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-gray-900 md:h-[380px]">

            <img
              src={project.image}
              alt={project.title}
              
              
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Category */}

            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* Project number */}

            <span className="absolute bottom-5 right-6 text-6xl font-bold text-white/20">
              01
            </span>

          </div>

          {/* Project content */}

          <div className="p-6 md:p-8">

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              <div className="max-w-3xl">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Code2 size={22} />
              </div>

            </div>

            {/* Technology stack */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <StackRow
                icon={<Code2 size={15} />}
                title="Frontend"
                items={project.frontend}
              />

              <StackRow
                icon={<Server size={15} />}
                title="Backend"
                items={project.backend}
              />

              <StackRow
                icon={<Database size={15} />}
                title="Database"
                items={project.database}
              />

              <StackRow
                icon={<Wrench size={15} />}
                title="Other Tools"
                items={project.tools}
              />

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3 border-t border-black/10 pt-6 dark:border-white/10">

              {/* Demo */}

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Demo

                <ExternalLink
                  size={15}
                  className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>

              {/* View Details */}

              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-2 rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10"
              >
                View Details

                <ArrowUpRight size={15} />
              </button>

              {/* GitHub */}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10"
              >
                <FaGithub size={17} />

                Code from GitHub
              </a>

            </div>

          </div>

          {/* Bottom accent */}

          <div className="h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

        </motion.article>

      </div>

      {/* Project Details Modal */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-white p-7 shadow-2xl dark:bg-[#0b0f0d]"
            >

              {/* Close button */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-xl p-2 text-gray-500 transition hover:bg-black/5 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                {selectedProject.category}
              </p>

              <h3 className="mt-3 pr-10 text-3xl font-bold">
                {selectedProject.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {selectedProject.description}
              </p>

              {/* Details */}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <DetailGroup
                  icon={<Code2 size={17} />}
                  title="Frontend"
                  items={selectedProject.frontend}
                />

                <DetailGroup
                  icon={<Server size={17} />}
                  title="Backend"
                  items={selectedProject.backend}
                />

                <DetailGroup
                  icon={<Database size={17} />}
                  title="Database"
                  items={selectedProject.database}
                />

                <DetailGroup
                  icon={<Wrench size={17} />}
                  title="Other Tools"
                  items={selectedProject.tools}
                />

              </div>

              {/* Modal buttons */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Live Demo

                  <ExternalLink size={16} />
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold dark:border-white/10"
                >
                  <FaGithub size={17} />

                  GitHub
                </a>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
   
        </section>
    )
}
function StackRow({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="flex gap-3">

      <div className="mt-0.5 text-gray-400">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {title}
        </p>

        <div className="mt-1.5 flex flex-wrap gap-1.5">

          {items.map((item) => (
            <span
              key={item}
              className="rounded-md bg-black/[0.04] px-2 py-1 text-xs text-gray-600 dark:bg-white/[0.05] dark:text-gray-400"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}


/* Modal detail group */

function DetailGroup({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-black/10 p-5 dark:border-white/10">

      <div className="flex items-center gap-2 text-emerald-500">

        {icon}

        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>

      </div>

      <div className="mt-4 flex flex-wrap gap-2">

        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-black/[0.04] px-2.5 py-1.5 text-xs text-gray-600 dark:bg-white/[0.05] dark:text-gray-400"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}