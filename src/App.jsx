import React, { useState } from "react";
import { motion } from "framer-motion";

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
    title: "Personality Grooming Website",
    category: "Web Development",
    description:
      "A modern personality grooming platform designed with a clean and responsive interface for presenting grooming and self-improvement content.",
    image: "/images/personality-updation.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://vite-project-sigma-rose-77.vercel.app/",
  },
  {
    id: "04",
    title: "Job Information App",
    category: "React Application",
    description:
      "A responsive job information application that allows users to browse, search and explore job opportunities through an easy-to-use interface.",
    image: "/images/job-info.JPG",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://vite-project-tle8.vercel.app/",
  },
  {
    id: "05",
    title: "Headphones E-commerce Website",
    category: "E-commerce Website",
    description:
      "A modern headphones e-commerce website featuring product-focused layouts, responsive design and an engaging shopping interface.",
    image: "/images/head-phones website.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://headphoness-gold.vercel.app/",
  },
  {
    id: "06",
    title: "Job Portal",
    category: "Web Application",
    description:
      "A responsive job portal that enables users to discover job opportunities, explore job details and browse available positions through a clean interface.",
    image: "/images/job portal.JPG",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://online-job-pi.vercel.app/",
  },
];




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

/* =========================
   ANIMATION VARIANTS
========================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectCard = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
      strokeWidth="1.8"
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
      strokeWidth="1.8"
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
      strokeWidth="1.8"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaff] text-[#21172f] selection:bg-[#d8c5ff] selection:text-[#32145f]">

      {/* =========================
          NAVBAR
      ========================= */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full border-b border-purple-100/70 bg-[#fbfaff]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
          >
            <motion.span
              whileHover={{ rotate: 8 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24132f] text-sm font-bold text-white shadow-lg shadow-purple-200"
            >
              F
            </motion.span>

            <span className="text-[17px] font-semibold tracking-[-0.02em]">
              Fatima<span className="text-[#8b5cf6]">.</span>
            </span>
          </motion.button>

          <nav className="hidden items-center gap-9 md:flex">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[14px] font-medium text-[#766d82] transition hover:text-[#7c3aed]"
                >
                  {item}
                </motion.button>
              )
            )}
          </nav>

          <motion.button
            whileHover={{
              y: -2,
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(124,58,237,0.18)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-[#24132f] px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#7c3aed] md:block"
          >
            Let's Talk
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#24132f] md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </motion.button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-purple-100 bg-[#fbfaff] px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-sm font-medium text-[#655b72]"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* =========================
          HERO
      ========================= */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40"
      >
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#e8dcff] opacity-60 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-[#f0e9ff] opacity-80 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1380px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

            {/* HERO LEFT */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={fadeUp}
                className="mb-8 flex items-center gap-3"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-[1px] bg-[#8b5cf6]"
                />

                <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#806d99]">
                  Web Developer · Lahore
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-[850px] text-[58px] font-semibold leading-[0.95] tracking-[-0.055em] text-[#24152f] sm:text-[78px] lg:text-[104px]"
              >
                I design &
                <br />

                <motion.span
                  animate={{
                    color: ["#8b5cf6", "#a78bfa", "#8b5cf6"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="font-serif italic font-normal"
                >
                  build
                </motion.span>{" "}
                digital
                <br />
                experiences.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-9 max-w-[570px] text-[16px] leading-8 text-[#746a80] sm:text-[17px]"
              >
                I'm Fatima Shahzad, a Web Developer & MERN Stack Developer
                focused on creating modern, responsive and user-friendly web
                applications.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 18px 40px rgba(124,58,237,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-4 rounded-full bg-[#24132f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                >
                  Explore My Work

                  <motion.span
                    whileHover={{ x: 5 }}
                    className="transition"
                  >
                    <ArrowIcon />
                  </motion.span>
                </motion.button>

                <motion.button
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("contact")}
                  className="rounded-full border border-purple-200 bg-white px-7 py-4 text-sm font-medium text-[#4b3d58] transition hover:border-purple-400 hover:text-[#7c3aed]"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-14 flex items-center gap-8"
              >
                <div>
                  <p className="text-2xl font-semibold text-[#24132f]">
                    01+
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#94899f]">
                    Year Experience
                  </p>
                </div>

                <div className="h-10 w-px bg-purple-200" />

                <div>
                  <p className="text-2xl font-semibold text-[#24132f]">
                    06+
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#94899f]">
                    Featured Projects
                  </p>
                </div>

                <div className="h-10 w-px bg-purple-200" />

                <div>
                  <p className="text-2xl font-semibold text-[#24132f]">
                    MERN
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#94899f]">
                    Stack Developer
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* HERO RIGHT */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
            >
              <motion.div
                animate={{
                  rotate: [6, 10, 6],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 -top-7 z-20 flex h-24 w-24 rounded-full border border-purple-200 bg-white shadow-xl shadow-purple-100"
              >
                <div className="flex h-full w-full items-center justify-center text-center">
                  <div>
                    <div className="text-xl">✦</div>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-[#806d99]">
                      Creative
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.01,
                }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[38px] bg-[#eadfff] p-5 shadow-[0_30px_80px_rgba(104,72,150,0.14)] sm:p-7"
              >
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <div className="flex items-center justify-between border-b border-purple-100 px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#e4d7fa]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d6c4f3]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#c6acec]" />
                    </div>

                    <span className="text-[9px] font-medium uppercase tracking-widest text-[#a399ad]">
                      portfolio / 2026
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b90a5]">
                          Hello, I'm
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#27182f]">
                          Fatima Shahzad
                        </h3>
                      </div>

                      <motion.div
                        animate={{
                          rotate: [0, 8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eaff] text-lg"
                      >
                        F
                      </motion.div>
                    </div>

                    <div className="rounded-[22px] bg-[#f6f2ff] p-5">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-[#7c3aed]">
                          Available
                        </span>

                        <span className="text-xs text-[#a49aae]">
                          01
                        </span>
                      </div>

                      <p className="max-w-[250px] text-[25px] font-medium leading-tight tracking-[-0.03em] text-[#2a1b35]">
                        Turning ideas into beautiful web experiences.
                      </p>

                      <div className="mt-8 h-[1px] bg-purple-200" />

                      <div className="mt-5 flex flex-wrap gap-2">
                        {["React", "Node", "MongoDB", "UI/UX"].map(
                          (item, index) => (
                            <motion.span
                              key={item}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 1 + index * 0.1,
                              }}
                              whileHover={{ y: -2 }}
                              className="rounded-full border border-purple-100 bg-white px-3 py-1.5 text-[10px] text-[#756981]"
                            >
                              {item}
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mt-7 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a198a9]">
                          Based in
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#493a55]">
                          Lahore, Pakistan
                        </p>
                      </div>

                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                        className="text-3xl text-[#8b5cf6]"
                      >
                        ↗
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.6,
                }}
                className="absolute -bottom-6 -left-7 hidden rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-xl shadow-purple-100 sm:block"
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#9d92a7]">
                  Currently
                </p>

                <p className="mt-1 text-xs font-medium text-[#493953]">
                  Building with React
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          MARQUEE
      ========================= */}

      <div className="overflow-hidden border-y border-purple-100 bg-white">
        <motion.div
          animate={{ x: ["0%", "-35%"] }}
          transition={{
            duration: 18,
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
            "TAILWIND CSS",
            "WEB DEVELOPMENT",
            "REACT",
            "JAVASCRIPT",
            "MERN STACK",
            "UI / UX",
            "TAILWIND CSS",
            "WEB DEVELOPMENT",
          ].map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#8b7e97]">
                {item}
              </span>

              <span className="text-[#a987e7]">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[1380px]"
        >
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b5cf6]">
                01 — About Me
              </p>

              <h2 className="max-w-[400px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#26172f] sm:text-5xl">
                A developer who cares about{" "}
                <span className="font-serif italic font-normal text-[#8b5cf6]">
                  details.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight} className="max-w-[720px]">
              <p className="text-xl leading-9 text-[#51465b] sm:text-2xl sm:leading-10">
                I'm a Computer Science graduate and Web Developer who enjoys
                turning ideas into clean, functional and visually engaging
                digital experiences.
              </p>

              <p className="mt-7 text-[15px] leading-8 text-[#82768c]">
                My work mainly revolves around React, JavaScript, Tailwind CSS
                and the MERN stack. I enjoy building responsive interfaces,
                reusable components and practical web applications that feel
                simple and intuitive to use.
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
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="rounded-full border border-purple-100 bg-[#f7f3ff] px-4 py-2.5 text-xs font-medium text-[#6f6180]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className="bg-[#f2ecff] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mx-auto max-w-[1380px]"
        >
          <motion.div
            variants={fadeUp}
            className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b5cf6]">
                02 — Skills
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#281832] sm:text-6xl">
                Tools I use to
                <br />

                <span className="font-serif italic font-normal text-[#8b5cf6]">
                  make things.
                </span>
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-7 text-[#7c7187]">
              A combination of frontend technologies, backend tools and
              development practices I use to build modern web applications.
            </p>
          </motion.div>

          <div className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
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
                  duration: 0.6,
                  delay: index * 0.07,
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#42334d]">
                    {skill.name}
                  </span>

                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + index * 0.07,
                    }}
                    className="text-xs text-[#91849c]"
                  >
                    {skill.value}%
                  </motion.span>
                </div>

                <div className="h-[5px] overflow-hidden rounded-full bg-white">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-[#8b5cf6]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}
{/* =========================================================
    PROJECTS — SIMPLE & CLEAN
========================================================= */}

<section
  id="projects"
  className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
>
  <div className="mx-auto max-w-[1200px]">

    {/* =========================
        HEADER
    ========================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        My Projects
      </span>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Things I've built
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
        A collection of web applications and digital experiences
        built with modern technologies and clean user interfaces.
      </p>
    </motion.div>


    {/* =========================
        PROJECT GRID
    ========================= */}

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={projectContainer}
      className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
    >

      {projects.map((project, index) => (

        <motion.article
          key={project.id}
          variants={projectCard}
          className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

          {/* =========================
              IMAGE
          ========================= */}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden bg-blue-50"
          >
            <div className="aspect-[16/10] overflow-hidden">

              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />

            </div>
          </a>


          {/* =========================
              CONTENT
          ========================= */}

          <div className="p-6">

            {/* Number + Category */}

            <div className="mb-3 flex items-center justify-between">

              <span className="text-xs font-semibold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                {project.category}
              </span>

            </div>


            {/* Title */}

            <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {project.title}
            </h3>


            {/* Description */}

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {project.description}
            </p>


            {/* Technologies */}

            <div className="mt-5 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
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
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
            >
              View Project
              <span>↗</span>
            </a>

          </div>

        </motion.article>

      ))}

    </motion.div>


    {/* =========================
        GITHUB
    ========================= */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:flex-row sm:p-8"
    >

      <div>
        <h3 className="text-xl font-bold text-gray-900">
          More projects on GitHub
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Explore more of my code, experiments and development work.
        </p>
      </div>


      <motion.a
        href="https://github.com/CodingSchema22"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
      >
        GitHub
        <span>↗</span>
      </motion.a>

    </motion.div>

  </div>
</section>



      {/* =========================
          EXPERIENCE
      ========================= */}

      <section
        id="experience"
        className="bg-[#f2ecff] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto max-w-[1380px]"
        >
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">

            <motion.div variants={fadeLeft}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b5cf6]">
                04 — Experience
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#281832] sm:text-5xl">
                Where I've
                <br />

                <span className="font-serif italic font-normal text-[#8b5cf6]">
                  worked.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeRight}>
              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="border-t border-purple-200 py-8"
              >
                <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#978ba1]">
                    2024 — 2025
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1b36]">
                      Junior Web Developer
                    </h3>

                    <p className="mt-1 text-sm text-[#8b7e95]">
                      DigiCaptis
                    </p>

                    <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#766b81]">
                      Worked on web development tasks, responsive interfaces,
                      website improvements and practical frontend development.
                    </p>
                  </div>

                  <motion.span
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="hidden h-9 w-9 items-center justify-center rounded-full bg-white text-[#8b5cf6] md:flex"
                  >
                    ↗
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="border-t border-purple-200 py-8"
              >
                <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#978ba1]">
                    2024 — Present
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1b36]">
                      Freelance Web Developer
                    </h3>

                    <p className="mt-1 text-sm text-[#8b7e95]">
                      Independent
                    </p>

                    <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#766b81]">
                      Building and improving websites, documentation pages,
                      membership features, digital products and responsive web
                      interfaces for different projects.
                    </p>
                  </div>

                  <motion.span
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="hidden h-9 w-9 items-center justify-center rounded-full bg-white text-[#8b5cf6] md:flex"
                  >
                    ↗
                  </motion.span>
                </div>
              </motion.div>

              <div className="border-t border-purple-200" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-[1380px]"
        >
          <div className="relative overflow-hidden rounded-[38px] bg-[#24132f] px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-20">

            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#8b5cf6] opacity-30 blur-3xl"
            />

            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-40 left-20 h-80 w-80 rounded-full bg-[#c5a6ff] opacity-10 blur-3xl"
            />

            <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bba1e9]"
                >
                  05 — Let's Connect
                </motion.p>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                  }}
                  className="max-w-[850px] text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl"
                >
                  Have an idea?
                  <br />

                  <span className="font-serif italic font-normal text-[#c7a9ff]">
                    Let's build it.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35,
                  }}
                  className="mt-7 max-w-[540px] text-sm leading-7 text-[#c5bacd]"
                >
                  I'm open to web development opportunities, freelance
                  projects and interesting collaborations.
                </motion.p>
              </div>

              <motion.button
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: "0 20px 45px rgba(255,255,255,0.12)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  window.location.href =
                    "mailto:your-email@example.com?subject=Project%20Inquiry";
                }}
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#2a1834]"
              >
                Get In Touch

                <motion.span
                  whileHover={{ x: 5 }}
                  className="transition"
                >
                  <ArrowIcon />
                </motion.span>
              </motion.button>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className="relative mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-8"
            >
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/CodingSchema22"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-5 py-2.5 text-xs text-[#c7bdcf] transition hover:border-white/30 hover:text-white"
              >
                GitHub ↗
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="rounded-full border border-white/10 px-5 py-2.5 text-xs text-[#c7bdcf] transition hover:border-white/30 hover:text-white"
              >
                LinkedIn ↗
              </motion.a>

              <span className="rounded-full border border-white/10 px-5 py-2.5 text-xs text-[#c7bdcf]">
                Lahore, Pakistan
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-purple-100 bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#91869a]">
            © 2026 Fatima Shahzad. All rights reserved.
          </p>

          <motion.button
            whileHover={{
              y: -3,
            }}
            onClick={() => scrollTo("home")}
            className="text-xs font-medium text-[#7c3aed] transition hover:text-[#24132f]"
          >
            Back to top ↑
          </motion.button>
        </div>
      </footer>
    </div>
  );
}

export default App;