"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function FeaturedWork() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      id: 1,
      title: "MONTESSORI TROLLEY PROBLEM",
      image: "/images/trolley-cover.jpg",
      slug: "montessori-trolley-problem",
    },
    {
      id: 2,
      title: "DIABOLUM IN TABULA",
      image: "/images/diabolum.png",
      slug: "diabolum-in-tabula",
    },
    {
      id: 3,
      title: "BIRBA AND THE FLY",
      image: "/placeholder.svg?height=300&width=300",
      slug: "birba-and-the-fly",
    },
    {
      id: 4,
      title: "RECURSIVE RAYTRACING",
      image: "/images/raytracing-cover.png",
      slug: "recursive-raytracing",
    },
    {
      id: 5,
      title: "EAT THE METABALLS",
      image: "/images/metaball-cover.png",
      slug: "eat-the-metaballs",
    },
    {
      id: 6,
      title: "MAPLEWORLD MAZE",
      image: "/images/mapleworld.png",
      slug: "mapleworld-maze",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, projectId]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-work" className="px-6 py-16 md:px-12 md:py-24 bg-stone-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-martian-mono)" }}>
          Featured Work
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
          A selection of projects that showcase my approach to solving complex design challenges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el
            }}
            data-project-id={project.id}
            className={`transition-all duration-1000 ease-out ${
              visibleProjects.has(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <Link href={`/projects/${project.slug}`} className="group cursor-pointer block">
              <div className="aspect-square overflow-hidden mb-4 bg-stone-200 max-w-sm mx-auto">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-sm font-medium tracking-wider text-center"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {project.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/projects">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            View All Projects →
          </Button>
        </Link>
      </div>
    </section>
  )
}
