import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  icon: string;
  level?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, level = 0 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border"
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-sm font-medium text-center">{name}</h3>
      {level > 0 && (
        <div className="w-full mt-2 bg-light-border dark:bg-dark-border rounded-full h-1.5">
          <div 
            className="bg-primary h-1.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </motion.div>
  );
};

export default SkillItem;