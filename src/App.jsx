
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
    size: "large",
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
    size: "tall",
  },
  {
    id: "03",
    title: "Personality Grooming",
    category: "Web Development",
    description:
      "A modern personality grooming platform designed with a clean and responsive interface.",
    image: "/images/personality-updation.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://vite-project-sigma-rose-77.vercel.app/",
    size: "medium",
  },
  {
    id: "04",
    title: "Job Information App",
    category: "React Application",
    description:
      "A responsive job information application for browsing, searching and exploring job opportunities.",
    image: "/images/job-info.JPG",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://vite-project-tle8.vercel.app/",
    size: "medium",
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
    size: "large",
  },
  {
    id: "06",
    title: "Job Portal",
    category: "Web Application",
    description:
      "A responsive job portal that enables users to discover job opportunities and explore job details.",
    image: "/images/job portal.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://online-job-pi.vercel.app/",
    size: "medium",
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
    y: 45,
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
      strokeWidth="1.5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
    <div className="min-h-screen overflow-x-hidden bg-[#11100f] text-[#eee9df] selection:bg-[#b89b6a] selection:text-[#11100f]">

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
        className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#11100f]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[78px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}

          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.03 }}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b89b6a]/50 bg-[#b89b6a] text-xs font-bold text-[#151310]">
              GF
            </span>

            <span className="text-[16px] font-medium tracking-tight text-[#f1ede4]">
              Ghulam Fatima
              <span className="text-[#b89b6a]">.</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-9 md:flex">
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
                  className="text-[12px] uppercase tracking-[0.16em] text-[#9b968d] transition hover:text-[#e9dfce]"
                >
                  {item}
                </motion.button>
              )
            )}
          </nav>

          {/* Contact Button */}

          <motion.button
            whileHover={{
              y: -2,
              backgroundColor: "#b89b6a",
              color: "#151310",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full border border-[#b89b6a]/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] text-[#d8c8ae] transition md:block"
          >
            Let's Talk
          </motion.button>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#eee9df] md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/[0.07] bg-[#151412] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-xs uppercase tracking-[0.2em] text-[#aaa399]"
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

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8a6f45]/[0.06] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1450px]">

          <div className="grid items-center gap-20 lg:grid-cols-[1.25fr_0.75fr]">

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
                <span className="h-px w-12 bg-[#b89b6a]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9e978c]">
                  Web Developer · Lahore
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-[1000px] text-[58px] font-medium leading-[0.88] tracking-[-0.065em] text-[#f0ebe1] sm:text-[82px] lg:text-[112px]"
              >
                Digital
                <br />

                <span className="font-serif italic font-normal text-[#b89b6a]">
                  experiences
                </span>

                <br />

                with intention.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-10 max-w-[560px] text-[15px] leading-8 text-[#918b82] sm:text-[16px]"
              >
                I'm Ghulam Fatima, a Web Developer & MERN Stack Developer
                creating thoughtful, responsive and visually refined digital
                experiences.
              </motion.p>

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
                  className="flex items-center gap-4 rounded-full bg-[#e8e1d5] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#171512] transition hover:bg-[#b89b6a]"
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
                  className="rounded-full border border-white/15 px-7 py-4 text-xs uppercase tracking-[0.12em] text-[#bdb7ad] transition hover:border-[#b89b6a] hover:text-[#b89b6a]"
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
                  <p className="text-2xl font-medium text-[#eee9df]">01+</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#777169]">
                    Year Experience
                  </p>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-medium text-[#eee9df]">06+</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#777169]">
                    Projects
                  </p>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-medium text-[#eee9df]">MERN</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#777169]">
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
                className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#1a1816] p-3 shadow-2xl"
              >

                <div className="overflow-hidden rounded-[27px] border border-white/[0.06] bg-[#211f1c]">

                  {/* Browser top */}

                  <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#625d54]" />
                      <span className="h-2 w-2 rounded-full bg-[#777066]" />
                      <span className="h-2 w-2 rounded-full bg-[#9a8b72]" />
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#716b62]">
                      portfolio / 2026
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">

                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#817a70]">
                      Creative Developer
                    </p>

                    <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-[#e9e3d9]">
                      Ghulam
                      <br />
                      <span className="font-serif italic text-[#b89b6a]">
                        Fatima.
                      </span>
                    </h2>

                    <div className="mt-9 h-px bg-white/[0.08]" />

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-white/[0.06] bg-[#181715] p-4">
                        <p className="text-[9px] uppercase tracking-widest text-[#716b62]">
                          Focus
                        </p>

                        <p className="mt-3 text-sm text-[#cfc8bc]">
                          React
                        </p>

                        <p className="mt-1 text-sm text-[#cfc8bc]">
                          MERN
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/[0.06] bg-[#181715] p-4">
                        <p className="text-[9px] uppercase tracking-widest text-[#716b62]">
                          Based
                        </p>

                        <p className="mt-3 text-sm text-[#cfc8bc]">
                          Lahore
                        </p>

                        <p className="mt-1 text-sm text-[#cfc8bc]">
                          Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-[#b89b6a]/20 bg-[#b89b6a]/[0.07] p-5">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-[#a99573]">
                        Currently
                      </p>

                      <p className="mt-3 text-lg leading-snug text-[#ddd5c7]">
                        Turning ideas into beautiful web experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}

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
                className="absolute -right-5 -top-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#b89b6a]/30 bg-[#191816] shadow-xl"
              >
                <div className="text-center">
                  <p className="text-xl text-[#b89b6a]">✦</p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#a69d90]">
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

      <div className="overflow-hidden border-y border-white/[0.07] bg-[#171614]">
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
              <span className="text-[10px] font-medium tracking-[0.28em] text-[#817b72]">
                {item}
              </span>

              <span className="text-[#b89b6a]">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[1450px]"
        >
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-32">

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#b89b6a]">
                01 — About
              </p>

              <h2 className="max-w-[450px] text-4xl font-medium leading-[1] tracking-[-0.05em] text-[#e9e3d9] sm:text-6xl">
                Designing with
                <br />

                <span className="font-serif italic font-normal text-[#b89b6a]">
                  purpose.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight}>
              <p className="max-w-[800px] text-xl leading-9 text-[#b6afa4] sm:text-2xl sm:leading-10">
                I'm a Computer Science graduate and Web Developer who enjoys
                turning ideas into clean, functional and visually engaging
                digital experiences.
              </p>

              <p className="mt-8 max-w-[720px] text-[14px] leading-8 text-[#777169]">
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
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full border border-white/10 bg-[#181715] px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-[#999187] transition hover:border-[#b89b6a]/50 hover:text-[#d2c2a8]"
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
        className="border-b border-white/[0.06] bg-[#171614] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-[1450px]"
        >

          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#b89b6a]">
                02 — Skills
              </p>

              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#e9e3d9] sm:text-7xl">
                My digital
                <br />

                <span className="font-serif italic font-normal text-[#b89b6a]">
                  toolkit.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeRight}
              className="max-w-[420px] text-sm leading-7 text-[#777169]"
            >
              A practical combination of frontend technologies, backend tools
              and development practices used to create modern web applications.
            </motion.p>
          </div>

          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">

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
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#b9b1a6]">
                    {skill.name}
                  </span>

                  <span className="text-[10px] text-[#716b62]">
                    {skill.value}%
                  </span>
                </div>

                <div className="h-[2px] overflow-hidden bg-[#2a2824]">
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
                    className="h-full bg-[#b89b6a]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          PROJECTS — PINTEREST / MASONRY STYLE
      ===================================================== */}

      <section
        id="projects"
        className="bg-[#11100f] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
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
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#b89b6a]">
                03 — Selected Work
              </p>

              <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#eee9df] sm:text-7xl lg:text-8xl">
                Things I've
                <br />

                <span className="font-serif italic font-normal text-[#b89b6a]">
                  created.
                </span>
              </h2>
            </div>

            <p className="max-w-[380px] text-sm leading-7 text-[#777169]">
              A collection of web applications, interfaces and digital
              experiences built with modern technologies.
            </p>
          </motion.div>

          {/* Pinterest Masonry */}

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
                className="group mb-6 break-inside-avoid"
              >

                {/* Image */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#191816]"
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

                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/45" />

                    {/* View */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9e1d4] text-[#151310] opacity-0 transition duration-500 group-hover:opacity-100">
                        <ExternalIcon />
                      </span>
                    </motion.div>

                    {/* Number */}

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] tracking-[0.2em] text-[#ddd5c8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Content */}

                <div className="px-1 pt-5">

                  <div className="flex items-center justify-between gap-4">

                    <h3 className="text-xl font-medium tracking-[-0.03em] text-[#e8e1d6] transition-colors group-hover:text-[#c8b18a]">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-[8px] uppercase tracking-[0.18em] text-[#69635b]">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[450px] text-[12px] leading-6 text-[#777169]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] px-3 py-1 text-[8px] uppercase tracking-[0.1em] text-[#817a70]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#b89b6a] transition hover:gap-3"
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
            className="mt-20 flex flex-col justify-between gap-7 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center"
          >

            <div>
              <p className="text-xl font-medium text-[#ddd5c9]">
                More work lives on GitHub.
              </p>

              <p className="mt-2 text-xs text-[#6e685f]">
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
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#b89b6a]"
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
        className="border-y border-white/[0.06] bg-[#171614] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
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
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#b89b6a]">
                04 — Experience
              </p>

              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#e8e1d7] sm:text-7xl">
                Where I've
                <br />

                <span className="font-serif italic font-normal text-[#b89b6a]">
                  worked.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight}>

              {/* Experience 1 */}

              <div className="border-t border-white/[0.1] py-9">

                <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#6f6960]">
                    2024 — 2025
                  </p>

                  <div>
                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <h3 className="text-2xl font-medium text-[#e7e0d6]">
                          Junior Web Developer
                        </h3>

                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b89b6a]">
                          DigiCaptis
                        </p>
                      </div>

                      <span className="text-2xl text-[#554f47]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 max-w-[600px] text-sm leading-7 text-[#777169]">
                      Worked on web development tasks, responsive interfaces,
                      website improvements and practical frontend development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}

              <div className="border-t border-white/[0.1] py-9">

                <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#6f6960]">
                    2024 — Present
                  </p>

                  <div>
                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <h3 className="text-2xl font-medium text-[#e7e0d6]">
                          Freelance Web Developer
                        </h3>

                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b89b6a]">
                          Independent
                        </p>
                      </div>

                      <span className="text-2xl text-[#554f47]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 max-w-[600px] text-sm leading-7 text-[#777169]">
                      Building and improving websites, documentation pages,
                      membership features, digital products and responsive web
                      interfaces for different projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.1]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
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

          <div className="relative overflow-hidden rounded-[35px] border border-white/[0.08] bg-[#1a1816] px-7 py-16 sm:px-12 lg:px-20 lg:py-24">

            {/* Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#b89b6a]/[0.08] blur-[100px]" />

            <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-[#b89b6a]">
                  05 — Let's Connect
                </p>

                <h2 className="max-w-[900px] text-5xl font-medium leading-[0.9] tracking-[-0.06em] text-[#eee9df] sm:text-7xl lg:text-8xl">
                  Have an idea?
                  <br />

                  <span className="font-serif italic font-normal text-[#b89b6a]">
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-8 max-w-[540px] text-sm leading-7 text-[#777169]">
                  I'm open to web development opportunities, freelance
                  projects and interesting collaborations.
                </p>
              </div>

              <motion.a
                href="mailto:your-email@example.com?subject=Project%20Inquiry"
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group flex w-fit items-center gap-4 rounded-full bg-[#e8e1d5] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#171512] transition hover:bg-[#b89b6a]"
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

            <div className="relative mt-16 flex flex-wrap gap-3 border-t border-white/[0.08] pt-8">

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="https://github.com/CodingSchema22"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.1] px-5 py-2.5 text-[9px] uppercase tracking-[0.15em] text-[#817a70] transition hover:border-[#b89b6a]/50 hover:text-[#b89b6a]"
              >
                GitHub ↗
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="#"
                className="rounded-full border border-white/[0.1] px-5 py-2.5 text-[9px] uppercase tracking-[0.15em] text-[#817a70] transition hover:border-[#b89b6a]/50 hover:text-[#b89b6a]"
              >
                LinkedIn ↗
              </motion.a>

              <span className="rounded-full border border-white/[0.1] px-5 py-2.5 text-[9px] uppercase tracking-[0.15em] text-[#817a70]">
                Lahore, Pakistan
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#0d0c0b] px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <p className="text-[9px] uppercase tracking-[0.15em] text-[#5f5a53]">
            © 2026 Ghulam Fatima. All rights reserved.
          </p>

          <button
            onClick={() => scrollTo("home")}
            className="text-[9px] uppercase tracking-[0.18em] text-[#8c8378] transition hover:text-[#b89b6a]"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
