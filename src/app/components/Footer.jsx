'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/30 text-white mt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm">
          &copy; {year} <span className="text-purple-400 font-medium">CodeWithKanye</span>. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-300">
          Built with ❤️ using <span className="font-medium">Next.js</span> & <span className="font-medium">Tailwind CSS</span>.
        </p>
      </div>

      {/* Support CTA */}
      <div className="bg-black/40 py-4 text-center">
        <p className="text-xs text-gray-300 mb-2">
          Made with <span className="text-red-500">❤</span> by <strong className="text-white">Albert Adekanye</strong>
        </p>
        <a
          href="https://www.buymeacoffee.com/codewithkanye"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black font-semibold px-4 py-1.5 rounded-md hover:bg-yellow-500 transition duration-200"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </footer>
  );
}
