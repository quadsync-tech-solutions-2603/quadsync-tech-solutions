import React, { useState, useEffect, useRef } from 'react';

const Internship = () => {
  const [activeDuration, setActiveDuration] = useState('1');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const internshipRef = useRef(null);
  
  // Google Form application link
  const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdITbmQojk8VoROk-qmApLIkIlF1zkoZ5FH5wxI3d86ChMqNg/viewform?usp=header";

  // Program data extracted from PHP HTML
  const programs = {
    '1': [
      {
        id: 1,
        icon: 'fas fa-chart-pie',
        duration: '1 Month',
        title: 'Data Analyst (Power BI)',
        description: 'Master Power BI for data visualization and dashboard creation. Focus only on Power BI - no Excel, no SQL.',
        features: ['Power BI Fundamentals', 'Data Visualization Techniques', 'Dashboard Creation', 'Report Design', 'Interactive Visualizations', 'Project Portfolio'],
        outcomes: ['Certificate', '2 Live Projects']
      },
      {
        id: 2,
        icon: 'fab fa-python',
        duration: '1 Month',
        title: 'Python Development',
        description: 'Learn Django setup and basic Python development. Focus on practical implementation.',
        features: ['Python Basics', 'Django Framework Setup', 'Basic CRUD Operations', 'Simple Web Applications', 'Template System', 'Basic Admin Panel'],
        outcomes: ['Certificate', '2 Live Projects']
      },
      {
        id: 3,
        icon: 'fas fa-laptop-code',
        duration: '1 Month',
        title: 'Web Development',
        description: 'Complete web development with HTML, CSS, PHP and MySQL. Build functional websites.',
        features: ['HTML5 & CSS3', 'PHP Programming', 'MySQL Database', 'Form Handling', 'User Authentication', 'Dynamic Website'],
        outcomes: ['Certificate', '2 Live Projects']
      }
    ],
    '2': [
      {
        id: 4,
        icon: 'fas fa-file-excel',
        duration: '2 Months',
        title: 'Data Analyst',
        description: 'Comprehensive data analysis with Excel, Power BI, and professional report writing skills.',
        features: ['Advanced Excel Formulas', 'Power BI Dashboard Creation', 'Professional Report Writing', 'Data Storytelling', 'Business Insights', 'Executive Presentations'],
        outcomes: ['Certificate', '3 Live Projects']
      },
      {
        id: 5,
        icon: 'fas fa-brain',
        duration: '2 Months',
        title: 'Business Intelligence',
        description: 'Advanced Power BI with professional report writing for business decision making.',
        features: ['Advanced Power BI Features', 'DAX Language', 'Complex Data Models', 'Business Report Writing', 'KPI Dashboards', 'Performance Analytics'],
        outcomes: ['Certificate', '3 Live Projects']
      },
      {
        id: 6,
        icon: 'fab fa-react',
        duration: '2 Months',
        title: 'Web Development',
        description: 'Modern web development with HTML, CSS, and React JS for dynamic applications.',
        features: ['HTML5 & CSS3', 'JavaScript ES6+', 'React JS Fundamentals', 'Component Development', 'State Management', 'API Integration'],
        outcomes: ['Certificate', '3 Live Projects']
      }
    ],
    '3': [
      {
        id: 7,
        icon: 'fas fa-database',
        duration: '3 Months',
        title: 'Data Analyst',
        description: 'Comprehensive data analytics with advanced tools and real-world projects.',
        features: ['Advanced Power BI', 'SQL & NoSQL Databases', 'Python for Data Science', 'Statistical Analysis', 'Machine Learning Basics', 'Industry Projects'],
        outcomes: ['LOR Available', 'Premium Program'],
        premium: true
      },
      {
        id: 8,
        icon: 'fab fa-python',
        duration: '3 Months',
        title: 'Full Stack Python Developer',
        description: 'End-to-end Python web development with Django and modern frameworks.',
        features: ['Django Framework', 'Frontend Integration', 'REST APIs & Microservices', 'Deployment & DevOps', 'Database Design', 'Complete Project Cycle'],
        outcomes: ['LOR Available', 'Premium Program'],
        premium: true
      },
      {
        id: 9,
        icon: 'fab fa-js-square',
        duration: '3 Months',
        title: 'MERN Stack Developer',
        description: 'Complete JavaScript stack development with MongoDB, Express, React, and Node.js.',
        features: ['MongoDB Database', 'Express.js Backend', 'React.js Frontend', 'Node.js Server', 'State Management', 'Full Stack Projects'],
        outcomes: ['LOR Available', 'Premium Program'],
        premium: true
      }
    ]
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation for cards
          document.querySelectorAll('.program-card').forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (internshipRef.current) {
      observer.observe(internshipRef.current);
    }

    return () => {
      if (internshipRef.current) {
        observer.unobserve(internshipRef.current);
      }
    };
  }, []);

  // Form validation
  const validateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (field.type === 'checkbox' && !field.checked) {
        field.classList.add('is-invalid');
        isValid = false;
      } else if (field.tagName === 'SELECT' && !field.value) {
        field.classList.add('is-invalid');
        isValid = false;
      } else if (!field.value.trim() && field.type !== 'checkbox') {
        field.classList.add('is-invalid');
        isValid = false;
      } else if (field.type === 'email' && field.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(field.value.trim())) {
          field.classList.add('is-invalid');
          isValid = false;
        }
      }
    });

    if (isValid) {
      alert('Thank you! Your application has been submitted successfully.');
      form.reset();
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    } else {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
    }
  };

  // Program selection filter
  const filterPrograms = (duration) => {
    const programSelect = document.getElementById('programSelect');
    if (!programSelect) return;

    // Reset and enable all options
    programSelect.querySelectorAll('option').forEach(option => {
      option.disabled = false;
      option.style.display = '';
    });

    // Hide options based on duration
    if (duration === '1 Month') {
      programSelect.querySelectorAll('optgroup[label="2 Month Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
      programSelect.querySelectorAll('optgroup[label="3 Month Professional Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
    } else if (duration === '2 Months') {
      programSelect.querySelectorAll('optgroup[label="1 Month Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
      programSelect.querySelectorAll('optgroup[label="3 Month Professional Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
    } else if (duration === '3 Months') {
      programSelect.querySelectorAll('optgroup[label="1 Month Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
      programSelect.querySelectorAll('optgroup[label="2 Month Programs"] option').forEach(option => {
        option.disabled = true;
        option.style.display = 'none';
      });
    }

    // Reset program selection
    programSelect.value = '';
  };

  return (
    <>
      <section id="internship" className="internship-section" ref={internshipRef}>
        <div className="container">
          <div className="section-title">
            <h2>Internship Programs</h2>
            <p>Launch your tech career with our comprehensive training programs</p>
          </div>
          
          {/* Duration Tabs */}
          <div className="duration-tabs mb-5">
            <button 
              className={`duration-tab ${activeDuration === '1' ? 'active' : ''}`}
              onClick={() => setActiveDuration('1')}
              data-duration="1"
            >
              1 Month Internships
            </button>
            <button 
              className={`duration-tab ${activeDuration === '2' ? 'active' : ''}`}
              onClick={() => setActiveDuration('2')}
              data-duration="2"
            >
              2 Month Internships
            </button>
            <button 
              className={`duration-tab ${activeDuration === '3' ? 'active' : ''}`}
              onClick={() => setActiveDuration('3')}
              data-duration="3"
            >
              3 Month Professional Internships
            </button>
          </div>
          
          {/* 3 Month Premium Header */}
          {activeDuration === '3' && (
            <div className="premium-program-header mb-4">
              <div className="premium-badge">
                <i className="fas fa-crown"></i> Professional Program
              </div>
              <h3 className="text-center mb-3">3-Month Professional Internships</h3>
              <p className="text-center mb-4">Comprehensive training with minimal fees and maximum career benefits</p>
              <div className="program-benefits">
                <div className="benefit-item">
                  <i className="fas fa-rupee-sign"></i>
                  <span>Minimal Training Fees</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-certificate"></i>
                  <span>Evaluation Certificate</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-award"></i>
                  <span>Appreciation Letter</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-file-alt"></i>
                  <span>LOR Based on Performance</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-briefcase"></i>
                  <span>Guaranteed Live Projects</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Program Cards */}
          <div className="programs-grid">
            <div className="row g-4">
              {programs[activeDuration].map((program, index) => (
                <div 
                  key={program.id} 
                  className={`col-md-6 ${activeDuration === '3' ? 'col-lg-4' : 'col-lg-4'}`}
                >
                  <div className={`program-card ${program.premium ? 'premium' : ''}`}>
                    <div className="program-icon">
                      <i className={program.icon}></i>
                    </div>
                    <span className={`duration-badge ${program.premium ? 'premium-bg' : ''}`} data-duration={activeDuration}>
                      {program.duration}
                    </span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    
                    <ul className="program-features">
                      {program.features.map((feature, idx) => (
                        <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                      ))}
                    </ul>
                    
                    <div className="program-footer">
                      <div className={program.premium ? "premium-outcomes" : "program-outcomes"}>
                        {program.outcomes.map((outcome, idx) => (
                          <span key={idx}>
                            <i className={`fas fa-${program.premium ? 'file-contract' : idx === 0 ? 'certificate' : 'briefcase'}`}></i>
                            {outcome}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={applicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100 mt-2"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Program Highlights */}
          <div className="program-highlights mt-5">
            <div className="row text-center">
              <div className="col-6 col-md-3">
                <div>
                  <i className="fas fa-calendar-alt fa-2x text-primary"></i>
                  <h4 className="mt-2">Flexible Duration</h4>
                  <p className="text-muted">1, 2 & 3 Month Programs</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div>
                  <i className="fas fa-certificate fa-2x text-primary"></i>
                  <h4 className="mt-2">Certification</h4>
                  <p className="text-muted">Industry-recognized</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div>
                  <i className="fas fa-project-diagram fa-2x text-primary"></i>
                  <h4 className="mt-2">Live Projects</h4>
                  <p className="text-muted">Real-world experience</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div>
                  <i className="fas fa-users fa-2x text-primary"></i>
                  <h4 className="mt-2">Mentorship</h4>
                  <p className="text-muted">Expert guidance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Form Section */}
          <div id="application-form" className="application-form-container mt-5">
            <div className="application-form">
              <h3>Apply for Internship</h3>
              <form onSubmit={validateForm}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Full Name *" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email Address *" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Phone Number *" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control" required onChange={(e) => filterPrograms(e.target.value)}>
                        <option value="">Select Duration *</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <select className="form-control" id="programSelect" required>
                        <option value="">Select Program *</option>
                        <optgroup label="1 Month Programs">
                          <option value="Data Analyst (Power BI)">Data Analyst (Power BI)</option>
                          <option value="Python Development">Python Development</option>
                          <option value="Web Development">Web Development</option>
                        </optgroup>
                        <optgroup label="2 Month Programs">
                          <option value="Data Analyst">Data Analyst</option>
                          <option value="Business Intelligence">Business Intelligence</option>
                          <option value="Web Development">Web Development</option>
                        </optgroup>
                        <optgroup label="3 Month Professional Programs">
                          <option value="Data Analyst">Data Analyst</option>
                          <option value="Full Stack Python Developer">Full Stack Python Developer</option>
                          <option value="MERN Stack Developer">MERN Stack Developer</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Why are you interested in this program?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="checkbox-group">
                      <div className="form-check">
                        <input 
                          type="checkbox" 
                          className="form-check-input" 
                          id="terms" 
                          required 
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to the terms and conditions *
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="submit-btn">
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary: #2563eb;
          --secondary: #1e40af;
          --accent: #3b82f6;
          --light: #f8fafc;
          --dark: #1e293b;
          --success: #10b981;
          --warning: #f59e0b;
          --danger: #ef4444;
          --gray: #64748b;
          --light-gray: #e2e8f0;
          --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --premium-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --month1-color: #3b82f6;
          --month2-color: #8b5cf6;
          --month3-color: #ec4899;
        }

        .internship-section {
          background: white;
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--dark);
        }
        
        .section-title p {
          color: var(--gray);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .duration-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        
        .duration-tab {
          padding: 1rem 2.5rem;
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .duration-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--gradient);
          transition: all 0.3s ease;
          z-index: -1;
        }
        
        .duration-tab:hover {
          color: white !important;
          border-color: transparent;
        }
        
        .duration-tab[data-duration="1"] {
          border-color: var(--month1-color);
          color: var(--month1-color);
        }
        
        .duration-tab[data-duration="1"]:hover::before {
          background: var(--month1-color);
          left: 0;
        }
        
        .duration-tab[data-duration="1"].active {
          color: white;
          border-color: transparent;
        }
        
        .duration-tab[data-duration="1"].active::before {
          background: var(--month1-color);
          left: 0;
        }
        
        .duration-tab[data-duration="2"] {
          border-color: var(--month2-color);
          color: var(--month2-color);
        }
        
        .duration-tab[data-duration="2"]:hover::before {
          background: var(--month2-color);
          left: 0;
        }
        
        .duration-tab[data-duration="2"].active {
          color: white;
          border-color: transparent;
        }
        
        .duration-tab[data-duration="2"].active::before {
          background: var(--month2-color);
          left: 0;
        }
        
        .duration-tab[data-duration="3"] {
          border-color: var(--month3-color);
          color: var(--month3-color);
        }
        
        .duration-tab[data-duration="3"]:hover::before {
          background: var(--premium-gradient);
          left: 0;
        }
        
        .duration-tab[data-duration="3"]:hover {
          background: var(--premium-gradient);
          border-color: transparent;
        }
        
        .duration-tab[data-duration="3"].active {
          background: var(--premium-gradient);
          color: white;
          border-color: transparent;
        }
        
        .duration-tab[data-duration="3"].active::before {
          background: var(--premium-gradient);
          left: 0;
        }

        .program-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          height: 100%;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.5s ease forwards;
        }
        
        .program-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--primary);
        }
        
        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .duration-tab[data-duration="1"].active ~ .programs-grid .program-card {
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .duration-tab[data-duration="1"].active ~ .programs-grid .program-card:hover {
          border-color: var(--month1-color);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }
        
        .duration-tab[data-duration="1"].active ~ .programs-grid .program-card::before {
          background: var(--month1-color);
        }
        
        .duration-tab[data-duration="2"].active ~ .programs-grid .program-card {
          border-color: rgba(139, 92, 246, 0.2);
        }
        
        .duration-tab[data-duration="2"].active ~ .programs-grid .program-card:hover {
          border-color: var(--month2-color);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
        }
        
        .duration-tab[data-duration="2"].active ~ .programs-grid .program-card::before {
          background: var(--month2-color);
        }
        
        .program-card.premium {
          border-color: rgba(236, 72, 153, 0.3);
          background: white;
        }
        
        .program-card.premium:hover {
          border-color: var(--month3-color);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
        }
        
        .program-card.premium::before {
          background: var(--premium-gradient);
          height: 5px;
        }
        
        .program-icon {
          width: 70px;
          height: 70px;
          background: var(--gradient);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        
        .program-card:hover .program-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .duration-tab[data-duration="1"].active ~ .programs-grid .program-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        
        .duration-tab[data-duration="2"].active ~ .programs-grid .program-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        }
        
        .program-card.premium .program-icon {
          background: var(--premium-gradient);
          box-shadow: 0 10px 20px rgba(245, 87, 108, 0.3);
        }
        
        .duration-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .duration-badge[data-duration="1"] {
          background: var(--month1-color);
        }
        
        .duration-badge[data-duration="2"] {
          background: var(--month2-color);
        }
        
        .duration-badge.premium-bg {
          background: var(--premium-gradient);
        }
        
        .program-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--dark);
          padding-right: 80px;
        }
        
        .program-card > p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          min-height: 60px;
        }
        
        .program-features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 2rem;
        }
        
        .program-features li {
          padding: 0.5rem 0;
          display: flex;
          align-items: flex-start;
          color: var(--dark);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .program-features i {
          color: var(--success);
          margin-right: 12px;
          font-size: 0.9rem;
          min-width: 16px;
          margin-top: 0.2rem;
        }
        
        .program-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--light-gray);
        }
        
        .program-outcomes {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        
        .program-outcomes span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--dark);
          font-weight: 500;
        }
        
        .program-outcomes i {
          color: var(--primary);
          font-size: 1.1rem;
        }
        
        .premium-outcomes {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        
        .premium-outcomes span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #db2777;
          font-weight: 600;
        }
        
        .premium-outcomes i {
          color: #db2777;
        }

        .premium-program-header {
          background: linear-gradient(135deg, #fff5f7 0%, #fef5ff 100%);
          border: 2px solid rgba(236, 72, 153, 0.3);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }
        
        .premium-program-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--premium-gradient);
        }
        
        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--premium-gradient);
          color: white;
          padding: 0.6rem 1.8rem;
          border-radius: 25px;
          font-weight: 700;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(245, 87, 108, 0.3);
        }
        
        .premium-badge i {
          font-size: 1.2rem;
        }
        
        .program-benefits {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 140px;
          padding: 1rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .benefit-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .benefit-item i {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          background: var(--premium-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .benefit-item span {
          font-size: 0.95rem;
          color: var(--dark);
          font-weight: 600;
          line-height: 1.4;
        }

        /* Application Form Styles */
        .application-form-container {
          background: #eae9ec;
          padding: 3.5rem;
          border-radius: 25px;
          margin-top: 4rem;
          border: 2px solid var(--light-gray);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 1;
        }
        
        .application-form {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--light-gray);
        }
        
        .application-form h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #1e293b;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .application-form h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--gradient);
          border-radius: 2px;
        }
        
        .form-group {
          margin-bottom: 0.5rem;
          position: relative;
        }
        
        .form-control {
          padding: 14px 18px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          width: 100%;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #ffffff;
          color: #1e293b;
        }
        
        .form-control:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
          outline: none;
          transform: translateY(-2px);
        }
        
        .form-group textarea.form-control {
          min-height: 50px;
          resize: vertical;
          line-height: 1.5;
          padding: 16px 18px;
        }
        
        .checkbox-group {
          margin: 0.5rem 0;
          padding: 0.5rem 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .form-check {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
        }
        
        .form-check-input {
          width: 20px;
          height: 20px;
          border: 2px solid #cbd5e1;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .form-check-input:checked {
          background: var(--primary);
          border-color: var(--primary);
        }
        
        .form-check-label {
          font-size: 0.95rem;
          color: #475569;
          cursor: pointer;
          margin-bottom: 0;
        }
        
        .form-check-label a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
        }
        
        .form-check-label a:hover {
          text-decoration: underline;
        }
        
        .submit-btn {
          display: block;
          width: 100%;
          padding: 18px;
          background: var(--gradient);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 2rem;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }
        
        .submit-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.7s ease;
        }
        
        .submit-btn:hover::after {
          left: 100%;
        }
        
        .form-control.is-invalid {
          border-color: var(--danger);
        }
        
        .form-control.is-valid {
          border-color: var(--success);
        }

        select.form-control {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
          cursor: pointer;
        }

        /* Program Highlights */
        .program-highlights .col-6 {
          padding: 10px;
        }
        
        .program-highlights .text-center {
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .program-highlights .text-center:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .program-highlights h4 {
          font-size: 1.1rem;
          margin-top: 10px;
          color: var(--dark);
        }
        
        .text-muted {
          color: var(--gray) !important;
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .internship-section {
            padding: 60px 0;
          }
          
          .duration-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .duration-tab {
            width: 100%;
            max-width: 300px;
            padding: 0.8rem 2rem;
          }
          
          .program-benefits {
            gap: 1rem;
          }
          
          .benefit-item {
            min-width: calc(50% - 1rem);
          }
          
          .application-form-container {
            padding: 1.5rem;
            margin-top: 2rem;
          }
          
          .application-form {
            padding: 1.5rem;
          }
          
          .form-group {
            margin-bottom: 1.5rem;
          }
          
          .form-control {
            padding: 12px 16px;
          }
          
          .submit-btn {
            padding: 16px;
            font-size: 1rem;
          }
          
          .program-outcomes, .premium-outcomes {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .program-outcomes span, .premium-outcomes span {
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .section-title h2 {
            font-size: 2rem;
          }
          
          .section-title p {
            font-size: 1rem;
          }
          
          .benefit-item {
            min-width: 100%;
          }
          
          .program-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .application-form-container {
            padding: 1rem;
          }
          
          .application-form {
            padding: 1rem;
          }
          
          .form-group {
            margin-bottom: 1.2rem;
          }
          
          .checkbox-group {
            padding: 1rem;
            margin: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default Internship;