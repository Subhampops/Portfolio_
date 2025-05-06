export interface Skill {
  name: string;
  icon: string;
  level?: number;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other' | 'blockchain' | 'hardware';
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
    category: 'frontend'
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 90,
    category: 'frontend'
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 92,
    category: 'frontend'
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 85,
    category: 'frontend'
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
    category: 'frontend'
  },
  {
    name: "Next.Js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nextjs/nextjs-original.svg",
    level: 90,
    category: 'frontend'
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: 80,
    category: 'frontend'
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    level: 75,
    category: 'frontend'
  },
  {
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
    level: 90,
    category: 'frontend'
  },
  {
    name: "Flutter",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/flutter/flutter-original.svg",
    level: 50,
    category: 'frontend'
  },

  // Backend
  {
    name: "Nest.Js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nestjs/nestjs-original.svg",
    level: 90,
    category: 'frontend'
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 88,
    category: 'backend'
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 85,
    category: 'backend'
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 80,
    category: 'backend'
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    level: 75,
    category: 'backend'
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 85,
    category: 'backend'
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 82,
    category: 'backend'
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original.svg",
    level: 82,
    category: 'backend'
  },
  {
    name: "Appwrite",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/appwrite/appwrite-original.svg",
    level: 82,
    category: 'backend'
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    level: 88,
    category: 'backend'
  },

  // Design
  {
    name: "Canva",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/canva/canva-original.svg",
    level: 90,
    category: 'design'
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 90,
    category: 'design'
  },
  {
    name: "XD",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/xd/xd-original.svg",
    level: 90,
    category: 'design'
  },
  {
    name: "Photoshop",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/photoshop/photoshop-original.svg",
    level: 85,
    category: 'design'
  },
  {
    name: "Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    level: 80,
    category: 'design'
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 90,
    category: 'tools'
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 82,
    category: 'tools'
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    level: 78,
    category: 'tools'
  },
  {
    name: "Apache Kalfka",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/apachekafka/apachekafka-original.svg",
    level: 42,
    category: 'tools'
  },
  
  {
    name: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: 95,
    category: 'tools'
  }
];
// Hardware
  {
    name: "Ardunio IDE",
    icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/arduino/arduino-original.svg",
    level: 90,
    category: 'tools'
  }
  
];
// BlockChain
  {
    name: "Etherium",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    level: 80,
    category: 'tools'
  },
  {
    name: "Avlanche",
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
    level: 59,
    category: 'tools'
  },
  {
    name: "Pharos",
    icon: "https://pbs.twimg.com/profile_images/1899385457047412736/vfvmbKVj_400x400.jpg",
    level: 43,
    category: 'tools'
  },
  
];
