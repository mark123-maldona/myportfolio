import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const testimonials = [
    { 
      name: 'Aturinda Vivian', 
      role: 'Designer', 
      message: 'Professional and creative. I love his work ❤️❤️', 
      image: '/assets/images/vivan.jpg',
      rating: 5
    },
    { 
      name: 'Nansayi Lizet', 
      role: 'Pharmacist', 
      message: 'Delivered on time and beyond expectations.', 
      image: '/assets/images/liz.jpg',
      rating: 5
    },
    { 
      name: 'Musoga Jackson', 
      role: 'Project Manager Hovita', 
      message: 'Great work! Highly recommend.', 
      image: '/assets/images/jack.jpg',
      rating: 5
    },
    { 
      name: 'Tulina Patience', 
      role: 'Agro Processor', 
      message: 'Great work! Perfectionist. Thanks for the commitment', 
      image: '/assets/images/patience.jpg',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>Testimonials</p>
          <h2>What Clients Say</h2>
        </div>
        
        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="testimonial-quote-icon">
            <FaQuoteLeft />
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + starIndex * 0.1 + 0.6, duration: 0.3 }}
                      >
                        <FaStar className="star" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p
                    className="testimonial-message"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  >
                    "{testimonial.message}"
                  </motion.p>
                  
                  <div className="testimonial-author">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1, duration: 0.5, type: "spring" }}
                    />
                    <div className="author-info">
                      <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 1.2, duration: 0.4 }}
                      >
                        {testimonial.name}
                      </motion.h4>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 1.4, duration: 0.4 }}
                      >
                        {testimonial.role}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

