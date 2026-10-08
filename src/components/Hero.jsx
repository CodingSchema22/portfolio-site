
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#E9E1F6] bg-[#FBFAFF] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#EEE5FF]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#E8DCFF]/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#8B5CF6]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#746A80]">
                Web Developer · Lahore
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="max-w-[950px] text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#24132F] sm:text-[76px] lg:text-[100px]"
            >
              Digital
              <br />

              <span className="font-serif italic font-normal text-[#8B5CF6]">
                experiences
              </span>

              <br />

              with intention.
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-[550px] text-[15px] leading-8 text-[#746A80] sm:text-[17px]"
            >
              I'm Ghulam Fatima, a Web Developer & MERN Stack Developer
              creating thoughtful, responsive and visually refined digital
              experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-4 rounded-full bg-[#8B5CF6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#8B5CF6]/20 transition duration-300 hover:bg-[#7C3AED]"
              >
                Explore Work

                <ArrowIcon />
              </motion.button>

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-[#DDD3EA] bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#746A80] transition duration-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
              >
                Let's Talk
              </motion.button>
            </motion.div>

            {/* =====================================================
                STATS
            ===================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center gap-7 sm:gap-8"
            >
              <div>
                <p className="text-2xl font-medium tracking-[-0.03em] text-[#24132F]">
                  01+
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]">
                  Year Experience
                </p>
              </div>

              <div className="h-9 w-px bg-[#E0D6ED]" />

              <div>
                <p className="text-2xl font-medium tracking-[-0.03em] text-[#24132F]">
                  06+
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]">
                  Projects
                </p>
              </div>

              <div className="h-9 w-px bg-[#E0D6ED]" />

              <div>
                <p className="text-2xl font-medium tracking-[-0.03em] text-[#24132F]">
                  MERN
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]">
                  Stack
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              HERO VISUAL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Main Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [1.5, 3, 1.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[32px] border border-[#E9E1F6] bg-white p-3 shadow-[0_25px_70px_rgba(139,92,246,0.12)]"
            >
              <div className="overflow-hidden rounded-[25px] border border-[#EBE4F7] bg-[#F6F2FF]">

                {/* Browser Header */}

                <div className="flex items-center justify-between border-b border-[#E9E1F6] bg-white/80 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D8CDF0]" />
                    <span className="h-2 w-2 rounded-full bg-[#C8B7E6]" />
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                  </div>

                  <span className="text-[8px] font-medium uppercase tracking-[0.23em] text-[#8C8196]">
                    portfolio / 2026
                  </span>
                </div>

                {/* Card Content */}

                <div className="p-7 sm:p-8">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8B5CF6]">
                    Creative Developer
                  </p>

                  <h2 className="mt-4 text-[38px] font-medium leading-[0.95] tracking-[-0.05em] text-[#24132F]">
                    Ghulam
                    <br />

                    <span className="font-serif italic font-normal text-[#8B5CF6]">
                      Fatima.
                    </span>
                  </h2>

                  <div className="mt-8 h-px bg-[#E1D8ED]" />

                  {/* Focus + Location */}

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-[#E9E1F6] bg-white p-4 transition duration-300 hover:border-[#CDBBEA] hover:shadow-md">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8C8196]">
                        Focus
                      </p>

                      <p className="mt-3 text-sm font-medium text-[#24132F]">
                        React
                      </p>

                      <p className="mt-1 text-sm text-[#746A80]">
                        MERN
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E9E1F6] bg-white p-4 transition duration-300 hover:border-[#CDBBEA] hover:shadow-md">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8C8196]">
                        Based
                      </p>

                      <p className="mt-3 text-sm font-medium text-[#24132F]">
                        Lahore
                      </p>

                      <p className="mt-1 text-sm text-[#746A80]">
                        Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Currently */}

                  <div className="mt-5 rounded-2xl border border-[#8B5CF6]/15 bg-[#8B5CF6]/[0.07] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                      Currently
                    </p>

                    <p className="mt-3 text-base font-medium leading-7 text-[#3D2949]">
                      Turning ideas into beautiful web experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                FLOATING BADGE
            ===================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [4, 7, 4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-white shadow-[0_15px_40px_rgba(139,92,246,0.15)]"
            >
              <div className="text-center">
                <p className="text-xl text-[#8B5CF6]">
                  ✦
                </p>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#746A80]">
                  Creative
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
