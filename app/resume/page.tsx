"use client"

import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-end px-6 py-4 md:px-12 border-b">
        <a
          href="/Giorgia-Giannico-resume2025.pdf"
          download="Giorgia-Giannico-resume2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            DOWNLOAD PDF
          </Button>
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-4xl mx-auto px-6 py-8 h-[calc(100vh-140px)]">
        <iframe
          src="/Giorgia-Giannico-resume2025.pdf"
          className="w-full h-full border-0 shadow-sm"
          title="Giorgia Giannico Resume"
        />
      </div>
    </div>
  )
}
