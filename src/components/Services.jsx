import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  
  // Service details from the provided JavaScript code
  const serviceDetails = {
    'data-analyst': {
      title: 'Data Analyst Services',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Services Include:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> Power BI Dashboard Development</li>
                <li><i class="fas fa-check"></i> Data Cleaning & Preprocessing</li>
                <li><i class="fas fa-check"></i> Statistical Analysis & Reporting</li>
                <li><i class="fas fa-check"></i> Predictive Analytics</li>
                <li><i class="fas fa-check"></i> Business Intelligence Solutions</li>
                <li><i class="fas fa-check"></i> Data Visualization</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Tools & Technologies:</h4>
              <ul class="service-features">
                <li><i class="fab fa-microsoft"></i> Power BI</li>
                <li><i class="fas fa-chart-bar"></i> Tableau</li>
                <li><i class="fab fa-python"></i> Python (Pandas, NumPy)</li>
                <li><i class="fas fa-database"></i> SQL</li>
                <li><i class="fas fa-file-excel"></i> Advanced Excel</li>
              </ul>
            </div>
          </div>
          <div class="modal-section delivery-time">
            <h4>Delivery Time:</h4>
            <p>Projects typically completed within 2-4 weeks depending on complexity.</p>
          </div>
        </div>
      `
    },
    'business-solutions': {
      title: 'Business Solutions',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Our Solutions:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> Digital Transformation Strategy</li>
                <li><i class="fas fa-check"></i> Business Process Optimization</li>
                <li><i class="fas fa-check"></i> Workflow Automation</li>
                <li><i class="fas fa-check"></i> CRM Implementation</li>
                <li><i class="fas fa-check"></i> Enterprise Resource Planning</li>
                <li><i class="fas fa-check"></i> Strategic Business Planning</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Benefits:</h4>
              <ul class="service-features">
                <li><i class="fas fa-chart-line"></i> Increased Efficiency</li>
                <li><i class="fas fa-money-bill-wave"></i> Cost Reduction</li>
                <li><i class="fas fa-rocket"></i> Scalable Solutions</li>
                <li><i class="fas fa-shield-alt"></i> Risk Mitigation</li>
                <li><i class="fas fa-users"></i> Improved Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    'software-development': {
      title: 'Software Development',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Development Services:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> Custom Web Applications</li>
                <li><i class="fas fa-check"></i> Mobile App Development</li>
                <li><i class="fas fa-check"></i> Enterprise Software</li>
                <li><i class="fas fa-check"></i> E-commerce Solutions</li>
                <li><i class="fas fa-check"></i> API Development & Integration</li>
                <li><i class="fas fa-check"></i> Legacy System Modernization</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Technologies:</h4>
              <ul class="service-features">
                <li><i class="fab fa-python"></i> Python (Django, Flask)</li>
                <li><i class="fab fa-js-square"></i> JavaScript (React, Node.js)</li>
                <li><i class="fab fa-java"></i> Java (Spring Boot)</li>
                <li><i class="fas fa-database"></i> SQL & NoSQL Databases</li>
                <li><i class="fab fa-android"></i> Android & iOS Development</li>
              </ul>
            </div>
          </div>
          <div class="modal-section">
            <h4>Development Process:</h4>
            <p>We follow Agile methodology with regular updates and client involvement throughout the development cycle.</p>
          </div>
        </div>
      `
    },
    'analytics-dashboard': {
      title: 'Business Analytics Dashboard',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Dashboard Features:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> Real-time Data Visualization</li>
                <li><i class="fas fa-check"></i> Interactive Reports & Charts</li>
                <li><i class="fas fa-check"></i> KPI Monitoring</li>
                <li><i class="fas fa-check"></i> Custom Metrics Tracking</li>
                <li><i class="fas fa-check"></i> Automated Reporting</li>
                <li><i class="fas fa-check"></i> Mobile Responsive Design</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Integration Capabilities:</h4>
              <ul class="service-features">
                <li><i class="fas fa-database"></i> Database Integration</li>
                <li><i class="fas fa-cloud"></i> Cloud Services (AWS, Azure)</li>
                <li><i class="fas fa-exchange-alt"></i> Third-party API Integration</li>
                <li><i class="fas fa-file-excel"></i> Excel/CSV Import</li>
                <li><i class="fas fa-envelope"></i> Automated Email Reports</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    'report-writing': {
      title: 'Report Writing Service',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Report Types:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> Business Analysis Reports</li>
                <li><i class="fas fa-check"></i> Financial Reports</li>
                <li><i class="fas fa-check"></i> Market Research Reports</li>
                <li><i class="fas fa-check"></i> Technical Documentation</li>
                <li><i class="fas fa-check"></i> Project Reports</li>
                <li><i class="fas fa-check"></i> Annual Reports</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Service Features:</h4>
              <ul class="service-features">
                <li><i class="fas fa-clock"></i> 3-7 Days Turnaround</li>
                <li><i class="fas fa-edit"></i> Multiple Revisions</li>
                <li><i class="fas fa-chart-pie"></i> Data Visualization Included</li>
                <li><i class="fas fa-file-word"></i> Multiple Format Options</li>
                <li><i class="fas fa-user-tie"></i> Professional Formatting</li>
              </ul>
            </div>
          </div>
          <div class="modal-section">
            <h4>Perfect For:</h4>
            <p>Startups seeking investor pitches, businesses needing compliance documentation, and companies requiring professional reports for stakeholders.</p>
          </div>
        </div>
      `
    },
    'it-consultancy': {
      title: 'IT Consultancy Services',
      content: `
        <div class="service-modal-content">
          <div class="modal-grid">
            <div class="modal-section">
              <h4>Consultancy Services:</h4>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> IT Strategy & Planning</li>
                <li><i class="fas fa-check"></i> Technology Assessment</li>
                <li><i class="fas fa-check"></i> Digital Transformation Roadmap</li>
                <li><i class="fas fa-check"></i> Software Selection Assistance</li>
                <li><i class="fas fa-check"></i> IT Infrastructure Planning</li>
                <li><i class="fas fa-check"></i> Cybersecurity Assessment</li>
              </ul>
            </div>
            <div class="modal-section">
              <h4>Delivery Models:</h4>
              <ul class="service-features">
                <li><i class="fas fa-briefcase"></i> Project-based Consulting</li>
                <li><i class="fas fa-calendar-alt"></i> Retainer Services</li>
                <li><i class="fas fa-lightbulb"></i> Strategic Workshops</li>
                <li><i class="fas fa-file-contract"></i> Technical Audits</li>
                <li><i class="fas fa-road"></i> Implementation Roadmaps</li>
              </ul>
            </div>
          </div>
          <div class="modal-section">
            <h4>Our Approach:</h4>
            <p>We provide actionable recommendations based on thorough analysis of your business needs, current technology stack, and future growth plans.</p>
          </div>
        </div>
      `
    }
  };

  const services = [
    {
      id: 'data-analyst',
      icon: 'fas fa-chart-line',
      title: 'Data Analyst',
      description: 'Comprehensive data analysis services using Power BI, Tableau, and advanced analytics tools to transform your data into actionable insights.',
    },
    {
      id: 'business-solutions',
      icon: 'fas fa-briefcase',
      title: 'Business Solutions',
      description: 'End-to-end business solutions including process optimization, digital transformation, and strategic planning for sustainable growth.',
    },
    {
      id: 'software-development',
      icon: 'fas fa-code',
      title: 'Software Development',
      description: 'Custom software solutions, web applications, mobile apps, and enterprise systems tailored to your specific business requirements.',
    },
    {
      id: 'analytics-dashboard',
      icon: 'fas fa-chart-bar',
      title: 'Business Analytics Dashboard',
      description: 'Custom-built analytics dashboards with real-time data visualization, KPI tracking, and predictive analytics for informed decision-making.',
    },
    {
      id: 'report-writing',
      icon: 'fas fa-file-contract',
      title: 'Report Writing Service',
      description: 'Professional business reports, analysis documents, presentations, and technical documentation for stakeholders and decision-makers.',
    },
    {
      id: 'it-consultancy',
      icon: 'fas fa-headset',
      title: 'IT Consultancy Services',
      description: 'Strategic IT consulting, technology roadmap development, digital transformation guidance, and IT infrastructure planning.',
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const openModal = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    if (service && serviceDetails[serviceId]) {
      setSelectedService({
        title: service.title,
        content: serviceDetails[serviceId].content,
        fullTitle: serviceDetails[serviceId].title
      });
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToContact = () => {
    closeModal();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalOpen]);

  return (
    <section 
      id="services" 
      className="services-section" 
      ref={servicesRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease-out'
      }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions and products for your business growth</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="col-md-6 col-lg-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.6s ease-out ${0.2 + (index * 0.1)}s`
              }}
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="learn-more-btn"
                  onClick={() => openModal(service.id)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {modalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedService.fullTitle || selectedService.title}</h3>
              <button className="close-modal" onClick={closeModal} aria-label="Close modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div 
              className="modal-body" 
              dangerouslySetInnerHTML={{ __html: selectedService.content }} 
            />
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get Quote
              </button>
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .section-title p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          color: white;
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: #1e293b;
        }
        
        .service-card p {
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.6;
          font-size: 1rem;
        }
        
        .learn-more-btn {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-size: 1rem;
        }
        
        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .modal-header {
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }
        
        .modal-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          padding-right: 3rem;
        }
        
        .close-modal {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: #ef4444;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          transition: all 0.3s ease;
        }
        
        .close-modal:hover {
          background: #dc2626;
          transform: rotate(90deg);
        }
        
        .modal-body {
          padding: 2rem;
        }
        
        /* Service Modal Content Styles */
        .service-modal-content {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .modal-section {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
        }
        
        .modal-section h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #3b82f6;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-features li {
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #475569;
          font-size: 0.95rem;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .service-features li:last-child {
          border-bottom: none;
        }
        
        .service-features li i {
          color: #10b981;
          width: 20px;
          text-align: center;
        }
        
        .service-features li i.fa-check {
          color: #10b981;
        }
        
        .service-features li i.fa-chart-line,
        .service-features li i.fa-money-bill-wave,
        .service-features li i.fa-rocket,
        .service-features li i.fa-shield-alt,
        .service-features li i.fa-users {
          color: #3b82f6;
        }
        
        .service-features li i.fab {
          color: #6b7280;
        }
        
        .delivery-time {
          background: #ecfdf5;
          border-color: #a7f3d0;
        }
        
        .delivery-time h4 {
          border-bottom-color: #10b981;
        }
        
        .modal-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }
        
        .modal-footer .btn {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1rem;
        }
        
        .modal-footer .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
        
        .modal-footer .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }
        
        .modal-footer .btn-secondary {
          background: #f1f5f9;
          color: #475569;
        }
        
        .modal-footer .btn-secondary:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 0;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
          
          .service-card {
            padding: 2rem;
          }
          
          .modal-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-content {
            max-height: 85vh;
            margin: 1rem;
          }
          
          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }
          
          .modal-header h3 {
            font-size: 1.5rem;
            padding-right: 2.5rem;
          }
          
          .close-modal {
            top: 1.5rem;
            right: 1.5rem;
            width: 36px;
            height: 36px;
          }
          
          .modal-body {
            padding: 1.5rem;
          }
          
          .modal-footer {
            padding: 1.5rem;
            flex-direction: column;
          }
          
          .modal-footer .btn {
            width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .section-title h2 {
            font-size: 1.8rem;
          }
          
          .section-title p {
            font-size: 1rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .service-card h3 {
            font-size: 1.3rem;
          }
          
          .learn-more-btn {
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;