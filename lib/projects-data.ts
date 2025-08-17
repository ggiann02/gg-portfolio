export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  galleryImages?: string[]
  videoUrl?: string
  skills: string[]
  year: string
  status: "completed" | "in-progress"
}

export const projectsData: Project[] = [
  // Web & UI/UX Projects
  {
    id: "eat-the-metaballs",
    title: "Eat the Metaballs",
    category: "Web & UI/UX",
    description: "An interactive GLSL shader-based game with mesmerizing graphics.",
    longDescription:
      "Eat the Metaballs is an innovative web-based game that combines interactive gameplay with stunning visual effects powered by GLSL shaders. Players navigate through a dynamic environment of colorful metaballs that blend and morph in real-time, creating a mesmerizing visual experience. The game features multiple color themes, adjustable spawn intervals, and score tracking, all rendered using WebGL for optimal performance.",
    image: "/images/metaball-cover.png",
    galleryImages: [
      "/images/metaball-cover.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=Eat%20the%20Metaballs%20Gameplay&duration=120",
    skills: ["GLSL", "WebGL", "JavaScript", "HTML5", "CSS3", "Shader Programming"],
    year: "2024",
    status: "completed",
  },
  {
    id: "ui-ux-case-study",
    title: "UI/UX Case Study",
    category: "Web & UI/UX",
    description: "Comprehensive user experience design and interface optimization project.",
    longDescription:
      "This comprehensive UI/UX case study explores the complete design process from user research to final implementation. The project involved conducting user interviews, creating personas, wireframing, prototyping, and usability testing. The study demonstrates a systematic approach to solving complex user experience challenges through data-driven design decisions and iterative improvements.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    skills: ["User Research", "Wireframing", "Prototyping", "Figma", "User Testing", "Information Architecture"],
    year: "2024",
    status: "completed",
  },
  {
    id: "birba-and-the-fly",
    title: "Birba and the Fly",
    category: "Web & UI/UX",
    description: "A charming children's book about a character named Birba and her encounter with a fly.",
    longDescription:
      "Birba and the Fly is a delightful children's book that tells the story of Birba's encounter with a buzzing fly. The narrative follows Birba's attempts to catch the clever fly, her eventual frustration, and the surprising conclusion when the fly finally lands on her nose while she sleeps. The book combines simple storytelling with engaging illustrations to create an entertaining tale for young readers.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    skills: ["Children's Book Design", "Storytelling", "Illustration", "Layout Design", "Typography"],
    year: "2024",
    status: "completed",
  },

  // 3D Projects
  {
    id: "montessori-trolley-problem",
    title: "Montessori Trolley Problem",
    category: "3D",
    description:
      "A 3D printed and laser cut children's toy designed to challenge ethical decision-making through play.",
    longDescription:
      "The Montessori Trolley Problem reimagines the classic philosophical thought experiment as an educational toy for children. This project combines 3D printing and laser cutting techniques to create a tactile learning experience that introduces complex ethical concepts through play. The design encourages children to think critically about moral decisions while engaging with beautifully crafted wooden tracks and colorful train components.",
    image: "/images/trolley-cover.jpg",
    galleryImages: [
      "/images/trolley-cover.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    skills: ["3D Printing", "Laser Cutting", "Product Design", "Educational Design", "Woodworking"],
    year: "2023",
    status: "completed",
  },
  {
    id: "diabolum-in-tabula",
    title: "Diabolum in Tabula",
    category: "3D",
    description: "A laser cut board game design that combines strategy and creativity.",
    longDescription:
      "Diabolum in Tabula is an original board game that merges strategic gameplay with striking visual design. The game features laser-cut components with intricate red and black circular patterns that create both functional game mechanics and aesthetic appeal. Players navigate through concentric circles while making tactical decisions, creating an engaging experience that balances skill and chance.",
    image: "/images/diabolum.png",
    galleryImages: [
      "/images/diabolum.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    skills: ["Laser Cutting", "Game Design", "Graphic Design", "Product Design", "Strategic Thinking"],
    year: "2023",
    status: "completed",
  },
  {
    id: "recursive-raytracing",
    title: "Recursive Raytracing",
    category: "3D",
    description: "Advanced 3D rendering technique showcasing recursive reflection algorithms.",
    longDescription:
      "This project explores advanced computer graphics techniques through the implementation of recursive raytracing algorithms. The work demonstrates complex lighting calculations, reflection mapping, and surface material properties to create photorealistic 3D renders. The project showcases multiple iterations of raytraced scenes with increasing complexity, highlighting the mathematical beauty of light simulation.",
    image: "/images/raytracing-cover.png",
    galleryImages: [
      "/images/raytracing-cover.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    skills: ["Raytracing", "3D Rendering", "Computer Graphics", "Algorithm Design", "Mathematical Modeling"],
    year: "2024",
    status: "completed",
  },
  {
    id: "mapleworld-maze",
    title: "Mapleworld Maze",
    category: "3D",
    description: "A charming 3D environment featuring pastoral landscapes and interactive elements.",
    longDescription:
      "Mapleworld Maze creates an immersive 3D environment that combines natural beauty with interactive gameplay elements. The project features detailed landscape modeling, character design, and environmental storytelling. Players explore a whimsical world filled with cozy cottages, lush gardens, and hidden pathways, creating a peaceful yet engaging experience that celebrates the beauty of rural life.",
    image: "/images/mapleworld.png",
    galleryImages: [
      "/images/mapleworld.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=Mapleworld%20Maze%20Walkthrough&duration=180",
    skills: ["3D Modeling", "Environment Design", "Character Design", "Texture Mapping", "Game Development"],
    year: "2024",
    status: "completed",
  },
  {
    id: "the-end-of-the-world",
    title: "The End of the World",
    category: "3D",
    description: "A haunting 3D visualization exploring themes of transformation and transcendence.",
    longDescription:
      "The End of the World is a powerful 3D artwork that explores themes of transformation, transcendence, and renewal. The piece features a luminous human figure set against an urban backdrop, creating a striking contrast between the ethereal and the mundane. Through careful lighting design and atmospheric effects, the work invites contemplation on cycles of ending and beginning.",
    image: "/images/endofworld.png",
    galleryImages: [
      "/images/endofworld.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=The%20End%20of%20the%20World%20Animation&duration=90",
    skills: ["3D Modeling", "Lighting Design", "Atmospheric Effects", "Conceptual Art", "Digital Sculpture"],
    year: "2024",
    status: "completed",
  },
  {
    id: "skinwalker-city",
    title: "Skinwalker City",
    category: "3D",
    description: "A surreal 3D landscape exploring themes of movement and transformation.",
    longDescription:
      "Skinwalker City presents a dreamlike 3D environment where figures move through an otherworldly landscape. The project combines organic terrain modeling with dynamic character animation to create a sense of perpetual motion and transformation. The work explores themes of identity, movement, and the relationship between beings and their environment through stunning visual storytelling.",
    image: "/images/skinwalkercity.png",
    galleryImages: [
      "/images/skinwalkercity.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=Skinwalker%20City%20Journey&duration=150",
    skills: ["3D Modeling", "Character Animation", "Terrain Design", "Atmospheric Rendering", "Conceptual Design"],
    year: "2024",
    status: "completed",
  },

  // Video Art Projects
  {
    id: "luna",
    title: "Luna",
    category: "Video Art",
    description: "A stop-motion animation exploring celestial themes and miniature worlds.",
    longDescription:
      "Luna is a captivating stop-motion animation that creates intimate narratives within miniature worlds. The project combines handcrafted sets, careful lighting design, and frame-by-frame animation to tell stories of wonder and discovery. Each scene is meticulously crafted to create a sense of magic and possibility, inviting viewers into a world where small moments carry profound meaning.",
    image: "/images/luna.png",
    galleryImages: [
      "/images/luna.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=Luna%20Stop%20Motion&duration=240",
    skills: ["Stop-Motion Animation", "Set Design", "Lighting Design", "Storytelling", "Miniature Crafting"],
    year: "2024",
    status: "completed",
  },
  {
    id: "rain-rain",
    title: "Rain Rain",
    category: "Video Art",
    description: "An experimental video piece exploring texture, movement, and atmospheric storytelling.",
    longDescription:
      "Rain Rain is an experimental video artwork that explores the relationship between character, environment, and narrative through innovative visual techniques. The piece combines traditional animation principles with contemporary digital effects to create a unique aesthetic that blurs the line between reality and imagination. The work investigates themes of isolation, connection, and the stories we tell ourselves.",
    image: "/images/rainrain.png",
    galleryImages: [
      "/images/rainrain.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/placeholder.mp4?title=Rain%20Rain%20Experimental&duration=180",
    skills: ["Video Art", "Digital Effects", "Character Design", "Experimental Animation", "Visual Storytelling"],
    year: "2024",
    status: "completed",
  },

  // Sound Art Projects
  {
    id: "fragments",
    title: "Fragments",
    category: "Sound Art",
    description: "An experimental sound composition exploring memory and temporal fragmentation.",
    longDescription:
      "Fragments is an immersive sound art piece that explores the nature of memory through audio manipulation and spatial composition. The work combines field recordings, synthesized sounds, and processed vocals to create a sonic landscape that mirrors the fragmented nature of human recollection. Listeners experience shifting temporal perspectives as sounds emerge, transform, and dissolve.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.mp4?title=Fragments%20Audio%20Visualization&duration=300",
    skills: ["Sound Design", "Audio Processing", "Field Recording", "Spatial Audio", "Experimental Music"],
    year: "2024",
    status: "completed",
  },
  {
    id: "self-portrait",
    title: "Self Portrait",
    category: "Sound Art",
    description: "An introspective audio piece using voice and environmental sounds.",
    longDescription:
      "Self Portrait is an intimate sound art piece that uses the human voice as both instrument and subject. The composition layers spoken word, vocal textures, and environmental recordings to create a sonic self-examination. The work explores themes of identity, introspection, and the ways we understand ourselves through sound and silence.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.mp4?title=Self%20Portrait%20Audio%20Journey&duration=420",
    skills: ["Voice Art", "Audio Composition", "Sound Processing", "Introspective Design", "Vocal Techniques"],
    year: "2024",
    status: "completed",
  },
  {
    id: "portrait-of-my-house",
    title: "Portrait of my House",
    category: "Sound Art",
    description: "A sonic exploration of domestic spaces and architectural acoustics.",
    longDescription:
      "Portrait of my House captures the unique acoustic signature of domestic space through careful field recording and sound mapping. The piece documents the subtle sounds that define a living space - creaking floors, humming appliances, settling walls - and transforms them into a musical composition that reveals the hidden rhythms of home.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.mp4?title=Portrait%20of%20my%20House%20Soundscape&duration=360",
    skills: ["Field Recording", "Acoustic Mapping", "Environmental Sound", "Spatial Audio", "Domestic Soundscapes"],
    year: "2024",
    status: "completed",
  },

  // Performance Art Projects
  {
    id: "metamorphosis",
    title: "Metamorphosis",
    category: "Performance Art",
    description: "A live performance exploring themes of transformation and identity.",
    longDescription:
      "Metamorphosis is a live performance piece that explores the fluid nature of identity through movement, costume, and environmental interaction. The performance unfolds as a series of transformations, each revealing different aspects of the human experience. Audiences witness a journey of change that challenges fixed notions of self and celebrates the continuous process of becoming.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.mp4?title=Metamorphosis%20Performance&duration=480",
    skills: ["Performance Art", "Movement Design", "Costume Design", "Live Art", "Conceptual Performance"],
    year: "2024",
    status: "completed",
  },
  {
    id: "object-permanence",
    title: "Object Permanence",
    category: "Performance Art",
    description: "An interactive performance examining presence, absence, and memory.",
    longDescription:
      "Object Permanence is an interactive performance that investigates the psychological concept of object permanence through live art. The piece engages audiences in a exploration of presence and absence, using everyday objects and ritualistic actions to examine how we maintain connections to things and people even when they are not visible. The performance creates a meditative space for contemplating memory and attachment.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.mp4?title=Object%20Permanence%20Interactive&duration=540",
    skills: [
      "Interactive Performance",
      "Conceptual Art",
      "Audience Engagement",
      "Ritualistic Design",
      "Psychological Exploration",
    ],
    year: "2024",
    status: "completed",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.id === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All Projects") {
    return projectsData
  }
  return projectsData.filter((project) => project.category === category)
}

export function getNextProject(currentSlug: string): Project | null {
  const currentIndex = projectsData.findIndex((project) => project.id === currentSlug)
  if (currentIndex === -1 || currentIndex === projectsData.length - 1) {
    return null
  }
  return projectsData[currentIndex + 1]
}

export function getPreviousProject(currentSlug: string): Project | null {
  const currentIndex = projectsData.findIndex((project) => project.id === currentSlug)
  if (currentIndex === -1 || currentIndex === 0) {
    return null
  }
  return projectsData[currentIndex - 1]
}
