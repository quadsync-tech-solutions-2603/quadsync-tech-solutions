import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home" data-aos="fade-in">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1>Synchronizing <span>Innovations</span> with Success !!</h1>
              <p className="lead">
                Comprehensive IT solutions, custom product development, and professional training programs 
                designed to accelerate your digital transformation journey.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary me-3" onClick={() => scrollToSection('services')}>
                  Our Services
                </button>
                <button className="btn btn-outline-light" onClick={() => scrollToSection('internship')}>
                  Internship Programs
                </button>
              </div>
              <div className="hero-badges">
                <span className="badge">Data Analytics</span>
                <span className="badge">Software Development</span>
                <span className="badge">Business Solutions</span>
                <span className="badge">IT Consultancy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: linear-gradient(
          rgba(10, 14, 30, 0.85),
          rgba(5, 8, 18, 0.95)
          ),
          url('../assets/images/Hero.jpg') center center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
          padding: 70px 0 100px;
        }
        
        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .hero h1 span {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero p.lead {
          font-size: 1.25rem;
          opacity: 0.95;
          margin-bottom: 2rem;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .hero-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        
        .hero-badges .badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .btn-primary, .btn-outline-light {
            width: 100%;
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero p.lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;