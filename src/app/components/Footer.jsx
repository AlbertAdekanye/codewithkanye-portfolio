import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              CodeWith
              <span className="text-purple-400">
                Kanye
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              Developer, problem solver, and tech
              educator building meaningful digital
              experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
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

        {/* Support */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">
              Enjoy my work or content?
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              You can support CodeWithKanye with a
              coffee.
            </p>
          </div>

          <a
            href="https://www.buymeacoffee.com/codewithkanye"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            ☕ Buy me a coffee
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Albert Adekanye. All rights
            reserved.
          </p>

          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}