"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between px-6 py-8 md:px-12">
      <div className="flex items-center gap-2">
        <div className="w-8 h-0.5 bg-black"></div>
        <Link href="/">
          <h1
            className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-martian-mono)" }}
          >
            GG
          </h1>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/about"
          className={`text-sm font-medium transition-colors ${
            pathname === "/about" ? "text-black underline" : "text-gray-600 hover:text-black"
          }`}
          style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
        >
          ABOUT
        </Link>
        <Link
          href="/projects"
          className={`text-sm font-medium transition-colors ${
            pathname?.startsWith("/projects") ? "text-black underline" : "text-gray-600 hover:text-black"
          }`}
          style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
        >
          PROJECTS
        </Link>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
        >
          CONTACT
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/giorgia-giannico-1599a8193/"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <Link href="/resume">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            RESUME
          </Button>
        </Link>
      </div>
    </header>
  )
}
