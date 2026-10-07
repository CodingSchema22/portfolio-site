import React, { useState } from "react";
import { motion } from "framer-motion";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: "01",
    title: "Resume Builder",
    category: "React Application",
    description:
      "A modern resume builder that allows users to create, customize and manage professional resumes using multiple responsive templates.",
    image: "/images/resume-builder.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://resume-builder-nu-dusky.vercel.app/",
  },
  {
    id: "02",
    title: "Test Maker",
    category: "MERN Stack",
    description:
      "A printable test-making platform for creating customized tests based on PTB Matric and Grade 9–12 syllabus content.",
    image: "/images/test maker.JPG",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://test-maker-two.vercel.app/",
  },
  {
    id: "03",
    title: "Personality Grooming",
    category: "Web Development",
    description:
      "A modern personality grooming platform designed with a clean, responsive and user-friendly interface.",
    image: "/images/personality-updation.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://vite-project-sigma-rose-77.vercel.app/",
  },
  {
    id: "04",
    title: "Job Information App",
    category: "React Application",
    description:
      "A responsive self update application for browsing, searching and exploring opportunities to enhance yourself.",
    image: "/images/self-growming",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://selfgroming.vercel.app/",
  },
  {
    id: "05",
    title: "Headphones E-commerce",
    category: "E-commerce Website",
    description:
      "A modern headphones e-commerce website featuring product-focused layouts and an engaging shopping interface.",
    image: "/images/head-phones website.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://headphoness-gold.vercel.app/",
  },
  {
    id: "06",
    title: "Job Portal",
    category: "Web Application",
    description:
      "A responsive job portal that enables users to discover job opportunities and explore detailed job information.",
    image: "/images/job portal.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://online-job-pi.vercel.app/",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  { name: "HTML5", value: 95 },
  { name: "CSS3", value: 90 },
  { name: "JavaScript", value: 90 },
  { name: "React.js", value: 85 },
  { name: "Tailwind CSS", value: 90 },
  { name: "Node.js", value: 80 },
  { name: "Express.js", value: 78 },
  { name: "MongoDB", value: 78 },
  { name: "Git & GitHub", value: 85 },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
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
    x: 50,
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

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#18151f] selection:bg-[#7c3aed] selection:text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full border-b border-[#e9e4f0] bg-white/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}

          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed] text-[11px] font-bold text-white shadow-lg shadow-purple-200">
              GF
            </span>

            <span className="text-[16px] font-medium tracking-tight text-[#18151f]">
              Ghulam Fatima
              <span className="text-[#7c3aed]">.</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.07,
                  }}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#777080] transition hover:text-[#7c3aed]"
                >
                  {item}
                </motion.button>
              )
            )}
          </nav>

          {/* Contact */}

          <motion.button
            whileHover={{
              y: -2,
              backgroundColor: "#7c3aed",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full border border-[#7c3aed]/30 bg-[#f8f5ff] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7c3aed] transition md:block"
          >
            Let's Talk
          </motion.button>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#18151f] md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-[#e9e4f0] bg-white px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-[12px] font-medium uppercase tracking-[0.16em] text-[#777080] transition hover:text-[#7c3aed]"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36"
      >
        {/* Background */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100/60 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-violet-100/50 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1450px]">

          <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">

            {/* Hero Text */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={fadeUp}
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-12 bg-[#7c3aed]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#777080]">
                  Web Developer · Lahore
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-[1000px] text-[52px] font-medium leading-[0.92] tracking-[-0.055em] text-[#18151f] sm:text-[72px] lg:text-[96px] xl:text-[108px]"
              >
                Digital
                <br />

                <span className="font-serif italic font-normal text-[#7c3aed]">
                  experiences
                </span>

                <br />

                with intention.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-9 max-w-[600px] text-[16px] leading-8 text-[#716a7d] sm:text-[17px]"
              >
                I'm Ghulam Fatima, a Web Developer focused on building clean,
                responsive and user-friendly digital experiences with React,
                JavaScript and the MERN stack.
              </motion.p>

              {/* Buttons */}

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("projects")}
                  className="flex items-center gap-4 rounded-full bg-[#7c3aed] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-xl shadow-purple-200 transition hover:bg-[#6d28d9]"
                >
                  Explore Work
                  <ArrowIcon />
                </motion.button>

                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("contact")}
                  className="rounded-full border border-[#ddd6e8] bg-white px-7 py-4 text-[12px] font-medium uppercase tracking-[0.1em] text-[#6f687a] transition hover:border-[#7c3aed] hover:text-[#7c3aed]"
                >
                  Let's Talk
                </motion.button>
              </motion.div>

              {/* Stats */}

              <motion.div
                variants={fadeUp}
                className="mt-16 flex flex-wrap items-center gap-8"
              >
                <div>
                  <p className="text-[26px] font-semibold tracking-tight text-[#18151f]">
                    1+
                  </p>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#91899d]">
                    Year Experience
                  </p>
                </div>

                <div className="h-9 w-px bg-[#e6e0eb]" />

                <div>
                  <p className="text-[26px] font-semibold tracking-tight text-[#18151f]">
                    6+
                  </p>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#91899d]">
                    Projects
                  </p>
                </div>

                <div className="h-9 w-px bg-[#e6e0eb]" />

                <div>
                  <p className="text-[26px] font-semibold tracking-tight text-[#18151f]">
                    MERN
                  </p>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#91899d]">
                    Stack
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 50,
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
              className="relative mx-auto w-full max-w-[470px]"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [2, 4, 2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[35px] border border-[#e7e0ef] bg-white p-3 shadow-[0_30px_80px_rgba(124,58,237,0.12)]"
              >
                <div className="overflow-hidden rounded-[27px] border border-[#eee9f4] bg-[#faf9fc]">

                  {/* Browser */}

                  <div className="flex items-center justify-between border-b border-[#eee9f4] px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#c4b5fd]" />
                      <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
                      <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
                    </div>

                    <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#9a92a5]">
                      portfolio / 2026
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">
                    <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-[#91899d]">
                      Creative Developer
                    </p>

                    <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-[#211b2b]">
                      Ghulam
                      <br />

                      <span className="font-serif italic text-[#7c3aed]">
                        Fatima.
                      </span>
                    </h2>

                    <div className="mt-9 h-px bg-[#e9e4f0]" />

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-[#ebe5f2] bg-white p-4 shadow-sm">
                        <p className="text-[9px] font-medium uppercase tracking-widest text-[#91899d]">
                          Focus
                        </p>

                        <p className="mt-3 text-[14px] text-[#51495c]">
                          React
                        </p>

                        <p className="mt-1 text-[14px] text-[#51495c]">
                          MERN
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#ebe5f2] bg-white p-4 shadow-sm">
                        <p className="text-[9px] font-medium uppercase tracking-widest text-[#91899d]">
                          Based
                        </p>

                        <p className="mt-3 text-[14px] text-[#51495c]">
                          Lahore
                        </p>

                        <p className="mt-1 text-[14px] text-[#51495c]">
                          Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
                      <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#7c3aed]">
                        Currently
                      </p>

                      <p className="mt-3 text-[17px] leading-snug text-[#40374a]">
                        Turning ideas into beautiful web experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}

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
                className="absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-purple-200 bg-white shadow-xl shadow-purple-100"
              >
                <div className="text-center">
                  <p className="text-xl text-[#7c3aed]">✦</p>

                  <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-[#81788f]">
                    Creative
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="overflow-hidden border-y border-[#e9e4f0] bg-[#faf9fc]">
        <motion.div
          animate={{
            x: ["0%", "-45%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex min-w-max items-center gap-8 py-5"
        >
          {[
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
          ].map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#81798c]">
                {item}
              </span>

              <span className="text-[#7c3aed]">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="border-b border-[#ebe6f0] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
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

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7c3aed]">
                01 — About
              </p>

              <h2 className="max-w-[500px] text-[40px] font-medium leading-[1] tracking-[-0.045em] text-[#211b2b] sm:text-[56px] lg:text-[62px]">
                Designing with
                <br />

                <span className="font-serif italic font-normal text-[#7c3aed]">
                  purpose.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight}>
              <p className="max-w-[800px] text-[19px] leading-8 text-[#51495c] sm:text-[21px] sm:leading-9">
                I'm a Computer Science graduate and Web Developer focused on
                building clean, functional and responsive web experiences. I
                enjoy turning ideas and requirements into interfaces that are
                simple, intuitive and visually polished.
              </p>

              <p className="mt-8 max-w-[720px] text-[15px] leading-8 text-[#777080]">
                My work mainly revolves around React, JavaScript, Tailwind CSS
                and the MERN stack. I enjoy building responsive interfaces,
                reusable components and practical web applications that feel
                simple, intuitive and refined.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Frontend Development",
                  "React Applications",
                  "MERN Stack",
                  "Responsive Design",
                  "UI / UX",
                ].map((tag, index) => (
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
                    className="rounded-full border border-[#e5dff0] bg-[#faf9fc] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#6f687a] transition hover:border-[#a78bfa] hover:text-[#7c3aed]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="border-b border-[#ebe6f0] bg-[#faf9fc] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
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
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7c3aed]">
                02 — Skills
              </p>

              <h2 className="text-[46px] font-medium leading-[0.95] tracking-[-0.05em] text-[#211b2b] sm:text-[62px] lg:text-[68px]">
                My digital
                <br />

                <span className="font-serif italic font-normal text-[#7c3aed]">
                  toolkit.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeRight}
              className="max-w-[450px] text-[15px] leading-7 text-[#777080]"
            >
              A practical combination of frontend technologies, backend tools
              and development practices used to create modern web applications.
            </motion.p>
          </div>

          <div className="grid gap-x-16 gap-y-9 md:grid-cols-2">
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
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#51495c]">
                    {skill.name}
                  </span>

                  <span className="text-[11px] font-medium text-[#91899d]">
                    {skill.value}%
                  </span>
                </div>

                <div className="h-[3px] overflow-hidden rounded-full bg-[#e8e2ef]">
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
                    }}
                    className="h-full rounded-full bg-[#7c3aed]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="bg-white px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1450px]">

          {/* Header */}

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
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7c3aed]">
                03 — Selected Work
              </p>

              <h2 className="text-[46px] font-medium leading-[0.95] tracking-[-0.05em] text-[#211b2b] sm:text-[62px] lg:text-[76px]">
                Things I've
                <br />

                <span className="font-serif italic font-normal text-[#7c3aed]">
                  created.
                </span>
              </h2>
            </div>

            <p className="max-w-[400px] text-[15px] leading-7 text-[#777080]">
              A collection of web applications, interfaces and digital
              experiences built with modern technologies.
            </p>
          </motion.div>

          {/* Pinterest Grid */}

          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
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
                }}
                className="group mb-8 break-inside-avoid"
              >
                {/* Image */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-[24px] border border-[#e9e3ef] bg-[#faf9fc] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)]"
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

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-purple-900/0 transition duration-500 group-hover:bg-purple-900/20" />

                    {/* View Button */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white text-[#7c3aed] opacity-0 shadow-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <ExternalIcon />
                      </span>
                    </div>

                    {/* Number */}

                    <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] font-medium tracking-[0.2em] text-[#51495c]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Content */}

                <div className="px-1 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-[#211b2b] transition-colors group-hover:text-[#7c3aed]">
                      {project.title}
                    </h3>

                    <span className="shrink-0 pt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#91899d]">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[450px] text-[13px] leading-6 text-[#777080]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#e7e0ee] bg-[#faf9fc] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.08em] text-[#81798c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.13em] text-[#7c3aed] transition hover:gap-3"
                  >
                    View Project
                    <ArrowIcon size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* GitHub */}

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
            }}
            className="mt-20 flex flex-col justify-between gap-7 border-t border-[#e9e4f0] pt-8 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-[21px] font-medium text-[#40374a]">
                More work lives on GitHub.
              </p>

              <p className="mt-2 text-[13px] text-[#8a8293]">
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
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7c3aed]"
            >
              Visit GitHub
              <ArrowIcon size={15} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="border-y border-[#ebe6f0] bg-[#faf9fc] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
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

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7c3aed]">
                04 — Experience
              </p>

              <h2 className="text-[46px] font-medium leading-[0.95] tracking-[-0.05em] text-[#211b2b] sm:text-[62px] lg:text-[68px]">
                Where I've
                <br />

                <span className="font-serif italic font-normal text-[#7c3aed]">
                  worked.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight}>

              {/* Experience 1 */}

              <div className="border-t border-[#ddd6e5] py-9">
                <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#91899d]">
                    2024 — 2025
                  </p>

                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#211b2b]">
                          Junior Web Developer
                        </h3>

                        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7c3aed]">
                          DigiCaptis
                        </p>
                      </div>

                      <span className="text-2xl text-[#c4b8d0]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#777080]">
                      Worked on responsive interfaces, website improvements,
                      frontend development tasks and practical web development
                      requirements across different projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}

              <div className="border-t border-[#ddd6e5] py-9">
                <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#91899d]">
                    2024 — Present
                  </p>

                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#211b2b]">
                          Freelance Web Developer
                        </h3>

                        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7c3aed]">
                          Independent
                        </p>
                      </div>

                      <span className="text-2xl text-[#c4b8d0]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#777080]">
                      Building and improving websites, documentation pages,
                      membership features, digital products and responsive web
                      interfaces for different projects and client
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#ddd6e5]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
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
          <div className="relative overflow-hidden rounded-[35px] border border-[#e6dff0] bg-[#faf8ff] px-7 py-16 shadow-[0_25px_80px_rgba(124,58,237,0.08)] sm:px-12 lg:px-20 lg:py-24">

            {/* Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-purple-200/40 blur-[100px]" />

            <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7c3aed]">
                  05 — Let's Connect
                </p>

                <h2 className="max-w-[900px] text-[46px] font-medium leading-[0.94] tracking-[-0.05em] text-[#211b2b] sm:text-[64px] lg:text-[78px]">
                  Have an idea?
                  <br />

                  <span className="font-serif italic font-normal text-[#7c3aed]">
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-8 max-w-[560px] text-[15px] leading-7 text-[#777080]">
                  I'm open to web development opportunities, freelance
                  projects and interesting collaborations.
                </p>
              </div>

              {/* IMPORTANT:
                  Replace YOUR_EMAIL@gmail.com with your actual email.
              */}

              <motion.a
                href="mailto:YOUR_EMAIL@gmail.com?subject=Project%20Inquiry"
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group flex w-fit items-center gap-4 rounded-full bg-[#7c3aed] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-xl shadow-purple-200 transition hover:bg-[#6d28d9]"
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

            {/* Social Links */}

            <div className="relative mt-16 flex flex-wrap gap-3 border-t border-[#e5deed] pt-8">

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="https://github.com/CodingSchema22"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#ddd5e8] bg-white px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#71697d] transition hover:border-[#a78bfa] hover:text-[#7c3aed]"
              >
                GitHub ↗
              </motion.a>

              {/* Replace with your LinkedIn URL */}

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="#"
                className="rounded-full border border-[#ddd5e8] bg-white px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#71697d] transition hover:border-[#a78bfa] hover:text-[#7c3aed]"
              >
                LinkedIn ↗
              </motion.a>

              <span className="rounded-full border border-[#ddd5e8] bg-white px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#71697d]">
                Lahore, Pakistan
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#e9e4f0] bg-[#faf9fc] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#91899d]">
            © 2026 Ghulam Fatima. All rights reserved.
          </p>

          <button
            onClick={() => scrollTo("home")}
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#71697d] transition hover:text-[#7c3aed]"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}