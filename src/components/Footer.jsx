import React from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub
} from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id='footer' className="footer">
      <div className="container">
        <div className="row text-center">

          {/* ABOUT */}
          <div className="col-lg-4 mb-4">
            <div className="footer-about">
              <img
                src="/assets/images/Logo.png"
                alt="QuadSync Logo"
                height={60}
                width={60}
                className="mb-3 footer-logo"
              />
              <h4>QuadSync Tech Solutions</h4>
              <p className="mt-3">
                Synchronizing technology, talent, and business growth through
                innovative IT solutions and professional training.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('internship')}>Internships</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
          </div>

          {/* SERVICES */}
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><button onClick={() => scrollToSection('services')}>Data Analyst</button></li>
                <li><button onClick={() => scrollToSection('services')}>Software Development</button></li>
                <li><button onClick={() => scrollToSection('services')}>Business Solutions</button></li>
                <li><button onClick={() => scrollToSection('services')}>IT Consultancy</button></li>
              </ul>
            </div>
          </div>

          {/* CONTACT INFO — SEPARATE */}
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>Contact Info</h5>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>Maharashtra, India</span>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@quadsyntechsolutions.in">
                    info@quadsyntechsolutions.in
                  </a>
                </li>
                <li>
                  <FiPhoneCall />
                  <a href="tel:+917796988650">+91 7796988650</a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdITbmQojk8VoROk-qmApLIkIlF1zkoZ5FH5wxI3d86ChMqNg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-link"
                  >
                    Apply for Internship <FaExternalLinkAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SOCIAL MEDIA — SEPARATE */}
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>Social Media</h5>
              <ul className="contact-list">
                <li>
                  <FaLinkedin />
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <FaInstagram />
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li>
                  <FaYoutube />
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
                <li>
                  <FaGithub />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom text-center">
          <p>&copy; {currentYear} QuadSync Tech Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* CSS — UNCHANGED */}
      <style jsx>{`
        .footer {
          background: #0f172a;
          color: white;
          padding: 40px 0 0;
        }

        .footer-logo {
          display: block;
          margin: 0 auto;
        }

        .footer-about p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
        }

        .footer-links h5 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 10px;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0;
        }

        .footer-links button:hover {
          color: white;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .contact-list a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }

        .contact-list a:hover {
          color: white;
          text-decoration: underline;
        }

        .apply-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: #60a5fa !important;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.2rem 0;
          margin-top: 1.5rem;
        }

        .footer-bottom-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 0;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }

        .footer-link:hover {
          color: white;
          text-decoration: underline;
        }

        /* ADDED ONLY: spacing + font size adjustment */
        .footer-links {
          margin-bottom: 30px;
        }

        /* FORCE SAME LINE SPACING ACROSS ALL COLUMNS */
        .footer-links ul li {
          margin-bottom: 18px;
          line-height: 1.8;
          font-size: 0.85rem;
        }

        .footer-links button,
        .footer-links a {
          font-size: 0.85rem;
          line-height: 1.8;
        }

        .contact-list li {
          margin-bottom: 18px;
          line-height: 1.8;
          font-size: 0.85rem;
        }

                .contact-list li {
          margin-bottom: 18px;
          line-height: 1.8;
          font-size: 0.85rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
