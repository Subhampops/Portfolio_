import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-light-border dark:bg-dark-border hover:bg-primary dark:hover:bg-primary transition-colors"></div>
    ),
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 pb-10">
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <p className="text-light-text dark:text-dark-text mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-light-text dark:text-dark-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;