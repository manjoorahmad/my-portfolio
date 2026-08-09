"use client";
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
          <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 text-white backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    
    <h1 className="text-2xl font-bold">
      Manjoor Ahmad
    </h1>

    <div className="hidden gap-8 md:flex">
      <a href="#home" className="hover:text-gray-400">Home</a>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#skills" className="hover:text-gray-400">Skills</a>
      <a href="#projects" className="hover:text-gray-400">Projects</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>

    <div className="md:hidden">
      <details className="relative">
        <summary className="cursor-pointer list-none text-2xl">
          ☰
        </summary>

        <div className="absolute right-0 mt-4 w-48 rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </details>
    </div>

  </div>
</nav>

      <section id="home" className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-10">
  <div className="max-w-4xl text-center">
    <p className="mb-4 text-lg text-gray-400">
      Hello, I'm
    </p>

    <h2 className="text-5xl md:text-7xl font-bold mb-6">
      Manjoor Ahmad
    </h2>

    <p className="text-xl md:text-2xl text-gray-300 mb-8">
      UI/UX Designer & MERN Full Stack Developer
    </p>

    <div className="flex justify-center gap-4">
      <a
        href="#projects"
        className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
      >
        My Work
      </a>

      <a
        href="#contact"
        className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
      >
        Contact Me
      </a>
        </div>
      </div>
    </div>
      </section>
                <section
  id="about"
  className="min-h-screen bg-gray-950 px-10 py-24 text-white"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
      About Me
    </p>

    <h2 className="mb-8 text-4xl font-bold md:text-5xl">
      A little about me
    </h2>

    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
  <img
    src="/profile.jpg"
    alt="Manjoor Ahmad"
    className="h-80 w-full object-cover object-[center_18%]"
  />
</div>
      </div>

      <div>
        <p className="mb-6 text-lg leading-8 text-gray-300">
          I am a passionate UI/UX Designer and MERN Full Stack Developer
          focused on creating clean, modern and user-friendly digital
          experiences.
        </p>

         <p className="text-lg leading-8 text-gray-300">
            I enjoy turning ideas into functional websites and interfaces
            using modern technologies and thoughtful design.
          </p>
         </div>
       </div>
     </div>
    </section>
                      <section
  id="skills"
  className="min-h-screen bg-black px-10 py-24 text-white"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
      My Skills
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Technologies I work with
    </h2>

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
        "UI/UX+Figma",
      ].map((skill) => (
        <div
          key={skill}
          className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center transition hover:-translate-y-1 hover:border-gray-500"
        >
          <h3 className="text-lg font-semibold">{skill}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
        <section
  id="projects"
  className="min-h-screen bg-gray-950 px-10 py-24 text-white"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
      My Work
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Featured Project
    </h2>

    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
      <div className="grid md:grid-cols-2">
        
       <div className="overflow-hidden bg-gray-800">
  <img
    src="/gaming-gear.jpg"
    alt="Gaming Gear Marketplace"
    className="h-full min-h-80 w-full object-contain object-center"
  />
</div>

        <div className="p-8 md:p-10">
          <p className="mb-3 text-sm text-gray-400">
            MERN / Next.js Project
          </p>

          <h3 className="mb-5 text-3xl font-bold">
            Gaming Gear Marketplace
          </h3>

          <p className="mb-6 leading-7 text-gray-300">
            A modern gaming gear marketplace built with Next.js, React,
            Tailwind CSS, Node.js, Express.js and MongoDB. The project
            includes product management, search, category filtering,
            cart, checkout and order management.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
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
                className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/manjoorahmad/gaming-gear-marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
          >
            View Project
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
<section
  id="contact"
  className="min-h-screen bg-black px-10 py-24 text-white"
>
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
      Contact
    </p>

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Let's Work Together
    </h2>

    <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-300">
      Have a project or opportunity in mind? Feel free to get in touch.
      I would love to discuss how we can work together.
    </p>

    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="mailto:manjoorahmad9170@gmail.com"
        className="rounded-lg bg-white px-7 py-3 font-semibold text-black hover:bg-gray-200"
      >
        Contact Me
      </a>

      <a
        href="https://github.com/manjoorahmad"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-black"
      >
        GitHub
      </a>
    </div>
  </div>
</section>
<footer className="border-t border-gray-800 bg-black px-10 py-8 text-center text-gray-400">
  <p>
    © 2026 Manjoor Ahmad. All rights reserved.
  </p>

  <p className="mt-2 text-sm">
    Designed with Figma • Built with Next.js
  </p>
</footer>
    </main>
  );
}