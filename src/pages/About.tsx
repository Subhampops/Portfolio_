import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import BentoBox from '../components/BentoBox';
import { education, certifications } from '../data/education';
import { awards } from '../data/awards';
import { events } from '../data/events';
import { Calendar, Award, BookOpen, GraduationCap } from 'lucide-react';
import JumpingGame from '../components/JumpingGame';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* About Me Section */}
      <section>
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my journey" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden border border-light-border dark:border-dark-border h-[350px]">
              <img 
                src="/assets/About/header.jpeg" 
                alt="Subham Bhattacharya" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">
              AI, Blockchain & Web Innovator
            </h3>
            
            <p><h3>
            Hi there! I'm Subham Bhattacharya, a developer with a passion for creating beautiful, functional, and user-friendly applications.</h3></p>
            <p>
            With a strong foundation in computer science and hands-on experience in both front-end and back-end development, I take a full-stack approach to building impactful digital solutions. My interests span across AI/ML, blockchain, and backend systems — and I love turning complex ideas into smooth, scalable applications.
            </p>
            <p>
            When I'm not coding, you’ll probably find me watching anime, discovering cool open-source tools, or brainstorming ideas for my next big build.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-light-text/70 dark:text-dark-text/70">Asansol, West Bengal, India </p>
              </div>
              <div>
                <h4 className="font-semibold">Experience</h4>
                <p className="text-light-text/70 dark:text-dark-text/70">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold">Birthday</h4>
                <p className="text-light-text/70 dark:text-dark-text/70">April 3, 2004</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-light-text/70 dark:text-dark-text/70 truncate">
                  subhampops2409@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mini Game Section */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">Try My Mini Game!</h3>
          <p className="text-light-text/70 dark:text-dark-text/70">
            Click or tap to jump and avoid obstacles. How far can you go?
          </p>
        </div>
        <JumpingGame />
      </section>
      
      {/* Education Section */}
      <section>
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {education.map((item, index) => (
            <BentoBox key={item.id} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="bg-light-accent dark:bg-dark-accent p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.degree} in {item.field}</h3>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-light-text/70 dark:text-dark-text/70 mb-2">
                    {item.startDate} - {item.endDate} • {item.location}
                  </p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </BentoBox>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <BentoBox key={cert.id} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-2">
                {cert.logo && (
                  <div className="w-12 h-12 mb-3">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <h4 className="font-semibold text-sm">{cert.name}</h4>
                <p className="text-xs text-light-text/70 dark:text-dark-text/70">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary mt-2 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </BentoBox>
          ))}
        </div>
      </section>
      
      {/* Events Section */}
      <section>
        <SectionTitle 
          title="Events & Conferences" 
          subtitle="Key events and conferences I've participated in" 
        />
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BentoBox>
                <div className="flex flex-col md:flex-row gap-6">
                  {event.image && (
                    <div className="md:w-1/4">
                      <div className="h-40 md:h-full rounded-lg overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-light-text/70 dark:text-dark-text/70">
                        {event.date} • {event.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-primary text-sm mb-3">{event.organization}</p>
                    <p className="text-sm text-light-text/80 dark:text-dark-text/80">
                      {event.description}
                    </p>
                    {event.url && (
                      <a 
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary mt-3 inline-block hover:underline"
                      >
                        Event Website
                      </a>
                    )}
                    <p></p>
                    {event.li_url && (
                      <a 
                        href={event.li_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary mt-3 inline-block hover:underline"
                      >
                        Linkedin Post
                      </a>
                    )}
                  </div>
                </div>
              </BentoBox>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Awards Section */}
      <section>
        <SectionTitle 
          title="Awards & Recognition" 
          subtitle="Achievements and recognition in my professional journey" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <BentoBox key={award.id} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="bg-light-accent dark:bg-dark-accent p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{award.title}</h3>
                  </div>
                  <p className="text-primary text-sm">{award.organization}</p>
                  <p className="text-xs text-light-text/70 dark:text-dark-text/70 mb-2">
                    {award.date}
                  </p>
                  <p className="text-sm">{award.description}</p>
                  {award.li_url && (
                      <a 
                        href={award.li_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary mt-3 inline-block hover:underline"
                      >
                        Linkedin Post
                      </a>
                    )}
                </div>
              </div>
            </BentoBox>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
