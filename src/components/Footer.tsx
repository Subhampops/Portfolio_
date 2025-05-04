import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Heart, 
  Mail, 
  Gamepad2,
  Download
} from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">Subham Bhattacharya</span>
            </div>
            <p className="text-sm mb-6 text-light-text/80 dark:text-dark-text/80">
            Part-time human, full-time code wizard creating gaming-inspired digital experiences.
            </p>
            <Button 
              variant="outline"
              size="sm"
              icon={<Download size={16} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="mb-4"
            >
              Download Resume
            </Button>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Subhampops" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/subham2409/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/Subham0310" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/savage_eradicator/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">Projects</Link>
              <Link to="/skills" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">Skills</Link>
              <Link to="/blog" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm hover:text-primary dark:hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="flex items-start space-x-2 mb-2">
              <Mail size={18} className="mt-0.5 text-primary" />
              <a 
                href="mailto:subhampops2409@gmail.com" 
                className="text-sm hover:text-primary dark:hover:text-primary transition-colors"
              >
                subhampops2409@gmail.com
              </a>
            </div>
            <p className="text-sm text-light-text/80 dark:text-dark-text/80 mt-4">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>
        
        <div className="border-t border-light-border dark:border-dark-border pt-6 mt-6 text-center text-sm text-light-text/70 dark:text-dark-text/70">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Subham Bhattacharya. All rights reserved. Made with <Heart className="h-4 w-4 text-red-500" /> by Subham
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;