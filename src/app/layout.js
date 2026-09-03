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
    default: "Albert Adekanye | Software Engineer",
    template: "%s | Albert Adekanye",
  },

  description:
    "Portfolio of Albert Adekanye, a software engineer and tech educator building useful, modern, and accessible digital products.",

  keywords: [
    "Albert Adekanye",
    "CodeWithKanye",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Nigerian Software Engineer",
    "Tech Educator",
  ],

  authors: [
    {
      name: "Albert Adekanye",
      url: "https://codewithkanye-portfolio.vercel.app",
    },
  ],

  creator: "Albert Adekanye",
  publisher: "CodeWithKanye",

  openGraph: {
    title: "Albert Adekanye | Software Engineer",
    description:
      "Software engineer and tech educator building useful, modern, and accessible digital products.",
    url: "https://codewithkanye-portfolio.vercel.app",
    siteName: "CodeWithKanye",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Albert Adekanye — CodeWithKanye Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Albert Adekanye | Software Engineer",
    description:
      "Software engineer and tech educator building useful, modern, and accessible digital products.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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