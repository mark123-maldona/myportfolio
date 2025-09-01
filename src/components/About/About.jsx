import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { name: 'Web Design', percentage: 85 },
    { name: 'Web Development', percentage: 95 },
    { name: 'Apps Design', percentage: 90 },
    { name: 'Apps Development', percentage: 85 }
  ];

  return (
    <section id="about" className="section section-light" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>Learn About Me</p>
          <h2>2+ Years Of Experience</h2>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/images/about2.jpg" alt="About Kifunye Mark" />
            <div className="about-image-overlay">
              <motion.div 
                className="experience-badge"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="experience-number">2+</span>
                <span className="experience-text">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-description">
              <h3>Hello! I'm a Passionate Web Developer</h3>
              <p>
                I am a web developer passionate about creating great websites and applications. 
                I have 2+ years of experience in web development and design, and I am always 
                willing to deliver exceptional results when tasked with challenging projects.
              </p>
              <p>
                My expertise spans across modern web technologies, responsive design, and 
                user experience optimization. I believe in writing clean, efficient code 
                and creating digital experiences that make a difference.
              </p>
            </div>

            <div className="skills">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
            </motion.div>

            <motion.button 
              className="btn btn-primary"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

