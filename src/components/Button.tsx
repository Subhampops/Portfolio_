import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 border-2 border-primary',
    secondary: 'bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:bg-light-accent/80 dark:hover:bg-dark-accent/80 border-2 border-light-accent dark:border-dark-accent',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
  };

  const sizeClasses = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        rounded-md font-medium transition-colors duration-200
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;