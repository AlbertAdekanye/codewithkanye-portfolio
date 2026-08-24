import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    "https://codewithkanye-portfolio.vercel.app"
  ),

  title: {
    default: "Albert Adekanye | Full-Stack Developer",
    template: "%s | Albert Adekanye",
  },

  description:
    "Portfolio of Albert Adekanye, a frontend and full-stack developer and tech educator building modern, accessible web applications.",

  keywords: [
    "Albert Adekanye",
    "CodeWithKanye",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Nigerian Developer",
    "Tech Educator",
  ],

  authors: [
    {
      name: "Albert Adekanye",
    },
  ],

  openGraph: {
    title: "Albert Adekanye | Full-Stack Developer",
    description:
      "Frontend and full-stack developer building modern and accessible digital products.",
    url: "https://codewithkanye-portfolio.vercel.app",
    siteName: "CodeWithKanye",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Albert Adekanye | Full-Stack Developer",
    description:
      "Frontend and full-stack developer building modern and accessible digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid #3f3f46",
            },
          }}
        />
      </body>
    </html>
  );
}