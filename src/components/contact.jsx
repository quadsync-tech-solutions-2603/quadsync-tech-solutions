import React, { useState } from 'react';

const ContactInfo = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    inquiry_type: '',
    message: ''
  });

  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '',
    program: '',
    why: ''
  });

  const [activeForm, setActiveForm] = useState('contact'); // 'contact' or 'application'

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Contact form submitted! (In a real app, this would send data to contact.php)');
    // In a real app: fetch('contact.php', { method: 'POST', body: new FormData(e.target) })
    setContactForm({
      name: '',
      email: '',
      subject: '',
      inquiry_type: '',
      message: ''
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! (In a real app, this would send data to application.php)');
    // In a real app: fetch('application.php', { method: 'POST', body: new FormData(e.target) })
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      duration: '',
      program: '',
      why: ''
    });
  };

  const contactDetails = {
    address: 'Chhatrapati Sambhajinagar, Maharashtra, India',
    email: 'info@quadsynctechsolutions.in',
    phone: '+91-7796988650',
    social: {
      linkedin: 'https://www.linkedin.com/company/quadsync-tech-solutions',
      whatsapp: 'https://wa.me/7796988650',
      instagram: 'https://www.instagram.com/quadsynctechsolutions/'
    }
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch for IT services, product inquiries, or training programs</p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info-card">
              <h3 className="mb-4">Get In Touch</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5>Location</h5>
                  <p>{contactDetails.address}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <p>{contactDetails.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>{contactDetails.phone}</p>
                </div>
              </div>
              
              <div className="social-icons mt-4">
                <a href={contactDetails.social.linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href={contactDetails.social.whatsapp} target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <a href={contactDetails.social.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Form Selection Tabs */}
          <div className="col-lg-8">
            <div className="form-tabs mb-4">
              <button 
                className={`form-tab ${activeForm === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveForm('contact')}
              >
                <i className="fas fa-envelope me-2"></i>
                Contact Form
              </button>
              <button 
                className={`form-tab ${activeForm === 'application' ? 'active' : ''}`}
                onClick={() => setActiveForm('application')}
              >
                <i className="fas fa-file-alt me-2"></i>
                Application Form
              </button>
            </div>
            
            {/* Contact Form */}
            {activeForm === 'contact' && (
              <div className="contact-form-card">
                <h3 className="mb-4">Send us a Message</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject *"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <select
                      className="form-control"
                      name="inquiry_type"
                      value={contactForm.inquiry_type}
                      onChange={handleContactChange}
                      required
                    >
                      <option value="" disabled>Select Inquiry Type *</option>
                      <option value="Services">Services</option>
                      <option value="Internship">Internship Program</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message *"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            )}
            
            {/* Application Form */}
            {activeForm === 'application' && (
              <div className="application-form-card">
                <h3 className="mb-4">Apply for Internship</h3>
                <form onSubmit={handleApplicationSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name *"
                        name="name"
                        value={applicationForm.name}
                        onChange={handleApplicationChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address *"
                        name="email"
                        value={applicationForm.email}
                        onChange={handleApplicationChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number *"
                        name="phone"
                        value={applicationForm.phone}
                        onChange={handleApplicationChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-control"
                        name="duration"
                        value={applicationForm.duration}
                        onChange={handleApplicationChange}
                        required
                      >
                        <option value="" disabled>Select Duration *</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <select
                      className="form-control"
                      name="program"
                      value={applicationForm.program}
                      onChange={handleApplicationChange}
                      required
                    >
                      <option value="" disabled>Select Program *</option>
                      <optgroup label="1 Month Programs">
                        <option value="Data Analyst (Power BI)">Data Analyst (Power BI)</option>
                        <option value="Python Development">Python Development</option>
                        <option value="Web Development">Web Development</option>
                      </optgroup>
                      <optgroup label="2 Month Programs">
                        <option value="Data Analyst (Excel + Power BI)">Data Analyst (Excel + Power BI)</option>
                        <option value="Business Intelligence">Business Intelligence</option>
                        <option value="Web Development (React)">Web Development (React)</option>
                      </optgroup>
                      <optgroup label="3 Month Programs">
                        <option value="Data Analyst Professional">Data Analyst Professional</option>
                        <option value="Full Stack Python">Full Stack Python</option>
                        <option value="Full Stack Java">Full Stack Java</option>
                        <option value="MERN Stack">MERN Stack</option>
                      </optgroup>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Why are you interested in this program?"
                      name="why"
                      value={applicationForm.why}
                      onChange={handleApplicationChange}
                    ></textarea>
                  </div>
                  
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the terms and conditions *
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane me-2"></i>
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
        }
        
        .contact-section .section-title h2 {
          color: white;
        }
        
        .contact-section .section-title p {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .contact-info-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 2rem;
          border-radius: 15px;
          height: 100%;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-size: 1.2rem;
          color: white;
        }
        
        .contact-item h5 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: white;
          font-weight: 600;
        }
        
        .contact-item p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0;
        }
        
        .social-icons a {
          color: white;
          opacity: 0.8;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .social-icons a:hover {
          opacity: 1;
          transform: translateY(-3px);
        }
        
        .form-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .form-tab {
          flex: 1;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .form-tab.active {
          background: var(--gradient);
          border-color: transparent;
        }
        
        .contact-form-card,
        .application-form-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 2rem;
          border-radius: 15px;
        }
        
        .contact-form-card h3,
        .application-form-card h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .form-control {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 8px;
        }
        
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .form-control:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--primary);
          color: white;
          box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
        }
        
        select.form-control {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='rgba(255,255,255,0.6)' d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 16px 12px;
          padding-right: 2.5rem;
        }
        
        .form-check-input {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .form-check-input:checked {
          background-color: var(--primary);
          border-color: var(--primary);
        }
        
        .form-check-label {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .btn-primary {
          padding: 0.75rem 2rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .form-tabs {
            flex-direction: column;
          }
          
          .contact-info-card,
          .contact-form-card,
          .application-form-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactInfo;

<a
  href={APPLY_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary w-100 mt-2"
></a>