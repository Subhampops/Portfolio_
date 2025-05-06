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
    name: "Robotics Club, Asansol Engineering College",
    logo: "assets/rlogo.svg",
    website: "https://www.linkedin.com/company/robotics-club-aec2017",
    description: "President"
  },
  {
    id: 2,
    name: "HackTropica 2025",
    logo: "assets/hlogo.svg",
    website: "https://www.hacktropica.tech/",
    description: "Lead Organizer"
  },
  {
    id: 3,
    name: "Entrepreneurship Development Cell of Asansol Engineering College",
    logo: "assets/elogo.svg",
    website: "https://education.github.com",
    description: "Core Committee Member"
  },
  {
    id: 4,
    name: "Google Cloud Arcade Facilitator Program 2024",
    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/arcade_email_mobile_header-removebg-preview_HgIPkuv.png",
    website: "https://go.qwiklabs.com/arcade",
    description: "Cloud Arcade Facilitator"
  },
  {
    id: 5,
    name: "Apex Circle",
    logo: "assets/apex.png",
    website: "https://web3gaming.org",
    description: "Co-Lead"
  },
  {
    id: 6,
    name: "Apertre 2.0",
    logo: "assets/alogo.png",
    website: "https://s2apertre.resourcio.in/",
    description: "Contributer"
  }
];
