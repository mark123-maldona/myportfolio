import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: 'HTML', image: '/assets/images/html.jpg', description: 'I have a strong grasp of HTML as the foundational language for building web pages.' },
    { name: 'CSS', image: '/assets/images/css.jpg', description: 'I utilize CSS extensively to transform basic HTML structures into visually engaging, modern interfaces.' },
    { name: 'JavaScript', image: '/assets/images/js.jpg', description: 'With JavaScript, I bring static pages to life by adding interactivity and dynamic functionality.' }
  ];

  return (
    <section id="tech-stack" className="section section-light">
      <div className="container">
        <div className="section-header">
          <p>Tech Stack</p>
          <h2>Technologies I Use</h2>
        </div>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.image} alt={tech.name} />
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

