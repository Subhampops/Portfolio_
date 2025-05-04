import React from 'react';
import { motion } from 'framer-motion';

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoBox: React.FC<BentoBoxProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border p-4 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

export default BentoBox;