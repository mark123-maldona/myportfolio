import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaCalendarAlt, FaComments, FaAngleRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [expandedPost, setExpandedPost] = useState(null);

  const posts = [
    {
      title: 'Cascade Style Sheet (CSS)',
      image: '/assets/images/css.jpg',
      author: 'Omega Malanga',
      category: 'Web Design',
      date: '01-Jan-2025',
      comments: '12k',
      shortExcerpt: 'CSS is the language that brings life to web pages by controlling how elements look and feel...',
      fullContent: `
        🌐 Understanding CSS: The Style Behind the Web
        
        When you browse a beautifully designed website, you're not just seeing HTML and functionality—you're seeing the magic of CSS (Cascading Style Sheets). CSS is the language that brings life to web pages by controlling how elements look and feel, from layout to color to animation.
        
        🎨 What is CSS?
        
        CSS is a style sheet language used to describe the presentation of a document written in HTML or XML. While HTML structures the content, CSS defines its appearance—allowing developers to separate content from design.
        
        🧩 Why CSS Matters
        
        -Visual Styling: From fonts and colors to spacing and borders, CSS makes websites visually appealing.
        -Responsive Design: With tools like 'media queries', CSS ensures that websites look great on all screen sizes—whether it's a smartphone, tablet, or desktop.
        -Layout Control: Features like Flexbox and CSS Grid give developers powerful tools to design complex, responsive layouts with minimal code.
        -Reusability and Maintainability: Using CSS classes and external style sheets promotes clean, organized code that's easy to update.
        
        🚀 Modern CSS Features
        
        CSS has evolved significantly. Developers now use:
        
        -Custom Properties (CSS Variables) for cleaner, more dynamic styling.
        -Transitions and Animations for smooth UI interactions.
        -Frameworks like Tailwind CSS and Bootstrap to speed up development with ready-made classes.
        
        CSS is an essential skill for any web developer or designer. Mastering it unlocks the ability to turn plain HTML into polished, interactive, and professional websites. Whether you're tweaking a landing page or building an entire web app, CSS is the key to delivering a stunning user experience.
      `
    },
    {
      title: 'JavaScript',
      image: '/assets/images/js.jpg',
      author: 'Judelyne Atengei',
      category: 'Apps Design',
      date: '01-Jan-2025',
      comments: '10',
      shortExcerpt: 'JavaScript is one of the most powerful programming languages in web development...',
      fullContent: `
        🖥️ Getting to Know JavaScript: The Brain of the Web
        
        JavaScript (JS) is one of the most powerful and widely used programming languages in the world of web development. It brings interactivity and logic to websites, transforming static pages into dynamic, user-friendly experiences.
        
        ⚙️ What is JavaScript?
        
        JavaScript is a high-level, interpreted programming language that runs in the browser. It enables developers to create features like dropdown menus, modal windows, sliders, form validation, animations, and much more—directly in the browser without needing to reload the page.
        
        🔧 Why JavaScript is Essential
        
        -Interactivity: JavaScript responds to user actions like clicks, keystrokes, and mouse movements, creating a smoother user experience.
        -Client-Side Processing: JS reduces server load by handling logic directly in the browser.
        -APIs and Integrations: With JS, you can fetch data from servers using APIs (like REST and GraphQL) via tools like fetch() or axios.
        -DOM Manipulation: JavaScript dynamically updates content, structure, and styles using the Document Object Model (DOM).
        
        🚀 Modern JavaScript Features
        
        Modern JavaScript (often referred to as ES6+) includes powerful features that make coding easier and more efficient:
        
        -Arrow Functions for cleaner, shorter syntax.
        -Let and Const for block-scoped variables.
        -Promises and Async/Await for better asynchronous programming.
        -Modules and Imports for organizing code into reusable pieces.
        
        🌐 JavaScript Beyond the Browser
        
        Thanks to environments like Node.js, JavaScript is no longer limited to the browser. It can now power server-side applications, APIs, desktop apps, and even IoT devices.
        
        In today's tech landscape, JavaScript is a must-know language for any aspiring web developer. Whether you're building small website features or full-scale web applications, JavaScript is the engine that powers modern web interactivity and innovation.
      `
    }
  ];

  const toggleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <section id="blog" className="section section-light" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>From Blog</p>
          <h2>Latest Articles</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.2, duration: 0.4 }}
                >
                  {post.title}
                </motion.h3>
                
                <div className="blog-meta">
                  <span><FaUser /> {post.author}</span>
                  <span><FaCalendarAlt /> {post.date}</span>
                  <span><FaComments /> {post.comments}</span>
                </div>
                
                <motion.div
                  className="blog-text"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.4, duration: 0.4 }}
                >
                  <div className={`blog-excerpt ${expandedPost === index ? 'expanded' : ''}`}>
                    {expandedPost === index ? (
                      <div className="full-content">
                        {post.fullContent.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p>{post.shortExcerpt}</p>
                    )}
                  </div>
                  
                  <motion.button
                    className="btn btn-outline read-more-btn"
                    onClick={() => toggleReadMore(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaAngleRight /> {expandedPost === index ? 'Read Less' : 'Read More'}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

