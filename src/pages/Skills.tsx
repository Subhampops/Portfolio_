import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillItem from '../components/SkillItem';
import { skills } from '../data/skills';
import { partners } from '../data/partners';
import BentoBox from '../components/BentoBox';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools & DevOps' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <div className="space-y-16">
      {/* Skills Section */}
      <section>
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with" 
        />
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:bg-light-accent dark:hover:bg-dark-accent'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          layout
          transition={{ duration: 0.5, type: "spring" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <SkillItem 
                name={skill.name} 
                icon={skill.icon} 
                level={skill.level} 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Partners & Communities Section */}
      <section>
        <SectionTitle 
          title="Partners & Communities" 
          subtitle="Organizations and communities I'm part of" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <BentoBox key={partner.id} delay={index * 0.1}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{partner.name}</h3>
                  <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary mt-1 inline-block hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </BentoBox>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;