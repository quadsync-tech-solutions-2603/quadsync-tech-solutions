import React, { useState } from 'react';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../assets/images/Logo.png" alt="QuadSync Tech Solutions Logo" height="40" />
          QuadSync Tech Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('internship')}>Internships</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('footer')}>Contact</button>
            </li>
            <li className="nav-item ms-2">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdITbmQojk8VoROk-qmApLIkIlF1zkoZ5FH5wxI3d86ChMqNg/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;