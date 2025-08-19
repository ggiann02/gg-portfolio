import { Martian_Mono } from "next/font/google"
import Image from "next/image"

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
})

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Section */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square relative overflow-hidden bg-neutral-200">
              <Image
                src="/images/ProfilePic.JPG"
                alt="Giorgia Giannico"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h1 className={`${martianMono.className} text-4xl lg:text-5xl font-bold text-neutral-900 mb-6`}>
                About Me
              </h1>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p className="text-lg">
                  I'm Giorgia Giannico, a multidisciplinary designer and developer passionate about creating meaningful
                  digital experiences that bridge technology and art.
                </p>

                <p>
                  Currently pursuing a Bachelor of Science in Computer Science and Bachelor of Fine Arts in
                  Interdisciplinary Arts at Tufts University, I explore the intersection of code, design, and
                  interactive media. My work spans web development, 3D art, video production, sound design, and
                  performance art.
                </p>

                <p>
                  When I'm not coding or creating, you can find me exploring bookstores and coffee shops, riding horses,
                  picking up a new hobby, traveling, or spending time with my family and friends.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className={`${martianMono.className} text-2xl font-semibold text-neutral-900 mb-4`}>
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Development</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>React.js & Next.js</li>
                    <li>JavaScript & TypeScript</li>
                    <li>HTML & CSS</li>
                    <li>Web Programming</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Design & Art</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>UI/UX Design</li>
                    <li>3D Modeling & Animation</li>
                    <li>Video Production</li>
                    <li>Interactive Media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
