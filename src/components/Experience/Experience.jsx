import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      date: 'June 2025 - Present',
      title: 'Web Developer',
      company: 'Afriq Technologies, Kampala, UG',
      details: [
        'Designed and developed responsive websites using HTML, CSS, JavaScript, and modern frameworks like React and Node.js.',
        'Utilized Visual Studio Code and browser DevTools for efficient coding and debugging.',
        'Managed code using Git and GitHub, with experience in version control and collaborative development.',
        'Employed tools like Postman for API testing and deployed applications through platforms such as Netlify and Vercel.',
        'Built user-friendly interfaces, ensured cross-browser compatibility, and optimized performance for fast load times.'
      ],
      side: 'left'
    },
    {
      date: 'June 2025 - Present',
      title: 'Web Design',
      company: 'Afriq Technologies, Kampala, UG',
      details: [
        'Created visually appealing and user-friendly website layouts using design principles, typography, and color theory.',
        'Designed responsive interfaces with tools like Figma, Adobe XD, and Photoshop, ensuring mobile and desktop compatibility.',
        'Collaborated with developers to turn mockups into functional websites using HTML, CSS, and JavaScript.',
        'Focused on UX/UI best practices to enhance usability and user engagement.',
        'Conducted usability testing and refined designs based on user feedback and analytics.'
      ],
      side: 'right'
    },
    {
      date: 'May 2024 - July 2025',
      title: 'Embedded Systems Developer (Arduino Projects)',
      company: 'Busitema University, Busia, UG',
      details: [
        'Designed and built electronic systems using Arduino boards for automation, sensing, and control applications.',
        'Programmed microcontrollers using C/C++ in the Arduino IDE to interact with sensors, motors, and actuators.',
        'Developed projects such as home automation, temperature monitoring, and robotics using components like ultrasonic sensors, relays, and LCDs.',
        'Integrated serial communication, Wi-Fi modules (ESP8266), and IoT platforms for remote control and data logging.',
        'Debugged hardware and software issues, improved circuit efficiency, and documented project workflows.'
      ],
      side: 'left'
    },
    {
      date: 'May 2024 - July 2025',
      title: 'Electronics Component Identification and Testing',
      company: 'Busitema University, Busia, UG',
      details: [
        'Identified and classified electronic components such as resistors, capacitors, diodes, transistors, and ICs based on color codes, markings, and datasheets.',
        'Used multimeters and component testers to verify functionality and ratings.',
        'Organized components systematically for prototyping and troubleshooting electronic circuits.',
        'Interpreted circuit diagrams and matched components accordingly for assembly and testing.',
        'Gained hands-on experience in preparing component inventories for lab kits and Arduino-based projects.'
      ],
      side: 'right'
    },
    {
      date: 'May 2024 - July 2025',
      title: 'Networking Technician / Network Support',
      company: 'Busitema University, Busia, UG',
      details: [
        'Configured and maintained local area networks (LANs), including routers, switches, and wireless access points.',
        'Managed IP addressing, subnetting, and DHCP settings to optimize network performance.',
        'Troubleshot connectivity issues using tools like ping, traceroute, and network analyzers.',
        'Implemented network security measures such as firewalls, VPNs, and access controls.',
        'Assisted in setting up and monitoring server-client communications and network protocols (TCP/IP, HTTP, FTP).'
      ],
      side: 'left'
    },
    {
      date: 'May 2024 - July 2025',
      title: 'Soldering Technician / Electronics Assembler',
      company: 'Busitema University, Busia, UG',
      details: [
        'Performed precise soldering of electronic components on PCBs, including through-hole and surface-mount devices.',
        'Assembled and repaired circuits ensuring strong electrical connections and minimizing cold joints or shorts.',
        'Used soldering irons, desoldering tools, and flux to maintain clean and efficient work.',
        'Followed safety protocols to prevent damage to components and ensure personal safety.',
        'Tested and inspected soldered joints using magnification tools and multimeters for quality assurance.'
      ],
      side: 'right'
    }
  ];

  return (
    <section id="experience" className="section section-light" ref={ref}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>My Resume</p>
          <h2>Working Experience</h2>
        </div>
        <div className="experience-content">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${exp.side}`}
                style={{ opacity: 1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{exp.date}</div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="timeline-details">
                    {exp.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>
                        • {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

