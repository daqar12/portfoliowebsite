import React from 'react';
import './style.css';

const Counter = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf';
    link.download = 'Mohamed_DeeQ_CV.pdf';
    link.click();
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Mohamed DeeQ</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <h1>Hello, I'm <span className="highlight">Mohamed DeeQ</span></h1>
          <h2>Full-Stack Developer & Digital Marketer</h2>
          <p>Building digital solutions that drive business growth</p>
          <button className="cta-button">Get In Touch</button>
        </div>
        <div className="home-image">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Digital Marketing" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
            <div className="service-card">
            <div className="service-img-container">
                <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Full-Stack Development" 
                loading="lazy"
                />
            </div>
            <h3>Full-Stack Development</h3>
            <p>
                Complete web solutions with React, Node.js, and modern frameworks.
                Responsive, scalable applications tailored to your needs.
            </p>
            <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
            </div>
            </div>
            
            <div className="service-card">
            <div className="service-img-container">
                <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Mobile App Development" 
                loading="lazy"
                />
            </div>
            <h3>Mobile App Development</h3>
            <p>
                Cross-platform mobile apps with React Native or Flutter.
                Engaging user experiences with native performance.
            </p>
            <div className="tech-stack">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Firebase</span>
                <span>iOS/Android</span>
            </div>
            </div>
            
            <div className="service-card">
            <div className="service-img-container">
                <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Digital Marketing" 
                loading="lazy"
                />
            </div>
            <h3>Digital Marketing</h3>
            <p>
                Comprehensive marketing strategies including SEO,
                social media, and content marketing to grow your business.
            </p>
            <div className="tech-stack">
                <span>SEO</span>
                <span>Social Media</span>
                <span>Google Ads</span>
                <span>Analytics</span>
            </div>
            </div>
        </div>
        </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a full-stack developer and digital marketing specialist with 5+ years 
              of experience creating impactful digital solutions.
            </p>
            <p>
              My unique combination of technical development skills and marketing 
              expertise allows me to build solutions that not only function flawlessly 
              but also drive real business results.
            </p>
            <button 
              className="cv-button"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Mohamed DeeQ at work" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: contact@mohameddeeq.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="social-links">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mohamed DeeQ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Counter;