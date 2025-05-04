import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import TestimonialSlider from '../components/TestimonialSlider';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 dark:to-transparent -z-10"></div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text">
                Hi, I'm <span className="text-primary">Subham</span> Bhattacharya
              </h1>
              <h2 className="text-xl md:text-2xl mt-4 text-light-text/80 dark:text-dark-text/80">
              AI, Blockchain & Web Innovator
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-light-text/70 dark:text-dark-text/70 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I’m a Developer & Digital Craftsman, blending code with creativity to build innovative solutions in AI, Blockchain, and the Web.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                icon={<Download size={16} />}
                onClick={() => window.open('https://drive.google.com/file/d/12XkB2M_VPW-i2f0B-nRn5WmPbxUXSRKe/view?usp=drive_link', '_blank')}
                variant="outline"
              >
                Download Resume
              </Button>
              <Link to="/contact">
                <Button variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="relative h-[400px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-2xl border border-light-border dark:border-dark-border shadow-lg overflow-hidden">
              <img 
                src="/assets/image.jpeg" 
                alt="Subham Bhattacharya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-light-bg/80 dark:from-dark-bg/80 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>
      
      
      {/* Rest of the sections... */}
      <div>
      {/* ...existing code... */}
    
      
      {/* Add the TestimonialSlider component */}
      <section className="my-16">
        <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
        <p className="text-center text-light-text/70 dark:text-dark-text/70 mb-8">
          Kind words from those I've collaborated with. Their feedback inspires me to keep pushing boundaries and exploring new horizons in technology.
        </p>
        <TestimonialSlider />
      </section>
      
      {/* ...existing code... */}
    </div>
    </div>
  );
};

export default Home;
