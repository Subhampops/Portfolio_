export interface Testimonial {
  text: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Subham is an exceptional individual whose dedication, diligence, and passion for excellence are truly commendable. He consistently demonstrates a high level of commitment and professionalism in all his endeavors.As a prominent and active member of the Robotics Club, Subham has made significant contributions through his innovative thinking and technical expertise. His leadership and initiative were particularly evident when he successfully organized a 24-hour Hackathon under the title Hackatropia, marking a milestone in the club’s history. The event not only showcased his organizational capabilities but also highlighted his ability to inspire and lead teams toward a common goal.",
    name: "Rumsha Waqia Wania",
    position: "Technical Assistant",
    company: "EY",
    avatar: "/public/assets/Avatar/Pic1.png"
  },
  {
    text: "I was blown away by Subham's ability to turn my vague ideas into a polished product. His technical knowledge combined with his creativity makes him stand out from other developers I've worked with.",
    name: "Sarah Williams",
    position: "Product Manager",
    company: "InnovateTech",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    text: "Subham has a rare combination of technical expertise and design sensibility. The gaming-inspired portfolio he created for our project attracted a lot of positive attention from our target audience.",
    name: "Michael Chen",
    position: "Creative Director",
    company: "PixelPerfect Studios",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    text: "Working with Subham was a pleasure. He brings a high level of professionalism and technical skill to every project, and his passion for gaming-inspired design elements added a unique flavor to our collaboration.",
    name: "Emily Rodriguez",
    position: "UX Designer",
    company: "GameCraft",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];