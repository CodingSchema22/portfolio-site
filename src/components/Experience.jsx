
import React from "react";
import { motion } from "framer-motion";

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

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-[#E9E1F6] bg-[#F2ECFF] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto max-w-[1450px]"
      >
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">

          {/* =====================================================
              LEFT — HEADING
          ===================================================== */}

          <motion.div variants={fadeLeft}>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              04 — Experience
            </p>

            <h2 className="max-w-[500px] text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#24132F] sm:text-7xl lg:text-[80px]">
              Where I've
              <br />

              <span className="font-serif italic font-normal text-[#8B5CF6]">
                worked.
              </span>
            </h2>
          </motion.div>

          {/* =====================================================
              RIGHT — EXPERIENCE
          ===================================================== */}

          <motion.div variants={fadeRight}>

            {/* =================================================
                EXPERIENCE 1
            ================================================= */}

            <div className="border-t border-[#DDD2EF] py-9">
              <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                {/* Date */}

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C8198]">
                  2024 — 2025
                </p>

                <div>

                  {/* Title */}

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-[#24132F] sm:text-2xl">
                        Junior Web Developer
                      </h3>

                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8B5CF6]">
                        DigiCaptis
                      </p>
                    </div>

                    <motion.span
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      className="text-xl text-[#A995B8] transition-colors duration-300 hover:text-[#8B5CF6]"
                    >
                      ↗
                    </motion.span>
                  </div>

                  {/* Description */}

                  <p className="mt-6 max-w-[620px] text-base leading-8 text-[#746A80] sm:text-lg">
                    Worked on web development tasks, responsive interfaces,
                    website improvements and practical frontend development.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE 2
            ================================================= */}

            <div className="border-t border-[#DDD2EF] py-9">
              <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                {/* Date */}

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C8198]">
                  2024 — Present
                </p>

                <div>

                  {/* Title */}

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-[#24132F] sm:text-2xl">
                        Freelance Web Developer
                      </h3>

                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8B5CF6]">
                        Independent
                      </p>
                    </div>

                    <motion.span
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      className="text-xl text-[#A995B8] transition-colors duration-300 hover:text-[#8B5CF6]"
                    >
                      ↗
                    </motion.span>
                  </div>

                  {/* Description */}

                  <p className="mt-6 max-w-[620px] text-base leading-8 text-[#746A80] sm:text-lg">
                    Building and improving websites, documentation pages,
                    membership features, digital products and responsive web
                    interfaces for different projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Line */}

            <div className="border-t border-[#DDD2EF]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
