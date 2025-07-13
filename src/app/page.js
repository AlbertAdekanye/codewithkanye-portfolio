import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Hello, I`m <span className="text-purple-400">Albert</span> 👋
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A dedicated <span className="text-purple-400">frontend developer and tech educator</span> specializing in building fast, beautiful web applications using <span className="text-purple-400">React, Next.js, Tailwind CSS, and Supabase.</span> I focus on delivering elegant, high-performance user interfaces while sharing knowledge to empower others in the tech community.
        </p>

        <div className="flex space-x-4">
          <a href="https://github.com/AlbertAdekanye" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-700">
            <Github size={24} />
          </a>
          <a href="https://x.com/adekanye_albert" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-700">
            <Twitter size={20} />
          </a>
          <a href="https://www.youtube.com/@codewithkanye" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-700">
            <Youtube size={20} />
          </a>
          <a href="https://www.linkedin.com/in/albert-adekanye-a82118243/" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-700">
            <Linkedin size={20} />
          </a>
        </div>
        <div className="mt-10 animate-bounce">
          <a href="#about" className="text-purple-400 font-semibold">↓ Scroll Down</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-24 py-20 bg-black/30">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/albert.png" 
              alt="Albert Adekanye"
              className="rounded-2xl w-60 md:w-80 shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-gray-300 text-center md:text-left">
            <p className="text-base md:text-lg leading-relaxed">
              I`m <span className="font-semibold text-white">Albert Adekanye</span>, a frontend developer and tech educator with a passion for turning ideas into pixel-perfect web experiences.
              With a background in Physics and a strong foundation in <span className="text-purple-400">React, Next.js, Tailwind CSS</span>, and <span className="text-purple-400">Supabase</span>, I build modern, scalable, and beautiful websites that blend form with function.
            </p>

            <p className="text-base md:text-lg mt-4 leading-relaxed">
              Whether I`m working on a tech product, mentoring junior devs, or creating content for my YouTube channel <span className="text-white font-medium">(@codewithkanye)</span>, I’m driven by the belief that technology should be accessible, impactful, and inspiring.
            </p>

            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1uSTfdb1sRPfHas83T2Zm7iUD6IPpioN-/view?usp=sharing"
                download
                className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-full text-white font-medium"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
<section id="skills" className="px-6 md:px-24 py-20 text-center bg-black/20">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10">Skills & Tech Stack</h2>
  <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-8">
    These are the core tools and technologies I use to design, develop, and deploy modern web applications.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-gray-300">
    {/* Each Skill */}
    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/javascript.svg" alt="JavaScript" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">JavaScript</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/react.svg" alt="React" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">React.js</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/nextjs.svg" alt="Next.js" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">Next.js</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">Tailwind CSS</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/supabase.svg" alt="Supabase" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">Supabase</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/git.svg" alt="Git" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">Git</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/github.svg" alt="GitHub" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">GitHub</span>
    </div>

    <div className="flex flex-col items-center bg-gray-800/30 p-4 rounded-xl hover:bg-purple-800/30 transition">
      <img src="/skills/vscode.svg" alt="VS Code" className="w-10 h-10 mb-2" />
      <span className="text-sm font-medium">VS Code</span>
    </div>
  </div>
</section>
{/* PROJECTS SECTION */}
  {/* PROJECTS SECTION */}
<section id="projects" className="px-6 md:px-24 py-20 bg-black/30 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10">Projects</h2>
  <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-10">
    Here are some of the projects I`ve worked on recently. Each one reflects my passion for frontend development and user experience.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Project Card 1 */}
    {/* <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">AITECHEM</h3>
      <p className="text-sm text-gray-300 mb-4">
        An AI-powered online exam system for students and lecturers, built with Supabase and Next.js.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">Next.js</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Supabase</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://aitechem.vercel.app" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/AITECHEM" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div> */}

    {/* Project Card 2 */}
    {/* <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">FUOYE Market</h3>
      <p className="text-sm text-gray-300 mb-4">
        A campus-based online marketplace for students to buy and sell products securely.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">Next.js</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Supabase</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://fuoyemarket.vercel.app" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/fuoye-market" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div> */}

    {/* Project Card 3 */}
    {/* <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">Tesla Clone</h3>
      <p className="text-sm text-gray-300 mb-4">
        A beautiful landing page clone of the Tesla homepage built for learning UI/UX structure.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://tesla-clone-codewithkanye.vercel.app" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/tesla-clone" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div> */}

    {/* Project Card 4 */}
    <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">NIKE STORE</h3>
      <p className="text-sm text-gray-300 mb-4">
        A responsive e-commerce website for Nike products, showcasing my skills in frontend development.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://nike-fake-store-clone.vercel.app/" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/nike-fake-store-clone" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>

    {/* Project Card 5 */}
    <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">REALTOR</h3>
      <p className="text-sm text-gray-300 mb-4">
        A modern real estate website showcasing properties with advanced search and filter features.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://realtor-clone-five-alpha.vercel.app/sign-in" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/Realtor-Clone" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>

    {/* Project Card 6 */}
    <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">IMDB-clone</h3>
      <p className="text-sm text-gray-300 mb-4">
        A clone of the popular IMDB website, showcasing movies, TV shows, and more with a sleek design.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://imdb-clone-liard-two.vercel.app " target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/IMDB-clone" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>

  {/* Project Card 7 */}
    <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">BOOKMARK WEBSITE</h3>
      <p className="text-sm text-gray-300 mb-4">
        A simple bookmark website that allows users to save and manage their favorite links.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://albertadekanye.github.io/bookmark1/ " target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/bookmark1" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>

  {/* Project Card 8 */}
      <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">FYLO</h3>
      <p className="text-sm text-gray-300 mb-4">
        A responsive landing page for a file storage service, showcasing modern design and layout techniques.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://albertadekanye.github.io/fylo1/ " target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/fylo1" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>

    {/* Project Card 9 */}
    <div className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold text-white mb-2">TESTIMONIAL-GRID</h3>
      <p className="text-sm text-gray-300 mb-4">
        A testimonial grid layout showcasing user feedback in a visually appealing format.
      </p>
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-purple-700 px-2 py-1 rounded">React</span>
        <span className="bg-purple-700 px-2 py-1 rounded">Tailwind CSS</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <a href="https://albertadekanye.github.io/Testimonial-Grid-1/" target="_blank" className="text-purple-400 hover:underline">Live Demo</a>
        <a href="https://github.com/AlbertAdekanye/Testimonial-Grid1" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section id="testimonials" className="px-6 md:px-24 py-20 bg-black/20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10">Testimonials</h2>
  <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-12">
    Here`s what people I`ve worked with have to say about my work and collaboration.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Testimonial 1 */}
    <div className="bg-gray-800/40 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <p className="text-gray-300 italic mb-4">
        “Albert has a deep understanding of frontend architecture. Working with him was seamless — his attention to detail is top-notch.”
      </p>
      <div className="text-left">
        <p className="text-white font-semibold">DT Effects</p>
        <p className="text-sm text-purple-300">Lead Designer @ DT Effects</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-800/40 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <p className="text-gray-300 italic mb-4">
        “His ability to translate complex ideas into clean, modern UIs is truly impressive. He’s also a great team player!”
      </p>
      <div className="text-left">
        <p className="text-white font-semibold">Sarah Musa</p>
        <p className="text-sm text-purple-300">Product Designer @ UIWorx</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-gray-800/40 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <p className="text-gray-300 italic mb-4">
        “CodeWithKanye is more than just a brand — Albert is building a movement that inspires future developers every day.”
      </p>
      <div className="text-left">
        <p className="text-white font-semibold">Toffy A.</p>
        <p className="text-sm text-purple-300">Founder @ Inspired by Anna</p>
      </div>
    </div>
  </div>
</section>
{/* BLOG SECTION */}
<section id="blog" className="px-6 md:px-24 py-20 bg-black/30 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10">Latest Blog Posts</h2>
  <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-12">
    I regularly share my thoughts on frontend engineering, tech tutorials, and lessons learned. Here are some of my recent posts.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Blog Card 1 */}
    <div className="bg-gray-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src="/blogs/solana-dust.jpg" alt="Solana Dusting Detection" className="w-full h-40 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-white mb-2">Detecting Solana Dusting & Address Poisoning</h3>
        <p className="text-sm text-gray-300 mb-4">
          Learn how I built an API to detect address poisoning attacks on the Solana blockchain using pattern-matching and transaction parsing.
        </p>
        <a
          href="https://medium.com/@AlbertAdekanye/solana-dusting-detector"
          target="_blank"
          className="text-purple-400 text-sm hover:underline"
        >
          Read on Medium →
        </a>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="bg-gray-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src="/blogs/frontend-roadmap.jpg" alt="Frontend Roadmap" className="w-full h-40 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-white mb-2">Mastering Frontend in 2025: A Roadmap</h3>
        <p className="text-sm text-gray-300 mb-4">
          From HTML to frameworks, this roadmap will guide you through essential frontend technologies to learn this year.
        </p>
        <a
          href="https://medium.com/@AlbertAdekanye/frontend-roadmap-2025"
          target="_blank"
          className="text-purple-400 text-sm hover:underline"
        >
          Read Full Post →
        </a>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="bg-gray-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src="/blogs/youtube-journey.jpg" alt="YouTube Journey" className="w-full h-40 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-white mb-2">Building CodeWithKanye on YouTube</h3>
        <p className="text-sm text-gray-300 mb-4">
          A behind-the-scenes look at how I started my YouTube channel and my content strategy as a developer-educator.
        </p>
        <a
          href="https://medium.com/@AlbertAdekanye/youtube-journey"
          target="_blank"
          className="text-purple-400 text-sm hover:underline"
        >
          Read the Story →
        </a>
      </div>
    </div>
  </div>
</section>
{/* CONTACT SECTION */}
<Contact />
{/* FOOTER */}

<Footer />
</main>
  );
}
