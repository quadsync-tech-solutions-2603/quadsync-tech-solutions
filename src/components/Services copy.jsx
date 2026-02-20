import React, { useState } from 'react';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'data-analyst',
      icon: 'fas fa-chart-line',
      title: 'Data Analyst',
      description: 'Comprehensive data analysis services using Power BI, Tableau, and advanced analytics tools to transform your data into actionable insights.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Services Include:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> Power BI Dashboard Development</li>
              <li><i class="fas fa-check text-success me-2"></i> Data Cleaning & Preprocessing</li>
              <li><i class="fas fa-check text-success me-2"></i> Statistical Analysis & Reporting</li>
              <li><i class="fas fa-check text-success me-2"></i> Predictive Analytics</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'business-solutions',
      icon: 'fas fa-briefcase',
      title: 'Business Solutions',
      description: 'End-to-end business solutions including process optimization, digital transformation, and strategic planning for sustainable growth.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Our Solutions:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> Digital Transformation Strategy</li>
              <li><i class="fas fa-check text-success me-2"></i> Business Process Optimization</li>
              <li><i class="fas fa-check text-success me-2"></i> Workflow Automation</li>
              <li><i class="fas fa-check text-success me-2"></i> CRM Implementation</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'software-development',
      icon: 'fas fa-code',
      title: 'Software Development',
      description: 'Custom software solutions, web applications, mobile apps, and enterprise systems tailored to your specific business requirements.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Development Services:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> Custom Web Applications</li>
              <li><i class="fas fa-check text-success me-2"></i> Mobile App Development</li>
              <li><i class="fas fa-check text-success me-2"></i> Enterprise Software</li>
              <li><i class="fas fa-check text-success me-2"></i> E-commerce Solutions</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'analytics-dashboard',
      icon: 'fas fa-chart-bar',
      title: 'Business Analytics Dashboard',
      description: 'Custom-built analytics dashboards with real-time data visualization, KPI tracking, and predictive analytics for informed decision-making.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Dashboard Features:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> Real-time Data Visualization</li>
              <li><i class="fas fa-check text-success me-2"></i> Interactive Reports & Charts</li>
              <li><i class="fas fa-check text-success me-2"></i> KPI Monitoring</li>
              <li><i class="fas fa-check text-success me-2"></i> Custom Metrics Tracking</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'report-writing',
      icon: 'fas fa-file-contract',
      title: 'Report Writing Service',
      description: 'Professional business reports, analysis documents, presentations, and technical documentation for stakeholders and decision-makers.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Report Types:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> Business Analysis Reports</li>
              <li><i class="fas fa-check text-success me-2"></i> Financial Reports</li>
              <li><i class="fas fa-check text-success me-2"></i> Market Research Reports</li>
              <li><i class="fas fa-check text-success me-2"></i> Technical Documentation</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'it-consultancy',
      icon: 'fas fa-headset',
      title: 'IT Consultancy Services',
      description: 'Strategic IT consulting, technology roadmap development, digital transformation guidance, and IT infrastructure planning.',
      details: `
        <div class="row">
          <div class="col-md-6">
            <h4>Consultancy Services:</h4>
            <ul class="list-unstyled">
              <li><i class="fas fa-check text-success me-2"></i> IT Strategy & Planning</li>
              <li><i class="fas fa-check text-success me-2"></i> Technology Assessment</li>
              <li><i class="fas fa-check text-success me-2"></i> Digital Transformation Roadmap</li>
              <li><i class="fas fa-check text-success me-2"></i> Software Selection Assistance</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const scrollToContact = () => {
    closeModal();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions and products for your business growth</p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="btn btn-outline-primary mt-3 learn-more-btn"
                  onClick={() => openModal(service)}
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
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <h3>{selectedService.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: selectedService.details }} />
              <div className="mt-4 text-center">
                <button className="btn btn-primary" onClick={scrollToContact}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          background: #f8fafc;
        }
        
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid var(--light-gray);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          width: 70px;
          height: 70px;
          background: var(--gradient);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          color: white;
          font-size: 1.8rem;
        }
        
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--dark);
        }
        
        .service-card p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
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
        }
        
        .modal-content {
          background: white;
          border-radius: 15px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlide 0.3s ease;
        }
        
        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .close-modal {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--danger);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }
        
        .modal-body {
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
          .service-card {
            padding: 1.5rem;
          }
          
          .modal-content {
            max-height: 80vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;