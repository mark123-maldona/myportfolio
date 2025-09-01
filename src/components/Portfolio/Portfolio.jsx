import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('*');

  const projects = [
    { 
      title: 'Restaurant Website', 
      image: '/assets/images/rest1.png', 
      category: 'Web Design',
      filter: 'filter-1',
      description: 'A modern restaurant website with online ordering system',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      demoLink: 'https://mark123-maldona.github.io/my-portfolio/restuarant',
      codeLink: 'https://github.com/mark123-maldona/restuarantpro_kifunye.git'
    },
    { 
      title: 'Bible Quiz Game', 
      image: '/assets/images/quiz1.png', 
      category: 'Mobile Apps',
      filter: 'filter-2',
      description: 'Interactive Bible quiz application with scoring system',
      technologies: ['React Native', 'JavaScript', 'SQLite'],
      demoLink: '#',
      codeLink: '#'
    },
    { 
      title: 'Application Form', 
      image: '/assets/images/form1.png', 
      category: 'Web Development',
      filter: 'filter-3',
      description: 'Dynamic form application with validation and data processing',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filterCategories = [
    { name: 'All', filter: '*' },
    { name: 'Web Design', filter: 'filter-1' },
    { name: 'Mobile Apps', filter: 'filter-2' },
    { name: 'Web Development', filter: 'filter-3' }
  ];

  const filteredProjects = filter === '*' ? projects : projects.filter(project => project.filter === filter);

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>My Portfolio</p>
          <h2>Recent Projects</h2>
        </div>
        
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category.filter}
              className={`filter-btn ${filter === category.filter ? 'active' : ''}`}
              onClick={() => setFilter(category.filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${filter}`}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p className="category">{project.category}</p>
                    <p className="description">{project.description}</p>
                    
                    <div className="technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="portfolio-actions">
                      <motion.a
                        href={project.demoLink}
                        className="action-btn demo-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEye /> Demo
                      </motion.a>
                      <motion.a
                        href={project.codeLink}
                        className="action-btn code-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub /> Code
                      </motion.a>
                      <motion.a
                        href={project.demoLink}
                        className="action-btn link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

