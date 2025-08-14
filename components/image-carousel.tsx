"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  projectTitle: string
}

export default function ImageCarousel({ images, projectTitle }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="mb-12">
        <h2 className="font-martian text-2xl font-bold text-black mb-6">Project Gallery</h2>

        {/* Main Carousel */}
        <div className="relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 mb-4">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => openModal(currentIndex)}
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 text-sm font-ibm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${
                    index === currentIndex ? "border-black" : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${projectTitle} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 font-ibm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
