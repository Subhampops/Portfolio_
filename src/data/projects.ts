export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PixelCraft Game Engine",
    description: "A lightweight 2D game engine built with WebGL and TypeScript, optimized for browser-based pixel art games.",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["TypeScript", "WebGL", "Canvas API", "Game Development"],
    liveUrl: "https://pixelcraft-demo.example.com",
    repoUrl: "https://github.com/example/pixelcraft",
    featured: true
  },
  {
    id: 2,
    title: "RetroQuest RPG",
    description: "A turn-based RPG with retro pixel art aesthetics, featuring a deep storyline and classic gameplay mechanics.",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Redux", "PixelArt", "Game Development"],
    liveUrl: "https://retroquest.example.com",
    repoUrl: "https://github.com/example/retroquest"
  },
  {
    id: 3,
    title: "DevPortal Dashboard",
    description: "A comprehensive developer dashboard for monitoring API usage, performance metrics, and service health.",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "D3.js", "REST API", "Dashboard"],
    liveUrl: "https://devportal.example.com",
    repoUrl: "https://github.com/example/devportal",
    featured: true
  },
  {
    id: 4,
    title: "PixelPerfect UI Framework",
    description: "A customizable UI framework with pixel-perfect components designed specifically for gaming applications.",
    image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["UI Framework", "CSS3", "JavaScript", "Design System"],
    liveUrl: "https://pixelperfect.example.com",
    repoUrl: "https://github.com/example/pixelperfect"
  },
  {
    id: 5,
    title: "CloudSave Game Backend",
    description: "A scalable backend service for game save synchronization across multiple devices and platforms.",
    image: "https://images.pexels.com/photos/7887818/pexels-photo-7887818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Node.js", "MongoDB", "Express", "REST API"],
    repoUrl: "https://github.com/example/cloudsave"
  },
  {
    id: 6,
    title: "GameDev Blog Platform",
    description: "A specialized blogging platform for game developers to share insights, tutorials, and postmortems.",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "Markdown", "CMS"],
    liveUrl: "https://gamedev-blog.example.com",
    featured: true
  }
];