"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Name */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
            onClick={() => setMenuOpen(false)}
          >
            Manjoor Ahmad
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-gray-300 transition hover:text-white">
              Home
            </a>

            <a href="#about" className="text-sm text-gray-300 transition hover:text-white">
              About
            </a>

            <a href="#skills" className="text-sm text-gray-300 transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="text-sm text-gray-300 transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="text-sm text-gray-300 transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
              <div className="absolute right-6 top-16 w-48 rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-xl">
                <div className="flex flex-col gap-4">

                  <a
                    href="#home"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    Home
                  </a>

                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    About
                  </a>

                  <a
                    href="#skills"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    Skills
                  </a>

                  <a
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    Projects
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    Contact
                  </a>

                </div>
              </div>
            )}
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-black text-white"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-14 md:grid-cols-2">

            {/* Text */}
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Manjoor Ahmad
              </h1>

              <h2 className="mt-5 text-xl font-medium text-gray-300 sm:text-2xl">
                MERN Stack Developer
                <span className="mx-2 text-gray-700">•</span>
                UI/UX Designer
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                I build modern, responsive and user-friendly web
                experiences using modern technologies and thoughtful design.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#projects"
                  className="rounded-xl bg-white px-7 py-3.5 text-center font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-gray-700 px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Me
                </a>

              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center md:justify-end">

              <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

              <div className="absolute h-64 w-64 animate-pulse rounded-full border border-blue-400/20" />

              <div className="absolute h-80 w-80 rounded-full border border-purple-400/10" />

              <div className="relative z-10 overflow-hidden rounded-[2rem] border border-gray-700 bg-gray-900 p-2 shadow-2xl shadow-blue-500/10">
                <img
                  src="/profile.jpg"
                  alt="Manjoor Ahmad"
                  className="h-[380px] w-[300px] rounded-[1.5rem] object-cover sm:h-[440px] sm:w-[350px]"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-gray-950 px-6 py-28 text-white"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mb-12 text-4xl font-bold md:text-5xl">
            A little about me
          </h2>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
              <img
                src="/profile.jpg"
                alt="Manjoor Ahmad"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>

              <p className="mb-6 text-lg leading-8 text-gray-300">
                I am a passionate MERN Stack Developer and UI/UX Designer
                focused on creating clean, modern and user-friendly digital
                experiences.
              </p>

              <p className="mb-6 text-lg leading-8 text-gray-400">
                I enjoy turning ideas into functional websites and interfaces
                using modern technologies and thoughtful design.
              </p>

              <p className="text-lg leading-8 text-gray-500">
                My goal is to build digital products that look professional,
                perform smoothly and provide a great user experience.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="relative overflow-hidden bg-black px-6 py-28 text-white"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mb-12 max-w-2xl text-lg text-gray-500">
            Technologies and tools I use to design and develop modern web
            applications.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            {[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "UI/UX + Figma",
            ].map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-gray-600 hover:bg-gray-900"
              >
                <div className="mb-5 h-1 w-8 rounded-full bg-gray-700 transition group-hover:w-14 group-hover:bg-blue-400" />

                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Professional skill
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative overflow-hidden bg-gray-950 px-6 py-28 text-white"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Featured Project
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Gaming Gear Marketplace
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
              A complete full-stack e-commerce experience designed and
              developed from scratch.
            </p>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Screenshot */}
            <div className="relative flex items-center justify-center py-12">

              <div className="absolute h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-[110px]" />

              <div className="absolute -right-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />

              <div className="absolute h-[560px] w-[560px] animate-[spin_25s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.45),transparent,rgba(168,85,247,0.45),transparent)] blur-sm" />

              <div className="absolute h-[500px] w-[500px] animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dashed border-blue-400/20" />

              <span className="absolute left-[8%] top-[15%] h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(59,130,246,0.4)]" />

              <span className="absolute right-[8%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_6px_rgba(168,85,247,0.4)]" />

              <span className="absolute bottom-[15%] left-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.4)]" />

              <div className="group relative z-10 w-full max-w-2xl">

                <div className="rounded-t-2xl border border-gray-700 bg-gray-900 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />

                    <div className="ml-4 h-6 flex-1 rounded-md border border-gray-800 bg-black/40" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-b-2xl border-x border-b border-gray-700 bg-black shadow-2xl shadow-blue-500/20 transition duration-700 group-hover:-translate-y-2">
                  <img
                    src="/gaming-gear.jpg"
                    alt="Gaming Gear Marketplace"
                    className="block h-auto w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>

              </div>
            </div>

            {/* Project Info */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Full Stack Web Application
              </div>

              <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
                Gaming Gear
                <span className="block text-gray-500">
                  Marketplace
                </span>
              </h3>

              <p className="mb-8 text-lg leading-8 text-gray-400">
                A modern gaming gear marketplace built using Next.js,
                React, Tailwind CSS, Node.js, Express.js and MongoDB.
                The application provides a complete shopping experience
                from browsing products to placing orders.
              </p>

              <div className="mb-8 space-y-3">

                {[
                  "Product management & dynamic product details",
                  "Search and category filtering",
                  "Cart and checkout functionality",
                  "MongoDB order management",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-sm text-blue-400">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <div className="mb-9 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-700 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition hover:border-gray-500 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <a
                  href="https://my-portfolio-jet-eta-84fkmqgyke.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
                >
                  Live Demo
                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/manjoorahmad/gaming-gear-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  View GitHub
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-black px-6 py-32 text-white"
      >

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.09),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.06),transparent_35%)]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

        <div className="pointer-events-none absolute left-[8%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_25px_8px_rgba(59,130,246,0.25)]" />

        <div className="pointer-events-none absolute right-[12%] top-[30%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_25px_8px_rgba(168,85,247,0.25)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Get In Touch
            </p>

            <span className="h-px w-10 bg-blue-400" />
          </div>

          <div className="text-center">

            <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Let's build something
              <span className="block text-gray-600">
                amazing together.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-500">
              Have an idea, project or opportunity?
              I'm always open to meaningful conversations and
              exciting collaborations.
            </p>

          </div>

          <div className="mt-12 flex justify-center">

            <a
              href="mailto:manjoorahmad9170@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-500 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span>
                Start a conversation
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">

            <a
              href="mailto:manjoorahmad9170@gmail.com"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-blue-500/40"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-white/[0.04] text-blue-400">
                  @
                </div>

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Email
                </p>

                <p className="mt-2 break-all text-sm font-medium text-gray-300 group-hover:text-white">
                  manjoorahmad9170@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/manjoorahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-purple-500/40"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-white/[0.04] text-lg text-purple-400">
                  GH
                </div>

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  GitHub
                </p>

                <p className="mt-2 text-sm font-medium text-gray-300 group-hover:text-white">
                  github.com/manjoorahmad
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/manjoor-ahmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-white/[0.04] text-sm font-bold text-cyan-400">
                  in
                </div>

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm font-medium text-gray-300 group-hover:text-white">
                  linkedin.com/in/manjoor-ahmad
                </p>
              </div>
            </a>

          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-gray-800 bg-white/[0.02] px-5 py-2.5 backdrop-blur">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-sm text-gray-500">
                Open to opportunities
              </span>

            </div>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-gray-800 bg-black px-6 py-12 text-white">

        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.06),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div className="text-center md:text-left">

              <p className="text-xl font-bold tracking-tight">
                Manjoor Ahmad
              </p>

              <p className="mt-2 text-sm text-gray-500">
                MERN Stack Developer
                <span className="mx-2 text-gray-700">•</span>
                UI/UX Designer
              </p>

            </div>

            <div className="flex items-center gap-3">

              <a
                href="https://github.com/manjoorahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-800 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/[0.06] hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/manjoor-ahmad/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-800 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/[0.06] hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:manjoorahmad9170@gmail.com"
                className="rounded-full border border-gray-800 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/[0.06] hover:text-white"
              >
                Email
              </a>

            </div>

          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-gray-700">
              © 2026 Manjoor Ahmad. All rights reserved.
            </p>

            <p className="text-xs text-gray-700">
              Designed & Built with passion.
            </p>

          </div>

        </div>
      </footer>


      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </main>
  );
}