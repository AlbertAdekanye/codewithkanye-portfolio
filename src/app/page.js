import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AlbertAdekanye",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/albert-adekanye-a82118243/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/adekanye_albert",
    icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@codewithkanye",
    icon: Youtube,
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Supabase",
      "Authentication",
    ],
  },
  {
    category: "Currently learning",
    items: [
      "Java",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Cloud Engineering",
    ],
  },
  {
    category: "Tools and platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "VS Code",
      "MongoDB Compass",
      "npm",
      "Chrome DevTools",
      "ESLint",
      "Prettier",
      "Figma",
      "Render",
    ],
  },
];
const projects = [
  {
    title: "GRIT",
    description:
      "A modern Nigerian streetwear e-commerce website featuring product discovery, category filtering, search, product details, size selection, cart management, and a responsive shopping experience.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
    ],
    liveUrl: "https://grit-pi.vercel.app/",
    githubUrl: "https://github.com/AlbertAdekanye/GRIT",
    featured: true,
  },
  {
    title: "The Art of Dining",
    description:
      "An elegant restaurant website designed to showcase memorable dining experiences, signature dishes, brand storytelling, and table reservations across all screen sizes.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    liveUrl: "https://the-art-of-dining.vercel.app/",
    githubUrl:
      "https://github.com/AlbertAdekanye/the-art-of-dining",
    featured: true,
  },
  {
    title: "Mide Soles",
    description:
      "A responsive footwear business website showcasing handmade shoes by category, with clear product presentation and direct WhatsApp enquiries for a simple customer ordering experience.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
    ],
    liveUrl: "https://mide-soles.vercel.app/",
    githubUrl:
      "https://github.com/AlbertAdekanye/mide-soles",
    featured: true,
  },
  {
    title: "Letters to CR7",
    description:
      "A global tribute platform where Cristiano Ronaldo fans can explore his journey and share heartfelt letters with supporters around the world.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl:
      "https://letters-to-cr7-five.vercel.app/",
    githubUrl:
      "https://github.com/AlbertAdekanye/letters-to-cr7",
    featured: true,
  },
  {
    title: "Natours",
    description:
      "A full-stack tour-booking application featuring authentication, secure REST APIs, tour management, payments, reviews, maps, and email workflows.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Pug",
    ],
    githubUrl:
      "https://github.com/AlbertAdekanye/4-natours",
    featured: true,
  },
  {
    title: "Realtor",
    description:
      "A modern real-estate platform that allows users to discover, search, filter, and explore available property listings.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
    ],
    liveUrl:
      "https://realtor-clone-five-alpha.vercel.app/sign-in",
    githubUrl:
      "https://github.com/AlbertAdekanye/Realtor-Clone",
  },
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-zinc-950 text-white"
    >
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-40"
      >
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="absolute -left-52 top-20 -z-10 size-[500px] rounded-full bg-purple-600/20 blur-[160px]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 -z-10 size-[420px] rounded-full bg-indigo-500/10 blur-[150px]"
        />

        <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-300 opacity-50" />

                <span className="relative inline-flex size-2 rounded-full bg-lime-300" />
              </span>

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-lime-300">
                Available for opportunities
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              I build useful digital products that feel{" "}
              <span className="font-serif font-normal italic text-purple-400">
                effortless.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I&apos;m Albert Adekanye, a
              full-stack developer turning ideas into
              fast, accessible web experiences and
              helping new developers understand the
              craft.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-300"
              >
                View my work
                <ArrowDown size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/10"
              >
                Let&apos;s work together
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:-translate-y-1 hover:border-purple-400/60 hover:text-purple-400"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-br from-purple-500/30 to-indigo-500/10 blur-sm" />

            <div className="relative rotate-2 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-400/20 to-zinc-900 shadow-2xl shadow-purple-950/30">
              <Image
                src="/albert.png"
                alt="Albert Adekanye"
                width={520}
                height={620}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-zinc-950/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-10">
              <strong className="block text-lg text-lime-300">
                3+ years
              </strong>

              <span className="text-xs text-zinc-400">
                Building for the web
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              01 — About
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Physics taught me how to solve problems.
              Code lets me ship the solutions.
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="text-base leading-8 text-zinc-400 sm:text-lg">
              I&apos;m a Nigerian developer and tech
              educator with a B.Sc. in Physics. I combine
              analytical thinking with product-focused
              engineering to build responsive,
              maintainable applications.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
              My work spans modern frontend development
              and backend systems. When I&apos;m not
              building, I share what I learn through
              CodeWithKanye and help aspiring developers
              move forward with confidence.
            </p>

            <a
              href="https://docs.google.com/document/d/1ne6JOcG4xCcySel87sxExoDVrflW-Xxj/edit?usp=sharing&ouid=103868621152933047619&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-lime-300 transition hover:text-lime-200"
            >
              View my résumé
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                02 — Expertise
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                A growing toolkit for modern products.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-zinc-400">
              From interface architecture to APIs and
              databases, I choose tools that fit the
              problem.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {skills.map((group, groupIndex) => (
              <article
                key={group.category}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-400/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {group.category}
                  </h3>

                  <span className="font-mono text-xs text-purple-400">
                    0{groupIndex + 1}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-zinc-950 px-3 py-2 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                03 — Selected work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Projects built with purpose.
              </h2>
            </div>

            <a
              href="https://github.com/AlbertAdekanye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-lime-300 transition hover:text-lime-200"
            >
              See all projects
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`flex min-h-[390px] flex-col rounded-3xl border p-6 transition hover:-translate-y-1 sm:p-8 ${
                  project.featured
                    ? "border-purple-400/30 bg-gradient-to-br from-purple-400/15 via-zinc-900 to-zinc-900"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-600">
                    0{index + 1}
                  </span>

                  {project.featured && (
                    <span className="rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime-300">
                      Featured
                    </span>
                  )}
                </div>

                <div className="my-auto py-10">
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                      >
                        Live site
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
                    >
                      <Github size={16} />
                      Source code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}