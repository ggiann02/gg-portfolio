import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/projects-data"
import ImageCarousel from "@/components/image-carousel"
import { ClientOnly } from "@/components/client-only"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const nextProject = getNextProject(params.slug)
  const previousProject = getPreviousProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Project Banner */}
      <div className="w-full pb-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100">
          <Image 
            src={project.image || "/placeholder.svg"} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
          />
          {/* Minimal gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          {/* Project title on bottom left */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="font-martian text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              {project.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-ibm text-sm text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.category}
              </span>
              <div className="flex items-center gap-1 font-ibm text-sm text-white/90">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Read the book section for Birba project */}
        {project.id === 'birba-and-the-fly' && (
          <div className="mb-12">
            <div className="bg-transparent rounded-lg overflow-hidden">
              <h2 className="font-martian text-2xl font-bold text-black mb-8 text-center">Read the Book</h2>
              
              <div className="w-full -mx-4 px-4">
                <ClientOnly fallback={
                  <div className="w-full h-[800px] bg-neutral-100 flex items-center justify-center">
                    <div className="text-neutral-500 text-sm">Loading PDF...</div>
                  </div>
                }>
                  <div className="space-y-4">
                    <iframe 
                      src="/BirbaAndTheFly.pdf"
                      className="w-full h-[800px] border-0 shadow-lg"
                      title="Birba and the Fly - PDF Book"
                    />
                    <div className="text-center">
                      <a 
                        href="/BirbaAndTheFly.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-ibm text-sm"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7,10 12,15 17,10"/>
                          <line x1="12" x2="12" y1="15" y2="3"/>
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>
        )}

        {/* Live Demo */}
        {project.liveUrl && (
          <div className="mb-12">
            <h2 className="font-martian text-2xl font-bold text-black mb-6">Live Demo</h2>
            <div className="space-y-4">
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                <ClientOnly fallback={
                  <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                    <div className="text-neutral-500 text-sm">Loading demo...</div>
                  </div>
                }>
                  <iframe
                    src={project.liveUrl}
                    className="w-full h-full border-0"
                    title={`${project.title} Live Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </ClientOnly>
              </div>
              <div className="text-center">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-ibm text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project Video(s) */}
        {(project.videoUrl || (project.videoUrls && project.videoUrls.length > 0)) && (
          <div className="mb-12">
            <h2 className="font-martian text-2xl font-bold text-black mb-6">
              {project.videoUrls && project.videoUrls.length > 1 ? "Project Videos" : "Project Demo"}
            </h2>
            
            {/* Multiple videos */}
            {project.videoUrls && project.videoUrls.length > 0 ? (
              <div className="space-y-8">
                {project.videoUrls.map((videoUrl, index) => (
                  <div key={index}>
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      {videoUrl.includes('drive.google.com') ? (
                        <ClientOnly fallback={
                          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <div className="text-neutral-500 text-sm">Loading video...</div>
                          </div>
                        }>
                          <iframe
                            src={videoUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                            title={`${project.title} Demo ${index + 1}`}
                          />
                        </ClientOnly>
                      ) : (
                        <ClientOnly fallback={
                          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <div className="text-neutral-500 text-sm">Loading video...</div>
                          </div>
                        }>
                          <video src={videoUrl} controls className="w-full h-full object-cover" poster={project.image}>
                            Your browser does not support the video tag.
                          </video>
                        </ClientOnly>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Single video fallback */
              project.videoUrl && (
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                  {project.videoUrl.includes('drive.google.com') ? (
                    <ClientOnly fallback={
                      <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                        <div className="text-neutral-500 text-sm">Loading video...</div>
                      </div>
                    }>
                      <iframe
                        src={project.videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={`${project.title} Demo`}
                      />
                    </ClientOnly>
                  ) : (
                    <ClientOnly fallback={
                      <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                        <div className="text-neutral-500 text-sm">Loading video...</div>
                      </div>
                    }>
                      <video src={project.videoUrl} controls className="w-full h-full object-cover" poster={project.image}>
                        Your browser does not support the video tag.
                      </video>
                    </ClientOnly>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="font-martian text-2xl font-bold text-black mb-6">About This Project</h2>
          <div className="font-ibm text-neutral-700 leading-relaxed space-y-4">
            {project.longDescription.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Skills Used */}
        <div className="mb-12">
          <h2 className="font-martian text-2xl font-bold text-black mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 font-ibm text-sm bg-white border border-neutral-200 text-neutral-700 px-4 py-2 rounded-full hover:border-neutral-300 transition-colors"
              >
                <Tag className="w-3 h-3" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <ClientOnly fallback={
            <div className="mb-12">
              <h2 className="font-martian text-2xl font-bold text-black mb-6">Project Gallery</h2>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 mb-4">
                <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                  <div className="text-neutral-500 text-sm">Loading gallery...</div>
                </div>
              </div>
            </div>
          }>
            <ImageCarousel images={project.galleryImages} projectTitle={project.title} />
          </ClientOnly>
        )}

        {/* Project Navigation */}
        <div className="border-t border-neutral-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Previous Project */}
            <div className="flex justify-start">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.id}`}
                  className="group flex items-center gap-3 font-ibm text-neutral-600 hover:text-black transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">Previous</p>
                    <p className="font-medium">{previousProject.title}</p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Center CTA */}
            <div className="text-center">
              <p className="font-ibm text-sm text-neutral-500 mb-2">Interested in working together?</p>
              <Link href="#" className="font-ibm font-medium text-black hover:underline">
                Get in touch
              </Link>
            </div>

            {/* Next Project */}
            <div className="flex justify-end">
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group flex items-center gap-3 font-ibm text-neutral-600 hover:text-black transition-colors"
                >
                  <div className="text-right">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">Next</p>
                    <p className="font-medium">{nextProject.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          {/* All Projects Link */}
          <div className="text-center mt-8 pt-8 border-t border-neutral-100">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-ibm text-neutral-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  const { projectsData } = await import("@/lib/projects-data")

  return projectsData.map((project) => ({
    slug: project.id,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Giorgia Giannico`,
    description: project.description,
  }
}
