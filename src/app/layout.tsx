import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RedNote Pro",
  description: "The marketing guide for your RedNote journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-826T9JVY78" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-red-100 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Image src="/logo.svg" alt="RedNote Pro" width={32} height={32} />
                <div className="flex items-center gap-6">
                  <a href="/" className="text-red-500 font-medium hover:text-red-600 transition-colors">
                    Home
                  </a>
                  <a href="/blogs" className="text-gray-600 font-medium hover:text-red-500 transition-colors">
                    Blogs
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
