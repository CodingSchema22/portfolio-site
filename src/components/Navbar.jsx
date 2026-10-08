
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-[#E9E1F6]/80 bg-[#FBFAFF]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[78px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* =========================
            LOGO
        ========================== */}

        <motion.button
          onClick={() => scrollTo("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3"
        >
          {/* Logo Circle */}
          <motion.span
            whileHover={{
              rotate: 6,
              scale: 1.06,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5CF6] text-[14px] font-bold tracking-[-0.02em] text-white shadow-[0_8px_25px_rgba(139,92,246,0.20)]"
          >
            GF
          </motion.span>

          {/* Logo Text */}
          <span className="text-[16px] font-semibold tracking-[-0.02em] text-[#24132F] sm:text-[17px]">
            Ghulam Fatima
            <span className="text-[#8B5CF6]">.</span>
          </span>
        </motion.button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav className="hidden items-center gap-8 md:flex lg:gap-9">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.07,
                duration: 0.45,
              }}
              whileHover={{ y: -2 }}
              onClick={() => scrollTo(item.toLowerCase())}
              className="group relative py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#746A80] transition-colors duration-300 hover:text-[#8B5CF6]"
            >
              {item}

              {/* Animated Underline */}
              <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        {/* =========================
            CONTACT BUTTON
        ========================== */}

        <motion.button
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollTo("contact")}
          className="hidden rounded-full bg-[#8B5CF6] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_8px_25px_rgba(139,92,246,0.18)] transition-colors duration-300 hover:bg-[#7C3AED] md:block"
        >
          Let's Talk
        </motion.button>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-[#E9E1F6] bg-white p-2.5 text-[#24132F] transition duration-300 hover:border-[#D9C9EE] hover:bg-[#F6F2FF] hover:text-[#8B5CF6] md:hidden"
          aria-label="Toggle menu"
        >
          <MenuIcon open={menuOpen} />
        </motion.button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden border-t border-[#E9E1F6] bg-white/95 px-5 py-5 shadow-[0_20px_50px_rgba(139,92,246,0.08)] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  x: 5,
                  color: "#8B5CF6",
                }}
                onClick={() => scrollTo(item.toLowerCase())}
                className="rounded-xl px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.19em] text-[#746A80] transition-colors duration-300 hover:bg-[#F6F2FF]"
              >
                {item}
              </motion.button>
            ))}

            {/* Mobile Let's Talk */}

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => scrollTo("contact")}
              className="mt-3 rounded-xl bg-[#8B5CF6] px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_8px_25px_rgba(139,92,246,0.18)] transition duration-300 hover:bg-[#7C3AED]"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* =========================
   MENU ICON
========================= */

function MenuIcon({ open }) {
  return (
    <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 5 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="block h-[2px] w-5 rounded-full bg-current"
      />

      <motion.span
        animate={{
          opacity: open ? 0 : 1,
          x: open ? -5 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="block h-[2px] w-5 rounded-full bg-current"
      />

      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -5 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="block h-[2px] w-5 rounded-full bg-current"
      />
    </div>
  );
}
