
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { ArrowIcon, ExternalIcon } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-[#E9E1F6] bg-[#FBFAFF] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end"
        >
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              03 — Selected Work
            </p>

            <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-[#24132F] sm:text-7xl lg:text-[88px]">
              Things I've
              <br />

              <span className="font-serif italic font-normal text-[#8B5CF6]">
                created.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-base leading-8 text-[#746A80] sm:text-lg">
            A collection of web applications, interfaces and digital
            experiences built with modern technologies and a focus on
            usability, responsiveness and clean design.
          </p>
        </motion.div>

        {/* =========================
            MASONRY PROJECTS
        ========================== */}

        <div className="columns-1 gap-7 md:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group mb-8 break-inside-avoid"
            >

              {/* =========================
                  PROJECT IMAGE
              ========================== */}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-[26px] border border-[#E9E1F6] bg-white shadow-[0_10px_35px_rgba(139,92,246,0.05)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#DCCDF0] group-hover:shadow-[0_25px_60px_rgba(139,92,246,0.12)]"
              >
                <div className="relative overflow-hidden">

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block h-auto w-full object-cover"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-[#24132F]/0 transition-all duration-500 group-hover:bg-[#24132F]/35" />

                  {/* External Icon */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white text-[#8B5CF6] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                    >
                      <ExternalIcon />
                    </motion.span>
                  </div>

                  {/* Project Number */}

                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#24132F]/70 px-3 py-1.5 shadow-sm backdrop-blur-md">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </a>

              {/* =========================
                  PROJECT CONTENT
              ========================== */}

              <div className="px-1 pt-5">

                {/* Title + Category */}

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#24132F] transition-colors duration-300 group-hover:text-[#8B5CF6] sm:text-[22px]">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-[#F6F2FF] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8B5CF6]">
                    {project.category}
                  </span>
                </div>

                {/* Description */}

                <p className="mt-3 max-w-[450px] text-sm leading-7 text-[#746A80] sm:text-[15px]">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#E9E1F6] bg-white px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-[#746A80] transition-all duration-300 hover:border-[#BFA9DF] hover:bg-[#F6F2FF] hover:text-[#8B5CF6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#8B5CF6] transition-all duration-300 hover:gap-3 hover:text-[#7C3AED]"
                >
                  View Project
                  <ArrowIcon size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================
            GITHUB
        ========================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 flex flex-col justify-between gap-7 border-t border-[#E9E1F6] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em] text-[#24132F] sm:text-xl">
              More work lives on GitHub.
            </p>

            <p className="mt-2 text-sm leading-6 text-[#746A80] sm:text-[15px]">
              Explore code, experiments and development projects.
            </p>
          </div>

          <motion.a
            href="https://github.com/CodingSchema22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: 5,
            }}
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B5CF6] transition-colors duration-300 hover:text-[#7C3AED]"
          >
            Visit GitHub
            <ArrowIcon size={15} />
          </motion.a>
        </motion.div>
      </div>

      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute -right-32 top-32 h-72 w-72 rounded-full bg-[#E8DCFF]/45 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#EEE5FF]/55 blur-3xl" />
    </section>
  );
}