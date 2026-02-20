import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Internship from './components/Internship';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS on component mount
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else if (navbar) {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Internship />
      <Footer />
    </div>
  );
}

export default App;