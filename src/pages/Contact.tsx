import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-16">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Feel free to contact me for any inquiries or collaborations" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <motion.div
            className="bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border p-6 shadow-sm h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
        
        <div>
          <motion.div
            className="bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border p-6 shadow-sm h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-light-accent dark:bg-dark-accent p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                    Asansol, West Bengal, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-light-accent dark:bg-dark-accent p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:subhampops2409@gmail.com"
                    className="text-sm text-light-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-primary"
                  >
                   subhampops2409@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-light-accent dark:bg-dark-accent p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+12345678901"
                    className="text-sm text-light-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-primary"
                  >
                    +91 9593565689
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="rounded-xl overflow-hidden border border-light-border dark:border-dark-border h-[400px] shadow-sm">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233842.62600940253!2d86.82946412702358!3d23.68342990382353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1746260655416!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Map location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;