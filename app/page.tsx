"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white">

    
{/* ================= NAVBAR ================= */}
<nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/75 backdrop-blur-xl">

  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

    {/* NAME */}
    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="text-10xl font-extrabold tracking-tight text-white transition duration-300 hover:text-blue-400 md:text-4xl"
    >
      Manjoor Ahmad
    </a>

    {/* DESKTOP MENU */}
    <div className="hidden items-center gap-3 md:flex">

      <a
        href="#home"
        className="rounded-lg px-4 py-2 text-[15px] font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
      >
        Home
      </a>

      <a
        href="#about"
        className="rounded-lg px-4 py-2 text-[15px] font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
      >
        About
      </a>

      <a
        href="#skills"
        className="rounded-lg px-4 py-2 text-[15px] font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="rounded-lg px-4 py-2 text-[15px] font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="ml-2 rounded-lg bg-white px-6 py-2.5 text-[15px] font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
      >
        Contact
      </a>

    </div>


    {/* MOBILE MENU */}
    <div className="md:hidden">

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-lg border border-gray-800 px-3 py-2 text-2xl text-white transition hover:border-gray-600"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute right-6 top-[76px] w-52 rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-2xl">

          <div className="flex flex-col gap-2">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-white px-4 py-3 text-center font-semibold text-black transition hover:bg-gray-200"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </div>

  </div>
</nav>




      {/* HERO YAHAN SE START HOGA */}
      
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 py-24 text-white"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

  {/* Subtle grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.07]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "50px 50px",
    }}
  />

  {/* Main Hero */}
  <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">

    {/* LEFT — Content */}
<div className="text-center md:text-left">

  {/* Small heading */}
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
    UI/UX Designer • MERN Developer
  </p>

  {/* Name */}
  <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
    Manjoor Ahmad
  </h1>

  {/* Description */}
  <p className="mb-9 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
    I design modern digital experiences and build fast,
    responsive web applications with clean and scalable code.
  </p>

  {/* Buttons */}
  <div className="flex flex-col gap-4 sm:flex-row md:justify-start">

    <a
      href="#projects"
      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
    >
      View My Work
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>

    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
    >
      Let's Talk
    </a>

  </div>

  {/* Tech badges */}
  <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
    {["Next.js", "React", "Node.js", "MongoDB", "Figma"].map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-gray-800 bg-white/[0.03] px-4 py-2 text-sm text-gray-500 transition duration-300 hover:border-gray-600 hover:text-white"
      >
        {tech}
      </span>
    ))}
  </div>

</div>

    {/* RIGHT — Premium Profile Photo */}
    <div className="flex justify-center md:justify-end">
      <div className="relative">

        {/* Outer rotating glow */}
        <div className="absolute -inset-8 animate-[spin_10s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.8),transparent,rgba(168,85,247,0.8),transparent)] blur-md" />

        {/* Outer ring */}
        <div className="absolute -inset-5 animate-[spin_14s_linear_infinite_reverse] rounded-full border border-blue-400/40" />

        {/* Moving light dots */}
        <div className="absolute -inset-7 animate-[spin_6s_linear_infinite] rounded-full">

          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_8px_rgba(59,130,246,0.5)]" />

          <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_8px_rgba(168,85,247,0.5)]" />

        </div>

        {/* Soft glow behind photo */}
        <div className="absolute inset-0 scale-90 rounded-full bg-blue-500/30 blur-3xl" />

        {/* Photo */}
        <div className="relative h-72 w-72 overflow-hidden rounded-full border border-gray-600 bg-gray-900 p-2 shadow-2xl shadow-blue-500/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">

          <img
            src="/profile.jpg"
            alt="Manjoor Ahmad"
            className="h-full w-full rounded-full object-cover"
          />

        </div>

        {/* Inner glowing border */}
        <div className="pointer-events-none absolute inset-2 rounded-full border border-white/10" />

      </div>
    </div>

  </div>
</section>
             <section
  id="about"
  className="relative overflow-hidden bg-gray-950 px-6 py-28 text-white"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Section title */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        About Me
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
        A little about me
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-gray-500">
        A designer and developer focused on creating meaningful
        digital experiences.
      </p>
    </div>

    {/* Main card */}
    <div className="grid overflow-hidden rounded-[2rem] border border-gray-800 bg-white/[0.02] lg:grid-cols-2">

      {/* ================= PHOTO AREA ================= */}
      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden">

        {/* Blue background glow */}
        <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

        {/* Purple background glow */}
        <div className="absolute -right-10 top-10 h-60 w-60 rounded-full bg-purple-500/10 blur-[100px]" />

        {/* Outer rotating glow */}
        <div className="absolute h-[440px] w-[440px] animate-[spin_18s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.5),transparent,rgba(168,85,247,0.5),transparent)] blur-sm" />

        {/* Outer dashed ring */}
        <div className="absolute h-[410px] w-[410px] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-blue-400/30" />

        {/* Inner ring */}
        <div className="absolute h-[370px] w-[370px] rounded-full border border-purple-400/20" />

        {/* Small glowing dots */}
        <span className="absolute left-[18%] top-[22%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(59,130,246,0.45)]" />

        <span className="absolute right-[17%] top-[30%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_5px_rgba(168,85,247,0.45)]" />

        <span className="absolute bottom-[20%] left-[22%] h-2 w-2 animate-pulse rounded-full bg-blue-300 shadow-[0_0_20px_5px_rgba(59,130,246,0.4)]" />

        {/* Photo card */}
        <div className="group relative z-10 h-[400px] w-[310px] overflow-hidden rounded-[2rem] border border-gray-700 bg-gray-900 p-2 shadow-2xl shadow-blue-500/20 transition duration-500 hover:-translate-y-2 hover:border-gray-500 sm:h-[440px] sm:w-[340px]">

          <img
            src="/profile.jpg"
            alt="Manjoor Ahmad"
            className="h-full w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Dark gradient */}
          <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Photo information */}
          <div className="absolute bottom-8 left-8">
            <p className="text-sm font-medium text-gray-300">
              UI/UX Designer
            </p>

            <p className="mt-1 text-2xl font-semibold text-white">
              Manjoor Ahmad
            </p>
          </div>

        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

        <span className="mb-5 text-5xl leading-none text-blue-400">
          “
        </span>

        <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
          Turning ideas into
          <span className="text-gray-500">
            {" "}digital experiences.
          </span>
        </h3>

        <p className="mb-6 text-lg leading-8 text-gray-400">
          I am a UI/UX Designer and MERN Full Stack Developer
          passionate about creating clean, modern and user-friendly
          digital products.
        </p>

        <p className="mb-10 leading-8 text-gray-500">
          I enjoy combining thoughtful design with modern development
          to build responsive websites and applications that are
          simple to use and enjoyable to experience.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <p className="font-semibold text-white">
              UI/UX
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Figma Design
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">
            <p className="font-semibold text-white">
              MERN
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Full Stack
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <p className="font-semibold text-white">
              Responsive
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Web Design
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">
            <p className="font-semibold text-white">
              Next.js
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Modern Web
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>
        <section
  id="skills"
  className="relative overflow-hidden bg-black px-6 py-28 text-white"
>
  {/* Background effects */}
  <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Header */}
    <div className="mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-blue-400" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Expertise
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Tools I use to
          <span className="text-gray-600"> bring ideas to life.</span>
        </h2>

        <p className="max-w-xl leading-7 text-gray-500 md:justify-self-end">
          From interface design to full-stack development, I use
          modern tools and technologies to create clean and scalable
          digital products.
        </p>
      </div>
    </div>

    {/* Skills grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          name: "HTML",
          type: "Frontend",
          icon: "</>",
        },
        {
          name: "CSS",
          type: "Frontend",
          icon: "#",
        },
        {
          name: "Tailwind CSS",
          type: "Styling",
          icon: "TW",
        },
        {
          name: "JavaScript",
          type: "Language",
          icon: "JS",
        },
        {
          name: "React",
          type: "Frontend",
          icon: "⚛",
        },
        {
          name: "Next.js",
          type: "Framework",
          icon: "N",
        },
        {
          name: "Node.js",
          type: "Backend",
          icon: "JS",
        },
        {
          name: "Express.js",
          type: "Backend",
          icon: "EX",
        },
        {
          name: "MongoDB",
          type: "Database",
          icon: "DB",
        },
        {
          name: "UI/UX + Figma",
          type: "Design",
          icon: "✦",
        },
      ].map((skill, index) => (
        <div
          key={skill.name}
          className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600"
        >
          {/* Gradient hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-purple-500/[0.06] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">

            {/* Top */}
            <div className="mb-10 flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-800 bg-white/[0.04] text-lg font-bold text-blue-400 transition duration-500 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                {skill.icon}
              </div>

              <span className="text-xs text-gray-700">
                0{index + 1}
              </span>

            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold transition duration-300 group-hover:text-blue-300">
              {skill.name}
            </h3>

            {/* Type */}
            <p className="mt-2 text-sm text-gray-600">
              {skill.type}
            </p>

            {/* Skill line */}
            <div className="mt-7 h-1 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700 group-hover:w-3/4" />
            </div>

          </div>
        </div>
      ))}

    </div>

    {/* Bottom message */}
    <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-800 bg-white/[0.02] px-6 py-5 text-center sm:flex-row sm:text-left">

      <p className="text-gray-500">
        My toolkit keeps evolving with every project.
      </p>

      <span className="text-sm font-medium text-gray-300">
        Design • Develop • Deliver
      </span>

    </div>

  </div>
</section>
        <section
  id="projects"
  className="relative overflow-hidden bg-gray-950 px-6 py-28 text-white"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Header */}
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

    {/* ================= PROJECT SHOWCASE ================= */}
    <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

      {/* SCREENSHOT AREA */}
      <div className="relative flex items-center justify-center py-12">

        {/* Large ambient glow */}
        <div className="absolute h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-[110px]" />

        {/* Purple glow */}
        <div className="absolute -right-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />

        {/* Rotating outer ring */}
        <div className="absolute h-[560px] w-[560px] animate-[spin_25s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.45),transparent,rgba(168,85,247,0.45),transparent)] blur-sm" />

        {/* Dashed ring */}
        <div className="absolute h-[500px] w-[500px] animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dashed border-blue-400/20" />

        {/* Floating dots */}
        <span className="absolute left-[8%] top-[15%] h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(59,130,246,0.4)]" />

        <span className="absolute right-[8%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_6px_rgba(168,85,247,0.4)]" />

        <span className="absolute bottom-[15%] left-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.4)]" />

        {/* Screenshot frame */}
        <div className="group relative z-10 w-full max-w-2xl">

          {/* Browser top bar */}
          <div className="rounded-t-2xl border border-gray-700 bg-gray-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <div className="ml-4 h-6 flex-1 rounded-md border border-gray-800 bg-black/40" />
            </div>
          </div>

          {/* Screenshot */}
          <div className="overflow-hidden rounded-b-2xl border-x border-b border-gray-700 bg-black shadow-2xl shadow-blue-500/20 transition duration-700 group-hover:-translate-y-2 group-hover:shadow-blue-500/30">

            <img
              src="/gaming-gear.jpg"
              alt="Gaming Gear Marketplace project screenshot"
              className="block h-auto w-full object-contain transition duration-700 group-hover:scale-[1.02]"
            />

          </div>

        </div>
      </div>

      {/* ================= PROJECT INFO ================= */}
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

        {/* Features */}
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

        {/* Tech */}
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

        {/* Buttons */}
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
          <section
  id="contact"
  className="relative overflow-hidden bg-black px-6 py-32 text-white"
>
  {/* Premium background */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.09),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.06),transparent_35%)]" />

  {/* Soft center glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

  {/* Decorative glow orbs */}
  <div className="pointer-events-none absolute left-[8%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_25px_8px_rgba(59,130,246,0.25)]" />

  <div className="pointer-events-none absolute right-[12%] top-[30%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_25px_8px_rgba(168,85,247,0.25)]" />

  <div className="pointer-events-none absolute bottom-[18%] left-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_25px_7px_rgba(34,211,238,0.2)]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Top label */}
    <div className="mb-10 flex items-center justify-center gap-3">

      <span className="h-px w-10 bg-blue-400" />

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        Get In Touch
      </p>

      <span className="h-px w-10 bg-blue-400" />

    </div>

    {/* Main heading */}
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

    {/* CTA */}
    <div className="mt-12 flex justify-center">

      <a
        href="mailto:manjoorahmad9170@gmail.com"
        className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-500 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-2xl hover:shadow-blue-500/20"
      >
        <span className="relative z-10">
          Start a conversation
        </span>

        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:translate-x-1">
          →
        </span>

      </a>

    </div>

    {/* Contact cards */}
    <div className="mt-20 grid gap-4 md:grid-cols-3">

      {/* Email */}
      <a
        href="mailto:manjoorahmad9170@gmail.com"
        className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-blue-500/40"
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

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

      {/* GitHub */}
      <a
        href="https://github.com/manjoorahmad"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-purple-500/40"
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />

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

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/manjoor-ahmad/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40"
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

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

    {/* Availability */}
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
            <footer className="relative overflow-hidden border-t border-gray-800 bg-black px-6 py-12 text-white">
  {/* Premium background glow */}
  <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

  <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[120px]" />

  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.06),transparent_45%)]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Main footer */}
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

      {/* Name / Role */}
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

      {/* Social Links */}
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

    {/* Divider */}
    <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

    {/* Bottom */}
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
    </main>
  );
}