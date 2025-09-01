import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Experience from './components/Experience/Experience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Blog from './components/Blog/Blog.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Portfolio />
          <TechStack />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
