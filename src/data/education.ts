export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Machine Learning",
    institution: "Asansol Engineering College",
    location: "Asansol, India",
    startDate: "2022",
    endDate: "2026",
    description: "In my B.Tech AIML journey, I learned to build intelligent systems using Python, machine learning, deep learning, data science, and backend development, while sharpening my problem-solving and project-building skills through real-world applications and hackathons.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stanford/stanford-original.svg"
  },
  {
    id: 2,
    degree: "All India Senior School Certificate Examination(CBSE)",
    field: "Science",
    institution: "St. Joseph's Convent High School Chittaranjan CBSE",
    location: "Chittaranjan, India",
    startDate: "2020",
    endDate: "2022",
    description: "In Class 12, I gained a strong foundation in Physics, Chemistry, Biology, and Mathematics, learning to think critically, solve complex problems, and understand the principles that govern both living systems and the physical world.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
  },
  {
    id: 3,
    degree: "Indian Certificate of Secondary Education(ICSE)",
    field: "Basic Education",
    institution: "St. Joseph's Convent Higher Seconday School Chittaranjan",
    location: "Chittaranjan, India",
    startDate: "2007",
    endDate: "2020",
    description: "Up to Class 10, I studied under the ICSE curriculum, where I built a strong foundation in English, Science, Mathematics, and Social Studies, along with a focus on analytical thinking, communication, and overall academic discipline.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
  }

];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "December 2023",
    credentialId: "100457395OCI23AIFCA",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=330D2E2ED663F899D77FDF5B0BEE9DC623D21B1936DBF16542E549B2800BFD61",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
  },
  {
    id: 2,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "January 2024",
    expires: "N/A",
    credentialUrl: "https://www.credly.com/badges/2e9f896a-40c6-4991-8197-af176d71a311/public_url",
    logo: "https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg"
  },
  {
    id: 3,
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 2024",
    credentialId: "312588456OCI2024GAIOCP",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B92DFFA48671DF32991226A41EA367E8E0087860F11FC17C36BF35805FE523D9",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
  },
  {
    id: 4,
    name: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "March 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/SE4MYN3DRBAB",
    logo: "https://cdn.brandfetch.io/idcuOol42D/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  {
    id: 5,
    name: "R for Data Science",
    issuer: "IBM",
    date: "May 2025",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/5a07cc1b7c1842aca250ad55f0452a5c",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 6,
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 2024",
    credentialId: "312588456OCI2024GAIOCP",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B92DFFA48671DF32991226A41EA367E8E0087860F11FC17C36BF35805FE523D9",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
  }
];
