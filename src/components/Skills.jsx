
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-[#E9E1F6] bg-[#F2ECFF] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#E8DCFF]/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#EEE5FF]/60 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative z-10 mx-auto max-w-[1450px]"
      >
        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <motion.div variants={fadeLeft}>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              02 — Skills
            </p>

            <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-[#24132F] sm:text-7xl lg:text-[88px]">
              My digital
              <br />

              <span className="font-serif italic font-normal text-[#8B5CF6]">
                toolkit.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeRight}
            className="max-w-[440px] text-base leading-8 text-[#746A80] sm:text-lg"
          >
            A practical combination of frontend technologies, backend tools
            and development practices used to create modern web applications.
          </motion.p>
        </div>

        {/* =========================
            SKILLS
        ========================== */}

        <div className="grid gap-x-20 gap-y-11 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Skill Header */}

              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#24132F] transition-colors duration-300 group-hover:text-[#8B5CF6] sm:text-xs">
                  {skill.name}
                </span>

                <span className="text-[11px] font-semibold tracking-[0.05em] text-[#8B5CF6] sm:text-xs">
                  {skill.value}%
                </span>
              </div>

              {/* Progress Bar */}

              <div className="relative h-[4px] overflow-hidden rounded-full bg-[#DED3ED]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.value}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-[#8B5CF6]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            BOTTOM LABEL
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-16 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#8B5CF6]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8C8198] sm:text-[10px]">
            Always learning · Always building
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
