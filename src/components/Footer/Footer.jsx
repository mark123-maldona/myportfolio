import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2>Kifunye Mark</h2>
            <h3>Kyobe Lane, Bweyogerere, Uganda</h3>
            <div className="footer-contact">
              <p>+256 759 542486</p>
              <p>markkifunye123@gmail.com</p>
            </div>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="http://www.youtube.com/@markkifunye-yp4be" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Kifunye Mark. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

