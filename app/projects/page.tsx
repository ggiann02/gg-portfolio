"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProjectsByCategory } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const categories = ["All Projects", "Web & UI/UX", "3D", "Video Art", "Sound Art", "Performance Art"]

  const filteredProjects = getProjectsByCategory(activeCategory)

  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-martian-mono)" }}>
          My Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
          A collection of my interdisciplinary projects.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            variant={activeCategory === category ? "default" : "outline"}
            className={`px-6 py-2 rounded-full ${
              activeCategory === category
                ? "bg-black text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-6 bg-stone-100">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-3">
              <h3
                className="text-xl font-bold group-hover:text-gray-600 transition-colors"
                style={{ fontFamily: "var(--font-martian-mono)" }}
              >
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
