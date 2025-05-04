import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl
}) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              aria-label="View project repository"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-light-text/80 dark:text-dark-text/80 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-light-accent dark:bg-dark-accent text-light-text/80 dark:text-dark-text/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;