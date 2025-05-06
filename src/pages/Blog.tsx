import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import BentoBox from '../components/BentoBox';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Hackathon Survival Kit: Your Full Stack Guide to Crushing It From Start to Finish",
    excerpt: "So you're diving into a hackathon? Good. Let’s cut the fluff. This is not your regular guide. This is the unfiltered checklist—the brain, blood, and backbone of every successful hackathon grind.",
    date: "April 30, 2025",
    readTime: "15 min read",
    image: "assets/blog1.jpeg",
    category: "Hackathon",
    featured: true
  },
  
];

const Blog: React.FC = () => {
  // Get featured and non-featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <div className="space-y-12">
      <SectionTitle 
        title="Blog" 
        subtitle="Thoughts, tutorials, and insights on development and design" 
      />
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-6">Featured Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BentoBox className="h-full">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-light-text/60 dark:text-dark-text/60 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-light-text/60 dark:text-dark-text/60 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-light-text/80 dark:text-dark-text/80 mb-4">
                    {post.excerpt}
                  </p>
                  <a href={`/blog/${post.id}`} className="inline-flex items-center text-primary text-sm hover:underline">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </BentoBox>
              </motion.div>
            ))}
          </div>
        </section>
      )}
      
      {/* All Posts */}
      <section>
        <h2 className="text-xl font-semibold mb-6">All Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BentoBox className="h-full">
                <div className="h-40 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-light-text/60 dark:text-dark-text/60 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-light-text/80 dark:text-dark-text/80 mb-3">
                  {post.excerpt.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-light-text/60 dark:text-dark-text/60 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                  <a href={`/blog/${post.id}`} className="inline-flex items-center text-primary text-sm hover:underline">
                    Read <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </BentoBox>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section>
        <BentoBox className="bg-primary/5 border-primary/20">
          <div className="py-8 px-6 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Subscribe to my newsletter
            </h3>
            <p className="text-light-text/80 dark:text-dark-text/80 mb-6 max-w-lg mx-auto">
              Get the latest articles, tutorials, and updates directly in your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
              <button className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </BentoBox>
      </section>
    </div>
  );
};

export default Blog;
