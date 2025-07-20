import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Shield, Lock, Bug } from 'lucide-react';

const Hero = ({ data }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const roles = data?.roles || ['CYBERSECURITY_EXPERT', 'FULL_STACK_DEVELOPER', 'SECURITY_RESEARCHER'];

  useEffect(() => {
    const typeText = () => {
      if (typing) {
        if (currentText.length < roles[currentIndex].length) {
          setCurrentText(roles[currentIndex].substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    };

    const timer = setTimeout(typeText, typing ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, typing, roles]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="mono-text body-medium text-muted">HELLO_WORLD, I'M</span>
          </div>
          
          <h1 className="hero-name">
            <span className="display-huge">JAYANTH</span>
            <span className="display-huge brand-text">TATINENI</span>
          </h1>
          
          <div className="hero-role">
            <span className="display-medium mono-bold">
              {currentText}
              <span className="typing-cursor">|</span>
            </span>
          </div>
          
          <p className="hero-description mono-text body-large">
            {data?.description || 'Protecting digital assets through innovative security solutions and robust development practices.'}
          </p>
          
          <div className="hero-stats">
            <div className="stat-item interactive-element">
              <Shield size={20} />
              <span className="mono-text body-small">{data?.stats?.experience || '5+'} YEARS_EXPERIENCE</span>
            </div>
            <div className="stat-item interactive-element">
              <Lock size={20} />
              <span className="mono-text body-small">{data?.stats?.projects || '50+'} SECURITY_AUDITS</span>
            </div>
            <div className="stat-item interactive-element">
              <Bug size={20} />
              <span className="mono-text body-small">{data?.stats?.vulnerabilities || '200+'} BUGS_FOUND</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button 
              className="btn-primary mono-medium interactive-element"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW_PROJECTS
            </button>
            <button 
              className="btn-secondary mono-medium interactive-element"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              GET_IN_TOUCH
            </button>
          </div>
          
          <div className="hero-social">
            <a 
              href={data?.social?.github || '#'} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href={data?.social?.linkedin || '#'} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={data?.social?.twitter || '#'} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="security-matrix">
            <div className="matrix-line">{'> INITIALIZING_SECURITY_PROTOCOLS...'}</div>
            <div className="matrix-line">{'> LOADING_THREAT_DETECTION...'}</div>
            <div className="matrix-line">{'> SCANNING_VULNERABILITIES...'}</div>
            <div className="matrix-line">{'> SYSTEM_STATUS: SECURE'}</div>
            <div className="matrix-line brand-text">{'> ACCESS_GRANTED'}</div>
          </div>
        </div>
      </div>
      
      <button className="scroll-indicator" onClick={scrollToNextSection}>
        <ChevronDown size={24} className="bounce" />
        <span className="pixelated-text body-small">SCROLL_DOWN</span>
      </button>
    </section>
  );
};

export default Hero;