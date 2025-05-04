export interface Event {
  id: number;
  title: string;
  organization: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  url?: string;
  li_url?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Apache Kafka® Meetup in Kolkata",
    organization: "Apache Kafka® Community, Kolkata",
    description: "Participated in the Apache Kafka® Meetup in Kolkata, where I shared insights on 'Building Real-time Data Pipelines with Kafka' and networked with industry experts.",
    date: "April 2024",
    location: "Kolkata, India",
    image: "/assets/About/Event2.jpeg",
    li_url: "https://www.linkedin.com/posts/subham2409_apachekafka-kip932-eventstreaming-activity-7322843119262015489-VOJ6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 2,
    title: "HackTropica 2025",
    organization: "Robotics Club, Asansol Engineering College",
    description: "As the Lead Organizer of HackTropica 2025, I spearheaded the end-to-end planning, coordination, and execution of the hackathon, bringing together over other organizers & participants, mentors, and industry experts. I led a dedicated team to manage logistics, sponsorship outreach, marketing, and judging frameworks, ensuring a seamless and engaging experience for all attendees. From curating problem statements to hosting tech sessions and speaker panels, I focused on creating an inclusive, innovation-driven environment that empowered students and developers to showcase their skills and solve real-world challenges. The event was a great success, fostering collaboration, creativity, and community spirit in the tech ecosystem.",
    date: "April 2025",
    location: "Asansol, India",
    image: "/assets/About/Event1.jpeg",
    url: "https://www.hacktropica.tech/",
    li_url:"https://www.linkedin.com/posts/subham2409_hacktropica2024-successstory-techforgood-activity-7315070735503237122-8ESj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 3,
    title: "Introduction to Computer Hardware Basics and Computer Architecture by Subham Bhattacharya",
    organization: "Robotics Club, Asansol Engineering College",
    description: "A quick and beginner-friendly introduction by me covering the essentials of computer hardware components and the fundamentals of computer architecture, designed to build a strong technical foundation by me.",
    date: "November 2024",
    location: "Asansol, India",
    image: "/assets/About/Event3.jpeg",
    li_url: "https://www.linkedin.com/posts/riya-gupta-a7330b329_hey-everyone-todays-the-session-conducted-ugcPost-7254561072039272449-tz3n?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 4,
    title: "FROSTHACKS",
    organization: "Academy of Technology",
    description: "At Frost Hacks 1.0, I collaborated with my team to build a feature-rich version of Khan-Abhilekh from scratch within 36 hours. As a key contributor, I focused on enhancing the platform’s core functionalities, integrating real-time case referencing, and ensuring smooth UI/UX. The experience sharpened my problem-solving, teamwork, and time management skills while reinforcing my ability to deliver under pressure in a fast-paced hackathon environment.",
    date: "February 2025",
    location: "Adisaptagram, India",
    image: "/assets/About/Event4.jpeg",
    url: "https://www.frosthacks.in/",
    li_url: "https://www.linkedin.com/posts/subham2409_hackathon-teamwork-innovation-activity-7294961314651619328-05ma?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 5,
    title: "Diversion 2025",
    organization: "IEM",
    description: "At Diversion 2K25, I had the opportunity to showcase my technical skills and creative thinking through engaging activities and hands-on challenges. It was an inspiring event filled with innovation, collaboration, and learning. I connected with like-minded peers, exchanged ideas, and gained valuable insights that further fueled my passion for tech and building impactful solutions.",
    date: "February 2025",
    location: "Kolkata, India",
    image: "/assets/About/Event6.jpeg",
    url: "https://www.diversion.tech/",
    li_url: "https://www.linkedin.com/posts/subham2409_my-experience-at-diversion-2k25-what-activity-7299992660650377218-AMKC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 6,
    title: "JIS IdeaJAM 2025",
    organization: "JIS Group",
    description: "At Idea Jam, We pitched innovative solution Credit Card Fraud Detection, focusing on Credit Card Security and Finding of great datasets. Competing against several teams, we could not win it by mere 2 points 🥲, showcasing the strength of our idea and presentation. The event honed my skills in ideation, public speaking, and rapid problem-solving, while reinforcing the importance of user-centric design and impactful storytelling.",
    date: "February 2025",
    location: "Agarpara, India",
    image: "/assets/About/Event5.jpeg",
  },
  {
    id: 7,
    title: "Google Cloud Arcade Facilitator Program 2024",
    organization: "Robotics Club, Asansol Engineering College",
    description: "As a Google Cloud Arcade Facilitator, I guided and supported learners through their cloud journey by helping them navigate hands-on labs, complete quests, and understand core Google Cloud concepts. I actively engaged with the community, resolved technical doubts, and fostered a collaborative learning environment. My role was to empower participants to build real-world cloud skills and confidently explore tools like Compute Engine, Cloud Functions, BigQuery, and more.",
    date: "July 2025",
    location: "Asansol, India",
    image: "/assets/About/Event7.png",
    url: "https://www.cloudarcade.dev/",
    li_url: "https://www.linkedin.com/posts/subham2409_googlecloudarcade-googlecloudready-arcadefacilitator2024-activity-7215926400686379008-Q4Vt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  }
];
