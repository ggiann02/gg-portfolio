"use client"

import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { ClientOnly } from "./client-only"

function Room() {
  const { scene } = useGLTF("/gioRoomLight.glb")
  const [scale, setScale] = useState(1.5)

  useEffect(() => {
    const updateScale = () => {
      if (typeof window === 'undefined') return
      
      if (window.innerWidth < 640) {
        setScale(1.2)
      } else if (window.innerWidth < 1024) {
        setScale(1.5)
      } else {
        setScale(1.5)
      }
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return <primitive object={scene} scale={scale} position={[0, -0.5, 0]} rotation={[0, Math.PI / 9, 0]} />
}

export function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#featured-work")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
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

        <div className="w-full lg:flex-1 max-w-2xl h-[600px] sm:h-96 md:h-96 lg:h-[500px]">
          <ClientOnly fallback={
            <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
              <div className="text-neutral-500 text-sm">Loading 3D Room...</div>
            </div>
          }>
            <Canvas camera={{ position: [3.5, 3, 3.5], fov: 58 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <hemisphereLight color="#ffffff" groundColor="#404040" intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.4} />
                <directionalLight position={[-5, 3, -5]} intensity={0.2} />
                <directionalLight position={[0, 8, 0]} intensity={0.3} />
                <pointLight position={[2, 3, 2]} intensity={0.3} />
                <pointLight position={[-2, 2, -2]} intensity={0.2} />
                <pointLight position={[0, 5, 0]} intensity={0.4} />
                <Room />
                <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.3} />
              </Suspense>
            </Canvas>
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
