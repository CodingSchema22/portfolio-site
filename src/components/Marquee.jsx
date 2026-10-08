
import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "REACT",
    "JAVASCRIPT",
    "MERN STACK",
    "UI / UX",
    "TAILWIND",
    "WEB DEVELOPMENT",
    "REACT",
    "JAVASCRIPT",
    "MERN STACK",
    "UI / UX",
    "TAILWIND",
    "WEB DEVELOPMENT",
  ];

  return (
    <div className="overflow-hidden border-y border-[#E9E1F6] bg-[#F2ECFF]">
      <motion.div
        animate={{
          x: ["0%", "-45%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex min-w-max items-center gap-7 py-5 sm:gap-9 sm:py-6"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#746A80] sm:text-[13px]">
              {item}
            </span>

            <span className="text-[14px] text-[#8B5CF6] sm:text-[16px]">
              ✦
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
