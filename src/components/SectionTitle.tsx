import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left' 
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div 
      className={`mb-10 ${alignment[align]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-light-text/70 dark:text-dark-text/70">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-16 bg-primary mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;