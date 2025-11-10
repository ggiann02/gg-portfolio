export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  image: string
  galleryImages?: string[]
  videoUrl?: string
  videoUrls?: string[]
  liveUrl?: string
  skills: string[]
  year: string
  status: "completed" | "in-progress"
}

export const projectsData: Project[] = [
  // Web & UI/UX Projects
  {
    id: "goodpath-refresh",
    title: "Goodpath Website Refresh",
    category: "Web & UI/UX",
    description: "A website redesign project for Goodpath",
    longDescription:  "As an extension of my work with Goodpath, " + 
    "I worked with the Marketing, Design and Development teams to refresh the Goodpath website. " +
      "The project began with brainstorming sessions to outline a clear, refreshed brand identity " +
      "and user experience goals. From there, I collaborated closely with designers to create wireframes and high-fidelity mockups " +
      "that aligned with the new vision. After multiple iterations and feedback rounds, the Development team and I implemented the designs using React and Tailwind CSS, " +
      "ensuring responsiveness and accessibility across devices. The end result was a modern, user-friendly website that effectively communicated Goodpath's mission and services. ",
    image: "/images/goodpath/goodpath_images.webp",
    galleryImages: [
      "/images/goodpath/Refresh-1.png",
      "/images/goodpath/Refresh-2.png",
      "/images/goodpath/Refresh-3.png",
    ],
    liveUrl: "https://goodpath.com",
    skills: ["React Native", "CSS Tailwind", "Figma"],
    year: "2025",
    status: "completed",
  },
  {
    id: "fridge-magnets",
    title: "I'm Sorry for the Fridge Magnets",
    category: "Web & UI/UX",
    description: "A web art project exploring the word 'sorry'",
    image: "/images/FridgeMagnets.png",
    liveUrl: "https://ggiann02.github.io/ImSorryForTheFridgeMagnets/",
    skills: ["HTML", "CSS", "P5.js", "JavaScript"],
    year: "2025",
    status: "completed",
  },
  {
    id: "shelf-of-time",
    title: "A Shelf of Time",
    category: "Web & UI/UX",
    description: "A web design project focused on reading and time",
    image: "/images/shelfOfBooks.png",
    liveUrl: "https://ggiann02.github.io/aShelfOfTime/",
    skills: ["Web", "Design", "HTML"],
    year: "2025",
    status: "completed",
  },
  {
    id: "eat-the-metaballs",
    title: "Eat the Metaballs",
    category: "Web & UI/UX",
    description: "An interactive GLSL shader-based game with mesmerizing graphics.",
    longDescription:
      "Eat the Metaballs is an innovative web-based game that combines interactive gameplay with stunning visual effects powered by GLSL shaders. Players navigate through a dynamic environment of colorful metaballs that blend and morph in real-time, creating a mesmerizing visual experience. The game features multiple color themes, adjustable spawn intervals, and score tracking, all rendered using WebGL for optimal performance.\n\nKEY FEATURES OF THE PROJECT\n\n• Metaball Rendering: Implemented metaballs using implicit surfaces and signed distance functions (SDFs). The smooth blending of metaballs was achieved through GLSL shaders, giving the game its organic, fluid visuals.\n\n• WebGL Pipeline: Leveraged WebGL to handle vertex and fragment shaders, ensuring efficient real-time rendering in a web browser.\n\n• Interactive Gameplay: Designed user interactions where players control a point that \"eats\" smaller metaballs while avoiding larger ones, blending graphics with an engaging game mechanic.\n\n• Performance Optimization: Carefully optimized shader programs to compute metaball visuals dynamically, balancing visual quality and performance.\n\nMore than just a project, \"Eat The Metaball\" kickstarted my passion for shaders. It was here that I discovered how powerful code can be—not just for solving problems, but for creating something artistic, interactive, and fun. This project showed me the creative potential behind graphics programming, blending mathematical precision with visual design.\n\n\"Eat The Metaball\" is a milestone that reflects both my technical growth and my excitement for combining code, creativity, and playability.",
    image: "/images/metaball-cover.png",
    liveUrl: "https://ggiann02.github.io/EatTheMetaball/",
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
    image: "/images/ux/remodel5.png",
    galleryImages: [
      "/images/ux/remodel1.png",
      "/images/ux/remodel2.png",
      "/images/ux/remodel3.png",
      "/images/ux/remodel4.png",
      "/images/ux/remodel5.png",
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
    image: "/images/birba/BATF_cover.png",
    galleryImages: [
      "/images/birba/BirbaAndTheFly.png",
      "/images/birba/BirbaAndTheFly2.png",
      "/images/birba/BirbaAndTheFly3.png",
      "/images/birba/BirbaAndTheFly4.png",
      "/images/birba/BirbaAndTheFly5.png",
      "/images/birba/BirbaAndTheFly6.png",
      "/images/birba/BirbaAndTheFly7.png",
      "/images/birba/BirbaAndTheFly8.png",
      "/images/birba/BirbaAndTheFly9.png",
      "/images/birba/BirbaAndTheFly10.png",
      "/images/birba/BirbaAndTheFly11.png",
      "/images/birba/BirbaAndTheFly12.png",
      "/images/birba/BirbaAndTheFly13.png",
      "/images/birba/BirbaAndTheFly14.png",
      "/images/birba/BirbaAndTheFly15.png",
      "/images/birba/BirbaAndTheFly16.png",
      "/images/birba/BirbaAndTheFly17.png",
      "/images/birba/BirbaAndTheFly18.png",
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
      "/images/diabolum/D4.png",
      "/images/diabolum/D2.png",
      "/images/diabolum/D3.png",
      "/images/diabolum/D1.png",
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
      "Mapleworld Maze creates an immersive 3D environment that combines natural beauty with interactive gameplay elements. The project features detailed landscape modeling, character design, and environmental storytelling. Players explore a whimsical world filled with cozy cottages, lush gardens, and hidden pathways, creating a peaceful yet engaging experience that celebrates the beauty of rural life.\n\nMapleworld Maze was the final project of my Virtual Reality class where, within the course of one semester, I learned the basics of Unity- from simple modeling, lighting, animation, to more complex world building, scripting and exporting for use in the Oculus Quest VR headset.\n\nThis project took a little over three weeks. It's fully interactive, as the player can walk around the world, approach the characters, pick up lanterns and glowing mushrooms (all of which was achieved through scripting).\n\nI am very proud of this project as I was able to overcome many challenges, such as compatibility issues, weak GPU, faulty animations and failed interactive elements.",
    image: "/images/mapleworld.png",
    videoUrl: "https://drive.google.com/file/d/1jxWORQCS5xMMo3tVVZjkRfBtHycYrTXr/preview",
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
    videoUrl: "https://drive.google.com/file/d/1Xv7A9EO5HW21-fFPFfS9EdztjCIIn2O8/preview",
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
      "Skinwalker City presents a dreamlike 3D environment where figures move through an otherworldly landscape. The project combines organic terrain modeling with dynamic character animation to create a sense of perpetual motion and transformation. The work explores themes of identity, movement, and the relationship between beings and their environment through stunning visual storytelling.\n\nSkinwalker City was my first ever interactive game and it's made in Unity. It was also my first time world building using terrain tools and various assets.",
    image: "/images/skinwalkercity.png",
    galleryImages: [
      "/images/skinwalkercity.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://drive.google.com/file/d/1VBFfGThD3EuDT_UXe6JcWTzxw0cBg5PK/preview",
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
    videoUrl: "https://drive.google.com/file/d/1zS2M8lrY6PZiyL_8FuCbKomFink9OWUt/preview",
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
    videoUrl: "https://drive.google.com/file/d/1Fx-efEDD35Wvstxz70wZmA6c2Q1cstXt/preview",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23000000'/%3E%3C/svg%3E",
    videoUrl: "https://drive.google.com/file/d/1MmtyWhF6PC9pj5XVN5HKDjPAHyu6fGLA/preview",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23000000'/%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23000000'/%3E%3C/svg%3E",
    videoUrl: "https://drive.google.com/file/d/1AW1h052_dJjx6TYqckjiKf-9S91psnjX/preview",
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
    image: "/images/metamorphosis/metamorphosis-img1.jpg",
    galleryImages: [
      "/images/metamorphosis/metamorphosis-img2.jpg",
      "/images/metamorphosis/metamorphosis-img1.jpg",
    ],
    videoUrls: [
      "https://drive.google.com/file/d/1FqaldIa_0_gwxotmLV2opwPQE_xI-v4l/preview",
      "https://drive.google.com/file/d/1VBpOL73zUMNiBdY5J12R2B4Op0442hm9/preview",
      "https://drive.google.com/file/d/16iRhoegg7gbZmu8TC5jGLSahd4H_IaAK/preview",
    ],
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
    image: "/images/objPermanence/object-2.jpg",
    galleryImages: [
      "/images/objPermanence/op1.png",
      "/images/objPermanence/object-1.jpg",
      "/images/objPermanence/object-2.jpg",
    ],
    videoUrls: [
      "https://drive.google.com/file/d/1PQIcgixFMOFqOdTr6q3RGjUy9S06M6Vy/preview",
      "https://drive.google.com/file/d/10nSjyT_InX8cMyjpAJ3kIGzj3SRqFha7/preview",
    ],
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
