"use client"

import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { ClientOnly } from "./client-only"

function Room({ rotation, zoom }: { rotation: number, zoom: number }) {
  const { scene } = useGLTF("/gioRoomLight.glb")
  // Use a smaller scale on mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scale = isMobile ? zoom * 0.35 : zoom * 0.5;
  return <primitive object={scene} scale={scale} position={[0, -0.5, 0]} rotation={[0, rotation, 0]} />
}

export function HeroSection() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [rotation, setRotation] = useState(Math.PI / 9)
  const [zoom, setZoom] = useState(1.5)

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#featured-work")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Monitor hero section visibility to optimize 3D performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const heroElement = document.querySelector('.hero-section')
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 hero-section">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none"
            style={{ fontFamily: "var(--font-martian-mono)" }}
          >
            Giorgia
            <br />
            Giannico
          </h1>

          <div className="flex justify-center lg:justify-start">
            <Link href="/projects">
              <Button
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-medium"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                VIEW MY WORK
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:flex-1 max-w-2xl h-[600px] sm:h-96 md:h-96 lg:h-[500px] hero-3d-container pointer-events-none md:pointer-events-auto relative">
          <ClientOnly fallback={
            <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
              <div className="text-neutral-500 text-sm">Loading 3D Room...</div>
            </div>
          }>
            {/* All browser-dependent logic inside ClientOnly */}
            <Canvas 
              camera={{ position: [3.5, 3, 3.5], fov: 58, zoom }}
              gl={{ 
                antialias: false,
                powerPreference: "low-power",
                precision: "lowp"
              }}
              dpr={(() => {
                if (typeof window === 'undefined') return 1;
                return window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 2);
              })()}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <hemisphereLight color="#ffffff" groundColor="#404040" intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.4} />
                <directionalLight position={[-5, 3, -5]} intensity={0.2} />
                <directionalLight position={[0, 8, 0]} intensity={0.3} />
                <pointLight position={[2, 3, 2]} intensity={0.3} />
                <pointLight position={[-2, 2, -2]} intensity={0.2} />
                <pointLight position={[0, 5, 0]} intensity={0.4} />
                <Room rotation={rotation} zoom={zoom} />
                <OrbitControls 
                  enablePan={false} 
                  enableZoom={false} 
                  autoRotate={isHeroVisible} 
                  autoRotateSpeed={isHeroVisible ? 0.3 : 0}
                  enableDamping={true}
                  dampingFactor={0.05}
                  minDistance={1}
                  maxDistance={3}
                  minPolarAngle={0}
                  maxPolarAngle={Math.PI}
                />
              </Suspense>
            </Canvas>
            {/* Mobile controls */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 md:hidden z-10">
              <button
                aria-label="Rotate Left"
                className="bg-black text-white rounded-full p-2 shadow"
                onClick={() => setRotation((r) => r - Math.PI / 16)}
              >
                &#8592;
              </button>
              <button
                aria-label="Zoom Out"
                className="bg-black text-white rounded-full p-2 shadow"
                onClick={() => setZoom((z) => Math.max(1, z - 0.1))}
              >
                -
              </button>
              <button
                aria-label="Zoom In"
                className="bg-black text-white rounded-full p-2 shadow"
                onClick={() => setZoom((z) => Math.min(2.5, z + 0.1))}
              >
                +
              </button>
              <button
                aria-label="Rotate Right"
                className="bg-black text-white rounded-full p-2 shadow"
                onClick={() => setRotation((r) => r + Math.PI / 16)}
              >
                &#8594;
              </button>
            </div>
          </ClientOnly>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-16">
        <button
          onClick={scrollToNextSection}
          className="w-12 h-24 border-2 border-black rounded-full flex items-end justify-center pb-2 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
