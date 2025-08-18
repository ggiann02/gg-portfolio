import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/projects-data"
import ImageCarousel from "@/components/image-carousel"

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
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-ibm text-neutral-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Banner */}
      <div className="w-full pb-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-ibm text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <div className="flex items-center gap-1 font-ibm text-sm text-neutral-500">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
          </div>
          <h1 className="font-martian text-4xl md:text-5xl font-bold text-black mb-6">{project.title}</h1>
          <p className="font-ibm text-xl text-neutral-600 leading-relaxed">{project.description}</p>
        </div>

        {project.id === "birba-and-the-fly" && (
          <div className="mb-12">
            <h2 className="font-martian text-2xl font-bold text-black mb-6">Read the Book</h2>
            <div className="relative w-full max-h-[800px] border border-neutral-200 bg-white overflow-y-auto p-8">
              <div className="max-w-2xl mx-auto space-y-12 font-ibm">
                {/* Title Page */}
                <div className="text-center py-16">
                  <h1 className="font-martian text-4xl font-bold mb-4">BIRBA & THE FLY</h1>
                  <p className="text-lg text-neutral-600">by Giorgia Giannico</p>
                </div>

                {/* Story Pages */}
                <div className="space-y-8">
                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">
                      A few minutes after Birba was born, she heard an unfamiliar buzzing sound
                    </p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">
                      And she discovered it came from a rather peculiar black creature
                    </p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">"Hi, I'm a fly" said the creature</p>
                    <p className="text-lg leading-relaxed mt-4">The fly went bzzz and zzuuu and zzii and zzaaa</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">The fly buzzed and buzzed around Birba</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">When suddenly she got an idea...</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-2xl font-bold text-center">THE FLY LOOKED REALLY TASTY!</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">so she crawled and jumped</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">and leapt and flew...</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">... and fell.</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">The fly was far too smart for Birba to keep up.</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">"That's it. I'm over it." Said Birba</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">
                      One summer afternoon, while Birba was napping in the golden warmth of the sun,
                    </p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">a familiar pair of wings rested on her nose.</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">and in one swift movement ...</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-2xl font-bold text-center">SHE SLURPED THE FLY UP!</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">"That was easy! I can finally rest now." Thought Birba</p>
                  </div>

                  <div className="py-8 border-b border-neutral-100">
                    <p className="text-lg leading-relaxed">So she fell into a deep, deep slumber</p>
                  </div>

                  <div className="py-8">
                    <p className="text-lg leading-relaxed text-center">The deepest slumber of them all.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Video (if available) */}
        {project.videoUrl && (
          <div className="mb-12">
            <h2 className="font-martian text-2xl font-bold text-black mb-6">Project Demo</h2>
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
              <video src={project.videoUrl} controls className="w-full h-full object-cover" poster={project.image}>
                Your browser does not support the video tag.
              </video>
            </div>
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
          <ImageCarousel images={project.galleryImages} projectTitle={project.title} />
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
