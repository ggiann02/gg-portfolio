import Link from "next/link"

export function Footer({ name }: { name: string }) {
  return (
    <footer className="px-6 py-16 md:px-12 md:py-24 bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-martian-mono)" }}>
              {name}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
            UI/UX Designer crafting beautiful and functional digital experiences. Let's work together to bring your
            ideas to life.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/giorgia-giannico"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-martian-mono)" }}>
            Navigation
          </h4>
          <nav className="space-y-3">
            <Link
              href="/projects"
              className="block text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="block text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Resume
            </Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-martian-mono)" }}>
            Services
          </h4>
          <nav className="space-y-3">
            <span className="block text-gray-600" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              UI/UX Design
            </span>
            <span className="block text-gray-600" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              3D Art & Animation
            </span>
            <span className="block text-gray-600" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              Interactive Media
            </span>
            <span className="block text-gray-600" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              Performance Art
            </span>
          </nav>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm mb-4 md:mb-0" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
          © 2025 {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-500 hover:text-black text-sm transition-colors"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black text-sm transition-colors"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
