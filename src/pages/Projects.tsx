import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique tags for filter
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <div className="space-y-12">
      <SectionTitle 
        title="My Projects" 
        subtitle="A showcase of my work and contributions" 
      />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 text-sm rounded-full transition-colors
            ${filter === 'all' 
              ? 'bg-primary text-white' 
              : 'bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:bg-primary/20 dark:hover:bg-primary/20'
            }`}
        >
          All
        </button>
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors
              ${filter === tag 
                ? 'bg-primary text-white' 
                : 'bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:bg-primary/20 dark:hover:bg-primary/20'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
        transition={{ duration: 0.5, type: "spring" }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl mb-2">No projects found</h3>
          <p className="text-light-text/70 dark:text-dark-text/70">
            Try selecting a different filter
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;