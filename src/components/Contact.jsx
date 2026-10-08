
import React from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-[#E9E1F6] bg-[#F2ECFF] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mx-auto max-w-[1450px]"
      >
        <div className="relative overflow-hidden rounded-[35px] border border-[#E9E1F6] bg-[#FBFAFF] px-7 py-16 shadow-[0_25px_80px_rgba(139,92,246,0.10)] sm:px-12 lg:px-20 lg:py-24">

          {/* =====================================================
              DECORATIVE GLOW
          ===================================================== */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#8B5CF6]/[0.10] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-[#E8DCFF]/70 blur-[100px]" />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
                05 — Let's Connect
              </p>

              <h2 className="max-w-[900px] text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-[#24132F] sm:text-7xl lg:text-[88px]">
                Have an idea?
                <br />

                <span className="font-serif italic font-normal text-[#8B5CF6]">
                  Let's build it.
                </span>
              </h2>

              <p className="mt-8 max-w-[560px] text-base leading-8 text-[#746A80] sm:text-lg sm:leading-8">
                I'm open to web development opportunities, freelance
                projects and interesting collaborations.
              </p>
            </div>

            {/* =====================================================
                CONTACT BUTTON
            ===================================================== */}

            <motion.a
              href="mailto:your-email@example.com?subject=Project%20Inquiry"
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex w-fit items-center gap-4 rounded-full bg-[#8B5CF6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#8B5CF6]/20 transition hover:bg-[#7C3AED]"
            >
              Get In Touch

              <motion.span
                whileHover={{
                  x: 5,
                }}
              >
                <ArrowIcon />
              </motion.span>
            </motion.a>
          </div>

          {/* =====================================================
              SOCIAL LINKS
          ===================================================== */}

          <div className="relative mt-16 flex flex-wrap gap-3 border-t border-[#E9E1F6] pt-8">

            {/* GitHub */}

            <motion.a
              whileHover={{
                y: -3,
              }}
              href="https://github.com/CodingSchema22"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#E1D7EF] bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#746A80] transition duration-300 hover:border-[#8B5CF6] hover:bg-[#F6F2FF] hover:text-[#7C3AED]"
            >
              GitHub ↗
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              whileHover={{
                y: -3,
              }}
              href="#"
              className="rounded-full border border-[#E1D7EF] bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#746A80] transition duration-300 hover:border-[#8B5CF6] hover:bg-[#F6F2FF] hover:text-[#7C3AED]"
            >
              LinkedIn ↗
            </motion.a>

            {/* Location */}

            <span className="rounded-full border border-[#E1D7EF] bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#746A80]">
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
