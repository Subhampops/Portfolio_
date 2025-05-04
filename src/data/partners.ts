export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Unity Technologies",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    website: "https://unity.com",
    description: "Certified Unity developer and community contributor"
  },
  {
    id: 2,
    name: "Mozilla Developer Network",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg",
    website: "https://developer.mozilla.org",
    description: "Content contributor and documentation reviewer"
  },
  {
    id: 3,
    name: "GitHub Education",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    website: "https://education.github.com",
    description: "Campus expert and workshop facilitator"
  },
  {
    id: 4,
    name: "Indie Game Developer Association",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    website: "https://igda.org",
    description: "Active member and event organizer"
  },
  {
    id: 5,
    name: "Web3 Gaming Alliance",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg",
    website: "https://web3gaming.org",
    description: "Contributor to open standards for blockchain gaming"
  },
  {
    id: 6,
    name: "Game Developers Conference",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    website: "https://gdconf.com",
    description: "Speaker and session coordinator"
  }
];