
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

export default function About() {
  const tags = [
    "Frontend Development",
    "React Applications",
    "MERN Stack",
    "Responsive Design",
    "UI / UX",
  ];

  return (
    <section
      id="about"
      className="border-b border-[#E9E1F6] bg-[#FBFAFF] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="mx-auto max-w-[1450px]"
      >
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-32">

          {/* LEFT */}

          <motion.div variants={fadeLeft}>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              01 — About
            </p>

            <h2 className="max-w-[500px] text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#24132F] sm:text-7xl lg:text-[82px]">
              Designing with
              <br />

              <span className="font-serif italic font-normal text-[#8B5CF6]">
                purpose.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div variants={fadeRight}>

            {/* Main Intro */}

            <p className="max-w-[800px] text-lg font-medium leading-8 tracking-[-0.015em] text-[#4F455A] sm:text-2xl sm:leading-10 lg:text-[27px]">
              I'm a Computer Science graduate and Web Developer who enjoys
              turning ideas into clean, functional and visually engaging
              digital experiences.
            </p>

            {/* Description */}

            <p className="mt-8 max-w-[720px] text-base leading-8 text-[#746A80] sm:text-lg sm:leading-8">
              My work mainly revolves around React, JavaScript, Tailwind CSS
              and the MERN stack. I enjoy building responsive interfaces,
              reusable components and practical web applications that feel
              simple, intuitive and refined.
            </p>

            {/* Tags */}

            <div className="mt-10 flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{
                    opacity: 0,
                    y: 10,
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
                  whileHover={{
                    y: -3,
                  }}
                  className="rounded-full border border-[#E9E1F6] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#746A80] transition duration-300 hover:border-[#8B5CF6]/50 hover:bg-[#F6F2FF] hover:text-[#7C3AED] sm:text-xs"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
