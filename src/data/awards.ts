export interface Award {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  li_url?: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "Winnner at Technova 2024 (National Level)",
    organization: "Tech Club, Asansol Engineering College",
    date: "November 2023",
    description: "Awarded for my innovative project UPASHAYA at Technova 2024, a national-level Competition. UPASHAYA is a web-based platform that connects patients with doctors, offering features like appointment scheduling, telemedicine, and health record management. The project aims to enhance healthcare accessibility and efficiency.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    li_url: "https://www.linkedin.com/posts/subham2409_technova2024-innovation-firstprize-activity-7175795316539969536-BR_W?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 2,
    title: "3rd Place at Smart India Hackathon 2024 College",
    organization: "Asansol Engineering College",
    date: "August 2024",
    description: "Secured 3rd prize for Khan-Abhilekh at the Smart India Hackathon (College Level) for building a digital log book handover system with safety management system for mines.",
    image: "https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    li_url: "https://www.linkedin.com/posts/subham2409_smartindiahackathon2024-innovation-khanabhilekh-activity-7245664795973038080-4OhD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 3,
    title: "Winner of Design Fusion 2024",
    organization: "Narula Institute of Technology",
    date: "May 2023",
    description: "Won the Design Fusion 2024 at Narula Institute of Technology. We presented Mumgency - a pregnency Monitoring system that tracks health parameters and provides real-time alerts to doctors and family members.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    li_url: "https://www.linkedin.com/posts/subham2409_designfusion2024-innovation-teamwork-activity-7158781362441744385-uj4Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  },
  {
    id: 4,
    title: "3rd place at Hack-O-NiT 2024",
    organization: "Narula Institute of Technology",
    date: "March 2024",
    description: "Secured 3rd place at Hack-O-NiT 2024 for our project 'Manoscope', a mental health support system that provides personalized resources and connects users with mental health professionals.",
    image: "https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    li_url: "https://www.linkedin.com/posts/subham2409_hackathon-innovation-teamwork-activity-7196926571989901312-O62T?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUjt5oBZO6HR7OhLrPI2nWTwOF7hV_OLGg"
  }
];