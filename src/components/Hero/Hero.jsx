import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaDownload, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Web Designer',
    'Web Developer',
    'Front End Developer',
    'Computer Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              KIFUNYE MARK
            </motion.h1>
            
            <motion.div 
              className="hero-profession"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>I'm a </span>
              <motion.span 
                key={currentText}
                className="typed-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentText]}
              </motion.span>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/256759542486?text='hello'"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> Hire Me
              </motion.a>
              
              <motion.button
                onClick={scrollToContact}
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Contact Me
              </motion.button>
              
              <motion.a
                href="/assets/cv/cv.docx"
                download="mark_kifunye_cv"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img 
            src="/assets/images/mark.jpg" 
            alt="Kifunye Mark"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="hero-image-overlay"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

