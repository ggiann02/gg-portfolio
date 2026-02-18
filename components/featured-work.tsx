"use client";

import { projectsData } from "@/lib/projects-data";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

export default function FeaturedWork() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Define featured project IDs
  const featuredIds = [
    "goodpath-refresh",
    "eat-the-metaballs",
    "birba-and-the-fly",
    "fridge-magnets"
  ];
  const featuredProjects = projectsData.filter(p => featuredIds.includes(p.id));

  // Ensure component only renders after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!isMounted || isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProjects.length, isMounted, isUserInteracting]);

  return (
    <section id="featured-work" className="py-16 md:py-24 bg-dusty-pink">
      <div className="text-center mb-12 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-martian-mono)" }}>
          Featured Work
        </h2>
        <p className="text-lg text-gray-600">A selection of my favorite projects</p>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {isMounted && (
          <div>
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={3}
              itemsToScroll={1}
              forwardBtnProps={{
                style: {
                  display: "none"
                },
              }}
              backwardBtnProps={{
                style: {
                  display: "none"
                },
              }}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  maxWidth: 600,
                },
                {
                  itemsToShow: 2,
                  itemsToScroll: 1,
                  minWidth: 600,
                  maxWidth: 900,
                },
                {
                  itemsToShow: 3,
                  itemsToScroll: 1,
                  minWidth: 900,
                },
              ]}
              speed={400}
              easing="linear"
              style={{ width: "100%", display: "flex", justifyContent: "center", gap: "60px" }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0" style={{ width: 450, paddingRight: "30px" }}>
                  <Link
                    href={project.liveUrl || `/projects/${project.id}`}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noopener noreferrer" : undefined}
                    className="relative group block overflow-hidden"
                  >
                    <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-2 mb-3">
                          {project.description}
                        </p>
                        <span className="text-sm font-semibold text-white hover:text-gray-200 transition-colors">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </ReactSimplyCarousel>
            
            {/* Navigation Arrows Below */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => {
                  setIsUserInteracting(true);
                  setActiveSlideIndex(activeSlideIndex === 0 ? featuredProjects.length - 1 : activeSlideIndex - 1);
                  setTimeout(() => setIsUserInteracting(false), 5000);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "32px",
                  transition: "opacity 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.6,
                  padding: "8px"
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.opacity = "1";
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.opacity = "0.6";
                }}
              >
                ←
              </button>
              <button
                onClick={() => {
                  setIsUserInteracting(true);
                  setActiveSlideIndex(activeSlideIndex === featuredProjects.length - 1 ? 0 : activeSlideIndex + 1);
                  setTimeout(() => setIsUserInteracting(false), 5000);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "32px",
                  transition: "opacity 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.6,
                  padding: "8px"
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.opacity = "1";
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.opacity = "0.6";
                }}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
          <button
            className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent border rounded-lg font-semibold"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            View All Projects →
          </button>
        </Link>
      </div>
    </section>
  );
}
