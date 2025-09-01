import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaLaptopCode, FaMobile, FaApple } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FaLaptop />,
      title: 'Web Design',
      description: 'Web design is the process of creating the visual look, layout, and usability of a website. It combines aesthetic principles with technical skills to ensure that websites are not only beautiful but also functional, user-friendly, and aligned with a brand or purpose.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Web development is the process of building and maintaining websites and web applications. Unlike web design, which focuses on how a site looks and feels, web development is about how it functions. It involves writing code, integrating databases, optimizing performance, and ensuring interactivity.'
    },
    {
      icon: <FaMobile />,
      title: 'Apps Design',
      description: 'App design is the process of creating the look, feel, and user experience (UX) of a mobile or desktop application. It involves both UI (User Interface) and UX (User Experience) design to ensure the app is visually appealing, intuitive, and functional.'
    },
    {
      icon: <FaApple />,
      title: 'Apps Development',
      description: 'App development is the process of creating software applications that run on various platforms such as mobile devices, desktops, or the web. It involves a mix of planning, coding, designing, testing, and deploying the app to end users.'
    }
  ];

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>What I Do</p>
          <h2>Awesome Quality Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

