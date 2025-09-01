import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailjs.js';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // EmailJS configuration
    const { serviceId, templateId, publicKey } = emailConfig;

    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'markkifunye123@gmail.com',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      setMessage('✅ Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('❌ Failed to send message. Please try again or contact me directly at markkifunye123@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's Start a Conversation</h3>
            <p>I'm always excited to work on new projects and collaborate with amazing people. Feel free to reach out!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>Kyobe Lane, Bweyogerere, Uganda</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+256 759 542486</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>markkifunye123@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              {message && (
                <div className={`form-message ${message.includes('✅') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
              >
                <FaPaperPlane /> {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

