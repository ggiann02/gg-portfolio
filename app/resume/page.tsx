"use client"

import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-end px-6 py-4 md:px-12 border-b">
        <Button
          onClick={() => window.print()}
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white bg-transparent"
          style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
        >
          DOWNLOAD PDF
        </Button>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-martian-mono)" }}>
              Giorgia Giannico
            </h1>
            <div className="text-gray-600" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              617-751-9278 | giannicogiorgia@gmail.com | sites.google.com/view/giorgiagiannico-portfolio
            </div>
          </div>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-martian-mono)" }}>
              EDUCATION
            </h2>
            <div className="space-y-4" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Tufts University, Medford, MA</h3>
                    <p className="text-gray-700">
                      Bachelor of Science in Computer Science and Bachelor of Fine Arts in Interdisciplinary arts
                    </p>
                    <p className="text-gray-700">GPA: 3.8, Dean's List</p>
                  </div>
                  <span className="text-gray-600">Expected May 2026</span>
                </div>
                <p className="text-gray-700">
                  Relevant classes: Data Structures, Web Programming & Engineering, Computer Graphics, Machine Structure
                  and Assembly Language
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">St Louis School of Milan, IB Diploma, Milan, Italy</h3>
                    <p className="text-gray-700">IBDP Score: 43/45</p>
                  </div>
                  <span className="text-gray-600">2019-2021</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-martian-mono)" }}>
              EXPERIENCE
            </h2>
            <div className="space-y-6" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Goodpath, Frontend Developer, Cambridge, MA</h3>
                  </div>
                  <span className="text-gray-600">Jun 2023 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Designed an investor-facing website in Figma, showcasing Goodpath's innovative use of AI for
                    integrative healthcare solutions
                  </li>
                  <li>
                    Developed the website using React and Next.js, ensuring responsive design and optimal performance
                  </li>
                  <li>
                    Collaborated with the product and leadership teams to translate business goals into a user-friendly
                    digital experience
                  </li>
                  <li>
                    Implemented modern UI components and design systems to maintain brand consistency and enhance user
                    engagement
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Tufts University, Teaching Assistant, Medford, MA</h3>
                  </div>
                  <span className="text-gray-600">Sep 2023 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Teach a group of 15 students each week, enabling deeper understanding of static typing, type
                    inference and functional programming languages like Scheme and Standard ML for the Tufts Programming
                    Languages course
                  </li>
                  <li>
                    Hold office hours to provide one-on-one support, answering questions and guiding students through
                    complex concepts
                  </li>
                  <li>Grade 30 homework assignments each week, consistent understanding of course material</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Monks, Motion Graphics & Editing Intern, Milan, Italy</h3>
                  </div>
                  <span className="text-gray-600">Jun 2024 – Aug 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Designed motion graphics and interactive designs using Adobe After Effects and Premiere Pro,
                    aligning with UX principles to enhance viewer engagement
                  </li>
                  <li>
                    Edited and produced 15+ short-form videos weekly for brand social media, improving audience
                    retention and awareness
                  </li>
                  <li>Collaborated with a creative team to develop video interfaces with a user-centric approach</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Prodesfin & Raiffeisen, UI/UX Developer, Milan, Italy (Remote)</h3>
                  </div>
                  <span className="text-gray-600">Jan 2022 – Aug 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Designed and implemented user-centric web interfaces using HTML, CSS, and JavaScript</li>
                  <li>
                    Developed interactive visualizations and graphs to simplify complex financial data for investors
                  </li>
                  <li>
                    Collaborated with a team of developers to coordinate and connect front-end and back-end for optimal
                    user experience
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-martian-mono)" }}>
              PROJECTS
            </h2>
            <div className="space-y-4" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Student Portal Redesign, Web Prototype using Figma</h3>
                  <span className="text-gray-600">Jan 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Conducted user testing to identify pain points and usability issues in the existing university
                    portal
                  </li>
                  <li>
                    Redesigned the portal using Figma, improving navigation, accessibility, and overall user experience
                  </li>
                  <li>
                    Developed wireframes and prototypes, incorporating feedback from user research to refine the final
                    design
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Mapleworld Maze, Oculus Quest VR Application</h3>
                  <span className="text-gray-600">Nov 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Created an immersive and interactive VR videogame in Unity using terrain tools, 3D modeling and
                    animating techniques and custom sound
                  </li>
                  <li>
                    Created various scenes which can be accessed in the videogame by touching different action items
                    using scripting
                  </li>
                  <li>Used scripting and Oculus Rift packages to export the videogame on any Oculus VR headset</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-martian-mono)" }}>
              SKILLS & INTERESTS
            </h2>
            <div className="space-y-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
              <div>
                <span className="font-semibold">UI/UX:</span>
                <span className="text-gray-700">
                  {" "}
                  User Research, Wireframing, Prototyping, Usability Testing, Accessibility Design, Interaction Design
                </span>
              </div>
              <div>
                <span className="font-semibold">Front-End Development:</span>
                <span className="text-gray-700"> React.js, JavaScript, HTML, CSS, RESTful APIs</span>
              </div>
              <div>
                <span className="font-semibold">Design & Tools:</span>
                <span className="text-gray-700">
                  {" "}
                  Figma, Sketch, Adobe XD, Adobe After Effects, Photoshop, Illustrator, Blender, Unity 3D
                </span>
              </div>
              <div>
                <span className="font-semibold">Additional technical skills:</span>
                <span className="text-gray-700"> Git/GitHub, Version Control, Graphic Design, 3D animation</span>
              </div>
              <div>
                <span className="font-semibold">Languages:</span>
                <span className="text-gray-700"> Italian (Native), English (Bilingual), Spanish (Advanced)</span>
              </div>
              <div>
                <span className="font-semibold">Interests:</span>
                <span className="text-gray-700">
                  {" "}
                  Social Chair of Tufts Equestrian Club, Photography, Reading, Yoga, Painting
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
