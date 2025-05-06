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
    title: "Mannoscope",
    description: "Manoscope is an AI-powered mental health monitoring system that detects early signs of stress, anxiety, and depression using voice and facial analysis. It offers real-time emotional insights and connects users to appropriate mental health resources for timely support.",
    image: "assets/projects/manoscope.png",
    tags: ["TypeScript", "WebGL", "Canvas API", "Game Development"],
    liveUrl: "https://pixelcraft-demo.example.com",
    repoUrl: "https://github.com/example/pixelcraft",
    featured: true
  },
  {
    id: 2,
    title: "dPackChain",
    description: "dPackChain is a Web3-based package tracking system that leverages blockchain technology and Pharos indexing to ensure transparent, tamper-proof, real-time shipment tracking. It empowers users to verify delivery events with complete traceability across the logistics chain.",
    image: "assets/projects/dpack.png",
    tags: ["React", "Redux", "PixelArt", "Game Development"],
    liveUrl: "https://retroquest.example.com",
    repoUrl: "https://github.com/example/retroquest"
  },
  {
    id: 3,
    title: "Khan-Abhilekh",
    description: "Khan-Abhilekh is a digital logbook management system integrated with SMP (Shift Management Protocol), designed to streamline case referencing and operational handovers. It ensures secure, searchable, and timestamped logging of legal and administrative activities, improving traceability and decision-making in institutional environments.",
    image: "assets/projects/khan.png",
    tags: ["Vue.js", "D3.js", "REST API", "Dashboard"],
    liveUrl: "https://devportal.example.com",
    repoUrl: "https://github.com/example/devportal",
    featured: true
  },
  {
    id: 4,
    title: "Mumgency",
    description: "Mumgency is a pregnancy monitoring system that tracks health parameters and provides real-time alerts to doctors and family members. It aims to enhance maternal and fetal health through proactive monitoring and timely interventions.",
    image: "assets/projects/mumgency.png",
    tags: ["UI Framework", "CSS3", "JavaScript", "Design System"],
    liveUrl: "https://pixelperfect.example.com",
    repoUrl: "https://github.com/example/pixelperfect"
  },
  {
    id: 5,
    title: "Certifficate Generator using Streamlit",
    description: "A web application that generates certificates for participants of various events, allowing for easy customization and download.",
    image: "assets/projects/certi.png",
    tags: ["Node.js", "MongoDB", "Express", "REST API"],
    repoUrl: "https://github.com/example/cloudsave"
  },
  {
    id: 6,
    title: "Upashaya",
    description: "Upashaya is a web-based platform that connects patients with doctors, offering features like appointment scheduling, telemedicine, and health record management. The project aims to enhance healthcare accessibility and efficiency.",
    image: "assets/projects/upashaya.png",
    tags: ["Next.js", "Tailwind CSS", "Markdown", "CMS"],
    liveUrl: "https://gamedev-blog.example.com",
    featured: true
  }
];
